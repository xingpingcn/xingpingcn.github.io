"use strict";function _typeof14(e){return _typeof14="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof14(e)}function _typeof13(e){return _typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(e){return _typeof14(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof14(e)},_typeof13(e)}function _typeof12(e){return _typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(e){return _typeof13(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof13(e)},_typeof12(e)}function _typeof11(e){return _typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(e){return _typeof12(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof12(e)},_typeof11(e)}function _typeof10(e){return _typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(e){return _typeof11(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof11(e)},_typeof10(e)}function _typeof9(e){return _typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(e){return _typeof10(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof10(e)},_typeof9(e)}function _typeof8(e){return _typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(e){return _typeof9(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof9(e)},_typeof8(e)}function _typeof7(e){return _typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(e){return _typeof8(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof8(e)},_typeof7(e)}function _typeof6(e){return _typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(e){return _typeof7(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof7(e)},_typeof6(e)}function _typeof5(e){return _typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(e){return _typeof6(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof6(e)},_typeof5(e)}function _typeof4(e){return _typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(e){return _typeof5(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof5(e)},_typeof4(e)}function _typeof3(e){return _typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(e){return _typeof4(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof4(e)},_typeof3(e)}function _typeof2(e){return _typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)},_typeof2(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},_typeof(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(E){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),u=new k(r||[]);return o(a,"_invoke",{value:S(e,n,u)}),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(E){return{type:"throw",arg:E}}}e.wrap=l;var p={};function f(){}function y(){}function m(){}var d={};c(d,i,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(L([])));g&&g!==t&&n.call(g,i)&&(d=g);var b=m.prototype=f.prototype=Object.create(d);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==_typeof(p)&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(p).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function S(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return R()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var u=M(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var c=s(e,t,n);if("normal"===c.type){if(o=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o="completed",n.method="throw",n.arg=c.arg)}}}function M(e,t){var n=t.method,o=e.iterator[n];if(undefined===o)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=undefined,M(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=s(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:R}}function R(){return{value:undefined,done:!0}}return y.prototype=m,o(b,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},v(_.prototype),c(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new _(l(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return a.type="throw",a.arg=e,t.next=n,o&&(t.method="next",t.arg=undefined),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),p}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=undefined),p}},e}function asyncGeneratorStep(e,t,n,o,r,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(o,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){asyncGeneratorStep(i,o,r,a,u,"next",e)}function u(e){asyncGeneratorStep(i,o,r,a,u,"throw",e)}a(undefined)}))}}var RightMenus={defaultEvent:["copyText","copyLink","copyPaste","copyAll","copyCut","copyImg","printMode","readMode"],defaultGroup:["navigation","inputBox","seletctText","elementCheck","elementImage","articlePage"],messageRightMenu:volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.rightmenu.enable,corsAnywhere:volantis.GLOBAL_CONFIG.plugins.rightmenus.options.corsAnywhere,urlRegx:/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,imgRegx:/\.(jpe?g|png|webp|svg|gif|jifi)(-|_|!|\?|\/)?.*$/,initialMenu:function(){RightMenus.fun.init(),volantis.pjax.send((function(){RightMenus.fun.hideMenu(),volantis.isReadModel&&RightMenus.fun.readMode()}))},readClipboard:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.permissions.query({name:"clipboard-read"});case 2:n=t.sent,t.t0=n.state,t.next="granted"===t.t0||"prompt"===t.t0?6:10;break;case 6:return t.next=8,navigator.clipboard.readText();case 8:return e=t.sent,t.abrupt("break",12);case 10:return window.clipboardRead=!1,t.abrupt("break",12);case 12:return t.abrupt("return",e);case 13:case"end":return t.stop()}}),t)})));return function(){return e.apply(this,arguments)}}(),writeClipText:function(e){return navigator.clipboard.writeText(e).then((function(){return Promise.resolve()}))["catch"]((function(e){return Promise.reject(e)}))},writeClipImg:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,n,o){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=new Image).crossOrigin="Anonymous",r.addEventListener("load",(function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=r.width,e.height=r.height,t.drawImage(r,0,0),e.toBlob((function(e){navigator.clipboard.write([new ClipboardItem({"image/png":e})]).then((function(e){n(e)}))["catch"]((function(e){o(e)}))}),"image/png")}),!1),r.src="".concat(e,"?(lll￢ω￢)");case 4:case"end":return t.stop()}}),t)})));return function(t,n,o){return e.apply(this,arguments)}}(),insertAtCaret:function(e,t){var n=e.selectionStart,o=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(n||"0"==n){var r=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=r}else e.value+=t,e.focus()}};RightMenus.fun=function(){var e=volantis.GLOBAL_CONFIG.plugins.rightmenus,t={},n=document.getElementById("rightmenu-wrapper"),o=document.getElementById("rightmenu-content"),r=document.querySelectorAll("#rightmenu-content li.menuLoad-Content"),i=document.querySelectorAll("#rightmenu-content li, #rightmenu-content hr, #menuMusic"),a=document.getElementById("read_bkg"),u=document.getElementById("menuMusic"),c=document.querySelector("#menuMusic .backward"),l=document.querySelector("#menuMusic .toggle"),s=document.querySelector("#menuMusic .forward"),p={mouseEvent:null,isInputBox:!1,selectText:"",inputValue:"",isLink:!1,linkUrl:"",isMediaLink:!1,mediaLinkUrl:"",isImage:!1,isArticle:!1,pathName:"",isReadClipboard:!0,isShowMusic:!1,statusCheck:!1},f=Object.assign({},p);return t.initEvent=function(){t.elementAppend(),t.contextmenu(),t.menuEvent()},t.elementAppend=function(){a&&a.parentNode.removeChild(a);var e=document.createElement("div");e.className="common_read_bkg common_read_hide",e.id="read_bkg",window.document.body.appendChild(e)},t.menuPosition=function(e){try{var r=e.clientX,i=e.clientY,a=document.documentElement.clientWidth||document.body.clientWidth,u=document.documentElement.clientHeight||document.body.clientHeight;n.style.display="block",t.menuControl(e);var c=o.offsetWidth,l=o.offsetHeight,s=r+c>a?r-c+10:r,p=i+l>u?i-l+10:i;p=i+l>u&&p<l&&i<l?p+(u-l-p-10):p,n.style.left="".concat(s,"px"),n.style.top="".concat(p,"px"),volantis.GLOBAL_CONFIG.plugins.message.rightmenu.notice&&t.menuNotic()}catch(f){return console.error(f),t.hideMenu(),!0}return!1},t.menuControl=function(n){t.globalDataSet(n),u&&(u.style.display=p.isShowMusic?"block":"none"),r.forEach((function(t){t.style.display="none";var n=t.firstElementChild.nodeName,o=t.firstElementChild.getAttribute("data-group"),r=t.firstElementChild.getAttribute("data-event");if(p.statusCheck||p.isArticle)switch(o){case"inputBox":p.isInputBox&&(t.style.display="block","copyCut"!==r||p.selectText||(t.style.display="none"),"copyAll"!==r||p.inputValue||(t.style.display="none"),"copyPaste"!==r||p.isReadClipboard||(t.style.display="none"));break;case"seletctText":p.selectText&&(t.style.display="block");break;case"elementCheck":(p.isLink||p.isMediaLink)&&(t.style.display="block");break;case"elementImage":p.isImage&&(t.style.display="block");break;case"articlePage":p.isArticle&&(t.style.display="block");break;default:t.style.display="A"===n?p.isArticle&&!p.statusCheck&&e.options.articleShowLink?"block":"none":"block"}else("A"===n||RightMenus.defaultGroup.every((function(e){return o!==e})))&&(t.style.display="block")})),volantis.mouseEvent=n,volantis.rightmenu.method.handle.start();var o={item:null,hide:!0};i.forEach((function(e){if("HR"===e.nodeName){if(e.style.display="block",!o.item)return void(o.item=e);(o.hide||"hr"===o.item.nextElementSibling.nodeName)&&(o.item.style.display="none"),o.item=e,o.hide=!0}else"block"===e.style.display&&o.hide&&(o.hide=!1)})),o.item&&o.hide&&(o.item.style.display="none")},t.globalDataSet=function(t){var n;(p=Object.assign({},f)).mouseEvent=t,p.selectText=window.getSelection().toString(),"input"!==t.target.tagName.toLowerCase()&&"textarea"!==t.target.tagName.toLowerCase()||(p.isInputBox=!0,p.inputValue=t.target.value),p.isInputBox&&!1===window.clipboardRead&&(p.isReadClipboard=!1),t.target.href&&RightMenus.urlRegx.test(t.target.href)&&(p.isLink=!0,p.linkUrl=t.target.href),t.target.currentSrc&&RightMenus.urlRegx.test(t.target.currentSrc)&&(p.isMediaLink=!0,p.mediaLinkUrl=t.target.currentSrc),p.isMediaLink&&RightMenus.imgRegx.test(p.mediaLinkUrl)&&(p.isImage=!0),document.querySelector("#post.article")&&(p.isArticle=!0,p.pathName=window.location.pathname),null!==(n=volantis.GLOBAL_CONFIG.plugins.aplayer)&&void 0!==n&&n.enable&&"undefined"!=typeof RightMenuAplayer&&RightMenuAplayer.APlayer.player!==undefined&&(e.options.musicAlwaysShow||"play"===RightMenuAplayer.APlayer.status||"undefined"===RightMenuAplayer.APlayer.status)&&(p.isShowMusic=!0),(p.selectText||p.isInputBox||p.isLink||p.isMediaLink)&&(p.statusCheck=!0)},t.contextmenu=function(){window.document.oncontextmenu=function(e){return e.ctrlKey||document.body.offsetWidth<=500?(t.hideMenu(),!0):t.menuPosition(e)},n.oncontextmenu=function(e){return e.stopPropagation(),e.preventDefault(),!1},window.removeEventListener("blur",t.hideMenu),window.addEventListener("blur",t.hideMenu),document.body.removeEventListener("click",t.hideMenu),document.body.addEventListener("click",t.hideMenu)},t.menuEvent=function(){r.forEach((function(n){var o=n.firstElementChild.getAttribute("data-event"),r=n.firstElementChild.getAttribute("id"),i=n.firstElementChild.getAttribute("data-group");"A"!==n.firstElementChild.nodeName&&n.addEventListener("click",(function(){try{RightMenus.defaultEvent.every((function(e){return o!==e}))?"seletctText"===i?RightMenusFunction[r](p.selectText):"elementCheck"===i?RightMenusFunction[r](p.isLink?p.linkUrl:p.mediaLinkUrl):"elementImage"===i?RightMenusFunction[r](p.mediaLinkUrl):RightMenusFunction[r]():t[o]()}catch(n){"rightMenus"===volantis.GLOBAL_CONFIG.debug&&console.error({id:r,error:n,globalData:p,groupName:i,eventName:o}),RightMenus.messageRightMenu&&VolantisApp.message("错误提示",n,{icon:e.options.iconPrefix+" fa-exclamation-square red",time:"15000"})}}))})),s&&l&&s&&(c.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerBackward()},l.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerToggle()},s.onclick=function(e){e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerForward()})},t.hideMenu=function(){n.style.display=null,n.style.left=null,n.style.top=null},t.menuNotic=function(){var t="true"===localStorage.getItem("NoticeRightMenu");RightMenus.messageRightMenu&&!t&&VolantisApp.message("右键菜单","唤醒原系统菜单请使用：<kbd>Ctrl</kbd> + <kbd>右键</kbd>",{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3},(function(){localStorage.setItem("NoticeRightMenu","true")}))},t.copyText=function(){VolantisApp.utilWriteClipText(p.selectText).then((function(){RightMenus.messageRightMenu&&VolantisApp.messageCopyright()}))["catch"]((function(t){RightMenus.messageRightMenu&&VolantisApp.message("系统提示",t,{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3})}))},t.copyLink=function(){VolantisApp.utilWriteClipText(p.linkUrl||p.mediaLinkUrl).then((function(){RightMenus.messageRightMenu&&VolantisApp.messageCopyright()}))["catch"]((function(t){RightMenus.messageRightMenu&&VolantisApp.message("系统提示",t,{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3})}))},t.copyAll=function(){p.mouseEvent.target.select()},t.copyPaste=_asyncToGenerator(_regeneratorRuntime().mark((function y(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,RightMenus.readClipboard();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0="";case 5:e=t.t0,RightMenus.messageRightMenu&&!1===window.clipboardRead?VolantisApp.message("系统提示","未授予剪切板读取权限！"):RightMenus.messageRightMenu&&""===e?VolantisApp.message("系统提示","仅支持复制文本内容！"):RightMenus.insertAtCaret(p.mouseEvent.target,e);case 7:case"end":return t.stop()}}),y)}))),t.copyCut=function(){var e=p.mouseEvent.target.selectionStart,n=p.mouseEvent.target.selectionEnd,o=p.inputValue;t.copyText(p.selectText),p.mouseEvent.target.value=o.substring(0,e)+o.substring(n,o.length),p.mouseEvent.target.selectionStart=e,p.mouseEvent.target.selectionEnd=e,p.mouseEvent.target.focus()},t.copyImg=function(){volantis.GLOBAL_CONFIG.plugins.message.rightmenu.notice&&VolantisApp.message("系统提示","复制中，请等待。",{icon:e.options.iconPrefix+" fa-images"}),RightMenus.writeClipImg(p.mediaLinkUrl,(function(t){RightMenus.messageRightMenu&&(VolantisApp.hideMessage(),VolantisApp.message("系统提示","图片复制成功！",{icon:e.options.iconPrefix+" fa-images"}))}),(function(t){console.error(t),RightMenus.messageRightMenu&&(VolantisApp.hideMessage(),VolantisApp.message("系统提示","复制失败："+t,{icon:e.options.iconPrefix+" fa-exclamation-square red",time:9e3}))}))},t.printMode=function(){window.location.pathname===p.pathName&&(RightMenus.messageRightMenu?VolantisApp.question("",'是否打印当前页面？<br><em style="font-size: 80%">建议打印时勾选背景图形</em><br>',{time:9e3},(function(){t.printHtml()})):t.printHtml())},t.printHtml=function(){volantis.isReadModel&&t.readMode(),DOMController.setAttribute("details","open","true"),DOMController.removeList([".cus-article-bkg",".iziToast-overlay",".iziToast-wrapper",".prev-next","footer","#l_header","#l_cover","#l_side","#comments","#s-top","#BKG","#rightmenu-wrapper",".nav-tabs",".parallax-mirror",".new-meta-item.share","div.footer"]),DOMController.setStyleList([["body","backgroundColor","unset"],["#l_main","width","100%"],["#post","boxShadow","none"],["#post","background","none"],["#post","padding","0"],["h1","textAlign","center"],["h1","fontWeight","600"],["h1","fontSize","2rem"],["h1","marginBottom","20px"],[".tab-pane","display","block"],[".tab-content","borderTop","none"],[".highlight>table pre","whiteSpace","pre-wrap"],[".highlight>table pre","wordBreak","break-all"],[".fancybox img","height","auto"],[".fancybox img","weight","auto"]]),setTimeout((function(){window.print(),document.body.innerHTML="",window.location.reload()}),50)},t.readMode=function(){"function"==typeof ScrollReveal&&ScrollReveal().clean("#comments"),DOMController.fadeToggleList([document.querySelector("#l_header"),document.querySelector("footer"),document.querySelector("#s-top"),document.querySelector(".article-meta#bottom"),document.querySelector(".prev-next"),document.querySelector("#l_side"),document.querySelector("#comments")]),DOMController.toggleClassList([[document.querySelector("#l_main"),"common_read"],[document.querySelector("#l_main"),"common_read_main"],[document.querySelector("#l_body"),"common_read"],[document.querySelector("#safearea"),"common_read"],[document.querySelector("#pjax-container"),"common_read"],[document.querySelector("#read_bkg"),"common_read_hide"],[document.querySelector("h1"),"common_read_h1"],[document.querySelector("#post"),"post_read"],[document.querySelector("#l_cover"),"read_cover"],[document.querySelector(".widget.toc-wrapper"),"post_read"]]),DOMController.setStyle(".copyright.license","margin","15px 0"),volantis.isReadModel=volantis.isReadModel===undefined||!volantis.isReadModel,volantis.isReadModel?(RightMenus.messageRightMenu&&VolantisApp.message("系统提示","阅读模式已开启，您可以点击屏幕空白处退出。",{backgroundColor:"var(--color-read-post)",icon:e.options.iconPrefix+" fa-book-reader",displayMode:1,time:5e3}),document.querySelector("#l_body").removeEventListener("click",t.readMode),document.querySelector("#l_body").addEventListener("click",(function(e){DOMController.hasClass(e.target,"common_read")&&t.readMode()}))):(document.querySelector("#l_body").removeEventListener("click",t.readMode),document.querySelector("#post").removeEventListener("click",t.readMode),DOMController.setStyle(".prev-next","display","flex"),DOMController.setStyle(".copyright.license","margin","15px -40px"))},{init:t.initEvent,hideMenu:t.hideMenu,readMode:t.readMode}}(),Object.freeze(RightMenus),volantis.requestAnimationFrame((function(){"loading"!==document.readyState?RightMenus.initialMenu():document.addEventListener("DOMContentLoaded",(function(){RightMenus.initialMenu()}))}));
//# sourceMappingURL=../../maps/js/plugins/rightMenus.js.map
