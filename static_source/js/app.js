"use strict";function _typeof15(t){return _typeof15="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof15(t)}function _typeof14(t){return _typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)},_typeof14(t)}function _typeof13(t){return _typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)},_typeof13(t)}function _typeof12(t){return _typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)},_typeof12(t)}function _typeof11(t){return _typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)},_typeof11(t)}function _typeof10(t){return _typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)},_typeof10(t)}function _typeof9(t){return _typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)},_typeof9(t)}function _typeof8(t){return _typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)},_typeof8(t)}function _typeof7(t){return _typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)},_typeof7(t)}function _typeof6(t){return _typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)},_typeof6(t)}function _typeof5(t){return _typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)},_typeof5(t)}function _typeof4(t){return _typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)},_typeof4(t)}function _typeof3(t){return _typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)},_typeof3(t)}function _typeof2(t){return _typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)},_typeof2(t)}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)},_typeof(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,n=Object.defineProperty||function(t,e,o){t[e]=o.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,o){return t[e]=o}}function c(t,e,o,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),l=new C(r||[]);return n(a,"_invoke",{value:S(t,o,l)}),a}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(E){return{type:"throw",arg:E}}}t.wrap=c;var f={};function d(){}function m(){}function y(){}var p={};s(p,i,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(x([])));h&&h!==e&&o.call(h,i)&&(p=h);var g=y.prototype=d.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(n,i,a,l){var s=u(t[n],t,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==_typeof(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,l)}))}l(s.arg)}var i;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return A()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var l=w(a,o);if(l){if(l===f)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var s=u(t,e,o);if("normal"===s.type){if(n=o.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(n="completed",o.method="throw",o.arg=s.arg)}}}function w(t,e){var o=e.method,n=t.iterator[o];if(undefined===n)return e.delegate=null,"throw"===o&&t.iterator["return"]&&(e.method="return",e.arg=undefined,w(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),f;var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=undefined,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:undefined,done:!0}}return m.prototype=y,n(g,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:m,configurable:!0}),m.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,o,n,r,i){void 0===i&&(i=Promise);var a=new _(c(e,o,n,r),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),s(g,l,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function r(){for(;o.length;){var t=o.pop();if(t in e)return r.value=t,r.done=!1,r}return r.done=!0,r}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(o,n){return a.type="throw",a.arg=t,e.next=o,n&&(e.method="next",e.arg=undefined),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),L(o),f}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;L(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:x(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=undefined),f}},t}function asyncGeneratorStep(t,e,o,n,r,i,a){try{var l=t[i](a),s=l.value}catch(c){return void o(c)}l.done?e(s):Promise.resolve(s).then(n,r)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){asyncGeneratorStep(i,n,r,a,l,"next",t)}function l(t){asyncGeneratorStep(i,n,r,a,l,"throw",t)}a(undefined)}))}}function ownKeys(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach((function(e){_defineProperty(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,r,i,a,l=[],s=!0,c=!1;try{if(i=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;s=!1}else for(;!(s=(n=i.call(o)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&null!=o["return"]&&(a=o["return"](),Object(a)!==a))return}finally{if(c)throw r}}return l}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==o["return"]||o["return"]()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function _defineProperty(t,e,o){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(o!==undefined){var n=o.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((function(){VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((function(){VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()}),"app.js"),volantis.pjax.send((function(){volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));var locationHash=function(){if(window.location.hash){var t=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),e=document.getElementById(t);e&&setTimeout((function(){window.location.hash.startsWith("#fn")?volantis.scroll.to(e,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant",observer:!0}):volantis.scroll.to(e,{addTop:5,behavior:"instant",observer:!0})}),1e3)}};Object.freeze(locationHash);var VolantisApp=function(){var t={},e=80;t.init=function(){volantis.dom.header&&(e=volantis.dom.header.clientHeight+16),window.onresize=function(){document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(t.setGlobalHeaderMenuEvent(),t.setHeader(),t.setHeaderSearch())},volantis.scroll.push(t.scrollEventCallBack,"scrollEventCallBack")},t.event=function(){var e;null===(e=volantis.dom.$(document.getElementById("scroll-down")))||void 0===e||e.on("click",(function(){t.scrolltoElement(volantis.dom.bodyAnchor)}));var o=document.querySelector("#l_side");if(o&&(o.querySelectorAll("section").length||document.querySelector("#l_main").classList.add("no_sidebar")),volantis.GLOBAL_CONFIG.sidebar.for_page.includes("webinfo")||volantis.GLOBAL_CONFIG.sidebar.for_post.includes("webinfo")){var n=volantis.GLOBAL_CONFIG.sidebar.webinfo.lastupd;document.getElementById("last-update-show")&&n.enable&&n.friendlyShow&&(document.getElementById("last-update-show").innerHTML=t.utilTimeAgo(volantis.GLOBAL_CONFIG.lastupdate))}if(document.getElementById("webinfo-runtime-count")){var r=new Date(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.data),i=(new Date).getTime()-r.getTime(),a=Math.floor(i/864e5);document.getElementById("webinfo-runtime-count").innerHTML="".concat(a," ").concat(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.unit)}document.body.oncopy=function(){t.messageCopyright()}},t.restData=function(){e=volantis.dom.header?volantis.dom.header.clientHeight+16:80},t.setIsMobile=function(){document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},t.scrolltoElement=function(t){var o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:e;volantis.scroll.to(t,{top:t.offsetTop-o})},t.scrollEventCallBack=function(){var t=volantis.dom.bodyAnchor.offsetTop-e,o=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(o>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(o-t>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&o>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(t){volantis.dom.$(t).hide()})))},t.setScrollAnchor=function(){volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((function(e){e.preventDefault(),e.stopPropagation(),t.scrolltoElement(volantis.dom.bodyAnchor),e.stopImmediatePropagation()}))},t.setHeader=function(){pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(document.title.split(" - ")[0]),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((function(e){e.preventDefault(),e.stopPropagation(),t.scrolltoElement(volantis.dom.commentTarget),e.stopImmediatePropagation()})):volantis.dom.comment.style.display="none",volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((function(t){t.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(t){t.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.style.display="none"))},t.setHeaderMenuSelection=function(){volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((function(t){var e=volantis.dom.$(t).find("li a.active");e&&e.removeClass("active");var o=volantis.dom.$(t).find("div a.active");o&&o.removeClass("active")}));var t=location.pathname.replace(/\/|%|\./g,"");0==t.length&&(t="home");var e=t.match(/page\d{0,}$/g);e&&(e=e[0],t=t.split(e)[0]);var o=t.match(/index.html/);o&&(o=o[0],t=t.split(o)[0]),(t=t.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((function(e){var o=e.querySelector("[active-action=action-"+t+"]");o&&volantis.dom.$(o).addClass("active")}))},t.setGlobalHeaderMenuEvent=function(){volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(t){t.querySelector(".list-v")&&volantis.dom.$(t).click((function(t){t.stopPropagation(),t.currentTarget.parentElement.childNodes.forEach((function(t){"[object HTMLLIElement]"==Object.prototype.toString.call(t)&&t.childNodes.forEach((function(t){"[object HTMLUListElement]"==Object.prototype.toString.call(t)&&volantis.dom.$(t).hide()}))}));for(var e=t.currentTarget.children,o=0;o<e.length;o++){var n=e[o];"menu"===volantis.dom.$(n).title?volantis.dom.$(n).display="flex":volantis.dom.$(n).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(t){volantis.dom.$(t.parentElement).click((function(t){t.stopPropagation(),t.target.origin==t.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(t){volantis.dom.$(t).hide()}))}),0)})),t.setPageHeaderMenuEvent()},t.setPageHeaderMenuEvent=function(){volantis.isMobile&&volantis.dom.$(document).click((function(t){volantis.dom.mPhoneList.forEach((function(t){volantis.dom.$(t).hide()}))}))},t.setHeaderSearch=function(){volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(t){t.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(t){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(t){t.stopPropagation()}),!1))},t.setTabs=function(){var t=document.querySelectorAll("#l_main .tabs .nav-tabs");t&&t.forEach((function(t){t.querySelectorAll("a").forEach((function(t){volantis.dom.$(t).on("click",(function(t){t.preventDefault(),t.stopPropagation();var e=volantis.dom.$(t.target.parentElement.parentElement.parentElement);return e.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(t.target.parentElement).addClass("active"),e.find(".tab-content .active").removeClass("active"),e.find(t.target.className).addClass("active"),!1}))}))}))},t.footnotes=function(){var t=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");t.forEach((function(e,o){t[o].click=function(){},volantis.dom.$(e).on("click",(function(t){t.stopPropagation(),t.preventDefault();var e=decodeURI(t.target.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(e);o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})}))}))},t.utilCopyCode=function(e){document.querySelectorAll(e).forEach((function(e){e.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fa-solid fa-copy"></i><span>COPY</span></button>');var o=e.previousSibling;o.onclick=function(n){n.stopPropagation();var r=o.querySelector("i"),i=o.querySelector("span");e.focus();var a=new Range;a.selectNodeContents(e),document.getSelection().removeAllRanges(),document.getSelection().addRange(a);var l=document.getSelection().toString();t.utilWriteClipText(l).then((function(){t.messageCopyright(),o.classList.add("copied"),r.classList.remove("fa-copy"),r.classList.add("fa-check-circle"),i.innerText="COPIED",setTimeout((function(){r.classList.remove("fa-check-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}),2e3)}))["catch"]((function(t){VolantisApp.message("系统提示",t,{icon:"fa fa-exclamation-circle red"}),o.classList.add("copied-failed"),r.classList.remove("fa-copy"),r.classList.add("fa-exclamation-circle"),i.innerText="COPY FAILED",setTimeout((function(){r.classList.remove("fa-exclamation-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}))}))}}))},t.utilWriteClipText=function(t){return navigator.clipboard.writeText(t).then((function(){return Promise.resolve()}))["catch"]((function(e){var o=document.createElement("textarea");o.setAttribute("readonly","readonly"),document.body.appendChild(o),o.innerHTML=t,o.select();try{var n=document.execCommand("copy");return document.body.removeChild(o),n&&"unsuccessful"!==n?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(o),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}))},t.utilTimeAgo=function(t){var e=(new Date).getTime()-t,o=e/6e4,n=e/36e5,r=e/864e5,i=e/6048e5,a=e/2592e6;if(e<0)result="";else if(a>=1&&a<7)result=" "+parseInt(a)+" 月前";else if(i>=1&&i<4)result=" "+parseInt(i)+" 周前";else if(r>=1&&r<7)result=" "+parseInt(r)+" 天前";else if(n>=1&&n<24)result=" "+parseInt(n)+" 小时前";else if(o>=1&&o<60)result=" "+parseInt(o)+" 分钟前";else if(e>=0&&e<=6e4)result="刚刚";else{var l=new Date;l.setTime(t);var s=l.getFullYear(),c=l.getMonth()+1<10?"0"+(l.getMonth()+1):l.getMonth()+1,u=l.getDate()<10?"0"+l.getDate():l.getDate();l.getHours(),l.getHours(),l.getMinutes(),l.getMinutes(),l.getSeconds(),l.getSeconds(),result=s+"-"+c+"-"+u}return result},t.message=function(t,e){var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;function r(t,e,o,n){var r,i=o.icon,a=o.time,l=o.position,s=o.transitionIn,c=o.transitionOut,u=o.messageColor,f=o.titleColor,d=o.backgroundColor,m=o.zindex,y=o.displayMode;iziToast.show((_defineProperty(r={layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:y||"replace",transitionIn:s||volantis.GLOBAL_CONFIG.plugins.message.transitionIn,transitionOut:c||volantis.GLOBAL_CONFIG.plugins.message.transitionOut,messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:f||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:d||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",i||volantis.GLOBAL_CONFIG.plugins.message.icon["default"]),_defineProperty(r,"timeout",a||volantis.GLOBAL_CONFIG.plugins.message.time["default"]),_defineProperty(r,"position",l||volantis.GLOBAL_CONFIG.plugins.message.position),_defineProperty(r,"title",t),_defineProperty(r,"message",e),_defineProperty(r,"onClosed",(function(){n&&n()})),r))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){r(t,e,o,n)}))):r(t,e,o,n)},t.question=function(t,e){var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null,i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;function a(t,e,o,n,r,i){var a,l=o.icon,s=o.time,c=(o.position,o.transitionIn,o.transitionOut),u=o.messageColor,f=o.titleColor,d=o.backgroundColor,m=o.zindex;iziToast.question((_defineProperty(a={id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:f||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:d||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",l||volantis.GLOBAL_CONFIG.plugins.message.icon.quection),_defineProperty(a,"timeout",s||volantis.GLOBAL_CONFIG.plugins.message.time.quection),_defineProperty(a,"title",t),_defineProperty(a,"message",e),_defineProperty(a,"buttons",[["<button><b>是</b></button>",function(t,e){t.hide({transitionOut:c||"fadeOut"},e,"button"),n&&n(t,e)}],["<button><b>否</b></button>",function(t,e){t.hide({transitionOut:c||"fadeOut"},e,"button"),r&&r(t,e)}]]),_defineProperty(a,"onClosed",(function(t,e,o){i&&i(t,e,o)})),a))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){a(t,e,o,n,r,i)}))):a(t,e,o,n,r,i)},t.hideMessage=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=document.querySelector(".iziToast");function o(t){iziToast.hide({},e),t&&t()}e?"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(function(){o(t)}))):o(t):t&&t()};var o=0;return t.messageCopyright=function(){volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.copyright.enable&&o<1&&(o++,VolantisApp.message(volantis.GLOBAL_CONFIG.plugins.message.copyright.title,volantis.GLOBAL_CONFIG.plugins.message.copyright.message,{icon:volantis.GLOBAL_CONFIG.plugins.message.copyright.icon,transitionIn:"flipInX",transitionOut:"flipOutX",displayMode:1}))},{init:function(){t.init(),t.event()},subscribe:function(){t.setIsMobile(),t.setHeader(),t.setHeaderMenuSelection(),t.setGlobalHeaderMenuEvent(),t.setHeaderSearch(),t.setScrollAnchor(),t.setTabs(),t.footnotes()},pjaxReload:function(){t.event(),t.restData(),t.setHeader(),t.setHeaderMenuSelection(),t.setPageHeaderMenuEvent(),t.setScrollAnchor(),t.setTabs(),t.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(t){t.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),o=0},utilCopyCode:t.utilCopyCode,utilWriteClipText:t.utilWriteClipText,utilTimeAgo:t.utilTimeAgo,message:t.message,question:t.question,hideMessage:t.hideMessage,messageCopyright:t.messageCopyright,scrolltoElement:t.scrolltoElement}}();Object.freeze(VolantisApp);var VolantisFancyBox=function(){var t={loadFancyBox:function(t){volantis.css(volantis.GLOBAL_CONFIG.plugins.fancybox.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.fancybox.js).then((function(){t&&t()}))},init:function(){var e=!(arguments.length>0&&arguments[0]!==undefined)||arguments[0],o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.groupBind;!document.querySelector(".md .gallery img, .fancybox")&&e||("undefined"==typeof Fancybox?t.loadFancyBox(o):o())},elementHandling:function(t,e){document.querySelectorAll(t).forEach((function(t){if(!t.hasAttribute("fancybox")){t.setAttribute("fancybox","");var o=document.createElement("a");o.setAttribute("href",t.src),o.setAttribute("data-caption",t.alt),o.setAttribute("data-fancybox",e),o.classList.add("fancybox"),o.append(t.cloneNode()),t.replaceWith(o)}}))},bind:function(e){t.init(!1,(function(){Fancybox.bind(e,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(t,e,o){return o.$trigger.alt||null}})}))},groupBind:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=new Set;document.querySelectorAll(".gallery").forEach((function(t){t.querySelector("img")&&e.add(t.getAttribute("data-group")||"default")})),t&&e.add(t);var o,n=_createForOfIteratorHelper(e);try{for(n.s();!(o=n.n()).done;){var r=o.value;Fancybox.unbind('[data-fancybox="'+r+'"]'),Fancybox.bind('[data-fancybox="'+r+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}}catch(i){n.e(i)}finally{n.f()}}};return{init:t.init,bind:t.bind,groupBind:function(e){var o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"default";try{t.elementHandling(e,o),t.init(!1,(function(){t.groupBind(o)}))}catch(n){console.error(n)}}}}();Object.freeze(VolantisFancyBox);var highlightKeyWords=function(){var t={markNum:0,markNextId:-1,startFromURL:function(){var e=decodeURI(new URL(location.href).searchParams.get("keyword")),o=e?e.split(" "):[],n=document.querySelector("#l_main");1==o.length&&"null"==o[0]||(t.start(o,n),t.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:function(){volantis.cleanContentVisibility(),t.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(t.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:function(e){var o=e||(t.markNextId+1)%t.markNum;t.markNextId=parseInt(o);var n=document.getElementById("keyword-mark-"+t.markNextId);return n||(t.markNextId=(t.markNextId+1)%t.markNum,n=document.getElementById("keyword-mark-"+t.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},scrollToPrevHighlightKeywordMark:function(e){var o=e||(t.markNextId-1+t.markNum)%t.markNum;t.markNextId=parseInt(o);var n=document.getElementById("keyword-mark-"+t.markNextId);return n||(t.markNextId=(t.markNextId-1+t.markNum)%t.markNum,n=document.getElementById("keyword-mark-"+t.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},start:function(e,o){if(t.markNum=0,e.length&&o&&(1!=e.length||"null"!=e[0])){console.log(e);for(var n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),r=[];n.nextNode();)n.currentNode.parentNode.matches("button, select, textarea")||r.push(n.currentNode);r.forEach((function(o){var n=_slicedToArray(t.getIndexByWord(e,o.nodeValue),1)[0];if(n.length){var r=t.mergeIntoSlice(0,o.nodeValue.length,n);t.highlightText(o,r,"keyword"),t.highlightStyle()}}))}},getIndexByWord:function(t,e){var o=arguments.length>2&&arguments[2]!==undefined&&arguments[2],n=[],r=new Set;return t.forEach((function(t){var i=document.createElement("div");i.innerText=t;var a=(t=i.innerHTML).length;if(0!==a){var l=0,s=-1;for(o||(e=e.toLowerCase(),t=t.toLowerCase());(s=e.indexOf(t,l))>-1;)n.push({position:s,word:t}),r.add(t),l=s+a}})),n.sort((function(t,e){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length})),[n,r]},mergeIntoSlice:function(t,e,o){for(var n=o[0],r=n,i=r.position,a=r.word,l=[],s=new Set;i+a.length<=e&&0!==o.length;){s.add(a),l.push({position:i,length:a.length});var c=i+a.length;for(o.shift();0!==o.length&&(i=(n=o[0]).position,a=n.word,c>i);)o.shift()}return{hits:l,start:t,end:e,count:s.size}},highlightText:function(e,o,n){var r,i=e.nodeValue,a=o.start,l=[],s=_createForOfIteratorHelper(o.hits);try{for(s.s();!(r=s.n()).done;){var c=r.value,u=c.position,f=c.length,d=document.createTextNode(i.substring(a,u));a=u+f;var m=document.createElement("mark");m.className=n,(m=t.highlightStyle(m)).appendChild(document.createTextNode(i.substr(u,f))),l.push(d,m)}}catch(y){s.e(y)}finally{s.f()}e.nodeValue=i.substring(a,o.end),l.forEach((function(t){e.parentNode.insertBefore(t,e)}))},highlightStyle:function(e){if(e)return e.id="keyword-mark-"+t.markNum,t.markNum++,e.style.background="transparent",e.style["border-bottom"]="1px dashed #ff2a2a",e.style.color="#ff2a2a",e.style["font-weight"]="bold",e},cleanHighlightStyle:function(){document.querySelectorAll(".keyword").forEach((function(t){t.style.background="transparent",t.style["border-bottom"]=null,t.style.color=null,t.style["font-weight"]=null}))}};return{start:function(e,o){t.start(e,o)},startFromURL:function(){t.startFromURL()},scrollToNextHighlightKeywordMark:function(e){t.scrollToNextHighlightKeywordMark(e)},scrollToPrevHighlightKeywordMark:function(e){t.scrollToPrevHighlightKeywordMark(e)},cleanHighlightStyle:function(){t.cleanHighlightStyle()}}}();Object.freeze(highlightKeyWords);var DOMController={visible:function(t){var e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1];t&&(t.style.display=!0===e?"block":"none")},remove:function(t){document.querySelectorAll(t).forEach((function(t){t.remove()}))},removeList:function(t){t.forEach((function(t){DOMController.remove(t)}))},setAttribute:function(t,e,o){document.querySelectorAll(t).forEach((function(t){t.setAttribute(e,o)}))},setAttributeList:function(t){t.forEach((function(t){DOMController.setAttribute(t[0],t[1],t[2])}))},setStyle:function(t,e,o){document.querySelectorAll(t).forEach((function(t){t.style[e]=o}))},setStyleList:function(t){t.forEach((function(t){DOMController.setStyle(t[0],t[1],t[2])}))},fadeIn:function(t){if(t)return t.style.visibility="visible",t.style.opacity=1,t.style.display="block",t.style.transition="all 0.5s linear",t},fadeOut:function(t){if(t)return t.style.visibility="hidden",t.style.opacity=0,t.style.display="none",t.style.transition="all 0.5s linear",t},fadeToggle:function(t){if(t)return"hidden"==t.style.visibility?DOMController.fadeIn(t):DOMController.fadeOut(t)},fadeToggleList:function(t){t.forEach((function(t){DOMController.fadeToggle(t)}))},hasClass:function(t,e){if(t)return t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){if(t)return t.classList.add(e),t},removeClass:function(t,e){if(t)return t.classList.remove(e),t},toggleClass:function(t,e){if(t)return DOMController.hasClass(t,e)?DOMController.removeClass(t,e):DOMController.addClass(t,e),t},toggleClassList:function(t){t.forEach((function(t){DOMController.toggleClass(t[0],t[1])}))}};Object.freeze(DOMController);var VolantisRequest={timeoutFetch:function(t,e,o){var n,r=new AbortController;null===(n=o.signal)||void 0===n||n.addEventListener("abort",(function(){return r.abort()}));var i=fetch(t,_objectSpread(_objectSpread({},o),{},{signal:r.signal}));if(e>0){var a=setTimeout((function(){return r.abort()}),e);i["finally"]((function(){clearTimeout(a)}))}return i["catch"]((function(e){throw"AbortError"===(e||{}).name?new Error("Fetch timeout: ".concat(t)):e}))},Fetch:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,o){var n,r,i,a=arguments;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&a[2]!==undefined?a[2]:15e3,e.next=3,VolantisRequest.timeoutFetch(t,n,o);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Fetch error: ".concat(t," | ").concat(r.status));case 6:return e.next=8,r.json();case 8:if((i=e.sent).success){e.next=11;break}throw i;case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(e,o){return t.apply(this,arguments)}}(),POST:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,o){var n,r,i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST"},o&&(r=new FormData,Object.keys(o).forEach((function(t){return r.append(t,String(o[t]))})),n.body=r),e.next=4,VolantisRequest.Fetch(t,n);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(e,o){return t.apply(this,arguments)}}(),Get:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,o){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,VolantisRequest.Fetch(t+(o?"?".concat(new URLSearchParams(o)):""),{method:"GET"});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(e,o){return t.apply(this,arguments)}}()};Object.freeze(VolantisRequest);
//# sourceMappingURL=../maps/js/app.js.map
