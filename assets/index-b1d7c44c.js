import{E as y,I as O,H as f,G as m,F as M,l as L,$ as z,a9 as F,Q as A,a0 as K,x as Q,c8 as X,b as x,bm as i,m as Y,bc as J,bd as Z,bj as P,bn as o,bi as r,bl as _,bo as T,bk as G,bF as ee,ay as te}from"./index-045e2827.js";import{_ as ae,a as oe}from"./Col-5e299eaa.js";import{_ as ne}from"./Input-db64ca75.js";import{_ as le,a as re}from"./FormItem-8d81e882.js";import"./format-length-c9d165c6.js";const t="0!important",V="-1px!important";function g(n){return m(n+"-type",[f("& +",[y("button",{},[m(n+"-type",[M("border",{borderLeftWidth:t}),M("state-border",{left:V})])])])])}function h(n){return m(n+"-type",[f("& +",[y("button",[m(n+"-type",[M("border",{borderTopWidth:t}),M("state-border",{top:V})])])])])}const se=y("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[O("vertical",{flexDirection:"row"},[O("rtl",[y("button",[f("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),f("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),f("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),g("default"),m("ghost",[g("primary"),g("info"),g("success"),g("warning"),g("error")])])])]),m("vertical",{flexDirection:"column"},[y("button",[f("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),f("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),f("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),h("default"),m("ghost",[h("primary"),h("info"),h("success"),h("warning"),h("error")])])])]),ie={size:{type:String,default:void 0},vertical:Boolean},ce=L({name:"ButtonGroup",props:ie,setup(n){const{mergedClsPrefixRef:p,mergedRtlRef:b}=z(n);return F("-button-group",se,p),A(X,n),{rtlEnabled:K("ButtonGroup",b,p),mergedClsPrefix:p}},render(){const{mergedClsPrefix:n}=this;return Q("div",{class:[`${n}-button-group`,this.rtlEnabled&&`${n}-button-group--rtl`,this.vertical&&`${n}-button-group--vertical`],role:"group"},this.$slots)}}),de={class:"h-full"},ue={class:"h-full bg-#fff rounded-8px"},fe={class:"h-full flex-center"},me={class:"h-full flex-center"},ve=L({__name:"index",setup(n){const p=x(),b=x(),c=x({companyName:"某某测试有限公司",sealName:"测试专用章"}),D=x({companyName:{required:!0,message:i("page.canvas.drawOfficialSeal.companyNameValidTip"),trigger:["input","blur"]},sealName:{required:!0,message:i("page.canvas.drawOfficialSeal.sealNameValidTip"),trigger:["input","blur"]}});Y(()=>{R()});function R(){const l=b.value,e=l.getContext("2d");l.width=250,l.height=250;const u=l.width/2,s=l.height/2;e.lineWidth=5,e.strokeStyle="#f00",e.beginPath(),e.arc(u,s,110,0,Math.PI*2),e.stroke(),N(e,u,s,30,"#f00",0),e.font="20px Helvetica",e.textBaseline="middle",e.textAlign="center",e.lineWidth=1,e.fillStyle="#f00",e.fillText(c.value.sealName,u,s+65),e.translate(u,s),e.font="24px Helvetica";const d=c.value.companyName.length,$=4*Math.PI/(3*(d-1)),k=c.value.companyName.split("");let w="";for(let a=0;a<d;a++)w=k[a],a==0?e.rotate(5*Math.PI/6):e.rotate($),e.save(),e.translate(90,0),e.rotate(Math.PI/2),e.fillText(w,0,5),e.restore();function N(a,v,H,B,U,j){a.save(),a.fillStyle=U,a.translate(v,H),a.rotate(Math.PI+j),a.beginPath();let C=Math.sin(0),I=Math.cos(0);const E=Math.PI/5*4;for(let S=0;S<5;S++)C=Math.sin(S*E),I=Math.cos(S*E),a.lineTo(C*B,I*B);a.closePath(),a.stroke(),a.fill(),a.restore()}}async function W(){var l;await((l=p.value)==null?void 0:l.validate()),R()}function q(){var l,e;try{const s=b.value.toDataURL("image/png"),d=document.createElement("a");d.download="seal.png",d.href=s,d.click(),(l=window.$message)==null||l.success(i("common.download.success"))}catch{(e=window.$message)==null||e.error(i("common.download.fail"))}}return(l,e)=>{const u=ne,s=le,d=ee,$=te,k=ce,w=re,N=ae,a=oe;return J(),Z("div",de,[P("div",ue,[o(a,{class:"h-full"},{default:r(()=>[o(N,{span:12},{default:r(()=>[P("div",fe,[o(w,{ref_key:"formRef",ref:p,model:c.value,rules:D.value,"label-placement":"left","label-width":"140px","require-mark-placement":"left"},{default:r(()=>[o(s,{label:_(i)("page.canvas.drawOfficialSeal.companyNameLabel"),path:"companyName"},{default:r(()=>[o(u,{value:c.value.companyName,"onUpdate:value":e[0]||(e[0]=v=>c.value.companyName=v),placeholder:_(i)("page.canvas.drawOfficialSeal.companyNamePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(s,{label:_(i)("page.canvas.drawOfficialSeal.sealNameLabel"),path:"sealName"},{default:r(()=>[o(u,{value:c.value.sealName,"onUpdate:value":e[1]||(e[1]=v=>c.value.sealName=v),placeholder:_(i)("page.canvas.drawOfficialSeal.sealNamePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(s,{label:" "},{default:r(()=>[o(k,null,{default:r(()=>[o($,{type:"primary",onClick:W},{icon:r(()=>[o(d,{icon:"mingcute:seal-line"})]),default:r(()=>[T(" "+G(_(i)("page.canvas.drawOfficialSeal.createSeal")),1)]),_:1}),o($,{type:"warning",onClick:q},{icon:r(()=>[o(d,{icon:"material-symbols:download"})]),default:r(()=>[T(" "+G(_(i)("page.canvas.drawOfficialSeal.downloadSeal")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1}),o(N,{span:12},{default:r(()=>[P("div",me,[P("canvas",{ref_key:"canvasRef",ref:b},null,512)])]),_:1})]),_:1})])])}}});export{ve as default};
