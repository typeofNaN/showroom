import{bJ as $,E as k,I as m,F as l,G as r,l as x,$ as y,K as f,c9 as C,d as b,R as B,x as h,a8 as M,bc as u,bd as v,bj as w,bh as g}from"./index-2edb3f54.js";function I(i=!1){const{bool:o,setTrue:s,setFalse:t}=$(i);return{loading:o,startLoading:s,endLoading:t}}const z=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[m("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[m("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[l("line",[r("left",{width:"28px"})])]),r("title-position-right",[l("line",[r("right",{width:"28px"})])]),r("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),m("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[l("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),P=Object.assign(Object.assign({},f.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),N=x({name:"Divider",props:P,setup(i){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=y(i),t=f("Divider","-divider",z,C,i,o),d=b(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:a,textColor:c,fontWeight:p}}=t.value;return{"--n-bezier":e,"--n-color":a,"--n-text-color":c,"--n-font-weight":p}}),n=s?B("divider",void 0,d,i):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:d,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{$slots:o,titlePlacement:s,vertical:t,dashed:d,cssVars:n,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),h("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:t,[`${e}-divider--no-title`]:!o.default,[`${e}-divider--dashed`]:d,[`${e}-divider--title-position-${s}`]:o.default&&s}],style:n},t?null:h("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!t&&o.default?h(M,null,h("div",{class:`${e}-divider__title`},this.$slots),h("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),R={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},T=w("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),E=[T];function L(i,o){return u(),v("svg",R,[...E])}const V={name:"mdi-white-balance-sunny",render:L},D={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},j=w("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),F=[j];function H(i,o){return u(),v("svg",D,[...F])}const O={name:"mdi-moon-waning-crescent",render:H},W=x({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1},customizeTransition:{type:Boolean}},emits:["update:dark"],setup(i,{emit:o}){const s=i,t=b({get(){return s.dark},set(n){o("update:dark",n)}});async function d(n){const e=n.clientX,a=n.clientY;if(!s.customizeTransition||!document.startViewTransition){t.value=!t.value;return}const c=Math.hypot(Math.max(e,innerWidth-e),Math.max(a,innerHeight-a));await document.startViewTransition(()=>{t.value=!t.value}).ready;const _=[`circle(0px at ${e}px ${a}px)`,`circle(${c}px at ${e}px ${a}px)`];document.documentElement.animate({clipPath:t.value?_:[..._].reverse()},{duration:300,easing:"ease-in",pseudoElement:t.value?"::view-transition-new(root)":"::view-transition-old(root)"})}return(n,e)=>{const a=O,c=V;return u(),v("div",{class:"flex-center text-18px cursor-pointer",onClick:d},[t.value?(u(),g(a,{key:0})):(u(),g(c,{key:1}))])}}});export{W as _,N as a,V as b,O as c,I as u};
