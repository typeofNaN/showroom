<template>
  <div class="flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <n-card title="Github代码数统计分析" :bordered="false" class="h-full">
      <n-row class="h-full">
        <n-col :span="8">
          <div class="flex-center h-full gap-20px">
            <n-input v-model:value="username" placeholder="输入Github用户名" clearable />
            <n-button type="primary" @click="search">查询</n-button>
          </div>
        </n-col>
        <n-col :span="16">
          <div class="flex-center h-full">
            <div ref="chartRef" class="w-500px h-500px" />
          </div>
        </n-col>
      </n-row>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useEcharts } from '@/hooks'
import { GithubApi } from '@/service'

const username = ref('')

const { domRef: chartRef, updateOptions } = useEcharts(() => ({}), { onRender() { } })

async function search() {
  const name = username.value.trim()
  if (!name) {
    return
  }
  window.$message?.info('查询中...')
  const { data: repoNames } = await GithubApi.getPublicRepo(name)
  if (repoNames) {
    const languages = await Promise.all(
      repoNames.map(async (repoName: string) => {
        const { data } = await GithubApi.getRepoLanguage(name, repoName)
        return data
      })
    )
    const langData = languages.reduce((vote, current) => {
      Object.keys(current).forEach(language => {
        vote[language] = vote[language]
          ? vote[language] + current[language]
          : current[language]
      })
      return vote
    }, {})

    window.$message?.success('查询成功！')
    updateOptions(() => ({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: 'GitHub',
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: Object.keys(langData).map(item => ({ name: item, value: langData[item] }))
        }
      ]
    }))
  }
}

</script>