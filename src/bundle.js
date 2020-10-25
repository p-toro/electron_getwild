(()=>{"use strict";var e,t,n,i={807:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap&text=0123456789);"]),r.push([e.id,'*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Raleway","Noto Sans JP",sans-serif}.bg{overflow:hidden;position:absolute;top:0;left:0;width:100vw;height:100vh}.bg::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;background-image:radial-gradient(#333 28%, transparent 35%),radial-gradient(#333 28%, transparent 35%);background-position:0 0,4px 4px;background-size:4px 4px;backdrop-filter:blur(5px) contrast(5) sepia(0.6)}#js-ytplayer{position:absolute;top:0;left:0;width:100%;height:100%}.main{position:absolute;z-index:2;top:38%;left:50%;width:300px;height:300px;transform:translate(-50%, -50%);text-align:center}.main_ttl{white-space:nowrap;text-indent:-1em;letter-spacing:.2em;color:#fff;text-shadow:0px 0px 10px #000;font-size:3em}.main_subTtl{margin-top:.3em;white-space:nowrap;letter-spacing:.1em;color:#fff;text-shadow:0px 0px 10px #000}.main_innerWrap{display:flex;margin-top:2em;border-radius:50%;width:100%;height:100%;background-color:rgba(255,255,255,.8);align-items:center;justify-content:center}.main_currentTime{font-family:"Roboto",sans-serif;font-size:3em}.main_inputTime{margin-top:2em;padding:.1em .6em;cursor:pointer;transform:scale(2);font-family:"Roboto",sans-serif}',""]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:h(p,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(e,t){var n,i,r;if(t.singleton){var o=m++;n=f||(f=c(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=c(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var c=a(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}},763:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.SetLeavingOfficeTime=t.UpdateCurrentTime=void 0,t.UpdateCurrentTime=class{constructor(){this.currentDate=new Date,this.hours=("0"+this.currentDate.getHours()).slice(-2),this.minutes=("0"+this.currentDate.getMinutes()).slice(-2),this.seconds=("0"+this.currentDate.getSeconds()).slice(-2),this.currentTime=`${this.hours}:${this.minutes}:${this.seconds}`,this.domCrrentTime=document.querySelector("#js-currentTime"),this.domYt=document.querySelector("#js-ytplayer"),this.domYt2=this.domYt,this.domBg=document.querySelector("#js-bg"),this.setCurrentTime(),this.judgeTime()}setCurrentTime(){this.domCrrentTime.textContent=this.currentTime}judgeTime(){this.currentTime===n&&(this.controlVideo("playVideo"),this.domYt.style.transform="scale(2)",window.setTimeout((()=>{this.domYt.parentNode.removeChild(this.domYt),this.domBg.insertBefore(this.domYt2,this.domBg.firstChild),this.domYt.style.transform=""}),92e3))}controlVideo(e){this.domYt.contentWindow.postMessage('{"event":"command","func":"'+e+'","args":""}',"*")}},t.SetLeavingOfficeTime=class{constructor(){this.inputTime=document.querySelector("#js-inputTime"),this.setEvent()}setEvent(){this.inputTime.addEventListener("change",(function(){n=this.value+":00"}))}}},366:(e,t,n)=>{const i=n(763);setInterval((()=>{new i.UpdateCurrentTime}),1e3),new i.SetLeavingOfficeTime}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={id:e,exports:{}};return i[e](t,t.exports,o),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=o(379),t=o.n(e),n=o(807),t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,o(366)})();