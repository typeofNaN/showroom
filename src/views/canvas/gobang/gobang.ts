type Role = 1 | 2

type GobangOption = {
  role: Role
  canvas: HTMLCanvasElement | null
  gobangStyle: {
    padding: number
    count: number
  }
}

export class Gobang {
  private gobang: HTMLCanvasElement | null = null
  private context: CanvasRenderingContext2D | null = null

  private options: GobangOption = {
    role: 1,
    canvas: null,
    gobangStyle: {
      padding: 0,
      count: 0
    }
  }

  private role: Role = 1

  private win = false

  private history: any[] = []

  private currentStep = 0

  private gobangStyle = {
    padding: 30,
    count: 16
  }

  private lattice = {
    width: 36,
    height: 36
  }

  private checkerboard: number[][] = []

  constructor(options: GobangOption) {
    this.options = options
    this.resetAndInit()
  }

  // 初始化
  resetAndInit() {
    const { options } = this

    // 角色 => 1黑旗子 2白旗
    this.role = options.role || this.role || 1

    // 是否已分出胜负
    this.win = false

    // 走棋记录
    this.history = []

    // 当前步
    this.currentStep = 0

    // 初始化棋局
    this.gobang = null
    this.gobang = options.canvas as HTMLCanvasElement
    this.gobang.width = 600
    this.gobang.height = 600
    this.context = this.gobang.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D
    this.context.strokeStyle = '#aaa'
    this.context.lineWidth = 1

    // 清空
    this.gobang.onclick = null
    this.context.fillStyle = '#ddd'
    this.context.beginPath()
    this.context.fillRect(0, 0, this.gobang.clientWidth, this.gobang.clientHeight)
    this.context.closePath()

    // 棋盘样式
    this.gobangStyle = Object.assign({
      padding: 30,
      count: 15
    }, options.gobangStyle || {})

    // 棋盘元素
    this.lattice = {
      width: (this.gobang.clientWidth - this.gobangStyle.padding * 2) / this.gobangStyle.count,
      height: (this.gobang.clientHeight - this.gobangStyle.padding * 2) / this.gobangStyle.count
    }

    // 初始化
    this.drawChessboard()
    this.listenDownChessman()
    this.initChessboardMatrix()
  }

  // 棋盘矩阵
  initChessboardMatrix() {
    const checkerboard: number[][] = []
    for (let x = 0; x < this.gobangStyle.count + 1; x++) {
      checkerboard[x] = []
      for (let y = 0; y < this.gobangStyle.count + 1; y++) {
        checkerboard[x][y] = 0
      }
    }
    this.checkerboard = checkerboard
  }

  // 刻画棋盘
  drawChessboard() {
    const { gobangStyle, context, lattice, gobang } = this
    // 棋盘网格
    for (let i = 0; i <= gobangStyle.count; i++) {
      ; (context as CanvasRenderingContext2D).moveTo(gobangStyle.padding + i * lattice.width, gobangStyle.padding)
        ; (context as CanvasRenderingContext2D).lineTo(gobangStyle.padding + i * lattice.width, (gobang as HTMLCanvasElement).clientWidth - gobangStyle.padding)
        ; (context as CanvasRenderingContext2D).stroke()
        ; (context as CanvasRenderingContext2D).moveTo(gobangStyle.padding, gobangStyle.padding + i * lattice.height)
        ; (context as CanvasRenderingContext2D).lineTo((gobang as HTMLCanvasElement).clientHeight - gobangStyle.padding, gobangStyle.padding + i * lattice.height)
        ; (context as CanvasRenderingContext2D).stroke()
    }
    // 刻画标记点
    ; (context as CanvasRenderingContext2D).fillStyle = '#000'
      ;[{
        x: (gobang as HTMLCanvasElement).clientWidth / 2,
        y: (gobang as HTMLCanvasElement).clientHeight / 2
      }, {
        x: gobangStyle.padding + 4 * lattice.width,
        y: gobangStyle.padding + 4 * lattice.height
      }, {
        x: gobangStyle.padding + (gobangStyle.count - 4) * lattice.width,
        y: gobangStyle.padding + 4 * lattice.height
      }, {
        x: gobangStyle.padding + 4 * lattice.width,
        y: gobangStyle.padding + (gobangStyle.count - 4) * lattice.height
      }, {
        x: gobangStyle.padding + (gobangStyle.count - 4) * lattice.width,
        y: gobangStyle.padding + (gobangStyle.count - 4) * lattice.height
      }].forEach(sign => {
        ; (context as CanvasRenderingContext2D).beginPath()
          ; (context as CanvasRenderingContext2D).arc(sign.x, sign.y, lattice.width * 0.1, 0, 2 * Math.PI)
          ; (context as CanvasRenderingContext2D).closePath()
          ; (context as CanvasRenderingContext2D).fill()
      })
  }

  // 刻画棋子
  drawChessman(x: number, y: number, isBlack: boolean) {
    const { gobangStyle, context, lattice } = this
      ; (context as CanvasRenderingContext2D).fillStyle = isBlack ? '#000' : '#fff'
      ; (context as CanvasRenderingContext2D).beginPath()
      ; (context as CanvasRenderingContext2D).arc(
        gobangStyle.padding + x * lattice.width,
        gobangStyle.padding + y * lattice.height,
        lattice.width * 0.4, 0, 2 * Math.PI
      )
      ; (context as CanvasRenderingContext2D).closePath()
      ; (context as CanvasRenderingContext2D).fill()

    // 每次落子结束都要判断输赢
    setTimeout(() => {
      this.checkReferee(x, y, isBlack ? 1 : 2)
    }, 0)
  }

  // 落子
  listenDownChessman(isBlack = false) {
    (this.gobang as HTMLCanvasElement).onclick = event => {
      let { offsetX: x, offsetY: y } = event
      x = Math.floor((x - this.gobangStyle.padding / 2) / this.lattice.width)
      y = Math.floor((y - this.gobangStyle.padding / 2) / this.lattice.height)

      // 空的棋位才可落子
      const effectiveBoard = !!this.checkerboard[x]
      if (effectiveBoard &&
        this.checkerboard[x][y] !== undefined &&
        Object.is(this.checkerboard[x][y], 0)) {

        // 落子后，更新矩阵，切换角色，并记录
        this.checkerboard[x][y] = this.role
        this.drawChessman(x, y, Object.is(this.role, 1))

        // 落子完毕后，有可能是悔棋之后落子的，这种情况下就该重置历史记录
        this.history.length = this.currentStep
        this.history.push({
          x,
          y,
          role: this.role,
          snap: (this.context as CanvasRenderingContext2D).getImageData(0, 0, (this.gobang as HTMLCanvasElement).clientWidth, (this.gobang as HTMLCanvasElement).clientHeight)
        })

        // 保存坐标，角色，快照
        this.currentStep++
        this.role = Object.is(this.role, 1) ? 2 : 1
      }
    }
  }

  // 判断输赢
  checkReferee(x: number, y: number, role: Role) {
    if ((x == undefined) || (y == undefined) || (role == undefined)) return

    // 连杀分数
    let countContinuous = 0

    // 所在矩阵数据
    const XContinuous = this.checkerboard.map(x => x[y])
    const YContinuous = this.checkerboard[x]
    const S1Continuous: any[] = []
    const S2Continuous: any[] = []

    this.checkerboard.forEach((_y, i) => {

      // 左斜线
      const S1Item = _y[y - (x - i)]
      if (S1Item !== undefined) {
        S1Continuous.push(S1Item)
      }

      // 右斜线
      const S2Item = _y[y + (x - i)]
      if (S2Item !== undefined) {
        S2Continuous.push(S2Item)
      }
    })

      // 当前落棋点所在的X轴/Y轴/交叉斜轴，只要有能连起来的5个子的角色即有胜者
      ;[XContinuous, YContinuous, S1Continuous, S2Continuous].forEach(axis => {
        if (axis.some((x, i) => axis[i] !== 0 &&
          axis[i - 2] === axis[i - 1] &&
          axis[i - 1] === axis[i] &&
          axis[i] === axis[i + 1] &&
          axis[i + 1] === axis[i + 2])) {
          countContinuous++
        }
      })

    // 如果赢了，则解绑事件
    if (countContinuous) {
      (this.gobang as HTMLCanvasElement).onclick = null
      this.win = true
      window.$message?.success((role == 1 ? '黑' : '白') + '子胜，' + countContinuous + '杀！')
    }
  }

  // 悔棋
  regretChess() {
    // 找到最后一次的记录
    if (this.history.length && !this.win) {
      const prev = this.history[this.currentStep - 2]
      const _prev = this.history[this.currentStep - 1]

      // 回滚UI，并更新矩阵
      if (prev && prev.snap) {
        (this.context as CanvasRenderingContext2D).putImageData(prev.snap, 0, 0)
        this.checkerboard[_prev.x][_prev.y] = 0
        this.currentStep--
      }
    }
  }

  // 撤销悔棋
  revokedRegretChess() {
    const next = this.history[this.currentStep]
    if (next && next.snap) {
      (this.context as CanvasRenderingContext2D).putImageData(next.snap, 0, 0)
      this.checkerboard[next.x][next.y] = next.role
      this.currentStep++
    }
  }
}