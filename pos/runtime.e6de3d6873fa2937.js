(()=>{"use strict";var e,v={},g={};function r(e){var f=g[e];if(void 0!==f)return f.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(f,t,n,i)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,n,i]=e[o],l=!0,d=0;d<t.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[d]))?t.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(o--,1);var s=n();void 0!==s&&(f=s)}}return f}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[t,n,i]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var o={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(l=>o[l]=()=>t[l]);return o.default=()=>t,r.d(i,o),i}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{47:"f753ff3d8cdbceb8",58:"f7d8b43c81cdcc5b",63:"afb39d941a8cdfed",317:"da671ed6eb5e902a",427:"f0bebef9074b7dc9",468:"1bde1f2919918229",507:"f5a67f392b44c685",543:"1630a029843439b9",592:"4443e3a5911c03f8",858:"4df4218945d37927"}[e]+".js",r.miniCssF=e=>{},r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="pos:";r.l=(t,n,i,o)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==f+i){a=c;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+i),a.src=r.tu(t)),e[t]=[n];var u=(_,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(y=>y(b)),_)return _(b)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(n,i)=>{var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else if(666!=n){var a=new Promise((c,u)=>o=e[n]=[c,u]);i.push(o[2]=a);var l=r.p+r.u(n),d=new Error;r.l(l,c=>{if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var u=c&&("load"===c.type?"missing":c.type),p=c&&c.target&&c.target.src;d.message="Loading chunk "+n+" failed.\n("+u+": "+p+")",d.name="ChunkLoadError",d.type=u,d.request=p,o[1](d)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,i)=>{var d,s,[o,a,l]=i,c=0;if(o.some(p=>0!==e[p])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(l)var u=l(r)}for(n&&n(i);c<o.length;c++)r.o(e,s=o[c])&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},t=self.webpackChunkpos=self.webpackChunkpos||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();