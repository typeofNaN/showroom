import{i as kl,a as _o,r as Sl,v as It,b as L,w as Pe,c as zl,d as k,o as Gt,e as hr,h as Rl,f as $l,g as ct,j as Pl,k as ot,l as q,u as un,m as ut,n as Il,p as Tl,q as Ae,s as tt,t as Ze,x as s,y as pt,V as io,z as dt,A as Tt,B as Ln,C as b,D as T,E as B,F as Ke,G as we,H as Ml,I as $e,J as Fl,K as se,L as Xe,N as Mt,M as He,T as Bt,O as N,P as je,Q as uo,R as he,S as Bl,U as Rt,W as Ee,X as qe,Y as vr,Z as Ro,_ as ao,$ as $o,a0 as Al,a1 as ze,a2 as fn,a3 as Hn,a4 as hn,a5 as rt,a6 as fe,a7 as El,a8 as wt,a9 as Ol,aa as Re,ab as Dl,ac as Nl,ad as Ll,ae as Po,af as pr,ag as Hl,ah as br,ai as mr,aj as xt,ak as st,al as yt,am as $t,an as ht,ao as Ut,ap as Pt,aq as lo,ar as Jo,as as en,at as tn,au as vn,av as Io,aw as Vl,ax as gr,ay as _t,az as Co,aA as gt,aB as Ul,aC as jl,aD as Kl,aE as pn,aF as xr,aG as yr,aH as Wl,aI as Gl,aJ as xo,aK as bn,aL as ql,aM as Xl,aN as To,aO as Yl,aP as Zl,aQ as Ql,aR as Jl,aS as ei,aT as wr,aU as ti,aV as yo,aW as on,aX as oi,aY as ni,aZ as ri,a_ as li,a$ as Vn,b0 as ii,b1 as mn,b2 as ai,b3 as si,b4 as Un,b5 as No,b6 as ci,b7 as di,b8 as ui,b9 as fi,ba as lt,bb as Ie,bc as hi,bd as vi,be as K,bf as de,bg as We,bh as _r,bi as pi,bj as ae,bk as X,bl as le,bm as De,bn as f,bo as be,bp as O,bq as nt,br as bi,bs as At,bt as fo,bu as ho,bv as Ft,bw as nn,bx as Qe,by as gn,bz as vt,bA as Cr,bB as mi,bC as jn,bD as Kn,bE as xn,bF as gi,bG as xi,bH as yi,bI as wi,bJ as _i,bK as kr,bL as yn,bM as Ci,bN as ki,bO as Si,bP as zi,bQ as Ri,bR as $i,bS as Pi}from"./index-4202d234.js";import{c as wn,a as jt,b as Sr,i as _n,d as Ii,N as zr,u as Kt,V as Cn,e as kn,f as Sn,g as ko,r as Ti,p as Rr,_ as zn,o as Mi}from"./Tooltip-871eecf6.js";import{f as so}from"./format-length-c9d165c6.js";import{u as Mo,a as Je}from"./use-locale-1febc35a.js";import{B as Fi,C as Bi,_ as Ai}from"./clipboard-0affdebc.js";import{_ as Et}from"./plugin-vueexport-helper-c27b6911.js";import{N as Ei,_ as $r,a as Oi,u as Di,b as qt,c as Ni,d as Li}from"./dark-mode-switch.vuevuetypescriptsetuptruelang-bbdc1062.js";/* empty css                                                   */import{g as Hi,_ as Xt}from"./Space-1d451aa8.js";import{_ as Vi}from"./GradientText-84284e6b.js";var Ui=/\s/;function ji(e){for(var t=e.length;t--&&Ui.test(e.charAt(t)););return t}var Ki=/^\s+/;function Wi(e){return e&&e.slice(0,ji(e)+1).replace(Ki,"")}var Wn=0/0,Gi=/^[-+]0x[0-9a-f]+$/i,qi=/^0b[01]+$/i,Xi=/^0o[0-7]+$/i,Yi=parseInt;function Gn(e){if(typeof e=="number")return e;if(kl(e))return Wn;if(_o(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_o(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Wi(e);var o=qi.test(e);return o||Xi.test(e)?Yi(e.slice(2),o?2:8):Gi.test(e)?Wn:+e}var Zi=function(){return Sl.Date.now()};const Lo=Zi;var Qi="Expected a function",Ji=Math.max,ea=Math.min;function ta(e,t,o){var n,r,l,i,a,c,d=0,u=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Qi);t=Gn(t)||0,_o(o)&&(u=!!o.leading,h="maxWait"in o,l=h?Ji(Gn(o.maxWait)||0,t):l,v="trailing"in o?!!o.trailing:v);function g(P){var D=n,$=r;return n=r=void 0,d=P,i=e.apply($,D),i}function p(P){return d=P,a=setTimeout(C,t),u?g(P):i}function w(P){var D=P-c,$=P-d,U=t-D;return h?ea(U,l-$):U}function z(P){var D=P-c,$=P-d;return c===void 0||D>=t||D<0||h&&$>=l}function C(){var P=Lo();if(z(P))return F(P);a=setTimeout(C,w(P))}function F(P){return a=void 0,v&&n?g(P):(n=r=void 0,i)}function H(){a!==void 0&&clearTimeout(a),d=0,n=c=r=a=void 0}function R(){return a===void 0?i:F(Lo())}function x(){var P=Lo(),D=z(P);if(n=arguments,r=this,c=P,D){if(a===void 0)return p(c);if(h)return clearTimeout(a),a=setTimeout(C,t),g(c)}return a===void 0&&(a=setTimeout(C,t)),i}return x.cancel=H,x.flush=R,x}var oa="Expected a function";function Ho(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(oa);return _o(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),ta(e,t,{leading:n,maxWait:t,trailing:r})}function na(e){return e.nodeType===9?null:e.parentNode}function Pr(e){if(e===null)return null;const t=na(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return Pr(t)}function ra(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Wt(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function la(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(o=>{if(o==="")return;const[n,r]=o.split(":");r===void 0?t[""]=n:t[n]=r}),t}function to(e,t){var o;if(e==null)return;const n=la(e);if(t===void 0)return n[""];if(typeof t=="string")return(o=n[t])!==null&&o!==void 0?o:n[""];if(Array.isArray(t)){for(let r=t.length-1;r>=0;--r){const l=t[r];if(l in n)return n[l]}return n[""]}else{let r,l=-1;return Object.keys(n).forEach(i=>{const a=Number(i);!Number.isNaN(a)&&t>=a&&a>=l&&(l=a,r=n[i])}),r}}function Ir(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function wo(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function mt(e,t,o){t/=100,o/=100;let n=(r,l=(r+e/60)%6)=>o-o*t*Math.max(Math.min(l,4-l,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function rn(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),l=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),n&&r/n*100,n*100]}function ln(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),l=1-Math.abs(n+n-r-1),i=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(i<0?i+6:i),l?r/l*100:0,(n+n-r)*50]}function an(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(l,i=(l+e/30)%12)=>o-n*Math.max(Math.min(i-3,9-i,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}function ia(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function aa(e){return t=>{t?e.value=t.$el:e.value=null}}function Vo(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(n=>{n&&n(o)})}}function sa(e){var t;const o=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===It);return!!(o&&o.value===!1)}function ca(e,t,o){if(!t)return e;const n=L(e.value);let r=null;return Pe(e,l=>{r!==null&&window.clearTimeout(r),l===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}const da={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ua(e){return`(min-width: ${e}px)`}const oo={};function fa(e=da){if(!zl)return k(()=>[]);if(typeof window.matchMedia!="function")return k(()=>[]);const t=L({}),o=Object.keys(e),n=(r,l)=>{r.matches?t.value[l]=!0:t.value[l]=!1};return o.forEach(r=>{const l=e[r];let i,a;oo[l]===void 0?(i=window.matchMedia(ua(l)),i.addEventListener?i.addEventListener("change",c=>{a.forEach(d=>{d(c,r)})}):i.addListener&&i.addListener(c=>{a.forEach(d=>{d(c,r)})}),a=new Set,oo[l]={mql:i,cbs:a}):(i=oo[l].mql,a=oo[l].cbs),a.add(n),i.matches&&a.forEach(c=>{c(i,r)})}),Gt(()=>{o.forEach(r=>{const{cbs:l}=oo[e[r]];l.has(n)&&l.delete(n)})}),k(()=>{const{value:r}=t;return o.filter(l=>r[l])})}function ha(e={},t){const o=hr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,l=c=>{switch(c.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(d=>{if(d!==c.key)return;const u=n[d];if(typeof u=="function")u(c);else{const{stop:h=!1,prevent:v=!1}=u;h&&c.stopPropagation(),v&&c.preventDefault(),u.handler(c)}})},i=c=>{switch(c.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==c.key)return;const u=r[d];if(typeof u=="function")u(c);else{const{stop:h=!1,prevent:v=!1}=u;h&&c.stopPropagation(),v&&c.preventDefault(),u.handler(c)}})},a=()=>{(t===void 0||t.value)&&(ot("keydown",document,l),ot("keyup",document,i)),t!==void 0&&Pe(t,c=>{c?(ot("keydown",document,l),ot("keyup",document,i)):(ct("keydown",document,l),ct("keyup",document,i))})};return Rl()?($l(a),Gt(()=>{(t===void 0||t.value)&&(ct("keydown",document,l),ct("keyup",document,i))})):a(),Pl(o)}function qn(e){return e&-e}class va{constructor(t,o){this.l=t,this.min=o;const n=new Array(t+1);for(let r=0;r<t+1;++r)n[r]=0;this.ft=n}add(t,o){if(o===0)return;const{l:n,ft:r}=this;for(t+=1;t<=n;)r[t]+=o,t+=qn(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:o,min:n,l:r}=this;if(t>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=t*n;for(;t>0;)l+=o[t],t-=qn(t);return l}getBound(t){let o=0,n=this.l;for(;n>o;){const r=Math.floor((o+n)/2),l=this.sum(r);if(l>t){n=r;continue}else if(l<t){if(o===r)return this.sum(o+1)<=t?o+1:r;o=r}else return r}return o}}let po;function pa(){return typeof document>"u"?!1:(po===void 0&&("matchMedia"in window?po=window.matchMedia("(pointer:coarse)").matches:po=!1),po)}let Uo;function Xn(){return typeof document>"u"?1:(Uo===void 0&&(Uo="chrome"in window?window.devicePixelRatio:1),Uo)}const ba=jt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[jt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[jt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),ma=q({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=un();ba.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:wn,ssr:t}),ut(()=>{const{defaultScrollIndex:I,defaultScrollKey:S}=e;I!=null?p({index:I}):S!=null&&p({key:S})});let o=!1,n=!1;Il(()=>{if(o=!1,!n){n=!0;return}p({top:h.value,left:u})}),Tl(()=>{o=!0,n||(n=!0)});const r=k(()=>{const I=new Map,{keyField:S}=e;return e.items.forEach((Z,ee)=>{I.set(Z[S],ee)}),I}),l=L(null),i=L(void 0),a=new Map,c=k(()=>{const{items:I,itemSize:S,keyField:Z}=e,ee=new va(I.length,S);return I.forEach((J,M)=>{const Q=J[Z],ne=a.get(Q);ne!==void 0&&ee.add(M,ne)}),ee}),d=L(0);let u=0;const h=L(0),v=Ae(()=>Math.max(c.value.getBound(h.value-tt(e.paddingTop))-1,0)),g=k(()=>{const{value:I}=i;if(I===void 0)return[];const{items:S,itemSize:Z}=e,ee=v.value,J=Math.min(ee+Math.ceil(I/Z+1),S.length-1),M=[];for(let Q=ee;Q<=J;++Q)M.push(S[Q]);return M}),p=(I,S)=>{if(typeof I=="number"){F(I,S,"auto");return}const{left:Z,top:ee,index:J,key:M,position:Q,behavior:ne,debounce:j=!0}=I;if(Z!==void 0||ee!==void 0)F(Z,ee,ne);else if(J!==void 0)C(J,ne,j);else if(M!==void 0){const Y=r.value.get(M);Y!==void 0&&C(Y,ne,j)}else Q==="bottom"?F(0,Number.MAX_SAFE_INTEGER,ne):Q==="top"&&F(0,0,ne)};let w,z=null;function C(I,S,Z){const{value:ee}=c,J=ee.sum(I)+tt(e.paddingTop);if(!Z)l.value.scrollTo({left:0,top:J,behavior:S});else{w=I,z!==null&&window.clearTimeout(z),z=window.setTimeout(()=>{w=void 0,z=null},16);const{scrollTop:M,offsetHeight:Q}=l.value;if(J>M){const ne=ee.get(I);J+ne<=M+Q||l.value.scrollTo({left:0,top:J+ne-Q,behavior:S})}else l.value.scrollTo({left:0,top:J,behavior:S})}}function F(I,S,Z){l.value.scrollTo({left:I,top:S,behavior:Z})}function H(I,S){var Z,ee,J;if(o||e.ignoreItemResize||y(S.target))return;const{value:M}=c,Q=r.value.get(I),ne=M.get(Q),j=(J=(ee=(Z=S.borderBoxSize)===null||Z===void 0?void 0:Z[0])===null||ee===void 0?void 0:ee.blockSize)!==null&&J!==void 0?J:S.contentRect.height;if(j===ne)return;j-e.itemSize===0?a.delete(I):a.set(I,j-e.itemSize);const ie=j-ne;if(ie===0)return;M.add(Q,ie);const ve=l.value;if(ve!=null){if(w===void 0){const Ce=M.sum(Q);ve.scrollTop>Ce&&ve.scrollBy(0,ie)}else if(Q<w)ve.scrollBy(0,ie);else if(Q===w){const Ce=M.sum(Q);j+Ce>ve.scrollTop+ve.offsetHeight&&ve.scrollBy(0,ie)}U()}d.value++}const R=!pa();let x=!1;function P(I){var S;(S=e.onScroll)===null||S===void 0||S.call(e,I),(!R||!x)&&U()}function D(I){var S;if((S=e.onWheel)===null||S===void 0||S.call(e,I),R){const Z=l.value;if(Z!=null){if(I.deltaX===0&&(Z.scrollTop===0&&I.deltaY<=0||Z.scrollTop+Z.offsetHeight>=Z.scrollHeight&&I.deltaY>=0))return;I.preventDefault(),Z.scrollTop+=I.deltaY/Xn(),Z.scrollLeft+=I.deltaX/Xn(),U(),x=!0,Sr(()=>{x=!1})}}}function $(I){if(o||y(I.target)||I.contentRect.height===i.value)return;i.value=I.contentRect.height;const{onResize:S}=e;S!==void 0&&S(I)}function U(){const{value:I}=l;I!=null&&(h.value=I.scrollTop,u=I.scrollLeft)}function y(I){let S=I;for(;S!==null;){if(S.style.display==="none")return!0;S=S.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:k(()=>{const{itemResizable:I}=e,S=Ze(c.value.sum());return d.value,[e.itemsStyle,{boxSizing:"content-box",height:I?"":S,minHeight:I?S:"",paddingTop:Ze(e.paddingTop),paddingBottom:Ze(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(d.value,{transform:`translateY(${Ze(c.value.sum(v.value))})`})),viewportItems:g,listElRef:l,itemsElRef:L(null),scrollTo:p,handleListResize:$,handleListScroll:P,handleListWheel:D,handleItemResize:H}},render(){const{itemResizable:e,keyField:t,keyToIndex:o,visibleItemsTag:n}=this;return s(io,{onResize:this.handleListResize},{default:()=>{var r,l;return s("div",pt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const a=i[t],c=o.get(a),d=this.$slots.default({item:i,index:c})[0];return e?s(io,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>d}):(d.key=a,d)})})]):(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)])}})}}),ga=jt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[jt("&::-webkit-scrollbar",{width:0,height:0})]),xa=q({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const o=un();return ga.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:wn,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var l;(l=e.value)===null||l===void 0||l.scrollTo(...r)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),ft="v-hidden",ya=jt("[v-hidden]",{display:"none!important"}),Yn=q({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=L(null),n=L(null);function r(i){const{value:a}=o,{getCounter:c,getTail:d}=e;let u;if(c!==void 0?u=c():u=n.value,!a||!u)return;u.hasAttribute(ft)&&u.removeAttribute(ft);const{children:h}=a;if(i.showAllItemsBeforeCalculate)for(const H of h)H.hasAttribute(ft)&&H.removeAttribute(ft);const v=a.offsetWidth,g=[],p=t.tail?d==null?void 0:d():null;let w=p?p.offsetWidth:0,z=!1;const C=a.children.length-(t.tail?1:0);for(let H=0;H<C-1;++H){if(H<0)continue;const R=h[H];if(z){R.hasAttribute(ft)||R.setAttribute(ft,"");continue}else R.hasAttribute(ft)&&R.removeAttribute(ft);const x=R.offsetWidth;if(w+=x,g[H]=x,w>v){const{updateCounter:P}=e;for(let D=H;D>=0;--D){const $=C-1-D;P!==void 0?P($):u.textContent=`${$}`;const U=u.offsetWidth;if(w-=g[D],w+U<=v||D===0){z=!0,H=D-1,p&&(H===-1?(p.style.maxWidth=`${v-U}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:y}=e;y&&y($);break}}}}const{onUpdateOverflow:F}=e;z?F!==void 0&&F(!0):(F!==void 0&&F(!1),u.setAttribute(ft,""))}const l=un();return ya.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wn,ssr:l}),ut(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:e}=this;return dt(()=>this.sync({showAllItemsBeforeCalculate:!1})),s("div",{class:"v-overflow",ref:"selfRef"},[Tt(e,"default"),e.counter?e.counter():s("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Tr(e,t){t&&(ut(()=>{const{value:o}=e;o&&Ln.registerHandler(o,t)}),Gt(()=>{const{value:o}=e;o&&Ln.unregisterHandler(o)}))}function Zn(e){return e.nodeName==="#document"}const Mr=q({name:"Add",render(){return s("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),wa=q({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),_a=q({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ca=q({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ka=q({name:"Remove",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Sa=q({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),za=q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Qn(e){return Array.isArray(e)?e:[e]}const sn={STOP:"STOP"};function Fr(e,t){const o=t(e);e.children!==void 0&&o!==sn.STOP&&e.children.forEach(n=>Fr(n,t))}function Ra(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?i=>{i.isLeaf||(n.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||n.push(i.key),l(i.children))};function l(i){i.forEach(r)}return l(e),n}function $a(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function Pa(e){return e.children}function Ia(e){return e.key}function Ta(){return!1}function Ma(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function Fa(e){return e.disabled===!0}function Ba(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function jo(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Ko(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Aa(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function Ea(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Oa(e){return(e==null?void 0:e.type)==="group"}function Da(e){const t=new Map;return e.forEach((o,n)=>{t.set(o.key,n)}),o=>{var n;return(n=t.get(o))!==null&&n!==void 0?n:null}}class Na extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function La(e,t,o,n){return So(t.concat(e),o,n,!1)}function Ha(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let l=r.parent;for(;l!==null&&!(l.disabled||o.has(l.key));)o.add(l.key),l=l.parent}}),o}function Va(e,t,o,n){const r=So(t,o,n,!1),l=So(e,o,n,!0),i=Ha(e,o),a=[];return r.forEach(c=>{(l.has(c)||i.has(c))&&a.push(c)}),a.forEach(c=>r.delete(c)),r}function Wo(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:l,cascade:i,leafOnly:a,checkStrategy:c,allowNotLoaded:d}=e;if(!i)return n!==void 0?{checkedKeys:Aa(o,n),indeterminateKeys:Array.from(l)}:r!==void 0?{checkedKeys:Ea(o,r),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:u}=t;let h;r!==void 0?h=Va(r,o,t,d):n!==void 0?h=La(n,o,t,d):h=So(o,t,d,!1);const v=c==="parent",g=c==="child"||a,p=h,w=new Set,z=Math.max.apply(null,Array.from(u.keys()));for(let C=z;C>=0;C-=1){const F=C===0,H=u.get(C);for(const R of H){if(R.isLeaf)continue;const{key:x,shallowLoaded:P}=R;if(g&&P&&R.children.forEach(y=>{!y.disabled&&!y.isLeaf&&y.shallowLoaded&&p.has(y.key)&&p.delete(y.key)}),R.disabled||!P)continue;let D=!0,$=!1,U=!0;for(const y of R.children){const I=y.key;if(!y.disabled){if(U&&(U=!1),p.has(I))$=!0;else if(w.has(I)){$=!0,D=!1;break}else if(D=!1,$)break}}D&&!U?(v&&R.children.forEach(y=>{!y.disabled&&p.has(y.key)&&p.delete(y.key)}),p.add(x)):$&&w.add(x),F&&g&&p.has(x)&&p.delete(x)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(w)}}function So(e,t,o,n){const{treeNodeMap:r,getChildren:l}=t,i=new Set,a=new Set(e);return e.forEach(c=>{const d=r.get(c);d!==void 0&&Fr(d,u=>{if(u.disabled)return sn.STOP;const{key:h}=u;if(!i.has(h)&&(i.add(h),a.add(h),Ba(u.rawNode,l))){if(n)return sn.STOP;if(!o)throw new Na}})}),a}function Ua(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const l=n.treeNodeMap;let i=e==null?null:(r=l.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return a.treeNode=null,a;for(;i;)!i.ignored&&(t||!i.isGroup)&&a.treeNodePath.push(i),i=i.parent;return a.treeNodePath.reverse(),o||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(c=>c.key),a}function ja(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Ka(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Jn(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Wa:Ka,l={reverse:t==="prev"};let i=!1,a=null;function c(d){if(d!==null){if(d===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!d.disabled||n)&&!d.ignored&&!d.isGroup){a=d;return}if(d.isGroup){const u=Rn(d,l);u!==null?a=u:c(r(d,o))}else{const u=r(d,!1);if(u!==null)c(u);else{const h=Ga(d);h!=null&&h.isGroup?c(r(h,o)):o&&c(r(d,!0))}}}}return c(e),a}function Wa(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Ga(e){return e.parent}function Rn(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,l=o?r-1:0,i=o?-1:r,a=o?-1:1;for(let c=l;c!==i;c+=a){const d=n[c];if(!d.disabled&&!d.ignored)if(d.isGroup){const u=Rn(d,t);if(u!==null)return u}else return d}}return null}const qa={getChild(){return this.ignored?null:Rn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Jn(this,"next",e)},getPrev(e={}){return Jn(this,"prev",e)}};function Xa(e,t){const o=t?new Set(t):void 0,n=[];function r(l){l.forEach(i=>{n.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||o===void 0||o.has(i.key))&&r(i.children)})}return r(e),n}function Ya(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function Br(e,t,o,n,r,l=null,i=0){const a=[];return e.forEach((c,d)=>{var u;const h=Object.create(n);if(h.rawNode=c,h.siblings=a,h.level=i,h.index=d,h.isFirstChild=d===0,h.isLastChild=d+1===e.length,h.parent=l,!h.ignored){const v=r(c);Array.isArray(v)&&(h.children=Br(v,t,o,n,r,h,i+1))}a.push(h),t.set(h.key,h),o.has(i)||o.set(i,[]),(u=o.get(i))===null||u===void 0||u.push(h)}),a}function $n(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:l=Fa,getIgnored:i=Ta,getIsGroup:a=Oa,getKey:c=Ia}=t,d=(o=t.getChildren)!==null&&o!==void 0?o:Pa,u=t.ignoreEmptyChildren?R=>{const x=d(R);return Array.isArray(x)?x.length?x:null:x}:d,h=Object.assign({get key(){return c(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return $a(this.rawNode,u)},get shallowLoaded(){return Ma(this.rawNode,u)},get ignored(){return i(this.rawNode)},contains(R){return Ya(this,R)}},qa),v=Br(e,n,r,h,u);function g(R){if(R==null)return null;const x=n.get(R);return x&&!x.isGroup&&!x.ignored?x:null}function p(R){if(R==null)return null;const x=n.get(R);return x&&!x.ignored?x:null}function w(R,x){const P=p(R);return P?P.getPrev(x):null}function z(R,x){const P=p(R);return P?P.getNext(x):null}function C(R){const x=p(R);return x?x.getParent():null}function F(R){const x=p(R);return x?x.getChild():null}const H={treeNodes:v,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(R){return Xa(v,R)},getNode:g,getPrev:w,getNext:z,getParent:C,getChild:F,getFirstAvailableNode(){return ja(v)},getPath(R,x={}){return Ua(R,x,H)},getCheckedKeys(R,x={}){const{cascade:P=!0,leafOnly:D=!1,checkStrategy:$="all",allowNotLoaded:U=!1}=x;return Wo({checkedKeys:jo(R),indeterminateKeys:Ko(R),cascade:P,leafOnly:D,checkStrategy:$,allowNotLoaded:U},H)},check(R,x,P={}){const{cascade:D=!0,leafOnly:$=!1,checkStrategy:U="all",allowNotLoaded:y=!1}=P;return Wo({checkedKeys:jo(x),indeterminateKeys:Ko(x),keysToCheck:R==null?[]:Qn(R),cascade:D,leafOnly:$,checkStrategy:U,allowNotLoaded:y},H)},uncheck(R,x,P={}){const{cascade:D=!0,leafOnly:$=!1,checkStrategy:U="all",allowNotLoaded:y=!1}=P;return Wo({checkedKeys:jo(x),indeterminateKeys:Ko(x),keysToUncheck:R==null?[]:Qn(R),cascade:D,leafOnly:$,checkStrategy:U,allowNotLoaded:y},H)},getNonLeafKeys(R={}){return Ra(v,R)}};return H}const Za=b("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[T("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[B("+",[T("description",`
 margin-top: 8px;
 `)])]),T("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Qa=Object.assign(Object.assign({},we.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Ja=q({name:"Empty",props:Qa,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=we("Empty","-empty",Za,Ml,e,t),{localeRef:r}=Mo("Empty"),l=$e(Fl,null),i=k(()=>{var u,h,v;return(u=e.description)!==null&&u!==void 0?u:(v=(h=l==null?void 0:l.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||v===void 0?void 0:v.description}),a=k(()=>{var u,h;return((h=(u=l==null?void 0:l.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||h===void 0?void 0:h.renderIcon)||(()=>s(Ca,null))}),c=k(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:h},self:{[se("iconSize",u)]:v,[se("fontSize",u)]:g,textColor:p,iconColor:w,extraTextColor:z}}=n.value;return{"--n-icon-size":v,"--n-font-size":g,"--n-bezier":h,"--n-text-color":p,"--n-icon-color":w,"--n-extra-text-color":z}}),d=o?Xe("empty",k(()=>{let u="";const{size:h}=e;return u+=h[0],u}),c,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:k(()=>i.value||r.value.description),cssVars:o?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),s("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${t}-empty__icon`},e.icon?e.icon():s(Mt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${t}-empty__extra`},e.extra()):null)}});function es(e,t){return s(Bt,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Mt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>s(wa)}):null})}const er=q({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:n,valueSetRef:r,renderLabelRef:l,renderOptionRef:i,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:d,nodePropsRef:u,handleOptionClick:h,handleOptionMouseEnter:v}=$e(_n),g=Ae(()=>{const{value:C}=o;return C?e.tmNode.key===C.key:!1});function p(C){const{tmNode:F}=e;F.disabled||h(C,F)}function w(C){const{tmNode:F}=e;F.disabled||v(C,F)}function z(C){const{tmNode:F}=e,{value:H}=g;F.disabled||H||v(C,F)}return{multiple:n,isGrouped:Ae(()=>{const{tmNode:C}=e,{parent:F}=C;return F&&F.rawNode.type==="group"}),showCheckmark:d,nodeProps:u,isPending:g,isSelected:Ae(()=>{const{value:C}=t,{value:F}=n;if(C===null)return!1;const H=e.tmNode.rawNode[c.value];if(F){const{value:R}=r;return R.has(H)}else return C===H}),labelField:a,renderLabel:l,renderOption:i,handleMouseMove:z,handleMouseEnter:w,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:n,isGrouped:r,showCheckmark:l,nodeProps:i,renderOption:a,renderLabel:c,handleClick:d,handleMouseEnter:u,handleMouseMove:h}=this,v=es(o,e),g=c?[c(t,o),l&&v]:[He(t[this.labelField],t,o),l&&v],p=i==null?void 0:i(t),w=s("div",Object.assign({},p,{class:[`${e}-base-select-option`,t.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:n,[`${e}-base-select-option--show-checkmark`]:l}],style:[(p==null?void 0:p.style)||"",t.style||""],onClick:Vo([d,p==null?void 0:p.onClick]),onMouseenter:Vo([u,p==null?void 0:p.onMouseenter]),onMousemove:Vo([h,p==null?void 0:p.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},g));return t.render?t.render({node:w,option:t,selected:o}):a?a({node:w,option:t,selected:o}):w}}),tr=q({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:n}=$e(_n);return{labelField:o,nodeProps:n,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:n,tmNode:{rawNode:r}}=this,l=n==null?void 0:n(r),i=t?t(r,!1):He(r[this.labelField],r,!1),a=s("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),i);return r.render?r.render({node:a,option:r}):o?o({node:a,option:r,selected:!1}):a}}),ts=b("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[b("scrollbar",`
 max-height: var(--n-height);
 `),b("virtual-list",`
 max-height: var(--n-height);
 `),b("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),b("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),b("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),T("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),b("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),b("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[N("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),B("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),B("&:active",`
 color: var(--n-option-text-color-pressed);
 `),N("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),N("pending",[B("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),N("selected",`
 color: var(--n-option-text-color-active);
 `,[B("&::before",`
 background-color: var(--n-option-color-active);
 `),N("pending",[B("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),N("disabled",`
 cursor: not-allowed;
 `,[je("selected",`
 color: var(--n-option-text-color-disabled);
 `),N("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),T("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[uo({enterScale:"0.5"})])])]),os=q({name:"InternalSelectMenu",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=we("InternalSelectMenu","-internal-select-menu",ts,Bl,e,he(e,"clsPrefix")),o=L(null),n=L(null),r=L(null),l=k(()=>e.treeMate.getFlattenedNodes()),i=k(()=>Da(l.value)),a=L(null);function c(){const{treeMate:j}=e;let Y=null;const{value:ie}=e;ie===null?Y=j.getFirstAvailableNode():(e.multiple?Y=j.getNode((ie||[])[(ie||[]).length-1]):Y=j.getNode(ie),(!Y||Y.disabled)&&(Y=j.getFirstAvailableNode())),I(Y||null)}function d(){const{value:j}=a;j&&!e.treeMate.getNode(j.key)&&(a.value=null)}let u;Pe(()=>e.show,j=>{j?u=Pe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?c():d(),dt(S)):d()},{immediate:!0}):u==null||u()},{immediate:!0}),Gt(()=>{u==null||u()});const h=k(()=>tt(t.value.self[se("optionHeight",e.size)])),v=k(()=>Rt(t.value.self[se("padding",e.size)])),g=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=k(()=>{const j=l.value;return j&&j.length===0});function w(j){const{onToggle:Y}=e;Y&&Y(j)}function z(j){const{onScroll:Y}=e;Y&&Y(j)}function C(j){var Y;(Y=r.value)===null||Y===void 0||Y.sync(),z(j)}function F(){var j;(j=r.value)===null||j===void 0||j.sync()}function H(){const{value:j}=a;return j||null}function R(j,Y){Y.disabled||I(Y,!1)}function x(j,Y){Y.disabled||w(Y)}function P(j){var Y;Wt(j,"action")||(Y=e.onKeyup)===null||Y===void 0||Y.call(e,j)}function D(j){var Y;Wt(j,"action")||(Y=e.onKeydown)===null||Y===void 0||Y.call(e,j)}function $(j){var Y;(Y=e.onMousedown)===null||Y===void 0||Y.call(e,j),!e.focusable&&j.preventDefault()}function U(){const{value:j}=a;j&&I(j.getNext({loop:!0}),!0)}function y(){const{value:j}=a;j&&I(j.getPrev({loop:!0}),!0)}function I(j,Y=!1){a.value=j,Y&&S()}function S(){var j,Y;const ie=a.value;if(!ie)return;const ve=i.value(ie.key);ve!==null&&(e.virtualScroll?(j=n.value)===null||j===void 0||j.scrollTo({index:ve}):(Y=r.value)===null||Y===void 0||Y.scrollTo({index:ve,elSize:h.value}))}function Z(j){var Y,ie;!((Y=o.value)===null||Y===void 0)&&Y.contains(j.target)&&((ie=e.onFocus)===null||ie===void 0||ie.call(e,j))}function ee(j){var Y,ie;!((Y=o.value)===null||Y===void 0)&&Y.contains(j.relatedTarget)||(ie=e.onBlur)===null||ie===void 0||ie.call(e,j)}Ee(_n,{handleOptionMouseEnter:R,handleOptionClick:x,valueSetRef:g,pendingTmNodeRef:a,nodePropsRef:he(e,"nodeProps"),showCheckmarkRef:he(e,"showCheckmark"),multipleRef:he(e,"multiple"),valueRef:he(e,"value"),renderLabelRef:he(e,"renderLabel"),renderOptionRef:he(e,"renderOption"),labelFieldRef:he(e,"labelField"),valueFieldRef:he(e,"valueField")}),Ee(Ii,o),ut(()=>{const{value:j}=r;j&&j.sync()});const J=k(()=>{const{size:j}=e,{common:{cubicBezierEaseInOut:Y},self:{height:ie,borderRadius:ve,color:Ce,groupHeaderTextColor:Me,actionDividerColor:Be,optionTextColorPressed:pe,optionTextColor:ue,optionTextColorDisabled:ke,optionTextColorActive:Te,optionOpacityDisabled:Ve,optionCheckColor:Ue,actionTextColor:et,optionColorPending:Ye,optionColorActive:Ge,loadingColor:Ne,loadingSize:W,optionColorActivePending:_,[se("optionFontSize",j)]:m,[se("optionHeight",j)]:V,[se("optionPadding",j)]:oe}}=t.value;return{"--n-height":ie,"--n-action-divider-color":Be,"--n-action-text-color":et,"--n-bezier":Y,"--n-border-radius":ve,"--n-color":Ce,"--n-option-font-size":m,"--n-group-header-text-color":Me,"--n-option-check-color":Ue,"--n-option-color-pending":Ye,"--n-option-color-active":Ge,"--n-option-color-active-pending":_,"--n-option-height":V,"--n-option-opacity-disabled":Ve,"--n-option-text-color":ue,"--n-option-text-color-active":Te,"--n-option-text-color-disabled":ke,"--n-option-text-color-pressed":pe,"--n-option-padding":oe,"--n-option-padding-left":Rt(oe,"left"),"--n-option-padding-right":Rt(oe,"right"),"--n-loading-color":Ne,"--n-loading-size":W}}),{inlineThemeDisabled:M}=e,Q=M?Xe("internal-select-menu",k(()=>e.size[0]),J,e):void 0,ne={selfRef:o,next:U,prev:y,getPendingTmNode:H};return Tr(o,e.onResize),Object.assign({mergedTheme:t,virtualListRef:n,scrollbarRef:r,itemSize:h,padding:v,flattenedNodes:l,empty:p,virtualListContainer(){const{value:j}=n;return j==null?void 0:j.listElRef},virtualListContent(){const{value:j}=n;return j==null?void 0:j.itemsElRef},doScroll:z,handleFocusin:Z,handleFocusout:ee,handleKeyUp:P,handleKeyDown:D,handleMouseDown:$,handleVirtualListResize:F,handleVirtualListScroll:C,cssVars:M?void 0:J,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},ne)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:n,themeClass:r,onRender:l}=this;return l==null||l(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,r,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(vr,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},ao(e.empty,()=>[s(Ja,{theme:n.peers.Empty,themeOverrides:n.peerOverrides.Empty})])):s(Ro,{ref:"scrollbarRef",theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?s(ma,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?s(tr,{key:i.key,clsPrefix:o,tmNode:i}):i.ignored?null:s(er,{clsPrefix:o,key:i.key,tmNode:i})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?s(tr,{key:i.key,clsPrefix:o,tmNode:i}):s(er,{clsPrefix:o,key:i.key,tmNode:i})))}),qe(e.action,i=>i&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},i),s(za,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ns=e=>{const{textColor2:t,primaryColorHover:o,primaryColorPressed:n,primaryColor:r,infoColor:l,successColor:i,warningColor:a,errorColor:c,baseColor:d,borderColor:u,opacityDisabled:h,tagColor:v,closeIconColor:g,closeIconColorHover:p,closeIconColorPressed:w,borderRadiusSmall:z,fontSizeMini:C,fontSizeTiny:F,fontSizeSmall:H,fontSizeMedium:R,heightMini:x,heightTiny:P,heightSmall:D,heightMedium:$,closeColorHover:U,closeColorPressed:y,buttonColor2Hover:I,buttonColor2Pressed:S,fontWeightStrong:Z}=e;return Object.assign(Object.assign({},Al),{closeBorderRadius:z,heightTiny:x,heightSmall:P,heightMedium:D,heightLarge:$,borderRadius:z,opacityDisabled:h,fontSizeTiny:C,fontSizeSmall:F,fontSizeMedium:H,fontSizeLarge:R,fontWeightStrong:Z,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:I,colorPressedCheckable:S,colorChecked:r,colorCheckedHover:o,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:t,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:g,closeIconColorHover:p,closeIconColorPressed:w,closeColorHover:U,closeColorPressed:y,borderPrimary:`1px solid ${ze(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:ze(r,{alpha:.12}),colorBorderedPrimary:ze(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:ze(r,{alpha:.12}),closeColorPressedPrimary:ze(r,{alpha:.18}),borderInfo:`1px solid ${ze(l,{alpha:.3})}`,textColorInfo:l,colorInfo:ze(l,{alpha:.12}),colorBorderedInfo:ze(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:ze(l,{alpha:.12}),closeColorPressedInfo:ze(l,{alpha:.18}),borderSuccess:`1px solid ${ze(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:ze(i,{alpha:.12}),colorBorderedSuccess:ze(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:ze(i,{alpha:.12}),closeColorPressedSuccess:ze(i,{alpha:.18}),borderWarning:`1px solid ${ze(a,{alpha:.35})}`,textColorWarning:a,colorWarning:ze(a,{alpha:.15}),colorBorderedWarning:ze(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:ze(a,{alpha:.12}),closeColorPressedWarning:ze(a,{alpha:.18}),borderError:`1px solid ${ze(c,{alpha:.23})}`,textColorError:c,colorError:ze(c,{alpha:.1}),colorBorderedError:ze(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:ze(c,{alpha:.12}),closeColorPressedError:ze(c,{alpha:.18})})},rs={name:"Tag",common:$o,self:ns},ls=rs,is={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},as=b("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[N("strong",`
 font-weight: var(--n-font-weight-strong);
 `),T("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),T("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),T("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),T("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),N("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[T("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),T("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),N("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),N("icon, avatar",[N("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),N("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),N("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[je("disabled",[B("&:hover","background-color: var(--n-color-hover-checkable);",[je("checked","color: var(--n-text-color-hover-checkable);")]),B("&:active","background-color: var(--n-color-pressed-checkable);",[je("checked","color: var(--n-text-color-pressed-checkable);")])]),N("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[je("disabled",[B("&:hover","background-color: var(--n-color-checked-hover);"),B("&:active","background-color: var(--n-color-checked-pressed);")])])])]),ss=Object.assign(Object.assign(Object.assign({},we.props),is),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),cs=rt("n-tag"),Go=q({name:"Tag",props:ss,setup(e){const t=L(null),{mergedBorderedRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:l}=Ke(e),i=we("Tag","-tag",as,ls,e,n);Ee(cs,{roundRef:he(e,"round")});function a(g){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:w,onUpdateChecked:z,"onUpdate:checked":C}=e;z&&z(!p),C&&C(!p),w&&w(!p)}}function c(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&fe(p,g)}}const d={setTextContent(g){const{value:p}=t;p&&(p.textContent=g)}},u=fn("Tag",l,n),h=k(()=>{const{type:g,size:p,color:{color:w,textColor:z}={}}=e,{common:{cubicBezierEaseInOut:C},self:{padding:F,closeMargin:H,closeMarginRtl:R,borderRadius:x,opacityDisabled:P,textColorCheckable:D,textColorHoverCheckable:$,textColorPressedCheckable:U,textColorChecked:y,colorCheckable:I,colorHoverCheckable:S,colorPressedCheckable:Z,colorChecked:ee,colorCheckedHover:J,colorCheckedPressed:M,closeBorderRadius:Q,fontWeightStrong:ne,[se("colorBordered",g)]:j,[se("closeSize",p)]:Y,[se("closeIconSize",p)]:ie,[se("fontSize",p)]:ve,[se("height",p)]:Ce,[se("color",g)]:Me,[se("textColor",g)]:Be,[se("border",g)]:pe,[se("closeIconColor",g)]:ue,[se("closeIconColorHover",g)]:ke,[se("closeIconColorPressed",g)]:Te,[se("closeColorHover",g)]:Ve,[se("closeColorPressed",g)]:Ue}}=i.value;return{"--n-font-weight-strong":ne,"--n-avatar-size-override":`calc(${Ce} - 8px)`,"--n-bezier":C,"--n-border-radius":x,"--n-border":pe,"--n-close-icon-size":ie,"--n-close-color-pressed":Ue,"--n-close-color-hover":Ve,"--n-close-border-radius":Q,"--n-close-icon-color":ue,"--n-close-icon-color-hover":ke,"--n-close-icon-color-pressed":Te,"--n-close-icon-color-disabled":ue,"--n-close-margin":H,"--n-close-margin-rtl":R,"--n-close-size":Y,"--n-color":w||(o.value?j:Me),"--n-color-checkable":I,"--n-color-checked":ee,"--n-color-checked-hover":J,"--n-color-checked-pressed":M,"--n-color-hover-checkable":S,"--n-color-pressed-checkable":Z,"--n-font-size":ve,"--n-height":Ce,"--n-opacity-disabled":P,"--n-padding":F,"--n-text-color":z||Be,"--n-text-color-checkable":D,"--n-text-color-checked":y,"--n-text-color-hover-checkable":$,"--n-text-color-pressed-checkable":U}}),v=r?Xe("tag",k(()=>{let g="";const{type:p,size:w,color:{color:z,textColor:C}={}}=e;return g+=p[0],g+=w[0],z&&(g+=`a${Hn(z)}`),C&&(g+=`b${Hn(C)}`),o.value&&(g+="c"),g}),h,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:u,mergedClsPrefix:n,contentRef:t,mergedBordered:o,handleClick:a,handleCloseClick:c,cssVars:r?void 0:h,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:n,closable:r,color:{borderColor:l}={},round:i,onRender:a,$slots:c}=this;a==null||a();const d=qe(c.avatar,h=>h&&s("div",{class:`${o}-tag__avatar`},h)),u=qe(c.icon,h=>h&&s("div",{class:`${o}-tag__icon`},h));return s("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:n,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:d,[`${o}-tag--icon`]:u,[`${o}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||d,s("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&r?s(hn,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?s("div",{class:`${o}-tag__border`,style:{borderColor:l}}):null)}}),ds=B([b("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[b("base-loading",`
 color: var(--n-loading-color);
 `),b("base-selection-tags","min-height: var(--n-height);"),T("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),T("state-border",`
 z-index: 1;
 border-color: #0000;
 `),b("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),b("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[T("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),b("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[T("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),b("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[b("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[T("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T("render-label",`
 color: var(--n-text-color);
 `)]),je("disabled",[B("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),N("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),N("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),b("base-selection-label","background-color: var(--n-color-active);"),b("base-selection-tags","background-color: var(--n-color-active);")])]),N("disabled","cursor: not-allowed;",[T("arrow",`
 color: var(--n-arrow-color-disabled);
 `),b("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T("render-label",`
 color: var(--n-text-color-disabled);
 `)]),b("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),b("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),b("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),T("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>N(`${e}-status`,[T("state-border",`border: var(--n-border-${e});`),je("disabled",[B("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),N("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),b("base-selection-label",`background-color: var(--n-color-active-${e});`),b("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),N("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),b("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),b("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[B("&:last-child","padding-right: 0;"),b("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[T("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),us=q({name:"InternalSelection",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=L(null),o=L(null),n=L(null),r=L(null),l=L(null),i=L(null),a=L(null),c=L(null),d=L(null),u=L(null),h=L(!1),v=L(!1),g=L(!1),p=we("InternalSelection","-internal-selection",ds,El,e,he(e,"clsPrefix")),w=k(()=>e.clearable&&!e.disabled&&(g.value||e.active)),z=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):He(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=k(()=>{const E=e.selectedOption;if(E)return E[e.labelField]}),F=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function H(){var E;const{value:G}=t;if(G){const{value:re}=o;re&&(re.style.width=`${G.offsetWidth}px`,e.maxTagCount!=="responsive"&&((E=d.value)===null||E===void 0||E.sync()))}}function R(){const{value:E}=u;E&&(E.style.display="none")}function x(){const{value:E}=u;E&&(E.style.display="inline-block")}Pe(he(e,"active"),E=>{E||R()}),Pe(he(e,"pattern"),()=>{e.multiple&&dt(H)});function P(E){const{onFocus:G}=e;G&&G(E)}function D(E){const{onBlur:G}=e;G&&G(E)}function $(E){const{onDeleteOption:G}=e;G&&G(E)}function U(E){const{onClear:G}=e;G&&G(E)}function y(E){const{onPatternInput:G}=e;G&&G(E)}function I(E){var G;(!E.relatedTarget||!(!((G=n.value)===null||G===void 0)&&G.contains(E.relatedTarget)))&&P(E)}function S(E){var G;!((G=n.value)===null||G===void 0)&&G.contains(E.relatedTarget)||D(E)}function Z(E){U(E)}function ee(){g.value=!0}function J(){g.value=!1}function M(E){!e.active||!e.filterable||E.target!==o.value&&E.preventDefault()}function Q(E){$(E)}function ne(E){if(E.key==="Backspace"&&!j.value&&!e.pattern.length){const{selectedOptions:G}=e;G!=null&&G.length&&Q(G[G.length-1])}}const j=L(!1);let Y=null;function ie(E){const{value:G}=t;if(G){const re=E.target.value;G.textContent=re,H()}e.ignoreComposition&&j.value?Y=E:y(E)}function ve(){j.value=!0}function Ce(){j.value=!1,e.ignoreComposition&&y(Y),Y=null}function Me(E){var G;v.value=!0,(G=e.onPatternFocus)===null||G===void 0||G.call(e,E)}function Be(E){var G;v.value=!1,(G=e.onPatternBlur)===null||G===void 0||G.call(e,E)}function pe(){var E,G;if(e.filterable)v.value=!1,(E=i.value)===null||E===void 0||E.blur(),(G=o.value)===null||G===void 0||G.blur();else if(e.multiple){const{value:re}=r;re==null||re.blur()}else{const{value:re}=l;re==null||re.blur()}}function ue(){var E,G,re;e.filterable?(v.value=!1,(E=i.value)===null||E===void 0||E.focus()):e.multiple?(G=r.value)===null||G===void 0||G.focus():(re=l.value)===null||re===void 0||re.focus()}function ke(){const{value:E}=o;E&&(x(),E.focus())}function Te(){const{value:E}=o;E&&E.blur()}function Ve(E){const{value:G}=a;G&&G.setTextContent(`+${E}`)}function Ue(){const{value:E}=c;return E}function et(){return o.value}let Ye=null;function Ge(){Ye!==null&&window.clearTimeout(Ye)}function Ne(){e.disabled||e.active||(Ge(),Ye=window.setTimeout(()=>{F.value&&(h.value=!0)},100))}function W(){Ge()}function _(E){E||(Ge(),h.value=!1)}Pe(F,E=>{E||(h.value=!1)}),ut(()=>{wt(()=>{const E=i.value;E&&(E.tabIndex=e.disabled||v.value?-1:0)})}),Tr(n,e.onResize);const{inlineThemeDisabled:m}=e,V=k(()=>{const{size:E}=e,{common:{cubicBezierEaseInOut:G},self:{borderRadius:re,color:Se,placeholderColor:_e,textColor:Le,paddingSingle:it,paddingMultiple:Ct,caretColor:Ot,colorDisabled:Dt,textColorDisabled:Nt,placeholderColorDisabled:Qt,colorActive:Jt,boxShadowFocus:Lt,boxShadowActive:at,boxShadowHover:A,border:te,borderFocus:ce,borderHover:ye,borderActive:me,arrowColor:xe,arrowColorDisabled:ge,loadingColor:Oe,colorActiveWarning:Ht,boxShadowFocusWarning:eo,boxShadowActiveWarning:Eo,boxShadowHoverWarning:Oo,borderWarning:Do,borderFocusWarning:il,borderHoverWarning:al,borderActiveWarning:sl,colorActiveError:cl,boxShadowFocusError:dl,boxShadowActiveError:ul,boxShadowHoverError:fl,borderError:hl,borderFocusError:vl,borderHoverError:pl,borderActiveError:bl,clearColor:ml,clearColorHover:gl,clearColorPressed:xl,clearSize:yl,arrowSize:wl,[se("height",E)]:_l,[se("fontSize",E)]:Cl}}=p.value;return{"--n-bezier":G,"--n-border":te,"--n-border-active":me,"--n-border-focus":ce,"--n-border-hover":ye,"--n-border-radius":re,"--n-box-shadow-active":at,"--n-box-shadow-focus":Lt,"--n-box-shadow-hover":A,"--n-caret-color":Ot,"--n-color":Se,"--n-color-active":Jt,"--n-color-disabled":Dt,"--n-font-size":Cl,"--n-height":_l,"--n-padding-single":it,"--n-padding-multiple":Ct,"--n-placeholder-color":_e,"--n-placeholder-color-disabled":Qt,"--n-text-color":Le,"--n-text-color-disabled":Nt,"--n-arrow-color":xe,"--n-arrow-color-disabled":ge,"--n-loading-color":Oe,"--n-color-active-warning":Ht,"--n-box-shadow-focus-warning":eo,"--n-box-shadow-active-warning":Eo,"--n-box-shadow-hover-warning":Oo,"--n-border-warning":Do,"--n-border-focus-warning":il,"--n-border-hover-warning":al,"--n-border-active-warning":sl,"--n-color-active-error":cl,"--n-box-shadow-focus-error":dl,"--n-box-shadow-active-error":ul,"--n-box-shadow-hover-error":fl,"--n-border-error":hl,"--n-border-focus-error":vl,"--n-border-hover-error":pl,"--n-border-active-error":bl,"--n-clear-size":yl,"--n-clear-color":ml,"--n-clear-color-hover":gl,"--n-clear-color-pressed":xl,"--n-arrow-size":wl}}),oe=m?Xe("internal-selection",k(()=>e.size[0]),V,e):void 0;return{mergedTheme:p,mergedClearable:w,patternInputFocused:v,filterablePlaceholder:z,label:C,selected:F,showTagsPanel:h,isComposing:j,counterRef:a,counterWrapperRef:c,patternInputMirrorRef:t,patternInputRef:o,selfRef:n,multipleElRef:r,singleElRef:l,patternInputWrapperRef:i,overflowRef:d,inputTagElRef:u,handleMouseDown:M,handleFocusin:I,handleClear:Z,handleMouseEnter:ee,handleMouseLeave:J,handleDeleteOption:Q,handlePatternKeyDown:ne,handlePatternInputInput:ie,handlePatternInputBlur:Be,handlePatternInputFocus:Me,handleMouseEnterCounter:Ne,handleMouseLeaveCounter:W,handleFocusout:S,handleCompositionEnd:Ce,handleCompositionStart:ve,onPopoverUpdateShow:_,focus:ue,focusInput:ke,blur:pe,blurInput:Te,updateCounter:Ve,getCounter:Ue,getTail:et,renderLabel:e.renderLabel,cssVars:m?void 0:V,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{status:e,multiple:t,size:o,disabled:n,filterable:r,maxTagCount:l,bordered:i,clsPrefix:a,onRender:c,renderTag:d,renderLabel:u}=this;c==null||c();const h=l==="responsive",v=typeof l=="number",g=h||v,p=s(Ol,null,{default:()=>s(Ei,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,C;return(C=(z=this.$slots).arrow)===null||C===void 0?void 0:C.call(z)}})});let w;if(t){const{labelField:z}=this,C=S=>s("div",{class:`${a}-base-selection-tag-wrapper`,key:S.value},d?d({option:S,handleClose:()=>{this.handleDeleteOption(S)}}):s(Go,{size:o,closable:!S.disabled,disabled:n,onClose:()=>{this.handleDeleteOption(S)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>u?u(S,!0):He(S[z],S,!0)})),F=()=>(v?this.selectedOptions.slice(0,l):this.selectedOptions).map(C),H=r?s("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,R=h?()=>s("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(Go,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let x;if(v){const S=this.selectedOptions.length-l;S>0&&(x=s("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},s(Go,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${S}`})))}const P=h?r?s(Yn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:R,tail:()=>H}):s(Yn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:R}):v?F().concat(x):F(),D=g?()=>s("div",{class:`${a}-base-selection-popover`},h?F():this.selectedOptions.map(C)):void 0,$=g?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,y=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},s("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,I=r?s("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},P,h?null:H,p):s("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:n?void 0:0},P,p);w=s(Re,null,g?s(zr,Object.assign({},$,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>I,default:D}):I,y)}else if(r){const z=this.pattern||this.isComposing,C=this.active?!z:!this.selected,F=this.active?!1:this.selected;w=s("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),F?s("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},s("div",{class:`${a}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):He(this.label,this.selectedOption,!0))):null,C?s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else w=s("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${a}-base-selection-input`,title:ia(this.label),key:"input"},s("div",{class:`${a}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):He(this.label,this.selectedOption,!0))):s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),p);return s("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},w,i?s("div",{class:`${a}-base-selection__border`}):null,i?s("div",{class:`${a}-base-selection__state-border`}):null)}});function zo(e){return e.type==="group"}function Ar(e){return e.type==="ignored"}function qo(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function fs(e,t){return{getIsGroup:zo,getIgnored:Ar,getKey(n){return zo(n)?n.name||n.key||"key-required":n[e]},getChildren(n){return n[t]}}}function hs(e,t,o,n){if(!t)return e;function r(l){if(!Array.isArray(l))return[];const i=[];for(const a of l)if(zo(a)){const c=r(a[n]);c.length&&i.push(Object.assign({},a,{[n]:c}))}else{if(Ar(a))continue;t(o,a)&&i.push(a)}return i}return r(e)}function vs(e,t,o){const n=new Map;return e.forEach(r=>{zo(r)?r[o].forEach(l=>{n.set(l[t],l)}):n.set(r[t],r)}),n}const ps=b("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[B(">",[b("input",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),B("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),b("button",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[T("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),B("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[T("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),B("*",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[B(">",[b("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("base-selection",[b("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),B("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[B(">",[b("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("base-selection",[b("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),bs={},ms=q({name:"InputGroup",props:bs,setup(e){const{mergedClsPrefixRef:t}=Ke(e);return Dl("-input-group",ps,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}}),gs=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},Nl),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},xs={name:"BackTop",common:$o,self:gs},ys=xs,ws=s("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},s("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},s("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},s("g",{transform:"translate(120.000000, 4285.000000)"},s("g",{transform:"translate(7.000000, 126.000000)"},s("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},s("g",{transform:"translate(4.000000, 2.000000)"},s("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),s("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),_s=b("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[uo(),N("transition-disabled",{transition:"none !important"}),b("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),B("svg",{pointerEvents:"none"}),B("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[b("base-icon",{color:"var(--n-icon-color-hover)"})]),B("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[b("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Cs=Object.assign(Object.assign({},we.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),ks=q({name:"BackTop",inheritAttrs:!1,props:Cs,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=L(null),r=L(!1);wt(()=>{const{value:R}=n;if(R===null){r.value=!1;return}r.value=R>=e.visibilityHeight});const l=L(!1);Pe(r,R=>{var x;l.value&&((x=e["onUpdate:show"])===null||x===void 0||x.call(e,R))});const i=he(e,"show"),a=Je(i,r),c=L(!0),d=L(null),u=k(()=>({right:`calc(${so(e.right)} + ${Ll.value})`,bottom:so(e.bottom)}));let h,v;Pe(a,R=>{var x,P;l.value&&(R&&((x=e.onShow)===null||x===void 0||x.call(e)),(P=e.onHide)===null||P===void 0||P.call(e))});const g=we("BackTop","-back-top",_s,ys,e,t);function p(){var R;if(v)return;v=!0;const x=((R=e.target)===null||R===void 0?void 0:R.call(e))||ra(e.listenTo)||Pr(d.value);if(!x)return;h=x===document.documentElement?document:x;const{to:P}=e;typeof P=="string"&&document.querySelector(P),h.addEventListener("scroll",z),z()}function w(){(Zn(h)?document.documentElement:h).scrollTo({top:0,behavior:"smooth"})}function z(){n.value=(Zn(h)?document.documentElement:h).scrollTop,l.value||dt(()=>{l.value=!0})}function C(){c.value=!1}ut(()=>{p(),c.value=a.value}),Gt(()=>{h&&h.removeEventListener("scroll",z)});const F=k(()=>{const{self:{color:R,boxShadow:x,boxShadowHover:P,boxShadowPressed:D,iconColor:$,iconColorHover:U,iconColorPressed:y,width:I,height:S,iconSize:Z,borderRadius:ee,textColor:J},common:{cubicBezierEaseInOut:M}}=g.value;return{"--n-bezier":M,"--n-border-radius":ee,"--n-height":S,"--n-width":I,"--n-box-shadow":x,"--n-box-shadow-hover":P,"--n-box-shadow-pressed":D,"--n-color":R,"--n-icon-size":Z,"--n-icon-color":$,"--n-icon-color-hover":U,"--n-icon-color-pressed":y,"--n-text-color":J}}),H=o?Xe("back-top",void 0,F,e):void 0;return{placeholderRef:d,style:u,mergedShow:a,isMounted:Po(),scrollElement:L(null),scrollTop:n,DomInfoReady:l,transitionDisabled:c,mergedClsPrefix:t,handleAfterEnter:C,handleScroll:z,handleClick:w,cssVars:o?void 0:F,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{mergedClsPrefix:e}=this;return s("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},s(pr,{to:this.to,show:this.mergedShow},{default:()=>s(Bt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?s("div",pt(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),ao(this.$slots.default,()=>[s(Mt,{clsPrefix:e},{default:()=>ws})])):null}})}))}}),Ss=b("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[B("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),B("a",`
 color: inherit;
 text-decoration: inherit;
 `),b("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[b("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),B("&:not(:last-child)",[N("clickable",[T("link",`
 cursor: pointer;
 `,[B("&:hover",`
 background-color: var(--n-item-color-hover);
 `),B("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),T("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[B("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[b("icon",`
 color: var(--n-item-text-color-hover);
 `)]),B("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[b("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),T("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),B("&:last-child",[T("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[b("icon",`
 color: var(--n-item-text-color-active);
 `)]),T("separator",`
 display: none;
 `)])])]),Er=rt("n-breadcrumb"),zs=Object.assign(Object.assign({},we.props),{separator:{type:String,default:"/"}}),Rs=q({name:"Breadcrumb",props:zs,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=we("Breadcrumb","-breadcrumb",Ss,Hl,e,t);Ee(Er,{separatorRef:he(e,"separator"),mergedClsPrefixRef:t});const r=k(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:a,itemTextColor:c,itemTextColorHover:d,itemTextColorPressed:u,itemTextColorActive:h,fontSize:v,fontWeightActive:g,itemBorderRadius:p,itemColorHover:w,itemColorPressed:z,itemLineHeight:C}}=n.value;return{"--n-font-size":v,"--n-bezier":i,"--n-item-text-color":c,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":u,"--n-item-text-color-active":h,"--n-separator-color":a,"--n-item-color-hover":w,"--n-item-color-pressed":z,"--n-item-border-radius":p,"--n-font-weight-active":g,"--n-item-line-height":C}}),l=o?Xe("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),s("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},s("ul",null,this.$slots))}}),$s=(e=mr?window:null)=>{const t=()=>{const{hash:r,host:l,hostname:i,href:a,origin:c,pathname:d,port:u,protocol:h,search:v}=(e==null?void 0:e.location)||{};return{hash:r,host:l,hostname:i,href:a,origin:c,pathname:d,port:u,protocol:h,search:v}},o=()=>{n.value=t()},n=L(t());return ut(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),br(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},Ps={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Is=q({name:"BreadcrumbItem",props:Ps,setup(e,{slots:t}){const o=$e(Er,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=o,l=$s(),i=k(()=>e.href?"a":"span"),a=k(()=>l.value.href===e.href?"location":null);return()=>{const{value:c}=r;return s("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},s(i.value,{class:`${c}-breadcrumb-item__link`,"aria-current":a.value,href:e.href,onClick:e.onClick},t),s("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},ao(t.separator,()=>{var d;return[(d=e.separator)!==null&&d!==void 0?d:n.value]})))}}});function Ts(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function co(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ms(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Fs(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Bs={rgb:{hex(e){return xt(st(e))},hsl(e){const[t,o,n,r]=st(e);return yt([...ln(t,o,n),r])},hsv(e){const[t,o,n,r]=st(e);return $t([...rn(t,o,n),r])}},hex:{rgb(e){return ht(st(e))},hsl(e){const[t,o,n,r]=st(e);return yt([...ln(t,o,n),r])},hsv(e){const[t,o,n,r]=st(e);return $t([...rn(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=Ut(e);return xt([...an(t,o,n),r])},rgb(e){const[t,o,n,r]=Ut(e);return ht([...an(t,o,n),r])},hsv(e){const[t,o,n,r]=Ut(e);return $t([...Ir(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=Pt(e);return xt([...mt(t,o,n),r])},rgb(e){const[t,o,n,r]=Pt(e);return ht([...mt(t,o,n),r])},hsl(e){const[t,o,n,r]=Pt(e);return yt([...wo(t,o,n),r])}}};function Or(e,t,o){return o=o||co(e),o?o===t?e:Bs[o][t](e):null}const Vt="12px",As=12,kt="6px",Es=6,Os="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Ds=q({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(l){t.value&&(ot("mousemove",document,n),ot("mouseup",document,r),n(l))}function n(l){const{value:i}=t;if(!i)return;const{width:a,left:c}=i.getBoundingClientRect(),d=Ms((l.clientX-c-Es)/(a-As)*360);e.onUpdateHue(d)}function r(){var l;ct("mousemove",document,n),ct("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:Vt,borderRadius:kt}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Os,height:Vt,borderRadius:kt,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:kt,right:kt,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${kt})`,borderRadius:kt,width:Vt,height:Vt}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:kt,width:Vt,height:Vt}})))))}}),no="12px",Ns=12,St="6px",Ls=q({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(l){!t.value||!e.rgba||(ot("mousemove",document,n),ot("mouseup",document,r),n(l))}function n(l){const{value:i}=t;if(!i)return;const{width:a,left:c}=i.getBoundingClientRect(),d=(l.clientX-c)/(a-Ns);e.onUpdateAlpha(Fs(d))}function r(){var l;ct("mousemove",document,n),ct("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:k(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:no,borderRadius:St},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:St,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:St,right:St,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${St})`,borderRadius:St,width:no,height:no}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:ht(this.rgba),borderRadius:St,width:no,height:no}}))))}}),bo="12px",mo="6px",Hs=q({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(l){t.value&&(ot("mousemove",document,n),ot("mouseup",document,r),n(l))}function n(l){const{value:i}=t;if(!i)return;const{width:a,height:c,left:d,bottom:u}=i.getBoundingClientRect(),h=(u-l.clientY)/c,v=(l.clientX-d)/a,g=100*(v>1?1:v<0?0:v),p=100*(h>1?1:h<0?0:h);e.onUpdateSV(g,p)}function r(){var l;ct("mousemove",document,n),ct("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:k(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:bo,height:bo,borderRadius:mo,left:`calc(${this.displayedSv[0]}% - ${mo})`,bottom:`calc(${this.displayedSv[1]}% - ${mo})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:mo,width:bo,height:bo}})))}}),Pn=rt("n-color-picker");function Vs(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Us(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function js(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Ks(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Ws(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Gs={paddingSmall:"0 4px"},or=q({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=L(""),{themeRef:o}=$e(Pn,null);wt(()=>{t.value=n()});function n(){const{value:i}=e;if(i===null)return"";const{label:a}=e;return a==="HEX"?i:a==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function r(i){t.value=i}function l(i){let a,c;switch(e.label){case"HEX":c=Ks(i),c&&e.onUpdateValue(i),t.value=n();break;case"H":a=Us(i),a===!1?t.value=n():e.onUpdateValue(a);break;case"S":case"L":case"V":a=js(i),a===!1?t.value=n():e.onUpdateValue(a);break;case"A":a=Ws(i),a===!1?t.value=n():e.onUpdateValue(a);break;case"R":case"G":case"B":a=Vs(i),a===!1?t.value=n():e.onUpdateValue(a);break}}return{mergedTheme:o,inputValue:t,handleInputChange:l,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return s($r,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Gs,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),qs=q({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?xt:lo)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?$t:tn)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?ht:en)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?yt:Jo)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(ms,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let l=null;try{l=n===null?null:(r?xt:lo)(n)}catch{}return s(or,{label:"HEX",showAlpha:r,value:l,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(o+(r?"a":"")).split("").map((l,i)=>s(or,{label:l.toUpperCase(),value:n===null?null:n[i],onUpdateValue:a=>{this.handleUnitUpdateValue(i,a)}}))}}))}}),Xs=q({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=$e(Pn,null);return()=>{const{hsla:n,value:r,clsPrefix:l,onClick:i,disabled:a}=e,c=t.label||o.value;return s("div",{class:[`${l}-color-picker-trigger`,a&&`${l}-color-picker-trigger--disabled`],onClick:a?void 0:i},s("div",{class:`${l}-color-picker-trigger__fill`},s("div",{class:`${l}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?yt(n):""}}),r&&n?s("div",{class:`${l}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},c?c(r):r):null))}}});function Ys(e,t){if(t==="hsv"){const[o,n,r,l]=Pt(e);return ht([...mt(o,n,r),l])}return e}function Zs(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Qs=q({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=k(()=>e.swatches.map(l=>{const i=co(l);return{value:l,mode:i,legalValue:Ys(l,i)}}));function o(l){const{mode:i}=e;let{value:a,mode:c}=l;return c||(c="hex",/^[a-zA-Z]+$/.test(a)?a=Zs(a):(vn("color-picker",`color ${a} in swatches is invalid.`),a="#000000")),c===i?a:Or(a,i,c)}function n(l){e.onUpdateColor(o(l))}function r(l,i){l.key==="Enter"&&n(i)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Js=q({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=co(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Or(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ec=B([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[uo(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[B("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[T("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),B("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[T("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[T("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[N("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[T("sliders",`
 flex: 1 0 auto;
 `),T("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),T("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),T("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),T("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[T("value",`
 white-space: nowrap;
 position: relative;
 `),T("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),N("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[B("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[T("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),B("&:focus",`
 outline: none;
 `,[T("fill",[B("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),tc=Object.assign(Object.assign({},we.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Kt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),oc=q({name:"ColorPicker",props:tc,setup(e,{slots:t}){const o=L(null);let n=null;const r=Io(e),{mergedSizeRef:l,mergedDisabledRef:i}=r,{localeRef:a}=Mo("global"),{mergedClsPrefixRef:c,namespaceRef:d,inlineThemeDisabled:u}=Ke(e),h=we("ColorPicker","-color-picker",ec,Vl,e,c);Ee(Pn,{themeRef:h,renderLabelRef:he(e,"renderLabel"),colorPickerSlots:t});const v=L(e.defaultShow),g=Je(he(e,"show"),v);function p(m){const{onUpdateShow:V,"onUpdate:show":oe}=e;V&&fe(V,m),oe&&fe(oe,m),v.value=m}const{defaultValue:w}=e,z=L(w===void 0?Ts(e.modes,e.showAlpha):w),C=Je(he(e,"value"),z),F=L([C.value]),H=L(0),R=k(()=>co(C.value)),{modes:x}=e,P=L(co(C.value)||x[0]||"rgb");function D(){const{modes:m}=e,{value:V}=P,oe=m.findIndex(E=>E===V);~oe?P.value=m[(oe+1)%m.length]:P.value="rgb"}let $,U,y,I,S,Z,ee,J;const M=k(()=>{const{value:m}=C;if(!m)return null;switch(R.value){case"hsv":return Pt(m);case"hsl":return[$,U,y,J]=Ut(m),[...Ir($,U,y),J];case"rgb":case"hex":return[S,Z,ee,J]=st(m),[...rn(S,Z,ee),J]}}),Q=k(()=>{const{value:m}=C;if(!m)return null;switch(R.value){case"rgb":case"hex":return st(m);case"hsv":return[$,U,I,J]=Pt(m),[...mt($,U,I),J];case"hsl":return[$,U,y,J]=Ut(m),[...an($,U,y),J]}}),ne=k(()=>{const{value:m}=C;if(!m)return null;switch(R.value){case"hsl":return Ut(m);case"hsv":return[$,U,I,J]=Pt(m),[...wo($,U,I),J];case"rgb":case"hex":return[S,Z,ee,J]=st(m),[...ln(S,Z,ee),J]}}),j=k(()=>{switch(P.value){case"rgb":case"hex":return Q.value;case"hsv":return M.value;case"hsl":return ne.value}}),Y=L(0),ie=L(1),ve=L([0,0]);function Ce(m,V){const{value:oe}=M,E=Y.value,G=oe?oe[3]:1;ve.value=[m,V];const{showAlpha:re}=e;switch(P.value){case"hsv":pe((re?$t:tn)([E,m,V,G]),"cursor");break;case"hsl":pe((re?yt:Jo)([...wo(E,m,V),G]),"cursor");break;case"rgb":pe((re?ht:en)([...mt(E,m,V),G]),"cursor");break;case"hex":pe((re?xt:lo)([...mt(E,m,V),G]),"cursor");break}}function Me(m){Y.value=m;const{value:V}=M;if(!V)return;const[,oe,E,G]=V,{showAlpha:re}=e;switch(P.value){case"hsv":pe((re?$t:tn)([m,oe,E,G]),"cursor");break;case"rgb":pe((re?ht:en)([...mt(m,oe,E),G]),"cursor");break;case"hex":pe((re?xt:lo)([...mt(m,oe,E),G]),"cursor");break;case"hsl":pe((re?yt:Jo)([...wo(m,oe,E),G]),"cursor");break}}function Be(m){switch(P.value){case"hsv":[$,U,I]=M.value,pe($t([$,U,I,m]),"cursor");break;case"rgb":[S,Z,ee]=Q.value,pe(ht([S,Z,ee,m]),"cursor");break;case"hex":[S,Z,ee]=Q.value,pe(xt([S,Z,ee,m]),"cursor");break;case"hsl":[$,U,y]=ne.value,pe(yt([$,U,y,m]),"cursor");break}ie.value=m}function pe(m,V){V==="cursor"?n=m:n=null;const{nTriggerFormChange:oe,nTriggerFormInput:E}=r,{onUpdateValue:G,"onUpdate:value":re}=e;G&&fe(G,m),re&&fe(re,m),oe(),E(),z.value=m}function ue(m){pe(m,"input"),dt(ke)}function ke(m=!0){const{value:V}=C;if(V){const{nTriggerFormChange:oe,nTriggerFormInput:E}=r,{onComplete:G}=e;G&&G(V);const{value:re}=F,{value:Se}=H;m&&(re.splice(Se+1,re.length,V),H.value=Se+1),oe(),E()}}function Te(){const{value:m}=H;m-1<0||(pe(F.value[m-1],"input"),ke(!1),H.value=m-1)}function Ve(){const{value:m}=H;m<0||m+1>=F.value.length||(pe(F.value[m+1],"input"),ke(!1),H.value=m+1)}function Ue(){pe(null,"input"),p(!1)}function et(){const{value:m}=C,{onConfirm:V}=e;V&&V(m),p(!1)}const Ye=k(()=>H.value>=1),Ge=k(()=>{const{value:m}=F;return m.length>1&&H.value<m.length-1});Pe(g,m=>{m||(F.value=[C.value],H.value=0)}),wt(()=>{if(!(n&&n===C.value)){const{value:m}=M;m&&(Y.value=m[0],ie.value=m[3],ve.value=[m[1],m[2]])}n=null});const Ne=k(()=>{const{value:m}=l,{common:{cubicBezierEaseInOut:V},self:{textColor:oe,color:E,panelFontSize:G,boxShadow:re,border:Se,borderRadius:_e,dividerColor:Le,[se("height",m)]:it,[se("fontSize",m)]:Ct}}=h.value;return{"--n-bezier":V,"--n-text-color":oe,"--n-color":E,"--n-panel-font-size":G,"--n-font-size":Ct,"--n-box-shadow":re,"--n-border":Se,"--n-border-radius":_e,"--n-height":it,"--n-divider-color":Le}}),W=u?Xe("color-picker",k(()=>l.value[0]),Ne,e):void 0;function _(){var m;const{value:V}=Q,{value:oe}=Y,{internalActions:E,modes:G,actions:re}=e,{value:Se}=h,{value:_e}=c;return s("div",{class:[`${_e}-color-picker-panel`,W==null?void 0:W.themeClass.value],onDragstart:Le=>{Le.preventDefault()},style:u?void 0:Ne.value},s("div",{class:`${_e}-color-picker-control`},s(Hs,{clsPrefix:_e,rgba:V,displayedHue:oe,displayedSv:ve.value,onUpdateSV:Ce,onComplete:ke}),s("div",{class:`${_e}-color-picker-preview`},s("div",{class:`${_e}-color-picker-preview__sliders`},s(Ds,{clsPrefix:_e,hue:oe,onUpdateHue:Me,onComplete:ke}),e.showAlpha?s(Ls,{clsPrefix:_e,rgba:V,alpha:ie.value,onUpdateAlpha:Be,onComplete:ke}):null),e.showPreview?s(Js,{clsPrefix:_e,mode:P.value,color:Q.value&&lo(Q.value),onUpdateColor:Le=>{pe(Le,"input")}}):null),s(qs,{clsPrefix:_e,showAlpha:e.showAlpha,mode:P.value,modes:G,onUpdateMode:D,value:C.value,valueArr:j.value,onUpdateValue:ue}),((m=e.swatches)===null||m===void 0?void 0:m.length)&&s(Qs,{clsPrefix:_e,mode:P.value,swatches:e.swatches,onUpdateColor:Le=>{pe(Le,"input")}})),re!=null&&re.length?s("div",{class:`${_e}-color-picker-action`},re.includes("confirm")&&s(gt,{size:"small",onClick:et,theme:Se.peers.Button,themeOverrides:Se.peerOverrides.Button},{default:()=>a.value.confirm}),re.includes("clear")&&s(gt,{size:"small",onClick:Ue,disabled:!C.value,theme:Se.peers.Button,themeOverrides:Se.peerOverrides.Button},{default:()=>a.value.clear})):null,t.action?s("div",{class:`${_e}-color-picker-action`},{default:t.action}):E?s("div",{class:`${_e}-color-picker-action`},E.includes("undo")&&s(gt,{size:"small",onClick:Te,disabled:!Ye.value,theme:Se.peers.Button,themeOverrides:Se.peerOverrides.Button},{default:()=>a.value.undo}),E.includes("redo")&&s(gt,{size:"small",onClick:Ve,disabled:!Ge.value,theme:Se.peers.Button,themeOverrides:Se.peerOverrides.Button},{default:()=>a.value.redo})):null)}return{mergedClsPrefix:c,namespace:d,selfRef:o,hsla:ne,rgba:Q,mergedShow:g,mergedDisabled:i,isMounted:Po(),adjustedTo:Kt(e),mergedValue:C,handleTriggerClick(){p(!0)},handleClickOutside(m){var V;!((V=o.value)===null||V===void 0)&&V.contains(gr(m))||p(!1)},renderPanel:_,cssVars:u?void 0:Ne,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),s("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},s(Cn,null,{default:()=>[s(kn,null,{default:()=>s(Xs,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),s(Sn,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Kt.tdkey,to:this.adjustedTo},{default:()=>s(Bt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?_t(this.renderPanel(),[[Co,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),nc=B([b("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),b("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[uo({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),rc=Object.assign(Object.assign({},we.props),{to:Kt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Dr=q({name:"Select",props:rc,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,namespaceRef:n,inlineThemeDisabled:r}=Ke(e),l=we("Select","-select",nc,Ul,e,t),i=L(e.defaultValue),a=he(e,"value"),c=Je(a,i),d=L(!1),u=L(""),h=k(()=>{const{valueField:A,childrenField:te}=e,ce=fs(A,te);return $n(S.value,ce)}),v=k(()=>vs(y.value,e.valueField,e.childrenField)),g=L(!1),p=Je(he(e,"show"),g),w=L(null),z=L(null),C=L(null),{localeRef:F}=Mo("Select"),H=k(()=>{var A;return(A=e.placeholder)!==null&&A!==void 0?A:F.value.placeholder}),R=ko(e,["items","options"]),x=[],P=L([]),D=L([]),$=L(new Map),U=k(()=>{const{fallbackOption:A}=e;if(A===void 0){const{labelField:te,valueField:ce}=e;return ye=>({[te]:String(ye),[ce]:ye})}return A===!1?!1:te=>Object.assign(A(te),{value:te})}),y=k(()=>D.value.concat(P.value).concat(R.value)),I=k(()=>{const{filter:A}=e;if(A)return A;const{labelField:te,valueField:ce}=e;return(ye,me)=>{if(!me)return!1;const xe=me[te];if(typeof xe=="string")return qo(ye,xe);const ge=me[ce];return typeof ge=="string"?qo(ye,ge):typeof ge=="number"?qo(ye,String(ge)):!1}}),S=k(()=>{if(e.remote)return R.value;{const{value:A}=y,{value:te}=u;return!te.length||!e.filterable?A:hs(A,I.value,te,e.childrenField)}});function Z(A){const te=e.remote,{value:ce}=$,{value:ye}=v,{value:me}=U,xe=[];return A.forEach(ge=>{if(ye.has(ge))xe.push(ye.get(ge));else if(te&&ce.has(ge))xe.push(ce.get(ge));else if(me){const Oe=me(ge);Oe&&xe.push(Oe)}}),xe}const ee=k(()=>{if(e.multiple){const{value:A}=c;return Array.isArray(A)?Z(A):[]}return null}),J=k(()=>{const{value:A}=c;return!e.multiple&&!Array.isArray(A)?A===null?null:Z([A])[0]||null:null}),M=Io(e),{mergedSizeRef:Q,mergedDisabledRef:ne,mergedStatusRef:j}=M;function Y(A,te){const{onChange:ce,"onUpdate:value":ye,onUpdateValue:me}=e,{nTriggerFormChange:xe,nTriggerFormInput:ge}=M;ce&&fe(ce,A,te),me&&fe(me,A,te),ye&&fe(ye,A,te),i.value=A,xe(),ge()}function ie(A){const{onBlur:te}=e,{nTriggerFormBlur:ce}=M;te&&fe(te,A),ce()}function ve(){const{onClear:A}=e;A&&fe(A)}function Ce(A){const{onFocus:te,showOnFocus:ce}=e,{nTriggerFormFocus:ye}=M;te&&fe(te,A),ye(),ce&&ke()}function Me(A){const{onSearch:te}=e;te&&fe(te,A)}function Be(A){const{onScroll:te}=e;te&&fe(te,A)}function pe(){var A;const{remote:te,multiple:ce}=e;if(te){const{value:ye}=$;if(ce){const{valueField:me}=e;(A=ee.value)===null||A===void 0||A.forEach(xe=>{ye.set(xe[me],xe)})}else{const me=J.value;me&&ye.set(me[e.valueField],me)}}}function ue(A){const{onUpdateShow:te,"onUpdate:show":ce}=e;te&&fe(te,A),ce&&fe(ce,A),g.value=A}function ke(){ne.value||(ue(!0),g.value=!0,e.filterable&&Nt())}function Te(){ue(!1)}function Ve(){u.value="",D.value=x}const Ue=L(!1);function et(){e.filterable&&(Ue.value=!0)}function Ye(){e.filterable&&(Ue.value=!1,p.value||Ve())}function Ge(){ne.value||(p.value?e.filterable?Nt():Te():ke())}function Ne(A){var te,ce;!((ce=(te=C.value)===null||te===void 0?void 0:te.selfRef)===null||ce===void 0)&&ce.contains(A.relatedTarget)||(d.value=!1,ie(A),Te())}function W(A){Ce(A),d.value=!0}function _(A){d.value=!0}function m(A){var te;!((te=w.value)===null||te===void 0)&&te.$el.contains(A.relatedTarget)||(d.value=!1,ie(A),Te())}function V(){var A;(A=w.value)===null||A===void 0||A.focus(),Te()}function oe(A){var te;p.value&&(!((te=w.value)===null||te===void 0)&&te.$el.contains(gr(A))||Te())}function E(A){if(!Array.isArray(A))return[];if(U.value)return Array.from(A);{const{remote:te}=e,{value:ce}=v;if(te){const{value:ye}=$;return A.filter(me=>ce.has(me)||ye.has(me))}else return A.filter(ye=>ce.has(ye))}}function G(A){re(A.rawNode)}function re(A){if(ne.value)return;const{tag:te,remote:ce,clearFilterAfterSelect:ye,valueField:me}=e;if(te&&!ce){const{value:xe}=D,ge=xe[0]||null;if(ge){const Oe=P.value;Oe.length?Oe.push(ge):P.value=[ge],D.value=x}}if(ce&&$.value.set(A[me],A),e.multiple){const xe=E(c.value),ge=xe.findIndex(Oe=>Oe===A[me]);if(~ge){if(xe.splice(ge,1),te&&!ce){const Oe=Se(A[me]);~Oe&&(P.value.splice(Oe,1),ye&&(u.value=""))}}else xe.push(A[me]),ye&&(u.value="");Y(xe,Z(xe))}else{if(te&&!ce){const xe=Se(A[me]);~xe?P.value=[P.value[xe]]:P.value=x}Dt(),Te(),Y(A[me],A)}}function Se(A){return P.value.findIndex(ce=>ce[e.valueField]===A)}function _e(A){p.value||ke();const{value:te}=A.target;u.value=te;const{tag:ce,remote:ye}=e;if(Me(te),ce&&!ye){if(!te){D.value=x;return}const{onCreate:me}=e,xe=me?me(te):{[e.labelField]:te,[e.valueField]:te},{valueField:ge}=e;R.value.some(Oe=>Oe[ge]===xe[ge])||P.value.some(Oe=>Oe[ge]===xe[ge])?D.value=x:D.value=[xe]}}function Le(A){A.stopPropagation();const{multiple:te}=e;!te&&e.filterable&&Te(),ve(),te?Y([],[]):Y(null,null)}function it(A){!Wt(A,"action")&&!Wt(A,"empty")&&A.preventDefault()}function Ct(A){Be(A)}function Ot(A){var te,ce,ye,me,xe;if(!e.keyboard){A.preventDefault();return}switch(A.key){case" ":if(e.filterable)break;A.preventDefault();case"Enter":if(!(!((te=w.value)===null||te===void 0)&&te.isComposing)){if(p.value){const ge=(ce=C.value)===null||ce===void 0?void 0:ce.getPendingTmNode();ge?G(ge):e.filterable||(Te(),Dt())}else if(ke(),e.tag&&Ue.value){const ge=D.value[0];if(ge){const Oe=ge[e.valueField],{value:Ht}=c;e.multiple&&Array.isArray(Ht)&&Ht.some(eo=>eo===Oe)||re(ge)}}}A.preventDefault();break;case"ArrowUp":if(A.preventDefault(),e.loading)return;p.value&&((ye=C.value)===null||ye===void 0||ye.prev());break;case"ArrowDown":if(A.preventDefault(),e.loading)return;p.value?(me=C.value)===null||me===void 0||me.next():ke();break;case"Escape":p.value&&(jl(A),Te()),(xe=w.value)===null||xe===void 0||xe.focus();break}}function Dt(){var A;(A=w.value)===null||A===void 0||A.focus()}function Nt(){var A;(A=w.value)===null||A===void 0||A.focusInput()}function Qt(){var A;p.value&&((A=z.value)===null||A===void 0||A.syncPosition())}pe(),Pe(he(e,"options"),pe);const Jt={focus:()=>{var A;(A=w.value)===null||A===void 0||A.focus()},blur:()=>{var A;(A=w.value)===null||A===void 0||A.blur()}},Lt=k(()=>{const{self:{menuBoxShadow:A}}=l.value;return{"--n-menu-box-shadow":A}}),at=r?Xe("select",void 0,Lt,e):void 0;return Object.assign(Object.assign({},Jt),{mergedStatus:j,mergedClsPrefix:t,mergedBordered:o,namespace:n,treeMate:h,isMounted:Po(),triggerRef:w,menuRef:C,pattern:u,uncontrolledShow:g,mergedShow:p,adjustedTo:Kt(e),uncontrolledValue:i,mergedValue:c,followerRef:z,localizedPlaceholder:H,selectedOption:J,selectedOptions:ee,mergedSize:Q,mergedDisabled:ne,focused:d,activeWithoutMenuOpen:Ue,inlineThemeDisabled:r,onTriggerInputFocus:et,onTriggerInputBlur:Ye,handleTriggerOrMenuResize:Qt,handleMenuFocus:_,handleMenuBlur:m,handleMenuTabOut:V,handleTriggerClick:Ge,handleToggle:G,handleDeleteOption:re,handlePatternInput:_e,handleClear:Le,handleTriggerBlur:Ne,handleTriggerFocus:W,handleKeydown:Ot,handleMenuAfterLeave:Ve,handleMenuClickOutside:oe,handleMenuScroll:Ct,handleMenuKeydown:Ot,handleMenuMousedown:it,mergedTheme:l,cssVars:r?void 0:Lt,themeClass:at==null?void 0:at.themeClass,onRender:at==null?void 0:at.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Cn,null,{default:()=>[s(kn,null,{default:()=>s(us,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),s(Sn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Kt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(Bt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),_t(s(os,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var n,r;return[(r=(n=this.$slots).empty)===null||r===void 0?void 0:r.call(n)]},action:()=>{var n,r;return[(r=(n=this.$slots).action)===null||r===void 0?void 0:r.call(n)]}}),this.displayDirective==="show"?[[It,this.mergedShow],[Co,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Co,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Nr=q({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),lc=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[B("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),B("svg",{height:"1em",width:"1em"})]),ic=Object.assign(Object.assign({},we.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),ac=q({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ic,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=we("Icon","-icon",lc,Kl,e,t),r=k(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:a},self:c}=n.value;if(i!==void 0){const{color:d,[`opacity${i}Depth`]:u}=c;return{"--n-bezier":a,"--n-color":d,"--n-opacity":u}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),l=o?Xe("icon",k(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:k(()=>{const{size:i,color:a}=e;return{fontSize:so(i),color:a}}),cssVars:o?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:n,component:r,onRender:l,themeClass:i}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&vn("icon","don't wrap `n-icon` inside `n-icon`"),l==null||l(),s("i",pt(this.$attrs,{role:"img",class:[`${n}-icon`,i,{[`${n}-icon--depth`]:o,[`${n}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?s(r):this.$slots)}}),In=rt("n-dropdown-menu"),Fo=rt("n-dropdown"),nr=rt("n-dropdown-option");function cn(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function sc(e){return e.type==="group"}function Lr(e){return e.type==="divider"}function cc(e){return e.type==="render"}const Hr=q({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=$e(Fo),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:l,activeKeyPathRef:i,animatedRef:a,mergedShowRef:c,renderLabelRef:d,renderIconRef:u,labelFieldRef:h,childrenFieldRef:v,renderOptionRef:g,nodePropsRef:p,menuPropsRef:w}=t,z=$e(nr,null),C=$e(In),F=$e(pn),H=k(()=>e.tmNode.rawNode),R=k(()=>{const{value:Q}=v;return cn(e.tmNode.rawNode,Q)}),x=k(()=>{const{disabled:Q}=e.tmNode;return Q}),P=k(()=>{if(!R.value)return!1;const{key:Q,disabled:ne}=e.tmNode;if(ne)return!1;const{value:j}=o,{value:Y}=n,{value:ie}=r,{value:ve}=l;return j!==null?ve.includes(Q):Y!==null?ve.includes(Q)&&ve[ve.length-1]!==Q:ie!==null?ve.includes(Q):!1}),D=k(()=>n.value===null&&!a.value),$=ca(P,300,D),U=k(()=>!!(z!=null&&z.enteringSubmenuRef.value)),y=L(!1);Ee(nr,{enteringSubmenuRef:y});function I(){y.value=!0}function S(){y.value=!1}function Z(){const{parentKey:Q,tmNode:ne}=e;ne.disabled||c.value&&(r.value=Q,n.value=null,o.value=ne.key)}function ee(){const{tmNode:Q}=e;Q.disabled||c.value&&o.value!==Q.key&&Z()}function J(Q){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:ne}=Q;ne&&!Wt({target:ne},"dropdownOption")&&!Wt({target:ne},"scrollbarRail")&&(o.value=null)}function M(){const{value:Q}=R,{tmNode:ne}=e;c.value&&!Q&&!ne.disabled&&(t.doSelect(ne.key,ne.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:d,renderIcon:u,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:w,popoverBody:F,animated:a,mergedShowSubmenu:k(()=>$.value&&!U.value),rawNode:H,hasSubmenu:R,pending:Ae(()=>{const{value:Q}=l,{key:ne}=e.tmNode;return Q.includes(ne)}),childActive:Ae(()=>{const{value:Q}=i,{key:ne}=e.tmNode,j=Q.findIndex(Y=>ne===Y);return j===-1?!1:j<Q.length-1}),active:Ae(()=>{const{value:Q}=i,{key:ne}=e.tmNode,j=Q.findIndex(Y=>ne===Y);return j===-1?!1:j===Q.length-1}),mergedDisabled:x,renderOption:g,nodeProps:p,handleClick:M,handleMouseMove:ee,handleMouseEnter:Z,handleMouseLeave:J,handleSubmenuBeforeEnter:I,handleSubmenuAfterEnter:S}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:l,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:c,renderIcon:d,renderOption:u,nodeProps:h,props:v,scrollable:g}=this;let p=null;if(r){const F=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);p=s(Vr,Object.assign({},F,{clsPrefix:l,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const w={class:[`${l}-dropdown-option-body`,this.pending&&`${l}-dropdown-option-body--pending`,this.active&&`${l}-dropdown-option-body--active`,this.childActive&&`${l}-dropdown-option-body--child-active`,this.mergedDisabled&&`${l}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},z=h==null?void 0:h(n),C=s("div",Object.assign({class:[`${l}-dropdown-option`,z==null?void 0:z.class],"data-dropdown-option":!0},z),s("div",pt(w,v),[s("div",{class:[`${l}-dropdown-option-body__prefix`,i&&`${l}-dropdown-option-body__prefix--show-icon`]},[d?d(n):He(n.icon)]),s("div",{"data-dropdown-option":!0,class:`${l}-dropdown-option-body__label`},c?c(n):He((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),s("div",{"data-dropdown-option":!0,class:[`${l}-dropdown-option-body__suffix`,a&&`${l}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(ac,null,{default:()=>s(_a,null)}):null)]),this.hasSubmenu?s(Cn,null,{default:()=>[s(kn,null,{default:()=>s("div",{class:`${l}-dropdown-offset-container`},s(Sn,{show:this.mergedShowSubmenu,placement:this.placement,to:g&&this.popoverBody||void 0,teleportDisabled:!g},{default:()=>s("div",{class:`${l}-dropdown-menu-wrapper`},o?s(Bt,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return u?u({node:C,option:n}):C}}),dc=q({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=$e(In),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:l}=$e(Fo);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:l}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:l,renderOption:i}=this,{rawNode:a}=this.tmNode,c=s("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(a)),s("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},He(a.icon)),s("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},l?l(a):He((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),s("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:c,option:a}):c}}),uc=q({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return s(Re,null,s(dc,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:l}=r;return l.show===!1?null:Lr(l)?s(Nr,{clsPrefix:o,key:r.key}):r.isGroup?(vn("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Hr,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),fc=q({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return s("div",t,[e==null?void 0:e()])}}),Vr=q({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=$e(Fo);Ee(In,{showIconRef:k(()=>{const r=t.value;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:c})=>r?r(c):c.icon);const{rawNode:a}=l;return r?r(a):a.icon})}),hasSubmenuRef:k(()=>{const{value:r}=o;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:c})=>cn(c,r));const{rawNode:a}=l;return cn(a,r)})})});const n=L(null);return Ee(xr,null),Ee(yr,null),Ee(pn,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:l}=r;return l.show===!1?null:cc(l)?s(fc,{tmNode:r,key:r.key}):Lr(l)?s(Nr,{clsPrefix:t,key:r.key}):sc(l)?s(uc,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):s(Hr,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:l.props,scrollable:o})});return s("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?s(Wl,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Ti({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),hc=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[uo(),b("dropdown-option",`
 position: relative;
 `,[B("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),je("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),B("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),B("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[N("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("dropdown-menu","pointer-events: all;")]),b("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),B(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),je("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),vc={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},pc=Object.keys(Rr),bc=Object.assign(Object.assign(Object.assign({},Rr),vc),we.props),Bo=q({name:"Dropdown",inheritAttrs:!1,props:bc,setup(e){const t=L(!1),o=Je(he(e,"show"),t),n=k(()=>{const{keyField:S,childrenField:Z}=e;return $n(e.options,{getKey(ee){return ee[S]},getDisabled(ee){return ee.disabled===!0},getIgnored(ee){return ee.type==="divider"||ee.type==="render"},getChildren(ee){return ee[Z]}})}),r=k(()=>n.value.treeNodes),l=L(null),i=L(null),a=L(null),c=k(()=>{var S,Z,ee;return(ee=(Z=(S=l.value)!==null&&S!==void 0?S:i.value)!==null&&Z!==void 0?Z:a.value)!==null&&ee!==void 0?ee:null}),d=k(()=>n.value.getPath(c.value).keyPath),u=k(()=>n.value.getPath(e.value).keyPath),h=Ae(()=>e.keyboard&&o.value);ha({keydown:{ArrowUp:{prevent:!0,handler:x},ArrowRight:{prevent:!0,handler:R},ArrowDown:{prevent:!0,handler:P},ArrowLeft:{prevent:!0,handler:H},Enter:{prevent:!0,handler:D},Escape:F}},h);const{mergedClsPrefixRef:v,inlineThemeDisabled:g}=Ke(e),p=we("Dropdown","-dropdown",hc,Gl,e,v);Ee(Fo,{labelFieldRef:he(e,"labelField"),childrenFieldRef:he(e,"childrenField"),renderLabelRef:he(e,"renderLabel"),renderIconRef:he(e,"renderIcon"),hoverKeyRef:l,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:d,activeKeyPathRef:u,animatedRef:he(e,"animated"),mergedShowRef:o,nodePropsRef:he(e,"nodeProps"),renderOptionRef:he(e,"renderOption"),menuPropsRef:he(e,"menuProps"),doSelect:w,doUpdateShow:z}),Pe(o,S=>{!e.animated&&!S&&C()});function w(S,Z){const{onSelect:ee}=e;ee&&fe(ee,S,Z)}function z(S){const{"onUpdate:show":Z,onUpdateShow:ee}=e;Z&&fe(Z,S),ee&&fe(ee,S),t.value=S}function C(){l.value=null,i.value=null,a.value=null}function F(){z(!1)}function H(){U("left")}function R(){U("right")}function x(){U("up")}function P(){U("down")}function D(){const S=$();S!=null&&S.isLeaf&&o.value&&(w(S.key,S.rawNode),z(!1))}function $(){var S;const{value:Z}=n,{value:ee}=c;return!Z||ee===null?null:(S=Z.getNode(ee))!==null&&S!==void 0?S:null}function U(S){const{value:Z}=c,{value:{getFirstAvailableNode:ee}}=n;let J=null;if(Z===null){const M=ee();M!==null&&(J=M.key)}else{const M=$();if(M){let Q;switch(S){case"down":Q=M.getNext();break;case"up":Q=M.getPrev();break;case"right":Q=M.getChild();break;case"left":Q=M.getParent();break}Q&&(J=Q.key)}}J!==null&&(l.value=null,i.value=J)}const y=k(()=>{const{size:S,inverted:Z}=e,{common:{cubicBezierEaseInOut:ee},self:J}=p.value,{padding:M,dividerColor:Q,borderRadius:ne,optionOpacityDisabled:j,[se("optionIconSuffixWidth",S)]:Y,[se("optionSuffixWidth",S)]:ie,[se("optionIconPrefixWidth",S)]:ve,[se("optionPrefixWidth",S)]:Ce,[se("fontSize",S)]:Me,[se("optionHeight",S)]:Be,[se("optionIconSize",S)]:pe}=J,ue={"--n-bezier":ee,"--n-font-size":Me,"--n-padding":M,"--n-border-radius":ne,"--n-option-height":Be,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":ve,"--n-option-suffix-width":ie,"--n-option-icon-suffix-width":Y,"--n-option-icon-size":pe,"--n-divider-color":Q,"--n-option-opacity-disabled":j};return Z?(ue["--n-color"]=J.colorInverted,ue["--n-option-color-hover"]=J.optionColorHoverInverted,ue["--n-option-color-active"]=J.optionColorActiveInverted,ue["--n-option-text-color"]=J.optionTextColorInverted,ue["--n-option-text-color-hover"]=J.optionTextColorHoverInverted,ue["--n-option-text-color-active"]=J.optionTextColorActiveInverted,ue["--n-option-text-color-child-active"]=J.optionTextColorChildActiveInverted,ue["--n-prefix-color"]=J.prefixColorInverted,ue["--n-suffix-color"]=J.suffixColorInverted,ue["--n-group-header-text-color"]=J.groupHeaderTextColorInverted):(ue["--n-color"]=J.color,ue["--n-option-color-hover"]=J.optionColorHover,ue["--n-option-color-active"]=J.optionColorActive,ue["--n-option-text-color"]=J.optionTextColor,ue["--n-option-text-color-hover"]=J.optionTextColorHover,ue["--n-option-text-color-active"]=J.optionTextColorActive,ue["--n-option-text-color-child-active"]=J.optionTextColorChildActive,ue["--n-prefix-color"]=J.prefixColor,ue["--n-suffix-color"]=J.suffixColor,ue["--n-group-header-text-color"]=J.groupHeaderTextColor),ue}),I=g?Xe("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),y,e):void 0;return{mergedClsPrefix:v,mergedTheme:p,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:z,cssVars:g?void 0:y,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const e=(n,r,l,i,a)=>{var c;const{mergedClsPrefix:d,menuProps:u}=this;(c=this.onRender)===null||c===void 0||c.call(this);const h=(u==null?void 0:u(void 0,this.tmNodes.map(g=>g.rawNode)))||{},v={ref:aa(r),class:[n,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[l,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return s(Vr,pt(this.$attrs,v,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(zr,Object.assign({},xo(this.$props,pc),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),mc=q({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=L(!!e.show),o=L(null),n=$e(bn);let r=0,l="",i=null;const a=L(!1),c=L(!1),d=k(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:u,mergedRtlRef:h}=Ke(e),v=fn("Drawer",h,u),g=D=>{c.value=!0,r=d.value?D.clientY:D.clientX,l=document.body.style.cursor,document.body.style.cursor=d.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",F),document.body.addEventListener("mouseleave",R),document.body.addEventListener("mouseup",H)},p=()=>{i!==null&&(window.clearTimeout(i),i=null),c.value?a.value=!0:i=window.setTimeout(()=>{a.value=!0},300)},w=()=>{i!==null&&(window.clearTimeout(i),i=null),a.value=!1},{doUpdateHeight:z,doUpdateWidth:C}=n,F=D=>{var $,U;if(c.value)if(d.value){let y=(($=o.value)===null||$===void 0?void 0:$.offsetHeight)||0;const I=r-D.clientY;y+=e.placement==="bottom"?I:-I,z(y),r=D.clientY}else{let y=((U=o.value)===null||U===void 0?void 0:U.offsetWidth)||0;const I=r-D.clientX;y+=e.placement==="right"?I:-I,C(y),r=D.clientX}},H=()=>{c.value&&(r=0,c.value=!1,document.body.style.cursor=l,document.body.removeEventListener("mousemove",F),document.body.removeEventListener("mouseup",H),document.body.removeEventListener("mouseleave",R))},R=H;wt(()=>{e.show&&(t.value=!0)}),Pe(()=>e.show,D=>{D||H()}),Gt(()=>{H()});const x=k(()=>{const{show:D}=e,$=[[It,D]];return e.showMask||$.push([Co,e.onClickoutside,void 0,{capture:!0}]),$});function P(){var D;t.value=!1,(D=e.onAfterLeave)===null||D===void 0||D.call(e)}return ql(k(()=>e.blockScroll&&t.value)),Ee(yr,o),Ee(pn,null),Ee(xr,null),{bodyRef:o,rtlEnabled:v,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:k(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:P,bodyDirectives:x,handleMousedownResizeTrigger:g,handleMouseenterResizeTrigger:p,handleMouseleaveResizeTrigger:w,isDragging:c,isHoverOnResizeTrigger:a}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?_t(s("div",{role:"none"},s(Xl,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(Bt,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>_t(s("div",pt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(Ro,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[It,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:gc,cubicBezierEaseOut:xc}=To;function yc({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[B(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${gc}`}),B(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${xc}`}),B(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),B(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),B(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),B(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:wc,cubicBezierEaseOut:_c}=To;function Cc({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[B(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${wc}`}),B(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${_c}`}),B(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),B(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),B(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),B(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:kc,cubicBezierEaseOut:Sc}=To;function zc({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[B(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${kc}`}),B(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Sc}`}),B(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),B(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),B(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),B(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Rc,cubicBezierEaseOut:$c}=To;function Pc({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[B(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Rc}`}),B(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${$c}`}),B(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),B(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),B(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),B(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const Ic=B([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[yc(),Cc(),zc(),Pc(),N("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),N("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),T("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[N("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[N("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[T("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),N("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),N("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[T("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),N("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),N("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[T("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),B("body",[B(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[B("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[N("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Yl({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Tc=Object.assign(Object.assign({},we.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Mc=q({name:"Drawer",inheritAttrs:!1,props:Tc,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Ke(e),r=Po(),l=we("Drawer","-drawer",Ic,Zl,e,t),i=L(e.defaultWidth),a=L(e.defaultHeight),c=Je(he(e,"width"),i),d=Je(he(e,"height"),a),u=k(()=>{const{placement:x}=e;return x==="top"||x==="bottom"?"":so(c.value)}),h=k(()=>{const{placement:x}=e;return x==="left"||x==="right"?"":so(d.value)}),v=x=>{const{onUpdateWidth:P,"onUpdate:width":D}=e;P&&fe(P,x),D&&fe(D,x),i.value=x},g=x=>{const{onUpdateHeight:P,"onUpdate:width":D}=e;P&&fe(P,x),D&&fe(D,x),a.value=x},p=k(()=>[{width:u.value,height:h.value},e.drawerStyle||""]);function w(x){const{onMaskClick:P,maskClosable:D}=e;D&&F(!1),P&&P(x)}const z=Ql();function C(x){var P;(P=e.onEsc)===null||P===void 0||P.call(e),e.show&&e.closeOnEsc&&ei(x)&&!z.value&&F(!1)}function F(x){const{onHide:P,onUpdateShow:D,"onUpdate:show":$}=e;D&&fe(D,x),$&&fe($,x),P&&!x&&fe(P,x)}Ee(bn,{isMountedRef:r,mergedThemeRef:l,mergedClsPrefixRef:t,doUpdateShow:F,doUpdateHeight:g,doUpdateWidth:v});const H=k(()=>{const{common:{cubicBezierEaseInOut:x,cubicBezierEaseIn:P,cubicBezierEaseOut:D},self:{color:$,textColor:U,boxShadow:y,lineHeight:I,headerPadding:S,footerPadding:Z,bodyPadding:ee,titleFontSize:J,titleTextColor:M,titleFontWeight:Q,headerBorderBottom:ne,footerBorderTop:j,closeIconColor:Y,closeIconColorHover:ie,closeIconColorPressed:ve,closeColorHover:Ce,closeColorPressed:Me,closeIconSize:Be,closeSize:pe,closeBorderRadius:ue,resizableTriggerColorHover:ke}}=l.value;return{"--n-line-height":I,"--n-color":$,"--n-text-color":U,"--n-box-shadow":y,"--n-bezier":x,"--n-bezier-out":D,"--n-bezier-in":P,"--n-header-padding":S,"--n-body-padding":ee,"--n-footer-padding":Z,"--n-title-text-color":M,"--n-title-font-size":J,"--n-title-font-weight":Q,"--n-header-border-bottom":ne,"--n-footer-border-top":j,"--n-close-icon-color":Y,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":ve,"--n-close-size":pe,"--n-close-color-hover":Ce,"--n-close-color-pressed":Me,"--n-close-icon-size":Be,"--n-close-border-radius":ue,"--n-resize-trigger-color-hover":ke}}),R=n?Xe("drawer",void 0,H,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:p,handleMaskClick:w,handleEsc:C,mergedTheme:l,cssVars:n?void 0:H,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return s(pr,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),_t(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(Bt,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(mc,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Jl,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Fc={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Bc=q({name:"DrawerContent",props:Fc,setup(){const e=$e(bn,null);e||wr("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyStyle:r,bodyContentStyle:l,headerStyle:i,footerStyle:a,scrollbarProps:c,closable:d,$slots:u}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},u.header||e||d?s("div",{class:`${t}-drawer-header`,style:i,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},u.header!==void 0?u.header():e),d&&s(hn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?s("div",{class:`${t}-drawer-body`,style:r,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:l,role:"none"},u)):s(Ro,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},c,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:l}),u),u.footer?s("div",{class:`${t}-drawer-footer`,style:a,role:"none"},u.footer()):null)}}),rr=1,Ur=rt("n-grid"),jr=1,Ac={span:{type:[Number,String],default:jr},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Kr=q({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Ac,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:o,overflowRef:n,layoutShiftDisabledRef:r}=$e(Ur),l=ti();return{overflow:n,itemStyle:o,layoutShiftDisabled:r,mergedXGap:k(()=>Ze(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=jr,privateShow:a=!0,privateColStart:c=void 0,privateOffset:d=0}=l.vnode.props,{value:u}=t,h=Ze(u||0);return{display:a?"":"none",gridColumn:`${c??`span ${i}`} / span ${i}`,marginLeft:d?`calc((100% - (${i} - 1) * ${h}) / ${i} * ${d} + ${h} * ${d})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:o,offset:n,mergedXGap:r}=this;return s("div",{style:{gridColumn:`span ${o} / span ${o}`,marginLeft:n?`calc((100% - (${o} - 1) * ${r}) / ${o} * ${n} + ${r} * ${n})`:""}},this.$slots)}return s("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),Ec={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Wr=24,Xo="__ssr__",Oc={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Wr},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Gr=q({name:"Grid",inheritAttrs:!1,props:Oc,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:o}=Ke(e),n=/^\d+$/,r=L(void 0),l=fa((o==null?void 0:o.value)||Ec),i=Ae(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),a=k(()=>{if(i.value)return e.responsive==="self"?r.value:l.value}),c=Ae(()=>{var C;return(C=Number(to(e.cols.toString(),a.value)))!==null&&C!==void 0?C:Wr}),d=Ae(()=>to(e.xGap.toString(),a.value)),u=Ae(()=>to(e.yGap.toString(),a.value)),h=C=>{r.value=C.contentRect.width},v=C=>{Sr(h,C)},g=L(!1),p=k(()=>{if(e.responsive==="self")return v}),w=L(!1),z=L();return ut(()=>{const{value:C}=z;C&&C.hasAttribute(Xo)&&(C.removeAttribute(Xo),w.value=!0)}),Ee(Ur,{layoutShiftDisabledRef:he(e,"layoutShiftDisabled"),isSsrRef:w,itemStyleRef:he(e,"itemStyle"),xGapRef:d,overflowRef:g}),{isSsr:!mr,contentEl:z,mergedClsPrefix:t,style:k(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:Ze(e.xGap),rowGap:Ze(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${c.value}, minmax(0, 1fr))`,columnGap:Ze(d.value),rowGap:Ze(u.value)}),isResponsive:i,responsiveQuery:a,responsiveCols:c,handleResize:p,overflow:g}},render(){if(this.layoutShiftDisabled)return s("div",pt({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,o,n,r,l,i,a;this.overflow=!1;const c=yo(Hi(this)),d=[],{collapsed:u,collapsedRows:h,responsiveCols:v,responsiveQuery:g}=this;c.forEach(F=>{var H,R,x,P;if(((H=F==null?void 0:F.type)===null||H===void 0?void 0:H.__GRID_ITEM__)!==!0)return;if(sa(F)){const U=on(F);U.props?U.props.privateShow=!1:U.props={privateShow:!1},d.push({child:U,rawChildSpan:0});return}F.dirs=((R=F.dirs)===null||R===void 0?void 0:R.filter(({dir:U})=>U!==It))||null;const D=on(F),$=Number((P=to((x=D.props)===null||x===void 0?void 0:x.span,g))!==null&&P!==void 0?P:rr);$!==0&&d.push({child:D,rawChildSpan:$})});let p=0;const w=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(w!=null&&w.props){const F=(o=w.props)===null||o===void 0?void 0:o.suffix;F!==void 0&&F!==!1&&(p=(r=(n=w.props)===null||n===void 0?void 0:n.span)!==null&&r!==void 0?r:rr,w.props.privateSpan=p,w.props.privateColStart=v+1-p,w.props.privateShow=(l=w.props.privateShow)!==null&&l!==void 0?l:!0)}let z=0,C=!1;for(const{child:F,rawChildSpan:H}of d){if(C&&(this.overflow=!0),!C){const R=Number((a=to((i=F.props)===null||i===void 0?void 0:i.offset,g))!==null&&a!==void 0?a:0),x=Math.min(H+R,v);if(F.props?(F.props.privateSpan=x,F.props.privateOffset=R):F.props={privateSpan:x,privateOffset:R},u){const P=z%v;x+P>v&&(z+=v-P),x+z+p>h*v?C=!0:z+=x}}C&&(F.props?F.props.privateShow!==!0&&(F.props.privateShow=!1):F.props={privateShow:!1})}return s("div",pt({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Xo]:this.isSsr||void 0},this.$attrs),d.map(({child:F})=>F))};return this.isResponsive&&this.responsive==="self"?s(io,{onResize:this.handleResize},{default:e}):e()}}),Dc=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},Nc=oi({name:"InputNumber",common:$o,peers:{Button:ni,Input:ri},self:Dc}),Lc=Nc,Hc=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},li),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:l,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ze(t,{alpha:.2})}`})},Vc={name:"Switch",common:$o,self:Hc},Uc=Vc;function jc(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Kc(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function Yo(e){return e==null?!0:!Number.isNaN(e)}function lr(e,t){return e==null?"":t===void 0?String(e):e.toFixed(t)}function Zo(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const Wc=B([b("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),b("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ir=800,ar=100,Gc=Object.assign(Object.assign({},we.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),qc=q({name:"InputNumber",props:Gc,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:o,mergedRtlRef:n}=Ke(e),r=we("InputNumber","-input-number",Wc,Lc,e,o),{localeRef:l}=Mo("InputNumber"),i=Io(e),{mergedSizeRef:a,mergedDisabledRef:c,mergedStatusRef:d}=i,u=L(null),h=L(null),v=L(null),g=L(e.defaultValue),p=he(e,"value"),w=Je(p,g),z=L(""),C=_=>{const m=String(_).split(".")[1];return m?m.length:0},F=_=>{const m=[e.min,e.max,e.step,_].map(V=>V===void 0?0:C(V));return Math.max(...m)},H=Ae(()=>{const{placeholder:_}=e;return _!==void 0?_:l.value.placeholder}),R=Ae(()=>{const _=Zo(e.step);return _!==null?_===0?1:Math.abs(_):1}),x=Ae(()=>{const _=Zo(e.min);return _!==null?_:null}),P=Ae(()=>{const _=Zo(e.max);return _!==null?_:null}),D=_=>{const{value:m}=w;if(_===m){U();return}const{"onUpdate:value":V,onUpdateValue:oe,onChange:E}=e,{nTriggerFormInput:G,nTriggerFormChange:re}=i;E&&fe(E,_),oe&&fe(oe,_),V&&fe(V,_),g.value=_,G(),re()},$=({offset:_,doUpdateIfValid:m,fixPrecision:V,isInputing:oe})=>{const{value:E}=z;if(oe&&Kc(E))return!1;const G=(e.parse||jc)(E);if(G===null)return m&&D(null),null;if(Yo(G)){const re=C(G),{precision:Se}=e;if(Se!==void 0&&Se<re&&!V)return!1;let _e=parseFloat((G+_).toFixed(Se??F(G)));if(Yo(_e)){const{value:Le}=P,{value:it}=x;if(Le!==null&&_e>Le){if(!m||oe)return!1;_e=Le}if(it!==null&&_e<it){if(!m||oe)return!1;_e=it}return e.validator&&!e.validator(_e)?!1:(m&&D(_e),_e)}}return!1},U=()=>{const{value:_}=w;if(Yo(_)){const{format:m,precision:V}=e;m?z.value=m(_):_===null||V===void 0||C(_)>V?z.value=lr(_,void 0):z.value=lr(_,V)}else z.value=String(_)};U();const y=Ae(()=>$({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),I=Ae(()=>{const{value:_}=w;if(e.validator&&_===null)return!1;const{value:m}=R;return $({offset:-m,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),S=Ae(()=>{const{value:_}=w;if(e.validator&&_===null)return!1;const{value:m}=R;return $({offset:+m,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Z(_){const{onFocus:m}=e,{nTriggerFormFocus:V}=i;m&&fe(m,_),V()}function ee(_){var m,V;if(_.target===((m=u.value)===null||m===void 0?void 0:m.wrapperElRef))return;const oe=$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(oe!==!1){const re=(V=u.value)===null||V===void 0?void 0:V.inputElRef;re&&(re.value=String(oe||"")),w.value===oe&&U()}else U();const{onBlur:E}=e,{nTriggerFormBlur:G}=i;E&&fe(E,_),G(),dt(()=>{U()})}function J(_){const{onClear:m}=e;m&&fe(m,_)}function M(){const{value:_}=S;if(!_){ue();return}const{value:m}=w;if(m===null)e.validator||D(Y());else{const{value:V}=R;$({offset:V,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function Q(){const{value:_}=I;if(!_){pe();return}const{value:m}=w;if(m===null)e.validator||D(Y());else{const{value:V}=R;$({offset:-V,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ne=Z,j=ee;function Y(){if(e.validator)return null;const{value:_}=x,{value:m}=P;return _!==null?Math.max(0,_):m!==null?Math.min(0,m):0}function ie(_){J(_),D(null)}function ve(_){var m,V,oe;!((m=v.value)===null||m===void 0)&&m.$el.contains(_.target)&&_.preventDefault(),!((V=h.value)===null||V===void 0)&&V.$el.contains(_.target)&&_.preventDefault(),(oe=u.value)===null||oe===void 0||oe.activate()}let Ce=null,Me=null,Be=null;function pe(){Be&&(window.clearTimeout(Be),Be=null),Ce&&(window.clearInterval(Ce),Ce=null)}function ue(){Te&&(window.clearTimeout(Te),Te=null),Me&&(window.clearInterval(Me),Me=null)}function ke(){pe(),Be=window.setTimeout(()=>{Ce=window.setInterval(()=>{Q()},ar)},ir),ot("mouseup",document,pe,{once:!0})}let Te=null;function Ve(){ue(),Te=window.setTimeout(()=>{Me=window.setInterval(()=>{M()},ar)},ir),ot("mouseup",document,ue,{once:!0})}const Ue=()=>{Me||M()},et=()=>{Ce||Q()};function Ye(_){var m,V;if(_.key==="Enter"){if(_.target===((m=u.value)===null||m===void 0?void 0:m.wrapperElRef))return;$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((V=u.value)===null||V===void 0||V.deactivate())}else if(_.key==="ArrowUp"){if(!S.value||e.keyboard.ArrowUp===!1)return;_.preventDefault(),$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&M()}else if(_.key==="ArrowDown"){if(!I.value||e.keyboard.ArrowDown===!1)return;_.preventDefault(),$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&Q()}}function Ge(_){z.value=_,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&$({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Pe(w,()=>{U()});const Ne={focus:()=>{var _;return(_=u.value)===null||_===void 0?void 0:_.focus()},blur:()=>{var _;return(_=u.value)===null||_===void 0?void 0:_.blur()}},W=fn("InputNumber",n,o);return Object.assign(Object.assign({},Ne),{rtlEnabled:W,inputInstRef:u,minusButtonInstRef:h,addButtonInstRef:v,mergedClsPrefix:o,mergedBordered:t,uncontrolledValue:g,mergedValue:w,mergedPlaceholder:H,displayedValueInvalid:y,mergedSize:a,mergedDisabled:c,displayedValue:z,addable:S,minusable:I,mergedStatus:d,handleFocus:ne,handleBlur:j,handleClear:ie,handleMouseDown:ve,handleAddClick:Ue,handleMinusClick:et,handleAddMousedown:Ve,handleMinusMousedown:ke,handleKeyDown:Ye,handleUpdateDisplayedValue:Ge,mergedTheme:r,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:k(()=>{const{self:{iconColorDisabled:_}}=r.value,[m,V,oe,E]=st(_);return{textColorTextDisabled:`rgb(${m}, ${V}, ${oe})`,opacityDisabled:`${E}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,o=()=>s(Vn,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ao(t["minus-icon"],()=>[s(Mt,{clsPrefix:e},{default:()=>s(ka,null)})])}),n=()=>s(Vn,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ao(t["add-icon"],()=>[s(Mt,{clsPrefix:e},{default:()=>s(Mr,null)})])});return s("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},s($r,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var r;return this.showButton&&this.buttonPlacement==="both"?[o(),qe(t.prefix,l=>l?s("span",{class:`${e}-input-number-prefix`},l):null)]:(r=t.prefix)===null||r===void 0?void 0:r.call(t)},suffix:()=>{var r;return this.showButton?[qe(t.suffix,l=>l?s("span",{class:`${e}-input-number-suffix`},l):null),this.buttonPlacement==="right"?o():null,n()]:(r=t.suffix)===null||r===void 0?void 0:r.call(t)}}))}}),Xc=rt("n-layout-sider"),vo=rt("n-menu"),Tn=rt("n-submenu"),Mn=rt("n-menu-item-group"),go=8;function Fn(e){const t=$e(vo),{props:o,mergedCollapsedRef:n}=t,r=$e(Tn,null),l=$e(Mn,null),i=k(()=>o.mode==="horizontal"),a=k(()=>i.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=k(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),d=k(()=>{var v;return!i.value&&e.root&&n.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),u=k(()=>{if(i.value)return;const{collapsedWidth:v,indent:g,rootIndent:p}=o,{root:w,isGroup:z}=e,C=p===void 0?g:p;if(w)return n.value?v/2-c.value/2:C;if(l)return g/2+l.paddingLeftRef.value;if(r)return(z?g/2:g)+r.paddingLeftRef.value}),h=k(()=>{const{collapsedWidth:v,indent:g,rootIndent:p}=o,{value:w}=c,{root:z}=e;return i.value||!z||!n.value?go:(p===void 0?g:p)+w+go-(v+w)/2});return{dropdownPlacement:a,activeIconSize:d,maxIconSize:c,paddingLeft:u,iconMarginRight:h,NMenu:t,NSubmenu:r}}const Bn={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},qr=Object.assign(Object.assign({},Bn),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Yc=q({name:"MenuOptionGroup",props:qr,setup(e){Ee(Tn,null);const t=Fn(e);Ee(Mn,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=$e(vo);return function(){const{value:r}=o,l=t.paddingLeft.value,{nodeProps:i}=n,a=i==null?void 0:i(e.tmNode.rawNode);return s("div",{class:`${r}-menu-item-group`,role:"group"},s("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),He(e.title),e.extra?s(Re,null," ",He(e.extra)):null),s("div",null,e.tmNodes.map(c=>An(c,n))))}}}),Xr=q({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=$e(vo);return{menuProps:t,style:k(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:k(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:l}}=this,i=o?o(t.rawNode):He(this.icon);return s("div",{onClick:a=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):He(this.title),this.extra||r?s("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):He(this.extra)):null),this.showArrow?s(Mt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):s(Sa,null)}):null)}}),Yr=Object.assign(Object.assign({},Bn),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Zc=q({name:"Submenu",props:Yr,setup(e){const t=Fn(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:l,mergedThemeRef:i}=o,a=k(()=>{const{disabled:v}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:v}),c=L(!1);Ee(Tn,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),Ee(Mn,null);function d(){const{onClick:v}=e;v&&v()}function u(){a.value||(l.value||o.toggleExpand(e.internalKey),d())}function h(v){c.value=v}return{menuProps:r,mergedTheme:i,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:o.mergedValueRef,childActive:Ae(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:k(()=>r.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:k(()=>!a.value&&(r.mode==="horizontal"||l.value)),handlePopoverShowChange:h,handleClick:u}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:i,paddingLeft:a,collapsed:c,mergedDisabled:d,maxIconSize:u,activeIconSize:h,title:v,childActive:g,icon:p,handleClick:w,menuProps:{nodeProps:z},dropdownShow:C,iconMarginRight:F,tmNode:H,mergedClsPrefix:R}=this,x=z==null?void 0:z(H.rawNode);return s("div",Object.assign({},x,{class:[`${R}-menu-item`,x==null?void 0:x.class],role:"menuitem"}),s(Xr,{tmNode:H,paddingLeft:a,collapsed:c,disabled:d,iconMarginRight:F,maxIconSize:u,activeIconSize:h,title:v,extra:this.extra,showArrow:!i,childActive:g,clsPrefix:R,icon:p,hover:C,onClick:w}))},l=()=>s(ii,null,{default:()=>{const{tmNodes:i,collapsed:a}=this;return a?null:s("div",{class:`${t}-submenu-children`,role:"menu"},i.map(c=>An(c,this.menuProps)))}});return this.root?s(Bo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:l())}):s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),l())}}),Zr=Object.assign(Object.assign({},Bn),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Qc=q({name:"MenuOption",props:Zr,setup(e){const t=Fn(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:l,mergedCollapsedRef:i}=n,a=o?o.mergedDisabledRef:{value:!1},c=k(()=>a.value||e.disabled);function d(h){const{onClick:v}=e;v&&v(h)}function u(h){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),d(h))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Ae(()=>e.root&&i.value&&r.mode!=="horizontal"&&!c.value),selected:Ae(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,l=r==null?void 0:r(o.rawNode);return s("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),s(zn,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):He(this.title),trigger:()=>s(Xr,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Jc=q({name:"MenuDivider",setup(){const e=$e(vo),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:s("div",{class:`${t.value}-menu-divider`})}}),ed=mn(qr),td=mn(Zr),od=mn(Yr);function Qr(e){return e.type==="divider"||e.type==="render"}function nd(e){return e.type==="divider"}function An(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Qr(o))return nd(o)?s(Jc,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:l,level:i,isGroup:a}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:i,root:i===0,isGroup:a});return e.children?e.isGroup?s(Yc,xo(c,ed,{tmNode:e,tmNodes:e.children,key:l})):s(Zc,xo(c,od,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):s(Qc,xo(c,td,{key:l,tmNode:e}))}const sr=[B("&::before","background-color: var(--n-item-color-hover);"),T("arrow",`
 color: var(--n-arrow-color-hover);
 `),T("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[B("a",`
 color: var(--n-item-text-color-hover);
 `),T("extra",`
 color: var(--n-item-text-color-hover);
 `)])],cr=[T("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[B("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],rd=B([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[B("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[N("selected",[T("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[B("a","color: var(--n-item-text-color-active-horizontal);"),T("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[B("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),T("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),je("disabled",[je("selected, child-active",[B("&:focus-within",cr)]),N("selected",[zt(null,[T("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[B("a","color: var(--n-item-text-color-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[zt(null,[T("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[B("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),zt("border-bottom: 2px solid var(--n-border-color-horizontal);",cr)]),b("menu-item-content-header",[B("a","color: var(--n-item-text-color-horizontal);")])])]),N("collapsed",[b("menu-item-content",[N("selected",[B("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),b("menu-item-content-header","opacity: 0;"),T("arrow","opacity: 0;"),T("icon","color: var(--n-item-icon-color-collapsed);")])]),b("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),b("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B("> *","z-index: 1;"),B("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[T("arrow","transform: rotate(0);")]),N("selected",[B("&::before","background-color: var(--n-item-color-active);"),T("arrow","color: var(--n-arrow-color-active);"),T("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[B("a","color: var(--n-item-text-color-active);"),T("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[B("a",`
 color: var(--n-item-text-color-child-active);
 `),T("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),T("arrow",`
 color: var(--n-arrow-color-child-active);
 `),T("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),je("disabled",[je("selected, child-active",[B("&:focus-within",sr)]),N("selected",[zt(null,[T("arrow","color: var(--n-arrow-color-active-hover);"),T("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[B("a","color: var(--n-item-text-color-active-hover);"),T("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[zt(null,[T("arrow","color: var(--n-arrow-color-child-active-hover);"),T("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[B("a","color: var(--n-item-text-color-child-active-hover);"),T("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[zt(null,[B("&::before","background-color: var(--n-item-color-active-hover);")])]),zt(null,sr)]),T("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),T("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),b("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[B("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),T("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),b("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[b("menu-item-content",`
 height: var(--n-item-height);
 `),b("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ai({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),b("menu-tooltip",[B("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function zt(e,t){return[N("hover",e,t),B("&:hover",e,t)]}const ld=Object.assign(Object.assign({},we.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),En=q({name:"Menu",props:ld,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=we("Menu","-menu",rd,si,e,t),r=$e(Xc,null),l=k(()=>{var $;const{collapsed:U}=e;if(U!==void 0)return U;if(r){const{collapseModeRef:y,collapsedRef:I}=r;if(y.value==="width")return($=I.value)!==null&&$!==void 0?$:!1}return!1}),i=k(()=>{const{keyField:$,childrenField:U,disabledField:y}=e;return $n(e.items||e.options,{getIgnored(I){return Qr(I)},getChildren(I){return I[U]},getDisabled(I){return I[y]},getKey(I){var S;return(S=I[$])!==null&&S!==void 0?S:I.name}})}),a=k(()=>new Set(i.value.treeNodes.map($=>$.key))),{watchProps:c}=e,d=L(null);c!=null&&c.includes("defaultValue")?wt(()=>{d.value=e.defaultValue}):d.value=e.defaultValue;const u=he(e,"value"),h=Je(u,d),v=L([]),g=()=>{v.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(h.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?wt(g):g();const p=ko(e,["expandedNames","expandedKeys"]),w=Je(p,v),z=k(()=>i.value.treeNodes),C=k(()=>i.value.getPath(h.value).keyPath);Ee(vo,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:h,mergedExpandedKeysRef:w,activePathRef:C,mergedClsPrefixRef:t,isHorizontalRef:k(()=>e.mode==="horizontal"),invertedRef:he(e,"inverted"),doSelect:F,toggleExpand:R});function F($,U){const{"onUpdate:value":y,onUpdateValue:I,onSelect:S}=e;I&&fe(I,$,U),y&&fe(y,$,U),S&&fe(S,$,U),d.value=$}function H($){const{"onUpdate:expandedKeys":U,onUpdateExpandedKeys:y,onExpandedNamesChange:I,onOpenNamesChange:S}=e;U&&fe(U,$),y&&fe(y,$),I&&fe(I,$),S&&fe(S,$),v.value=$}function R($){const U=Array.from(w.value),y=U.findIndex(I=>I===$);if(~y)U.splice(y,1);else{if(e.accordion&&a.value.has($)){const I=U.findIndex(S=>a.value.has(S));I>-1&&U.splice(I,1)}U.push($)}H(U)}const x=$=>{const U=i.value.getPath($??h.value,{includeSelf:!1}).keyPath;if(!U.length)return;const y=Array.from(w.value),I=new Set([...y,...U]);e.accordion&&a.value.forEach(S=>{I.has(S)&&!U.includes(S)&&I.delete(S)}),H(Array.from(I))},P=k(()=>{const{inverted:$}=e,{common:{cubicBezierEaseInOut:U},self:y}=n.value,{borderRadius:I,borderColorHorizontal:S,fontSize:Z,itemHeight:ee,dividerColor:J}=y,M={"--n-divider-color":J,"--n-bezier":U,"--n-font-size":Z,"--n-border-color-horizontal":S,"--n-border-radius":I,"--n-item-height":ee};return $?(M["--n-group-text-color"]=y.groupTextColorInverted,M["--n-color"]=y.colorInverted,M["--n-item-text-color"]=y.itemTextColorInverted,M["--n-item-text-color-hover"]=y.itemTextColorHoverInverted,M["--n-item-text-color-active"]=y.itemTextColorActiveInverted,M["--n-item-text-color-child-active"]=y.itemTextColorChildActiveInverted,M["--n-item-text-color-child-active-hover"]=y.itemTextColorChildActiveInverted,M["--n-item-text-color-active-hover"]=y.itemTextColorActiveHoverInverted,M["--n-item-icon-color"]=y.itemIconColorInverted,M["--n-item-icon-color-hover"]=y.itemIconColorHoverInverted,M["--n-item-icon-color-active"]=y.itemIconColorActiveInverted,M["--n-item-icon-color-active-hover"]=y.itemIconColorActiveHoverInverted,M["--n-item-icon-color-child-active"]=y.itemIconColorChildActiveInverted,M["--n-item-icon-color-child-active-hover"]=y.itemIconColorChildActiveHoverInverted,M["--n-item-icon-color-collapsed"]=y.itemIconColorCollapsedInverted,M["--n-item-text-color-horizontal"]=y.itemTextColorHorizontalInverted,M["--n-item-text-color-hover-horizontal"]=y.itemTextColorHoverHorizontalInverted,M["--n-item-text-color-active-horizontal"]=y.itemTextColorActiveHorizontalInverted,M["--n-item-text-color-child-active-horizontal"]=y.itemTextColorChildActiveHorizontalInverted,M["--n-item-text-color-child-active-hover-horizontal"]=y.itemTextColorChildActiveHoverHorizontalInverted,M["--n-item-text-color-active-hover-horizontal"]=y.itemTextColorActiveHoverHorizontalInverted,M["--n-item-icon-color-horizontal"]=y.itemIconColorHorizontalInverted,M["--n-item-icon-color-hover-horizontal"]=y.itemIconColorHoverHorizontalInverted,M["--n-item-icon-color-active-horizontal"]=y.itemIconColorActiveHorizontalInverted,M["--n-item-icon-color-active-hover-horizontal"]=y.itemIconColorActiveHoverHorizontalInverted,M["--n-item-icon-color-child-active-horizontal"]=y.itemIconColorChildActiveHorizontalInverted,M["--n-item-icon-color-child-active-hover-horizontal"]=y.itemIconColorChildActiveHoverHorizontalInverted,M["--n-arrow-color"]=y.arrowColorInverted,M["--n-arrow-color-hover"]=y.arrowColorHoverInverted,M["--n-arrow-color-active"]=y.arrowColorActiveInverted,M["--n-arrow-color-active-hover"]=y.arrowColorActiveHoverInverted,M["--n-arrow-color-child-active"]=y.arrowColorChildActiveInverted,M["--n-arrow-color-child-active-hover"]=y.arrowColorChildActiveHoverInverted,M["--n-item-color-hover"]=y.itemColorHoverInverted,M["--n-item-color-active"]=y.itemColorActiveInverted,M["--n-item-color-active-hover"]=y.itemColorActiveHoverInverted,M["--n-item-color-active-collapsed"]=y.itemColorActiveCollapsedInverted):(M["--n-group-text-color"]=y.groupTextColor,M["--n-color"]=y.color,M["--n-item-text-color"]=y.itemTextColor,M["--n-item-text-color-hover"]=y.itemTextColorHover,M["--n-item-text-color-active"]=y.itemTextColorActive,M["--n-item-text-color-child-active"]=y.itemTextColorChildActive,M["--n-item-text-color-child-active-hover"]=y.itemTextColorChildActiveHover,M["--n-item-text-color-active-hover"]=y.itemTextColorActiveHover,M["--n-item-icon-color"]=y.itemIconColor,M["--n-item-icon-color-hover"]=y.itemIconColorHover,M["--n-item-icon-color-active"]=y.itemIconColorActive,M["--n-item-icon-color-active-hover"]=y.itemIconColorActiveHover,M["--n-item-icon-color-child-active"]=y.itemIconColorChildActive,M["--n-item-icon-color-child-active-hover"]=y.itemIconColorChildActiveHover,M["--n-item-icon-color-collapsed"]=y.itemIconColorCollapsed,M["--n-item-text-color-horizontal"]=y.itemTextColorHorizontal,M["--n-item-text-color-hover-horizontal"]=y.itemTextColorHoverHorizontal,M["--n-item-text-color-active-horizontal"]=y.itemTextColorActiveHorizontal,M["--n-item-text-color-child-active-horizontal"]=y.itemTextColorChildActiveHorizontal,M["--n-item-text-color-child-active-hover-horizontal"]=y.itemTextColorChildActiveHoverHorizontal,M["--n-item-text-color-active-hover-horizontal"]=y.itemTextColorActiveHoverHorizontal,M["--n-item-icon-color-horizontal"]=y.itemIconColorHorizontal,M["--n-item-icon-color-hover-horizontal"]=y.itemIconColorHoverHorizontal,M["--n-item-icon-color-active-horizontal"]=y.itemIconColorActiveHorizontal,M["--n-item-icon-color-active-hover-horizontal"]=y.itemIconColorActiveHoverHorizontal,M["--n-item-icon-color-child-active-horizontal"]=y.itemIconColorChildActiveHorizontal,M["--n-item-icon-color-child-active-hover-horizontal"]=y.itemIconColorChildActiveHoverHorizontal,M["--n-arrow-color"]=y.arrowColor,M["--n-arrow-color-hover"]=y.arrowColorHover,M["--n-arrow-color-active"]=y.arrowColorActive,M["--n-arrow-color-active-hover"]=y.arrowColorActiveHover,M["--n-arrow-color-child-active"]=y.arrowColorChildActive,M["--n-arrow-color-child-active-hover"]=y.arrowColorChildActiveHover,M["--n-item-color-hover"]=y.itemColorHover,M["--n-item-color-active"]=y.itemColorActive,M["--n-item-color-active-hover"]=y.itemColorActiveHover,M["--n-item-color-active-collapsed"]=y.itemColorActiveCollapsed),M}),D=o?Xe("menu",k(()=>e.inverted?"a":"b"),P,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:p,uncontrolledExpanededKeys:v,mergedExpandedKeys:w,uncontrolledValue:d,mergedValue:h,activePath:C,tmNodes:z,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:P,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender,showOption:x}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),s("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>An(r,this.$props)))}}),id=Object.assign(Object.assign({},we.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),ad=q({name:"Scrollbar",props:id,setup(){const e=L(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return s(Ro,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Ao=ad,sd=b("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[T("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),T("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),T("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),b("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Un({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),T("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),T("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),B("&:focus",[T("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),N("round",[T("rail","border-radius: calc(var(--n-rail-height) / 2);",[T("button","border-radius: calc(var(--n-button-height) / 2);")])]),je("disabled",[je("icon",[N("rubber-band",[N("pressed",[T("rail",[T("button","max-width: var(--n-button-width-pressed);")])]),T("rail",[B("&:active",[T("button","max-width: var(--n-button-width-pressed);")])]),N("active",[N("pressed",[T("rail",[T("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),T("rail",[B("&:active",[T("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),N("active",[T("rail",[T("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),T("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[T("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Un()]),T("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),N("active",[T("rail","background-color: var(--n-rail-color-active);")]),N("loading",[T("rail",`
 cursor: wait;
 `)]),N("disabled",[T("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),cd=Object.assign(Object.assign({},we.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ro;const On=q({name:"Switch",props:cd,setup(e){ro===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ro=CSS.supports("width","max(1px)"):ro=!1:ro=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ke(e),n=we("Switch","-switch",sd,Uc,e,t),r=Io(e),{mergedSizeRef:l,mergedDisabledRef:i}=r,a=L(e.defaultValue),c=he(e,"value"),d=Je(c,a),u=k(()=>d.value===e.checkedValue),h=L(!1),v=L(!1),g=k(()=>{const{railStyle:$}=e;if($)return $({focused:v.value,checked:u.value})});function p($){const{"onUpdate:value":U,onChange:y,onUpdateValue:I}=e,{nTriggerFormInput:S,nTriggerFormChange:Z}=r;U&&fe(U,$),I&&fe(I,$),y&&fe(y,$),a.value=$,S(),Z()}function w(){const{nTriggerFormFocus:$}=r;$()}function z(){const{nTriggerFormBlur:$}=r;$()}function C(){e.loading||i.value||(d.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue))}function F(){v.value=!0,w()}function H(){v.value=!1,z(),h.value=!1}function R($){e.loading||i.value||$.key===" "&&(d.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue),h.value=!1)}function x($){e.loading||i.value||$.key===" "&&($.preventDefault(),h.value=!0)}const P=k(()=>{const{value:$}=l,{self:{opacityDisabled:U,railColor:y,railColorActive:I,buttonBoxShadow:S,buttonColor:Z,boxShadowFocus:ee,loadingColor:J,textColor:M,iconColor:Q,[se("buttonHeight",$)]:ne,[se("buttonWidth",$)]:j,[se("buttonWidthPressed",$)]:Y,[se("railHeight",$)]:ie,[se("railWidth",$)]:ve,[se("railBorderRadius",$)]:Ce,[se("buttonBorderRadius",$)]:Me},common:{cubicBezierEaseInOut:Be}}=n.value;let pe,ue,ke;return ro?(pe=`calc((${ie} - ${ne}) / 2)`,ue=`max(${ie}, ${ne})`,ke=`max(${ve}, calc(${ve} + ${ne} - ${ie}))`):(pe=Ze((tt(ie)-tt(ne))/2),ue=Ze(Math.max(tt(ie),tt(ne))),ke=tt(ie)>tt(ne)?ve:Ze(tt(ve)+tt(ne)-tt(ie))),{"--n-bezier":Be,"--n-button-border-radius":Me,"--n-button-box-shadow":S,"--n-button-color":Z,"--n-button-width":j,"--n-button-width-pressed":Y,"--n-button-height":ne,"--n-height":ue,"--n-offset":pe,"--n-opacity-disabled":U,"--n-rail-border-radius":Ce,"--n-rail-color":y,"--n-rail-color-active":I,"--n-rail-height":ie,"--n-rail-width":ve,"--n-width":ke,"--n-box-shadow-focus":ee,"--n-loading-color":J,"--n-text-color":M,"--n-icon-color":Q}}),D=o?Xe("switch",k(()=>l.value[0]),P,e):void 0;return{handleClick:C,handleBlur:H,handleFocus:F,handleKeyup:R,handleKeydown:x,mergedRailStyle:g,pressed:h,mergedClsPrefix:t,mergedValue:d,checked:u,mergedDisabled:i,cssVars:o?void 0:P,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:l}=this;r==null||r();const{checked:i,unchecked:a,icon:c,"checked-icon":d,"unchecked-icon":u}=l,h=!(No(c)&&No(d)&&No(u));return s("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},s("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},qe(i,v=>qe(a,g=>v||g?s("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),v),s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),g)):null)),s("div",{class:`${e}-switch__button`},qe(c,v=>qe(d,g=>qe(u,p=>s(ci,null,{default:()=>this.loading?s(vr,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(g||v)?s("div",{class:`${e}-switch__button-icon`,key:g?"checked-icon":"icon"},g||v):!this.checked&&(p||v)?s("div",{class:`${e}-switch__button-icon`,key:p?"unchecked-icon":"icon"},p||v):null})))),qe(i,v=>v&&s("div",{key:"checked",class:`${e}-switch__checked`},v)),qe(a,v=>v&&s("div",{key:"unchecked",class:`${e}-switch__unchecked`},v)))))}}),Dn=rt("n-tabs"),Jr={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},dd=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Jr,setup(e){const t=$e(Dn,null);return t||wr("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ud=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},di(Jr,["displayDirective"])),dn=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ud,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:n,closableRef:r,tabStyleRef:l,tabChangeIdRef:i,onBeforeLeaveRef:a,triggerRef:c,handleAdd:d,activateTab:u,handleClose:h}=$e(Dn);return{trigger:c,mergedClosable:k(()=>{if(e.internalAddable)return!1;const{closable:v}=e;return v===void 0?r.value:v}),style:l,clsPrefix:t,value:o,type:n,handleClose(v){v.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){d();return}const{name:v}=e,g=++i.id;if(v!==o.value){const{value:p}=a;p?Promise.resolve(p(e.name,o.value)).then(w=>{w&&i.id===g&&u(v)}):u(v)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:n,label:r,tab:l,value:i,mergedClosable:a,style:c,trigger:d,$slots:{default:u}}=this,h=r??l;return s("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${t}-tabs-tab-pad`}):null,s("div",Object.assign({key:o,"data-name":o,"data-disabled":n?!0:void 0},pt({class:[`${t}-tabs-tab`,i===o&&`${t}-tabs-tab--active`,n&&`${t}-tabs-tab--disabled`,a&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:d==="click"?this.activateTab:void 0,onMouseenter:d==="hover"?this.activateTab:void 0,style:e?void 0:c},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${t}-tabs-tab__label`},e?s(Re,null,s("div",{class:`${t}-tabs-tab__height-placeholder`}," "),s(Mt,{clsPrefix:t},{default:()=>s(Mr,null)})):u?u():typeof h=="object"?h:He(h??o)),a&&this.type==="card"?s(hn,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:n}):null))}}),fd=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[N("segment-type",[b("tabs-rail",[B("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),N("top",[b("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),N("left",[b("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),N("left, right",`
 flex-direction: row;
 `,[b("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),N("right",`
 flex-direction: row-reverse;
 `,[b("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),b("tabs-bar",`
 left: 0;
 `)]),N("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[b("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),b("tabs-bar",`
 top: 0;
 `)]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),N("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[T("prefix, suffix",`
 display: flex;
 align-items: center;
 `),T("prefix","padding-right: 16px;"),T("suffix","padding-left: 16px;")]),N("top, bottom",[b("tabs-nav-scroll-wrapper",[B("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),B("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),N("shadow-start",[B("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),N("shadow-end",[B("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),N("left, right",[b("tabs-nav-scroll-wrapper",[B("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),N("shadow-start",[B("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),N("shadow-end",[B("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[b("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[B("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),B("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("disabled",{cursor:"not-allowed"}),T("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),T("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[B("&.transition-disabled",`
 transition: none;
 `),N("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[B("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),B("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),B("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),B("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),B("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),N("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B("&:hover",{color:"var(--n-tab-text-color-hover)"}),N("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),N("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[N("line-type",[N("top",[T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 bottom: -1px;
 `)]),N("left",[T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 right: -1px;
 `)]),N("right",[T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 left: -1px;
 `)]),N("bottom",[T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 top: -1px;
 `)]),T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-bar",`
 border-radius: 0;
 `)]),N("card-type",[T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[N("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[T("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),je("disabled",[B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),N("closable","padding-right: 8px;"),N("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),N("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),N("left, right",[b("tabs-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),N("top",[N("card-type",[b("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[N("active",`
 border-bottom: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),N("left",[N("card-type",[b("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[N("active",`
 border-right: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),N("right",[N("card-type",[b("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[N("active",`
 border-left: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),N("bottom",[N("card-type",[b("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[N("active",`
 border-top: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),hd=Object.assign(Object.assign({},we.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),vd=q({name:"Tabs",props:hd,setup(e,{slots:t}){var o,n,r,l;const{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Ke(e),c=we("Tabs","-tabs",fd,ui,e,i),d=L(null),u=L(null),h=L(null),v=L(null),g=L(null),p=L(!0),w=L(!0),z=ko(e,["labelSize","size"]),C=ko(e,["activeName","value"]),F=L((n=(o=C.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&n!==void 0?n:t.default?(l=(r=yo(t.default())[0])===null||r===void 0?void 0:r.props)===null||l===void 0?void 0:l.name:null),H=Je(C,F),R={id:0},x=k(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Pe(H,()=>{R.id=0,U(),y()});function P(){var W;const{value:_}=H;return _===null?null:(W=d.value)===null||W===void 0?void 0:W.querySelector(`[data-name="${_}"]`)}function D(W){if(e.type==="card")return;const{value:_}=u;if(_&&W){const m=`${i.value}-tabs-bar--disabled`,{barWidth:V,placement:oe}=e;if(W.dataset.disabled==="true"?_.classList.add(m):_.classList.remove(m),["top","bottom"].includes(oe)){if($(["top","maxHeight","height"]),typeof V=="number"&&W.offsetWidth>=V){const E=Math.floor((W.offsetWidth-V)/2)+W.offsetLeft;_.style.left=`${E}px`,_.style.maxWidth=`${V}px`}else _.style.left=`${W.offsetLeft}px`,_.style.maxWidth=`${W.offsetWidth}px`;_.style.width="8192px",_.offsetWidth}else{if($(["left","maxWidth","width"]),typeof V=="number"&&W.offsetHeight>=V){const E=Math.floor((W.offsetHeight-V)/2)+W.offsetTop;_.style.top=`${E}px`,_.style.maxHeight=`${V}px`}else _.style.top=`${W.offsetTop}px`,_.style.maxHeight=`${W.offsetHeight}px`;_.style.height="8192px",_.offsetHeight}}}function $(W){const{value:_}=u;if(_)for(const m of W)_.style[m]=""}function U(){if(e.type==="card")return;const W=P();W&&D(W)}function y(W){var _;const m=(_=g.value)===null||_===void 0?void 0:_.$el;if(!m)return;const V=P();if(!V)return;const{scrollLeft:oe,offsetWidth:E}=m,{offsetLeft:G,offsetWidth:re}=V;oe>G?m.scrollTo({top:0,left:G,behavior:"smooth"}):G+re>oe+E&&m.scrollTo({top:0,left:G+re-E,behavior:"smooth"})}const I=L(null);let S=0,Z=null;function ee(W){const _=I.value;if(_){S=W.getBoundingClientRect().height;const m=`${S}px`,V=()=>{_.style.height=m,_.style.maxHeight=m};Z?(V(),Z(),Z=null):Z=V}}function J(W){const _=I.value;if(_){const m=W.getBoundingClientRect().height,V=()=>{document.body.offsetHeight,_.style.maxHeight=`${m}px`,_.style.height=`${Math.max(S,m)}px`};Z?(Z(),Z=null,V()):Z=V}}function M(){const W=I.value;W&&(W.style.maxHeight="",W.style.height="")}const Q={value:[]},ne=L("next");function j(W){const _=H.value;let m="next";for(const V of Q.value){if(V===_)break;if(V===W){m="prev";break}}ne.value=m,Y(W)}function Y(W){const{onActiveNameChange:_,onUpdateValue:m,"onUpdate:value":V}=e;_&&fe(_,W),m&&fe(m,W),V&&fe(V,W),F.value=W}function ie(W){const{onClose:_}=e;_&&fe(_,W)}function ve(){const{value:W}=u;if(!W)return;const _="transition-disabled";W.classList.add(_),U(),W.classList.remove(_)}let Ce=0;function Me(W){var _;if(W.contentRect.width===0&&W.contentRect.height===0||Ce===W.contentRect.width)return;Ce=W.contentRect.width;const{type:m}=e;(m==="line"||m==="bar")&&ve(),m!=="segment"&&Ve((_=g.value)===null||_===void 0?void 0:_.$el)}const Be=Ho(Me,64);Pe([()=>e.justifyContent,()=>e.size],()=>{dt(()=>{const{type:W}=e;(W==="line"||W==="bar")&&ve()})});const pe=L(!1);function ue(W){var _;const{target:m,contentRect:{width:V}}=W,oe=m.parentElement.offsetWidth;if(!pe.value)oe<V&&(pe.value=!0);else{const{value:E}=v;if(!E)return;oe-V>E.$el.offsetWidth&&(pe.value=!1)}Ve((_=g.value)===null||_===void 0?void 0:_.$el)}const ke=Ho(ue,64);function Te(){const{onAdd:W}=e;W&&W(),dt(()=>{const _=P(),{value:m}=g;!_||!m||m.scrollTo({left:_.offsetLeft,top:0,behavior:"smooth"})})}function Ve(W){if(!W)return;const{placement:_}=e;if(_==="top"||_==="bottom"){const{scrollLeft:m,scrollWidth:V,offsetWidth:oe}=W;p.value=m<=0,w.value=m+oe>=V}else{const{scrollTop:m,scrollHeight:V,offsetHeight:oe}=W;p.value=m<=0,w.value=m+oe>=V}}const Ue=Ho(W=>{Ve(W.target)},64);Ee(Dn,{triggerRef:he(e,"trigger"),tabStyleRef:he(e,"tabStyle"),paneClassRef:he(e,"paneClass"),paneStyleRef:he(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:he(e,"type"),closableRef:he(e,"closable"),valueRef:H,tabChangeIdRef:R,onBeforeLeaveRef:he(e,"onBeforeLeave"),activateTab:j,handleClose:ie,handleAdd:Te}),Mi(()=>{U(),y()}),wt(()=>{const{value:W}=h;if(!W)return;const{value:_}=i,m=`${_}-tabs-nav-scroll-wrapper--shadow-start`,V=`${_}-tabs-nav-scroll-wrapper--shadow-end`;p.value?W.classList.remove(m):W.classList.add(m),w.value?W.classList.remove(V):W.classList.add(V)});const et=L(null);Pe(H,()=>{if(e.type==="segment"){const W=et.value;W&&dt(()=>{W.classList.add("transition-disabled"),W.offsetWidth,W.classList.remove("transition-disabled")})}});const Ye={syncBarPosition:()=>{U()}},Ge=k(()=>{const{value:W}=z,{type:_}=e,m={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[_],V=`${W}${m}`,{self:{barColor:oe,closeIconColor:E,closeIconColorHover:G,closeIconColorPressed:re,tabColor:Se,tabBorderColor:_e,paneTextColor:Le,tabFontWeight:it,tabBorderRadius:Ct,tabFontWeightActive:Ot,colorSegment:Dt,fontWeightStrong:Nt,tabColorSegment:Qt,closeSize:Jt,closeIconSize:Lt,closeColorHover:at,closeColorPressed:A,closeBorderRadius:te,[se("panePadding",W)]:ce,[se("tabPadding",V)]:ye,[se("tabPaddingVertical",V)]:me,[se("tabGap",V)]:xe,[se("tabGap",`${V}Vertical`)]:ge,[se("tabTextColor",_)]:Oe,[se("tabTextColorActive",_)]:Ht,[se("tabTextColorHover",_)]:eo,[se("tabTextColorDisabled",_)]:Eo,[se("tabFontSize",W)]:Oo},common:{cubicBezierEaseInOut:Do}}=c.value;return{"--n-bezier":Do,"--n-color-segment":Dt,"--n-bar-color":oe,"--n-tab-font-size":Oo,"--n-tab-text-color":Oe,"--n-tab-text-color-active":Ht,"--n-tab-text-color-disabled":Eo,"--n-tab-text-color-hover":eo,"--n-pane-text-color":Le,"--n-tab-border-color":_e,"--n-tab-border-radius":Ct,"--n-close-size":Jt,"--n-close-icon-size":Lt,"--n-close-color-hover":at,"--n-close-color-pressed":A,"--n-close-border-radius":te,"--n-close-icon-color":E,"--n-close-icon-color-hover":G,"--n-close-icon-color-pressed":re,"--n-tab-color":Se,"--n-tab-font-weight":it,"--n-tab-font-weight-active":Ot,"--n-tab-padding":ye,"--n-tab-padding-vertical":me,"--n-tab-gap":xe,"--n-tab-gap-vertical":ge,"--n-pane-padding-left":Rt(ce,"left"),"--n-pane-padding-right":Rt(ce,"right"),"--n-pane-padding-top":Rt(ce,"top"),"--n-pane-padding-bottom":Rt(ce,"bottom"),"--n-font-weight-strong":Nt,"--n-tab-color-segment":Qt}}),Ne=a?Xe("tabs",k(()=>`${z.value[0]}${e.type[0]}`),Ge,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:H,renderedNames:new Set,tabsRailElRef:et,tabsPaneWrapperRef:I,tabsElRef:d,barElRef:u,addTabInstRef:v,xScrollInstRef:g,scrollWrapperElRef:h,addTabFixed:pe,tabWrapperStyle:x,handleNavResize:Be,mergedSize:z,handleScroll:Ue,handleTabsResize:ke,cssVars:a?void 0:Ge,themeClass:Ne==null?void 0:Ne.themeClass,animationDirection:ne,renderNameListRef:Q,onAnimationBeforeLeave:ee,onAnimationEnter:J,onAnimationAfterEnter:M,onRender:Ne==null?void 0:Ne.onRender},Ye)},render(){const{mergedClsPrefix:e,type:t,placement:o,addTabFixed:n,addable:r,mergedSize:l,renderNameListRef:i,onRender:a,paneWrapperClass:c,paneWrapperStyle:d,$slots:{default:u,prefix:h,suffix:v}}=this;a==null||a();const g=u?yo(u()).filter(x=>x.type.__TAB_PANE__===!0):[],p=u?yo(u()).filter(x=>x.type.__TAB__===!0):[],w=!p.length,z=t==="card",C=t==="segment",F=!z&&!C&&this.justifyContent;i.value=[];const H=()=>{const x=s("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},F?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),w?g.map((P,D)=>(i.value.push(P.props.name),Qo(s(dn,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:D!==0&&(!F||F==="center"||F==="start"||F==="end")}),P.children?{default:P.children.tab}:void 0)))):p.map((P,D)=>(i.value.push(P.props.name),Qo(D!==0&&!F?fr(P):P))),!n&&r&&z?ur(r,(w?g.length:p.length)!==0):null,F?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},z&&r?s(io,{onResize:this.handleTabsResize},{default:()=>x}):x,z?s("div",{class:`${e}-tabs-pad`}):null,z?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},R=C?"top":o;return s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${l}-size`,F&&`${e}-tabs--flex`,`${e}-tabs--${R}`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${R}`,`${e}-tabs-nav`]},qe(h,x=>x&&s("div",{class:`${e}-tabs-nav__prefix`},x)),C?s("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},w?g.map((x,P)=>(i.value.push(x.props.name),s(dn,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:P!==0}),x.children?{default:x.children.tab}:void 0))):p.map((x,P)=>(i.value.push(x.props.name),P===0?x:fr(x)))):s(io,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(R)?s(xa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):s("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},H()))}),n&&r&&z?ur(r,!0):null,qe(v,x=>x&&s("div",{class:`${e}-tabs-nav__suffix`},x))),w&&(this.animated&&(R==="top"||R==="bottom")?s("div",{ref:"tabsPaneWrapperRef",style:d,class:[`${e}-tabs-pane-wrapper`,c]},dr(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):dr(g,this.mergedValue,this.renderedNames)))}});function dr(e,t,o,n,r,l,i){const a=[];return e.forEach(c=>{const{name:d,displayDirective:u,"display-directive":h}=c.props,v=p=>u===p||h===p,g=t===d;if(c.key!==void 0&&(c.key=d),g||v("show")||v("show:lazy")&&o.has(d)){o.has(d)||o.add(d);const p=!v("if");a.push(p?_t(c,[[It,g]]):c)}}),i?s(fi,{name:`${i}-transition`,onBeforeLeave:n,onEnter:r,onAfterEnter:l},{default:()=>a}):a}function ur(e,t){return s(dn,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function fr(e){const t=on(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Qo(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function pd(e,t,o){return bd(e,t).map(l=>tl(l,o))}function bd(e,t){const o=[];return t.some(n=>{const r=e.includes(n.routeName);return r&&o.push(...el(e,n)),r}),o}function el(e,t){const o=[];return e===t.routeName&&o.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(o.push(t),o.push(...t.children.map(n=>el(e,n)).flat(1))),o}function tl(e,t){var r;const o=!!(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:o,i18nTitle:e.i18nTitle};return e.icon&&(n.icon=e.icon),o&&(n.options=(r=e.children)==null?void 0:r.map(l=>tl(l,t))),n}const md=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],ol=md;function gd(e){return ol.some(t=>t.data.some(n=>n.color===e))}function nl(){const e=lt(),t=Ie(),o=hi(vi),n=k(()=>{const u="vertical",h="horizontal";return t.layout.mode.includes(u)?u:h}),r=o.smaller("sm"),l={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},i=k(()=>l[t.layout.mode]),a=k(()=>t.layout.mode!=="horizontal"),c=k(()=>{const{width:u,mixWidth:h,mixChildMenuWidth:v}=t.sider,g=t.layout.mode==="vertical-mix";let p=g?h:u;return g&&e.mixSiderFixed&&(p+=v),p}),d=k(()=>{const{collapsedWidth:u,mixCollapsedWidth:h,mixChildMenuWidth:v}=t.sider,g=t.layout.mode==="vertical-mix";let p=g?h:u;return g&&e.mixSiderFixed&&(p+=v),p});return Pe(r,u=>{u&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:n,isMobile:r,headerProps:i,siderVisible:a,siderWidth:c,siderCollapsedWidth:d}}const Yt=q({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,o)=>(K(),de("div",{class:We(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[Tt(t.$slots,"default")],2))}}),Nn=q({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=_r("root");return(o,n)=>{const r=pi("router-link");return K(),ae(r,{to:f(t),class:"flex-center w-full nowrap-hidden"},{default:X(()=>[_t(le("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},De(f(be)("system.title")),513),[[It,o.showTitle]])]),_:1},8,["to"])}}}),xd={key:0},Zt=q({name:"HoverContainer",__name:"hover-container",props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,o=k(()=>!!t.tooltipContent),n=k(()=>`${t.contentClass} ${t.inverted?"hover:bg-primary":"hover:bg-#f6f6f6"}`);return(r,l)=>{const i=zn;return o.value?(K(),de("div",xd,[O(i,{placement:r.placement,trigger:"hover"},{trigger:X(()=>[le("div",{class:We(["flex-center h-full cursor-pointer dark:hover:bg-#333",n.value])},[Tt(r.$slots,"default")],2)]),default:X(()=>[nt(" "+De(r.tooltipContent),1)]),_:3},8,["placement"])])):(K(),de("div",{key:1,class:We(["flex-center cursor-pointer dark:hover:bg-#333",n.value])},[Tt(r.$slots,"default")],2))}}}),yd={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},wd=le("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),_d=[wd];function Cd(e,t){return K(),de("svg",yd,[..._d])}const kd={name:"gridicons-fullscreen",render:Cd},Sd={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},zd=le("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),Rd=[zd];function $d(e,t){return K(),de("svg",Sd,[...Rd])}const Pd={name:"gridicons-fullscreen-exit",render:$d},Id=q({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:o}=bi(),n=Ie();return(r,l)=>{const i=Pd,a=kd,c=Zt;return K(),ae(c,{class:"w-40px h-full","tooltip-content":"全屏",inverted:f(n).header.inverted,onClick:f(o)},{default:X(()=>[f(t)?(K(),ae(i,{key:0,class:"text-18px"})):(K(),ae(a,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),Td=q({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=At(),o=Ie(),n=fo(),{routerPush:r}=ho(),l=k(()=>pd(t.name,n.menus,_r("root")).map(a=>{var c;return{...a,label:a.i18nTitle?be(a.i18nTitle):a.label,options:(c=a.options)==null?void 0:c.map(d=>({...d,label:d.i18nTitle?be(d.i18nTitle):d.label}))}}));function i(a){r({name:a})}return(a,c)=>{const d=Bo,u=Is,h=Rs;return K(),ae(h,{class:"px-12px"},{default:X(()=>[(K(!0),de(Re,null,Ft(l.value,v=>(K(),ae(u,{key:v.key},{default:X(()=>[v.hasChildren?(K(),ae(d,{key:0,options:v.options,onSelect:i},{default:X(()=>[le("span",null,[f(o).header.crumb.showIcon?(K(),ae(nn(v.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):Qe("",!0),le("span",null,De(v.label),1)])]),_:2},1032,["options"])):(K(),de(Re,{key:1},[f(o).header.crumb.showIcon?(K(),ae(nn(v.icon),{key:0,class:We(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":f(o).header.inverted}])},null,8,["class"])):Qe("",!0),le("span",{class:We({"text-#BBBBBB":f(o).header.inverted})},De(v.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),Md={class:"flex-1-hidden h-full px-10px"},Fd=q({name:"HeaderMenu",__name:"header-menu",setup(e){const t=At(),o=fo(),n=Ie(),{routerPush:r}=ho(),l=k(()=>gn(o.menus)),i=k(()=>{var c;return(c=t.meta)!=null&&c.activeMenu?t.meta.activeMenu:t.name});function a(c,d){r(d.routePath)}return(c,d)=>{const u=En,h=Ao;return K(),de("div",Md,[O(h,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:X(()=>[le("div",{class:"flex-y-center h-full",style:vt({justifyContent:f(n).menu.horizontalPosition})},[O(u,{value:i.value,mode:"horizontal",options:l.value,inverted:f(n).header.inverted,"onUpdate:value":a},null,8,["value","options","inverted"])],4)]),_:1})])}}}),Bd=Et(Fd,[["__scopeId","data-v-d73713cf"]]),Ad={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ed=Cr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),Od=[Ed];function Dd(e,t){return K(),de("svg",Ad,[...Od])}const Nd={name:"line-md-menu-fold-left",render:Dd},Ld={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Hd=Cr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),Vd=[Hd];function Ud(e,t){return K(),de("svg",Ld,[...Vd])}const jd={name:"line-md-menu-unfold-left",render:Ud},Kd=q({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=lt(),o=Ie();return(n,r)=>{const l=jd,i=Nd,a=Zt;return K(),ae(a,{class:"w-40px h-full",inverted:f(o).header.inverted,onClick:f(t).toggleSiderCollapse},{default:X(()=>[f(t).siderCollapse?(K(),ae(l,{key:0,class:"text-16px"})):(K(),ae(i,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),Wd={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Gd=le("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),qd=[Gd];function Xd(e,t){return K(),de("svg",Wd,[...qd])}const rl={name:"ant-design-setting-outlined",render:Xd},Yd=q({name:"SettingButton",__name:"setting-button",setup(e){const t=lt(),o=Ie();return(n,r)=>{const l=rl,i=Zt;return K(),ae(i,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:f(o).header.inverted,onClick:f(t).toggleSettingDrawerVisible},{default:X(()=>[O(l,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),Zd=q({name:"ThemeMode",__name:"theme-mode",setup(e){const t=Ie();return(o,n)=>{const r=Oi,l=Zt;return K(),ae(l,{class:"w-40px",inverted:f(t).header.inverted,"tooltip-content":"主题模式"},{default:X(()=>[O(r,{dark:f(t).darkMode,"customize-transition":f(t).isCustomizeDarkModeTransition,class:"wh-full","onUpdate:dark":f(t).setDarkMode},null,8,["dark","customize-transition","onUpdate:dark"])]),_:1},8,["inverted"])}}}),Qd={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},Jd=le("path",{fill:"currentColor",d:"M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"},null,-1),eu=le("path",{fill:"currentColor",d:"M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48ZM373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z"},null,-1),tu=[Jd,eu];function ou(e,t){return K(),de("svg",Qd,[...tu])}const nu={name:"cil-language",render:ou},ru=q({__name:"toggle-lang",setup(e){const t=Ie(),{locale:o}=mi(),n=L(jn.get("lang")||"zh-CN"),r=[{label:"中文",key:"zh-CN"},{label:"English",key:"en"}],l=i=>{n.value=i,o.value=i,jn.set("lang",i)};return(i,a)=>{const c=nu,d=Bo,u=Zt;return K(),ae(u,{class:"w-40px h-full",inverted:f(t).header.inverted},{default:X(()=>[O(d,{options:r,trigger:"hover",value:n.value,onSelect:l},{default:X(()=>[O(c,{class:"text-18px outline-transparent"})]),_:1},8,["value"])]),_:1},8,["inverted"])}}}),lu={key:1,class:"flex-1-hidden flex-y-center h-full"},iu={class:"flex justify-end h-full"},au=q({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=Ie(),{isMobile:o}=nl(),n={}.VITE_VERCEL!=="Y";return(r,l)=>{const i=Yt;return K(),ae(i,{class:"global-header flex-y-center h-full",inverted:f(t).header.inverted},{default:X(()=>[r.showLogo?(K(),ae(Nn,{key:0,"show-title":!0,class:"h-full",style:vt({width:f(t).sider.width+"px"})},null,8,["style"])):Qe("",!0),r.showHeaderMenu?(K(),ae(f(Bd),{key:2})):(K(),de("div",lu,[r.showMenuCollapse||f(o)?(K(),ae(f(Kd),{key:0})):Qe("",!0),f(t).header.crumb.visible&&!f(o)?(K(),ae(f(Td),{key:1})):Qe("",!0)])),le("div",iu,[O(f(Id)),O(f(Zd)),O(f(ru)),f(n)?(K(),ae(f(Yd),{key:0})):Qe("",!0)])]),_:1},8,["inverted"])}}}),su=Et(au,[["__scopeId","data-v-fe132108"]]),cu=q({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const o=e,n=L(),r=L(),l=L(),i=k(()=>!!o.options.scrollY);function a(){n.value&&(r.value=new Fi(n.value,o.options))}const{width:c}=Kn(n),{width:d,height:u}=Kn(l);return Pe([()=>c.value,()=>d.value,()=>u.value],()=>{r.value&&r.value.refresh()}),ut(()=>{a()}),t({instance:r}),(h,v)=>(K(),de("div",{ref_key:"bsWrap",ref:n,class:"h-full text-left"},[le("div",{ref_key:"bsContent",ref:l,class:We(["inline-block",{"h-full":!i.value}])},[Tt(h.$slots,"default")],2)],512))}}),du=q({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=lt(),r=xn(),{iconRender:l}=gi(),i=k({get(){return o.visible},set(h){t("update:visible",h)}});function a(){i.value=!1}const c=k(()=>[{label:"内容全屏",key:"full-content",icon:l({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:o.currentPath!==r.activeTab,icon:l({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:o.currentPath===r.homeTab.fullPath||!!o.affix,icon:l({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:l({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:l({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:l({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:l({icon:"ant-design:line-outlined"})}]),d=new Map([["full-content",()=>{n.setContentFull(!0)}],["reload-current",()=>{n.reloadPage()}],["close-current",()=>{r.removeTab(o.currentPath)}],["close-other",()=>{r.clearTab([o.currentPath])}],["close-left",()=>{r.clearLeftTab(o.currentPath)}],["close-right",()=>{r.clearRightTab(o.currentPath)}],["close-all",()=>{r.clearAllTab()}]]);function u(h){const v=h,g=d.get(v);g&&g(),a()}return(h,v)=>{const g=Bo;return K(),ae(g,{show:i.value,options:c.value,placement:"bottom-start",x:h.x,y:h.y,onClickoutside:a,onSelect:u},null,8,["show","options","x","y"])}}}),uu=q({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const o=Ie(),n=xn(),r=k(()=>o.tab.mode==="chrome"),l=L();async function i(){if(await dt(),l.value&&l.value.children.length&&l.value.children[n.activeTabIndex]){const v=l.value.children[n.activeTabIndex],{x:g,width:p}=v.getBoundingClientRect(),w=g+p/2;setTimeout(()=>{t("scroll",w)},50)}}const a=hr({visible:!1,affix:!1,x:0,y:0,currentPath:""});function c(v){Object.assign(a,v)}let d=!1;function u(v){d||c({visible:v})}async function h(v,g,p){v.preventDefault();const{clientX:w,clientY:z}=v;d=!0;const C=a.visible?150:0;c({visible:!1}),setTimeout(()=>{c({visible:!0,x:w,y:z,currentPath:g,affix:p}),d=!1},C)}return Pe(()=>n.activeTabIndex,()=>{i()},{immediate:!0}),(v,g)=>{const p=yi;return K(),de(Re,null,[le("div",{ref_key:"tabRef",ref:l,class:We(["flex h-full pr-18px",[r.value?"items-end":"items-center gap-12px"]])},[(K(!0),de(Re,null,Ft(f(n).tabs,w=>(K(),ae(f(xi),{key:w.fullPath,mode:f(o).tab.mode,"dark-mode":f(o).darkMode,active:f(n).activeTab===w.fullPath,"active-color":f(o).themeColor,closable:!(w.name===f(n).homeTab.name||w.meta.affix),onClick:z=>f(n).handleClickTab(w.fullPath),onClose:z=>f(n).removeTab(w.fullPath),onContextmenu:z=>h(z,w.fullPath,w.meta.affix)},{prefix:X(()=>[O(p,{icon:w.meta.icon,"local-icon":w.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:X(()=>[nt(" "+De(w.meta.i18nTitle?f(be)(w.meta.i18nTitle):w.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),O(f(du),{visible:a.visible,"current-path":a.currentPath,affix:a.affix,x:a.x,y:a.y,"onUpdate:visible":u},null,8,["visible","current-path","affix","x","y"])],64)}}}),fu={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},hu=le("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),vu=[hu];function pu(e,t){return K(),de("svg",fu,[...vu])}const bu={name:"mdi-refresh",render:pu},mu=q({name:"ReloadButton",__name:"index",setup(e){const{reCacheRoute:t}=fo(),o=At(),{loading:n,startLoading:r,endLoading:l}=Di();async function i(){r(),await t(o.name),setTimeout(()=>{l()},1e3)}return(a,c)=>{const d=bu,u=Zt;return K(),ae(u,{class:"w-64px h-full","tooltip-content":"重新加载",placement:"bottom-end",onClick:i},{default:X(()=>[O(d,{class:We(["text-22px",{"animate-spin":f(n)}])},null,8,["class"])]),_:1})}}}),gu=q({name:"GlobalTab",__name:"index",setup(e){const t=At(),o=Ie(),n=xn(),r=wi(),l=L(),{width:i,left:a}=_i(l),c=L(),d=!!r.device.type;function u(v){var w;const p=v-a.value-i.value/2;if(c.value){const{maxScrollX:z,x:C}=c.value.instance,F=z-C,H=p>0?Math.max(-p,F):Math.min(-p,-C);(w=c.value)==null||w.instance.scrollBy(H,0,300)}}function h(){n.iniTabStore(t)}return Pe(()=>t.fullPath,()=>{n.addTab(t),n.setActiveTab(t.fullPath)}),h(),(v,g)=>{const p=cu,w=Yt;return K(),ae(w,{class:"global-tab flex-y-center w-full pl-16px",style:vt({height:f(o).tab.height+"px"})},{default:X(()=>[le("div",{ref_key:"bsWrapper",ref:l,class:"flex-1-hidden h-full"},[O(p,{ref_key:"bsScroll",ref:c,options:{scrollX:!0,scrollY:!1,click:f(d)}},{default:X(()=>[O(f(uu),{onScroll:u})]),_:1},8,["options"])],512),O(f(mu))]),_:1},8,["style"])}}}),xu=Et(gu,[["__scopeId","data-v-f9a4942d"]]),yu=q({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=At(),o=lt(),n=Ie(),r=fo(),{routerPush:l}=ho(),i=k(()=>gn(r.menus)),a=k(()=>{var h;return(h=t.meta)!=null&&h.activeMenu?t.meta.activeMenu:t.name}),c=L([]);function d(h,v){l(v.routePath)}function u(h){c.value=h}return Pe(()=>t.name,()=>{c.value=kr(a.value,i.value)},{immediate:!0}),(h,v)=>{const g=En,p=Ao;return K(),ae(p,{class:"flex-1-hidden"},{default:X(()=>[O(g,{value:a.value,collapsed:f(o).siderCollapse,"collapsed-width":f(n).sider.collapsedWidth,"collapsed-icon-size":22,options:i.value,"expanded-keys":c.value,indent:18,inverted:!f(n).darkMode&&f(n).sider.inverted,"onUpdate:value":d,"onUpdate:expandedKeys":u},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),wu=q({name:"VerticalSider",__name:"index",setup(e){const t=lt(),o=Ie(),n=k(()=>o.layout.mode==="horizontal-mix"),r=k(()=>!t.siderCollapse&&o.layout.mode!=="vertical-mix");return(l,i)=>{const a=Yt;return K(),ae(a,{class:"flex-col-stretch h-full",inverted:f(o).sider.inverted},{default:X(()=>[n.value?Qe("",!0):(K(),ae(f(Nn),{key:0,"show-title":r.value,style:vt({height:f(o).header.height+"px"})},null,8,["show-title","style"])),O(f(yu))]),_:1},8,["inverted"])}}}),_u=q({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:o,setTrue:n,setFalse:r}=yn(),l=k(()=>t.routeName===t.activeRouteName);return(i,a)=>(K(),de("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:a[0]||(a[0]=(...c)=>f(n)&&f(n)(...c)),onMouseleave:a[1]||(a[1]=(...c)=>f(r)&&f(r)(...c))},[le("div",{class:We(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":l.value,"text-primary":f(o)}])},[(K(),ae(nn(i.icon),{class:We([i.isMini?"text-16px":"text-20px"])},null,8,["class"])),le("p",{class:We(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[i.isMini?"h-0 pt-0":"h-24px pt-4px"]])},De(i.label),3)],2)],32))}}),Cu={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ku=le("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),Su=[ku];function zu(e,t){return K(),de("svg",Cu,[...Su])}const Ru={name:"mdi-pin",render:zu},$u={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Pu=le("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),Iu=[Pu];function Tu(e,t){return K(),de("svg",$u,[...Iu])}const Mu={name:"mdi-pin-off",render:Tu},Fu={class:"text-primary pl-8px text-16px font-bold"},Bu=q({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,o=At(),n=lt(),r=Ie(),{routerPush:l}=ho(),i=k(()=>t.visible&&t.menus.length||n.mixSiderFixed),a=k(()=>{var h;return(h=o.meta)!=null&&h.activeMenu?o.meta.activeMenu:o.name}),c=L([]);function d(h,v){l(v.routePath)}function u(h){c.value=h}return Pe(()=>o.name,()=>{c.value=kr(a.value,t.menus)},{immediate:!0}),(h,v)=>{const g=Mu,p=Ru,w=En,z=Ao,C=Yt;return K(),de("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:vt({width:f(n).mixSiderFixed?f(r).sider.mixChildMenuWidth+"px":"0px"})},[O(C,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:f(r).sider.inverted,style:vt({width:i.value?f(r).sider.mixChildMenuWidth+"px":"0px"})},{default:X(()=>[le("header",{class:"header-height flex-y-center justify-between",style:vt({height:f(r).header.height+"px"})},[le("h2",Fu,De(f(be)("system.title")),1),le("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:v[0]||(v[0]=(...F)=>f(n).toggleMixSiderFixed&&f(n).toggleMixSiderFixed(...F))},[f(n).mixSiderFixed?(K(),ae(g,{key:0})):(K(),ae(p,{key:1}))])],4),O(z,{class:"flex-1-hidden"},{default:X(()=>[O(w,{value:a.value,options:h.menus,"expanded-keys":c.value,indent:18,inverted:!f(r).darkMode&&f(r).sider.inverted,"onUpdate:value":d,"onUpdate:expandedKeys":u},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),Au=Et(Bu,[["__scopeId","data-v-beac3164"]]),Eu={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Ou=le("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),Du=[Ou];function Nu(e,t){return K(),de("svg",Eu,[...Du])}const Lu={name:"ph-caret-double-left-bold",render:Nu},Hu={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Vu=le("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),Uu=[Vu];function ju(e,t){return K(),de("svg",Hu,[...Uu])}const Ku={name:"ph-caret-double-right-bold",render:ju},Wu=q({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=lt();return(o,n)=>{const r=Ku,l=Lu,i=gt;return K(),ae(i,{text:!0,class:"h-36px",onClick:f(t).toggleSiderCollapse},{default:X(()=>[f(t).siderCollapse?(K(),ae(r,{key:0,class:"text-16px"})):(K(),ae(l,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),Gu={class:"flex-1-hidden flex-col-stretch h-full"},qu=q({name:"VerticalMixSider",__name:"index",setup(e){const t=At(),o=lt(),n=Ie(),r=fo(),{routerPush:l}=ho(),{bool:i,setTrue:a,setFalse:c}=yn(),d=L("");function u(z){d.value=z}const h=k(()=>r.menus.map(z=>{const{routeName:C,label:F,i18nTitle:H}=z,R=z==null?void 0:z.icon,x=!!(z.children&&z.children.length);return{routeName:C,label:H?be(H):F,icon:R,hasChildren:x}}));function v(){h.value.some(z=>{var H;const C=(H=t.meta)!=null&&H.activeMenu?t.meta.activeMenu:t.name,F=C==null?void 0:C.includes(z.routeName);return F&&u(z.routeName),F})}function g(z,C){u(z),C?a():l({name:z})}function p(){v(),c()}const w=k(()=>{const z=[];return r.menus.some(C=>{var H;const F=C.routeName===d.value&&!!((H=C.children)!=null&&H.length);return F&&z.push(...gn(C.children||[])),F}),z});return Pe(()=>t.name,()=>{v()},{immediate:!0}),(z,C)=>{const F=Ao,H=Yt;return K(),ae(H,{class:"flex h-full",inverted:f(n).sider.inverted,onMouseleave:p},{default:X(()=>[le("div",Gu,[O(f(Nn),{"show-title":!1,style:vt({height:f(n).header.height+"px"})},null,8,["style"]),O(F,{class:"flex-1-hidden"},{default:X(()=>[(K(!0),de(Re,null,Ft(h.value,R=>(K(),ae(f(_u),{key:R.routeName,"route-name":R.routeName,"active-route-name":d.value,label:R.label,icon:R.icon,"is-mini":f(o).siderCollapse,onClick:x=>g(R.routeName,R.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),O(f(Wu))]),O(f(Au),{visible:f(i),menus:w.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),Xu=q({name:"GlobalSider",__name:"index",setup(e){const t=Ie(),o=k(()=>t.layout.mode==="vertical-mix");return(n,r)=>o.value?(K(),ae(f(qu),{key:0,class:"global-sider"})):(K(),ae(f(wu),{key:1,class:"global-sider"}))}}),Yu=Et(Xu,[["__scopeId","data-v-26cb8afe"]]),Zu=le("span",null,"©2024",-1),Qu=q({name:"GlobalFooter",__name:"index",setup(e){const t=Ie();return(o,n)=>{const r=Yt;return K(),ae(r,{class:"flex-center h-full",inverted:f(t).footer.inverted},{default:X(()=>[Zu]),_:1},8,["inverted"])}}}),Ju={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ef=le("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),tf=le("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),of=[ef,tf];function nf(e,t){return K(),de("svg",Ju,[...of])}const rf={name:"ic-round-hdr-auto",render:nf},lf={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},af=le("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),sf=[af];function cf(e,t){return K(),de("svg",lf,[...sf])}const df={name:"ic-baseline-do-not-disturb",render:cf},uf={class:"flex-y-center justify-between"},Fe=q({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,o)=>(K(),de("div",uf,[le("span",null,De(t.label),1),Tt(t.$slots,"default")]))}}),ff=q({name:"DarkMode",__name:"index",setup(e){const t=Ie();return(o,n)=>{const r=qt,l=Ni,i=Li,a=On,c=df,d=rf,u=Xt;return K(),de(Re,null,[O(r,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.themeModeTitle")),1)]),_:1}),O(u,{vertical:"",size:"large"},{default:X(()=>[O(Fe,{label:f(be)("layout.settingDrawer.darkMode")},{default:X(()=>[O(a,{value:f(t).darkMode,"onUpdate:value":f(t).setDarkMode},{checked:X(()=>[O(l,{class:"text-14px text-white"})]),unchecked:X(()=>[O(i,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.followSystemTheme")},{default:X(()=>[O(a,{value:f(t).followSystemTheme,"onUpdate:value":f(t).setFollowSystemTheme},{checked:X(()=>[O(c,{class:"text-14px text-white"})]),unchecked:X(()=>[O(d,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.isCustomizeDarkModeTransition")},{default:X(()=>[O(a,{value:f(t).isCustomizeDarkModeTransition,"onUpdate:value":f(t).setIsCustomizeDarkModeTransition},{checked:X(()=>[O(c,{class:"text-14px text-white"})]),unchecked:X(()=>[O(d,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.sider.inverted")},{default:X(()=>[O(a,{value:f(t).sider.inverted,"onUpdate:value":f(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.header.inverted")},{default:X(()=>[O(a,{value:f(t).header.inverted,"onUpdate:value":f(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.footer.inverted")},{default:X(()=>[O(a,{value:f(t).footer.inverted,"onUpdate:value":f(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),hf={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},vf=le("path",{fill:"currentColor","fill-rule":"evenodd",d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},null,-1),pf=[vf];function bf(e,t){return K(),de("svg",hf,[...pf])}const mf={name:"ant-design-close-outlined",render:bf},gf=q({name:"DrawerButton",__name:"index",setup(e){const t=lt();return(o,n)=>{const r=mf,l=rl,i=gt;return K(),ae(i,{type:"primary",class:We([[{"!right-330px":f(t).settingDrawerVisible},f(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:f(t).toggleSettingDrawerVisible},{default:X(()=>[f(t).settingDrawerVisible?(K(),ae(r,{key:0,class:"text-24px"})):(K(),ae(l,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),xf=q({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,o={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=k(()=>o[t.mode]);return(r,l)=>{const i=zn;return K(),de("div",{class:We(["border-2px rounded-6px cursor-pointer hover:border-primary",[r.checked?"border-primary":"border-transparent"]])},[O(i,{placement:n.value.placement,trigger:"hover"},{trigger:X(()=>[le("div",{class:We(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[r.mode.includes("vertical")?"flex":"flex-col"]])},[Tt(r.$slots,"default",{},void 0,!0)],2)]),default:X(()=>[le("span",null,De(r.label),1)]),_:3},8,["placement"])],2)}}}),yf=Et(xf,[["__scopeId","data-v-73ef6791"]]),bt=e=>(Ci("data-v-0a5e67c9"),e=e(),ki(),e),wf=bt(()=>le("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),_f=bt(()=>le("div",{class:"flex-1 flex-col gap-6px"},[le("div",{class:"h-16px bg-primary rd-4px"}),le("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Cf=bt(()=>le("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),kf=bt(()=>le("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),Sf=bt(()=>le("div",{class:"flex-1 flex-col gap-6px"},[le("div",{class:"h-16px bg-primary rd-4px"}),le("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),zf=bt(()=>le("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Rf=bt(()=>le("div",{class:"flex-1 flex gap-6px"},[le("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),$f=bt(()=>le("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Pf=bt(()=>le("div",{class:"flex-1 flex gap-6px"},[le("div",{class:"w-18px bg-primary:50 rd-4px"}),le("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),If=q({name:"LayoutMode",__name:"index",setup(e){const t=Ie();return(o,n)=>{const r=qt,l=Xt;return K(),de(Re,null,[O(r,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.layoutModelTitle")),1)]),_:1}),O(l,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:X(()=>[(K(!0),de(Re,null,Ft(f(t).layout.modeList,i=>(K(),ae(f(yf),{key:i.value,mode:i.value,label:i.label,checked:i.value===f(t).layout.mode,onClick:a=>f(t).setLayoutMode(i.value)},{default:X(()=>[i.value==="vertical"?(K(),de(Re,{key:0},[wf,_f],64)):Qe("",!0),i.value==="vertical-mix"?(K(),de(Re,{key:1},[Cf,kf,Sf],64)):Qe("",!0),i.value==="horizontal"?(K(),de(Re,{key:2},[zf,Rf],64)):Qe("",!0),i.value==="horizontal-mix"?(K(),de(Re,{key:3},[$f,Pf],64)):Qe("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),Tf=Et(If,[["__scopeId","data-v-0a5e67c9"]]),Mf=q({name:"PageFunc",__name:"index",setup(e){const t=Ie();return(o,n)=>{const r=qt,l=Dr,i=On,a=qc,c=Xt;return K(),de(Re,null,[O(r,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.pageFunctionsTitle")),1)]),_:1}),O(c,{vertical:"",size:"large"},{default:X(()=>[O(Fe,{label:f(be)("layout.settingDrawer.scrollMode")},{default:X(()=>[O(l,{class:"w-120px",size:"small",value:f(t).scrollMode,options:f(t).scrollModeList,"onUpdate:value":f(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.fixedHeaderAndTab")},{default:X(()=>[O(i,{value:f(t).fixedHeaderAndTab,"onUpdate:value":f(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.menu.horizontalPosition")},{default:X(()=>[O(l,{class:"w-120px",size:"small",value:f(t).menu.horizontalPosition,options:f(t).menu.horizontalPositionList,"onUpdate:value":f(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.header.height")},{default:X(()=>[O(a,{class:"w-120px",size:"small",value:f(t).header.height,step:1,"onUpdate:value":f(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.tab.height")},{default:X(()=>[O(a,{class:"w-120px",size:"small",value:f(t).tab.height,step:1,"onUpdate:value":f(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.tab.isCache")},{default:X(()=>[O(i,{value:f(t).tab.isCache,"onUpdate:value":f(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.sider.width")},{default:X(()=>[O(a,{class:"w-120px",size:"small",value:f(t).sider.width,step:10,"onUpdate:value":f(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.sider.mixWidth")},{default:X(()=>[O(a,{class:"w-120px",size:"small",value:f(t).sider.mixWidth,step:5,"onUpdate:value":f(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.footer.visible")},{default:X(()=>[O(i,{value:f(t).footer.visible,"onUpdate:value":f(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.footer.fixed")},{default:X(()=>[O(i,{value:f(t).footer.fixed,"onUpdate:value":f(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.footer.right")},{default:X(()=>[O(i,{value:f(t).footer.right,"onUpdate:value":f(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Ff=q({name:"PageView",__name:"index",setup(e){const t=Ie();return(o,n)=>{const r=qt,l=On,i=Dr,a=Xt;return K(),de(Re,null,[O(r,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.pageViewTitle")),1)]),_:1}),O(a,{vertical:"",size:"large"},{default:X(()=>[O(Fe,{label:f(be)("layout.settingDrawer.header.crumb.visible")},{default:X(()=>[O(l,{value:f(t).header.crumb.visible,"onUpdate:value":f(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.header.crumb.icon")},{default:X(()=>[O(l,{value:f(t).header.crumb.showIcon,"onUpdate:value":f(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.tab.visible")},{default:X(()=>[O(l,{value:f(t).tab.visible,"onUpdate:value":f(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.tab.modeList.mode")},{default:X(()=>[O(i,{class:"w-120px",size:"small",value:f(t).tab.mode,options:f(t).tab.modeList,"onUpdate:value":f(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.page.animate")},{default:X(()=>[O(l,{value:f(t).page.animate,"onUpdate:value":f(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),O(Fe,{label:f(be)("layout.settingDrawer.page.animateMode")},{default:X(()=>[O(i,{class:"w-120px",size:"small",value:f(t).page.animateMode,options:f(t).page.animateModeList,"onUpdate:value":f(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Bf={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Af=le("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),Ef=[Af];function Of(e,t){return K(),de("svg",Bf,[...Ef])}const Df={name:"ic-outline-check",render:Of},ll=q({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=k(()=>o.includes(t.color));return(r,l)=>{const i=Df;return K(),de("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:vt({backgroundColor:r.color})},[r.checked?(K(),ae(i,{key:0,class:We([r.iconClass,n.value?"text-gray-700":"text-white"])},null,8,["class"])):Qe("",!0)],4)}}}),Nf={class:"flex-x-center"},Lf={class:"text-center"},Hf=q({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=Ie();function n(){t("close")}return(r,l)=>{const i=Vi,a=Kr,c=Gr,d=dd,u=vd,h=Si;return K(),ae(h,{show:r.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:n},{default:X(()=>[le("div",Nf,[O(i,{type:"primary",size:24},{default:X(()=>[nt("中国传统颜色")]),_:1})]),O(u,null,{default:X(()=>[(K(!0),de(Re,null,Ft(f(ol),v=>(K(),ae(d,{key:v.label,name:v.label,tab:v.label},{default:X(()=>[O(c,{cols:8,"x-gap":16,"y-gap":8},{default:X(()=>[(K(!0),de(Re,null,Ft(v.data,g=>(K(),ae(a,{key:g.label},{default:X(()=>[O(ll,{class:"!w-full !h-36px !rounded-4px",color:g.color,checked:g.color===f(o).themeColor,"icon-class":"text-20px",onClick:p=>f(o).setThemeColor(g.color)},null,8,["color","checked","onClick"]),le("p",Lf,De(g.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),Vf=q({name:"ThemeColorSelect",__name:"index",setup(e){const t=Ie(),{bool:o,setTrue:n,setFalse:r}=yn(),l=k(()=>gd(t.themeColor)),i=k(()=>l.value?"primary":"default");return(a,c)=>{const d=qt,u=Kr,h=Gr,v=oc,g=gt,p=Xt;return K(),de(Re,null,[O(d,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.systemThemeTitle")),1)]),_:1}),O(h,{cols:8,"x-gap":8,"y-gap":12},{default:X(()=>[(K(!0),de(Re,null,Ft(f(t).themeColorList,w=>(K(),ae(u,{key:w,class:"flex-x-center"},{default:X(()=>[O(f(ll),{color:w,checked:w===f(t).themeColor,onClick:z=>f(t).setThemeColor(w)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),O(p,{vertical:!0,class:"pt-12px"},{default:X(()=>[O(v,{value:f(t).themeColor,"show-alpha":!1,onUpdateValue:f(t).setThemeColor},null,8,["value","onUpdateValue"]),O(g,{block:!0,type:i.value,onClick:f(n)},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.systemTheme.moreColors")),1)]),_:1},8,["type","onClick"])]),_:1}),O(f(Hf),{visible:f(o),onClose:f(r)},null,8,["visible","onClose"])],64)}}}),Uf=q({name:"ThemeConfig",__name:"index",setup(e){const t=Ie(),o=L(),n=L(r());function r(){return JSON.stringify(t.$state)}function l(){var c;t.resetThemeStore(),(c=window.$message)==null||c.success(be("layout.settingDrawer.themeConfiguration.resetSuccess"))}function i(){if(!o.value)return;new Bi(o.value).on("success",()=>{var d;(d=window.$dialog)==null||d.success({title:be("layout.settingDrawer.themeConfiguration.operateSuccess"),content:be("layout.settingDrawer.themeConfiguration.copySuccess"),positiveText:be("layout.settingDrawer.themeConfiguration.confirmCopy")})})}const a=Pe(()=>t.$state,()=>{n.value=r()},{deep:!0});return ut(()=>{i()}),br(()=>{a()}),(c,d)=>{const u=qt,h=gt,v=Xt;return K(),de(Re,null,[O(u,{"title-placement":"center"},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.themeConfiguration.title")),1)]),_:1}),_t(le("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":d[0]||(d[0]=g=>n.value=g),class:"absolute opacity-0"},null,512),[[zi,n.value]]),O(v,{vertical:""},{default:X(()=>[le("div",{ref_key:"copyRef",ref:o,"data-clipboard-target":"#themeConfigCopyTarget"},[O(h,{type:"primary",block:!0},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.themeConfiguration.copy")),1)]),_:1})],512),O(h,{type:"warning",block:!0,onClick:l},{default:X(()=>[nt(De(f(be)("layout.settingDrawer.themeConfiguration.reset")),1)]),_:1})]),_:1})],64)}}}),jf=q({name:"SettingDrawer",__name:"index",setup(e){const t=lt(),o={}.VITE_VERCEL==="Y";return(n,r)=>{const l=Bc,i=Mc;return K(),de(Re,null,[O(i,{show:f(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:f(t).closeSettingDrawer},{default:X(()=>[O(l,{title:f(be)("layout.settingDrawer.title"),"native-scrollbar":!1},{default:X(()=>[O(f(ff)),O(f(Tf)),O(f(Vf)),O(f(Mf)),O(f(Ff)),O(f(Uf))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),f(o)?(K(),ae(f(gf),{key:0})):Qe("",!0)],64)}}}),th=q({name:"BasicLayout",__name:"index",setup(e){const t=lt(),o=Ie(),{mode:n,isMobile:r,headerProps:l,siderVisible:i,siderWidth:a,siderCollapsedWidth:c}=nl();return(d,u)=>{const h=ks;return K(),de(Re,null,[O(f(Pi),{mode:f(n),"is-mobile":f(r),"scroll-mode":f(o).scrollMode,"scroll-el-id":f(t).scrollElId,"full-content":f(t).contentFull,"fixed-top":f(o).fixedHeaderAndTab,"header-height":f(o).header.height,"tab-visible":f(o).tab.visible,"tab-height":f(o).tab.height,"content-class":f(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":f(i),"sider-collapse":f(t).siderCollapse,"sider-width":f(a),"sider-collapsed-width":f(c),"footer-visible":f(o).footer.visible,"fixed-footer":f(o).footer.fixed,"right-footer":f(o).footer.right,onClickMobileSiderMask:u[0]||(u[0]=v=>f(t).setSiderCollapse(!0))},{header:X(()=>[O(f(su),Ri($i(f(l))),null,16)]),tab:X(()=>[O(f(xu))]),sider:X(()=>[O(f(Yu))]),footer:X(()=>[O(f(Qu))]),default:X(()=>[O(f(Ai))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(K(),ae(h,{key:f(o).scrollMode,"listen-to":`#${f(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),O(f(jf))],64)}}});export{th as default};
