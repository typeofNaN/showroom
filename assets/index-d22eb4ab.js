import{l as f,b as h,m as p,be as u,bf as m,bl as i,bM as x,bN as b}from"./index-b55ed649.js";import{_ as v}from"./plugin-vueexport-helper-c27b6911.js";const M=s=>(x("data-v-dfce7775"),s=s(),b(),s),I={class:"h-full"},g={class:"h-full bg-#9af0f3 rounded-8px container-box"},w=M(()=>i("div",{class:"white-circle"},null,-1)),y={class:"h-full relative"},P=f({__name:"index",setup(s){const _=h();return p(()=>{const t=_.value,l=t.parentNode,e=t.getContext("2d");t.width=l.offsetWidth,t.height=l.offsetHeight,e.translate(t.width/2,t.height),e.scale(1,-1),r([0,0],16,130,90);function r(a,o,n,c){if(o<6&&Math.random()<.3)return;if(o<1.5){e.beginPath(),e.arc(a[0],a[1],Math.random()*6,0,2*Math.PI),e.fillStyle="pink",e.fill();return}const d=[a[0]+n*Math.cos(c*Math.PI/180),a[1]+n*Math.sin(c*Math.PI/180)];e.beginPath(),e.moveTo(a[0],a[1]),e.lineTo(d[0],d[1]),e.strokeStyle="#333",e.lineCap="round",e.lineWidth=o,e.stroke(),r(d,o*.8,n*.8,c+Math.random()*36),r(d,o*.8,n*.8,c-Math.random()*36)}}),(t,l)=>(u(),m("div",I,[i("div",g,[w,i("div",y,[i("canvas",{ref_key:"canvasRef",ref:_},null,512)])])]))}});const C=v(P,[["__scopeId","data-v-dfce7775"]]);export{C as default};