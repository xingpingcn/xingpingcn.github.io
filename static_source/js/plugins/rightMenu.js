"use strict";function _typeof9(e){return _typeof9="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof9(e)}function _typeof8(e){return _typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(e){return _typeof9(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof9(e)},_typeof8(e)}function _typeof7(e){return _typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(e){return _typeof8(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof8(e)},_typeof7(e)}function _typeof6(e){return _typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(e){return _typeof7(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof7(e)},_typeof6(e)}function _typeof5(e){return _typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(e){return _typeof6(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof6(e)},_typeof5(e)}function _typeof4(e){return _typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(e){return _typeof5(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof5(e)},_typeof4(e)}function _typeof3(e){return _typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(e){return _typeof4(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof4(e)},_typeof3(e)}function _typeof2(e){return _typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)},_typeof2(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},_typeof(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,o=t.hasOwnProperty,n=Object.defineProperty||function(e,t,o){e[t]=o.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(L){a=function(e,t,o){return e[t]=o}}function u(e,t,o,r){var i=t&&t.prototype instanceof y?t:y,l=Object.create(i.prototype),c=new w(r||[]);return n(l,"_invoke",{value:S(e,o,c)}),l}function s(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function y(){}function d(){}function p(){}var m={};a(m,i,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(D([])));g&&g!==t&&o.call(g,i)&&(m=g);var v=p.prototype=y.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function M(e,t){function r(n,i,l,c){var a=s(e[n],e,i);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"==_typeof(f)&&o.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,c)}))}c(a.arg)}var i;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return i=i?i.then(n,n):n()}})}function S(e,t,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return x()}for(o.method=r,o.arg=i;;){var l=o.delegate;if(l){var c=C(l,o);if(c){if(c===f)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var a=s(e,t,o);if("normal"===a.type){if(n=o.done?"completed":"suspendedYield",a.arg===f)continue;return{value:a.arg,done:o.done}}"throw"===a.type&&(n="completed",o.method="throw",o.arg=a.arg)}}}function C(e,t){var o=t.method,n=e.iterator[o];if(undefined===n)return t.delegate=null,"throw"===o&&e.iterator["return"]&&(t.method="return",t.arg=undefined,C(e,t),"throw"===t.method)||"return"!==o&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+o+"' method")),f;var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function D(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:undefined,done:!0}}return d.prototype=p,n(v,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=a(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(M.prototype),a(M.prototype,l,(function(){return this})),e.AsyncIterator=M,e.async=function(t,o,n,r,i){void 0===i&&(i=Promise);var l=new M(u(t,o,n,r),i);return e.isGeneratorFunction(o)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},b(v),a(v,c,"Generator"),a(v,i,(function(){return this})),a(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),o=[];for(var n in t)o.push(n);return o.reverse(),function r(){for(;o.length;){var e=o.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},e.values=D,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(o,n){return l.type="throw",l.arg=e,t.next=o,n&&(t.method="next",t.arg=undefined),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),a=o.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),O(o),f}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var n=o.completion;if("throw"===n.type){var r=n.arg;O(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:D(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=undefined),f}},e}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(o!==undefined){var n=o.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function asyncGeneratorStep(e,t,o,n,r,i,l){try{var c=e[i](l),a=c.value}catch(u){return void o(u)}c.done?t(a):Promise.resolve(a).then(n,r)}function _asyncToGenerator(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var i=e.apply(t,o);function l(e){asyncGeneratorStep(i,n,r,l,c,"next",e)}function c(e){asyncGeneratorStep(i,n,r,l,c,"throw",e)}l(undefined)}))}}var RightMenu=function(){var e=volantis.GLOBAL_CONFIG.plugins.rightmenu,t=volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.rightmenu.enable,o={},n=document.getElementById("rightmenu-wrapper"),r=document.getElementById("rightmenu-content"),i=document.getElementById("printHtml"),l=document.getElementById("menuMusic"),c=document.getElementById("readingModel"),a=document.getElementById("read_bkg"),u=document.querySelectorAll(".menuLoad-Content"),s=document.querySelector(".menu-Option"),f=document.querySelector('.menu-Option[data-fn-type="searchWord"]'),y=document.querySelector('.menu-Option[data-fn-type="copyText"]'),d=document.querySelector('.menu-Option[data-fn-type="copyPaste"]'),p=document.querySelector('.menu-Option[data-fn-type="copySelect"]'),m=document.querySelector('.menu-Option[data-fn-type="copyCut"]'),h=document.querySelector('.menu-Option[data-fn-type="copyHref"]'),g=document.querySelector('.menu-Option[data-fn-type="copySrc"]'),v=document.querySelector('.menu-Option[data-fn-type="copyImg"]'),b=document.querySelector('.menu-Option[data-fn-type="openTab"]'),M=document.querySelector("#menuMusic .backward"),S=document.querySelector("#menuMusic .toggle"),C=document.querySelector("#menuMusic .forward"),_=/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;return o.init=function(){DOMController.visible(l,!1),DOMController.visible(s,!1),a&&a.parentNode.removeChild(a);var e=document.createElement("div");e.className="common_read_bkg common_read_hide",e.id="read_bkg",window.document.body.appendChild(e)},o.initEvent=function(){window.document.oncontextmenu=function(e){return e.ctrlKey||document.body.offsetWidth<=500?(o.hideMenu(),!0):o.popMenu(e)},n.oncontextmenu=function(e){return e.stopPropagation(),e.preventDefault(),!1},window.removeEventListener("blur",o.hideMenu),window.addEventListener("blur",o.hideMenu),document.body.removeEventListener("click",o.hideMenu),document.body.addEventListener("click",o.hideMenu),C&&S&&C&&(M.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerBackward()},S.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerToggle()},C.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerForward()})},o.popMenu=function(e){var t=e.clientX,i=e.clientY,l=document.documentElement.clientWidth||document.body.clientWidth,c=document.documentElement.clientHeight||document.body.clientHeight;try{o.setMenuItem(e),DOMController.visible(n),n.focus(),n.style.zIndex="-2147483648";var a=r.offsetWidth,u=r.offsetHeight,s=t+a>l?t-a+10:t,f=i+u>c?i-u+10:i;f=i+u>c&&f<u&&i<u?f+(c-u-f-10):f,n.style.left=s+"px",n.style.top=f+"px",n.style.zIndex="2147483648",volantis.GLOBAL_CONFIG.plugins.message.rightmenu.notice&&o.showMessage()}catch(y){return n.blur(),console.error(y),!0}return!1},o.showMessage=function(){var o="true"===localStorage.getItem("NoticeRightMenu");t&&!o&&VolantisApp.message("右键菜单","唤醒原系统菜单请使用：<kbd>Ctrl</kbd> + <kbd>右键</kbd>",{icon:e.faicon+" fa-exclamation-square red",time:9e3},(function(){localStorage.setItem("NoticeRightMenu","true")}))},o.setMenuItem=function(n){var r=!1,a=n.target,s=window.getSelection().toString();if(DOMController.visible(b,!1),"input"===a.tagName.toLowerCase()||"textarea"===a.tagName.toLowerCase()){var M=a.value;M.length>0?(DOMController.visible(p),p.onclick=function(){n.preventDefault(),a.select()}):DOMController.visible(p,!1),s?(DOMController.visible(m),m.onclick=function(){var e=a.selectionStart,t=a.selectionEnd;o.copyString(s),a.value=M.substring(0,e)+M.substring(t,M.length),a.selectionStart=e,a.selectionEnd=e,a.focus()}):DOMController.visible(m,!1),o.readClipboard().then((function(e){e?(DOMController.visible(d),d.onclick=function(){o.insertAtCaret(a,e)}):DOMController.visible(d,!1)}))["catch"]((function(e){console.error(e),DOMController.visible(d,!1)}))}else DOMController.visible(p,!1),DOMController.visible(d,!1),DOMController.visible(m,!1);var S=a.href;S&&_.test(S)?(r=!0,DOMController.visible(h),DOMController.visible(b),h&&(h.onclick=function(){o.copyString(S)}),b.onclick=function(){window.open(S)}):DOMController.visible(h,!1);var C=a.currentSrc;C&&_.test(C)?(r=!0,DOMController.visible(g),DOMController.visible(b),g.onclick=function(){o.copyString(C)},b.onclick=function(){window.open(C)}):DOMController.visible(g,!1),C&&_.test(C)&&C.trimEnd().endsWith(".png")?(r=!0,DOMController.visible(v),v.onclick=function(){o.writeClipImg(n,(function(o){o&&t&&VolantisApp.message("系统提示","图片复制成功！",{icon:e.faicon+" fa-images"})}),(function(o){t&&VolantisApp.message("系统提示","复制失败："+o,{icon:e.faicon+" fa-exclamation-square red"})}))}):DOMController.visible(v,!1),s?(r=!0,DOMController.visible(y),DOMController.visible(f),y.onclick=function(){o.copyString(s)},f&&(f.onclick=function(){OpenSearch(s)})):(DOMController.visible(y,!1),DOMController.visible(f,!1));var O=document.querySelector("#post.article")||null,w=window.location.pathname;O?(DOMController.visible(i),DOMController.visible(c),i&&(i.onclick=function(){window.location.pathname===w?t&&VolantisApp.question("",'是否打印当前页面？<br><em style="font-size: 80%">建议打印时勾选背景图形</em><br>',{},(function(){o.printHtml()})):o.hideMenu()}),c&&(c.onclick=function(){window.location.pathname,o.readingModel()})):(DOMController.visible(i,!1),DOMController.visible(c,!1)),volantis.GLOBAL_CONFIG.plugins.aplayer.enable&&"undefined"!=typeof RightMenuAplayer&&RightMenuAplayer.APlayer.player!==undefined?e.music_alwaysShow?DOMController.visible(l):"play"===RightMenuAplayer.APlayer.status||"undefined"===RightMenuAplayer.APlayer.status?(r=!0,DOMController.visible(l)):DOMController.visible(l,!1):DOMController.visible(l,!1),u.forEach((function(e){DOMController.visible(e,!r)})),volantis.GLOBAL_CONFIG.plugins.aplayer.enable&&e.layout.includes("music")&&RightMenuAplayer.checkAPlayer()},o.hideMenu=function(){DOMController.visible(n,!1)},o.copyString=function(o){VolantisApp.utilWriteClipText(o).then((function(){t&&VolantisApp.messageCopyright()}))["catch"]((function(o){t&&VolantisApp.message("系统提示",o,{icon:e.faicon+" fa-exclamation-square red"})}))},o.writeClipText=function(e){try{return navigator.clipboard.writeText(e).then((function(){return Promise.resolve()}))["catch"]((function(e){return Promise.reject(e)}))}catch(n){var t=document.createElement("input");t.setAttribute("readonly","readonly"),document.body.appendChild(t),t.setAttribute("value",e),t.select();try{var o=document.execCommand("copy");return document.body.removeChild(t),o&&"unsuccessful"!==o?Promise.resolve():Promise.reject("复制文本失败!")}catch(n){return document.body.removeChild(t),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},o.writeClipImg=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function o(t,n,r){var i,l,c,a,u,s,f,y;return _regeneratorRuntime().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i=e.customPicUrl.enable?t.target.currentSrc.replace(e.customPicUrl.old,e.customPicUrl["new"]):t.target.currentSrc,l=t.target.parentElement,o.prev=2,o.next=5,fetch(i);case 5:return c=o.sent,o.next=8,c.blob();case 8:return a=o.sent,o.next=11,navigator.clipboard.write([new ClipboardItem(_defineProperty({},a.type,a))]).then((function(){n(!0)}),(function(e){console.error("图片复制失败：",e),r(e)}));case 11:o.next=17;break;case 13:o.prev=13,o.t0=o["catch"](2),u=document;try{u.body.createTextRange?((s=document.body.createTextRange()).moveToElementText(l),s.select()):window.getSelection&&(f=window.getSelection(),(y=document.createRange()).selectNodeContents(l),f.removeAllRanges(),f.addRange(y)),document.execCommand("copy"),window.getSelection().removeAllRanges(),n(!1)}catch(d){console.error(d),r("不支持复制当前图片！")}case 17:case"end":return o.stop()}}),o,null,[[2,13]])})));return function(e,o,n){return t.apply(this,arguments)}}(),o.readClipboard=_asyncToGenerator(_regeneratorRuntime().mark((function O(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.permissions.query({name:"clipboard-read"});case 2:if("granted"!==(e=t.sent).state&&"prompt"!==e.state){t.next=5;break}return t.abrupt("return",navigator.clipboard.readText().then((function(e){return e}))["catch"]((function(e){return Promise.reject(e)})));case 5:return t.abrupt("return",Promise.reject(e));case 6:case"end":return t.stop()}}),O)}))),o.insertAtCaret=function(e,t){var o=e.selectionStart,n=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(o||"0"==o){var r=e.scrollTop;e.value=e.value.substring(0,o)+t+e.value.substring(n,e.value.length),e.focus(),e.selectionStart=o+t.length,e.selectionEnd=o+t.length,e.scrollTop=r}else e.value+=t,e.focus()},o.printHtml=function(){volantis.isReadModel&&o.readingModel(),DOMController.setAttribute("details","open","true"),DOMController.remove(".cus-article-bkg"),DOMController.remove(".iziToast-overlay"),DOMController.remove(".iziToast-wrapper"),DOMController.remove(".prev-next"),DOMController.remove("footer"),DOMController.remove("#l_header"),DOMController.remove("#l_cover"),DOMController.remove("#l_side"),DOMController.remove("#comments"),DOMController.remove("#s-top"),DOMController.remove("#BKG"),DOMController.remove("#rightmenu-wrapper"),DOMController.remove(".nav-tabs"),DOMController.remove(".parallax-mirror"),DOMController.remove(".new-meta-item.share"),DOMController.remove("div.footer"),DOMController.setStyle("body","backgroundColor","unset"),DOMController.setStyle("#l_main","width","100%"),DOMController.setStyle("#post","boxShadow","none"),DOMController.setStyle("#post","background","none"),DOMController.setStyle("#post","padding","0"),DOMController.setStyle("h1","textAlign","center"),DOMController.setStyle("h1","fontWeight","600"),DOMController.setStyle("h1","fontSize","2rem"),DOMController.setStyle("h1","marginBottom","20px"),DOMController.setStyle(".tab-pane","display","block"),DOMController.setStyle(".tab-content","borderTop","none"),DOMController.setStyle(".highlight>table pre","whiteSpace","pre-wrap"),DOMController.setStyle(".highlight>table pre","wordBreak","break-all"),DOMController.setStyle(".fancybox img","height","auto"),DOMController.setStyle(".fancybox img","weight","auto"),setTimeout((function(){window.print(),document.body.innerHTML="",window.location.reload()}),50)},o.readingModel=function(){if("function"==typeof ScrollReveal&&ScrollReveal().clean("#comments"),DOMController.fadeToggle(document.querySelector("#l_header")),DOMController.fadeToggle(document.querySelector("footer")),DOMController.fadeToggle(document.querySelector("#s-top")),DOMController.fadeToggle(document.querySelector(".article-meta#bottom")),DOMController.fadeToggle(document.querySelector(".prev-next")),DOMController.fadeToggle(document.querySelector("#l_side")),DOMController.fadeToggle(document.querySelector("#comments")),DOMController.toggleClass(document.querySelector("#l_main"),"common_read"),DOMController.toggleClass(document.querySelector("#l_main"),"common_read_main"),DOMController.toggleClass(document.querySelector("#l_body"),"common_read"),DOMController.toggleClass(document.querySelector("#safearea"),"common_read"),DOMController.toggleClass(document.querySelector("#pjax-container"),"common_read"),DOMController.toggleClass(document.querySelector("#read_bkg"),"common_read_hide"),DOMController.toggleClass(document.querySelector("h1"),"common_read_h1"),DOMController.toggleClass(document.querySelector("#post"),"post_read"),DOMController.toggleClass(document.querySelector("#l_cover"),"read_cover"),DOMController.toggleClass(document.querySelector(".widget.toc-wrapper"),"post_read"),volantis.isReadModel=volantis.isReadModel===undefined||!volantis.isReadModel,volantis.isReadModel){var n={backgroundColor:"var(--color-read-post)",icon:e.faicon+" fa-book-reader",time:5e3};t&&VolantisApp.message("系统提示","阅读模式已开启，您可以点击屏幕空白处退出。",n),document.querySelector("#l_body").removeEventListener("click",o.readingModel),document.querySelector("#l_body").addEventListener("click",(function(e){DOMController.hasClass(e.target,"common_read")&&o.readingModel()}))}else document.querySelector("#l_body").removeEventListener("click",o.readingModel),document.querySelector("#post").removeEventListener("click",o.readingModel)},{init:function(){var e=arguments.length>0&&arguments[0]!==undefined&&arguments[0];o.init(),o.initEvent(),e&&t&&VolantisApp.message("系统提示","自定义右键注册成功。")},destroy:function(){var e=arguments.length>0&&arguments[0]!==undefined&&arguments[0];o.hideMenu(),window.document.oncontextmenu=function(){return!0},e&&t&&VolantisApp.message("系统提示","自定义右键注销成功。")},hideMenu:o.hideMenu,readingModel:o.readingModel}}();Object.freeze(RightMenu),volantis.requestAnimationFrame((function(){"loading"!==document.readyState?(RightMenu.init(),volantis.pjax.send((function(){RightMenu.hideMenu()}))):document.addEventListener("DOMContentLoaded",(function(){RightMenu.init(),volantis.pjax.send((function(){RightMenu.hideMenu()}))}))}));
//# sourceMappingURL=../../maps/js/plugins/rightMenu.js.map
