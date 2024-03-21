import{co as Fe,i as Ae,cj as _e,cL as hn,w as re,d as M,cM as fe,cN as j,cO as fn,cP as H,C as ke,cF as vn,l as E,x as o,cd as pn,E as w,H as S,F as s,b2 as mn,a9 as Re,L as pe,b4 as gn,X as K,N as ae,U as bn,a3 as yn,b as C,cQ as wn,G as z,I as q,$ as xn,K as Ee,cR as Cn,at as Pn,q as Ce,m as Sn,aS as Mn,a6 as Pe,Q as zn,a0 as Tn,O as ve,P as Fn,R as An,S as te,W as _n,a8 as kn,V as Rn,aX as En,z as Se,k as Me,a4 as P,g as ze}from"./index-e2499c47.js";var Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$n=/^\w*$/;function In(t,a){if(Fe(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Ae(t)?!0:$n.test(t)||!Dn.test(t)||a!=null&&t in Object(a)}var Bn="Expected a function";function ge(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new TypeError(Bn);var r=function(){var u=arguments,p=a?a.apply(this,u):u[0],l=r.cache;if(l.has(p))return l.get(p);var f=t.apply(this,u);return r.cache=l.set(p,f)||l,f};return r.cache=new(ge.Cache||_e),r}ge.Cache=_e;var Wn=500;function Ln(t){var a=ge(t,function(u){return r.size===Wn&&r.clear(),u}),r=a.cache;return a}var Vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nn=/\\(\\)?/g,On=Ln(function(t){var a=[];return t.charCodeAt(0)===46&&a.push(""),t.replace(Vn,function(r,u,p,l){a.push(p?l.replace(Nn,"$1"):u||r)}),a});const Un=On;function jn(t,a){return Fe(t)?t:In(t,a)?[t]:Un(hn(t))}var Hn=1/0;function qn(t){if(typeof t=="string"||Ae(t))return t;var a=t+"";return a=="0"&&1/t==-Hn?"-0":a}function Kn(t,a){a=jn(a,t);for(var r=0,u=a.length;t!=null&&r<u;)t=t[qn(a[r++])];return r&&r==u?t:void 0}function Xr(t,a,r){var u=t==null?void 0:Kn(t,a);return u===void 0?r:u}function Xn(t,a){return re(t,r=>{r!==void 0&&(a.value=r)}),M(()=>t.value===void 0?a.value:t.value)}const Yn={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Zn=Yn;var Gn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jn=function(a,r,u){var p,l=Gn[a];return typeof l=="string"?p=l:r===1?p=l.one:p=l.other.replace("{{count}}",r.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+p:p+" ago":p};const Qn=Jn;var er={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rr={date:fe({formats:er,defaultWidth:"full"}),time:fe({formats:tr,defaultWidth:"full"}),dateTime:fe({formats:nr,defaultWidth:"full"})};const ar=rr;var or={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ir=function(a,r,u,p){return or[a]};const lr=ir;var sr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ur={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},cr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},hr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vr=function(a,r){var u=Number(a),p=u%100;if(p>20||p<10)switch(p%10){case 1:return u+"st";case 2:return u+"nd";case 3:return u+"rd"}return u+"th"},pr={ordinalNumber:vr,era:j({values:sr,defaultWidth:"wide"}),quarter:j({values:ur,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:j({values:cr,defaultWidth:"wide"}),day:j({values:dr,defaultWidth:"wide"}),dayPeriod:j({values:hr,defaultWidth:"wide",formattingValues:fr,defaultFormattingWidth:"wide"})};const mr=pr;var gr=/^(\d+)(th|st|nd|rd)?/i,br=/\d+/i,yr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wr={any:[/^b/i,/^(a|c)/i]},xr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Cr={any:[/1/i,/2/i,/3/i,/4/i]},Pr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Sr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Tr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Fr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ar={ordinalNumber:fn({matchPattern:gr,parsePattern:br,valueCallback:function(a){return parseInt(a,10)}}),era:H({matchPatterns:yr,defaultMatchWidth:"wide",parsePatterns:wr,defaultParseWidth:"any"}),quarter:H({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:Cr,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:H({matchPatterns:Pr,defaultMatchWidth:"wide",parsePatterns:Sr,defaultParseWidth:"any"}),day:H({matchPatterns:Mr,defaultMatchWidth:"wide",parsePatterns:zr,defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:Tr,defaultMatchWidth:"any",parsePatterns:Fr,defaultParseWidth:"any"})};const _r=Ar;var kr={code:"en-US",formatDistance:Qn,formatLong:ar,formatRelative:lr,localize:mr,match:_r,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Rr=kr,Er={name:"en-US",locale:Rr},Dr=Er;function $r(t){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=ke(vn,null)||{},u=M(()=>{var l,f;return(f=(l=a==null?void 0:a.value)===null||l===void 0?void 0:l[t])!==null&&f!==void 0?f:Zn[t]});return{dateLocaleRef:M(()=>{var l;return(l=r==null?void 0:r.value)!==null&&l!==void 0?l:Dr}),localeRef:u}}const Ir=E({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Br=E({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Wr=E({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Lr=pn("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Vr=w("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[S(">",[s("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[S("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),S("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),s("placeholder",`
 display: flex;
 `),s("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[mn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),me=E({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Re("-base-clear",Vr,pe(t,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:t}=this;return o("div",{class:`${t}-base-clear`},o(gn,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},K(this.$slots.icon,()=>[o(ae,{clsPrefix:t},{default:()=>o(Lr,null)})])):o("div",{key:"icon",class:`${t}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Nr=E({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:a}){return()=>{const{clsPrefix:r}=t;return o(bn,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?o(me,{clsPrefix:r,show:t.showClear,onClear:t.onClear},{placeholder:()=>o(ae,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>K(a.default,()=>[o(Wr,null)])})}):null})}}}),De=yn("n-input");function Or(t){let a=0;for(const r of t)a++;return a}function ne(t){return t===""||t==null}function Ur(t){const a=C(null);function r(){const{value:l}=t;if(!(l!=null&&l.focus)){p();return}const{selectionStart:f,selectionEnd:d,value:v}=l;if(f==null||d==null){p();return}a.value={start:f,end:d,beforeText:v.slice(0,f),afterText:v.slice(d)}}function u(){var l;const{value:f}=a,{value:d}=t;if(!f||!d)return;const{value:v}=d,{start:h,beforeText:c,afterText:b}=f;let x=v.length;if(v.endsWith(b))x=v.length-b.length;else if(v.startsWith(c))x=c.length;else{const D=c[h-1],T=v.indexOf(D,h-1);T!==-1&&(x=T+1)}(l=d.setSelectionRange)===null||l===void 0||l.call(d,x,x)}function p(){a.value=null}return re(t,p),{recordCursor:r,restoreCursor:u}}const Te=E({name:"InputWordCount",setup(t,{slots:a}){const{mergedValueRef:r,maxlengthRef:u,mergedClsPrefixRef:p,countGraphemesRef:l}=ke(De),f=M(()=>{const{value:d}=r;return d===null||Array.isArray(d)?0:(l.value||Or)(d)});return()=>{const{value:d}=u,{value:v}=r;return o("span",{class:`${p.value}-input-word-count`},wn(a.default,{value:v===null||Array.isArray(v)?"":v},()=>[d===void 0?f.value:`${f.value} / ${d}`]))}}}),jr=w("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),S("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),S("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),z("round",[q("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[S("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[s("placeholder","overflow: visible;")]),q("autosize","width: 100%;"),z("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),w("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),q("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[w("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[w("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[w("icon",`
 color: var(--n-icon-color);
 `),w("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),w("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),s("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),q("disabled",[s("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[S("&:hover",`
 color: var(--n-icon-color-hover);
 `),S("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),S("&:hover",[s("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[w("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),w("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[w("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),S(">",[w("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),w("base-icon",`
 font-size: var(--n-icon-size);
 `)]),w("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>z(`${t}-status`,[q("disabled",[w("base-loading",`
 color: var(--n-loading-color-${t})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),s("state-border",`
 border: var(--n-border-${t});
 `),S("&:hover",[s("state-border",`
 border: var(--n-border-hover-${t});
 `)]),S("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${t});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Hr=w("input",[z("disabled",[s("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),qr=Object.assign(Object.assign({},Ee.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Yr=E({name:"Input",props:qr,setup(t){const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:u,mergedRtlRef:p}=xn(t),l=Ee("Input","-input",jr,En,t,a);Cn&&Re("-input-safari",Hr,a);const f=C(null),d=C(null),v=C(null),h=C(null),c=C(null),b=C(null),x=C(null),D=Ur(x),T=C(null),{localeRef:$e}=$r("Input"),X=C(t.defaultValue),Ie=pe(t,"value"),F=Xn(Ie,X),W=Pn(t),{mergedSizeRef:oe,mergedDisabledRef:$,mergedStatusRef:Be}=W,I=C(!1),L=C(!1),A=C(!1),V=C(!1);let ie=null;const le=M(()=>{const{placeholder:e,pair:n}=t;return n?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[$e.value.placeholder]:[e]}),We=M(()=>{const{value:e}=A,{value:n}=F,{value:i}=le;return!e&&(ne(n)||Array.isArray(n)&&ne(n[0]))&&i[0]}),Le=M(()=>{const{value:e}=A,{value:n}=F,{value:i}=le;return!e&&i[1]&&(ne(n)||Array.isArray(n)&&ne(n[1]))}),se=Ce(()=>t.internalForceFocus||I.value),Ve=Ce(()=>{if($.value||t.readonly||!t.clearable||!se.value&&!L.value)return!1;const{value:e}=F,{value:n}=se;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(L.value||n):!!e&&(L.value||n)}),ue=M(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),N=C(!1),Ne=M(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(n=>({textDecoration:n})):[{textDecoration:e}]:["",""]}),be=C(void 0),Oe=()=>{var e,n;if(t.type==="textarea"){const{autosize:i}=t;if(i&&(be.value=(n=(e=T.value)===null||e===void 0?void 0:e.$el)===null||n===void 0?void 0:n.offsetWidth),!d.value||typeof i=="boolean")return;const{paddingTop:g,paddingBottom:y,lineHeight:m}=window.getComputedStyle(d.value),_=Number(g.slice(0,-2)),k=Number(y.slice(0,-2)),R=Number(m.slice(0,-2)),{value:O}=v;if(!O)return;if(i.minRows){const U=Math.max(i.minRows,1),he=`${_+k+R*U}px`;O.style.minHeight=he}if(i.maxRows){const U=`${_+k+R*i.maxRows}px`;O.style.maxHeight=U}}},Ue=M(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});Sn(()=>{const{value:e}=F;Array.isArray(e)||de(e)});const je=Mn().proxy;function Y(e){const{onUpdateValue:n,"onUpdate:value":i,onInput:g}=t,{nTriggerFormInput:y}=W;n&&P(n,e),i&&P(i,e),g&&P(g,e),X.value=e,y()}function Z(e){const{onChange:n}=t,{nTriggerFormChange:i}=W;n&&P(n,e),X.value=e,i()}function He(e){const{onBlur:n}=t,{nTriggerFormBlur:i}=W;n&&P(n,e),i()}function qe(e){const{onFocus:n}=t,{nTriggerFormFocus:i}=W;n&&P(n,e),i()}function Ke(e){const{onClear:n}=t;n&&P(n,e)}function Xe(e){const{onInputBlur:n}=t;n&&P(n,e)}function Ye(e){const{onInputFocus:n}=t;n&&P(n,e)}function Ze(){const{onDeactivate:e}=t;e&&P(e)}function Ge(){const{onActivate:e}=t;e&&P(e)}function Je(e){const{onClick:n}=t;n&&P(n,e)}function Qe(e){const{onWrapperFocus:n}=t;n&&P(n,e)}function et(e){const{onWrapperBlur:n}=t;n&&P(n,e)}function tt(){A.value=!0}function nt(e){A.value=!1,e.target===b.value?G(e,1):G(e,0)}function G(e,n=0,i="input"){const g=e.target.value;if(de(g),e instanceof InputEvent&&!e.isComposing&&(A.value=!1),t.type==="textarea"){const{value:m}=T;m&&m.syncUnifiedContainer()}if(ie=g,A.value)return;D.recordCursor();const y=rt(g);if(y)if(!t.pair)i==="input"?Y(g):Z(g);else{let{value:m}=F;Array.isArray(m)?m=[m[0],m[1]]:m=["",""],m[n]=g,i==="input"?Y(m):Z(m)}je.$forceUpdate(),y||Se(D.restoreCursor)}function rt(e){const{countGraphemes:n,maxlength:i,minlength:g}=t;if(n){let m;if(i!==void 0&&(m===void 0&&(m=n(e)),m>Number(i))||g!==void 0&&(m===void 0&&(m=n(e)),m<Number(i)))return!1}const{allowInput:y}=t;return typeof y=="function"?y(e):!0}function at(e){Xe(e),e.relatedTarget===f.value&&Ze(),e.relatedTarget!==null&&(e.relatedTarget===c.value||e.relatedTarget===b.value||e.relatedTarget===d.value)||(V.value=!1),J(e,"blur"),x.value=null}function ot(e,n){Ye(e),I.value=!0,V.value=!0,Ge(),J(e,"focus"),n===0?x.value=c.value:n===1?x.value=b.value:n===2&&(x.value=d.value)}function it(e){t.passivelyActivated&&(et(e),J(e,"blur"))}function lt(e){t.passivelyActivated&&(I.value=!0,Qe(e),J(e,"focus"))}function J(e,n){e.relatedTarget!==null&&(e.relatedTarget===c.value||e.relatedTarget===b.value||e.relatedTarget===d.value||e.relatedTarget===f.value)||(n==="focus"?(qe(e),I.value=!0):n==="blur"&&(He(e),I.value=!1))}function st(e,n){G(e,n,"change")}function ut(e){Je(e)}function ct(e){Ke(e),t.pair?(Y(["",""]),Z(["",""])):(Y(""),Z(""))}function dt(e){const{onMousedown:n}=t;n&&n(e);const{tagName:i}=e.target;if(i!=="INPUT"&&i!=="TEXTAREA"){if(t.resizable){const{value:g}=f;if(g){const{left:y,top:m,width:_,height:k}=g.getBoundingClientRect(),R=14;if(y+_-R<e.clientX&&e.clientX<y+_&&m+k-R<e.clientY&&e.clientY<m+k)return}}e.preventDefault(),I.value||ye()}}function ht(){var e;L.value=!0,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ft(){var e;L.value=!1,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function vt(){$.value||ue.value==="click"&&(N.value=!N.value)}function pt(e){if($.value)return;e.preventDefault();const n=g=>{g.preventDefault(),ze("mouseup",document,n)};if(Me("mouseup",document,n),ue.value!=="mousedown")return;N.value=!0;const i=()=>{N.value=!1,ze("mouseup",document,i)};Me("mouseup",document,i)}function mt(e){var n;switch((n=t.onKeydown)===null||n===void 0||n.call(t,e),e.key){case"Escape":ce();break;case"Enter":gt(e);break}}function gt(e){var n,i;if(t.passivelyActivated){const{value:g}=V;if(g){t.internalDeactivateOnEnter&&ce();return}e.preventDefault(),t.type==="textarea"?(n=d.value)===null||n===void 0||n.focus():(i=c.value)===null||i===void 0||i.focus()}}function ce(){t.passivelyActivated&&(V.value=!1,Se(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function ye(){var e,n,i;$.value||(t.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((n=d.value)===null||n===void 0||n.focus(),(i=c.value)===null||i===void 0||i.focus()))}function bt(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function yt(){var e,n;(e=d.value)===null||e===void 0||e.select(),(n=c.value)===null||n===void 0||n.select()}function wt(){$.value||(d.value?d.value.focus():c.value&&c.value.focus())}function xt(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ce()}function Ct(e){if(t.type==="textarea"){const{value:n}=d;n==null||n.scrollTo(e)}else{const{value:n}=c;n==null||n.scrollTo(e)}}function de(e){const{type:n,pair:i,autosize:g}=t;if(!i&&g)if(n==="textarea"){const{value:y}=v;y&&(y.textContent=(e??"")+`\r
`)}else{const{value:y}=h;y&&(e?y.textContent=e:y.innerHTML="&nbsp;")}}function Pt(){Oe()}const we=C({top:"0"});function St(e){var n;const{scrollTop:i}=e.target;we.value.top=`${-i}px`,(n=T.value)===null||n===void 0||n.syncUnifiedContainer()}let Q=null;Pe(()=>{const{autosize:e,type:n}=t;e&&n==="textarea"?Q=re(F,i=>{!Array.isArray(i)&&i!==ie&&de(i)}):Q==null||Q()});let ee=null;Pe(()=>{t.type==="textarea"?ee=re(F,e=>{var n;!Array.isArray(e)&&e!==ie&&((n=T.value)===null||n===void 0||n.syncUnifiedContainer())}):ee==null||ee()}),zn(De,{mergedValueRef:F,maxlengthRef:Ue,mergedClsPrefixRef:a,countGraphemesRef:pe(t,"countGraphemes")});const Mt={wrapperElRef:f,inputElRef:c,textareaElRef:d,isCompositing:A,focus:ye,blur:bt,select:yt,deactivate:xt,activate:wt,scrollTo:Ct},zt=Tn("Input",p,a),xe=M(()=>{const{value:e}=oe,{common:{cubicBezierEaseInOut:n},self:{color:i,borderRadius:g,textColor:y,caretColor:m,caretColorError:_,caretColorWarning:k,textDecorationColor:R,border:O,borderDisabled:U,borderHover:he,borderFocus:Tt,placeholderColor:Ft,placeholderColorDisabled:At,lineHeightTextarea:_t,colorDisabled:kt,colorFocus:Rt,textColorDisabled:Et,boxShadowFocus:Dt,iconSize:$t,colorFocusWarning:It,boxShadowFocusWarning:Bt,borderWarning:Wt,borderFocusWarning:Lt,borderHoverWarning:Vt,colorFocusError:Nt,boxShadowFocusError:Ot,borderError:Ut,borderFocusError:jt,borderHoverError:Ht,clearSize:qt,clearColor:Kt,clearColorHover:Xt,clearColorPressed:Yt,iconColor:Zt,iconColorDisabled:Gt,suffixTextColor:Jt,countTextColor:Qt,countTextColorDisabled:en,iconColorHover:tn,iconColorPressed:nn,loadingColor:rn,loadingColorError:an,loadingColorWarning:on,[ve("padding",e)]:ln,[ve("fontSize",e)]:sn,[ve("height",e)]:un}}=l.value,{left:cn,right:dn}=Fn(ln);return{"--n-bezier":n,"--n-count-text-color":Qt,"--n-count-text-color-disabled":en,"--n-color":i,"--n-font-size":sn,"--n-border-radius":g,"--n-height":un,"--n-padding-left":cn,"--n-padding-right":dn,"--n-text-color":y,"--n-caret-color":m,"--n-text-decoration-color":R,"--n-border":O,"--n-border-disabled":U,"--n-border-hover":he,"--n-border-focus":Tt,"--n-placeholder-color":Ft,"--n-placeholder-color-disabled":At,"--n-icon-size":$t,"--n-line-height-textarea":_t,"--n-color-disabled":kt,"--n-color-focus":Rt,"--n-text-color-disabled":Et,"--n-box-shadow-focus":Dt,"--n-loading-color":rn,"--n-caret-color-warning":k,"--n-color-focus-warning":It,"--n-box-shadow-focus-warning":Bt,"--n-border-warning":Wt,"--n-border-focus-warning":Lt,"--n-border-hover-warning":Vt,"--n-loading-color-warning":on,"--n-caret-color-error":_,"--n-color-focus-error":Nt,"--n-box-shadow-focus-error":Ot,"--n-border-error":Ut,"--n-border-focus-error":jt,"--n-border-hover-error":Ht,"--n-loading-color-error":an,"--n-clear-color":Kt,"--n-clear-size":qt,"--n-clear-color-hover":Xt,"--n-clear-color-pressed":Yt,"--n-icon-color":Zt,"--n-icon-color-hover":tn,"--n-icon-color-pressed":nn,"--n-icon-color-disabled":Gt,"--n-suffix-text-color":Jt}}),B=u?An("input",M(()=>{const{value:e}=oe;return e[0]}),xe,t):void 0;return Object.assign(Object.assign({},Mt),{wrapperElRef:f,inputElRef:c,inputMirrorElRef:h,inputEl2Ref:b,textareaElRef:d,textareaMirrorElRef:v,textareaScrollbarInstRef:T,rtlEnabled:zt,uncontrolledValue:X,mergedValue:F,passwordVisible:N,mergedPlaceholder:le,showPlaceholder1:We,showPlaceholder2:Le,mergedFocus:se,isComposing:A,activated:V,showClearButton:Ve,mergedSize:oe,mergedDisabled:$,textDecorationStyle:Ne,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:ue,placeholderStyle:we,mergedStatus:Be,textAreaScrollContainerWidth:be,handleTextAreaScroll:St,handleCompositionStart:tt,handleCompositionEnd:nt,handleInput:G,handleInputBlur:at,handleInputFocus:ot,handleWrapperBlur:it,handleWrapperFocus:lt,handleMouseEnter:ht,handleMouseLeave:ft,handleMouseDown:dt,handleChange:st,handleClick:ut,handleClear:ct,handlePasswordToggleClick:vt,handlePasswordToggleMousedown:pt,handleWrapperKeydown:mt,handleTextAreaMirrorResize:Pt,getTextareaScrollContainer:()=>d.value,mergedTheme:l,cssVars:u?void 0:xe,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender})},render(){var t,a;const{mergedClsPrefix:r,mergedStatus:u,themeClass:p,type:l,countGraphemes:f,onRender:d}=this,v=this.$slots;return d==null||d(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,p,u&&`${r}-input--${u}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:l==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&l!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},te(v.prefix,h=>h&&o("div",{class:`${r}-input__prefix`},h)),l==="textarea"?o(_n,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var h,c;const{textAreaScrollContainerWidth:b}=this,x={width:this.autosize&&b&&`${b}px`};return o(kn,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(c=this.inputProps)===null||c===void 0?void 0:c.style,x],onBlur:this.handleInputBlur,onFocus:D=>{this.handleInputFocus(D,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(Rn,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:l==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":l},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,0)},onInput:h=>{this.handleInput(h,0)},onChange:h=>{this.handleChange(h,0)}})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&te(v.suffix,h=>h||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[te(v["clear-icon-placeholder"],c=>(this.clearable||c)&&o(me,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>c,icon:()=>{var b,x;return(x=(b=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(b)}})),this.internalLoadingBeforeSuffix?null:h,this.loading!==void 0?o(Nr,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?h:null,this.showCount&&this.type!=="textarea"?o(Te,null,{default:c=>{var b;return(b=v.count)===null||b===void 0?void 0:b.call(v,c)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?K(v["password-visible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(Ir,null)})]):K(v["password-invisible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(Br,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},K(v.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,1)},onInput:h=>{this.handleInput(h,1)},onChange:h=>{this.handleChange(h,1)}}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),te(v.suffix,h=>(this.clearable||h)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(me,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var c;return(c=v["clear-icon"])===null||c===void 0?void 0:c.call(v)},placeholder:()=>{var c;return(c=v["clear-icon-placeholder"])===null||c===void 0?void 0:c.call(v)}}),h]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&l==="textarea"?o(Te,null,{default:h=>{var c;const{renderCount:b}=this;return b?b(h):(c=v.count)===null||c===void 0?void 0:c.call(v,h)}}):null)}});export{Nr as N,Yr as _,$r as a,Kn as b,jn as c,Xr as g,In as i,qn as t,Xn as u};
