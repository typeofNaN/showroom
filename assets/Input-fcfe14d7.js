import{cm as Fe,i as Ae,ch as _e,cJ as hn,bJ as fn,w as re,d as M,cK as fe,cL as H,cM as vn,cN as j,C as ke,cD as pn,l as D,x as o,cb as mn,E as w,H as S,F as u,b2 as gn,a9 as Re,L as pe,b4 as bn,X as q,N as ae,U as yn,a3 as wn,b as C,cO as xn,G as z,I as K,$ as Cn,K as De,cP as Pn,at as Sn,q as Ce,m as Mn,aS as zn,a6 as Pe,Q as Tn,a0 as Fn,O as ve,P as An,R as _n,S as te,W as kn,a8 as Rn,V as Dn,aX as En,z as Se,k as Me,a4 as P,g as ze}from"./index-39a85bc2.js";var $n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bn=/^\w*$/;function In(t,a){if(Fe(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Ae(t)?!0:Bn.test(t)||!$n.test(t)||a!=null&&t in Object(a)}var Wn="Expected a function";function ge(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new TypeError(Wn);var r=function(){var l=arguments,p=a?a.apply(this,l):l[0],s=r.cache;if(s.has(p))return s.get(p);var f=t.apply(this,l);return r.cache=s.set(p,f)||s,f};return r.cache=new(ge.Cache||_e),r}ge.Cache=_e;var Ln=500;function Vn(t){var a=ge(t,function(l){return r.size===Ln&&r.clear(),l}),r=a.cache;return a}var Nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,On=/\\(\\)?/g,Un=Vn(function(t){var a=[];return t.charCodeAt(0)===46&&a.push(""),t.replace(Nn,function(r,l,p,s){a.push(p?s.replace(On,"$1"):l||r)}),a});const Hn=Un;function jn(t,a){return Fe(t)?t:In(t,a)?[t]:Hn(hn(t))}var Kn=1/0;function qn(t){if(typeof t=="string"||Ae(t))return t;var a=t+"";return a=="0"&&1/t==-Kn?"-0":a}function Xn(t,a){a=jn(a,t);for(var r=0,l=a.length;t!=null&&r<l;)t=t[qn(a[r++])];return r&&r==l?t:void 0}function Yr(t,a,r){var l=t==null?void 0:Xn(t,a);return l===void 0?r:l}function Jr(t=!1){const{bool:a,setTrue:r,setFalse:l}=fn(t);return{loading:a,startLoading:r,endLoading:l}}function Yn(t,a){return re(t,r=>{r!==void 0&&(a.value=r)}),M(()=>t.value===void 0?a.value:t.value)}const Jn={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Zn=Jn;var Gn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qn=function(a,r,l){var p,s=Gn[a];return typeof s=="string"?p=s:r===1?p=s.one:p=s.other.replace("{{count}}",r.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+p:p+" ago":p};const er=Qn;var tr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},nr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},rr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ar={date:fe({formats:tr,defaultWidth:"full"}),time:fe({formats:nr,defaultWidth:"full"}),dateTime:fe({formats:rr,defaultWidth:"full"})};const or=ar;var ir={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lr=function(a,r,l,p){return ir[a]};const sr=lr;var ur={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pr=function(a,r){var l=Number(a),p=l%100;if(p>20||p<10)switch(p%10){case 1:return l+"st";case 2:return l+"nd";case 3:return l+"rd"}return l+"th"},mr={ordinalNumber:pr,era:H({values:ur,defaultWidth:"wide"}),quarter:H({values:cr,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:H({values:dr,defaultWidth:"wide"}),day:H({values:hr,defaultWidth:"wide"}),dayPeriod:H({values:fr,defaultWidth:"wide",formattingValues:vr,defaultFormattingWidth:"wide"})};const gr=mr;var br=/^(\d+)(th|st|nd|rd)?/i,yr=/\d+/i,wr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xr={any:[/^b/i,/^(a|c)/i]},Cr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pr={any:[/1/i,/2/i,/3/i,/4/i]},Sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Tr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Fr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ar={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_r={ordinalNumber:vn({matchPattern:br,parsePattern:yr,valueCallback:function(a){return parseInt(a,10)}}),era:j({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:xr,defaultParseWidth:"any"}),quarter:j({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:j({matchPatterns:Sr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),day:j({matchPatterns:zr,defaultMatchWidth:"wide",parsePatterns:Tr,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:Fr,defaultMatchWidth:"any",parsePatterns:Ar,defaultParseWidth:"any"})};const kr=_r;var Rr={code:"en-US",formatDistance:er,formatLong:or,formatRelative:sr,localize:gr,match:kr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Dr=Rr,Er={name:"en-US",locale:Dr},$r=Er;function Br(t){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=ke(pn,null)||{},l=M(()=>{var s,f;return(f=(s=a==null?void 0:a.value)===null||s===void 0?void 0:s[t])!==null&&f!==void 0?f:Zn[t]});return{dateLocaleRef:M(()=>{var s;return(s=r==null?void 0:r.value)!==null&&s!==void 0?s:$r}),localeRef:l}}const Ir=D({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Wr=D({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Lr=D({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Vr=mn("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Nr=w("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[S(">",[u("clear",`
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
 `)]),u("placeholder",`
 display: flex;
 `),u("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[gn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),me=D({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Re("-base-clear",Nr,pe(t,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:t}=this;return o("div",{class:`${t}-base-clear`},o(bn,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},q(this.$slots.icon,()=>[o(ae,{clsPrefix:t},{default:()=>o(Vr,null)})])):o("div",{key:"icon",class:`${t}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Or=D({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:a}){return()=>{const{clsPrefix:r}=t;return o(yn,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?o(me,{clsPrefix:r,show:t.showClear,onClear:t.onClear},{placeholder:()=>o(ae,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>q(a.default,()=>[o(Lr,null)])})}):null})}}}),Ee=wn("n-input");function Ur(t){let a=0;for(const r of t)a++;return a}function ne(t){return t===""||t==null}function Hr(t){const a=C(null);function r(){const{value:s}=t;if(!(s!=null&&s.focus)){p();return}const{selectionStart:f,selectionEnd:d,value:v}=s;if(f==null||d==null){p();return}a.value={start:f,end:d,beforeText:v.slice(0,f),afterText:v.slice(d)}}function l(){var s;const{value:f}=a,{value:d}=t;if(!f||!d)return;const{value:v}=d,{start:h,beforeText:c,afterText:b}=f;let x=v.length;if(v.endsWith(b))x=v.length-b.length;else if(v.startsWith(c))x=c.length;else{const E=c[h-1],T=v.indexOf(E,h-1);T!==-1&&(x=T+1)}(s=d.setSelectionRange)===null||s===void 0||s.call(d,x,x)}function p(){a.value=null}return re(t,p),{recordCursor:r,restoreCursor:l}}const Te=D({name:"InputWordCount",setup(t,{slots:a}){const{mergedValueRef:r,maxlengthRef:l,mergedClsPrefixRef:p,countGraphemesRef:s}=ke(Ee),f=M(()=>{const{value:d}=r;return d===null||Array.isArray(d)?0:(s.value||Ur)(d)});return()=>{const{value:d}=l,{value:v}=r;return o("span",{class:`${p.value}-input-word-count`},xn(a.default,{value:v===null||Array.isArray(v)?"":v},()=>[d===void 0?f.value:`${f.value} / ${d}`]))}}}),jr=w("input",`
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
`,[u("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),u("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),u("input-el, textarea-el",`
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
 `),S("&:-webkit-autofill ~",[u("placeholder","display: none;")])]),z("round",[K("textarea","border-radius: calc(var(--n-height) / 2);")]),u("placeholder",`
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
 `)]),z("textarea",[u("placeholder","overflow: visible;")]),K("autosize","width: 100%;"),z("autosize",[u("textarea-el, input-el",`
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
 `),u("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),u("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("+",[u("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),K("textarea",[u("placeholder","white-space: nowrap;")]),u("eye",`
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
 `)]),u("textarea-el, textarea-mirror, placeholder",`
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
 `),u("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[u("input-el, placeholder","text-align: center;"),u("separator",`
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
 `,[u("border","border: var(--n-border-disabled);"),u("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),u("placeholder","color: var(--n-placeholder-color-disabled);"),u("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),w("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),u("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),K("disabled",[u("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[S("&:hover",`
 color: var(--n-icon-color-hover);
 `),S("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),S("&:hover",[u("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[u("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u("border, state-border",`
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
 `),u("state-border",`
 border-color: #0000;
 z-index: 1;
 `),u("prefix","margin-right: 4px;"),u("suffix",`
 margin-left: 4px;
 `),u("suffix, prefix",`
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
 `,[u("placeholder",[w("base-icon",`
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
 `),["warning","error"].map(t=>z(`${t}-status`,[K("disabled",[w("base-loading",`
 color: var(--n-loading-color-${t})
 `),u("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),u("state-border",`
 border: var(--n-border-${t});
 `),S("&:hover",[u("state-border",`
 border: var(--n-border-hover-${t});
 `)]),S("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${t});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Kr=w("input",[z("disabled",[u("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),qr=Object.assign(Object.assign({},De.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Zr=D({name:"Input",props:qr,setup(t){const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:l,mergedRtlRef:p}=Cn(t),s=De("Input","-input",jr,En,t,a);Pn&&Re("-input-safari",Kr,a);const f=C(null),d=C(null),v=C(null),h=C(null),c=C(null),b=C(null),x=C(null),E=Hr(x),T=C(null),{localeRef:$e}=Br("Input"),X=C(t.defaultValue),Be=pe(t,"value"),F=Yn(Be,X),W=Sn(t),{mergedSizeRef:oe,mergedDisabledRef:$,mergedStatusRef:Ie}=W,B=C(!1),L=C(!1),A=C(!1),V=C(!1);let ie=null;const le=M(()=>{const{placeholder:e,pair:n}=t;return n?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[$e.value.placeholder]:[e]}),We=M(()=>{const{value:e}=A,{value:n}=F,{value:i}=le;return!e&&(ne(n)||Array.isArray(n)&&ne(n[0]))&&i[0]}),Le=M(()=>{const{value:e}=A,{value:n}=F,{value:i}=le;return!e&&i[1]&&(ne(n)||Array.isArray(n)&&ne(n[1]))}),se=Ce(()=>t.internalForceFocus||B.value),Ve=Ce(()=>{if($.value||t.readonly||!t.clearable||!se.value&&!L.value)return!1;const{value:e}=F,{value:n}=se;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(L.value||n):!!e&&(L.value||n)}),ue=M(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),N=C(!1),Ne=M(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(n=>({textDecoration:n})):[{textDecoration:e}]:["",""]}),be=C(void 0),Oe=()=>{var e,n;if(t.type==="textarea"){const{autosize:i}=t;if(i&&(be.value=(n=(e=T.value)===null||e===void 0?void 0:e.$el)===null||n===void 0?void 0:n.offsetWidth),!d.value||typeof i=="boolean")return;const{paddingTop:g,paddingBottom:y,lineHeight:m}=window.getComputedStyle(d.value),_=Number(g.slice(0,-2)),k=Number(y.slice(0,-2)),R=Number(m.slice(0,-2)),{value:O}=v;if(!O)return;if(i.minRows){const U=Math.max(i.minRows,1),he=`${_+k+R*U}px`;O.style.minHeight=he}if(i.maxRows){const U=`${_+k+R*i.maxRows}px`;O.style.maxHeight=U}}},Ue=M(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});Mn(()=>{const{value:e}=F;Array.isArray(e)||de(e)});const He=zn().proxy;function Y(e){const{onUpdateValue:n,"onUpdate:value":i,onInput:g}=t,{nTriggerFormInput:y}=W;n&&P(n,e),i&&P(i,e),g&&P(g,e),X.value=e,y()}function J(e){const{onChange:n}=t,{nTriggerFormChange:i}=W;n&&P(n,e),X.value=e,i()}function je(e){const{onBlur:n}=t,{nTriggerFormBlur:i}=W;n&&P(n,e),i()}function Ke(e){const{onFocus:n}=t,{nTriggerFormFocus:i}=W;n&&P(n,e),i()}function qe(e){const{onClear:n}=t;n&&P(n,e)}function Xe(e){const{onInputBlur:n}=t;n&&P(n,e)}function Ye(e){const{onInputFocus:n}=t;n&&P(n,e)}function Je(){const{onDeactivate:e}=t;e&&P(e)}function Ze(){const{onActivate:e}=t;e&&P(e)}function Ge(e){const{onClick:n}=t;n&&P(n,e)}function Qe(e){const{onWrapperFocus:n}=t;n&&P(n,e)}function et(e){const{onWrapperBlur:n}=t;n&&P(n,e)}function tt(){A.value=!0}function nt(e){A.value=!1,e.target===b.value?Z(e,1):Z(e,0)}function Z(e,n=0,i="input"){const g=e.target.value;if(de(g),e instanceof InputEvent&&!e.isComposing&&(A.value=!1),t.type==="textarea"){const{value:m}=T;m&&m.syncUnifiedContainer()}if(ie=g,A.value)return;E.recordCursor();const y=rt(g);if(y)if(!t.pair)i==="input"?Y(g):J(g);else{let{value:m}=F;Array.isArray(m)?m=[m[0],m[1]]:m=["",""],m[n]=g,i==="input"?Y(m):J(m)}He.$forceUpdate(),y||Se(E.restoreCursor)}function rt(e){const{countGraphemes:n,maxlength:i,minlength:g}=t;if(n){let m;if(i!==void 0&&(m===void 0&&(m=n(e)),m>Number(i))||g!==void 0&&(m===void 0&&(m=n(e)),m<Number(i)))return!1}const{allowInput:y}=t;return typeof y=="function"?y(e):!0}function at(e){Xe(e),e.relatedTarget===f.value&&Je(),e.relatedTarget!==null&&(e.relatedTarget===c.value||e.relatedTarget===b.value||e.relatedTarget===d.value)||(V.value=!1),G(e,"blur"),x.value=null}function ot(e,n){Ye(e),B.value=!0,V.value=!0,Ze(),G(e,"focus"),n===0?x.value=c.value:n===1?x.value=b.value:n===2&&(x.value=d.value)}function it(e){t.passivelyActivated&&(et(e),G(e,"blur"))}function lt(e){t.passivelyActivated&&(B.value=!0,Qe(e),G(e,"focus"))}function G(e,n){e.relatedTarget!==null&&(e.relatedTarget===c.value||e.relatedTarget===b.value||e.relatedTarget===d.value||e.relatedTarget===f.value)||(n==="focus"?(Ke(e),B.value=!0):n==="blur"&&(je(e),B.value=!1))}function st(e,n){Z(e,n,"change")}function ut(e){Ge(e)}function ct(e){qe(e),t.pair?(Y(["",""]),J(["",""])):(Y(""),J(""))}function dt(e){const{onMousedown:n}=t;n&&n(e);const{tagName:i}=e.target;if(i!=="INPUT"&&i!=="TEXTAREA"){if(t.resizable){const{value:g}=f;if(g){const{left:y,top:m,width:_,height:k}=g.getBoundingClientRect(),R=14;if(y+_-R<e.clientX&&e.clientX<y+_&&m+k-R<e.clientY&&e.clientY<m+k)return}}e.preventDefault(),B.value||ye()}}function ht(){var e;L.value=!0,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ft(){var e;L.value=!1,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function vt(){$.value||ue.value==="click"&&(N.value=!N.value)}function pt(e){if($.value)return;e.preventDefault();const n=g=>{g.preventDefault(),ze("mouseup",document,n)};if(Me("mouseup",document,n),ue.value!=="mousedown")return;N.value=!0;const i=()=>{N.value=!1,ze("mouseup",document,i)};Me("mouseup",document,i)}function mt(e){var n;switch((n=t.onKeydown)===null||n===void 0||n.call(t,e),e.key){case"Escape":ce();break;case"Enter":gt(e);break}}function gt(e){var n,i;if(t.passivelyActivated){const{value:g}=V;if(g){t.internalDeactivateOnEnter&&ce();return}e.preventDefault(),t.type==="textarea"?(n=d.value)===null||n===void 0||n.focus():(i=c.value)===null||i===void 0||i.focus()}}function ce(){t.passivelyActivated&&(V.value=!1,Se(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function ye(){var e,n,i;$.value||(t.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((n=d.value)===null||n===void 0||n.focus(),(i=c.value)===null||i===void 0||i.focus()))}function bt(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function yt(){var e,n;(e=d.value)===null||e===void 0||e.select(),(n=c.value)===null||n===void 0||n.select()}function wt(){$.value||(d.value?d.value.focus():c.value&&c.value.focus())}function xt(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ce()}function Ct(e){if(t.type==="textarea"){const{value:n}=d;n==null||n.scrollTo(e)}else{const{value:n}=c;n==null||n.scrollTo(e)}}function de(e){const{type:n,pair:i,autosize:g}=t;if(!i&&g)if(n==="textarea"){const{value:y}=v;y&&(y.textContent=(e??"")+`\r
`)}else{const{value:y}=h;y&&(e?y.textContent=e:y.innerHTML="&nbsp;")}}function Pt(){Oe()}const we=C({top:"0"});function St(e){var n;const{scrollTop:i}=e.target;we.value.top=`${-i}px`,(n=T.value)===null||n===void 0||n.syncUnifiedContainer()}let Q=null;Pe(()=>{const{autosize:e,type:n}=t;e&&n==="textarea"?Q=re(F,i=>{!Array.isArray(i)&&i!==ie&&de(i)}):Q==null||Q()});let ee=null;Pe(()=>{t.type==="textarea"?ee=re(F,e=>{var n;!Array.isArray(e)&&e!==ie&&((n=T.value)===null||n===void 0||n.syncUnifiedContainer())}):ee==null||ee()}),Tn(Ee,{mergedValueRef:F,maxlengthRef:Ue,mergedClsPrefixRef:a,countGraphemesRef:pe(t,"countGraphemes")});const Mt={wrapperElRef:f,inputElRef:c,textareaElRef:d,isCompositing:A,focus:ye,blur:bt,select:yt,deactivate:xt,activate:wt,scrollTo:Ct},zt=Fn("Input",p,a),xe=M(()=>{const{value:e}=oe,{common:{cubicBezierEaseInOut:n},self:{color:i,borderRadius:g,textColor:y,caretColor:m,caretColorError:_,caretColorWarning:k,textDecorationColor:R,border:O,borderDisabled:U,borderHover:he,borderFocus:Tt,placeholderColor:Ft,placeholderColorDisabled:At,lineHeightTextarea:_t,colorDisabled:kt,colorFocus:Rt,textColorDisabled:Dt,boxShadowFocus:Et,iconSize:$t,colorFocusWarning:Bt,boxShadowFocusWarning:It,borderWarning:Wt,borderFocusWarning:Lt,borderHoverWarning:Vt,colorFocusError:Nt,boxShadowFocusError:Ot,borderError:Ut,borderFocusError:Ht,borderHoverError:jt,clearSize:Kt,clearColor:qt,clearColorHover:Xt,clearColorPressed:Yt,iconColor:Jt,iconColorDisabled:Zt,suffixTextColor:Gt,countTextColor:Qt,countTextColorDisabled:en,iconColorHover:tn,iconColorPressed:nn,loadingColor:rn,loadingColorError:an,loadingColorWarning:on,[ve("padding",e)]:ln,[ve("fontSize",e)]:sn,[ve("height",e)]:un}}=s.value,{left:cn,right:dn}=An(ln);return{"--n-bezier":n,"--n-count-text-color":Qt,"--n-count-text-color-disabled":en,"--n-color":i,"--n-font-size":sn,"--n-border-radius":g,"--n-height":un,"--n-padding-left":cn,"--n-padding-right":dn,"--n-text-color":y,"--n-caret-color":m,"--n-text-decoration-color":R,"--n-border":O,"--n-border-disabled":U,"--n-border-hover":he,"--n-border-focus":Tt,"--n-placeholder-color":Ft,"--n-placeholder-color-disabled":At,"--n-icon-size":$t,"--n-line-height-textarea":_t,"--n-color-disabled":kt,"--n-color-focus":Rt,"--n-text-color-disabled":Dt,"--n-box-shadow-focus":Et,"--n-loading-color":rn,"--n-caret-color-warning":k,"--n-color-focus-warning":Bt,"--n-box-shadow-focus-warning":It,"--n-border-warning":Wt,"--n-border-focus-warning":Lt,"--n-border-hover-warning":Vt,"--n-loading-color-warning":on,"--n-caret-color-error":_,"--n-color-focus-error":Nt,"--n-box-shadow-focus-error":Ot,"--n-border-error":Ut,"--n-border-focus-error":Ht,"--n-border-hover-error":jt,"--n-loading-color-error":an,"--n-clear-color":qt,"--n-clear-size":Kt,"--n-clear-color-hover":Xt,"--n-clear-color-pressed":Yt,"--n-icon-color":Jt,"--n-icon-color-hover":tn,"--n-icon-color-pressed":nn,"--n-icon-color-disabled":Zt,"--n-suffix-text-color":Gt}}),I=l?_n("input",M(()=>{const{value:e}=oe;return e[0]}),xe,t):void 0;return Object.assign(Object.assign({},Mt),{wrapperElRef:f,inputElRef:c,inputMirrorElRef:h,inputEl2Ref:b,textareaElRef:d,textareaMirrorElRef:v,textareaScrollbarInstRef:T,rtlEnabled:zt,uncontrolledValue:X,mergedValue:F,passwordVisible:N,mergedPlaceholder:le,showPlaceholder1:We,showPlaceholder2:Le,mergedFocus:se,isComposing:A,activated:V,showClearButton:Ve,mergedSize:oe,mergedDisabled:$,textDecorationStyle:Ne,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:ue,placeholderStyle:we,mergedStatus:Ie,textAreaScrollContainerWidth:be,handleTextAreaScroll:St,handleCompositionStart:tt,handleCompositionEnd:nt,handleInput:Z,handleInputBlur:at,handleInputFocus:ot,handleWrapperBlur:it,handleWrapperFocus:lt,handleMouseEnter:ht,handleMouseLeave:ft,handleMouseDown:dt,handleChange:st,handleClick:ut,handleClear:ct,handlePasswordToggleClick:vt,handlePasswordToggleMousedown:pt,handleWrapperKeydown:mt,handleTextAreaMirrorResize:Pt,getTextareaScrollContainer:()=>d.value,mergedTheme:s,cssVars:l?void 0:xe,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var t,a;const{mergedClsPrefix:r,mergedStatus:l,themeClass:p,type:s,countGraphemes:f,onRender:d}=this,v=this.$slots;return d==null||d(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,p,l&&`${r}-input--${l}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:s==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&s!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},te(v.prefix,h=>h&&o("div",{class:`${r}-input__prefix`},h)),s==="textarea"?o(kn,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var h,c;const{textAreaScrollContainerWidth:b}=this,x={width:this.autosize&&b&&`${b}px`};return o(Rn,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(c=this.inputProps)===null||c===void 0?void 0:c.style,x],onBlur:this.handleInputBlur,onFocus:E=>{this.handleInputFocus(E,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(Dn,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:s==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":s},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,0)},onInput:h=>{this.handleInput(h,0)},onChange:h=>{this.handleChange(h,0)}})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&te(v.suffix,h=>h||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[te(v["clear-icon-placeholder"],c=>(this.clearable||c)&&o(me,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>c,icon:()=>{var b,x;return(x=(b=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(b)}})),this.internalLoadingBeforeSuffix?null:h,this.loading!==void 0?o(Or,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?h:null,this.showCount&&this.type!=="textarea"?o(Te,null,{default:c=>{var b;return(b=v.count)===null||b===void 0?void 0:b.call(v,c)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?q(v["password-visible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(Ir,null)})]):q(v["password-invisible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(Wr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},q(v.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,1)},onInput:h=>{this.handleInput(h,1)},onChange:h=>{this.handleChange(h,1)}}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),te(v.suffix,h=>(this.clearable||h)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(me,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var c;return(c=v["clear-icon"])===null||c===void 0?void 0:c.call(v)},placeholder:()=>{var c;return(c=v["clear-icon-placeholder"])===null||c===void 0?void 0:c.call(v)}}),h]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&s==="textarea"?o(Te,null,{default:h=>{var c;const{renderCount:b}=this;return b?b(h):(c=v.count)===null||c===void 0?void 0:c.call(v,h)}}):null)}});export{Or as N,Zr as _,Br as a,Jr as b,jn as c,Xn as d,Yr as g,In as i,qn as t,Yn as u};
