"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),l=new x(r||[]);return o(a,"_invoke",{value:O(e,n,l)}),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=c;var d={};function f(){}function m(){}function v(){}var h={};s(h,i,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(A([])));g&&g!==t&&n.call(g,i)&&(h=g);var y=v.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(o,i,a,l){var s=u(e[o],e,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==_typeof(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(d).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return E()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var l=L(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=u(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function L(e,t){var n=t.method,o=e.iterator[n];if(undefined===o)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=undefined,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function A(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:E}}function E(){return{value:undefined,done:!0}}return m.prototype=v,o(y,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new w(c(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),s(y,l,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return a.type="throw",a.arg=e,t.next=n,o&&(t.method="next",t.arg=undefined),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),d}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=undefined),d}},e}function asyncGeneratorStep(e,t,n,o,r,i,a){try{var l=e[i](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){asyncGeneratorStep(i,o,r,a,l,"next",e)}function l(e){asyncGeneratorStep(i,o,r,a,l,"throw",e)}a(undefined)}))}}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&null!=n["return"]&&(a=n["return"](),Object(a)!==a))return}finally{if(c)throw r}}return l}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(n!==undefined){var o=n.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((function(){VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((function(){VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()}),"app.js"),volantis.pjax.send((function(){volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));var locationHash=function(){if(window.location.hash){var e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),t=document.getElementById(e);t&&setTimeout((function(){window.location.hash.startsWith("#fn")?volantis.scroll.to(t,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant",observer:!0}):volantis.scroll.to(t,{addTop:5,behavior:"instant",observer:!0})}),1e3)}};Object.freeze(locationHash);var VolantisApp=function(){var e={},t=80;e.init=function(){volantis.dom.header&&(t=volantis.dom.header.clientHeight+16),window.onresize=function(){document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())},volantis.scroll.push(e.scrollEventCallBack,"scrollEventCallBack")},e.event=function(){var t;null===(t=volantis.dom.$(document.getElementById("scroll-down")))||void 0===t||t.on("click",(function(){e.scrolltoElement(volantis.dom.bodyAnchor)}));var n=document.querySelector("#l_side");n&&(n.querySelectorAll("section").length||document.querySelector("#l_main").classList.add("no_sidebar"));if(volantis.GLOBAL_CONFIG.sidebar.for_page.includes("webinfo")||volantis.GLOBAL_CONFIG.sidebar.for_post.includes("webinfo")){var o=volantis.GLOBAL_CONFIG.sidebar.webinfo.lastupd;document.getElementById("last-update-show")&&o.enable&&o.friendlyShow&&(document.getElementById("last-update-show").innerHTML=e.utilTimeAgo(volantis.GLOBAL_CONFIG.lastupdate))}if(document.getElementById("webinfo-runtime-count")){var r=new Date(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.data),i=(new Date).getTime()-r.getTime(),a=Math.floor(i/864e5);document.getElementById("webinfo-runtime-count").innerHTML="".concat(a," ").concat(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.unit)}document.body.oncopy=function(){e.messageCopyright()}},e.restData=function(){t=volantis.dom.header?volantis.dom.header.clientHeight+16:80},e.setIsMobile=function(){document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=function(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t;volantis.scroll.to(e,{top:e.offsetTop-n})},e.scrollEventCallBack=function(){var e=volantis.dom.bodyAnchor.offsetTop-t,n=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(n>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(n-e>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&n>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()})))},e.setScrollAnchor=function(){volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((function(t){t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.bodyAnchor),t.stopImmediatePropagation()}))},e.setHeader=function(){pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(document.title.split(" - ")[0]),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((function(t){t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.commentTarget),t.stopImmediatePropagation()})):volantis.dom.comment.style.display="none",volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((function(e){e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.style.display="none"))},e.setHeaderMenuSelection=function(){volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((function(e){var t=volantis.dom.$(e).find("li a.active");t&&t.removeClass("active");var n=volantis.dom.$(e).find("div a.active");n&&n.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var t=e.match(/page\d{0,}$/g);t&&(t=t[0],e=e.split(t)[0]);var n=e.match(/index.html/);n&&(n=n[0],e=e.split(n)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((function(t){var n=t.querySelector("[active-action=action-"+e+"]");n&&volantis.dom.$(n).addClass("active")}))},e.setGlobalHeaderMenuEvent=function(){volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));for(var t=e.currentTarget.children,n=0;n<t.length;n++){var o=t[n];"menu"===volantis.dom.$(o).title?volantis.dom.$(o).display="flex":volantis.dom.$(o).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(e){volantis.dom.$(e).hide()}))}),0)})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=function(){volantis.isMobile&&volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))},e.setHeaderSearch=function(){volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(e){e.stopPropagation()}),!1))},e.setTabs=function(){var e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(function(e){e.preventDefault(),e.stopPropagation();var t=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(e.target.className).addClass("active"),!1}))}))}))},e.footnotes=function(){var e=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");e.forEach((function(t,n){e[n].click=function(){},volantis.dom.$(t).on("click",(function(e){e.stopPropagation(),e.preventDefault();var t=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),n=document.getElementById(t);n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})}))}))},e.utilCopyCode=function(t){document.querySelectorAll(t).forEach((function(t){t.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fa-solid fa-copy"></i><span>COPY</span></button>');var n=t.previousSibling;n.onclick=function(o){o.stopPropagation();var r=n.querySelector("i"),i=n.querySelector("span");t.focus();var a=new Range;a.selectNodeContents(t),document.getSelection().removeAllRanges(),document.getSelection().addRange(a);var l=document.getSelection().toString();e.utilWriteClipText(l).then((function(){e.messageCopyright(),n.classList.add("copied"),r.classList.remove("fa-copy"),r.classList.add("fa-check-circle"),i.innerText="COPIED",setTimeout((function(){r.classList.remove("fa-check-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}),2e3)}))["catch"]((function(e){VolantisApp.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),n.classList.add("copied-failed"),r.classList.remove("fa-copy"),r.classList.add("fa-exclamation-circle"),i.innerText="COPY FAILED",setTimeout((function(){r.classList.remove("fa-exclamation-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}))}))}}))},e.utilWriteClipText=function(e){return navigator.clipboard.writeText(e).then((function(){return Promise.resolve()}))["catch"]((function(t){var n=document.createElement("textarea");n.setAttribute("readonly","readonly"),document.body.appendChild(n),n.innerHTML=e,n.select();try{var o=document.execCommand("copy");return document.body.removeChild(n),o&&"unsuccessful"!==o?Promise.resolve():Promise.reject("复制文本失败!")}catch(t){return document.body.removeChild(n),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}))},e.utilTimeAgo=function(e){var t=6e4,n=36e5,o=24*n,r=(new Date).getTime()-e,i=r/t,a=r/n,l=r/o,s=r/6048e5,c=r/2592e6;if(r<0)result="";else if(c>=1&&c<7)result=" "+parseInt(c)+" 月前";else if(s>=1&&s<4)result=" "+parseInt(s)+" 周前";else if(l>=1&&l<7)result=" "+parseInt(l)+" 天前";else if(a>=1&&a<24)result=" "+parseInt(a)+" 小时前";else if(i>=1&&i<60)result=" "+parseInt(i)+" 分钟前";else if(r>=0&&r<=t)result="刚刚";else{var u=new Date;u.setTime(e);var d=u.getFullYear(),f=u.getMonth()+1<10?"0"+(u.getMonth()+1):u.getMonth()+1,m=u.getDate()<10?"0"+u.getDate():u.getDate();u.getHours()<10?u.getHours():u.getHours(),u.getMinutes()<10?u.getMinutes():u.getMinutes(),u.getSeconds()<10?u.getSeconds():u.getSeconds();result=d+"-"+f+"-"+m}return result},e.message=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;function r(e,t,n,o){var r,i=n.icon,a=n.time,l=n.position,s=n.transitionIn,c=n.transitionOut,u=n.messageColor,d=n.titleColor,f=n.backgroundColor,m=n.zindex,v=n.displayMode;iziToast.show((_defineProperty(r={layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:v||"replace",transitionIn:s||volantis.GLOBAL_CONFIG.plugins.message.transitionIn,transitionOut:c||volantis.GLOBAL_CONFIG.plugins.message.transitionOut,messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:f||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",i||volantis.GLOBAL_CONFIG.plugins.message.icon["default"]),_defineProperty(r,"timeout",a||volantis.GLOBAL_CONFIG.plugins.message.time["default"]),_defineProperty(r,"position",l||volantis.GLOBAL_CONFIG.plugins.message.position),_defineProperty(r,"title",e),_defineProperty(r,"message",t),_defineProperty(r,"onClosed",(function(){o&&o()})),r))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){r(e,t,n,o)}))):r(e,t,n,o)},e.question=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null,i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;function a(e,t,n,o,r,i){var a,l=n.icon,s=n.time,c=(n.position,n.transitionIn,n.transitionOut),u=n.messageColor,d=n.titleColor,f=n.backgroundColor,m=n.zindex;iziToast.question((_defineProperty(a={id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:f||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",l||volantis.GLOBAL_CONFIG.plugins.message.icon.quection),_defineProperty(a,"timeout",s||volantis.GLOBAL_CONFIG.plugins.message.time.quection),_defineProperty(a,"title",e),_defineProperty(a,"message",t),_defineProperty(a,"buttons",[["<button><b>是</b></button>",function(e,t){e.hide({transitionOut:c||"fadeOut"},t,"button"),o&&o(e,t)}],["<button><b>否</b></button>",function(e,t){e.hide({transitionOut:c||"fadeOut"},t,"button"),r&&r(e,t)}]]),_defineProperty(a,"onClosed",(function(e,t,n){i&&i(e,t,n)})),a))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){a(e,t,n,o,r,i)}))):a(e,t,n,o,r,i)},e.hideMessage=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,t=document.querySelector(".iziToast");function n(e){iziToast.hide({},t),e&&e()}t?"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){n(e)}))):n(e):e&&e()};var n=0;return e.messageCopyright=function(){volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.copyright.enable&&n<1&&(n++,VolantisApp.message(volantis.GLOBAL_CONFIG.plugins.message.copyright.title,volantis.GLOBAL_CONFIG.plugins.message.copyright.message,{icon:volantis.GLOBAL_CONFIG.plugins.message.copyright.icon,transitionIn:"flipInX",transitionOut:"flipOutX",displayMode:1}))},{init:function(){e.init(),e.event()},subscribe:function(){e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs(),e.footnotes()},pjaxReload:function(){e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),n=0},utilCopyCode:e.utilCopyCode,utilWriteClipText:e.utilWriteClipText,utilTimeAgo:e.utilTimeAgo,message:e.message,question:e.question,hideMessage:e.hideMessage,messageCopyright:e.messageCopyright,scrolltoElement:e.scrolltoElement}}();Object.freeze(VolantisApp);var VolantisFancyBox=function(){var e={loadFancyBox:function(e){volantis.css(volantis.GLOBAL_CONFIG.plugins.fancybox.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.fancybox.js).then((function(){e&&e()}))},init:function(){var t=!(arguments.length>0&&arguments[0]!==undefined)||arguments[0],n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:e.groupBind;!document.querySelector(".md .gallery img, .fancybox")&&t||("undefined"==typeof Fancybox?e.loadFancyBox(n):n())},elementHandling:function(e,t){document.querySelectorAll(e).forEach((function(e){if(!e.hasAttribute("fancybox")){e.setAttribute("fancybox","");var n=document.createElement("a");n.setAttribute("href",e.src),n.setAttribute("data-caption",e.alt),n.setAttribute("data-fancybox",t),n.classList.add("fancybox"),n.append(e.cloneNode()),e.replaceWith(n)}}))},bind:function(t){e.init(!1,(function(){Fancybox.bind(t,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,n){return n.$trigger.alt||null}})}))},groupBind:function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,t=new Set;document.querySelectorAll(".gallery").forEach((function(e){e.querySelector("img")&&t.add(e.getAttribute("data-group")||"default")})),e&&t.add(e);var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var r=n.value;Fancybox.unbind('[data-fancybox="'+r+'"]'),Fancybox.bind('[data-fancybox="'+r+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}}catch(i){o.e(i)}finally{o.f()}}};return{init:e.init,bind:e.bind,groupBind:function(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"default";try{e.elementHandling(t,n),e.init(!1,(function(){e.groupBind(n)}))}catch(o){console.error(o)}}}}();Object.freeze(VolantisFancyBox);var highlightKeyWords=function(){var e={markNum:0,markNextId:-1,startFromURL:function(){var t=decodeURI(new URL(location.href).searchParams.get("keyword")),n=t?t.split(" "):[],o=document.querySelector("#l_main");1==n.length&&"null"==n[0]||(e.start(n,o),e.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:function(){volantis.cleanContentVisibility(),e.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(e.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:function(t){var n=t||(e.markNextId+1)%e.markNum;e.markNextId=parseInt(n);var o=document.getElementById("keyword-mark-"+e.markNextId);return o||(e.markNextId=(e.markNextId+1)%e.markNum,o=document.getElementById("keyword-mark-"+e.markNextId)),o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),o},scrollToPrevHighlightKeywordMark:function(t){var n=t||(e.markNextId-1+e.markNum)%e.markNum;e.markNextId=parseInt(n);var o=document.getElementById("keyword-mark-"+e.markNextId);return o||(e.markNextId=(e.markNextId-1+e.markNum)%e.markNum,o=document.getElementById("keyword-mark-"+e.markNextId)),o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),o},start:function(t,n){if(e.markNum=0,t.length&&n&&(1!=t.length||"null"!=t[0])){console.log(t);for(var o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),r=[];o.nextNode();)o.currentNode.parentNode.matches("button, select, textarea")||r.push(o.currentNode);r.forEach((function(n){var o=_slicedToArray(e.getIndexByWord(t,n.nodeValue),1)[0];if(o.length){var r=e.mergeIntoSlice(0,n.nodeValue.length,o);e.highlightText(n,r,"keyword"),e.highlightStyle()}}))}},getIndexByWord:function(e,t){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],o=[],r=new Set;return e.forEach((function(e){var i=document.createElement("div");i.innerText=e;var a=(e=i.innerHTML).length;if(0!==a){var l=0,s=-1;for(n||(t=t.toLowerCase(),e=e.toLowerCase());(s=t.indexOf(e,l))>-1;)o.push({position:s,word:e}),r.add(e),l=s+a}})),o.sort((function(e,t){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length})),[o,r]},mergeIntoSlice:function(e,t,n){for(var o=n[0],r=o,i=r.position,a=r.word,l=[],s=new Set;i+a.length<=t&&0!==n.length;){s.add(a),l.push({position:i,length:a.length});var c=i+a.length;for(n.shift();0!==n.length&&(i=(o=n[0]).position,a=o.word,c>i);)n.shift()}return{hits:l,start:e,end:t,count:s.size}},highlightText:function(t,n,o){var r,i=t.nodeValue,a=n.start,l=[],s=_createForOfIteratorHelper(n.hits);try{for(s.s();!(r=s.n()).done;){var c=r.value,u=c.position,d=c.length,f=document.createTextNode(i.substring(a,u));a=u+d;var m=document.createElement("mark");m.className=o,(m=e.highlightStyle(m)).appendChild(document.createTextNode(i.substr(u,d))),l.push(f,m)}}catch(v){s.e(v)}finally{s.f()}t.nodeValue=i.substring(a,n.end),l.forEach((function(e){t.parentNode.insertBefore(e,t)}))},highlightStyle:function(t){if(t)return t.id="keyword-mark-"+e.markNum,e.markNum++,t.style.background="transparent",t.style["border-bottom"]="1px dashed #ff2a2a",t.style.color="#ff2a2a",t.style["font-weight"]="bold",t},cleanHighlightStyle:function(){document.querySelectorAll(".keyword").forEach((function(e){e.style.background="transparent",e.style["border-bottom"]=null,e.style.color=null,e.style["font-weight"]=null}))}};return{start:function(t,n){e.start(t,n)},startFromURL:function(){e.startFromURL()},scrollToNextHighlightKeywordMark:function(t){e.scrollToNextHighlightKeywordMark(t)},scrollToPrevHighlightKeywordMark:function(t){e.scrollToPrevHighlightKeywordMark(t)},cleanHighlightStyle:function(){e.cleanHighlightStyle()}}}();Object.freeze(highlightKeyWords);var DOMController={visible:function(e){var t=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1];e&&(e.style.display=!0===t?"block":"none")},remove:function(e){document.querySelectorAll(e).forEach((function(e){e.remove()}))},removeList:function(e){e.forEach((function(e){DOMController.remove(e)}))},setAttribute:function(e,t,n){document.querySelectorAll(e).forEach((function(e){e.setAttribute(t,n)}))},setAttributeList:function(e){e.forEach((function(e){DOMController.setAttribute(e[0],e[1],e[2])}))},setStyle:function(e,t,n){document.querySelectorAll(e).forEach((function(e){e.style[t]=n}))},setStyleList:function(e){e.forEach((function(e){DOMController.setStyle(e[0],e[1],e[2])}))},fadeIn:function(e){if(e)return e.style.visibility="visible",e.style.opacity=1,e.style.display="block",e.style.transition="all 0.5s linear",e},fadeOut:function(e){if(e)return e.style.visibility="hidden",e.style.opacity=0,e.style.display="none",e.style.transition="all 0.5s linear",e},fadeToggle:function(e){if(e)return e="hidden"==e.style.visibility?DOMController.fadeIn(e):DOMController.fadeOut(e)},fadeToggleList:function(e){e.forEach((function(e){DOMController.fadeToggle(e)}))},hasClass:function(e,t){if(e)return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){if(e)return e.classList.add(t),e},removeClass:function(e,t){if(e)return e.classList.remove(t),e},toggleClass:function(e,t){if(e)return DOMController.hasClass(e,t)?DOMController.removeClass(e,t):DOMController.addClass(e,t),e},toggleClassList:function(e){e.forEach((function(e){DOMController.toggleClass(e[0],e[1])}))}};Object.freeze(DOMController);var VolantisRequest={timeoutFetch:function(e,t,n){var o,r=new AbortController;null===(o=n.signal)||void 0===o||o.addEventListener("abort",(function(){return r.abort()}));var i=fetch(e,_objectSpread(_objectSpread({},n),{},{signal:r.signal}));if(t>0){var a=setTimeout((function(){return r.abort()}),t);i["finally"]((function(){clearTimeout(a)}))}return i=i["catch"]((function(t){throw"AbortError"===(t||{}).name?new Error("Fetch timeout: ".concat(e)):t}))},Fetch:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,n){var o,r,i,a=arguments;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.length>2&&a[2]!==undefined?a[2]:15e3,t.next=3,VolantisRequest.timeoutFetch(e,o,n);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Fetch error: ".concat(e," | ").concat(r.status));case 6:return t.next=8,r.json();case 8:if((i=t.sent).success){t.next=11;break}throw i;case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(t,n){return e.apply(this,arguments)}}(),POST:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,n){var o,r,i;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"POST"},n&&(r=new FormData,Object.keys(n).forEach((function(e){return r.append(e,String(n[e]))})),o.body=r),t.next=4,VolantisRequest.Fetch(e,o);case 4:return i=t.sent,t.abrupt("return",i.data);case 6:case"end":return t.stop()}}),t)})));return function(t,n){return e.apply(this,arguments)}}(),Get:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,n){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,VolantisRequest.Fetch(e+(n?"?".concat(new URLSearchParams(n)):""),{method:"GET"});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(t,n){return e.apply(this,arguments)}}()};Object.freeze(VolantisRequest);
//# sourceMappingURL=../maps/js/app.js.map