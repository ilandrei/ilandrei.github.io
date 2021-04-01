var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),u=a?e=>requestAnimationFrame(e):e;const f=new Set;function l(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&u(l)}function d(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function v(){return y(" ")}function b(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const E=new Set;let x,$=0;function C(e,t,n,r,o,i,s,a=0){const c=16.666/r;let u="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);u+=100*e+`%{${s(r,1-r)}}\n`}const f=u+`100% {${s(n,1-n)}}\n}`,l=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(f)}_${a}`,d=e.ownerDocument;E.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[l]||(h[l]=!0,p.insertRule(`@keyframes ${l} ${f}`,p.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${l} ${r}ms linear ${o}ms 1 both`,$+=1,l}function A(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),$-=o,$||u((()=>{$||(E.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),E.clear())})))}function S(e){x=e}function j(e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(e)}const R=[],O=[],N=[],k=[],T=Promise.resolve();let U=!1;function B(e){N.push(e)}let P=!1;const L=new Set;function q(){if(!P){P=!0;do{for(let e=0;e<R.length;e+=1){const t=R[e];S(t),D(t.$$)}for(S(null),R.length=0;O.length;)O.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];L.has(t)||(L.add(t),t())}N.length=0}while(R.length);for(;k.length;)k.pop()();U=!1,P=!1,L.clear()}}function D(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}let F;function z(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const H=new Set;let M;function I(e,t){e&&e.i&&(H.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(H.has(e))return;H.add(e),M.c.push((()=>{H.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const J={duration:0};function V(n,r,s,a){let d=r(n,s),p=a?0:1,h=null,m=null,g=null;function y(){g&&A(n,g)}function v(e,t){const n=e.b-p;return t*=Math.abs(n),{a:p,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(r){const{delay:i=0,duration:s=300,easing:a=t,tick:b=e,css:w}=d||J,_={start:c()+i,b:r};r||(_.group=M,M.r+=1),h||m?m=_:(w&&(y(),g=C(n,p,r,s,i,a,w)),r&&b(0,1),h=v(_,s),B((()=>z(n,r,"start"))),function(e){let t;0===f.size&&u(l),new Promise((n=>{f.add(t={c:e,f:n})}))}((e=>{if(m&&e>m.start&&(h=v(m,s),m=null,z(n,h.b,"start"),w&&(y(),g=C(n,p,h.b,h.duration,0,a,d.css))),h)if(e>=h.end)b(p=h.b,1-p),z(n,h.b,"end"),m||(h.b?y():--h.group.r||o(h.group.c)),h=null;else if(e>=h.start){const t=e-h.start;p=h.a+h.d*a(t/h.duration),b(p,1-p)}return!(!h&&!m)})))}return{run(e){i(d)?(F||(F=Promise.resolve(),F.then((()=>{F=null}))),F).then((()=>{d=d(),b(e)})):b(e)},end(){y(),h=m=null}}}function G(e,t){-1===e.$$.dirty[0]&&(R.push(e),U||(U=!0,T.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,s,a,c,u,f,l=[-1]){const d=x;S(t);const p=t.$$={fragment:null,ctx:null,props:f,update:e,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let m=!1;if(p.ctx=a?a(t,s.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&u(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),m&&G(t,e)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&I(t.$$.fragment),function(e,t,r,s){const{fragment:a,on_mount:c,on_destroy:u,after_update:f}=e.$$;a&&a.m(t,r),s||B((()=>{const t=c.map(n).filter(i);u?u.push(...t):o(t),e.$$.on_mount=[]})),f.forEach(B)}(t,s.target,s.anchor,s.customElement),q()}S(d)}var Q=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},W=Object.prototype.toString;function Y(e){return"[object Array]"===W.call(e)}function Z(e){return void 0===e}function ee(e){return null!==e&&"object"==typeof e}function te(e){if("[object Object]"!==W.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function ne(e){return"[object Function]"===W.call(e)}function re(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Y(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var oe={isArray:Y,isArrayBuffer:function(e){return"[object ArrayBuffer]"===W.call(e)},isBuffer:function(e){return null!==e&&!Z(e)&&null!==e.constructor&&!Z(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:ee,isPlainObject:te,isUndefined:Z,isDate:function(e){return"[object Date]"===W.call(e)},isFile:function(e){return"[object File]"===W.call(e)},isBlob:function(e){return"[object Blob]"===W.call(e)},isFunction:ne,isStream:function(e){return ee(e)&&ne(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:re,merge:function e(){var t={};function n(n,r){te(t[r])&&te(n)?t[r]=e(t[r],n):te(n)?t[r]=e({},n):Y(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)re(arguments[r],n);return t},extend:function(e,t,n){return re(t,(function(t,r){e[r]=n&&"function"==typeof t?Q(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var se=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(oe.isURLSearchParams(t))r=t.toString();else{var o=[];oe.forEach(t,(function(e,t){null!=e&&(oe.isArray(e)?t+="[]":e=[e],oe.forEach(e,(function(e){oe.isDate(e)?e=e.toISOString():oe.isObject(e)&&(e=JSON.stringify(e)),o.push(ie(t)+"="+ie(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function ae(){this.handlers=[]}ae.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},ae.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ae.prototype.forEach=function(e){oe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var ce=ae,ue=function(e,t,n){return oe.forEach(n,(function(n){e=n(e,t)})),e},fe=function(e){return!(!e||!e.__CANCEL__)},le=function(e,t){oe.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},de=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},pe=oe.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),oe.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),oe.isString(r)&&s.push("path="+r),oe.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},he=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],me=oe.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=oe.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},ge=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;oe.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+a)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(i.open(e.method.toUpperCase(),se(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,s,a,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(oe.forEach(r.split("\n"),(function(e){if(a=e.indexOf(":"),o=oe.trim(e.substr(0,a)).toLowerCase(),s=oe.trim(e.substr(a+1)),o){if(c[o]&&he.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(de("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),i=null}},i.onabort=function(){i&&(n(de("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(de("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(de(t,e,"ECONNABORTED",i)),i=null},oe.isStandardBrowserEnv()){var l=(e.withCredentials||me(f))&&e.xsrfCookieName?pe.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in i&&oe.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),oe.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},ye={"Content-Type":"application/x-www-form-urlencoded"};function ve(e,t){!oe.isUndefined(e)&&oe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var be,we={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(be=ge),be),transformRequest:[function(e,t){return le(t,"Accept"),le(t,"Content-Type"),oe.isFormData(e)||oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e)?e:oe.isArrayBufferView(e)?e.buffer:oe.isURLSearchParams(e)?(ve(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):oe.isObject(e)?(ve(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};we.headers={common:{Accept:"application/json, text/plain, */*"}},oe.forEach(["delete","get","head"],(function(e){we.headers[e]={}})),oe.forEach(["post","put","patch"],(function(e){we.headers[e]=oe.merge(ye)}));var _e=we;function Ee(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var xe=function(e){return Ee(e),e.headers=e.headers||{},e.data=ue(e.data,e.headers,e.transformRequest),e.headers=oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),oe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||_e.adapter)(e).then((function(t){return Ee(e),t.data=ue(t.data,t.headers,e.transformResponse),t}),(function(t){return fe(t)||(Ee(e),t&&t.response&&(t.response.data=ue(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},$e=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(e,t){return oe.isPlainObject(e)&&oe.isPlainObject(t)?oe.merge(e,t):oe.isPlainObject(t)?oe.merge({},t):oe.isArray(t)?t.slice():t}function c(r){oe.isUndefined(t[r])?oe.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(e[r],t[r])}oe.forEach(r,(function(e){oe.isUndefined(t[e])||(n[e]=a(void 0,t[e]))})),oe.forEach(o,c),oe.forEach(i,(function(r){oe.isUndefined(t[r])?oe.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(void 0,t[r])})),oe.forEach(s,(function(r){r in t?n[r]=a(e[r],t[r]):r in e&&(n[r]=a(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return oe.forEach(f,c),n};function Ce(e){this.defaults=e,this.interceptors={request:new ce,response:new ce}}Ce.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=$e(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[xe,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},Ce.prototype.getUri=function(e){return e=$e(this.defaults,e),se(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},oe.forEach(["delete","get","head","options"],(function(e){Ce.prototype[e]=function(t,n){return this.request($e(n||{},{method:e,url:t,data:(n||{}).data}))}})),oe.forEach(["post","put","patch"],(function(e){Ce.prototype[e]=function(t,n,r){return this.request($e(r||{},{method:e,url:t,data:n}))}}));var Ae=Ce;function Se(e){this.message=e}Se.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Se.prototype.__CANCEL__=!0;var je=Se;function Re(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new je(e),t(n.reason))}))}Re.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Re.source=function(){var e;return{token:new Re((function(t){e=t})),cancel:e}};var Oe=Re;function Ne(e){var t=new Ae(e),n=Q(Ae.prototype.request,t);return oe.extend(n,Ae.prototype,t),oe.extend(n,t),n}var ke=Ne(_e);ke.Axios=Ae,ke.create=function(e){return Ne($e(ke.defaults,e))},ke.Cancel=je,ke.CancelToken=Oe,ke.isCancel=fe,ke.all=function(e){return Promise.all(e)},ke.spread=function(e){return function(t){return e.apply(null,t)}},ke.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var Te=ke,Ue=ke;Te.default=Ue;var Be=Te;function Pe(e,{delay:n=0,duration:r=400,easing:o=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:o,css:e=>"opacity: "+e*i}}function Le(e,t,n){const r=e.slice();return r[13]=t[n],r}function qe(e,t,n){const r=e.slice();return r[13]=t[n],r}function De(e){let t,n,r,o,i,s,a,c,u,f,l,m,E,x,$,C,A=e[13].first_name+"",S=e[13].last_name+"",j=e[13].gender+"",R=e[13].diagnosis_code+"";function O(){return e[6](e[13])}return{c(){t=g("div"),n=y(A),r=v(),o=y(S),i=v(),s=g("br"),a=v(),c=y(j),u=v(),f=g("br"),l=y("\n\t\t\t\t\t\tDiagnosis: "),m=y(R),E=v(),w(t,"class",x="patient-container "+(e[13].id===e[2]?.id?"patient-container__selected":"")+" svelte-1gw99e4")},m(e,h){p(e,t,h),d(t,n),d(t,r),d(t,o),d(t,i),d(t,s),d(t,a),d(t,c),d(t,u),d(t,f),d(t,l),d(t,m),d(t,E),$||(C=b(t,"click",O),$=!0)},p(r,i){e=r,2&i&&A!==(A=e[13].first_name+"")&&_(n,A),2&i&&S!==(S=e[13].last_name+"")&&_(o,S),2&i&&j!==(j=e[13].gender+"")&&_(c,j),2&i&&R!==(R=e[13].diagnosis_code+"")&&_(m,R),6&i&&x!==(x="patient-container "+(e[13].id===e[2]?.id?"patient-container__selected":"")+" svelte-1gw99e4")&&w(t,"class",x)},d(e){e&&h(t),$=!1,C()}}}function Fe(e){let t,n,r,o,i,s=e[13]+"";function a(){return e[7](e[13])}return{c(){t=g("button"),n=y(s),w(t,"class",r="pagination-button "+(e[13]===e[3]?"pagination-button-current":"")+" svelte-1gw99e4")},m(e,r){p(e,t,r),d(t,n),o||(i=b(t,"click",a),o=!0)},p(o,i){e=o,1&i&&s!==(s=e[13]+"")&&_(n,s),9&i&&r!==(r="pagination-button "+(e[13]===e[3]?"pagination-button-current":"")+" svelte-1gw99e4")&&w(t,"class",r)},d(e){e&&h(t),o=!1,i()}}}function ze(t){let n;return{c(){n=g("p"),n.textContent="Select a patient from the left panel"},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&h(n)}}}function He(e){let t,n,r,o,i,s,a,c,u,f,l,m,b,E,x,$,C,A,S,j,R,O,N,k,T,U,P,L,q,D,F,z,H=e[2].first_name+"",M=e[2].last_name+"",I=e[2].email+"",X=e[2].gender+"",J=e[2].diagnosis_code+"",G=e[2].diagnosis_description+"",K=e[2].diagnosis_description_detailed+"",Q=e[2].administered_drug_treatment+"";return{c(){t=g("div"),n=g("h1"),r=y(H),o=v(),i=y(M),s=y(" ("),a=g("a"),c=y(I),f=y(")"),l=v(),m=g("h2"),b=y("Gender: "),E=y(X),x=v(),$=g("h2"),C=y("Diagnosis code: "),A=y(J),S=v(),j=g("h3"),R=y("Diagnosis description: "),O=y(G),N=v(),k=g("h3"),T=y("Additional: "),U=y(K),P=v(),L=g("h3"),q=y("Administered drug treatment: "),D=y(Q),w(a,"href",u="mailto:"+e[2].email),w(t,"class","patient-panel svelte-1gw99e4")},m(e,u){p(e,t,u),d(t,n),d(n,r),d(n,o),d(n,i),d(n,s),d(n,a),d(a,c),d(n,f),d(t,l),d(t,m),d(m,b),d(m,E),d(t,x),d(t,$),d($,C),d($,A),d(t,S),d(t,j),d(j,R),d(j,O),d(t,N),d(t,k),d(k,T),d(k,U),d(t,P),d(t,L),d(L,q),d(L,D),z=!0},p(e,t){(!z||4&t)&&H!==(H=e[2].first_name+"")&&_(r,H),(!z||4&t)&&M!==(M=e[2].last_name+"")&&_(i,M),(!z||4&t)&&I!==(I=e[2].email+"")&&_(c,I),(!z||4&t&&u!==(u="mailto:"+e[2].email))&&w(a,"href",u),(!z||4&t)&&X!==(X=e[2].gender+"")&&_(E,X),(!z||4&t)&&J!==(J=e[2].diagnosis_code+"")&&_(A,J),(!z||4&t)&&G!==(G=e[2].diagnosis_description+"")&&_(O,G),(!z||4&t)&&K!==(K=e[2].diagnosis_description_detailed+"")&&_(U,K),(!z||4&t)&&Q!==(Q=e[2].administered_drug_treatment+"")&&_(D,Q)},i(e){z||(B((()=>{F||(F=V(t,Pe,{},!0)),F.run(1)})),z=!0)},o(e){F||(F=V(t,Pe,{},!1)),F.run(0),z=!1},d(e){e&&h(t),e&&F&&F.end()}}}function Me(e){let t,n,r,i,s,a,c,u,f,l,y,b=e[1],_=[];for(let t=0;t<b.length;t+=1)_[t]=De(qe(e,b,t));let E=e[0],x=[];for(let t=0;t<E.length;t+=1)x[t]=Fe(Le(e,E,t));const $=[He,ze],C=[];function A(e,t){return void 0!==e[2]?0:1}return f=A(e),l=C[f]=$[f](e),{c(){t=g("main"),n=g("div"),r=g("div"),i=g("div");for(let e=0;e<_.length;e+=1)_[e].c();s=v(),a=g("div");for(let e=0;e<x.length;e+=1)x[e].c();c=v(),u=g("div"),l.c(),w(i,"class","patient-table-container svelte-1gw99e4"),w(a,"class","pagination-container svelte-1gw99e4"),w(r,"class","tab-menu-container svelte-1gw99e4"),w(u,"class","detail-container svelte-1gw99e4"),w(n,"class","page-container svelte-1gw99e4"),w(t,"class","svelte-1gw99e4")},m(e,o){p(e,t,o),d(t,n),d(n,r),d(r,i);for(let e=0;e<_.length;e+=1)_[e].m(i,null);d(r,s),d(r,a);for(let e=0;e<x.length;e+=1)x[e].m(a,null);d(n,c),d(n,u),C[f].m(u,null),y=!0},p(e,[t]){if(38&t){let n;for(b=e[1],n=0;n<b.length;n+=1){const r=qe(e,b,n);_[n]?_[n].p(r,t):(_[n]=De(r),_[n].c(),_[n].m(i,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=b.length}if(25&t){let n;for(E=e[0],n=0;n<E.length;n+=1){const r=Le(e,E,n);x[n]?x[n].p(r,t):(x[n]=Fe(r),x[n].c(),x[n].m(a,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=E.length}let n=f;f=A(e),f===n?C[f].p(e,t):(M={r:0,c:[],p:M},X(C[n],1,1,(()=>{C[n]=null})),M.r||o(M.c),M=M.p,l=C[f],l?l.p(e,t):(l=C[f]=$[f](e),l.c()),I(l,1),l.m(u,null))},i(e){y||(I(l),y=!0)},o(e){X(l),y=!1},d(e){e&&h(t),m(_,e),m(x,e),C[f].d()}}}function Ie(e,t,n){let r,o,i=!1,s=0,a=[],c=[],u=[];j((async()=>{let e=await Be.get("https://alexgr.ro/ehealth/patients.json");i=200!==e.status,i||(c=e.data,s=c.length/5,n(0,a=[...Array(s).keys()].map((e=>e+1))),l())}));const f=e=>{n(3,r=e),l()},l=()=>{n(1,u=c.filter(((e,t)=>{return(n=t)>=5*(r-1)&&n<5*r;var n})))},d=e=>{console.log(e),n(2,o=e)};return n(3,r=1),[a,u,o,r,f,d,e=>d(e),e=>f(e)]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),K(this,e,Ie,Me,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
