"use strict";function _typeof8(t){return _typeof8="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof8(t)}function _typeof7(t){return _typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)},_typeof7(t)}function _typeof6(t){return _typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)},_typeof6(t)}function _typeof5(t){return _typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)},_typeof5(t)}function _typeof4(t){return _typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)},_typeof4(t)}function _typeof3(t){return _typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)},_typeof3(t)}function _typeof2(t){return _typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)},_typeof2(t)}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)},_typeof(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),u=new E(o||[]);return r(a,"_invoke",{value:_(t,n,u)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var s={};function y(){}function p(){}function h(){}var d={};c(d,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&n.call(v,i)&&(d=v);var b=h.prototype=y.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(r,i,a,u){var c=l(t[r],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==_typeof(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function _(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(undefined===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=undefined,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,s):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=undefined,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:undefined,done:!0}}return p.prototype=h,r(b,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function o(){for(;n.length;){var t=n.pop();if(t in e)return o.value=t,o.done=!1,o}return o.done=!0,o}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=undefined),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=undefined),s}},t}function asyncGeneratorStep(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void n(f)}u.done?e(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,r,o,a,u,"next",t)}function u(t){asyncGeneratorStep(i,r,o,a,u,"throw",t)}a(undefined)}))}}var SearchService=function(){var t={queryText:null,data:null,template:'<div id="u-search">\n  <div class="modal">\n    <header class="modal-header" class="clearfix">\n      <form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm">\n        <input type="text" id="u-search-modal-input" class="u-search-input" />\n        <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit">\n          <span class="fa-solid fa-search"></span>\n        </button>\n      </form>\n      <a id="u-search-btn-close" class="btn-close"> <span class="fa-solid fa-times"></span> </a>\n    </header>\n    <main class="modal-body">\n      <ul class="modal-results"></ul>\n    </main>\n  </div>\n  <div id="modal-overlay" class="modal-overlay"></div>\n</div>\n',init:function(){var e=document.createElement("div");e.innerHTML+=t.template,document.body.append(e),document.querySelectorAll(".u-search-form").forEach((function(e){e.addEventListener("submit",t.onSubmit,!1)})),document.querySelector("#u-search-modal-input").addEventListener("input",t.onSubmit),document.querySelector("#u-search-btn-close").addEventListener("click",t.close,!1),document.querySelector("#modal-overlay").addEventListener("click",t.close,!1)},onSubmit:function(e){e.preventDefault();var n=e.target.querySelector(".u-search-input");t.queryText=n?n.value:e.target.value,t.queryText&&t.search()}};return t.search=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelectorAll(".u-search-input").forEach((function(e){e.value=t.queryText})),document.querySelector("#u-search").style.display="block",t.data){e.next=6;break}return e.next=5,t.fetchData();case 5:t.data=e.sent;case 6:n="",n+=t.buildResultList(t.data.pages),n+=t.buildResultList(t.data.posts),document.querySelector("#u-search .modal-results").innerHTML=n,window.pjax&&pjax.refresh(document.querySelector("#u-search")),document.addEventListener("keydown",(function r(e){"Escape"===e.code&&(t.close(),document.removeEventListener("keydown",r))}));case 12:case"end":return e.stop()}}),e)}))),t.close=function(){document.querySelector("#u-search").style.display="none"},t.fetchData=function(){return fetch(SearchServiceDataPath).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)}))},t.buildResultList=function(e){var n="";return e.forEach((function(e){e.text&&(e.text=e.text.replace(/12345\d*/g,"")),!e.title&&e.text&&(e.title=e.text.trim().slice(0,15)),t.contentSearch(e)&&(n+=t.buildResult(e.permalink,e.title,e.digest))})),n},t.contentSearch=function(e){var n=e.title.trim().toLowerCase(),r=e.text.trim().toLowerCase(),o=t.queryText.trim().toLowerCase().split(/[-\s]+/),i=!1,a=-1,u=-1,c=-1;return n&&r&&o.forEach((function(t,f){if(a=n.indexOf(t),u=r.indexOf(t),a<0&&u<0?i=!1:(i=!0,u<0&&(u=0),0===f&&(c=u)),i){r=e.text.trim();var l=0,s=0;if(c>=0){s=0===(l=Math.max(c-40,0))?Math.min(200,r.length):Math.min(c+120,r.length);var y=r.substring(l,s);o.forEach((function(t){var e=new RegExp(t,"gi");y=y.replace(e,"<b mark>"+t+"</b>")})),e.digest=y+"......"}else s=Math.min(200,r.length),e.digest=r.trim().substring(0,s)}})),i},t.buildResult=function(e,n,r){var o="";return o+="<li>",o+="<a class='result' href='"+t.getUrlRelativePath(e)+"?keyword="+t.queryText+"'>",o+="<span class='title'>"+n+"</span>",""!==r&&(o+="<span class='digest'>"+r+"</span>"),(o+="</a>")+"</li>"},t.getUrlRelativePath=function(t){var e=t.split("//"),n=e[1].indexOf("/"),r=e[1].substring(n);return-1!=r.indexOf("?")&&(r=r.split("?")[0]),r},{init:function(){t.init()},setQueryText:function(e){t.queryText=e},search:function(){t.search()}}}();Object.freeze(SearchService),SearchService.init(),document.addEventListener("pjax:success",SearchService.init),document.addEventListener("pjax:send",(function(){document.querySelector("#u-search").style.display="none"}));
//# sourceMappingURL=../../maps/js/search/hexo.js.map
