import{i as Si,a as xn,M as ki,S as pr,e as $i,U as vr,g as br,b as yn,c as mr,d as gr,f as On,h as zi,j as xr,k as nl,l as Ri,m as Pi,n as Mi,o as Ti,p as Ii,q as ol,r as Bi,s as Ai,v as Tt,t as D,w as Se,u as rt,x as pt,y as rl,z as P,A as ll,B as Fi,C as Oi,D as Ke,E as Ei,F as Ve,G as et,H as _e,I as Wn,J as Kn,K as kn,L as ze,N as q,O as Re,P as il,Q as Di,R as dt,T as yr,V as Ni,W as Gn,X as ht,Y as ae,Z as nn,_ as d,$ as No,a0 as Lo,a1 as Li,a2 as Hi,a3 as at,a4 as nt,a5 as gt,a6 as wn,a7 as Lt,a8 as wr,a9 as y,aa as A,ab as F,ac as Ue,ad as xe,ae as Vi,af as Ui,ag as ce,ah as Ze,ai as Ht,aj as Ge,ak as It,al as U,am as Ne,an as $n,ao as ji,ap as Et,aq as We,ar as al,as as qn,at as _n,au as Wi,av as Ki,aw as xt,ax as en,ay as Nn,az as vn,aA as sl,aB as Te,aC as dl,aD as _r,aE as Ln,aF as Gi,aG as bn,aH as de,aI as Xn,aJ as qi,aK as Me,aL as Ho,aM as Cr,aN as Vo,aO as Xi,aP as Yi,aQ as Zi,aR as Ji,aS as Qi,aT as ea,aU as cl,aV as ul,aW as Rt,aX as bt,aY as Pt,aZ as Dt,a_ as _t,a$ as Jt,b0 as Nt,b1 as mn,b2 as Po,b3 as Mo,b4 as To,b5 as Uo,b6 as Yn,b7 as ta,b8 as zt,b9 as na,ba as oa,bb as ra,bc as la,bd as ia,be as jo,bf as aa,bg as Zn,bh as sa,bi as da,bj as ca,bk as ua,bl as fl,bm as En,bn as fa,bo as ha,bp as pa,bq as va,br as Sr,bs as ba,bt as Wo,bu as ma,bv as ga,bw as kr,bx as xa,by as ya,bz as wa,bA as _a,bB as ut,bC as Ie,bD as Ca,bE as Sa,bF as X,bG as fe,bH as Ye,bI as hl,bJ as ka,bK as se,bL as ee,bM as ie,bN as Le,bO as p,bP as be,bQ as j,bR as st,bS as $a,bT as Ut,bU as zn,bV as Rn,bW as Vt,bX as Io,bY as ot,bZ as Ko,b_ as Ct,b$ as pl,c0 as za,c1 as $r,c2 as zr,c3 as Go,c4 as Ra,c5 as Pa,c6 as Ma,c7 as Ta,c8 as Ia,c9 as vl,ca as qo,cb as Ba,cc as Aa,cd as Fa,ce as Oa,cf as Ea,cg as Da,ch as Na}from"./index-f7a2b3df.js";import{c as La,t as Xo,i as bl,g as Ha,b as Va,u as Jn,a as Qe,N as Ua,_ as ml,d as ja,e as Wa,f as on,h as Ka,j as Ga}from"./dark-mode-switch.vue_vue_type_script_setup_true_lang-e916534d.js";import{f as Mt,_ as qa}from"./GradientText-d39f0a87.js";import{B as Xa,C as Ya,_ as Za}from"./clipboard-667f18b7.js";import{_ as jt}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                         */import{g as Ja,_ as rn}from"./Space-ae26a36e.js";var Qa=/\s/;function es(e){for(var t=e.length;t--&&Qa.test(e.charAt(t)););return t}var ts=/^\s+/;function ns(e){return e&&e.slice(0,es(e)+1).replace(ts,"")}var Rr=0/0,os=/^[-+]0x[0-9a-f]+$/i,rs=/^0b[01]+$/i,ls=/^0o[0-7]+$/i,is=parseInt;function Pr(e){if(typeof e=="number")return e;if(Si(e))return Rr;if(xn(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=xn(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ns(e);var n=rs.test(e);return n||ls.test(e)?is(e.slice(2),n?2:8):os.test(e)?Rr:+e}var as="__lodash_hash_undefined__";function ss(e){return this.__data__.set(e,as),this}function ds(e){return this.__data__.has(e)}function Hn(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new ki;++t<n;)this.add(e[t])}Hn.prototype.add=Hn.prototype.push=ss;Hn.prototype.has=ds;function cs(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function us(e,t){return e.has(t)}var fs=1,hs=2;function gl(e,t,n,o,r,l){var i=n&fs,a=e.length,s=t.length;if(a!=s&&!(i&&s>a))return!1;var c=l.get(e),f=l.get(t);if(c&&f)return c==t&&f==e;var h=-1,u=!0,b=n&hs?new Hn:void 0;for(l.set(e,t),l.set(t,e);++h<a;){var v=e[h],m=t[h];if(o)var C=i?o(m,v,h,t,e,l):o(v,m,h,e,t,l);if(C!==void 0){if(C)continue;u=!1;break}if(b){if(!cs(t,function(g,S){if(!us(b,S)&&(v===g||r(v,g,n,o,l)))return b.push(S)})){u=!1;break}}else if(!(v===m||r(v,m,n,o,l))){u=!1;break}}return l.delete(e),l.delete(t),u}function ps(e){var t=-1,n=Array(e.size);return e.forEach(function(o,r){n[++t]=[r,o]}),n}function vs(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var bs=1,ms=2,gs="[object Boolean]",xs="[object Date]",ys="[object Error]",ws="[object Map]",_s="[object Number]",Cs="[object RegExp]",Ss="[object Set]",ks="[object String]",$s="[object Symbol]",zs="[object ArrayBuffer]",Rs="[object DataView]",Mr=pr?pr.prototype:void 0,uo=Mr?Mr.valueOf:void 0;function Ps(e,t,n,o,r,l,i){switch(n){case Rs:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case zs:return!(e.byteLength!=t.byteLength||!l(new vr(e),new vr(t)));case gs:case xs:case _s:return $i(+e,+t);case ys:return e.name==t.name&&e.message==t.message;case Cs:case ks:return e==t+"";case ws:var a=ps;case Ss:var s=o&bs;if(a||(a=vs),e.size!=t.size&&!s)return!1;var c=i.get(e);if(c)return c==t;o|=ms,i.set(e,t);var f=gl(a(e),a(t),o,r,l,i);return i.delete(e),f;case $s:if(uo)return uo.call(e)==uo.call(t)}return!1}var Ms=1,Ts=Object.prototype,Is=Ts.hasOwnProperty;function Bs(e,t,n,o,r,l){var i=n&Ms,a=br(e),s=a.length,c=br(t),f=c.length;if(s!=f&&!i)return!1;for(var h=s;h--;){var u=a[h];if(!(i?u in t:Is.call(t,u)))return!1}var b=l.get(e),v=l.get(t);if(b&&v)return b==t&&v==e;var m=!0;l.set(e,t),l.set(t,e);for(var C=i;++h<s;){u=a[h];var g=e[u],S=t[u];if(o)var L=i?o(S,g,u,t,e,l):o(g,S,u,e,t,l);if(!(L===void 0?g===S||r(g,S,n,o,l):L)){m=!1;break}C||(C=u=="constructor")}if(m&&!C){var $=e.constructor,_=t.constructor;$!=_&&"constructor"in e&&"constructor"in t&&!(typeof $=="function"&&$ instanceof $&&typeof _=="function"&&_ instanceof _)&&(m=!1)}return l.delete(e),l.delete(t),m}var As=1,Tr="[object Arguments]",Ir="[object Array]",Mn="[object Object]",Fs=Object.prototype,Br=Fs.hasOwnProperty;function Os(e,t,n,o,r,l){var i=yn(e),a=yn(t),s=i?Ir:mr(e),c=a?Ir:mr(t);s=s==Tr?Mn:s,c=c==Tr?Mn:c;var f=s==Mn,h=c==Mn,u=s==c;if(u&&gr(e)){if(!gr(t))return!1;i=!0,f=!1}if(u&&!f)return l||(l=new On),i||zi(e)?gl(e,t,n,o,r,l):Ps(e,t,s,n,o,r,l);if(!(n&As)){var b=f&&Br.call(e,"__wrapped__"),v=h&&Br.call(t,"__wrapped__");if(b||v){var m=b?e.value():e,C=v?t.value():t;return l||(l=new On),r(m,C,n,o,l)}}return u?(l||(l=new On),Bs(e,t,n,o,r,l)):!1}function Yo(e,t,n,o,r){return e===t?!0:e==null||t==null||!xr(e)&&!xr(t)?e!==e&&t!==t:Os(e,t,n,o,Yo,r)}var Es=1,Ds=2;function Ns(e,t,n,o){var r=n.length,l=r,i=!o;if(e==null)return!l;for(e=Object(e);r--;){var a=n[r];if(i&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<l;){a=n[r];var s=a[0],c=e[s],f=a[1];if(i&&a[2]){if(c===void 0&&!(s in e))return!1}else{var h=new On;if(o)var u=o(c,f,s,e,t,h);if(!(u===void 0?Yo(f,c,Es|Ds,o,h):u))return!1}}return!0}function xl(e){return e===e&&!xn(e)}function Ls(e){for(var t=nl(e),n=t.length;n--;){var o=t[n],r=e[o];t[n]=[o,r,xl(r)]}return t}function yl(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Hs(e){var t=Ls(e);return t.length==1&&t[0][2]?yl(t[0][0],t[0][1]):function(n){return n===e||Ns(n,e,t)}}function Vs(e,t){return e!=null&&t in Object(e)}function Us(e,t,n){t=La(t,e);for(var o=-1,r=t.length,l=!1;++o<r;){var i=Xo(t[o]);if(!(l=e!=null&&n(e,i)))break;e=e[i]}return l||++o!=r?l:(r=e==null?0:e.length,!!r&&Ri(r)&&Pi(i,r)&&(yn(e)||Mi(e)))}function js(e,t){return e!=null&&Us(e,t,Vs)}var Ws=1,Ks=2;function Gs(e,t){return bl(e)&&xl(t)?yl(Xo(e),t):function(n){var o=Ha(n,e);return o===void 0&&o===t?js(n,e):Yo(t,o,Ws|Ks)}}function qs(e){return function(t){return t==null?void 0:t[e]}}function Xs(e){return function(t){return Va(t,e)}}function Ys(e){return bl(e)?qs(Xo(e)):Xs(e)}function Zs(e){return typeof e=="function"?e:e==null?Ti:typeof e=="object"?yn(e)?Gs(e[0],e[1]):Hs(e):Ys(e)}function Js(e,t){return e&&Ii(e,t,nl)}function Qs(e,t){return function(n,o){if(n==null)return n;if(!ol(n))return e(n,o);for(var r=n.length,l=t?r:-1,i=Object(n);(t?l--:++l<r)&&o(i[l],l,i)!==!1;);return n}}var ed=Qs(Js);const td=ed;var nd=function(){return Bi.Date.now()};const fo=nd;var od="Expected a function",rd=Math.max,ld=Math.min;function id(e,t,n){var o,r,l,i,a,s,c=0,f=!1,h=!1,u=!0;if(typeof e!="function")throw new TypeError(od);t=Pr(t)||0,xn(n)&&(f=!!n.leading,h="maxWait"in n,l=h?rd(Pr(n.maxWait)||0,t):l,u="trailing"in n?!!n.trailing:u);function b(B){var T=o,k=r;return o=r=void 0,c=B,i=e.apply(k,T),i}function v(B){return c=B,a=setTimeout(g,t),f?b(B):i}function m(B){var T=B-s,k=B-c,O=t-T;return h?ld(O,l-k):O}function C(B){var T=B-s,k=B-c;return s===void 0||T>=t||T<0||h&&k>=l}function g(){var B=fo();if(C(B))return S(B);a=setTimeout(g,m(B))}function S(B){return a=void 0,u&&o?b(B):(o=r=void 0,i)}function L(){a!==void 0&&clearTimeout(a),c=0,o=s=r=a=void 0}function $(){return a===void 0?i:S(fo())}function _(){var B=fo(),T=C(B);if(o=arguments,r=this,s=B,T){if(a===void 0)return v(s);if(h)return clearTimeout(a),a=setTimeout(g,t),b(s)}return a===void 0&&(a=setTimeout(g,t)),i}return _.cancel=L,_.flush=$,_}function ad(e,t){var n=-1,o=ol(e)?Array(e.length):[];return td(e,function(r,l,i){o[++n]=t(r,l,i)}),o}function sd(e,t){var n=yn(e)?Ai:ad;return n(e,Zs(t))}var dd="Expected a function";function ho(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(dd);return xn(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),id(e,t,{leading:o,maxWait:t,trailing:r})}let Vn=[];const wl=new WeakMap;function cd(){Vn.forEach(e=>e(...wl.get(e))),Vn=[]}function Zo(e,...t){wl.set(e,t),!Vn.includes(e)&&Vn.push(e)===1&&requestAnimationFrame(cd)}function ud(e){return e.nodeType===9?null:e.parentNode}function _l(e){if(e===null)return null;const t=ud(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return _l(t)}function fd(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function tn(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function hd(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(n=>{if(n==="")return;const[o,r]=n.split(":");r===void 0?t[""]=o:t[o]=r}),t}function un(e,t){var n;if(e==null)return;const o=hd(e);if(t===void 0)return o[""];if(typeof t=="string")return(n=o[t])!==null&&n!==void 0?n:o[""];if(Array.isArray(t)){for(let r=t.length-1;r>=0;--r){const l=t[r];if(l in o)return o[l]}return o[""]}else{let r,l=-1;return Object.keys(o).forEach(i=>{const a=Number(i);!Number.isNaN(a)&&t>=a&&a>=l&&(l=a,r=o[i])}),r}}function Cl(e,t,n){t/=100,n/=100;const o=t*Math.min(n,1-n)+n;return[e,o?(2-2*n/o)*100:0,o*100]}function Dn(e,t,n){t/=100,n/=100;const o=n-n*t/2,r=Math.min(o,1-o);return[e,r?(n-o)/r*100:0,o*100]}function $t(e,t,n){t/=100,n/=100;let o=(r,l=(r+e/60)%6)=>n-n*t*Math.max(Math.min(l,4-l,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Bo(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),l=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),o&&r/o*100,o*100]}function Ao(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),l=1-Math.abs(o+o-r-1),i=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(i<0?i+6:i),l?r/l*100:0,(o+o-r)*50]}function Fo(e,t,n){t/=100,n/=100;let o=t*Math.min(n,1-n),r=(l,i=(l+e/30)%12)=>n-o*Math.max(Math.min(i-3,9-i,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}function pd(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function vd(e){return t=>{t?e.value=t.$el:e.value=null}}function po(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}function bd(e){var t;const n=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:o})=>o===Tt);return!!(n&&n.value===!1)}let vo;function md(){return vo===void 0&&(vo=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),vo}function gd(e,t,n){if(!t)return e;const o=D(e.value);let r=null;return Se(e,l=>{r!==null&&window.clearTimeout(r),l===!0?n&&!n.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},t):o.value=!1}),o}let Qt,gn;const xd=()=>{var e,t;Qt=rl?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,gn=!1,Qt!==void 0?Qt.then(()=>{gn=!0}):gn=!0};xd();function Sl(e){if(gn)return;let t=!1;rt(()=>{gn||Qt==null||Qt.then(()=>{t||e()})}),pt(()=>{t=!0})}function Cn(e,t){return P(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const yd={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function wd(e){return`(min-width: ${e}px)`}const fn={};function _d(e=yd){if(!rl)return P(()=>[]);if(typeof window.matchMedia!="function")return P(()=>[]);const t=D({}),n=Object.keys(e),o=(r,l)=>{r.matches?t.value[l]=!0:t.value[l]=!1};return n.forEach(r=>{const l=e[r];let i,a;fn[l]===void 0?(i=window.matchMedia(wd(l)),i.addEventListener?i.addEventListener("change",s=>{a.forEach(c=>{c(s,r)})}):i.addListener&&i.addListener(s=>{a.forEach(c=>{c(s,r)})}),a=new Set,fn[l]={mql:i,cbs:a}):(i=fn[l].mql,a=fn[l].cbs),a.add(o),i.matches&&a.forEach(s=>{s(i,r)})}),pt(()=>{n.forEach(r=>{const{cbs:l}=fn[e[r]];l.has(o)&&l.delete(o)})}),P(()=>{const{value:r}=t;return n.filter(l=>r[l])})}function Cd(e={},t){const n=ll({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,l=s=>{switch(s.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==s.key)return;const f=o[c];if(typeof f=="function")f(s);else{const{stop:h=!1,prevent:u=!1}=f;h&&s.stopPropagation(),u&&s.preventDefault(),f.handler(s)}})},i=s=>{switch(s.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==s.key)return;const f=r[c];if(typeof f=="function")f(s);else{const{stop:h=!1,prevent:u=!1}=f;h&&s.stopPropagation(),u&&s.preventDefault(),f.handler(s)}})},a=()=>{(t===void 0||t.value)&&(Ve("keydown",document,l),Ve("keyup",document,i)),t!==void 0&&Se(t,s=>{s?(Ve("keydown",document,l),Ve("keyup",document,i)):(Ke("keydown",document,l),Ke("keyup",document,i))})};return Fi()?(Oi(a),pt(()=>{(t===void 0||t.value)&&(Ke("keydown",document,l),Ke("keyup",document,i))})):a(),Ei(n)}const Jo=et("n-internal-select-menu"),kl=et("n-internal-select-menu-body"),$l="__disabled__";function ct(e){const t=_e(Wn,null),n=_e(Kn,null),o=_e(kn,null),r=_e(kl,null),l=D();if(typeof document<"u"){l.value=document.fullscreenElement;const i=()=>{l.value=document.fullscreenElement};rt(()=>{Ve("fullscreenchange",document,i)}),pt(()=>{Ke("fullscreenchange",document,i)})}return ze(()=>{var i;const{to:a}=e;return a!==void 0?a===!1?$l:a===!0?l.value||"body":a:t!=null&&t.value?(i=t.value.$el)!==null&&i!==void 0?i:t.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:a??(l.value||"body")})}ct.tdkey=$l;ct.propTo={type:[String,Object,Boolean],default:void 0};let kt=null;function zl(){if(kt===null&&(kt=document.getElementById("v-binder-view-measurer"),kt===null)){kt=document.createElement("div"),kt.id="v-binder-view-measurer";const{style:e}=kt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(kt)}return kt.getBoundingClientRect()}function Sd(e,t){const n=zl();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function bo(e){const t=e.getBoundingClientRect(),n=zl();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function kd(e){return e.nodeType===9?null:e.parentNode}function Rl(e){if(e===null)return null;const t=kd(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return Rl(t)}const $d=q({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;Re("VBinder",(t=il())===null||t===void 0?void 0:t.proxy);const n=_e("VBinder",null),o=D(null),r=g=>{o.value=g,n&&e.syncTargetWithParent&&n.setTargetRef(g)};let l=[];const i=()=>{let g=o.value;for(;g=Rl(g),g!==null;)l.push(g);for(const S of l)Ve("scroll",S,h,!0)},a=()=>{for(const g of l)Ke("scroll",g,h,!0);l=[]},s=new Set,c=g=>{s.size===0&&i(),s.has(g)||s.add(g)},f=g=>{s.has(g)&&s.delete(g),s.size===0&&a()},h=()=>{Zo(u)},u=()=>{s.forEach(g=>g())},b=new Set,v=g=>{b.size===0&&Ve("resize",window,C),b.has(g)||b.add(g)},m=g=>{b.has(g)&&b.delete(g),b.size===0&&Ke("resize",window,C)},C=()=>{b.forEach(g=>g())};return pt(()=>{Ke("resize",window,C),a()}),{targetRef:o,setTargetRef:r,addScrollListener:c,removeScrollListener:f,addResizeListener:v,removeResizeListener:m}},render(){return Di("binder",this.$slots)}}),Qn=$d,eo=q({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=_e("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?dt(yr("follower",this.$slots),[[t]]):yr("follower",this.$slots)}}),Yt="@@mmoContext",zd={mounted(e,{value:t}){e[Yt]={handler:void 0},typeof t=="function"&&(e[Yt].handler=t,Ve("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[Yt];typeof t=="function"?n.handler?n.handler!==t&&(Ke("mousemoveoutside",e,n.handler),n.handler=t,Ve("mousemoveoutside",e,t)):(e[Yt].handler=t,Ve("mousemoveoutside",e,t)):n.handler&&(Ke("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[Yt];t&&Ke("mousemoveoutside",e,t),e[Yt].handler=void 0}},Rd=zd,{c:mt}=Ni(),to="vueuc-style";function Ar(e){return e&-e}class Pd{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let r=0;r<t+1;++r)o[r]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:r}=this;for(t+=1;t<=o;)r[t]+=n,t+=Ar(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:r}=this;if(t>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=t*o;for(;t>0;)l+=n[t],t-=Ar(t);return l}getBound(t){let n=0,o=this.l;for(;o>n;){const r=Math.floor((n+o)/2),l=this.sum(r);if(l>t){o=r;continue}else if(l<t){if(n===r)return this.sum(n+1)<=t?n+1:r;n=r}else return r}return n}}const Tn={top:"bottom",bottom:"top",left:"right",right:"left"},Fr={start:"end",center:"center",end:"start"},mo={top:"height",bottom:"height",left:"width",right:"width"},Md={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Td={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Id={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Or={top:!0,bottom:!1,left:!0,right:!1},Er={top:"end",bottom:"start",left:"end",right:"start"};function Bd(e,t,n,o,r,l){if(!r||l)return{placement:e,top:0,left:0};const[i,a]=e.split("-");let s=a??"center",c={top:0,left:0};const f=(b,v,m)=>{let C=0,g=0;const S=n[b]-t[v]-t[b];return S>0&&o&&(m?g=Or[v]?S:-S:C=Or[v]?S:-S),{left:C,top:g}},h=i==="left"||i==="right";if(s!=="center"){const b=Id[e],v=Tn[b],m=mo[b];if(n[m]>t[m]){if(t[b]+t[m]<n[m]){const C=(n[m]-t[m])/2;t[b]<C||t[v]<C?t[b]<t[v]?(s=Fr[a],c=f(m,v,h)):c=f(m,b,h):s="center"}}else n[m]<t[m]&&t[v]<0&&t[b]>t[v]&&(s=Fr[a])}else{const b=i==="bottom"||i==="top"?"left":"top",v=Tn[b],m=mo[b],C=(n[m]-t[m])/2;(t[b]<C||t[v]<C)&&(t[b]>t[v]?(s=Er[b],c=f(m,b,h)):(s=Er[v],c=f(m,v,h)))}let u=i;return t[i]<n[mo[i]]&&t[i]<t[Tn[i]]&&(u=Tn[i]),{placement:s!=="center"?`${u}-${s}`:u,left:c.left,top:c.top}}function Ad(e,t){return t?Td[e]:Md[e]}function Fd(e,t,n,o,r,l){if(l)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateX(-50%)"}}}const Od=mt([mt(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),mt(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[mt("> *",{pointerEvents:"all"})])]),no=q({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=_e("VBinder"),n=ze(()=>e.enabled!==void 0?e.enabled:e.show),o=D(null),r=D(null),l=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},i=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};rt(()=>{n.value&&(s(),l())});const a=Gn();Od.mount({id:"vueuc/binder",head:!0,anchorMetaName:to,ssr:a}),pt(()=>{i()}),Sl(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=o.value;if(u===null)return;const b=t.targetRef,{x:v,y:m,overlap:C}=e,g=v!==void 0&&m!==void 0?Sd(v,m):bo(b);u.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:L,placement:$,internalShift:_,flip:B}=e;u.setAttribute("v-placement",$),C?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:T}=u;S==="target"?T.width=`${g.width}px`:S!==void 0?T.width=S:T.width="",L==="target"?T.minWidth=`${g.width}px`:L!==void 0?T.minWidth=L:T.minWidth="";const k=bo(u),O=bo(r.value),{left:x,top:I,placement:z}=Bd($,g,k,_,B,C),G=Ad(z,C),{left:H,top:K,transform:M}=Fd(z,O,g,I,x,C);u.setAttribute("v-placement",z),u.style.setProperty("--v-offset-left",`${Math.round(x)}px`),u.style.setProperty("--v-offset-top",`${Math.round(I)}px`),u.style.transform=`translateX(${H}) translateY(${K}) ${M}`,u.style.setProperty("--v-transform-origin",G),u.style.transformOrigin=G};Se(n,u=>{u?(l(),c()):i()});const c=()=>{ht().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{Se(ae(e,u),s)}),["teleportDisabled"].forEach(u=>{Se(ae(e,u),c)}),Se(ae(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const f=nn(),h=ze(()=>{const{to:u}=e;if(u!==void 0)return u;f.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:r,followerRef:o,mergedTo:h,syncPosition:s}},render(){return d(Lo,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=d("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[d("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?dt(n,[[No,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});let In;function Ed(){return typeof document>"u"?!1:(In===void 0&&("matchMedia"in window?In=window.matchMedia("(pointer:coarse)").matches:In=!1),In)}let go;function Dr(){return typeof document>"u"?1:(go===void 0&&(go="chrome"in window?window.devicePixelRatio:1),go)}const Dd=mt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[mt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[mt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Nd=q({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Gn();Dd.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:to,ssr:t}),rt(()=>{const{defaultScrollIndex:I,defaultScrollKey:z}=e;I!=null?v({index:I}):z!=null&&v({key:z})});let n=!1,o=!1;Li(()=>{if(n=!1,!o){o=!0;return}v({top:h.value,left:f})}),Hi(()=>{n=!0,o||(o=!0)});const r=P(()=>{const I=new Map,{keyField:z}=e;return e.items.forEach((G,H)=>{I.set(G[z],H)}),I}),l=D(null),i=D(void 0),a=new Map,s=P(()=>{const{items:I,itemSize:z,keyField:G}=e,H=new Pd(I.length,z);return I.forEach((K,M)=>{const J=K[G],te=a.get(J);te!==void 0&&H.add(M,te)}),H}),c=D(0);let f=0;const h=D(0),u=ze(()=>Math.max(s.value.getBound(h.value-at(e.paddingTop))-1,0)),b=P(()=>{const{value:I}=i;if(I===void 0)return[];const{items:z,itemSize:G}=e,H=u.value,K=Math.min(H+Math.ceil(I/G+1),z.length-1),M=[];for(let J=H;J<=K;++J)M.push(z[J]);return M}),v=(I,z)=>{if(typeof I=="number"){S(I,z,"auto");return}const{left:G,top:H,index:K,key:M,position:J,behavior:te,debounce:V=!0}=I;if(G!==void 0||H!==void 0)S(G,H,te);else if(K!==void 0)g(K,te,V);else if(M!==void 0){const Q=r.value.get(M);Q!==void 0&&g(Q,te,V)}else J==="bottom"?S(0,Number.MAX_SAFE_INTEGER,te):J==="top"&&S(0,0,te)};let m,C=null;function g(I,z,G){const{value:H}=s,K=H.sum(I)+at(e.paddingTop);if(!G)l.value.scrollTo({left:0,top:K,behavior:z});else{m=I,C!==null&&window.clearTimeout(C),C=window.setTimeout(()=>{m=void 0,C=null},16);const{scrollTop:M,offsetHeight:J}=l.value;if(K>M){const te=H.get(I);K+te<=M+J||l.value.scrollTo({left:0,top:K+te-J,behavior:z})}else l.value.scrollTo({left:0,top:K,behavior:z})}}function S(I,z,G){l.value.scrollTo({left:I,top:z,behavior:G})}function L(I,z){var G,H,K;if(n||e.ignoreItemResize||x(z.target))return;const{value:M}=s,J=r.value.get(I),te=M.get(J),V=(K=(H=(G=z.borderBoxSize)===null||G===void 0?void 0:G[0])===null||H===void 0?void 0:H.blockSize)!==null&&K!==void 0?K:z.contentRect.height;if(V===te)return;V-e.itemSize===0?a.delete(I):a.set(I,V-e.itemSize);const le=V-te;if(le===0)return;M.add(J,le);const pe=l.value;if(pe!=null){if(m===void 0){const ke=M.sum(J);pe.scrollTop>ke&&pe.scrollBy(0,le)}else if(J<m)pe.scrollBy(0,le);else if(J===m){const ke=M.sum(J);V+ke>pe.scrollTop+pe.offsetHeight&&pe.scrollBy(0,le)}O()}c.value++}const $=!Ed();let _=!1;function B(I){var z;(z=e.onScroll)===null||z===void 0||z.call(e,I),(!$||!_)&&O()}function T(I){var z;if((z=e.onWheel)===null||z===void 0||z.call(e,I),$){const G=l.value;if(G!=null){if(I.deltaX===0&&(G.scrollTop===0&&I.deltaY<=0||G.scrollTop+G.offsetHeight>=G.scrollHeight&&I.deltaY>=0))return;I.preventDefault(),G.scrollTop+=I.deltaY/Dr(),G.scrollLeft+=I.deltaX/Dr(),O(),_=!0,Zo(()=>{_=!1})}}}function k(I){if(n||x(I.target)||I.contentRect.height===i.value)return;i.value=I.contentRect.height;const{onResize:z}=e;z!==void 0&&z(I)}function O(){const{value:I}=l;I!=null&&(h.value=I.scrollTop,f=I.scrollLeft)}function x(I){let z=I;for(;z!==null;){if(z.style.display==="none")return!0;z=z.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:P(()=>{const{itemResizable:I}=e,z=nt(s.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:I?"":z,minHeight:I?z:"",paddingTop:nt(e.paddingTop),paddingBottom:nt(e.paddingBottom)}]}),visibleItemsStyle:P(()=>(c.value,{transform:`translateY(${nt(s.value.sum(u.value))})`})),viewportItems:b,listElRef:l,itemsElRef:D(null),scrollTo:v,handleListResize:k,handleListScroll:B,handleListWheel:T,handleItemResize:L}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return d(wn,{onResize:this.handleListResize},{default:()=>{var r,l;return d("div",gt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const a=i[t],s=n.get(a),c=this.$slots.default({item:i,index:s})[0];return e?d(wn,{key:a,onResize:f=>this.handleItemResize(a,f)},{default:()=>c}):(c.key=a,c)})})]):(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)])}})}}),Ld=mt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[mt("&::-webkit-scrollbar",{width:0,height:0})]),Hd=q({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=D(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const n=Gn();return Ld.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:to,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var l;(l=e.value)===null||l===void 0||l.scrollTo(...r)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),yt="v-hidden",Vd=mt("[v-hidden]",{display:"none!important"}),Nr=q({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=D(null),o=D(null);function r(i){const{value:a}=n,{getCounter:s,getTail:c}=e;let f;if(s!==void 0?f=s():f=o.value,!a||!f)return;f.hasAttribute(yt)&&f.removeAttribute(yt);const{children:h}=a;if(i.showAllItemsBeforeCalculate)for(const L of h)L.hasAttribute(yt)&&L.removeAttribute(yt);const u=a.offsetWidth,b=[],v=t.tail?c==null?void 0:c():null;let m=v?v.offsetWidth:0,C=!1;const g=a.children.length-(t.tail?1:0);for(let L=0;L<g-1;++L){if(L<0)continue;const $=h[L];if(C){$.hasAttribute(yt)||$.setAttribute(yt,"");continue}else $.hasAttribute(yt)&&$.removeAttribute(yt);const _=$.offsetWidth;if(m+=_,b[L]=_,m>u){const{updateCounter:B}=e;for(let T=L;T>=0;--T){const k=g-1-T;B!==void 0?B(k):f.textContent=`${k}`;const O=f.offsetWidth;if(m-=b[T],m+O<=u||T===0){C=!0,L=T-1,v&&(L===-1?(v.style.maxWidth=`${u-O}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");const{onUpdateCount:x}=e;x&&x(k);break}}}}const{onUpdateOverflow:S}=e;C?S!==void 0&&S(!0):(S!==void 0&&S(!1),f.setAttribute(yt,""))}const l=Gn();return Vd.mount({id:"vueuc/overflow",head:!0,anchorMetaName:to,ssr:l}),rt(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:r}},render(){const{$slots:e}=this;return ht(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[Lt(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Pl(e,t){t&&(rt(()=>{const{value:n}=e;n&&wr.registerHandler(n,t)}),pt(()=>{const{value:n}=e;n&&wr.unregisterHandler(n)}))}function Lr(e){return e.nodeName==="#document"}const Ml=q({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Ud=q({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),jd=q({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Wd=q({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Kd=q({name:"Remove",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Gd=q({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),qd=q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Hr(e){return Array.isArray(e)?e:[e]}const Oo={STOP:"STOP"};function Tl(e,t){const n=t(e);e.children!==void 0&&n!==Oo.STOP&&e.children.forEach(o=>Tl(o,t))}function Xd(e,t={}){const{preserveGroup:n=!1}=t,o=[],r=n?i=>{i.isLeaf||(o.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||o.push(i.key),l(i.children))};function l(i){i.forEach(r)}return l(e),o}function Yd(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Zd(e){return e.children}function Jd(e){return e.key}function Qd(){return!1}function ec(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function tc(e){return e.disabled===!0}function nc(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function xo(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function yo(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function oc(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function rc(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function lc(e){return(e==null?void 0:e.type)==="group"}function ic(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class ac extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function sc(e,t,n,o){return Un(t.concat(e),n,o,!1)}function dc(e,t){const n=new Set;return e.forEach(o=>{const r=t.treeNodeMap.get(o);if(r!==void 0){let l=r.parent;for(;l!==null&&!(l.disabled||n.has(l.key));)n.add(l.key),l=l.parent}}),n}function cc(e,t,n,o){const r=Un(t,n,o,!1),l=Un(e,n,o,!0),i=dc(e,n),a=[];return r.forEach(s=>{(l.has(s)||i.has(s))&&a.push(s)}),a.forEach(s=>r.delete(s)),r}function wo(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:r,indeterminateKeys:l,cascade:i,leafOnly:a,checkStrategy:s,allowNotLoaded:c}=e;if(!i)return o!==void 0?{checkedKeys:oc(n,o),indeterminateKeys:Array.from(l)}:r!==void 0?{checkedKeys:rc(n,r),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:f}=t;let h;r!==void 0?h=cc(r,n,t,c):o!==void 0?h=sc(o,n,t,c):h=Un(n,t,c,!1);const u=s==="parent",b=s==="child"||a,v=h,m=new Set,C=Math.max.apply(null,Array.from(f.keys()));for(let g=C;g>=0;g-=1){const S=g===0,L=f.get(g);for(const $ of L){if($.isLeaf)continue;const{key:_,shallowLoaded:B}=$;if(b&&B&&$.children.forEach(x=>{!x.disabled&&!x.isLeaf&&x.shallowLoaded&&v.has(x.key)&&v.delete(x.key)}),$.disabled||!B)continue;let T=!0,k=!1,O=!0;for(const x of $.children){const I=x.key;if(!x.disabled){if(O&&(O=!1),v.has(I))k=!0;else if(m.has(I)){k=!0,T=!1;break}else if(T=!1,k)break}}T&&!O?(u&&$.children.forEach(x=>{!x.disabled&&v.has(x.key)&&v.delete(x.key)}),v.add(_)):k&&m.add(_),S&&b&&v.has(_)&&v.delete(_)}}return{checkedKeys:Array.from(v),indeterminateKeys:Array.from(m)}}function Un(e,t,n,o){const{treeNodeMap:r,getChildren:l}=t,i=new Set,a=new Set(e);return e.forEach(s=>{const c=r.get(s);c!==void 0&&Tl(c,f=>{if(f.disabled)return Oo.STOP;const{key:h}=f;if(!i.has(h)&&(i.add(h),a.add(h),nc(f.rawNode,l))){if(o)return Oo.STOP;if(!n)throw new ac}})}),a}function uc(e,{includeGroup:t=!1,includeSelf:n=!0},o){var r;const l=o.treeNodeMap;let i=e==null?null:(r=l.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return a.treeNode=null,a;for(;i;)!i.ignored&&(t||!i.isGroup)&&a.treeNodePath.push(i),i=i.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function fc(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function hc(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r+1)%o]:r===n.length-1?null:n[r+1]}function Vr(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const r=t==="prev"?pc:hc,l={reverse:t==="prev"};let i=!1,a=null;function s(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const f=Qo(c,l);f!==null?a=f:s(r(c,n))}else{const f=r(c,!1);if(f!==null)s(f);else{const h=vc(c);h!=null&&h.isGroup?s(r(h,n)):n&&s(r(c,!0))}}}}return s(e),a}function pc(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r-1+o)%o]:r===0?null:n[r-1]}function vc(e){return e.parent}function Qo(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:r}=o,l=n?r-1:0,i=n?-1:r,a=n?-1:1;for(let s=l;s!==i;s+=a){const c=o[s];if(!c.disabled&&!c.ignored)if(c.isGroup){const f=Qo(c,t);if(f!==null)return f}else return c}}return null}const bc={getChild(){return this.ignored?null:Qo(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Vr(this,"next",e)},getPrev(e={}){return Vr(this,"prev",e)}};function mc(e,t){const n=t?new Set(t):void 0,o=[];function r(l){l.forEach(i=>{o.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||n===void 0||n.has(i.key))&&r(i.children)})}return r(e),o}function gc(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Il(e,t,n,o,r,l=null,i=0){const a=[];return e.forEach((s,c)=>{var f;const h=Object.create(o);if(h.rawNode=s,h.siblings=a,h.level=i,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=l,!h.ignored){const u=r(s);Array.isArray(u)&&(h.children=Il(u,t,n,o,r,h,i+1))}a.push(h),t.set(h.key,h),n.has(i)||n.set(i,[]),(f=n.get(i))===null||f===void 0||f.push(h)}),a}function er(e,t={}){var n;const o=new Map,r=new Map,{getDisabled:l=tc,getIgnored:i=Qd,getIsGroup:a=lc,getKey:s=Jd}=t,c=(n=t.getChildren)!==null&&n!==void 0?n:Zd,f=t.ignoreEmptyChildren?$=>{const _=c($);return Array.isArray(_)?_.length?_:null:_}:c,h=Object.assign({get key(){return s(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Yd(this.rawNode,f)},get shallowLoaded(){return ec(this.rawNode,f)},get ignored(){return i(this.rawNode)},contains($){return gc(this,$)}},bc),u=Il(e,o,r,h,f);function b($){if($==null)return null;const _=o.get($);return _&&!_.isGroup&&!_.ignored?_:null}function v($){if($==null)return null;const _=o.get($);return _&&!_.ignored?_:null}function m($,_){const B=v($);return B?B.getPrev(_):null}function C($,_){const B=v($);return B?B.getNext(_):null}function g($){const _=v($);return _?_.getParent():null}function S($){const _=v($);return _?_.getChild():null}const L={treeNodes:u,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes($){return mc(u,$)},getNode:b,getPrev:m,getNext:C,getParent:g,getChild:S,getFirstAvailableNode(){return fc(u)},getPath($,_={}){return uc($,_,L)},getCheckedKeys($,_={}){const{cascade:B=!0,leafOnly:T=!1,checkStrategy:k="all",allowNotLoaded:O=!1}=_;return wo({checkedKeys:xo($),indeterminateKeys:yo($),cascade:B,leafOnly:T,checkStrategy:k,allowNotLoaded:O},L)},check($,_,B={}){const{cascade:T=!0,leafOnly:k=!1,checkStrategy:O="all",allowNotLoaded:x=!1}=B;return wo({checkedKeys:xo(_),indeterminateKeys:yo(_),keysToCheck:$==null?[]:Hr($),cascade:T,leafOnly:k,checkStrategy:O,allowNotLoaded:x},L)},uncheck($,_,B={}){const{cascade:T=!0,leafOnly:k=!1,checkStrategy:O="all",allowNotLoaded:x=!1}=B;return wo({checkedKeys:xo(_),indeterminateKeys:yo(_),keysToUncheck:$==null?[]:Hr($),cascade:T,leafOnly:k,checkStrategy:O,allowNotLoaded:x},L)},getNonLeafKeys($={}){return Xd(u,$)}};return L}const xc=y("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[A("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[F("+",[A("description",`
 margin-top: 8px;
 `)])]),A("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),A("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),yc=Object.assign(Object.assign({},xe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),wc=q({name:"Empty",props:yc,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=xe("Empty","-empty",xc,Vi,e,t),{localeRef:r}=Jn("Empty"),l=_e(Ui,null),i=P(()=>{var f,h,u;return(f=e.description)!==null&&f!==void 0?f:(u=(h=l==null?void 0:l.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||u===void 0?void 0:u.description}),a=P(()=>{var f,h;return((h=(f=l==null?void 0:l.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||h===void 0?void 0:h.renderIcon)||(()=>d(Wd,null))}),s=P(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:h},self:{[ce("iconSize",f)]:u,[ce("fontSize",f)]:b,textColor:v,iconColor:m,extraTextColor:C}}=o.value;return{"--n-icon-size":u,"--n-font-size":b,"--n-bezier":h,"--n-text-color":v,"--n-icon-color":m,"--n-extra-text-color":C}}),c=n?Ze("empty",P(()=>{let f="";const{size:h}=e;return f+=h[0],f}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:P(()=>i.value||r.value.description),cssVars:n?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),d("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${t}-empty__icon`},e.icon?e.icon():d(Ht,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${t}-empty__extra`},e.extra()):null)}});function _c(e,t){return d(It,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Ht,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>d(Ud)}):null})}const Ur=q({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:r,renderLabelRef:l,renderOptionRef:i,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:c,nodePropsRef:f,handleOptionClick:h,handleOptionMouseEnter:u}=_e(Jo),b=ze(()=>{const{value:g}=n;return g?e.tmNode.key===g.key:!1});function v(g){const{tmNode:S}=e;S.disabled||h(g,S)}function m(g){const{tmNode:S}=e;S.disabled||u(g,S)}function C(g){const{tmNode:S}=e,{value:L}=b;S.disabled||L||u(g,S)}return{multiple:o,isGrouped:ze(()=>{const{tmNode:g}=e,{parent:S}=g;return S&&S.rawNode.type==="group"}),showCheckmark:c,nodeProps:f,isPending:b,isSelected:ze(()=>{const{value:g}=t,{value:S}=o;if(g===null)return!1;const L=e.tmNode.rawNode[s.value];if(S){const{value:$}=r;return $.has(L)}else return g===L}),labelField:a,renderLabel:l,renderOption:i,handleMouseMove:C,handleMouseEnter:m,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:r,showCheckmark:l,nodeProps:i,renderOption:a,renderLabel:s,handleClick:c,handleMouseEnter:f,handleMouseMove:h}=this,u=_c(n,e),b=s?[s(t,n),l&&u]:[Ge(t[this.labelField],t,n),l&&u],v=i==null?void 0:i(t),m=d("div",Object.assign({},v,{class:[`${e}-base-select-option`,t.class,v==null?void 0:v.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:l}],style:[(v==null?void 0:v.style)||"",t.style||""],onClick:po([c,v==null?void 0:v.onClick]),onMouseenter:po([f,v==null?void 0:v.onMouseenter]),onMousemove:po([h,v==null?void 0:v.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},b));return t.render?t.render({node:m,option:t,selected:n}):a?a({node:m,option:t,selected:n}):m}}),jr=q({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=_e(Jo);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:r}}=this,l=o==null?void 0:o(r),i=t?t(r,!1):Ge(r[this.labelField],r,!1),a=d("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),i);return r.render?r.render({node:a,option:r}):n?n({node:a,option:r,selected:!1}):a}}),Cc=y("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[y("scrollbar",`
 max-height: var(--n-height);
 `),y("virtual-list",`
 max-height: var(--n-height);
 `),y("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[A("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),y("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),y("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),A("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),A("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),A("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),y("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),y("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),F("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),F("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[F("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[F("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[F("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Ne("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),A("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[$n({enterScale:"0.5"})])])]),Sc=q({name:"InternalSelectMenu",props:Object.assign(Object.assign({},xe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=xe("InternalSelectMenu","-internal-select-menu",Cc,ji,e,ae(e,"clsPrefix")),n=D(null),o=D(null),r=D(null),l=P(()=>e.treeMate.getFlattenedNodes()),i=P(()=>ic(l.value)),a=D(null);function s(){const{treeMate:V}=e;let Q=null;const{value:le}=e;le===null?Q=V.getFirstAvailableNode():(e.multiple?Q=V.getNode((le||[])[(le||[]).length-1]):Q=V.getNode(le),(!Q||Q.disabled)&&(Q=V.getFirstAvailableNode())),I(Q||null)}function c(){const{value:V}=a;V&&!e.treeMate.getNode(V.key)&&(a.value=null)}let f;Se(()=>e.show,V=>{V?f=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?s():c(),ht(z)):c()},{immediate:!0}):f==null||f()},{immediate:!0}),pt(()=>{f==null||f()});const h=P(()=>at(t.value.self[ce("optionHeight",e.size)])),u=P(()=>Et(t.value.self[ce("padding",e.size)])),b=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),v=P(()=>{const V=l.value;return V&&V.length===0});function m(V){const{onToggle:Q}=e;Q&&Q(V)}function C(V){const{onScroll:Q}=e;Q&&Q(V)}function g(V){var Q;(Q=r.value)===null||Q===void 0||Q.sync(),C(V)}function S(){var V;(V=r.value)===null||V===void 0||V.sync()}function L(){const{value:V}=a;return V||null}function $(V,Q){Q.disabled||I(Q,!1)}function _(V,Q){Q.disabled||m(Q)}function B(V){var Q;tn(V,"action")||(Q=e.onKeyup)===null||Q===void 0||Q.call(e,V)}function T(V){var Q;tn(V,"action")||(Q=e.onKeydown)===null||Q===void 0||Q.call(e,V)}function k(V){var Q;(Q=e.onMousedown)===null||Q===void 0||Q.call(e,V),!e.focusable&&V.preventDefault()}function O(){const{value:V}=a;V&&I(V.getNext({loop:!0}),!0)}function x(){const{value:V}=a;V&&I(V.getPrev({loop:!0}),!0)}function I(V,Q=!1){a.value=V,Q&&z()}function z(){var V,Q;const le=a.value;if(!le)return;const pe=i.value(le.key);pe!==null&&(e.virtualScroll?(V=o.value)===null||V===void 0||V.scrollTo({index:pe}):(Q=r.value)===null||Q===void 0||Q.scrollTo({index:pe,elSize:h.value}))}function G(V){var Q,le;!((Q=n.value)===null||Q===void 0)&&Q.contains(V.target)&&((le=e.onFocus)===null||le===void 0||le.call(e,V))}function H(V){var Q,le;!((Q=n.value)===null||Q===void 0)&&Q.contains(V.relatedTarget)||(le=e.onBlur)===null||le===void 0||le.call(e,V)}Re(Jo,{handleOptionMouseEnter:$,handleOptionClick:_,valueSetRef:b,pendingTmNodeRef:a,nodePropsRef:ae(e,"nodeProps"),showCheckmarkRef:ae(e,"showCheckmark"),multipleRef:ae(e,"multiple"),valueRef:ae(e,"value"),renderLabelRef:ae(e,"renderLabel"),renderOptionRef:ae(e,"renderOption"),labelFieldRef:ae(e,"labelField"),valueFieldRef:ae(e,"valueField")}),Re(kl,n),rt(()=>{const{value:V}=r;V&&V.sync()});const K=P(()=>{const{size:V}=e,{common:{cubicBezierEaseInOut:Q},self:{height:le,borderRadius:pe,color:ke,groupHeaderTextColor:Ae,actionDividerColor:Oe,optionTextColorPressed:ve,optionTextColor:he,optionTextColorDisabled:$e,optionTextColorActive:Be,optionOpacityDisabled:qe,optionCheckColor:Xe,actionTextColor:lt,optionColorPending:tt,optionColorActive:Je,loadingColor:He,loadingSize:Y,optionColorActivePending:R,[ce("optionFontSize",V)]:w,[ce("optionHeight",V)]:W,[ce("optionPadding",V)]:oe}}=t.value;return{"--n-height":le,"--n-action-divider-color":Oe,"--n-action-text-color":lt,"--n-bezier":Q,"--n-border-radius":pe,"--n-color":ke,"--n-option-font-size":w,"--n-group-header-text-color":Ae,"--n-option-check-color":Xe,"--n-option-color-pending":tt,"--n-option-color-active":Je,"--n-option-color-active-pending":R,"--n-option-height":W,"--n-option-opacity-disabled":qe,"--n-option-text-color":he,"--n-option-text-color-active":Be,"--n-option-text-color-disabled":$e,"--n-option-text-color-pressed":ve,"--n-option-padding":oe,"--n-option-padding-left":Et(oe,"left"),"--n-option-padding-right":Et(oe,"right"),"--n-loading-color":He,"--n-loading-size":Y}}),{inlineThemeDisabled:M}=e,J=M?Ze("internal-select-menu",P(()=>e.size[0]),K,e):void 0,te={selfRef:n,next:O,prev:x,getPendingTmNode:L};return Pl(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:r,itemSize:h,padding:u,flattenedNodes:l,empty:v,virtualListContainer(){const{value:V}=o;return V==null?void 0:V.listElRef},virtualListContent(){const{value:V}=o;return V==null?void 0:V.itemsElRef},doScroll:C,handleFocusin:G,handleFocusout:H,handleKeyUp:B,handleKeyDown:T,handleMouseDown:k,handleVirtualListResize:S,handleVirtualListScroll:g,cssVars:M?void 0:K,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender},te)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:r,onRender:l}=this;return l==null||l(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?d("div",{class:`${n}-base-select-menu__loading`},d(al,{clsPrefix:n,strokeWidth:20})):this.empty?d("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},_n(e.empty,()=>[d(wc,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):d(qn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?d(Nd,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?d(jr,{key:i.key,clsPrefix:n,tmNode:i}):i.ignored?null:d(Ur,{clsPrefix:n,key:i.key,tmNode:i})}):d("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?d(jr,{key:i.key,clsPrefix:n,tmNode:i}):d(Ur,{clsPrefix:n,key:i.key,tmNode:i})))}),We(e.action,i=>i&&[d("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},i),d(qd,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),_o={top:"bottom",bottom:"top",left:"right",right:"left"},De="var(--n-arrow-height) * 1.414",kc=F([y("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[F(">",[y("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Ne("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Ne("scrollable",[Ne("show-header-or-footer","padding: var(--n-padding);")])]),A("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),A("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),U("scrollable, show-header-or-footer",[A("content",`
 padding: var(--n-padding);
 `)])]),y("popover-shared",`
 transform-origin: inherit;
 `,[y("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[y("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${De});
 height: calc(${De});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),F("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),F("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),F("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),F("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),it("top-start",`
 top: calc(${De} / -2);
 left: calc(${wt("top-start")} - var(--v-offset-left));
 `),it("top",`
 top: calc(${De} / -2);
 transform: translateX(calc(${De} / -2)) rotate(45deg);
 left: 50%;
 `),it("top-end",`
 top: calc(${De} / -2);
 right: calc(${wt("top-end")} + var(--v-offset-left));
 `),it("bottom-start",`
 bottom: calc(${De} / -2);
 left: calc(${wt("bottom-start")} - var(--v-offset-left));
 `),it("bottom",`
 bottom: calc(${De} / -2);
 transform: translateX(calc(${De} / -2)) rotate(45deg);
 left: 50%;
 `),it("bottom-end",`
 bottom: calc(${De} / -2);
 right: calc(${wt("bottom-end")} + var(--v-offset-left));
 `),it("left-start",`
 left: calc(${De} / -2);
 top: calc(${wt("left-start")} - var(--v-offset-top));
 `),it("left",`
 left: calc(${De} / -2);
 transform: translateY(calc(${De} / -2)) rotate(45deg);
 top: 50%;
 `),it("left-end",`
 left: calc(${De} / -2);
 bottom: calc(${wt("left-end")} + var(--v-offset-top));
 `),it("right-start",`
 right: calc(${De} / -2);
 top: calc(${wt("right-start")} - var(--v-offset-top));
 `),it("right",`
 right: calc(${De} / -2);
 transform: translateY(calc(${De} / -2)) rotate(45deg);
 top: 50%;
 `),it("right-end",`
 right: calc(${De} / -2);
 bottom: calc(${wt("right-end")} + var(--v-offset-top));
 `),...sd({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),o=n?"width":"height";return e.map(r=>{const l=r.split("-")[1]==="end",a=`calc((${`var(--v-target-${o}, 0px)`} - ${De}) / 2)`,s=wt(r);return F(`[v-placement="${r}"] >`,[y("popover-shared",[U("center-arrow",[y("popover-arrow",`${t}: calc(max(${a}, ${s}) ${l?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function wt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function it(e,t){const n=e.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return F(`[v-placement="${e}"] >`,[y("popover-shared",`
 margin-${_o[n]}: var(--n-space);
 `,[U("show-arrow",`
 margin-${_o[n]}: var(--n-space-arrow);
 `),U("overlap",`
 margin: 0;
 `),Wi("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${_o[n]}: auto;
 ${o}
 `,[y("popover-arrow",t)])])])}const Bl=Object.assign(Object.assign({},xe.props),{to:ct.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Al=({arrowStyle:e,clsPrefix:t})=>d("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},d("div",{class:`${t}-popover-arrow`,style:e})),$c=q({name:"PopoverBody",inheritAttrs:!1,props:Bl,setup(e,{slots:t,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:l}=Ue(e),i=xe("Popover","-popover",kc,Ki,e,r),a=D(null),s=_e("NPopover"),c=D(null),f=D(e.show),h=D(!1);xt(()=>{const{show:T}=e;T&&!md()&&!e.internalDeactivateImmediately&&(h.value=!0)});const u=P(()=>{const{trigger:T,onClickoutside:k}=e,O=[],{positionManuallyRef:{value:x}}=s;return x||(T==="click"&&!k&&O.push([en,$,void 0,{capture:!0}]),T==="hover"&&O.push([Rd,L])),k&&O.push([en,$,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&O.push([Tt,e.show]),O}),b=P(()=>{const T=e.width==="trigger"?void 0:Mt(e.width),k=[];T&&k.push({width:T});const{maxWidth:O,minWidth:x}=e;return O&&k.push({maxWidth:Mt(O)}),x&&k.push({maxWidth:Mt(x)}),l||k.push(v.value),k}),v=P(()=>{const{common:{cubicBezierEaseInOut:T,cubicBezierEaseIn:k,cubicBezierEaseOut:O},self:{space:x,spaceArrow:I,padding:z,fontSize:G,textColor:H,dividerColor:K,color:M,boxShadow:J,borderRadius:te,arrowHeight:V,arrowOffset:Q,arrowOffsetVertical:le}}=i.value;return{"--n-box-shadow":J,"--n-bezier":T,"--n-bezier-ease-in":k,"--n-bezier-ease-out":O,"--n-font-size":G,"--n-text-color":H,"--n-color":M,"--n-divider-color":K,"--n-border-radius":te,"--n-arrow-height":V,"--n-arrow-offset":Q,"--n-arrow-offset-vertical":le,"--n-padding":z,"--n-space":x,"--n-space-arrow":I}}),m=l?Ze("popover",void 0,v,e):void 0;s.setBodyInstance({syncPosition:C}),pt(()=>{s.setBodyInstance(null)}),Se(ae(e,"show"),T=>{e.animated||(T?f.value=!0:f.value=!1)});function C(){var T;(T=a.value)===null||T===void 0||T.syncPosition()}function g(T){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(T)}function S(T){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(T)}function L(T){e.trigger==="hover"&&!_().contains(Nn(T))&&s.handleMouseMoveOutside(T)}function $(T){(e.trigger==="click"&&!_().contains(Nn(T))||e.onClickoutside)&&s.handleClickOutside(T)}function _(){return s.getTriggerElement()}Re(kn,c),Re(Kn,null),Re(Wn,null);function B(){if(m==null||m.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let k;const O=s.internalRenderBodyRef.value,{value:x}=r;if(O)k=O([`${x}-popover-shared`,m==null?void 0:m.themeClass.value,e.overlap&&`${x}-popover-shared--overlap`,e.showArrow&&`${x}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${x}-popover-shared--center-arrow`],c,b.value,g,S);else{const{value:I}=s.extraClassRef,{internalTrapFocus:z}=e,G=!vn(t.header)||!vn(t.footer),H=()=>{var K;const M=G?d(Te,null,We(t.header,V=>V?d("div",{class:`${x}-popover__header`,style:e.headerStyle},V):null),We(t.default,V=>V?d("div",{class:`${x}-popover__content`,style:e.contentStyle},t):null),We(t.footer,V=>V?d("div",{class:`${x}-popover__footer`,style:e.footerStyle},V):null)):e.scrollable?(K=t.default)===null||K===void 0?void 0:K.call(t):d("div",{class:`${x}-popover__content`,style:e.contentStyle},t),J=e.scrollable?d(dl,{contentClass:G?void 0:`${x}-popover__content`,contentStyle:G?void 0:e.contentStyle},{default:()=>M}):M,te=e.showArrow?Al({arrowStyle:e.arrowStyle,clsPrefix:x}):null;return[J,te]};k=d("div",gt({class:[`${x}-popover`,`${x}-popover-shared`,m==null?void 0:m.themeClass.value,I.map(K=>`${x}-${K}`),{[`${x}-popover--scrollable`]:e.scrollable,[`${x}-popover--show-header-or-footer`]:G,[`${x}-popover--raw`]:e.raw,[`${x}-popover-shared--overlap`]:e.overlap,[`${x}-popover-shared--show-arrow`]:e.showArrow,[`${x}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:b.value,onKeydown:s.handleKeydown,onMouseenter:g,onMouseleave:S},n),z?d(sl,{active:e.show,autoFocus:!0},{default:H}):H())}return dt(k,u.value)}return{displayed:h,namespace:o,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:a,adjustedTo:ct(e),followerEnabled:f,renderContentNode:B}},render(){return d(no,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ct.tdkey},{default:()=>this.animated?d(It,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),zc=Object.keys(Bl),Rc={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Pc(e,t,n){Rc[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],l=n[o];r?e.props[o]=(...i)=>{r(...i),l(...i)}:e.props[o]=l})}const oo={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ct.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Mc=Object.assign(Object.assign(Object.assign({},xe.props),oo),{internalOnAfterLeave:Function,internalRenderBody:Function}),tr=q({name:"Popover",inheritAttrs:!1,props:Mc,__popover__:!0,setup(e){const t=nn(),n=D(null),o=P(()=>e.show),r=D(e.defaultShow),l=Qe(o,r),i=ze(()=>e.disabled?!1:l.value),a=()=>{if(e.disabled)return!0;const{getDisabled:H}=e;return!!(H!=null&&H())},s=()=>a()?!1:l.value,c=Cn(e,["arrow","showArrow"]),f=P(()=>e.overlap?!1:c.value);let h=null;const u=D(null),b=D(null),v=ze(()=>e.x!==void 0&&e.y!==void 0);function m(H){const{"onUpdate:show":K,onUpdateShow:M,onShow:J,onHide:te}=e;r.value=H,K&&de(K,H),M&&de(M,H),H&&J&&de(J,!0),H&&te&&de(te,!1)}function C(){h&&h.syncPosition()}function g(){const{value:H}=u;H&&(window.clearTimeout(H),u.value=null)}function S(){const{value:H}=b;H&&(window.clearTimeout(H),b.value=null)}function L(){const H=a();if(e.trigger==="focus"&&!H){if(s())return;m(!0)}}function $(){const H=a();if(e.trigger==="focus"&&!H){if(!s())return;m(!1)}}function _(){const H=a();if(e.trigger==="hover"&&!H){if(S(),u.value!==null||s())return;const K=()=>{m(!0),u.value=null},{delay:M}=e;M===0?K():u.value=window.setTimeout(K,M)}}function B(){const H=a();if(e.trigger==="hover"&&!H){if(g(),b.value!==null||!s())return;const K=()=>{m(!1),b.value=null},{duration:M}=e;M===0?K():b.value=window.setTimeout(K,M)}}function T(){B()}function k(H){var K;s()&&(e.trigger==="click"&&(g(),S(),m(!1)),(K=e.onClickoutside)===null||K===void 0||K.call(e,H))}function O(){if(e.trigger==="click"&&!a()){g(),S();const H=!s();m(H)}}function x(H){e.internalTrapFocus&&H.key==="Escape"&&(g(),S(),m(!1))}function I(H){r.value=H}function z(){var H;return(H=n.value)===null||H===void 0?void 0:H.targetRef}function G(H){h=H}return Re("NPopover",{getTriggerElement:z,handleKeydown:x,handleMouseEnter:_,handleMouseLeave:B,handleClickOutside:k,handleMouseMoveOutside:T,setBodyInstance:G,positionManuallyRef:v,isMountedRef:t,zIndexRef:ae(e,"zIndex"),extraClassRef:ae(e,"internalExtraClass"),internalRenderBodyRef:ae(e,"internalRenderBody")}),xt(()=>{l.value&&a()&&m(!1)}),{binderInstRef:n,positionManually:v,mergedShowConsideringDisabledProp:i,uncontrolledShow:r,mergedShowArrow:f,getMergedShow:s,setShow:I,handleClick:O,handleMouseEnter:_,handleMouseLeave:B,handleFocus:L,handleBlur:$,syncPosition:C}},render(){var e;const{positionManually:t,$slots:n}=this;let o,r=!1;if(!t&&(n.activator?o=_r(n,"activator"):o=_r(n,"trigger"),o)){o=Ln(o),o=o.type===Gi?d("span",[o]):o;const l={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[l,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[l];else{const{internalInheritedEventHandlers:i}=this,a=[l,...i],s={onBlur:c=>{a.forEach(f=>{f.onBlur(c)})},onFocus:c=>{a.forEach(f=>{f.onFocus(c)})},onClick:c=>{a.forEach(f=>{f.onClick(c)})},onMouseenter:c=>{a.forEach(f=>{f.onMouseenter(c)})},onMouseleave:c=>{a.forEach(f=>{f.onMouseleave(c)})}};Pc(o,i?"nested":t?"manual":this.trigger,s)}}return d(Qn,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const l=this.getMergedShow();return[this.internalTrapFocus&&l?dt(d("div",{style:{position:"fixed",inset:0}}),[[No,{enabled:l,zIndex:this.zIndex}]]):null,t?null:d(eo,null,{default:()=>o}),d($c,bn(this.$props,zc,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:l})),{default:()=>{var i,a;return(a=(i=this.$slots).default)===null||a===void 0?void 0:a.call(i)},header:()=>{var i,a;return(a=(i=this.$slots).header)===null||a===void 0?void 0:a.call(i)},footer:()=>{var i,a;return(a=(i=this.$slots).footer)===null||a===void 0?void 0:a.call(i)}})]}})}}),Tc=e=>{const{textColor2:t,primaryColorHover:n,primaryColorPressed:o,primaryColor:r,infoColor:l,successColor:i,warningColor:a,errorColor:s,baseColor:c,borderColor:f,opacityDisabled:h,tagColor:u,closeIconColor:b,closeIconColorHover:v,closeIconColorPressed:m,borderRadiusSmall:C,fontSizeMini:g,fontSizeTiny:S,fontSizeSmall:L,fontSizeMedium:$,heightMini:_,heightTiny:B,heightSmall:T,heightMedium:k,closeColorHover:O,closeColorPressed:x,buttonColor2Hover:I,buttonColor2Pressed:z,fontWeightStrong:G}=e;return Object.assign(Object.assign({},qi),{closeBorderRadius:C,heightTiny:_,heightSmall:B,heightMedium:T,heightLarge:k,borderRadius:C,opacityDisabled:h,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:L,fontSizeLarge:$,fontWeightStrong:G,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:I,colorPressedCheckable:z,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:o,border:`1px solid ${f}`,textColor:t,color:u,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:v,closeIconColorPressed:m,closeColorHover:O,closeColorPressed:x,borderPrimary:`1px solid ${Me(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Me(r,{alpha:.12}),colorBorderedPrimary:Me(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:Me(r,{alpha:.12}),closeColorPressedPrimary:Me(r,{alpha:.18}),borderInfo:`1px solid ${Me(l,{alpha:.3})}`,textColorInfo:l,colorInfo:Me(l,{alpha:.12}),colorBorderedInfo:Me(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:Me(l,{alpha:.12}),closeColorPressedInfo:Me(l,{alpha:.18}),borderSuccess:`1px solid ${Me(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:Me(i,{alpha:.12}),colorBorderedSuccess:Me(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:Me(i,{alpha:.12}),closeColorPressedSuccess:Me(i,{alpha:.18}),borderWarning:`1px solid ${Me(a,{alpha:.35})}`,textColorWarning:a,colorWarning:Me(a,{alpha:.15}),colorBorderedWarning:Me(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:Me(a,{alpha:.12}),closeColorPressedWarning:Me(a,{alpha:.18}),borderError:`1px solid ${Me(s,{alpha:.23})}`,textColorError:s,colorError:Me(s,{alpha:.1}),colorBorderedError:Me(s,{alpha:.08}),closeIconColorError:s,closeIconColorHoverError:s,closeIconColorPressedError:s,closeColorHoverError:Me(s,{alpha:.12}),closeColorPressedError:Me(s,{alpha:.18})})},Ic={name:"Tag",common:Xn,self:Tc},Bc=Ic,Ac={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Fc=y("tag",`
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
`,[U("strong",`
 font-weight: var(--n-font-weight-strong);
 `),A("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),A("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),A("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),A("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[A("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),A("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),U("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),U("icon, avatar",[U("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),U("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),U("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Ne("disabled",[F("&:hover","background-color: var(--n-color-hover-checkable);",[Ne("checked","color: var(--n-text-color-hover-checkable);")]),F("&:active","background-color: var(--n-color-pressed-checkable);",[Ne("checked","color: var(--n-text-color-pressed-checkable);")])]),U("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Ne("disabled",[F("&:hover","background-color: var(--n-color-checked-hover);"),F("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Oc=Object.assign(Object.assign(Object.assign({},xe.props),Ac),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ec=et("n-tag"),Co=q({name:"Tag",props:Oc,setup(e){const t=D(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:l}=Ue(e),i=xe("Tag","-tag",Fc,Bc,e,o);Re(Ec,{roundRef:ae(e,"round")});function a(b){if(!e.disabled&&e.checkable){const{checked:v,onCheckedChange:m,onUpdateChecked:C,"onUpdate:checked":g}=e;C&&C(!v),g&&g(!v),m&&m(!v)}}function s(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:v}=e;v&&de(v,b)}}const c={setTextContent(b){const{value:v}=t;v&&(v.textContent=b)}},f=Ho("Tag",l,o),h=P(()=>{const{type:b,size:v,color:{color:m,textColor:C}={}}=e,{common:{cubicBezierEaseInOut:g},self:{padding:S,closeMargin:L,closeMarginRtl:$,borderRadius:_,opacityDisabled:B,textColorCheckable:T,textColorHoverCheckable:k,textColorPressedCheckable:O,textColorChecked:x,colorCheckable:I,colorHoverCheckable:z,colorPressedCheckable:G,colorChecked:H,colorCheckedHover:K,colorCheckedPressed:M,closeBorderRadius:J,fontWeightStrong:te,[ce("colorBordered",b)]:V,[ce("closeSize",v)]:Q,[ce("closeIconSize",v)]:le,[ce("fontSize",v)]:pe,[ce("height",v)]:ke,[ce("color",b)]:Ae,[ce("textColor",b)]:Oe,[ce("border",b)]:ve,[ce("closeIconColor",b)]:he,[ce("closeIconColorHover",b)]:$e,[ce("closeIconColorPressed",b)]:Be,[ce("closeColorHover",b)]:qe,[ce("closeColorPressed",b)]:Xe}}=i.value;return{"--n-font-weight-strong":te,"--n-avatar-size-override":`calc(${ke} - 8px)`,"--n-bezier":g,"--n-border-radius":_,"--n-border":ve,"--n-close-icon-size":le,"--n-close-color-pressed":Xe,"--n-close-color-hover":qe,"--n-close-border-radius":J,"--n-close-icon-color":he,"--n-close-icon-color-hover":$e,"--n-close-icon-color-pressed":Be,"--n-close-icon-color-disabled":he,"--n-close-margin":L,"--n-close-margin-rtl":$,"--n-close-size":Q,"--n-color":m||(n.value?V:Ae),"--n-color-checkable":I,"--n-color-checked":H,"--n-color-checked-hover":K,"--n-color-checked-pressed":M,"--n-color-hover-checkable":z,"--n-color-pressed-checkable":G,"--n-font-size":pe,"--n-height":ke,"--n-opacity-disabled":B,"--n-padding":S,"--n-text-color":C||Oe,"--n-text-color-checkable":T,"--n-text-color-checked":x,"--n-text-color-hover-checkable":k,"--n-text-color-pressed-checkable":O}}),u=r?Ze("tag",P(()=>{let b="";const{type:v,size:m,color:{color:C,textColor:g}={}}=e;return b+=v[0],b+=m[0],C&&(b+=`a${Cr(C)}`),g&&(b+=`b${Cr(g)}`),n.value&&(b+="c"),b}),h,e):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:f,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:a,handleCloseClick:s,cssVars:r?void 0:h,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:r,color:{borderColor:l}={},round:i,onRender:a,$slots:s}=this;a==null||a();const c=We(s.avatar,h=>h&&d("div",{class:`${n}-tag__avatar`},h)),f=We(s.icon,h=>h&&d("div",{class:`${n}-tag__icon`},h));return d("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:i,[`${n}-tag--avatar`]:c,[`${n}-tag--icon`]:f,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||c,d("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&r?d(Vo,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${n}-tag__border`,style:{borderColor:l}}):null)}}),Dc=F([y("base-selection",`
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
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),A("border, state-border",`
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
 `),A("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[A("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
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
 `,[A("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[A("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),y("base-selection-tags",`
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
 `),y("base-selection-label",`
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
 `,[y("base-selection-input",`
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
 `,[A("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),A("render-label",`
 color: var(--n-text-color);
 `)]),Ne("disabled",[F("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[A("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),A("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[A("input",`
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
 `),A("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[A("state-border",`border: var(--n-border-${e});`),Ne("disabled",[F("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[F("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[A("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Nc=q({name:"InternalSelection",props:Object.assign(Object.assign({},xe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=D(null),n=D(null),o=D(null),r=D(null),l=D(null),i=D(null),a=D(null),s=D(null),c=D(null),f=D(null),h=D(!1),u=D(!1),b=D(!1),v=xe("InternalSelection","-internal-selection",Dc,Xi,e,ae(e,"clsPrefix")),m=P(()=>e.clearable&&!e.disabled&&(b.value||e.active)),C=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ge(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),g=P(()=>{const N=e.selectedOption;if(N)return N[e.labelField]}),S=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function L(){var N;const{value:Z}=t;if(Z){const{value:re}=n;re&&(re.style.width=`${Z.offsetWidth}px`,e.maxTagCount!=="responsive"&&((N=c.value)===null||N===void 0||N.sync()))}}function $(){const{value:N}=f;N&&(N.style.display="none")}function _(){const{value:N}=f;N&&(N.style.display="inline-block")}Se(ae(e,"active"),N=>{N||$()}),Se(ae(e,"pattern"),()=>{e.multiple&&ht(L)});function B(N){const{onFocus:Z}=e;Z&&Z(N)}function T(N){const{onBlur:Z}=e;Z&&Z(N)}function k(N){const{onDeleteOption:Z}=e;Z&&Z(N)}function O(N){const{onClear:Z}=e;Z&&Z(N)}function x(N){const{onPatternInput:Z}=e;Z&&Z(N)}function I(N){var Z;(!N.relatedTarget||!(!((Z=o.value)===null||Z===void 0)&&Z.contains(N.relatedTarget)))&&B(N)}function z(N){var Z;!((Z=o.value)===null||Z===void 0)&&Z.contains(N.relatedTarget)||T(N)}function G(N){O(N)}function H(){b.value=!0}function K(){b.value=!1}function M(N){!e.active||!e.filterable||N.target!==n.value&&N.preventDefault()}function J(N){k(N)}function te(N){if(N.key==="Backspace"&&!V.value&&!e.pattern.length){const{selectedOptions:Z}=e;Z!=null&&Z.length&&J(Z[Z.length-1])}}const V=D(!1);let Q=null;function le(N){const{value:Z}=t;if(Z){const re=N.target.value;Z.textContent=re,L()}e.ignoreComposition&&V.value?Q=N:x(N)}function pe(){V.value=!0}function ke(){V.value=!1,e.ignoreComposition&&x(Q),Q=null}function Ae(N){var Z;u.value=!0,(Z=e.onPatternFocus)===null||Z===void 0||Z.call(e,N)}function Oe(N){var Z;u.value=!1,(Z=e.onPatternBlur)===null||Z===void 0||Z.call(e,N)}function ve(){var N,Z;if(e.filterable)u.value=!1,(N=i.value)===null||N===void 0||N.blur(),(Z=n.value)===null||Z===void 0||Z.blur();else if(e.multiple){const{value:re}=r;re==null||re.blur()}else{const{value:re}=l;re==null||re.blur()}}function he(){var N,Z,re;e.filterable?(u.value=!1,(N=i.value)===null||N===void 0||N.focus()):e.multiple?(Z=r.value)===null||Z===void 0||Z.focus():(re=l.value)===null||re===void 0||re.focus()}function $e(){const{value:N}=n;N&&(_(),N.focus())}function Be(){const{value:N}=n;N&&N.blur()}function qe(N){const{value:Z}=a;Z&&Z.setTextContent(`+${N}`)}function Xe(){const{value:N}=s;return N}function lt(){return n.value}let tt=null;function Je(){tt!==null&&window.clearTimeout(tt)}function He(){e.disabled||e.active||(Je(),tt=window.setTimeout(()=>{S.value&&(h.value=!0)},100))}function Y(){Je()}function R(N){N||(Je(),h.value=!1)}Se(S,N=>{N||(h.value=!1)}),rt(()=>{xt(()=>{const N=i.value;N&&(N.tabIndex=e.disabled||u.value?-1:0)})}),Pl(o,e.onResize);const{inlineThemeDisabled:w}=e,W=P(()=>{const{size:N}=e,{common:{cubicBezierEaseInOut:Z},self:{borderRadius:re,color:Pe,placeholderColor:Ce,textColor:je,paddingSingle:ft,paddingMultiple:Bt,caretColor:Wt,colorDisabled:Kt,textColorDisabled:Gt,placeholderColorDisabled:sn,colorActive:dn,boxShadowFocus:qt,boxShadowActive:vt,boxShadowHover:E,border:ne,borderFocus:ue,borderHover:we,borderActive:me,arrowColor:ye,arrowColorDisabled:ge,loadingColor:Ee,colorActiveWarning:Xt,boxShadowFocusWarning:cn,boxShadowActiveWarning:ao,boxShadowHoverWarning:so,borderWarning:co,borderFocusWarning:ii,borderHoverWarning:ai,borderActiveWarning:si,colorActiveError:di,boxShadowFocusError:ci,boxShadowActiveError:ui,boxShadowHoverError:fi,borderError:hi,borderFocusError:pi,borderHoverError:vi,borderActiveError:bi,clearColor:mi,clearColorHover:gi,clearColorPressed:xi,clearSize:yi,arrowSize:wi,[ce("height",N)]:_i,[ce("fontSize",N)]:Ci}}=v.value;return{"--n-bezier":Z,"--n-border":ne,"--n-border-active":me,"--n-border-focus":ue,"--n-border-hover":we,"--n-border-radius":re,"--n-box-shadow-active":vt,"--n-box-shadow-focus":qt,"--n-box-shadow-hover":E,"--n-caret-color":Wt,"--n-color":Pe,"--n-color-active":dn,"--n-color-disabled":Kt,"--n-font-size":Ci,"--n-height":_i,"--n-padding-single":ft,"--n-padding-multiple":Bt,"--n-placeholder-color":Ce,"--n-placeholder-color-disabled":sn,"--n-text-color":je,"--n-text-color-disabled":Gt,"--n-arrow-color":ye,"--n-arrow-color-disabled":ge,"--n-loading-color":Ee,"--n-color-active-warning":Xt,"--n-box-shadow-focus-warning":cn,"--n-box-shadow-active-warning":ao,"--n-box-shadow-hover-warning":so,"--n-border-warning":co,"--n-border-focus-warning":ii,"--n-border-hover-warning":ai,"--n-border-active-warning":si,"--n-color-active-error":di,"--n-box-shadow-focus-error":ci,"--n-box-shadow-active-error":ui,"--n-box-shadow-hover-error":fi,"--n-border-error":hi,"--n-border-focus-error":pi,"--n-border-hover-error":vi,"--n-border-active-error":bi,"--n-clear-size":yi,"--n-clear-color":mi,"--n-clear-color-hover":gi,"--n-clear-color-pressed":xi,"--n-arrow-size":wi}}),oe=w?Ze("internal-selection",P(()=>e.size[0]),W,e):void 0;return{mergedTheme:v,mergedClearable:m,patternInputFocused:u,filterablePlaceholder:C,label:g,selected:S,showTagsPanel:h,isComposing:V,counterRef:a,counterWrapperRef:s,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:r,singleElRef:l,patternInputWrapperRef:i,overflowRef:c,inputTagElRef:f,handleMouseDown:M,handleFocusin:I,handleClear:G,handleMouseEnter:H,handleMouseLeave:K,handleDeleteOption:J,handlePatternKeyDown:te,handlePatternInputInput:le,handlePatternInputBlur:Oe,handlePatternInputFocus:Ae,handleMouseEnterCounter:He,handleMouseLeaveCounter:Y,handleFocusout:z,handleCompositionEnd:ke,handleCompositionStart:pe,onPopoverUpdateShow:R,focus:he,focusInput:$e,blur:ve,blurInput:Be,updateCounter:qe,getCounter:Xe,getTail:lt,renderLabel:e.renderLabel,cssVars:w?void 0:W,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:r,maxTagCount:l,bordered:i,clsPrefix:a,onRender:s,renderTag:c,renderLabel:f}=this;s==null||s();const h=l==="responsive",u=typeof l=="number",b=h||u,v=d(Yi,null,{default:()=>d(Ua,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var C,g;return(g=(C=this.$slots).arrow)===null||g===void 0?void 0:g.call(C)}})});let m;if(t){const{labelField:C}=this,g=z=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:z.value},c?c({option:z,handleClose:()=>{this.handleDeleteOption(z)}}):d(Co,{size:n,closable:!z.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(z)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(z,!0):Ge(z[C],z,!0)})),S=()=>(u?this.selectedOptions.slice(0,l):this.selectedOptions).map(g),L=r?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,$=h?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Co,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let _;if(u){const z=this.selectedOptions.length-l;z>0&&(_=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(Co,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${z}`})))}const B=h?r?d(Nr,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:$,tail:()=>L}):d(Nr,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:$}):u?S().concat(_):S(),T=b?()=>d("div",{class:`${a}-base-selection-popover`},h?S():this.selectedOptions.map(g)):void 0,k=b?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,x=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,I=r?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},B,h?null:L,v):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},B,v);m=d(Te,null,b?d(tr,Object.assign({},k,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>I,default:T}):I,x)}else if(r){const C=this.pattern||this.isComposing,g=this.active?!C:!this.selected,S=this.active?!1:this.selected;m=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),S?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Ge(this.label,this.selectedOption,!0))):null,g?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else m=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:pd(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Ge(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},m,i?d("div",{class:`${a}-base-selection__border`}):null,i?d("div",{class:`${a}-base-selection__state-border`}):null)}});function jn(e){return e.type==="group"}function Fl(e){return e.type==="ignored"}function So(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Lc(e,t){return{getIsGroup:jn,getIgnored:Fl,getKey(o){return jn(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Hc(e,t,n,o){if(!t)return e;function r(l){if(!Array.isArray(l))return[];const i=[];for(const a of l)if(jn(a)){const s=r(a[o]);s.length&&i.push(Object.assign({},a,{[o]:s}))}else{if(Fl(a))continue;t(n,a)&&i.push(a)}return i}return r(e)}function Vc(e,t,n){const o=new Map;return e.forEach(r=>{jn(r)?r[n].forEach(l=>{o.set(l[t],l)}):o.set(r[t],r)}),o}const Uc=y("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[F(">",[y("input",[F("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),F("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),y("button",[F("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[A("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),F("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[A("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),F("*",[F("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[F(">",[y("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("base-selection",[y("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),A("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),F("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[F(">",[y("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y("base-selection",[y("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),A("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),jc={},Wc=q({name:"InputGroup",props:jc,setup(e){const{mergedClsPrefixRef:t}=Ue(e);return Zi("-input-group",Uc,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}}),Kc=e=>{const{popoverColor:t,textColor2:n,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},Ji),{color:t,textColor:n,iconColor:n,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},Gc={name:"BackTop",common:Xn,self:Kc},qc=Gc,Xc=d("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},d("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},d("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},d("g",{transform:"translate(120.000000, 4285.000000)"},d("g",{transform:"translate(7.000000, 126.000000)"},d("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},d("g",{transform:"translate(4.000000, 2.000000)"},d("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),d("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Yc=y("back-top",`
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
`,[$n(),U("transition-disabled",{transition:"none !important"}),y("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),F("svg",{pointerEvents:"none"}),F("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[y("base-icon",{color:"var(--n-icon-color-hover)"})]),F("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[y("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Zc=Object.assign(Object.assign({},xe.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),Jc=q({name:"BackTop",inheritAttrs:!1,props:Zc,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=D(null),r=D(!1);xt(()=>{const{value:$}=o;if($===null){r.value=!1;return}r.value=$>=e.visibilityHeight});const l=D(!1);Se(r,$=>{var _;l.value&&((_=e["onUpdate:show"])===null||_===void 0||_.call(e,$))});const i=ae(e,"show"),a=Qe(i,r),s=D(!0),c=D(null),f=P(()=>({right:`calc(${Mt(e.right)} + ${Qi.value})`,bottom:Mt(e.bottom)}));let h,u;Se(a,$=>{var _,B;l.value&&($&&((_=e.onShow)===null||_===void 0||_.call(e)),(B=e.onHide)===null||B===void 0||B.call(e))});const b=xe("BackTop","-back-top",Yc,qc,e,t);function v(){var $;if(u)return;u=!0;const _=(($=e.target)===null||$===void 0?void 0:$.call(e))||fd(e.listenTo)||_l(c.value);if(!_)return;h=_===document.documentElement?document:_;const{to:B}=e;typeof B=="string"&&document.querySelector(B),h.addEventListener("scroll",C),C()}function m(){(Lr(h)?document.documentElement:h).scrollTo({top:0,behavior:"smooth"})}function C(){o.value=(Lr(h)?document.documentElement:h).scrollTop,l.value||ht(()=>{l.value=!0})}function g(){s.value=!1}rt(()=>{v(),s.value=a.value}),pt(()=>{h&&h.removeEventListener("scroll",C)});const S=P(()=>{const{self:{color:$,boxShadow:_,boxShadowHover:B,boxShadowPressed:T,iconColor:k,iconColorHover:O,iconColorPressed:x,width:I,height:z,iconSize:G,borderRadius:H,textColor:K},common:{cubicBezierEaseInOut:M}}=b.value;return{"--n-bezier":M,"--n-border-radius":H,"--n-height":z,"--n-width":I,"--n-box-shadow":_,"--n-box-shadow-hover":B,"--n-box-shadow-pressed":T,"--n-color":$,"--n-icon-size":G,"--n-icon-color":k,"--n-icon-color-hover":O,"--n-icon-color-pressed":x,"--n-text-color":K}}),L=n?Ze("back-top",void 0,S,e):void 0;return{placeholderRef:c,style:f,mergedShow:a,isMounted:nn(),scrollElement:D(null),scrollTop:o,DomInfoReady:l,transitionDisabled:s,mergedClsPrefix:t,handleAfterEnter:g,handleScroll:C,handleClick:m,cssVars:n?void 0:S,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e}=this;return d("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},d(Lo,{to:this.to,show:this.mergedShow},{default:()=>d(It,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?d("div",gt(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),_n(this.$slots.default,()=>[d(Ht,{clsPrefix:e},{default:()=>Xc})])):null}})}))}}),Qc=y("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[F("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),F("a",`
 color: inherit;
 text-decoration: inherit;
 `),y("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[y("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),F("&:not(:last-child)",[U("clickable",[A("link",`
 cursor: pointer;
 `,[F("&:hover",`
 background-color: var(--n-item-color-hover);
 `),F("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),A("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[F("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[y("icon",`
 color: var(--n-item-text-color-hover);
 `)]),F("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[y("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),A("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),F("&:last-child",[A("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[y("icon",`
 color: var(--n-item-text-color-active);
 `)]),A("separator",`
 display: none;
 `)])])]),Ol=et("n-breadcrumb"),eu=Object.assign(Object.assign({},xe.props),{separator:{type:String,default:"/"}}),tu=q({name:"Breadcrumb",props:eu,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=xe("Breadcrumb","-breadcrumb",Qc,ea,e,t);Re(Ol,{separatorRef:ae(e,"separator"),mergedClsPrefixRef:t});const r=P(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:a,itemTextColor:s,itemTextColorHover:c,itemTextColorPressed:f,itemTextColorActive:h,fontSize:u,fontWeightActive:b,itemBorderRadius:v,itemColorHover:m,itemColorPressed:C,itemLineHeight:g}}=o.value;return{"--n-font-size":u,"--n-bezier":i,"--n-item-text-color":s,"--n-item-text-color-hover":c,"--n-item-text-color-pressed":f,"--n-item-text-color-active":h,"--n-separator-color":a,"--n-item-color-hover":m,"--n-item-color-pressed":C,"--n-item-border-radius":v,"--n-font-weight-active":b,"--n-item-line-height":g}}),l=n?Ze("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),nu=(e=ul?window:null)=>{const t=()=>{const{hash:r,host:l,hostname:i,href:a,origin:s,pathname:c,port:f,protocol:h,search:u}=(e==null?void 0:e.location)||{};return{hash:r,host:l,hostname:i,href:a,origin:s,pathname:c,port:f,protocol:h,search:u}},n=()=>{o.value=t()},o=D(t());return rt(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),cl(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),o},ou={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ru=q({name:"BreadcrumbItem",props:ou,setup(e,{slots:t}){const n=_e(Ol,null);if(!n)return()=>null;const{separatorRef:o,mergedClsPrefixRef:r}=n,l=nu(),i=P(()=>e.href?"a":"span"),a=P(()=>l.value.href===e.href?"location":null);return()=>{const{value:s}=r;return d("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},d(i.value,{class:`${s}-breadcrumb-item__link`,"aria-current":a.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},_n(t.separator,()=>{var c;return[(c=e.separator)!==null&&c!==void 0?c:o.value]})))}}});function lu(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Sn(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function iu(e){return e=Math.round(e),e>=360?359:e<0?0:e}function au(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const su={rgb:{hex(e){return Rt(bt(e))},hsl(e){const[t,n,o,r]=bt(e);return Pt([...Ao(t,n,o),r])},hsv(e){const[t,n,o,r]=bt(e);return Dt([...Bo(t,n,o),r])}},hex:{rgb(e){return _t(bt(e))},hsl(e){const[t,n,o,r]=bt(e);return Pt([...Ao(t,n,o),r])},hsv(e){const[t,n,o,r]=bt(e);return Dt([...Bo(t,n,o),r])}},hsl:{hex(e){const[t,n,o,r]=Jt(e);return Rt([...Fo(t,n,o),r])},rgb(e){const[t,n,o,r]=Jt(e);return _t([...Fo(t,n,o),r])},hsv(e){const[t,n,o,r]=Jt(e);return Dt([...Cl(t,n,o),r])}},hsv:{hex(e){const[t,n,o,r]=Nt(e);return Rt([...$t(t,n,o),r])},rgb(e){const[t,n,o,r]=Nt(e);return _t([...$t(t,n,o),r])},hsl(e){const[t,n,o,r]=Nt(e);return Pt([...Dn(t,n,o),r])}}};function El(e,t,n){return n=n||Sn(e),n?n===t?e:su[n][t](e):null}const Zt="12px",du=12,At="6px",cu=6,uu="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",fu=q({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function n(l){t.value&&(Ve("mousemove",document,o),Ve("mouseup",document,r),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:a,left:s}=i.getBoundingClientRect(),c=iu((l.clientX-s-cu)/(a-du)*360);e.onUpdateHue(c)}function r(){var l;Ke("mousemove",document,o),Ke("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:Zt,borderRadius:At}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:uu,height:Zt,borderRadius:At,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:At,right:At,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${At})`,borderRadius:At,width:Zt,height:Zt}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:At,width:Zt,height:Zt}})))))}}),hn="12px",hu=12,Ft="6px",pu=q({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function n(l){!t.value||!e.rgba||(Ve("mousemove",document,o),Ve("mouseup",document,r),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:a,left:s}=i.getBoundingClientRect(),c=(l.clientX-s)/(a-hu);e.onUpdateAlpha(au(c))}function r(){var l;Ke("mousemove",document,o),Ke("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:P(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:hn,borderRadius:Ft},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:Ft,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:Ft,right:Ft,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ft})`,borderRadius:Ft,width:hn,height:hn}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:_t(this.rgba),borderRadius:Ft,width:hn,height:hn}}))))}}),Bn="12px",An="6px",vu=q({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function n(l){t.value&&(Ve("mousemove",document,o),Ve("mouseup",document,r),o(l))}function o(l){const{value:i}=t;if(!i)return;const{width:a,height:s,left:c,bottom:f}=i.getBoundingClientRect(),h=(f-l.clientY)/s,u=(l.clientX-c)/a,b=100*(u>1?1:u<0?0:u),v=100*(h>1?1:h<0?0:h);e.onUpdateSV(b,v)}function r(){var l;Ke("mousemove",document,o),Ke("mouseup",document,r),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:P(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Bn,height:Bn,borderRadius:An,left:`calc(${this.displayedSv[0]}% - ${An})`,bottom:`calc(${this.displayedSv[1]}% - ${An})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:An,width:Bn,height:Bn}})))}}),nr=et("n-color-picker");function bu(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function mu(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function gu(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function xu(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function yu(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const wu={paddingSmall:"0 4px"},Wr=q({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=D(""),{themeRef:n}=_e(nr,null);xt(()=>{t.value=o()});function o(){const{value:i}=e;if(i===null)return"";const{label:a}=e;return a==="HEX"?i:a==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function r(i){t.value=i}function l(i){let a,s;switch(e.label){case"HEX":s=xu(i),s&&e.onUpdateValue(i),t.value=o();break;case"H":a=mu(i),a===!1?t.value=o():e.onUpdateValue(a);break;case"S":case"L":case"V":a=gu(i),a===!1?t.value=o():e.onUpdateValue(a);break;case"A":a=yu(i),a===!1?t.value=o():e.onUpdateValue(a);break;case"R":case"G":case"B":a=bu(i),a===!1?t.value=o():e.onUpdateValue(a);break}}return{mergedTheme:n,inputValue:t,handleInputChange:l,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return d(ml,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:wu,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),_u=q({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Rt:mn)(n));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=n,e.onUpdateValue((o?Dt:To)(r));break;case"rgb":r[t]=n,e.onUpdateValue((o?_t:Mo)(r));break;case"hsl":r[t]=n,e.onUpdateValue((o?Pt:Po)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(Wc,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:r}=this;if(n==="hex"){let l=null;try{l=o===null?null:(r?Rt:mn)(o)}catch{}return d(Wr,{label:"HEX",showAlpha:r,value:l,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(n+(r?"a":"")).split("").map((l,i)=>d(Wr,{label:l.toUpperCase(),value:o===null?null:o[i],onUpdateValue:a=>{this.handleUnitUpdateValue(i,a)}}))}}))}}),Cu=q({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=_e(nr,null);return()=>{const{hsla:o,value:r,clsPrefix:l,onClick:i,disabled:a}=e,s=t.label||n.value;return d("div",{class:[`${l}-color-picker-trigger`,a&&`${l}-color-picker-trigger--disabled`],onClick:a?void 0:i},d("div",{class:`${l}-color-picker-trigger__fill`},d("div",{class:`${l}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?Pt(o):""}}),r&&o?d("div",{class:`${l}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},s?s(r):r):null))}}});function Su(e,t){if(t==="hsv"){const[n,o,r,l]=Nt(e);return _t([...$t(n,o,r),l])}return e}function ku(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const $u=q({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=P(()=>e.swatches.map(l=>{const i=Sn(l);return{value:l,mode:i,legalValue:Su(l,i)}}));function n(l){const{mode:i}=e;let{value:a,mode:s}=l;return s||(s="hex",/^[a-zA-Z]+$/.test(a)?a=ku(a):(Uo("color-picker",`color ${a} in swatches is invalid.`),a="#000000")),s===i?a:El(a,i,s)}function o(l){e.onUpdateColor(n(l))}function r(l,i){l.key==="Enter"&&o(i)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:n=>{this.handleSwatchKeyDown(n,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),zu=q({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Sn(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const r=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,El(r.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ru=F([y("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),y("color-picker-panel",`
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
 `,[$n(),y("input",`
 text-align: center;
 `)]),y("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[F("&::after",`
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
 `)]),y("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[A("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),F("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),y("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[A("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),y("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[A("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[U("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),y("color-picker-preview",`
 display: flex;
 `,[A("sliders",`
 flex: 1 0 auto;
 `),A("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),A("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),A("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),y("color-picker-input",`
 display: flex;
 align-items: center;
 `,[y("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),A("mode",`
 width: 72px;
 text-align: center;
 `)]),y("color-picker-control",`
 padding: 12px;
 `),y("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[y("button","margin-left: 8px;")]),y("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[A("value",`
 white-space: nowrap;
 position: relative;
 `),A("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),U("disabled","cursor: not-allowed"),y("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[F("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),y("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[y("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[A("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),F("&:focus",`
 outline: none;
 `,[A("fill",[F("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Pu=Object.assign(Object.assign({},xe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:ct.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Mu=q({name:"ColorPicker",props:Pu,setup(e,{slots:t}){const n=D(null);let o=null;const r=Yn(e),{mergedSizeRef:l,mergedDisabledRef:i}=r,{localeRef:a}=Jn("global"),{mergedClsPrefixRef:s,namespaceRef:c,inlineThemeDisabled:f}=Ue(e),h=xe("ColorPicker","-color-picker",Ru,ta,e,s);Re(nr,{themeRef:h,renderLabelRef:ae(e,"renderLabel"),colorPickerSlots:t});const u=D(e.defaultShow),b=Qe(ae(e,"show"),u);function v(w){const{onUpdateShow:W,"onUpdate:show":oe}=e;W&&de(W,w),oe&&de(oe,w),u.value=w}const{defaultValue:m}=e,C=D(m===void 0?lu(e.modes,e.showAlpha):m),g=Qe(ae(e,"value"),C),S=D([g.value]),L=D(0),$=P(()=>Sn(g.value)),{modes:_}=e,B=D(Sn(g.value)||_[0]||"rgb");function T(){const{modes:w}=e,{value:W}=B,oe=w.findIndex(N=>N===W);~oe?B.value=w[(oe+1)%w.length]:B.value="rgb"}let k,O,x,I,z,G,H,K;const M=P(()=>{const{value:w}=g;if(!w)return null;switch($.value){case"hsv":return Nt(w);case"hsl":return[k,O,x,K]=Jt(w),[...Cl(k,O,x),K];case"rgb":case"hex":return[z,G,H,K]=bt(w),[...Bo(z,G,H),K]}}),J=P(()=>{const{value:w}=g;if(!w)return null;switch($.value){case"rgb":case"hex":return bt(w);case"hsv":return[k,O,I,K]=Nt(w),[...$t(k,O,I),K];case"hsl":return[k,O,x,K]=Jt(w),[...Fo(k,O,x),K]}}),te=P(()=>{const{value:w}=g;if(!w)return null;switch($.value){case"hsl":return Jt(w);case"hsv":return[k,O,I,K]=Nt(w),[...Dn(k,O,I),K];case"rgb":case"hex":return[z,G,H,K]=bt(w),[...Ao(z,G,H),K]}}),V=P(()=>{switch(B.value){case"rgb":case"hex":return J.value;case"hsv":return M.value;case"hsl":return te.value}}),Q=D(0),le=D(1),pe=D([0,0]);function ke(w,W){const{value:oe}=M,N=Q.value,Z=oe?oe[3]:1;pe.value=[w,W];const{showAlpha:re}=e;switch(B.value){case"hsv":ve((re?Dt:To)([N,w,W,Z]),"cursor");break;case"hsl":ve((re?Pt:Po)([...Dn(N,w,W),Z]),"cursor");break;case"rgb":ve((re?_t:Mo)([...$t(N,w,W),Z]),"cursor");break;case"hex":ve((re?Rt:mn)([...$t(N,w,W),Z]),"cursor");break}}function Ae(w){Q.value=w;const{value:W}=M;if(!W)return;const[,oe,N,Z]=W,{showAlpha:re}=e;switch(B.value){case"hsv":ve((re?Dt:To)([w,oe,N,Z]),"cursor");break;case"rgb":ve((re?_t:Mo)([...$t(w,oe,N),Z]),"cursor");break;case"hex":ve((re?Rt:mn)([...$t(w,oe,N),Z]),"cursor");break;case"hsl":ve((re?Pt:Po)([...Dn(w,oe,N),Z]),"cursor");break}}function Oe(w){switch(B.value){case"hsv":[k,O,I]=M.value,ve(Dt([k,O,I,w]),"cursor");break;case"rgb":[z,G,H]=J.value,ve(_t([z,G,H,w]),"cursor");break;case"hex":[z,G,H]=J.value,ve(Rt([z,G,H,w]),"cursor");break;case"hsl":[k,O,x]=te.value,ve(Pt([k,O,x,w]),"cursor");break}le.value=w}function ve(w,W){W==="cursor"?o=w:o=null;const{nTriggerFormChange:oe,nTriggerFormInput:N}=r,{onUpdateValue:Z,"onUpdate:value":re}=e;Z&&de(Z,w),re&&de(re,w),oe(),N(),C.value=w}function he(w){ve(w,"input"),ht($e)}function $e(w=!0){const{value:W}=g;if(W){const{nTriggerFormChange:oe,nTriggerFormInput:N}=r,{onComplete:Z}=e;Z&&Z(W);const{value:re}=S,{value:Pe}=L;w&&(re.splice(Pe+1,re.length,W),L.value=Pe+1),oe(),N()}}function Be(){const{value:w}=L;w-1<0||(ve(S.value[w-1],"input"),$e(!1),L.value=w-1)}function qe(){const{value:w}=L;w<0||w+1>=S.value.length||(ve(S.value[w+1],"input"),$e(!1),L.value=w+1)}function Xe(){ve(null,"input"),v(!1)}function lt(){const{value:w}=g,{onConfirm:W}=e;W&&W(w),v(!1)}const tt=P(()=>L.value>=1),Je=P(()=>{const{value:w}=S;return w.length>1&&L.value<w.length-1});Se(b,w=>{w||(S.value=[g.value],L.value=0)}),xt(()=>{if(!(o&&o===g.value)){const{value:w}=M;w&&(Q.value=w[0],le.value=w[3],pe.value=[w[1],w[2]])}o=null});const He=P(()=>{const{value:w}=l,{common:{cubicBezierEaseInOut:W},self:{textColor:oe,color:N,panelFontSize:Z,boxShadow:re,border:Pe,borderRadius:Ce,dividerColor:je,[ce("height",w)]:ft,[ce("fontSize",w)]:Bt}}=h.value;return{"--n-bezier":W,"--n-text-color":oe,"--n-color":N,"--n-panel-font-size":Z,"--n-font-size":Bt,"--n-box-shadow":re,"--n-border":Pe,"--n-border-radius":Ce,"--n-height":ft,"--n-divider-color":je}}),Y=f?Ze("color-picker",P(()=>l.value[0]),He,e):void 0;function R(){var w;const{value:W}=J,{value:oe}=Q,{internalActions:N,modes:Z,actions:re}=e,{value:Pe}=h,{value:Ce}=s;return d("div",{class:[`${Ce}-color-picker-panel`,Y==null?void 0:Y.themeClass.value],onDragstart:je=>{je.preventDefault()},style:f?void 0:He.value},d("div",{class:`${Ce}-color-picker-control`},d(vu,{clsPrefix:Ce,rgba:W,displayedHue:oe,displayedSv:pe.value,onUpdateSV:ke,onComplete:$e}),d("div",{class:`${Ce}-color-picker-preview`},d("div",{class:`${Ce}-color-picker-preview__sliders`},d(fu,{clsPrefix:Ce,hue:oe,onUpdateHue:Ae,onComplete:$e}),e.showAlpha?d(pu,{clsPrefix:Ce,rgba:W,alpha:le.value,onUpdateAlpha:Oe,onComplete:$e}):null),e.showPreview?d(zu,{clsPrefix:Ce,mode:B.value,color:J.value&&mn(J.value),onUpdateColor:je=>{ve(je,"input")}}):null),d(_u,{clsPrefix:Ce,showAlpha:e.showAlpha,mode:B.value,modes:Z,onUpdateMode:T,value:g.value,valueArr:V.value,onUpdateValue:he}),((w=e.swatches)===null||w===void 0?void 0:w.length)&&d($u,{clsPrefix:Ce,mode:B.value,swatches:e.swatches,onUpdateColor:je=>{ve(je,"input")}})),re!=null&&re.length?d("div",{class:`${Ce}-color-picker-action`},re.includes("confirm")&&d(zt,{size:"small",onClick:lt,theme:Pe.peers.Button,themeOverrides:Pe.peerOverrides.Button},{default:()=>a.value.confirm}),re.includes("clear")&&d(zt,{size:"small",onClick:Xe,disabled:!g.value,theme:Pe.peers.Button,themeOverrides:Pe.peerOverrides.Button},{default:()=>a.value.clear})):null,t.action?d("div",{class:`${Ce}-color-picker-action`},{default:t.action}):N?d("div",{class:`${Ce}-color-picker-action`},N.includes("undo")&&d(zt,{size:"small",onClick:Be,disabled:!tt.value,theme:Pe.peers.Button,themeOverrides:Pe.peerOverrides.Button},{default:()=>a.value.undo}),N.includes("redo")&&d(zt,{size:"small",onClick:qe,disabled:!Je.value,theme:Pe.peers.Button,themeOverrides:Pe.peerOverrides.Button},{default:()=>a.value.redo})):null)}return{mergedClsPrefix:s,namespace:c,selfRef:n,hsla:te,rgba:J,mergedShow:b,mergedDisabled:i,isMounted:nn(),adjustedTo:ct(e),mergedValue:g,handleTriggerClick(){v(!0)},handleClickOutside(w){var W;!((W=n.value)===null||W===void 0)&&W.contains(Nn(w))||v(!1)},renderPanel:R,cssVars:f?void 0:He,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Qn,null,{default:()=>[d(eo,null,{default:()=>d(Cu,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(no,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===ct.tdkey,to:this.adjustedTo},{default:()=>d(It,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?dt(this.renderPanel(),[[en,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Tu=F([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[$n({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Iu=Object.assign(Object.assign({},xe.props),{to:ct.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Dl=q({name:"Select",props:Iu,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:r}=Ue(e),l=xe("Select","-select",Tu,na,e,t),i=D(e.defaultValue),a=ae(e,"value"),s=Qe(a,i),c=D(!1),f=D(""),h=P(()=>{const{valueField:E,childrenField:ne}=e,ue=Lc(E,ne);return er(z.value,ue)}),u=P(()=>Vc(x.value,e.valueField,e.childrenField)),b=D(!1),v=Qe(ae(e,"show"),b),m=D(null),C=D(null),g=D(null),{localeRef:S}=Jn("Select"),L=P(()=>{var E;return(E=e.placeholder)!==null&&E!==void 0?E:S.value.placeholder}),$=Cn(e,["items","options"]),_=[],B=D([]),T=D([]),k=D(new Map),O=P(()=>{const{fallbackOption:E}=e;if(E===void 0){const{labelField:ne,valueField:ue}=e;return we=>({[ne]:String(we),[ue]:we})}return E===!1?!1:ne=>Object.assign(E(ne),{value:ne})}),x=P(()=>T.value.concat(B.value).concat($.value)),I=P(()=>{const{filter:E}=e;if(E)return E;const{labelField:ne,valueField:ue}=e;return(we,me)=>{if(!me)return!1;const ye=me[ne];if(typeof ye=="string")return So(we,ye);const ge=me[ue];return typeof ge=="string"?So(we,ge):typeof ge=="number"?So(we,String(ge)):!1}}),z=P(()=>{if(e.remote)return $.value;{const{value:E}=x,{value:ne}=f;return!ne.length||!e.filterable?E:Hc(E,I.value,ne,e.childrenField)}});function G(E){const ne=e.remote,{value:ue}=k,{value:we}=u,{value:me}=O,ye=[];return E.forEach(ge=>{if(we.has(ge))ye.push(we.get(ge));else if(ne&&ue.has(ge))ye.push(ue.get(ge));else if(me){const Ee=me(ge);Ee&&ye.push(Ee)}}),ye}const H=P(()=>{if(e.multiple){const{value:E}=s;return Array.isArray(E)?G(E):[]}return null}),K=P(()=>{const{value:E}=s;return!e.multiple&&!Array.isArray(E)?E===null?null:G([E])[0]||null:null}),M=Yn(e),{mergedSizeRef:J,mergedDisabledRef:te,mergedStatusRef:V}=M;function Q(E,ne){const{onChange:ue,"onUpdate:value":we,onUpdateValue:me}=e,{nTriggerFormChange:ye,nTriggerFormInput:ge}=M;ue&&de(ue,E,ne),me&&de(me,E,ne),we&&de(we,E,ne),i.value=E,ye(),ge()}function le(E){const{onBlur:ne}=e,{nTriggerFormBlur:ue}=M;ne&&de(ne,E),ue()}function pe(){const{onClear:E}=e;E&&de(E)}function ke(E){const{onFocus:ne,showOnFocus:ue}=e,{nTriggerFormFocus:we}=M;ne&&de(ne,E),we(),ue&&$e()}function Ae(E){const{onSearch:ne}=e;ne&&de(ne,E)}function Oe(E){const{onScroll:ne}=e;ne&&de(ne,E)}function ve(){var E;const{remote:ne,multiple:ue}=e;if(ne){const{value:we}=k;if(ue){const{valueField:me}=e;(E=H.value)===null||E===void 0||E.forEach(ye=>{we.set(ye[me],ye)})}else{const me=K.value;me&&we.set(me[e.valueField],me)}}}function he(E){const{onUpdateShow:ne,"onUpdate:show":ue}=e;ne&&de(ne,E),ue&&de(ue,E),b.value=E}function $e(){te.value||(he(!0),b.value=!0,e.filterable&&Gt())}function Be(){he(!1)}function qe(){f.value="",T.value=_}const Xe=D(!1);function lt(){e.filterable&&(Xe.value=!0)}function tt(){e.filterable&&(Xe.value=!1,v.value||qe())}function Je(){te.value||(v.value?e.filterable?Gt():Be():$e())}function He(E){var ne,ue;!((ue=(ne=g.value)===null||ne===void 0?void 0:ne.selfRef)===null||ue===void 0)&&ue.contains(E.relatedTarget)||(c.value=!1,le(E),Be())}function Y(E){ke(E),c.value=!0}function R(E){c.value=!0}function w(E){var ne;!((ne=m.value)===null||ne===void 0)&&ne.$el.contains(E.relatedTarget)||(c.value=!1,le(E),Be())}function W(){var E;(E=m.value)===null||E===void 0||E.focus(),Be()}function oe(E){var ne;v.value&&(!((ne=m.value)===null||ne===void 0)&&ne.$el.contains(Nn(E))||Be())}function N(E){if(!Array.isArray(E))return[];if(O.value)return Array.from(E);{const{remote:ne}=e,{value:ue}=u;if(ne){const{value:we}=k;return E.filter(me=>ue.has(me)||we.has(me))}else return E.filter(we=>ue.has(we))}}function Z(E){re(E.rawNode)}function re(E){if(te.value)return;const{tag:ne,remote:ue,clearFilterAfterSelect:we,valueField:me}=e;if(ne&&!ue){const{value:ye}=T,ge=ye[0]||null;if(ge){const Ee=B.value;Ee.length?Ee.push(ge):B.value=[ge],T.value=_}}if(ue&&k.value.set(E[me],E),e.multiple){const ye=N(s.value),ge=ye.findIndex(Ee=>Ee===E[me]);if(~ge){if(ye.splice(ge,1),ne&&!ue){const Ee=Pe(E[me]);~Ee&&(B.value.splice(Ee,1),we&&(f.value=""))}}else ye.push(E[me]),we&&(f.value="");Q(ye,G(ye))}else{if(ne&&!ue){const ye=Pe(E[me]);~ye?B.value=[B.value[ye]]:B.value=_}Kt(),Be(),Q(E[me],E)}}function Pe(E){return B.value.findIndex(ue=>ue[e.valueField]===E)}function Ce(E){v.value||$e();const{value:ne}=E.target;f.value=ne;const{tag:ue,remote:we}=e;if(Ae(ne),ue&&!we){if(!ne){T.value=_;return}const{onCreate:me}=e,ye=me?me(ne):{[e.labelField]:ne,[e.valueField]:ne},{valueField:ge}=e;$.value.some(Ee=>Ee[ge]===ye[ge])||B.value.some(Ee=>Ee[ge]===ye[ge])?T.value=_:T.value=[ye]}}function je(E){E.stopPropagation();const{multiple:ne}=e;!ne&&e.filterable&&Be(),pe(),ne?Q([],[]):Q(null,null)}function ft(E){!tn(E,"action")&&!tn(E,"empty")&&E.preventDefault()}function Bt(E){Oe(E)}function Wt(E){var ne,ue,we,me,ye;if(!e.keyboard){E.preventDefault();return}switch(E.key){case" ":if(e.filterable)break;E.preventDefault();case"Enter":if(!(!((ne=m.value)===null||ne===void 0)&&ne.isComposing)){if(v.value){const ge=(ue=g.value)===null||ue===void 0?void 0:ue.getPendingTmNode();ge?Z(ge):e.filterable||(Be(),Kt())}else if($e(),e.tag&&Xe.value){const ge=T.value[0];if(ge){const Ee=ge[e.valueField],{value:Xt}=s;e.multiple&&Array.isArray(Xt)&&Xt.some(cn=>cn===Ee)||re(ge)}}}E.preventDefault();break;case"ArrowUp":if(E.preventDefault(),e.loading)return;v.value&&((we=g.value)===null||we===void 0||we.prev());break;case"ArrowDown":if(E.preventDefault(),e.loading)return;v.value?(me=g.value)===null||me===void 0||me.next():$e();break;case"Escape":v.value&&(oa(E),Be()),(ye=m.value)===null||ye===void 0||ye.focus();break}}function Kt(){var E;(E=m.value)===null||E===void 0||E.focus()}function Gt(){var E;(E=m.value)===null||E===void 0||E.focusInput()}function sn(){var E;v.value&&((E=C.value)===null||E===void 0||E.syncPosition())}ve(),Se(ae(e,"options"),ve);const dn={focus:()=>{var E;(E=m.value)===null||E===void 0||E.focus()},blur:()=>{var E;(E=m.value)===null||E===void 0||E.blur()}},qt=P(()=>{const{self:{menuBoxShadow:E}}=l.value;return{"--n-menu-box-shadow":E}}),vt=r?Ze("select",void 0,qt,e):void 0;return Object.assign(Object.assign({},dn),{mergedStatus:V,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:h,isMounted:nn(),triggerRef:m,menuRef:g,pattern:f,uncontrolledShow:b,mergedShow:v,adjustedTo:ct(e),uncontrolledValue:i,mergedValue:s,followerRef:C,localizedPlaceholder:L,selectedOption:K,selectedOptions:H,mergedSize:J,mergedDisabled:te,focused:c,activeWithoutMenuOpen:Xe,inlineThemeDisabled:r,onTriggerInputFocus:lt,onTriggerInputBlur:tt,handleTriggerOrMenuResize:sn,handleMenuFocus:R,handleMenuBlur:w,handleMenuTabOut:W,handleTriggerClick:Je,handleToggle:Z,handleDeleteOption:re,handlePatternInput:Ce,handleClear:je,handleTriggerBlur:He,handleTriggerFocus:Y,handleKeydown:Wt,handleMenuAfterLeave:qe,handleMenuClickOutside:oe,handleMenuScroll:Bt,handleMenuKeydown:Wt,handleMenuMousedown:ft,mergedTheme:l,cssVars:r?void 0:qt,themeClass:vt==null?void 0:vt.themeClass,onRender:vt==null?void 0:vt.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Qn,null,{default:()=>[d(eo,null,{default:()=>d(Nc,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),d(no,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ct.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(It,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),dt(d(Sc,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[Tt,this.mergedShow],[en,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[en,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Bu=Object.assign(Object.assign({},oo),xe.props),or=q({name:"Tooltip",props:Bu,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=Ue(e),n=xe("Tooltip","-tooltip",void 0,ra,e,t),o=D(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(l){o.value.setShow(l)}}),{popoverRef:o,mergedTheme:n,popoverThemeOverrides:P(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return d(tr,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Nl=q({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Au=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[U("color-transition",{transition:"color .3s var(--n-bezier)"}),U("depth",{color:"var(--n-color)"},[F("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),F("svg",{height:"1em",width:"1em"})]),Fu=Object.assign(Object.assign({},xe.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Ou=q({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Fu,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=xe("Icon","-icon",Au,la,e,t),r=P(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:a},self:s}=o.value;if(i!==void 0){const{color:c,[`opacity${i}Depth`]:f}=s;return{"--n-bezier":a,"--n-color":c,"--n-opacity":f}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),l=n?Ze("icon",P(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:P(()=>{const{size:i,color:a}=e;return{fontSize:Mt(i),color:a}}),cssVars:n?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:o,component:r,onRender:l,themeClass:i}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Uo("icon","don't wrap `n-icon` inside `n-icon`"),l==null||l(),d("i",gt(this.$attrs,{role:"img",class:[`${o}-icon`,i,{[`${o}-icon--depth`]:n,[`${o}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?d(r):this.$slots)}}),rr=et("n-dropdown-menu"),ro=et("n-dropdown"),Kr=et("n-dropdown-option");function Eo(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Eu(e){return e.type==="group"}function Ll(e){return e.type==="divider"}function Du(e){return e.type==="render"}const Hl=q({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=_e(ro),{hoverKeyRef:n,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:l,activeKeyPathRef:i,animatedRef:a,mergedShowRef:s,renderLabelRef:c,renderIconRef:f,labelFieldRef:h,childrenFieldRef:u,renderOptionRef:b,nodePropsRef:v,menuPropsRef:m}=t,C=_e(Kr,null),g=_e(rr),S=_e(kn),L=P(()=>e.tmNode.rawNode),$=P(()=>{const{value:J}=u;return Eo(e.tmNode.rawNode,J)}),_=P(()=>{const{disabled:J}=e.tmNode;return J}),B=P(()=>{if(!$.value)return!1;const{key:J,disabled:te}=e.tmNode;if(te)return!1;const{value:V}=n,{value:Q}=o,{value:le}=r,{value:pe}=l;return V!==null?pe.includes(J):Q!==null?pe.includes(J)&&pe[pe.length-1]!==J:le!==null?pe.includes(J):!1}),T=P(()=>o.value===null&&!a.value),k=gd(B,300,T),O=P(()=>!!(C!=null&&C.enteringSubmenuRef.value)),x=D(!1);Re(Kr,{enteringSubmenuRef:x});function I(){x.value=!0}function z(){x.value=!1}function G(){const{parentKey:J,tmNode:te}=e;te.disabled||s.value&&(r.value=J,o.value=null,n.value=te.key)}function H(){const{tmNode:J}=e;J.disabled||s.value&&n.value!==J.key&&G()}function K(J){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:te}=J;te&&!tn({target:te},"dropdownOption")&&!tn({target:te},"scrollbarRail")&&(n.value=null)}function M(){const{value:J}=$,{tmNode:te}=e;s.value&&!J&&!te.disabled&&(t.doSelect(te.key,te.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:f,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:m,popoverBody:S,animated:a,mergedShowSubmenu:P(()=>k.value&&!O.value),rawNode:L,hasSubmenu:$,pending:ze(()=>{const{value:J}=l,{key:te}=e.tmNode;return J.includes(te)}),childActive:ze(()=>{const{value:J}=i,{key:te}=e.tmNode,V=J.findIndex(Q=>te===Q);return V===-1?!1:V<J.length-1}),active:ze(()=>{const{value:J}=i,{key:te}=e.tmNode,V=J.findIndex(Q=>te===Q);return V===-1?!1:V===J.length-1}),mergedDisabled:_,renderOption:b,nodeProps:v,handleClick:M,handleMouseMove:H,handleMouseEnter:G,handleMouseLeave:K,handleSubmenuBeforeEnter:I,handleSubmenuAfterEnter:z}},render(){var e,t;const{animated:n,rawNode:o,mergedShowSubmenu:r,clsPrefix:l,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:s,renderIcon:c,renderOption:f,nodeProps:h,props:u,scrollable:b}=this;let v=null;if(r){const S=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);v=d(Vl,Object.assign({},S,{clsPrefix:l,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const m={class:[`${l}-dropdown-option-body`,this.pending&&`${l}-dropdown-option-body--pending`,this.active&&`${l}-dropdown-option-body--active`,this.childActive&&`${l}-dropdown-option-body--child-active`,this.mergedDisabled&&`${l}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},C=h==null?void 0:h(o),g=d("div",Object.assign({class:[`${l}-dropdown-option`,C==null?void 0:C.class],"data-dropdown-option":!0},C),d("div",gt(m,u),[d("div",{class:[`${l}-dropdown-option-body__prefix`,i&&`${l}-dropdown-option-body__prefix--show-icon`]},[c?c(o):Ge(o.icon)]),d("div",{"data-dropdown-option":!0,class:`${l}-dropdown-option-body__label`},s?s(o):Ge((t=o[this.labelField])!==null&&t!==void 0?t:o.title)),d("div",{"data-dropdown-option":!0,class:[`${l}-dropdown-option-body__suffix`,a&&`${l}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Ou,null,{default:()=>d(jd,null)}):null)]),this.hasSubmenu?d(Qn,null,{default:()=>[d(eo,null,{default:()=>d("div",{class:`${l}-dropdown-offset-container`},d(no,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>d("div",{class:`${l}-dropdown-menu-wrapper`},n?d(It,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>v}):v)}))})]}):null);return f?f({node:g,option:o}):g}}),Nu=q({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=_e(rr),{renderLabelRef:n,labelFieldRef:o,nodePropsRef:r,renderOptionRef:l}=_e(ro);return{labelField:o,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:r,renderOption:l}},render(){var e;const{clsPrefix:t,hasSubmenu:n,showIcon:o,nodeProps:r,renderLabel:l,renderOption:i}=this,{rawNode:a}=this.tmNode,s=d("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(a)),d("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,o&&`${t}-dropdown-option-body__prefix--show-icon`]},Ge(a.icon)),d("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},l?l(a):Ge((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${t}-dropdown-option-body__suffix`,n&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:s,option:a}):s}}),Lu=q({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:o}=e;return d(Te,null,d(Nu,{clsPrefix:n,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:l}=r;return l.show===!1?null:Ll(l)?d(Nl,{clsPrefix:n,key:r.key}):r.isGroup?(Uo("dropdown","`group` node is not allowed to be put in `group` node."),null):d(Hl,{clsPrefix:n,tmNode:r,parentKey:t,key:r.key})}))}}),Hu=q({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return d("div",t,[e==null?void 0:e()])}}),Vl=q({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:n}=_e(ro);Re(rr,{showIconRef:P(()=>{const r=t.value;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:a}=l;return r?r(a):a.icon})}),hasSubmenuRef:P(()=>{const{value:r}=n;return e.tmNodes.some(l=>{var i;if(l.isGroup)return(i=l.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>Eo(s,r));const{rawNode:a}=l;return Eo(a,r)})})});const o=D(null);return Re(Wn,null),Re(Kn,null),Re(kn,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:t,scrollable:n}=this,o=this.tmNodes.map(r=>{const{rawNode:l}=r;return l.show===!1?null:Du(l)?d(Hu,{tmNode:r,key:r.key}):Ll(l)?d(Nl,{clsPrefix:t,key:r.key}):Eu(l)?d(Lu,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):d(Hl,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:l.props,scrollable:n})});return d("div",{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},n?d(dl,{contentClass:`${t}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Al({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Vu=y("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[$n(),y("dropdown-option",`
 position: relative;
 `,[F("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[F("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[F("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Ne("disabled",[U("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),F("&::before","background-color: var(--n-option-color-hover);")]),U("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),F("&::before","background-color: var(--n-option-color-active);")]),U("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),U("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[U("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[U("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),y("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
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
 `,[U("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),y("icon",`
 font-size: var(--n-option-icon-size);
 `)]),y("dropdown-menu","pointer-events: all;")]),y("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),y("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),y("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),F(">",[y("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Ne("scrollable",`
 padding: var(--n-padding);
 `),U("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),Uu={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ju=Object.keys(oo),Wu=Object.assign(Object.assign(Object.assign({},oo),Uu),xe.props),lo=q({name:"Dropdown",inheritAttrs:!1,props:Wu,setup(e){const t=D(!1),n=Qe(ae(e,"show"),t),o=P(()=>{const{keyField:z,childrenField:G}=e;return er(e.options,{getKey(H){return H[z]},getDisabled(H){return H.disabled===!0},getIgnored(H){return H.type==="divider"||H.type==="render"},getChildren(H){return H[G]}})}),r=P(()=>o.value.treeNodes),l=D(null),i=D(null),a=D(null),s=P(()=>{var z,G,H;return(H=(G=(z=l.value)!==null&&z!==void 0?z:i.value)!==null&&G!==void 0?G:a.value)!==null&&H!==void 0?H:null}),c=P(()=>o.value.getPath(s.value).keyPath),f=P(()=>o.value.getPath(e.value).keyPath),h=ze(()=>e.keyboard&&n.value);Cd({keydown:{ArrowUp:{prevent:!0,handler:_},ArrowRight:{prevent:!0,handler:$},ArrowDown:{prevent:!0,handler:B},ArrowLeft:{prevent:!0,handler:L},Enter:{prevent:!0,handler:T},Escape:S}},h);const{mergedClsPrefixRef:u,inlineThemeDisabled:b}=Ue(e),v=xe("Dropdown","-dropdown",Vu,ia,e,u);Re(ro,{labelFieldRef:ae(e,"labelField"),childrenFieldRef:ae(e,"childrenField"),renderLabelRef:ae(e,"renderLabel"),renderIconRef:ae(e,"renderIcon"),hoverKeyRef:l,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:c,activeKeyPathRef:f,animatedRef:ae(e,"animated"),mergedShowRef:n,nodePropsRef:ae(e,"nodeProps"),renderOptionRef:ae(e,"renderOption"),menuPropsRef:ae(e,"menuProps"),doSelect:m,doUpdateShow:C}),Se(n,z=>{!e.animated&&!z&&g()});function m(z,G){const{onSelect:H}=e;H&&de(H,z,G)}function C(z){const{"onUpdate:show":G,onUpdateShow:H}=e;G&&de(G,z),H&&de(H,z),t.value=z}function g(){l.value=null,i.value=null,a.value=null}function S(){C(!1)}function L(){O("left")}function $(){O("right")}function _(){O("up")}function B(){O("down")}function T(){const z=k();z!=null&&z.isLeaf&&n.value&&(m(z.key,z.rawNode),C(!1))}function k(){var z;const{value:G}=o,{value:H}=s;return!G||H===null?null:(z=G.getNode(H))!==null&&z!==void 0?z:null}function O(z){const{value:G}=s,{value:{getFirstAvailableNode:H}}=o;let K=null;if(G===null){const M=H();M!==null&&(K=M.key)}else{const M=k();if(M){let J;switch(z){case"down":J=M.getNext();break;case"up":J=M.getPrev();break;case"right":J=M.getChild();break;case"left":J=M.getParent();break}J&&(K=J.key)}}K!==null&&(l.value=null,i.value=K)}const x=P(()=>{const{size:z,inverted:G}=e,{common:{cubicBezierEaseInOut:H},self:K}=v.value,{padding:M,dividerColor:J,borderRadius:te,optionOpacityDisabled:V,[ce("optionIconSuffixWidth",z)]:Q,[ce("optionSuffixWidth",z)]:le,[ce("optionIconPrefixWidth",z)]:pe,[ce("optionPrefixWidth",z)]:ke,[ce("fontSize",z)]:Ae,[ce("optionHeight",z)]:Oe,[ce("optionIconSize",z)]:ve}=K,he={"--n-bezier":H,"--n-font-size":Ae,"--n-padding":M,"--n-border-radius":te,"--n-option-height":Oe,"--n-option-prefix-width":ke,"--n-option-icon-prefix-width":pe,"--n-option-suffix-width":le,"--n-option-icon-suffix-width":Q,"--n-option-icon-size":ve,"--n-divider-color":J,"--n-option-opacity-disabled":V};return G?(he["--n-color"]=K.colorInverted,he["--n-option-color-hover"]=K.optionColorHoverInverted,he["--n-option-color-active"]=K.optionColorActiveInverted,he["--n-option-text-color"]=K.optionTextColorInverted,he["--n-option-text-color-hover"]=K.optionTextColorHoverInverted,he["--n-option-text-color-active"]=K.optionTextColorActiveInverted,he["--n-option-text-color-child-active"]=K.optionTextColorChildActiveInverted,he["--n-prefix-color"]=K.prefixColorInverted,he["--n-suffix-color"]=K.suffixColorInverted,he["--n-group-header-text-color"]=K.groupHeaderTextColorInverted):(he["--n-color"]=K.color,he["--n-option-color-hover"]=K.optionColorHover,he["--n-option-color-active"]=K.optionColorActive,he["--n-option-text-color"]=K.optionTextColor,he["--n-option-text-color-hover"]=K.optionTextColorHover,he["--n-option-text-color-active"]=K.optionTextColorActive,he["--n-option-text-color-child-active"]=K.optionTextColorChildActive,he["--n-prefix-color"]=K.prefixColor,he["--n-suffix-color"]=K.suffixColor,he["--n-group-header-text-color"]=K.groupHeaderTextColor),he}),I=b?Ze("dropdown",P(()=>`${e.size[0]}${e.inverted?"i":""}`),x,e):void 0;return{mergedClsPrefix:u,mergedTheme:v,tmNodes:r,mergedShow:n,handleAfterLeave:()=>{e.animated&&g()},doUpdateShow:C,cssVars:b?void 0:x,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const e=(o,r,l,i,a)=>{var s;const{mergedClsPrefix:c,menuProps:f}=this;(s=this.onRender)===null||s===void 0||s.call(this);const h=(f==null?void 0:f(void 0,this.tmNodes.map(b=>b.rawNode)))||{},u={ref:vd(r),class:[o,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[l,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return d(Vl,gt(this.$attrs,u,h))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(tr,Object.assign({},bn(this.$props,ju),n),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),Ku=q({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=D(!!e.show),n=D(null),o=_e(jo);let r=0,l="",i=null;const a=D(!1),s=D(!1),c=P(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:f,mergedRtlRef:h}=Ue(e),u=Ho("Drawer",h,f),b=T=>{s.value=!0,r=c.value?T.clientY:T.clientX,l=document.body.style.cursor,document.body.style.cursor=c.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",S),document.body.addEventListener("mouseleave",$),document.body.addEventListener("mouseup",L)},v=()=>{i!==null&&(window.clearTimeout(i),i=null),s.value?a.value=!0:i=window.setTimeout(()=>{a.value=!0},300)},m=()=>{i!==null&&(window.clearTimeout(i),i=null),a.value=!1},{doUpdateHeight:C,doUpdateWidth:g}=o,S=T=>{var k,O;if(s.value)if(c.value){let x=((k=n.value)===null||k===void 0?void 0:k.offsetHeight)||0;const I=r-T.clientY;x+=e.placement==="bottom"?I:-I,C(x),r=T.clientY}else{let x=((O=n.value)===null||O===void 0?void 0:O.offsetWidth)||0;const I=r-T.clientX;x+=e.placement==="right"?I:-I,g(x),r=T.clientX}},L=()=>{s.value&&(r=0,s.value=!1,document.body.style.cursor=l,document.body.removeEventListener("mousemove",S),document.body.removeEventListener("mouseup",L),document.body.removeEventListener("mouseleave",$))},$=L;xt(()=>{e.show&&(t.value=!0)}),Se(()=>e.show,T=>{T||L()}),pt(()=>{L()});const _=P(()=>{const{show:T}=e,k=[[Tt,T]];return e.showMask||k.push([en,e.onClickoutside,void 0,{capture:!0}]),k});function B(){var T;t.value=!1,(T=e.onAfterLeave)===null||T===void 0||T.call(e)}return aa(P(()=>e.blockScroll&&t.value)),Re(Kn,n),Re(kn,null),Re(Wn,null),{bodyRef:n,rtlEnabled:u,mergedClsPrefix:o.mergedClsPrefixRef,isMounted:o.isMountedRef,mergedTheme:o.mergedThemeRef,displayed:t,transitionName:P(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:B,bodyDirectives:_,handleMousedownResizeTrigger:b,handleMouseenterResizeTrigger:v,handleMouseleaveResizeTrigger:m,isDragging:s,isHoverOnResizeTrigger:a}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?dt(d("div",{role:"none"},d(sl,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(It,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>dt(d("div",gt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?d("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(qn,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Tt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Gu,cubicBezierEaseOut:qu}=Zn;function Xu({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-right"}={}){return[F(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Gu}`}),F(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${qu}`}),F(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),F(`&.${n}-transition-enter-from`,{transform:"translateX(100%)"}),F(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),F(`&.${n}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Yu,cubicBezierEaseOut:Zu}=Zn;function Ju({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-left"}={}){return[F(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Yu}`}),F(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Zu}`}),F(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),F(`&.${n}-transition-enter-from`,{transform:"translateX(-100%)"}),F(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),F(`&.${n}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Qu,cubicBezierEaseOut:ef}=Zn;function tf({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-top"}={}){return[F(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Qu}`}),F(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ef}`}),F(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),F(`&.${n}-transition-enter-from`,{transform:"translateY(-100%)"}),F(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),F(`&.${n}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:nf,cubicBezierEaseOut:of}=Zn;function rf({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-bottom"}={}){return[F(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${nf}`}),F(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${of}`}),F(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),F(`&.${n}-transition-enter-from`,{transform:"translateY(100%)"}),F(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),F(`&.${n}-transition-leave-to`,{transform:"translateY(100%)"})]}const lf=F([y("drawer",`
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
 `,[Xu(),Ju(),tf(),rf(),U("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),U("native-scrollbar",[y("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),A("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[U("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),y("drawer-content-wrapper",`
 box-sizing: border-box;
 `),y("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[U("native-scrollbar",[y("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),y("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),y("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),y("drawer-header",`
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
 `,[A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),U("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),U("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[A("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),U("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),U("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),F("body",[F(">",[y("drawer-container",{position:"fixed"})])]),y("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[F("> *",{pointerEvents:"all"})]),y("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[U("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),sa({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),af=Object.assign(Object.assign({},xe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),sf=q({name:"Drawer",inheritAttrs:!1,props:af,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:o}=Ue(e),r=nn(),l=xe("Drawer","-drawer",lf,da,e,t),i=D(e.defaultWidth),a=D(e.defaultHeight),s=Qe(ae(e,"width"),i),c=Qe(ae(e,"height"),a),f=P(()=>{const{placement:_}=e;return _==="top"||_==="bottom"?"":Mt(s.value)}),h=P(()=>{const{placement:_}=e;return _==="left"||_==="right"?"":Mt(c.value)}),u=_=>{const{onUpdateWidth:B,"onUpdate:width":T}=e;B&&de(B,_),T&&de(T,_),i.value=_},b=_=>{const{onUpdateHeight:B,"onUpdate:width":T}=e;B&&de(B,_),T&&de(T,_),a.value=_},v=P(()=>[{width:f.value,height:h.value},e.drawerStyle||""]);function m(_){const{onMaskClick:B,maskClosable:T}=e;T&&S(!1),B&&B(_)}const C=ca();function g(_){var B;(B=e.onEsc)===null||B===void 0||B.call(e),e.show&&e.closeOnEsc&&ua(_)&&!C.value&&S(!1)}function S(_){const{onHide:B,onUpdateShow:T,"onUpdate:show":k}=e;T&&de(T,_),k&&de(k,_),B&&!_&&de(B,_)}Re(jo,{isMountedRef:r,mergedThemeRef:l,mergedClsPrefixRef:t,doUpdateShow:S,doUpdateHeight:b,doUpdateWidth:u});const L=P(()=>{const{common:{cubicBezierEaseInOut:_,cubicBezierEaseIn:B,cubicBezierEaseOut:T},self:{color:k,textColor:O,boxShadow:x,lineHeight:I,headerPadding:z,footerPadding:G,bodyPadding:H,titleFontSize:K,titleTextColor:M,titleFontWeight:J,headerBorderBottom:te,footerBorderTop:V,closeIconColor:Q,closeIconColorHover:le,closeIconColorPressed:pe,closeColorHover:ke,closeColorPressed:Ae,closeIconSize:Oe,closeSize:ve,closeBorderRadius:he,resizableTriggerColorHover:$e}}=l.value;return{"--n-line-height":I,"--n-color":k,"--n-text-color":O,"--n-box-shadow":x,"--n-bezier":_,"--n-bezier-out":T,"--n-bezier-in":B,"--n-header-padding":z,"--n-body-padding":H,"--n-footer-padding":G,"--n-title-text-color":M,"--n-title-font-size":K,"--n-title-font-weight":J,"--n-header-border-bottom":te,"--n-footer-border-top":V,"--n-close-icon-color":Q,"--n-close-icon-color-hover":le,"--n-close-icon-color-pressed":pe,"--n-close-size":ve,"--n-close-color-hover":ke,"--n-close-color-pressed":Ae,"--n-close-icon-size":Oe,"--n-close-border-radius":he,"--n-resize-trigger-color-hover":$e}}),$=o?Ze("drawer",void 0,L,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:v,handleMaskClick:m,handleEsc:g,mergedTheme:l,cssVars:o?void 0:L,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return d(Lo,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),dt(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?d(It,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,d(Ku,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[No,{zIndex:this.zIndex,enabled:this.show}]])}})}}),df={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},cf=q({name:"DrawerContent",props:df,setup(){const e=_e(jo,null);e||fl("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:o,bodyStyle:r,bodyContentStyle:l,headerStyle:i,footerStyle:a,scrollbarProps:s,closable:c,$slots:f}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},f.header||e||c?d("div",{class:`${t}-drawer-header`,style:i,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},f.header!==void 0?f.header():e),c&&d(Vo,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?d("div",{class:`${t}-drawer-body`,style:r,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:l,role:"none"},f)):d(qn,Object.assign({themeOverrides:o.peerOverrides.Scrollbar,theme:o.peers.Scrollbar},s,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:l}),f),f.footer?d("div",{class:`${t}-drawer-footer`,style:a,role:"none"},f.footer()):null)}}),Gr=1,Ul=et("n-grid"),jl=1,uf={span:{type:[Number,String],default:jl},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Wl=q({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:uf,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:o,layoutShiftDisabledRef:r}=_e(Ul),l=il();return{overflow:o,itemStyle:n,layoutShiftDisabled:r,mergedXGap:P(()=>nt(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=jl,privateShow:a=!0,privateColStart:s=void 0,privateOffset:c=0}=l.vnode.props,{value:f}=t,h=nt(f||0);return{display:a?"":"none",gridColumn:`${s??`span ${i}`} / span ${i}`,marginLeft:c?`calc((100% - (${i} - 1) * ${h}) / ${i} * ${c} + ${h} * ${c})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:n,offset:o,mergedXGap:r}=this;return d("div",{style:{gridColumn:`span ${n} / span ${n}`,marginLeft:o?`calc((100% - (${n} - 1) * ${r}) / ${n} * ${o} + ${r} * ${o})`:""}},this.$slots)}return d("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),ff={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Kl=24,ko="__ssr__",hf={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Kl},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Gl=q({name:"Grid",inheritAttrs:!1,props:hf,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=Ue(e),o=/^\d+$/,r=D(void 0),l=_d((n==null?void 0:n.value)||ff),i=ze(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),a=P(()=>{if(i.value)return e.responsive==="self"?r.value:l.value}),s=ze(()=>{var g;return(g=Number(un(e.cols.toString(),a.value)))!==null&&g!==void 0?g:Kl}),c=ze(()=>un(e.xGap.toString(),a.value)),f=ze(()=>un(e.yGap.toString(),a.value)),h=g=>{r.value=g.contentRect.width},u=g=>{Zo(h,g)},b=D(!1),v=P(()=>{if(e.responsive==="self")return u}),m=D(!1),C=D();return rt(()=>{const{value:g}=C;g&&g.hasAttribute(ko)&&(g.removeAttribute(ko),m.value=!0)}),Re(Ul,{layoutShiftDisabledRef:ae(e,"layoutShiftDisabled"),isSsrRef:m,itemStyleRef:ae(e,"itemStyle"),xGapRef:c,overflowRef:b}),{isSsr:!ul,contentEl:C,mergedClsPrefix:t,style:P(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:nt(e.xGap),rowGap:nt(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${s.value}, minmax(0, 1fr))`,columnGap:nt(c.value),rowGap:nt(f.value)}),isResponsive:i,responsiveQuery:a,responsiveCols:s,handleResize:v,overflow:b}},render(){if(this.layoutShiftDisabled)return d("div",gt({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,n,o,r,l,i,a;this.overflow=!1;const s=En(Ja(this)),c=[],{collapsed:f,collapsedRows:h,responsiveCols:u,responsiveQuery:b}=this;s.forEach(S=>{var L,$,_,B;if(((L=S==null?void 0:S.type)===null||L===void 0?void 0:L.__GRID_ITEM__)!==!0)return;if(bd(S)){const O=Ln(S);O.props?O.props.privateShow=!1:O.props={privateShow:!1},c.push({child:O,rawChildSpan:0});return}S.dirs=(($=S.dirs)===null||$===void 0?void 0:$.filter(({dir:O})=>O!==Tt))||null;const T=Ln(S),k=Number((B=un((_=T.props)===null||_===void 0?void 0:_.span,b))!==null&&B!==void 0?B:Gr);k!==0&&c.push({child:T,rawChildSpan:k})});let v=0;const m=(t=c[c.length-1])===null||t===void 0?void 0:t.child;if(m!=null&&m.props){const S=(n=m.props)===null||n===void 0?void 0:n.suffix;S!==void 0&&S!==!1&&(v=(r=(o=m.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:Gr,m.props.privateSpan=v,m.props.privateColStart=u+1-v,m.props.privateShow=(l=m.props.privateShow)!==null&&l!==void 0?l:!0)}let C=0,g=!1;for(const{child:S,rawChildSpan:L}of c){if(g&&(this.overflow=!0),!g){const $=Number((a=un((i=S.props)===null||i===void 0?void 0:i.offset,b))!==null&&a!==void 0?a:0),_=Math.min(L+$,u);if(S.props?(S.props.privateSpan=_,S.props.privateOffset=$):S.props={privateSpan:_,privateOffset:$},f){const B=C%u;_+B>u&&(C+=u-B),_+C+v>h*u?g=!0:C+=_}}g&&(S.props?S.props.privateShow!==!0&&(S.props.privateShow=!1):S.props={privateShow:!1})}return d("div",gt({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[ko]:this.isSsr||void 0},this.$attrs),c.map(({child:S})=>S))};return this.isResponsive&&this.responsive==="self"?d(wn,{onResize:this.handleResize},{default:e}):e()}}),pf=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},vf=fa({name:"InputNumber",common:Xn,peers:{Button:ha,Input:pa},self:pf}),bf=vf,mf=e=>{const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:r}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},va),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:l,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${Me(t,{alpha:.2})}`})},gf={name:"Switch",common:Xn,self:mf},xf=gf;function yf(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function wf(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function $o(e){return e==null?!0:!Number.isNaN(e)}function qr(e,t){return e==null?"":t===void 0?String(e):e.toFixed(t)}function zo(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const _f=F([y("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),y("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),Xr=800,Yr=100,Cf=Object.assign(Object.assign({},xe.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Sf=q({name:"InputNumber",props:Cf,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:o}=Ue(e),r=xe("InputNumber","-input-number",_f,bf,e,n),{localeRef:l}=Jn("InputNumber"),i=Yn(e),{mergedSizeRef:a,mergedDisabledRef:s,mergedStatusRef:c}=i,f=D(null),h=D(null),u=D(null),b=D(e.defaultValue),v=ae(e,"value"),m=Qe(v,b),C=D(""),g=R=>{const w=String(R).split(".")[1];return w?w.length:0},S=R=>{const w=[e.min,e.max,e.step,R].map(W=>W===void 0?0:g(W));return Math.max(...w)},L=ze(()=>{const{placeholder:R}=e;return R!==void 0?R:l.value.placeholder}),$=ze(()=>{const R=zo(e.step);return R!==null?R===0?1:Math.abs(R):1}),_=ze(()=>{const R=zo(e.min);return R!==null?R:null}),B=ze(()=>{const R=zo(e.max);return R!==null?R:null}),T=R=>{const{value:w}=m;if(R===w){O();return}const{"onUpdate:value":W,onUpdateValue:oe,onChange:N}=e,{nTriggerFormInput:Z,nTriggerFormChange:re}=i;N&&de(N,R),oe&&de(oe,R),W&&de(W,R),b.value=R,Z(),re()},k=({offset:R,doUpdateIfValid:w,fixPrecision:W,isInputing:oe})=>{const{value:N}=C;if(oe&&wf(N))return!1;const Z=(e.parse||yf)(N);if(Z===null)return w&&T(null),null;if($o(Z)){const re=g(Z),{precision:Pe}=e;if(Pe!==void 0&&Pe<re&&!W)return!1;let Ce=parseFloat((Z+R).toFixed(Pe??S(Z)));if($o(Ce)){const{value:je}=B,{value:ft}=_;if(je!==null&&Ce>je){if(!w||oe)return!1;Ce=je}if(ft!==null&&Ce<ft){if(!w||oe)return!1;Ce=ft}return e.validator&&!e.validator(Ce)?!1:(w&&T(Ce),Ce)}}return!1},O=()=>{const{value:R}=m;if($o(R)){const{format:w,precision:W}=e;w?C.value=w(R):R===null||W===void 0||g(R)>W?C.value=qr(R,void 0):C.value=qr(R,W)}else C.value=String(R)};O();const x=ze(()=>k({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),I=ze(()=>{const{value:R}=m;if(e.validator&&R===null)return!1;const{value:w}=$;return k({offset:-w,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),z=ze(()=>{const{value:R}=m;if(e.validator&&R===null)return!1;const{value:w}=$;return k({offset:+w,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function G(R){const{onFocus:w}=e,{nTriggerFormFocus:W}=i;w&&de(w,R),W()}function H(R){var w,W;if(R.target===((w=f.value)===null||w===void 0?void 0:w.wrapperElRef))return;const oe=k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(oe!==!1){const re=(W=f.value)===null||W===void 0?void 0:W.inputElRef;re&&(re.value=String(oe||"")),m.value===oe&&O()}else O();const{onBlur:N}=e,{nTriggerFormBlur:Z}=i;N&&de(N,R),Z(),ht(()=>{O()})}function K(R){const{onClear:w}=e;w&&de(w,R)}function M(){const{value:R}=z;if(!R){he();return}const{value:w}=m;if(w===null)e.validator||T(Q());else{const{value:W}=$;k({offset:W,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function J(){const{value:R}=I;if(!R){ve();return}const{value:w}=m;if(w===null)e.validator||T(Q());else{const{value:W}=$;k({offset:-W,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const te=G,V=H;function Q(){if(e.validator)return null;const{value:R}=_,{value:w}=B;return R!==null?Math.max(0,R):w!==null?Math.min(0,w):0}function le(R){K(R),T(null)}function pe(R){var w,W,oe;!((w=u.value)===null||w===void 0)&&w.$el.contains(R.target)&&R.preventDefault(),!((W=h.value)===null||W===void 0)&&W.$el.contains(R.target)&&R.preventDefault(),(oe=f.value)===null||oe===void 0||oe.activate()}let ke=null,Ae=null,Oe=null;function ve(){Oe&&(window.clearTimeout(Oe),Oe=null),ke&&(window.clearInterval(ke),ke=null)}function he(){Be&&(window.clearTimeout(Be),Be=null),Ae&&(window.clearInterval(Ae),Ae=null)}function $e(){ve(),Oe=window.setTimeout(()=>{ke=window.setInterval(()=>{J()},Yr)},Xr),Ve("mouseup",document,ve,{once:!0})}let Be=null;function qe(){he(),Be=window.setTimeout(()=>{Ae=window.setInterval(()=>{M()},Yr)},Xr),Ve("mouseup",document,he,{once:!0})}const Xe=()=>{Ae||M()},lt=()=>{ke||J()};function tt(R){var w,W;if(R.key==="Enter"){if(R.target===((w=f.value)===null||w===void 0?void 0:w.wrapperElRef))return;k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((W=f.value)===null||W===void 0||W.deactivate())}else if(R.key==="ArrowUp"){if(!z.value||e.keyboard.ArrowUp===!1)return;R.preventDefault(),k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&M()}else if(R.key==="ArrowDown"){if(!I.value||e.keyboard.ArrowDown===!1)return;R.preventDefault(),k({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&J()}}function Je(R){C.value=R,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&k({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Se(m,()=>{O()});const He={focus:()=>{var R;return(R=f.value)===null||R===void 0?void 0:R.focus()},blur:()=>{var R;return(R=f.value)===null||R===void 0?void 0:R.blur()}},Y=Ho("InputNumber",o,n);return Object.assign(Object.assign({},He),{rtlEnabled:Y,inputInstRef:f,minusButtonInstRef:h,addButtonInstRef:u,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:b,mergedValue:m,mergedPlaceholder:L,displayedValueInvalid:x,mergedSize:a,mergedDisabled:s,displayedValue:C,addable:z,minusable:I,mergedStatus:c,handleFocus:te,handleBlur:V,handleClear:le,handleMouseDown:pe,handleAddClick:Xe,handleMinusClick:lt,handleAddMousedown:qe,handleMinusMousedown:$e,handleKeyDown:tt,handleUpdateDisplayedValue:Je,mergedTheme:r,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:P(()=>{const{self:{iconColorDisabled:R}}=r.value,[w,W,oe,N]=bt(R);return{textColorTextDisabled:`rgb(${w}, ${W}, ${oe})`,opacityDisabled:`${N}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,n=()=>d(Sr,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>_n(t["minus-icon"],()=>[d(Ht,{clsPrefix:e},{default:()=>d(Kd,null)})])}),o=()=>d(Sr,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>_n(t["add-icon"],()=>[d(Ht,{clsPrefix:e},{default:()=>d(Ml,null)})])});return d("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},d(ml,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var r;return this.showButton&&this.buttonPlacement==="both"?[n(),We(t.prefix,l=>l?d("span",{class:`${e}-input-number-prefix`},l):null)]:(r=t.prefix)===null||r===void 0?void 0:r.call(t)},suffix:()=>{var r;return this.showButton?[We(t.suffix,l=>l?d("span",{class:`${e}-input-number-suffix`},l):null),this.buttonPlacement==="right"?n():null,o()]:(r=t.suffix)===null||r===void 0?void 0:r.call(t)}}))}}),kf=et("n-layout-sider"),Pn=et("n-menu"),lr=et("n-submenu"),ir=et("n-menu-item-group"),Fn=8;function ar(e){const t=_e(Pn),{props:n,mergedCollapsedRef:o}=t,r=_e(lr,null),l=_e(ir,null),i=P(()=>n.mode==="horizontal"),a=P(()=>i.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=P(()=>{var u;return Math.max((u=n.collapsedIconSize)!==null&&u!==void 0?u:n.iconSize,n.iconSize)}),c=P(()=>{var u;return!i.value&&e.root&&o.value&&(u=n.collapsedIconSize)!==null&&u!==void 0?u:n.iconSize}),f=P(()=>{if(i.value)return;const{collapsedWidth:u,indent:b,rootIndent:v}=n,{root:m,isGroup:C}=e,g=v===void 0?b:v;if(m)return o.value?u/2-s.value/2:g;if(l)return b/2+l.paddingLeftRef.value;if(r)return(C?b/2:b)+r.paddingLeftRef.value}),h=P(()=>{const{collapsedWidth:u,indent:b,rootIndent:v}=n,{value:m}=s,{root:C}=e;return i.value||!C||!o.value?Fn:(v===void 0?b:v)+m+Fn-(u+m)/2});return{dropdownPlacement:a,activeIconSize:c,maxIconSize:s,paddingLeft:f,iconMarginRight:h,NMenu:t,NSubmenu:r}}const sr={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ql=Object.assign(Object.assign({},sr),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),$f=q({name:"MenuOptionGroup",props:ql,setup(e){Re(lr,null);const t=ar(e);Re(ir,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:n,props:o}=_e(Pn);return function(){const{value:r}=n,l=t.paddingLeft.value,{nodeProps:i}=o,a=i==null?void 0:i(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),Ge(e.title),e.extra?d(Te,null," ",Ge(e.extra)):null),d("div",null,e.tmNodes.map(s=>dr(s,o))))}}}),Xl=q({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=_e(Pn);return{menuProps:t,style:P(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:P(()=>{const{maxIconSize:n,activeIconSize:o,iconMarginRight:r}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${o}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:o,renderExtra:r,expandIcon:l}}=this,i=n?n(t.rawNode):Ge(this.icon);return d("div",{onClick:a=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},o?o(t.rawNode):Ge(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):Ge(this.extra)):null),this.showArrow?d(Ht,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):d(Gd,null)}):null)}}),Yl=Object.assign(Object.assign({},sr),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),zf=q({name:"Submenu",props:Yl,setup(e){const t=ar(e),{NMenu:n,NSubmenu:o}=t,{props:r,mergedCollapsedRef:l,mergedThemeRef:i}=n,a=P(()=>{const{disabled:u}=e;return o!=null&&o.mergedDisabledRef.value||r.disabled?!0:u}),s=D(!1);Re(lr,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),Re(ir,null);function c(){const{onClick:u}=e;u&&u()}function f(){a.value||(l.value||n.toggleExpand(e.internalKey),c())}function h(u){s.value=u}return{menuProps:r,mergedTheme:i,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:n.mergedValueRef,childActive:ze(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:P(()=>r.mode==="horizontal"?!1:l.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:P(()=>!a.value&&(r.mode==="horizontal"||l.value)),handlePopoverShowChange:h,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:o}}=this,r=()=>{const{isHorizontal:i,paddingLeft:a,collapsed:s,mergedDisabled:c,maxIconSize:f,activeIconSize:h,title:u,childActive:b,icon:v,handleClick:m,menuProps:{nodeProps:C},dropdownShow:g,iconMarginRight:S,tmNode:L,mergedClsPrefix:$}=this,_=C==null?void 0:C(L.rawNode);return d("div",Object.assign({},_,{class:[`${$}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),d(Xl,{tmNode:L,paddingLeft:a,collapsed:s,disabled:c,iconMarginRight:S,maxIconSize:f,activeIconSize:h,title:u,extra:this.extra,showArrow:!i,childActive:b,clsPrefix:$,icon:v,hover:g,onClick:m}))},l=()=>d(ba,null,{default:()=>{const{tmNodes:i,collapsed:a}=this;return a?null:d("div",{class:`${t}-submenu-children`,role:"menu"},i.map(s=>dr(s,this.menuProps)))}});return this.root?d(lo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:o}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:l())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),l())}}),Zl=Object.assign(Object.assign({},sr),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Rf=q({name:"MenuOption",props:Zl,setup(e){const t=ar(e),{NSubmenu:n,NMenu:o}=t,{props:r,mergedClsPrefixRef:l,mergedCollapsedRef:i}=o,a=n?n.mergedDisabledRef:{value:!1},s=P(()=>a.value||e.disabled);function c(h){const{onClick:u}=e;u&&u(h)}function f(h){s.value||(o.doSelect(e.internalKey,e.tmNode.rawNode),c(h))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:o.mergedThemeRef,menuProps:r,dropdownEnabled:ze(()=>e.root&&i.value&&r.mode!=="horizontal"&&!s.value),selected:ze(()=>o.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:o,nodeProps:r}}=this,l=r==null?void 0:r(n.rawNode);return d("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),d(or,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>o?o(n.rawNode):Ge(this.title),trigger:()=>d(Xl,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Pf=q({name:"MenuDivider",setup(){const e=_e(Pn),{mergedClsPrefixRef:t,isHorizontalRef:n}=e;return()=>n.value?null:d("div",{class:`${t.value}-menu-divider`})}}),Mf=Wo(ql),Tf=Wo(Zl),If=Wo(Yl);function Jl(e){return e.type==="divider"||e.type==="render"}function Bf(e){return e.type==="divider"}function dr(e,t){const{rawNode:n}=e,{show:o}=n;if(o===!1)return null;if(Jl(n))return Bf(n)?d(Pf,Object.assign({key:e.key},n.props)):null;const{labelField:r}=t,{key:l,level:i,isGroup:a}=e,s=Object.assign(Object.assign({},n),{title:n.title||n[r],extra:n.titleExtra||n.extra,key:l,internalKey:l,level:i,root:i===0,isGroup:a});return e.children?e.isGroup?d($f,bn(s,Mf,{tmNode:e,tmNodes:e.children,key:l})):d(zf,bn(s,If,{key:l,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):d(Rf,bn(s,Tf,{key:l,tmNode:e}))}const Zr=[F("&::before","background-color: var(--n-item-color-hover);"),A("arrow",`
 color: var(--n-arrow-color-hover);
 `),A("icon",`
 color: var(--n-item-icon-color-hover);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[F("a",`
 color: var(--n-item-text-color-hover);
 `),A("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Jr=[A("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[F("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),A("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Af=F([y("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[U("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[y("submenu","margin: 0;"),y("menu-item","margin: 0;"),y("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[F("&::before","display: none;"),U("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),y("menu-item-content",[U("selected",[A("icon","color: var(--n-item-icon-color-active-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[F("a","color: var(--n-item-text-color-active-horizontal);"),A("extra","color: var(--n-item-text-color-active-horizontal);")])]),U("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[F("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),A("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),A("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Ne("disabled",[Ne("selected, child-active",[F("&:focus-within",Jr)]),U("selected",[Ot(null,[A("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[F("a","color: var(--n-item-text-color-active-hover-horizontal);"),A("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),U("child-active",[Ot(null,[A("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[F("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),A("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ot("border-bottom: 2px solid var(--n-border-color-horizontal);",Jr)]),y("menu-item-content-header",[F("a","color: var(--n-item-text-color-horizontal);")])])]),U("collapsed",[y("menu-item-content",[U("selected",[F("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),y("menu-item-content-header","opacity: 0;"),A("arrow","opacity: 0;"),A("icon","color: var(--n-item-icon-color-collapsed);")])]),y("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),y("menu-item-content",`
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
 `,[F("> *","z-index: 1;"),F("&::before",`
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
 `),U("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),U("collapsed",[A("arrow","transform: rotate(0);")]),U("selected",[F("&::before","background-color: var(--n-item-color-active);"),A("arrow","color: var(--n-arrow-color-active);"),A("icon","color: var(--n-item-icon-color-active);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[F("a","color: var(--n-item-text-color-active);"),A("extra","color: var(--n-item-text-color-active);")])]),U("child-active",[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[F("a",`
 color: var(--n-item-text-color-child-active);
 `),A("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),A("arrow",`
 color: var(--n-arrow-color-child-active);
 `),A("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Ne("disabled",[Ne("selected, child-active",[F("&:focus-within",Zr)]),U("selected",[Ot(null,[A("arrow","color: var(--n-arrow-color-active-hover);"),A("icon","color: var(--n-item-icon-color-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[F("a","color: var(--n-item-text-color-active-hover);"),A("extra","color: var(--n-item-text-color-active-hover);")])])]),U("child-active",[Ot(null,[A("arrow","color: var(--n-arrow-color-child-active-hover);"),A("icon","color: var(--n-item-icon-color-child-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[F("a","color: var(--n-item-text-color-child-active-hover);"),A("extra","color: var(--n-item-text-color-child-active-hover);")])])]),U("selected",[Ot(null,[F("&::before","background-color: var(--n-item-color-active-hover);")])]),Ot(null,Zr)]),A("icon",`
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
 `),A("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),y("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[F("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[F("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),A("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),y("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[y("menu-item-content",`
 height: var(--n-item-height);
 `),y("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ma({duration:".2s"})])]),y("menu-item-group",[y("menu-item-group-title",`
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
 `)])]),y("menu-tooltip",[F("a",`
 color: inherit;
 text-decoration: none;
 `)]),y("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Ot(e,t){return[U("hover",e,t),F("&:hover",e,t)]}const Ff=Object.assign(Object.assign({},xe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),cr=q({name:"Menu",props:Ff,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=xe("Menu","-menu",Af,ga,e,t),r=_e(kf,null),l=P(()=>{var k;const{collapsed:O}=e;if(O!==void 0)return O;if(r){const{collapseModeRef:x,collapsedRef:I}=r;if(x.value==="width")return(k=I.value)!==null&&k!==void 0?k:!1}return!1}),i=P(()=>{const{keyField:k,childrenField:O,disabledField:x}=e;return er(e.items||e.options,{getIgnored(I){return Jl(I)},getChildren(I){return I[O]},getDisabled(I){return I[x]},getKey(I){var z;return(z=I[k])!==null&&z!==void 0?z:I.name}})}),a=P(()=>new Set(i.value.treeNodes.map(k=>k.key))),{watchProps:s}=e,c=D(null);s!=null&&s.includes("defaultValue")?xt(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const f=ae(e,"value"),h=Qe(f,c),u=D([]),b=()=>{u.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(h.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?xt(b):b();const v=Cn(e,["expandedNames","expandedKeys"]),m=Qe(v,u),C=P(()=>i.value.treeNodes),g=P(()=>i.value.getPath(h.value).keyPath);Re(Pn,{props:e,mergedCollapsedRef:l,mergedThemeRef:o,mergedValueRef:h,mergedExpandedKeysRef:m,activePathRef:g,mergedClsPrefixRef:t,isHorizontalRef:P(()=>e.mode==="horizontal"),invertedRef:ae(e,"inverted"),doSelect:S,toggleExpand:$});function S(k,O){const{"onUpdate:value":x,onUpdateValue:I,onSelect:z}=e;I&&de(I,k,O),x&&de(x,k,O),z&&de(z,k,O),c.value=k}function L(k){const{"onUpdate:expandedKeys":O,onUpdateExpandedKeys:x,onExpandedNamesChange:I,onOpenNamesChange:z}=e;O&&de(O,k),x&&de(x,k),I&&de(I,k),z&&de(z,k),u.value=k}function $(k){const O=Array.from(m.value),x=O.findIndex(I=>I===k);if(~x)O.splice(x,1);else{if(e.accordion&&a.value.has(k)){const I=O.findIndex(z=>a.value.has(z));I>-1&&O.splice(I,1)}O.push(k)}L(O)}const _=k=>{const O=i.value.getPath(k??h.value,{includeSelf:!1}).keyPath;if(!O.length)return;const x=Array.from(m.value),I=new Set([...x,...O]);e.accordion&&a.value.forEach(z=>{I.has(z)&&!O.includes(z)&&I.delete(z)}),L(Array.from(I))},B=P(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:O},self:x}=o.value,{borderRadius:I,borderColorHorizontal:z,fontSize:G,itemHeight:H,dividerColor:K}=x,M={"--n-divider-color":K,"--n-bezier":O,"--n-font-size":G,"--n-border-color-horizontal":z,"--n-border-radius":I,"--n-item-height":H};return k?(M["--n-group-text-color"]=x.groupTextColorInverted,M["--n-color"]=x.colorInverted,M["--n-item-text-color"]=x.itemTextColorInverted,M["--n-item-text-color-hover"]=x.itemTextColorHoverInverted,M["--n-item-text-color-active"]=x.itemTextColorActiveInverted,M["--n-item-text-color-child-active"]=x.itemTextColorChildActiveInverted,M["--n-item-text-color-child-active-hover"]=x.itemTextColorChildActiveInverted,M["--n-item-text-color-active-hover"]=x.itemTextColorActiveHoverInverted,M["--n-item-icon-color"]=x.itemIconColorInverted,M["--n-item-icon-color-hover"]=x.itemIconColorHoverInverted,M["--n-item-icon-color-active"]=x.itemIconColorActiveInverted,M["--n-item-icon-color-active-hover"]=x.itemIconColorActiveHoverInverted,M["--n-item-icon-color-child-active"]=x.itemIconColorChildActiveInverted,M["--n-item-icon-color-child-active-hover"]=x.itemIconColorChildActiveHoverInverted,M["--n-item-icon-color-collapsed"]=x.itemIconColorCollapsedInverted,M["--n-item-text-color-horizontal"]=x.itemTextColorHorizontalInverted,M["--n-item-text-color-hover-horizontal"]=x.itemTextColorHoverHorizontalInverted,M["--n-item-text-color-active-horizontal"]=x.itemTextColorActiveHorizontalInverted,M["--n-item-text-color-child-active-horizontal"]=x.itemTextColorChildActiveHorizontalInverted,M["--n-item-text-color-child-active-hover-horizontal"]=x.itemTextColorChildActiveHoverHorizontalInverted,M["--n-item-text-color-active-hover-horizontal"]=x.itemTextColorActiveHoverHorizontalInverted,M["--n-item-icon-color-horizontal"]=x.itemIconColorHorizontalInverted,M["--n-item-icon-color-hover-horizontal"]=x.itemIconColorHoverHorizontalInverted,M["--n-item-icon-color-active-horizontal"]=x.itemIconColorActiveHorizontalInverted,M["--n-item-icon-color-active-hover-horizontal"]=x.itemIconColorActiveHoverHorizontalInverted,M["--n-item-icon-color-child-active-horizontal"]=x.itemIconColorChildActiveHorizontalInverted,M["--n-item-icon-color-child-active-hover-horizontal"]=x.itemIconColorChildActiveHoverHorizontalInverted,M["--n-arrow-color"]=x.arrowColorInverted,M["--n-arrow-color-hover"]=x.arrowColorHoverInverted,M["--n-arrow-color-active"]=x.arrowColorActiveInverted,M["--n-arrow-color-active-hover"]=x.arrowColorActiveHoverInverted,M["--n-arrow-color-child-active"]=x.arrowColorChildActiveInverted,M["--n-arrow-color-child-active-hover"]=x.arrowColorChildActiveHoverInverted,M["--n-item-color-hover"]=x.itemColorHoverInverted,M["--n-item-color-active"]=x.itemColorActiveInverted,M["--n-item-color-active-hover"]=x.itemColorActiveHoverInverted,M["--n-item-color-active-collapsed"]=x.itemColorActiveCollapsedInverted):(M["--n-group-text-color"]=x.groupTextColor,M["--n-color"]=x.color,M["--n-item-text-color"]=x.itemTextColor,M["--n-item-text-color-hover"]=x.itemTextColorHover,M["--n-item-text-color-active"]=x.itemTextColorActive,M["--n-item-text-color-child-active"]=x.itemTextColorChildActive,M["--n-item-text-color-child-active-hover"]=x.itemTextColorChildActiveHover,M["--n-item-text-color-active-hover"]=x.itemTextColorActiveHover,M["--n-item-icon-color"]=x.itemIconColor,M["--n-item-icon-color-hover"]=x.itemIconColorHover,M["--n-item-icon-color-active"]=x.itemIconColorActive,M["--n-item-icon-color-active-hover"]=x.itemIconColorActiveHover,M["--n-item-icon-color-child-active"]=x.itemIconColorChildActive,M["--n-item-icon-color-child-active-hover"]=x.itemIconColorChildActiveHover,M["--n-item-icon-color-collapsed"]=x.itemIconColorCollapsed,M["--n-item-text-color-horizontal"]=x.itemTextColorHorizontal,M["--n-item-text-color-hover-horizontal"]=x.itemTextColorHoverHorizontal,M["--n-item-text-color-active-horizontal"]=x.itemTextColorActiveHorizontal,M["--n-item-text-color-child-active-horizontal"]=x.itemTextColorChildActiveHorizontal,M["--n-item-text-color-child-active-hover-horizontal"]=x.itemTextColorChildActiveHoverHorizontal,M["--n-item-text-color-active-hover-horizontal"]=x.itemTextColorActiveHoverHorizontal,M["--n-item-icon-color-horizontal"]=x.itemIconColorHorizontal,M["--n-item-icon-color-hover-horizontal"]=x.itemIconColorHoverHorizontal,M["--n-item-icon-color-active-horizontal"]=x.itemIconColorActiveHorizontal,M["--n-item-icon-color-active-hover-horizontal"]=x.itemIconColorActiveHoverHorizontal,M["--n-item-icon-color-child-active-horizontal"]=x.itemIconColorChildActiveHorizontal,M["--n-item-icon-color-child-active-hover-horizontal"]=x.itemIconColorChildActiveHoverHorizontal,M["--n-arrow-color"]=x.arrowColor,M["--n-arrow-color-hover"]=x.arrowColorHover,M["--n-arrow-color-active"]=x.arrowColorActive,M["--n-arrow-color-active-hover"]=x.arrowColorActiveHover,M["--n-arrow-color-child-active"]=x.arrowColorChildActive,M["--n-arrow-color-child-active-hover"]=x.arrowColorChildActiveHover,M["--n-item-color-hover"]=x.itemColorHover,M["--n-item-color-active"]=x.itemColorActive,M["--n-item-color-active-hover"]=x.itemColorActiveHover,M["--n-item-color-active-collapsed"]=x.itemColorActiveCollapsed),M}),T=n?Ze("menu",P(()=>e.inverted?"a":"b"),B,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:v,uncontrolledExpanededKeys:u,mergedExpandedKeys:m,uncontrolledValue:c,mergedValue:h,activePath:g,tmNodes:C,mergedTheme:o,mergedCollapsed:l,cssVars:n?void 0:B,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,showOption:_}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:o}=this;return o==null||o(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>dr(r,this.$props)))}}),Of=Object.assign(Object.assign({},xe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),Ef=q({name:"Scrollbar",props:Of,setup(){const e=D(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return d(qn,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),io=Ef,Df=y("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[A("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),A("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),A("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),y("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[kr({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),A("checked, unchecked",`
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
 `),A("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),A("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),F("&:focus",[A("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),U("round",[A("rail","border-radius: calc(var(--n-rail-height) / 2);",[A("button","border-radius: calc(var(--n-button-height) / 2);")])]),Ne("disabled",[Ne("icon",[U("rubber-band",[U("pressed",[A("rail",[A("button","max-width: var(--n-button-width-pressed);")])]),A("rail",[F("&:active",[A("button","max-width: var(--n-button-width-pressed);")])]),U("active",[U("pressed",[A("rail",[A("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),A("rail",[F("&:active",[A("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),U("active",[A("rail",[A("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),A("rail",`
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
 `,[A("button-icon",`
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
 `,[kr()]),A("button",`
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
 `)]),U("active",[A("rail","background-color: var(--n-rail-color-active);")]),U("loading",[A("rail",`
 cursor: wait;
 `)]),U("disabled",[A("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Nf=Object.assign(Object.assign({},xe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let pn;const ur=q({name:"Switch",props:Nf,setup(e){pn===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?pn=CSS.supports("width","max(1px)"):pn=!1:pn=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ue(e),o=xe("Switch","-switch",Df,xf,e,t),r=Yn(e),{mergedSizeRef:l,mergedDisabledRef:i}=r,a=D(e.defaultValue),s=ae(e,"value"),c=Qe(s,a),f=P(()=>c.value===e.checkedValue),h=D(!1),u=D(!1),b=P(()=>{const{railStyle:k}=e;if(k)return k({focused:u.value,checked:f.value})});function v(k){const{"onUpdate:value":O,onChange:x,onUpdateValue:I}=e,{nTriggerFormInput:z,nTriggerFormChange:G}=r;O&&de(O,k),I&&de(I,k),x&&de(x,k),a.value=k,z(),G()}function m(){const{nTriggerFormFocus:k}=r;k()}function C(){const{nTriggerFormBlur:k}=r;k()}function g(){e.loading||i.value||(c.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue))}function S(){u.value=!0,m()}function L(){u.value=!1,C(),h.value=!1}function $(k){e.loading||i.value||k.key===" "&&(c.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue),h.value=!1)}function _(k){e.loading||i.value||k.key===" "&&(k.preventDefault(),h.value=!0)}const B=P(()=>{const{value:k}=l,{self:{opacityDisabled:O,railColor:x,railColorActive:I,buttonBoxShadow:z,buttonColor:G,boxShadowFocus:H,loadingColor:K,textColor:M,iconColor:J,[ce("buttonHeight",k)]:te,[ce("buttonWidth",k)]:V,[ce("buttonWidthPressed",k)]:Q,[ce("railHeight",k)]:le,[ce("railWidth",k)]:pe,[ce("railBorderRadius",k)]:ke,[ce("buttonBorderRadius",k)]:Ae},common:{cubicBezierEaseInOut:Oe}}=o.value;let ve,he,$e;return pn?(ve=`calc((${le} - ${te}) / 2)`,he=`max(${le}, ${te})`,$e=`max(${pe}, calc(${pe} + ${te} - ${le}))`):(ve=nt((at(le)-at(te))/2),he=nt(Math.max(at(le),at(te))),$e=at(le)>at(te)?pe:nt(at(pe)+at(te)-at(le))),{"--n-bezier":Oe,"--n-button-border-radius":Ae,"--n-button-box-shadow":z,"--n-button-color":G,"--n-button-width":V,"--n-button-width-pressed":Q,"--n-button-height":te,"--n-height":he,"--n-offset":ve,"--n-opacity-disabled":O,"--n-rail-border-radius":ke,"--n-rail-color":x,"--n-rail-color-active":I,"--n-rail-height":le,"--n-rail-width":pe,"--n-width":$e,"--n-box-shadow-focus":H,"--n-loading-color":K,"--n-text-color":M,"--n-icon-color":J}}),T=n?Ze("switch",P(()=>l.value[0]),B,e):void 0;return{handleClick:g,handleBlur:L,handleFocus:S,handleKeyup:$,handleKeydown:_,mergedRailStyle:b,pressed:h,mergedClsPrefix:t,mergedValue:c,checked:f,mergedDisabled:i,cssVars:n?void 0:B,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:r,$slots:l}=this;r==null||r();const{checked:i,unchecked:a,icon:s,"checked-icon":c,"unchecked-icon":f}=l,h=!(vn(s)&&vn(c)&&vn(f));return d("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},We(i,u=>We(a,b=>u||b?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),u),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),b)):null)),d("div",{class:`${e}-switch__button`},We(s,u=>We(c,b=>We(f,v=>d(xa,null,{default:()=>this.loading?d(al,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||u)?d("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||u):!this.checked&&(v||u)?d("div",{class:`${e}-switch__button-icon`,key:v?"unchecked-icon":"icon"},v||u):null})))),We(i,u=>u&&d("div",{key:"checked",class:`${e}-switch__checked`},u)),We(a,u=>u&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}}),fr=et("n-tabs"),Ql={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Lf=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ql,setup(e){const t=_e(fr,null);return t||fl("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Hf=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ya(Ql,["displayDirective"])),Do=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Hf,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:l,tabChangeIdRef:i,onBeforeLeaveRef:a,triggerRef:s,handleAdd:c,activateTab:f,handleClose:h}=_e(fr);return{trigger:s,mergedClosable:P(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?r.value:u}),style:l,clsPrefix:t,value:n,type:o,handleClose(u){u.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){c();return}const{name:u}=e,b=++i.id;if(u!==n.value){const{value:v}=a;v?Promise.resolve(v(e.name,n.value)).then(m=>{m&&i.id===b&&f(u)}):f(u)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:r,tab:l,value:i,mergedClosable:a,style:s,trigger:c,$slots:{default:f}}=this,h=r??l;return d("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${t}-tabs-tab-pad`}):null,d("div",Object.assign({key:n,"data-name":n,"data-disabled":o?!0:void 0},gt({class:[`${t}-tabs-tab`,i===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,a&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:c==="click"?this.activateTab:void 0,onMouseenter:c==="hover"?this.activateTab:void 0,style:e?void 0:s},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${t}-tabs-tab__label`},e?d(Te,null,d("div",{class:`${t}-tabs-tab__height-placeholder`}," "),d(Ht,{clsPrefix:t},{default:()=>d(Ml,null)})):f?f():typeof h=="object"?h:Ge(h??n)),a&&this.type==="card"?d(Vo,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),Vf=y("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[U("segment-type",[y("tabs-rail",[F("&.transition-disabled","color: red;",[y("tabs-tab",`
 transition: none;
 `)])])]),U("top",[y("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),U("left",[y("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),U("left, right",`
 flex-direction: row;
 `,[y("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),U("right",`
 flex-direction: row-reverse;
 `,[y("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),y("tabs-bar",`
 left: 0;
 `)]),U("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[y("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),y("tabs-bar",`
 top: 0;
 `)]),y("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[y("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[U("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),F("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),U("flex",[y("tabs-nav",{width:"100%"},[y("tabs-wrapper",{width:"100%"},[y("tabs-tab",{marginRight:0})])])]),y("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),U("top, bottom",[y("tabs-nav-scroll-wrapper",[F("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),F("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),U("shadow-start",[F("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),U("shadow-end",[F("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),U("left, right",[y("tabs-nav-scroll-wrapper",[F("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),F("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),U("shadow-start",[F("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),U("shadow-end",[F("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),y("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[y("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[F("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),F("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),y("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),y("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),y("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),y("tabs-tab",`
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
 `,[U("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),y("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[F("&.transition-disabled",`
 transition: none;
 `),U("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),y("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),y("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[F("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),F("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),F("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),F("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),F("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),y("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),U("line-type, bar-type",[y("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[F("&:hover",{color:"var(--n-tab-text-color-hover)"}),U("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),U("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),y("tabs-nav",[U("line-type",[U("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-bar",`
 bottom: -1px;
 `)]),U("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),y("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),y("tabs-bar",`
 right: -1px;
 `)]),U("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),y("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),y("tabs-bar",`
 left: -1px;
 `)]),U("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),y("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),y("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),y("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),y("tabs-bar",`
 border-radius: 0;
 `)]),U("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),y("tabs-tab",`
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
 `,[U("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Ne("disabled",[F("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),U("closable","padding-right: 8px;"),U("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),U("disabled","color: var(--n-tab-text-color-disabled);")]),y("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),U("left, right",[y("tabs-wrapper",`
 flex-direction: column;
 `,[y("tabs-tab-wrapper",`
 flex-direction: column;
 `,[y("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),U("top",[U("card-type",[y("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-bottom: 1px solid #0000;
 `)]),y("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),U("left",[U("card-type",[y("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-right: 1px solid #0000;
 `)]),y("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),U("right",[U("card-type",[y("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-left: 1px solid #0000;
 `)]),y("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),U("bottom",[U("card-type",[y("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-top: 1px solid #0000;
 `)]),y("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Uf=Object.assign(Object.assign({},xe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),jf=q({name:"Tabs",props:Uf,setup(e,{slots:t}){var n,o,r,l;const{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Ue(e),s=xe("Tabs","-tabs",Vf,wa,e,i),c=D(null),f=D(null),h=D(null),u=D(null),b=D(null),v=D(!0),m=D(!0),C=Cn(e,["labelSize","size"]),g=Cn(e,["activeName","value"]),S=D((o=(n=g.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&o!==void 0?o:t.default?(l=(r=En(t.default())[0])===null||r===void 0?void 0:r.props)===null||l===void 0?void 0:l.name:null),L=Qe(g,S),$={id:0},_=P(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Se(L,()=>{$.id=0,O(),x()});function B(){var Y;const{value:R}=L;return R===null?null:(Y=c.value)===null||Y===void 0?void 0:Y.querySelector(`[data-name="${R}"]`)}function T(Y){if(e.type==="card")return;const{value:R}=f;if(R&&Y){const w=`${i.value}-tabs-bar--disabled`,{barWidth:W,placement:oe}=e;if(Y.dataset.disabled==="true"?R.classList.add(w):R.classList.remove(w),["top","bottom"].includes(oe)){if(k(["top","maxHeight","height"]),typeof W=="number"&&Y.offsetWidth>=W){const N=Math.floor((Y.offsetWidth-W)/2)+Y.offsetLeft;R.style.left=`${N}px`,R.style.maxWidth=`${W}px`}else R.style.left=`${Y.offsetLeft}px`,R.style.maxWidth=`${Y.offsetWidth}px`;R.style.width="8192px",R.offsetWidth}else{if(k(["left","maxWidth","width"]),typeof W=="number"&&Y.offsetHeight>=W){const N=Math.floor((Y.offsetHeight-W)/2)+Y.offsetTop;R.style.top=`${N}px`,R.style.maxHeight=`${W}px`}else R.style.top=`${Y.offsetTop}px`,R.style.maxHeight=`${Y.offsetHeight}px`;R.style.height="8192px",R.offsetHeight}}}function k(Y){const{value:R}=f;if(R)for(const w of Y)R.style[w]=""}function O(){if(e.type==="card")return;const Y=B();Y&&T(Y)}function x(Y){var R;const w=(R=b.value)===null||R===void 0?void 0:R.$el;if(!w)return;const W=B();if(!W)return;const{scrollLeft:oe,offsetWidth:N}=w,{offsetLeft:Z,offsetWidth:re}=W;oe>Z?w.scrollTo({top:0,left:Z,behavior:"smooth"}):Z+re>oe+N&&w.scrollTo({top:0,left:Z+re-N,behavior:"smooth"})}const I=D(null);let z=0,G=null;function H(Y){const R=I.value;if(R){z=Y.getBoundingClientRect().height;const w=`${z}px`,W=()=>{R.style.height=w,R.style.maxHeight=w};G?(W(),G(),G=null):G=W}}function K(Y){const R=I.value;if(R){const w=Y.getBoundingClientRect().height,W=()=>{document.body.offsetHeight,R.style.maxHeight=`${w}px`,R.style.height=`${Math.max(z,w)}px`};G?(G(),G=null,W()):G=W}}function M(){const Y=I.value;Y&&(Y.style.maxHeight="",Y.style.height="")}const J={value:[]},te=D("next");function V(Y){const R=L.value;let w="next";for(const W of J.value){if(W===R)break;if(W===Y){w="prev";break}}te.value=w,Q(Y)}function Q(Y){const{onActiveNameChange:R,onUpdateValue:w,"onUpdate:value":W}=e;R&&de(R,Y),w&&de(w,Y),W&&de(W,Y),S.value=Y}function le(Y){const{onClose:R}=e;R&&de(R,Y)}function pe(){const{value:Y}=f;if(!Y)return;const R="transition-disabled";Y.classList.add(R),O(),Y.classList.remove(R)}let ke=0;function Ae(Y){var R;if(Y.contentRect.width===0&&Y.contentRect.height===0||ke===Y.contentRect.width)return;ke=Y.contentRect.width;const{type:w}=e;(w==="line"||w==="bar")&&pe(),w!=="segment"&&qe((R=b.value)===null||R===void 0?void 0:R.$el)}const Oe=ho(Ae,64);Se([()=>e.justifyContent,()=>e.size],()=>{ht(()=>{const{type:Y}=e;(Y==="line"||Y==="bar")&&pe()})});const ve=D(!1);function he(Y){var R;const{target:w,contentRect:{width:W}}=Y,oe=w.parentElement.offsetWidth;if(!ve.value)oe<W&&(ve.value=!0);else{const{value:N}=u;if(!N)return;oe-W>N.$el.offsetWidth&&(ve.value=!1)}qe((R=b.value)===null||R===void 0?void 0:R.$el)}const $e=ho(he,64);function Be(){const{onAdd:Y}=e;Y&&Y(),ht(()=>{const R=B(),{value:w}=b;!R||!w||w.scrollTo({left:R.offsetLeft,top:0,behavior:"smooth"})})}function qe(Y){if(!Y)return;const{placement:R}=e;if(R==="top"||R==="bottom"){const{scrollLeft:w,scrollWidth:W,offsetWidth:oe}=Y;v.value=w<=0,m.value=w+oe>=W}else{const{scrollTop:w,scrollHeight:W,offsetHeight:oe}=Y;v.value=w<=0,m.value=w+oe>=W}}const Xe=ho(Y=>{qe(Y.target)},64);Re(fr,{triggerRef:ae(e,"trigger"),tabStyleRef:ae(e,"tabStyle"),paneClassRef:ae(e,"paneClass"),paneStyleRef:ae(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:ae(e,"type"),closableRef:ae(e,"closable"),valueRef:L,tabChangeIdRef:$,onBeforeLeaveRef:ae(e,"onBeforeLeave"),activateTab:V,handleClose:le,handleAdd:Be}),Sl(()=>{O(),x()}),xt(()=>{const{value:Y}=h;if(!Y)return;const{value:R}=i,w=`${R}-tabs-nav-scroll-wrapper--shadow-start`,W=`${R}-tabs-nav-scroll-wrapper--shadow-end`;v.value?Y.classList.remove(w):Y.classList.add(w),m.value?Y.classList.remove(W):Y.classList.add(W)});const lt=D(null);Se(L,()=>{if(e.type==="segment"){const Y=lt.value;Y&&ht(()=>{Y.classList.add("transition-disabled"),Y.offsetWidth,Y.classList.remove("transition-disabled")})}});const tt={syncBarPosition:()=>{O()}},Je=P(()=>{const{value:Y}=C,{type:R}=e,w={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[R],W=`${Y}${w}`,{self:{barColor:oe,closeIconColor:N,closeIconColorHover:Z,closeIconColorPressed:re,tabColor:Pe,tabBorderColor:Ce,paneTextColor:je,tabFontWeight:ft,tabBorderRadius:Bt,tabFontWeightActive:Wt,colorSegment:Kt,fontWeightStrong:Gt,tabColorSegment:sn,closeSize:dn,closeIconSize:qt,closeColorHover:vt,closeColorPressed:E,closeBorderRadius:ne,[ce("panePadding",Y)]:ue,[ce("tabPadding",W)]:we,[ce("tabPaddingVertical",W)]:me,[ce("tabGap",W)]:ye,[ce("tabGap",`${W}Vertical`)]:ge,[ce("tabTextColor",R)]:Ee,[ce("tabTextColorActive",R)]:Xt,[ce("tabTextColorHover",R)]:cn,[ce("tabTextColorDisabled",R)]:ao,[ce("tabFontSize",Y)]:so},common:{cubicBezierEaseInOut:co}}=s.value;return{"--n-bezier":co,"--n-color-segment":Kt,"--n-bar-color":oe,"--n-tab-font-size":so,"--n-tab-text-color":Ee,"--n-tab-text-color-active":Xt,"--n-tab-text-color-disabled":ao,"--n-tab-text-color-hover":cn,"--n-pane-text-color":je,"--n-tab-border-color":Ce,"--n-tab-border-radius":Bt,"--n-close-size":dn,"--n-close-icon-size":qt,"--n-close-color-hover":vt,"--n-close-color-pressed":E,"--n-close-border-radius":ne,"--n-close-icon-color":N,"--n-close-icon-color-hover":Z,"--n-close-icon-color-pressed":re,"--n-tab-color":Pe,"--n-tab-font-weight":ft,"--n-tab-font-weight-active":Wt,"--n-tab-padding":we,"--n-tab-padding-vertical":me,"--n-tab-gap":ye,"--n-tab-gap-vertical":ge,"--n-pane-padding-left":Et(ue,"left"),"--n-pane-padding-right":Et(ue,"right"),"--n-pane-padding-top":Et(ue,"top"),"--n-pane-padding-bottom":Et(ue,"bottom"),"--n-font-weight-strong":Gt,"--n-tab-color-segment":sn}}),He=a?Ze("tabs",P(()=>`${C.value[0]}${e.type[0]}`),Je,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:L,renderedNames:new Set,tabsRailElRef:lt,tabsPaneWrapperRef:I,tabsElRef:c,barElRef:f,addTabInstRef:u,xScrollInstRef:b,scrollWrapperElRef:h,addTabFixed:ve,tabWrapperStyle:_,handleNavResize:Oe,mergedSize:C,handleScroll:Xe,handleTabsResize:$e,cssVars:a?void 0:Je,themeClass:He==null?void 0:He.themeClass,animationDirection:te,renderNameListRef:J,onAnimationBeforeLeave:H,onAnimationEnter:K,onAnimationAfterEnter:M,onRender:He==null?void 0:He.onRender},tt)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:o,addable:r,mergedSize:l,renderNameListRef:i,onRender:a,paneWrapperClass:s,paneWrapperStyle:c,$slots:{default:f,prefix:h,suffix:u}}=this;a==null||a();const b=f?En(f()).filter(_=>_.type.__TAB_PANE__===!0):[],v=f?En(f()).filter(_=>_.type.__TAB__===!0):[],m=!v.length,C=t==="card",g=t==="segment",S=!C&&!g&&this.justifyContent;i.value=[];const L=()=>{const _=d("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},S?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),m?b.map((B,T)=>(i.value.push(B.props.name),Ro(d(Do,Object.assign({},B.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!S||S==="center"||S==="start"||S==="end")}),B.children?{default:B.children.tab}:void 0)))):v.map((B,T)=>(i.value.push(B.props.name),Ro(T!==0&&!S?tl(B):B))),!o&&r&&C?el(r,(m?b.length:v.length)!==0):null,S?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},C&&r?d(wn,{onResize:this.handleTabsResize},{default:()=>_}):_,C?d("div",{class:`${e}-tabs-pad`}):null,C?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},$=g?"top":n;return d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${l}-size`,S&&`${e}-tabs--flex`,`${e}-tabs--${$}`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${$}`,`${e}-tabs-nav`]},We(h,_=>_&&d("div",{class:`${e}-tabs-nav__prefix`},_)),g?d("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},m?b.map((_,B)=>(i.value.push(_.props.name),d(Do,Object.assign({},_.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0}),_.children?{default:_.children.tab}:void 0))):v.map((_,B)=>(i.value.push(_.props.name),B===0?_:tl(_)))):d(wn,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes($)?d(Hd,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:L}):d("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},L()))}),o&&r&&C?el(r,!0):null,We(u,_=>_&&d("div",{class:`${e}-tabs-nav__suffix`},_))),m&&(this.animated&&($==="top"||$==="bottom")?d("div",{ref:"tabsPaneWrapperRef",style:c,class:[`${e}-tabs-pane-wrapper`,s]},Qr(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Qr(b,this.mergedValue,this.renderedNames)))}});function Qr(e,t,n,o,r,l,i){const a=[];return e.forEach(s=>{const{name:c,displayDirective:f,"display-directive":h}=s.props,u=v=>f===v||h===v,b=t===c;if(s.key!==void 0&&(s.key=c),b||u("show")||u("show:lazy")&&n.has(c)){n.has(c)||n.add(c);const v=!u("if");a.push(v?dt(s,[[Tt,b]]):s)}}),i?d(_a,{name:`${i}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:l},{default:()=>a}):a}function el(e,t){return d(Do,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function tl(e){const t=Ln(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ro(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function Wf(e,t,n){return Kf(e,t).map(l=>ti(l,n))}function Kf(e,t){const n=[];return t.some(o=>{const r=e.includes(o.routeName);return r&&n.push(...ei(e,o)),r}),n}function ei(e,t){const n=[];return e===t.routeName&&n.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(n.push(t),n.push(...t.children.map(o=>ei(e,o)).flat(1))),n}function ti(e,t){var r;const n=!!(e.children&&e.children.length),o={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:n,i18nTitle:e.i18nTitle};return e.icon&&(o.icon=e.icon),n&&(o.options=(r=e.children)==null?void 0:r.map(l=>ti(l,t))),o}const Gf=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],ni=Gf;function qf(e){return ni.some(t=>t.data.some(o=>o.color===e))}function oi(){const e=ut(),t=Ie(),n=Ca(Sa),o=P(()=>{const f="vertical",h="horizontal";return t.layout.mode.includes(f)?f:h}),r=n.smaller("sm"),l={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},i=P(()=>l[t.layout.mode]),a=P(()=>t.layout.mode!=="horizontal"),s=P(()=>{const{width:f,mixWidth:h,mixChildMenuWidth:u}=t.sider,b=t.layout.mode==="vertical-mix";let v=b?h:f;return b&&e.mixSiderFixed&&(v+=u),v}),c=P(()=>{const{collapsedWidth:f,mixCollapsedWidth:h,mixChildMenuWidth:u}=t.sider,b=t.layout.mode==="vertical-mix";let v=b?h:f;return b&&e.mixSiderFixed&&(v+=u),v});return Se(r,f=>{f&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:o,isMobile:r,headerProps:i,siderVisible:a,siderWidth:s,siderCollapsedWidth:c}}const ln=q({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,n)=>(X(),fe("div",{class:Ye(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[Lt(t.$slots,"default")],2))}}),hr=q({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=hl("root");return(n,o)=>{const r=ka("router-link");return X(),se(r,{to:p(t),class:"flex-center w-full nowrap-hidden"},{default:ee(()=>[dt(ie("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},Le(p(be)("system.title")),513),[[Tt,n.showTitle]])]),_:1},8,["to"])}}}),Xf={key:0},an=q({name:"HoverContainer",__name:"hover-container",props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,n=P(()=>!!t.tooltipContent),o=P(()=>`${t.contentClass} ${t.inverted?"hover:bg-primary":"hover:bg-#f6f6f6"}`);return(r,l)=>{const i=or;return n.value?(X(),fe("div",Xf,[j(i,{placement:r.placement,trigger:"hover"},{trigger:ee(()=>[ie("div",{class:Ye(["flex-center h-full cursor-pointer dark:hover:bg-#333",o.value])},[Lt(r.$slots,"default")],2)]),default:ee(()=>[st(" "+Le(r.tooltipContent),1)]),_:3},8,["placement"])])):(X(),fe("div",{key:1,class:Ye(["flex-center cursor-pointer dark:hover:bg-#333",o.value])},[Lt(r.$slots,"default")],2))}}}),Yf={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Zf=ie("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),Jf=[Zf];function Qf(e,t){return X(),fe("svg",Yf,[...Jf])}const eh={name:"gridicons-fullscreen",render:Qf},th={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},nh=ie("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),oh=[nh];function rh(e,t){return X(),fe("svg",th,[...oh])}const lh={name:"gridicons-fullscreen-exit",render:rh},ih=q({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:n}=$a(),o=Ie();return(r,l)=>{const i=lh,a=eh,s=an;return X(),se(s,{class:"w-40px h-full","tooltip-content":"全屏",inverted:p(o).header.inverted,onClick:p(n)},{default:ee(()=>[p(t)?(X(),se(i,{key:0,class:"text-18px"})):(X(),se(a,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),ah=q({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=Ut(),n=Ie(),o=zn(),{routerPush:r}=Rn(),l=P(()=>Wf(t.name,o.menus,hl("root")).map(a=>{var s;return{...a,label:a.i18nTitle?be(a.i18nTitle):a.label,options:(s=a.options)==null?void 0:s.map(c=>({...c,label:c.i18nTitle?be(c.i18nTitle):c.label}))}}));function i(a){r({name:a})}return(a,s)=>{const c=lo,f=ru,h=tu;return X(),se(h,{class:"px-12px"},{default:ee(()=>[(X(!0),fe(Te,null,Vt(l.value,u=>(X(),se(f,{key:u.key},{default:ee(()=>[u.hasChildren?(X(),se(c,{key:0,options:u.options,onSelect:i},{default:ee(()=>[ie("span",null,[p(n).header.crumb.showIcon?(X(),se(Io(u.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):ot("",!0),ie("span",null,Le(u.label),1)])]),_:2},1032,["options"])):(X(),fe(Te,{key:1},[p(n).header.crumb.showIcon?(X(),se(Io(u.icon),{key:0,class:Ye(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":p(n).header.inverted}])},null,8,["class"])):ot("",!0),ie("span",{class:Ye({"text-#BBBBBB":p(n).header.inverted})},Le(u.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),sh={class:"flex-1-hidden h-full px-10px"},dh=q({name:"HeaderMenu",__name:"header-menu",setup(e){const t=Ut(),n=zn(),o=Ie(),{routerPush:r}=Rn(),l=P(()=>Ko(n.menus)),i=P(()=>{var s;return(s=t.meta)!=null&&s.activeMenu?t.meta.activeMenu:t.name});function a(s,c){r(c.routePath)}return(s,c)=>{const f=cr,h=io;return X(),fe("div",sh,[j(h,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:ee(()=>[ie("div",{class:"flex-y-center h-full",style:Ct({justifyContent:p(o).menu.horizontalPosition})},[j(f,{value:i.value,mode:"horizontal",options:l.value,inverted:p(o).header.inverted,"onUpdate:value":a},null,8,["value","options","inverted"])],4)]),_:1})])}}}),ch=jt(dh,[["__scopeId","data-v-d73713cf"]]),uh={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},fh=pl('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),hh=[fh];function ph(e,t){return X(),fe("svg",uh,[...hh])}const vh={name:"line-md-menu-fold-left",render:ph},bh={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},mh=pl('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),gh=[mh];function xh(e,t){return X(),fe("svg",bh,[...gh])}const yh={name:"line-md-menu-unfold-left",render:xh},wh=q({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=ut(),n=Ie();return(o,r)=>{const l=yh,i=vh,a=an;return X(),se(a,{class:"w-40px h-full",inverted:p(n).header.inverted,onClick:p(t).toggleSiderCollapse},{default:ee(()=>[p(t).siderCollapse?(X(),se(l,{key:0,class:"text-16px"})):(X(),se(i,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),_h={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Ch=ie("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),Sh=[Ch];function kh(e,t){return X(),fe("svg",_h,[...Sh])}const ri={name:"ant-design-setting-outlined",render:kh},$h=q({name:"SettingButton",__name:"setting-button",setup(e){const t=ut(),n=Ie();return(o,r)=>{const l=ri,i=an;return X(),se(i,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:p(n).header.inverted,onClick:p(t).toggleSettingDrawerVisible},{default:ee(()=>[j(l,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),zh=q({name:"ThemeMode",__name:"theme-mode",setup(e){const t=Ie();return(n,o)=>{const r=ja,l=an;return X(),se(l,{class:"w-40px",inverted:p(t).header.inverted,"tooltip-content":"主题模式"},{default:ee(()=>[j(r,{dark:p(t).darkMode,"customize-transition":p(t).isCustomizeDarkModeTransition,class:"wh-full","onUpdate:dark":p(t).setDarkMode},null,8,["dark","customize-transition","onUpdate:dark"])]),_:1},8,["inverted"])}}}),Rh={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},Ph=ie("path",{fill:"currentColor",d:"M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"},null,-1),Mh=ie("path",{fill:"currentColor",d:"M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48ZM373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z"},null,-1),Th=[Ph,Mh];function Ih(e,t){return X(),fe("svg",Rh,[...Th])}const Bh={name:"cil-language",render:Ih},Ah=q({__name:"toggle-lang",setup(e){const t=Ie(),{locale:n}=za(),o=D($r.get("lang")||"zh-CN"),r=[{label:"中文",key:"zh-CN"},{label:"English",key:"en"}],l=i=>{o.value=i,n.value=i,$r.set("lang",i)};return(i,a)=>{const s=Bh,c=lo,f=an;return X(),se(f,{class:"w-40px h-full",inverted:p(t).header.inverted},{default:ee(()=>[j(c,{options:r,trigger:"hover",value:o.value,onSelect:l},{default:ee(()=>[j(s,{class:"text-18px outline-transparent"})]),_:1},8,["value"])]),_:1},8,["inverted"])}}}),Fh={key:1,class:"flex-1-hidden flex-y-center h-full"},Oh={class:"flex justify-end h-full"},Eh=q({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=Ie(),{isMobile:n}=oi(),o={}.VITE_VERCEL!=="Y";return(r,l)=>{const i=ln;return X(),se(i,{class:"global-header flex-y-center h-full",inverted:p(t).header.inverted},{default:ee(()=>[r.showLogo?(X(),se(hr,{key:0,"show-title":!0,class:"h-full",style:Ct({width:p(t).sider.width+"px"})},null,8,["style"])):ot("",!0),r.showHeaderMenu?(X(),se(p(ch),{key:2})):(X(),fe("div",Fh,[r.showMenuCollapse||p(n)?(X(),se(p(wh),{key:0})):ot("",!0),p(t).header.crumb.visible&&!p(n)?(X(),se(p(ah),{key:1})):ot("",!0)])),ie("div",Oh,[j(p(ih)),j(p(zh)),j(p(Ah)),p(o)?(X(),se(p($h),{key:0})):ot("",!0)])]),_:1},8,["inverted"])}}}),Dh=jt(Eh,[["__scopeId","data-v-fe132108"]]),Nh=q({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const n=e,o=D(),r=D(),l=D(),i=P(()=>!!n.options.scrollY);function a(){o.value&&(r.value=new Xa(o.value,n.options))}const{width:s}=zr(o),{width:c,height:f}=zr(l);return Se([()=>s.value,()=>c.value,()=>f.value],()=>{r.value&&r.value.refresh()}),rt(()=>{a()}),t({instance:r}),(h,u)=>(X(),fe("div",{ref_key:"bsWrap",ref:o,class:"h-full text-left"},[ie("div",{ref_key:"bsContent",ref:l,class:Ye(["inline-block",{"h-full":!i.value}])},[Lt(h.$slots,"default")],2)],512))}}),Lh=q({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const n=e,o=ut(),r=Go(),{iconRender:l}=Ra(),i=P({get(){return n.visible},set(h){t("update:visible",h)}});function a(){i.value=!1}const s=P(()=>[{label:"内容全屏",key:"full-content",icon:l({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:n.currentPath!==r.activeTab,icon:l({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:n.currentPath===r.homeTab.fullPath||!!n.affix,icon:l({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:l({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:l({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:l({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:l({icon:"ant-design:line-outlined"})}]),c=new Map([["full-content",()=>{o.setContentFull(!0)}],["reload-current",()=>{o.reloadPage()}],["close-current",()=>{r.removeTab(n.currentPath)}],["close-other",()=>{r.clearTab([n.currentPath])}],["close-left",()=>{r.clearLeftTab(n.currentPath)}],["close-right",()=>{r.clearRightTab(n.currentPath)}],["close-all",()=>{r.clearAllTab()}]]);function f(h){const u=h,b=c.get(u);b&&b(),a()}return(h,u)=>{const b=lo;return X(),se(b,{show:i.value,options:s.value,placement:"bottom-start",x:h.x,y:h.y,onClickoutside:a,onSelect:f},null,8,["show","options","x","y"])}}}),Hh=q({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const n=Ie(),o=Go(),r=P(()=>n.tab.mode==="chrome"),l=D();async function i(){if(await ht(),l.value&&l.value.children.length&&l.value.children[o.activeTabIndex]){const u=l.value.children[o.activeTabIndex],{x:b,width:v}=u.getBoundingClientRect(),m=b+v/2;setTimeout(()=>{t("scroll",m)},50)}}const a=ll({visible:!1,affix:!1,x:0,y:0,currentPath:""});function s(u){Object.assign(a,u)}let c=!1;function f(u){c||s({visible:u})}async function h(u,b,v){u.preventDefault();const{clientX:m,clientY:C}=u;c=!0;const g=a.visible?150:0;s({visible:!1}),setTimeout(()=>{s({visible:!0,x:m,y:C,currentPath:b,affix:v}),c=!1},g)}return Se(()=>o.activeTabIndex,()=>{i()},{immediate:!0}),(u,b)=>{const v=Ma;return X(),fe(Te,null,[ie("div",{ref_key:"tabRef",ref:l,class:Ye(["flex h-full pr-18px",[r.value?"items-end":"items-center gap-12px"]])},[(X(!0),fe(Te,null,Vt(p(o).tabs,m=>(X(),se(p(Pa),{key:m.fullPath,mode:p(n).tab.mode,"dark-mode":p(n).darkMode,active:p(o).activeTab===m.fullPath,"active-color":p(n).themeColor,closable:!(m.name===p(o).homeTab.name||m.meta.affix),onClick:C=>p(o).handleClickTab(m.fullPath),onClose:C=>p(o).removeTab(m.fullPath),onContextmenu:C=>h(C,m.fullPath,m.meta.affix)},{prefix:ee(()=>[j(v,{icon:m.meta.icon,"local-icon":m.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:ee(()=>[st(" "+Le(m.meta.i18nTitle?p(be)(m.meta.i18nTitle):m.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),j(p(Lh),{visible:a.visible,"current-path":a.currentPath,affix:a.affix,x:a.x,y:a.y,"onUpdate:visible":f},null,8,["visible","current-path","affix","x","y"])],64)}}}),Vh={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Uh=ie("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),jh=[Uh];function Wh(e,t){return X(),fe("svg",Vh,[...jh])}const Kh={name:"mdi-refresh",render:Wh},Gh=q({name:"ReloadButton",__name:"index",setup(e){const{reCacheRoute:t}=zn(),n=Ut(),{loading:o,startLoading:r,endLoading:l}=Wa();async function i(){r(),await t(n.name),setTimeout(()=>{l()},1e3)}return(a,s)=>{const c=Kh,f=an;return X(),se(f,{class:"w-64px h-full","tooltip-content":"重新加载",placement:"bottom-end",onClick:i},{default:ee(()=>[j(c,{class:Ye(["text-22px",{"animate-spin":p(o)}])},null,8,["class"])]),_:1})}}}),qh=q({name:"GlobalTab",__name:"index",setup(e){const t=Ut(),n=Ie(),o=Go(),r=Ta(),l=D(),{width:i,left:a}=Ia(l),s=D(),c=!!r.device.type;function f(u){var m;const v=u-a.value-i.value/2;if(s.value){const{maxScrollX:C,x:g}=s.value.instance,S=C-g,L=v>0?Math.max(-v,S):Math.min(-v,-g);(m=s.value)==null||m.instance.scrollBy(L,0,300)}}function h(){o.iniTabStore(t)}return Se(()=>t.fullPath,()=>{o.addTab(t),o.setActiveTab(t.fullPath)}),h(),(u,b)=>{const v=Nh,m=ln;return X(),se(m,{class:"global-tab flex-y-center w-full pl-16px",style:Ct({height:p(n).tab.height+"px"})},{default:ee(()=>[ie("div",{ref_key:"bsWrapper",ref:l,class:"flex-1-hidden h-full"},[j(v,{ref_key:"bsScroll",ref:s,options:{scrollX:!0,scrollY:!1,click:p(c)}},{default:ee(()=>[j(p(Hh),{onScroll:f})]),_:1},8,["options"])],512),j(p(Gh))]),_:1},8,["style"])}}}),Xh=jt(qh,[["__scopeId","data-v-f9a4942d"]]),Yh=q({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=Ut(),n=ut(),o=Ie(),r=zn(),{routerPush:l}=Rn(),i=P(()=>Ko(r.menus)),a=P(()=>{var h;return(h=t.meta)!=null&&h.activeMenu?t.meta.activeMenu:t.name}),s=D([]);function c(h,u){l(u.routePath)}function f(h){s.value=h}return Se(()=>t.name,()=>{s.value=vl(a.value,i.value)},{immediate:!0}),(h,u)=>{const b=cr,v=io;return X(),se(v,{class:"flex-1-hidden"},{default:ee(()=>[j(b,{value:a.value,collapsed:p(n).siderCollapse,"collapsed-width":p(o).sider.collapsedWidth,"collapsed-icon-size":22,options:i.value,"expanded-keys":s.value,indent:18,inverted:!p(o).darkMode&&p(o).sider.inverted,"onUpdate:value":c,"onUpdate:expandedKeys":f},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),Zh=q({name:"VerticalSider",__name:"index",setup(e){const t=ut(),n=Ie(),o=P(()=>n.layout.mode==="horizontal-mix"),r=P(()=>!t.siderCollapse&&n.layout.mode!=="vertical-mix");return(l,i)=>{const a=ln;return X(),se(a,{class:"flex-col-stretch h-full",inverted:p(n).sider.inverted},{default:ee(()=>[o.value?ot("",!0):(X(),se(p(hr),{key:0,"show-title":r.value,style:Ct({height:p(n).header.height+"px"})},null,8,["show-title","style"])),j(p(Yh))]),_:1},8,["inverted"])}}}),Jh=q({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:n,setTrue:o,setFalse:r}=qo(),l=P(()=>t.routeName===t.activeRouteName);return(i,a)=>(X(),fe("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:a[0]||(a[0]=(...s)=>p(o)&&p(o)(...s)),onMouseleave:a[1]||(a[1]=(...s)=>p(r)&&p(r)(...s))},[ie("div",{class:Ye(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":l.value,"text-primary":p(n)}])},[(X(),se(Io(i.icon),{class:Ye([i.isMini?"text-16px":"text-20px"])},null,8,["class"])),ie("p",{class:Ye(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[i.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Le(i.label),3)],2)],32))}}),Qh={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ep=ie("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),tp=[ep];function np(e,t){return X(),fe("svg",Qh,[...tp])}const op={name:"mdi-pin",render:np},rp={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},lp=ie("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),ip=[lp];function ap(e,t){return X(),fe("svg",rp,[...ip])}const sp={name:"mdi-pin-off",render:ap},dp={class:"text-primary pl-8px text-16px font-bold"},cp=q({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,n=Ut(),o=ut(),r=Ie(),{routerPush:l}=Rn(),i=P(()=>t.visible&&t.menus.length||o.mixSiderFixed),a=P(()=>{var h;return(h=n.meta)!=null&&h.activeMenu?n.meta.activeMenu:n.name}),s=D([]);function c(h,u){l(u.routePath)}function f(h){s.value=h}return Se(()=>n.name,()=>{s.value=vl(a.value,t.menus)},{immediate:!0}),(h,u)=>{const b=sp,v=op,m=cr,C=io,g=ln;return X(),fe("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:Ct({width:p(o).mixSiderFixed?p(r).sider.mixChildMenuWidth+"px":"0px"})},[j(g,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:p(r).sider.inverted,style:Ct({width:i.value?p(r).sider.mixChildMenuWidth+"px":"0px"})},{default:ee(()=>[ie("header",{class:"header-height flex-y-center justify-between",style:Ct({height:p(r).header.height+"px"})},[ie("h2",dp,Le(p(be)("system.title")),1),ie("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:u[0]||(u[0]=(...S)=>p(o).toggleMixSiderFixed&&p(o).toggleMixSiderFixed(...S))},[p(o).mixSiderFixed?(X(),se(b,{key:0})):(X(),se(v,{key:1}))])],4),j(C,{class:"flex-1-hidden"},{default:ee(()=>[j(m,{value:a.value,options:h.menus,"expanded-keys":s.value,indent:18,inverted:!p(r).darkMode&&p(r).sider.inverted,"onUpdate:value":c,"onUpdate:expandedKeys":f},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),up=jt(cp,[["__scopeId","data-v-beac3164"]]),fp={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},hp=ie("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),pp=[hp];function vp(e,t){return X(),fe("svg",fp,[...pp])}const bp={name:"ph-caret-double-left-bold",render:vp},mp={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},gp=ie("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),xp=[gp];function yp(e,t){return X(),fe("svg",mp,[...xp])}const wp={name:"ph-caret-double-right-bold",render:yp},_p=q({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=ut();return(n,o)=>{const r=wp,l=bp,i=zt;return X(),se(i,{text:!0,class:"h-36px",onClick:p(t).toggleSiderCollapse},{default:ee(()=>[p(t).siderCollapse?(X(),se(r,{key:0,class:"text-16px"})):(X(),se(l,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),Cp={class:"flex-1-hidden flex-col-stretch h-full"},Sp=q({name:"VerticalMixSider",__name:"index",setup(e){const t=Ut(),n=ut(),o=Ie(),r=zn(),{routerPush:l}=Rn(),{bool:i,setTrue:a,setFalse:s}=qo(),c=D("");function f(C){c.value=C}const h=P(()=>r.menus.map(C=>{const{routeName:g,label:S,i18nTitle:L}=C,$=C==null?void 0:C.icon,_=!!(C.children&&C.children.length);return{routeName:g,label:L?be(L):S,icon:$,hasChildren:_}}));function u(){h.value.some(C=>{var L;const g=(L=t.meta)!=null&&L.activeMenu?t.meta.activeMenu:t.name,S=g==null?void 0:g.includes(C.routeName);return S&&f(C.routeName),S})}function b(C,g){f(C),g?a():l({name:C})}function v(){u(),s()}const m=P(()=>{const C=[];return r.menus.some(g=>{var L;const S=g.routeName===c.value&&!!((L=g.children)!=null&&L.length);return S&&C.push(...Ko(g.children||[])),S}),C});return Se(()=>t.name,()=>{u()},{immediate:!0}),(C,g)=>{const S=io,L=ln;return X(),se(L,{class:"flex h-full",inverted:p(o).sider.inverted,onMouseleave:v},{default:ee(()=>[ie("div",Cp,[j(p(hr),{"show-title":!1,style:Ct({height:p(o).header.height+"px"})},null,8,["style"]),j(S,{class:"flex-1-hidden"},{default:ee(()=>[(X(!0),fe(Te,null,Vt(h.value,$=>(X(),se(p(Jh),{key:$.routeName,"route-name":$.routeName,"active-route-name":c.value,label:$.label,icon:$.icon,"is-mini":p(n).siderCollapse,onClick:_=>b($.routeName,$.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),j(p(_p))]),j(p(up),{visible:p(i),menus:m.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),kp=q({name:"GlobalSider",__name:"index",setup(e){const t=Ie(),n=P(()=>t.layout.mode==="vertical-mix");return(o,r)=>n.value?(X(),se(p(Sp),{key:0,class:"global-sider"})):(X(),se(p(Zh),{key:1,class:"global-sider"}))}}),$p=jt(kp,[["__scopeId","data-v-26cb8afe"]]),zp=ie("span",null,"Copyright ©2024",-1),Rp=q({name:"GlobalFooter",__name:"index",setup(e){const t=Ie();return(n,o)=>{const r=ln;return X(),se(r,{class:"flex-center h-full",inverted:p(t).footer.inverted},{default:ee(()=>[zp]),_:1},8,["inverted"])}}}),Pp={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Mp=ie("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),Tp=ie("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),Ip=[Mp,Tp];function Bp(e,t){return X(),fe("svg",Pp,[...Ip])}const Ap={name:"ic-round-hdr-auto",render:Bp},Fp={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Op=ie("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),Ep=[Op];function Dp(e,t){return X(),fe("svg",Fp,[...Ep])}const Np={name:"ic-baseline-do-not-disturb",render:Dp},Lp={class:"flex-y-center justify-between"},Fe=q({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,n)=>(X(),fe("div",Lp,[ie("span",null,Le(t.label),1),Lt(t.$slots,"default")]))}}),Hp=q({name:"DarkMode",__name:"index",setup(e){const t=Ie();return(n,o)=>{const r=on,l=Ka,i=Ga,a=ur,s=Np,c=Ap,f=rn;return X(),fe(Te,null,[j(r,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.themeModeTitle")),1)]),_:1}),j(f,{vertical:"",size:"large"},{default:ee(()=>[j(Fe,{label:p(be)("layout.settingDrawer.darkMode")},{default:ee(()=>[j(a,{value:p(t).darkMode,"onUpdate:value":p(t).setDarkMode},{checked:ee(()=>[j(l,{class:"text-14px text-white"})]),unchecked:ee(()=>[j(i,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.followSystemTheme")},{default:ee(()=>[j(a,{value:p(t).followSystemTheme,"onUpdate:value":p(t).setFollowSystemTheme},{checked:ee(()=>[j(s,{class:"text-14px text-white"})]),unchecked:ee(()=>[j(c,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.isCustomizeDarkModeTransition")},{default:ee(()=>[j(a,{value:p(t).isCustomizeDarkModeTransition,"onUpdate:value":p(t).setIsCustomizeDarkModeTransition},{checked:ee(()=>[j(s,{class:"text-14px text-white"})]),unchecked:ee(()=>[j(c,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.sider.inverted")},{default:ee(()=>[j(a,{value:p(t).sider.inverted,"onUpdate:value":p(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.header.inverted")},{default:ee(()=>[j(a,{value:p(t).header.inverted,"onUpdate:value":p(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.footer.inverted")},{default:ee(()=>[j(a,{value:p(t).footer.inverted,"onUpdate:value":p(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Vp={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Up=ie("path",{fill:"currentColor","fill-rule":"evenodd",d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},null,-1),jp=[Up];function Wp(e,t){return X(),fe("svg",Vp,[...jp])}const Kp={name:"ant-design-close-outlined",render:Wp},Gp=q({name:"DrawerButton",__name:"index",setup(e){const t=ut();return(n,o)=>{const r=Kp,l=ri,i=zt;return X(),se(i,{type:"primary",class:Ye([[{"!right-330px":p(t).settingDrawerVisible},p(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:p(t).toggleSettingDrawerVisible},{default:ee(()=>[p(t).settingDrawerVisible?(X(),se(r,{key:0,class:"text-24px"})):(X(),se(l,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),qp=q({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,n={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},o=P(()=>n[t.mode]);return(r,l)=>{const i=or;return X(),fe("div",{class:Ye(["border-2px rounded-6px cursor-pointer hover:border-primary",[r.checked?"border-primary":"border-transparent"]])},[j(i,{placement:o.value.placement,trigger:"hover"},{trigger:ee(()=>[ie("div",{class:Ye(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[r.mode.includes("vertical")?"flex":"flex-col"]])},[Lt(r.$slots,"default",{},void 0,!0)],2)]),default:ee(()=>[ie("span",null,Le(r.label),1)]),_:3},8,["placement"])],2)}}}),Xp=jt(qp,[["__scopeId","data-v-73ef6791"]]),St=e=>(Ba("data-v-0a5e67c9"),e=e(),Aa(),e),Yp=St(()=>ie("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),Zp=St(()=>ie("div",{class:"flex-1 flex-col gap-6px"},[ie("div",{class:"h-16px bg-primary rd-4px"}),ie("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Jp=St(()=>ie("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),Qp=St(()=>ie("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),ev=St(()=>ie("div",{class:"flex-1 flex-col gap-6px"},[ie("div",{class:"h-16px bg-primary rd-4px"}),ie("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),tv=St(()=>ie("div",{class:"h-16px bg-primary rd-4px"},null,-1)),nv=St(()=>ie("div",{class:"flex-1 flex gap-6px"},[ie("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),ov=St(()=>ie("div",{class:"h-16px bg-primary rd-4px"},null,-1)),rv=St(()=>ie("div",{class:"flex-1 flex gap-6px"},[ie("div",{class:"w-18px bg-primary:50 rd-4px"}),ie("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),lv=q({name:"LayoutMode",__name:"index",setup(e){const t=Ie();return(n,o)=>{const r=on,l=rn;return X(),fe(Te,null,[j(r,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.layoutModelTitle")),1)]),_:1}),j(l,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:ee(()=>[(X(!0),fe(Te,null,Vt(p(t).layout.modeList,i=>(X(),se(p(Xp),{key:i.value,mode:i.value,label:i.label,checked:i.value===p(t).layout.mode,onClick:a=>p(t).setLayoutMode(i.value)},{default:ee(()=>[i.value==="vertical"?(X(),fe(Te,{key:0},[Yp,Zp],64)):ot("",!0),i.value==="vertical-mix"?(X(),fe(Te,{key:1},[Jp,Qp,ev],64)):ot("",!0),i.value==="horizontal"?(X(),fe(Te,{key:2},[tv,nv],64)):ot("",!0),i.value==="horizontal-mix"?(X(),fe(Te,{key:3},[ov,rv],64)):ot("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),iv=jt(lv,[["__scopeId","data-v-0a5e67c9"]]),av=q({name:"PageFunc",__name:"index",setup(e){const t=Ie();return(n,o)=>{const r=on,l=Dl,i=ur,a=Sf,s=rn;return X(),fe(Te,null,[j(r,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.pageFunctionsTitle")),1)]),_:1}),j(s,{vertical:"",size:"large"},{default:ee(()=>[j(Fe,{label:p(be)("layout.settingDrawer.scrollMode")},{default:ee(()=>[j(l,{class:"w-120px",size:"small",value:p(t).scrollMode,options:p(t).scrollModeList,"onUpdate:value":p(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.fixedHeaderAndTab")},{default:ee(()=>[j(i,{value:p(t).fixedHeaderAndTab,"onUpdate:value":p(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.menu.horizontalPosition")},{default:ee(()=>[j(l,{class:"w-120px",size:"small",value:p(t).menu.horizontalPosition,options:p(t).menu.horizontalPositionList,"onUpdate:value":p(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.header.height")},{default:ee(()=>[j(a,{class:"w-120px",size:"small",value:p(t).header.height,step:1,"onUpdate:value":p(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.tab.height")},{default:ee(()=>[j(a,{class:"w-120px",size:"small",value:p(t).tab.height,step:1,"onUpdate:value":p(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.tab.isCache")},{default:ee(()=>[j(i,{value:p(t).tab.isCache,"onUpdate:value":p(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.sider.width")},{default:ee(()=>[j(a,{class:"w-120px",size:"small",value:p(t).sider.width,step:10,"onUpdate:value":p(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.sider.mixWidth")},{default:ee(()=>[j(a,{class:"w-120px",size:"small",value:p(t).sider.mixWidth,step:5,"onUpdate:value":p(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.footer.visible")},{default:ee(()=>[j(i,{value:p(t).footer.visible,"onUpdate:value":p(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.footer.fixed")},{default:ee(()=>[j(i,{value:p(t).footer.fixed,"onUpdate:value":p(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.footer.right")},{default:ee(()=>[j(i,{value:p(t).footer.right,"onUpdate:value":p(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),sv=q({name:"PageView",__name:"index",setup(e){const t=Ie();return(n,o)=>{const r=on,l=ur,i=Dl,a=rn;return X(),fe(Te,null,[j(r,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.pageViewTitle")),1)]),_:1}),j(a,{vertical:"",size:"large"},{default:ee(()=>[j(Fe,{label:p(be)("layout.settingDrawer.header.crumb.visible")},{default:ee(()=>[j(l,{value:p(t).header.crumb.visible,"onUpdate:value":p(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.header.crumb.icon")},{default:ee(()=>[j(l,{value:p(t).header.crumb.showIcon,"onUpdate:value":p(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.tab.visible")},{default:ee(()=>[j(l,{value:p(t).tab.visible,"onUpdate:value":p(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.tab.modeList.mode")},{default:ee(()=>[j(i,{class:"w-120px",size:"small",value:p(t).tab.mode,options:p(t).tab.modeList,"onUpdate:value":p(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.page.animate")},{default:ee(()=>[j(l,{value:p(t).page.animate,"onUpdate:value":p(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),j(Fe,{label:p(be)("layout.settingDrawer.page.animateMode")},{default:ee(()=>[j(i,{class:"w-120px",size:"small",value:p(t).page.animateMode,options:p(t).page.animateModeList,"onUpdate:value":p(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),dv={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},cv=ie("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),uv=[cv];function fv(e,t){return X(),fe("svg",dv,[...uv])}const hv={name:"ic-outline-check",render:fv},li=q({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,n=["#ffffff","#fff","rgb(255,255,255)"],o=P(()=>n.includes(t.color));return(r,l)=>{const i=hv;return X(),fe("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:Ct({backgroundColor:r.color})},[r.checked?(X(),se(i,{key:0,class:Ye([r.iconClass,o.value?"text-gray-700":"text-white"])},null,8,["class"])):ot("",!0)],4)}}}),pv={class:"flex-x-center"},vv={class:"text-center"},bv=q({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=Ie();function o(){t("close")}return(r,l)=>{const i=qa,a=Wl,s=Gl,c=Lf,f=jf,h=Fa;return X(),se(h,{show:r.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:o},{default:ee(()=>[ie("div",pv,[j(i,{type:"primary",size:24},{default:ee(()=>[st("中国传统颜色")]),_:1})]),j(f,null,{default:ee(()=>[(X(!0),fe(Te,null,Vt(p(ni),u=>(X(),se(c,{key:u.label,name:u.label,tab:u.label},{default:ee(()=>[j(s,{cols:8,"x-gap":16,"y-gap":8},{default:ee(()=>[(X(!0),fe(Te,null,Vt(u.data,b=>(X(),se(a,{key:b.label},{default:ee(()=>[j(li,{class:"!w-full !h-36px !rounded-4px",color:b.color,checked:b.color===p(n).themeColor,"icon-class":"text-20px",onClick:v=>p(n).setThemeColor(b.color)},null,8,["color","checked","onClick"]),ie("p",vv,Le(b.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),mv=q({name:"ThemeColorSelect",__name:"index",setup(e){const t=Ie(),{bool:n,setTrue:o,setFalse:r}=qo(),l=P(()=>qf(t.themeColor)),i=P(()=>l.value?"primary":"default");return(a,s)=>{const c=on,f=Wl,h=Gl,u=Mu,b=zt,v=rn;return X(),fe(Te,null,[j(c,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.systemThemeTitle")),1)]),_:1}),j(h,{cols:8,"x-gap":8,"y-gap":12},{default:ee(()=>[(X(!0),fe(Te,null,Vt(p(t).themeColorList,m=>(X(),se(f,{key:m,class:"flex-x-center"},{default:ee(()=>[j(p(li),{color:m,checked:m===p(t).themeColor,onClick:C=>p(t).setThemeColor(m)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),j(v,{vertical:!0,class:"pt-12px"},{default:ee(()=>[j(u,{value:p(t).themeColor,"show-alpha":!1,onUpdateValue:p(t).setThemeColor},null,8,["value","onUpdateValue"]),j(b,{block:!0,type:i.value,onClick:p(o)},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.systemTheme.moreColors")),1)]),_:1},8,["type","onClick"])]),_:1}),j(p(bv),{visible:p(n),onClose:p(r)},null,8,["visible","onClose"])],64)}}}),gv=q({name:"ThemeConfig",__name:"index",setup(e){const t=Ie(),n=D(),o=D(r());function r(){return JSON.stringify(t.$state)}function l(){var s;t.resetThemeStore(),(s=window.$message)==null||s.success(be("layout.settingDrawer.themeConfiguration.resetSuccess"))}function i(){if(!n.value)return;new Ya(n.value).on("success",()=>{var c;(c=window.$dialog)==null||c.success({title:be("layout.settingDrawer.themeConfiguration.operateSuccess"),content:be("layout.settingDrawer.themeConfiguration.copySuccess"),positiveText:be("layout.settingDrawer.themeConfiguration.confirmCopy")})})}const a=Se(()=>t.$state,()=>{o.value=r()},{deep:!0});return rt(()=>{i()}),cl(()=>{a()}),(s,c)=>{const f=on,h=zt,u=rn;return X(),fe(Te,null,[j(f,{"title-placement":"center"},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.themeConfiguration.title")),1)]),_:1}),dt(ie("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),class:"absolute opacity-0"},null,512),[[Oa,o.value]]),j(u,{vertical:""},{default:ee(()=>[ie("div",{ref_key:"copyRef",ref:n,"data-clipboard-target":"#themeConfigCopyTarget"},[j(h,{type:"primary",block:!0},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.themeConfiguration.copy")),1)]),_:1})],512),j(h,{type:"warning",block:!0,onClick:l},{default:ee(()=>[st(Le(p(be)("layout.settingDrawer.themeConfiguration.reset")),1)]),_:1})]),_:1})],64)}}}),xv=q({name:"SettingDrawer",__name:"index",setup(e){const t=ut(),n={}.VITE_VERCEL==="Y";return(o,r)=>{const l=cf,i=sf;return X(),fe(Te,null,[j(i,{show:p(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:p(t).closeSettingDrawer},{default:ee(()=>[j(l,{title:p(be)("layout.settingDrawer.title"),"native-scrollbar":!1},{default:ee(()=>[j(p(Hp)),j(p(iv)),j(p(mv)),j(p(av)),j(p(sv)),j(p(gv))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),p(n)?(X(),se(p(Gp),{key:0})):ot("",!0)],64)}}}),zv=q({name:"BasicLayout",__name:"index",setup(e){const t=ut(),n=Ie(),{mode:o,isMobile:r,headerProps:l,siderVisible:i,siderWidth:a,siderCollapsedWidth:s}=oi();return(c,f)=>{const h=Jc;return X(),fe(Te,null,[j(p(Na),{mode:p(o),"is-mobile":p(r),"scroll-mode":p(n).scrollMode,"scroll-el-id":p(t).scrollElId,"full-content":p(t).contentFull,"fixed-top":p(n).fixedHeaderAndTab,"header-height":p(n).header.height,"tab-visible":p(n).tab.visible,"tab-height":p(n).tab.height,"content-class":p(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":p(i),"sider-collapse":p(t).siderCollapse,"sider-width":p(a),"sider-collapsed-width":p(s),"footer-visible":p(n).footer.visible,"fixed-footer":p(n).footer.fixed,"right-footer":p(n).footer.right,onClickMobileSiderMask:f[0]||(f[0]=u=>p(t).setSiderCollapse(!0))},{header:ee(()=>[j(p(Dh),Ea(Da(p(l))),null,16)]),tab:ee(()=>[j(p(Xh))]),sider:ee(()=>[j(p($p))]),footer:ee(()=>[j(p(Rp))]),default:ee(()=>[j(p(Za))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(X(),se(h,{key:p(n).scrollMode,"listen-to":`#${p(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),j(p(xv))],64)}}});export{zv as default};
