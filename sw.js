(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
!function(t){"use strict";function r(t,r,e,o){var i=r&&r.prototype instanceof n?r:n,a=Object.create(i.prototype),c=new l(o||[]);return a._invoke=u(t,e,c),a}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function n(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(r){function n(t,o,i,a){var c=e(r[t],r,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&g.call(h,"__await")?Promise.resolve(h.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function o(t,r){function e(){return new Promise(function(e,o){n(t,r,e,o)})}return i=i?i.then(e,e):e()}"object"==typeof t.process&&t.process.domain&&(n=t.process.domain.bind(n));var i;this._invoke=o}function u(t,r,n){var o=j;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return y()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=h(c,n);if(u){if(u===G)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===j)throw o=k,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var s=e(t,r,n);if("normal"===s.type){if(o=n.done?k:_,s.arg===G)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=k,n.method="throw",n.arg=s.arg)}}}function h(t,r){var n=t.iterator[r.method];if(n===d){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=d,h(t,r),"throw"===r.method))return G;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return G}var o=e(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,G;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=d),r.delegate=null,G):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,G)}function s(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function f(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function l(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(s,this),this.reset(!0)}function p(t){if(t){var r=t[w];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(g.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=d,r.done=!0,r};return n.next=n}}return{next:y}}function y(){return{value:d,done:!0}}var d,v=Object.prototype,g=v.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},w=m.iterator||"@@iterator",L=m.asyncIterator||"@@asyncIterator",x=m.toStringTag||"@@toStringTag",b="object"==typeof module,E=t.regeneratorRuntime;if(E)return void(b&&(module.exports=E));E=t.regeneratorRuntime=b?module.exports:{},E.wrap=r;var j="suspendedStart",_="suspendedYield",O="executing",k="completed",G={},N={};N[w]=function(){return this};var P=Object.getPrototypeOf,S=P&&P(P(p([])));S&&S!==v&&g.call(S,w)&&(N=S);var F=i.prototype=n.prototype=Object.create(N);o.prototype=F.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===o||"GeneratorFunction"===(r.displayName||r.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(F),t},E.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[L]=function(){return this},E.AsyncIterator=c,E.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(F),F[x]="Generator",F[w]=function(){return this},F.toString=function(){return"[object Generator]"},E.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},E.values=p,l.prototype={constructor:l,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(f),!t)for(var r in this)"t"===r.charAt(0)&&g.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=d),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,G):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),G},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),f(e),G}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;f(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:p(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=d),G}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
module.exports=[
  {
    "version": "1.9.1",
    "changes": [
      "Fixed bug if 'show original' setting was saved"
    ]
  },
  {
    "version": "1.9.0",
    "changes": [
      "Settings are now remembered (thanks Simon Knox)",
      "Fixed drag & drop issue (thanks Simon Knox)",
      "Improved keyboard interaction (thanks Ahmad Shadeed)"
    ]
  },
  {
    "version": "1.8.0",
    "changes": [
      "New icon (thanks to Anna Debenham)"
    ]
  },
  {
    "version": "1.7.0",
    "changes": [
      "Button to change background color (thanks to Una Kravets)"
    ]
  },
  {
    "version": "1.6.1",
    "changes": [
      "HTMLmin broke my stuff"
    ]
  },
  {
    "version": "1.6.0",
    "changes": [
      "Copy-to-clipboard button"
    ]
  },
  {
    "version": "1.5.1",
    "changes": [
      "Minor CSS change"
    ]
  },
  {
    "version": "1.5.0",
    "changes": [
      "Updating SVGO"
    ]
  },
  {
    "version": "1.4.3",
    "changes": [
      "Fixing layout in Chrome beta."
    ]
  },
  {
    "version": "1.4.2",
    "changes": [
      "Better cache cleanup."
    ]
  },
  {
    "version": "1.4.1",
    "changes": [
      "Fixes to 'remove hidden items'."
    ]
  },
  {
    "version": "1.4.0",
    "changes": [
      "Updated to SVGO v0.5.1, bringing:",
      "Remove useless defs option.",
      "Round number in number lists.",
      "And loads of fixes!"
    ]
  },
  {
    "version": "1.3.0",
    "changes": [
      "Using manifest spec for icons etc."
    ]
  },
  {
    "version": "1.2.4",
    "changes": [
      "Download button now works in IE."
    ]
  },
  {
    "version": "1.2.3",
    "changes": [
      "Fixing bug introduced by browserify."
    ]
  },
  {
    "version": "1.2.2",
    "changes": [
      "Better font loading."
    ]
  },
  {
    "version": "1.2.1",
    "changes": [
      "Lots of performance improvements."
    ]
  },
  {
    "version": "1.2.0",
    "changes": [
      "Code view.",
      "Prettify code option."
    ]
  },
  {
    "version": "1.1.7",
    "changes": [
      "Performance improvements."
    ]
  },
  {
    "version": "1.1.6",
    "changes": [
      "Fix zooming with mouse wheels."
    ]
  },
  {
    "version": "1.1.5",
    "changes": [
      "Removing erroneous scrollbars in Firefox."
    ]
  },
  {
    "version": "1.1.4",
    "changes": [
      "Fixed 'about' link."
    ]
  },
  {
    "version": "1.1.3",
    "changes": [
      "Reverting some painting stuff until I get a handle on the performance.",
      "Using simpler demo SVG."
    ]
  },
  {
    "version": "1.1.2",
    "changes": [
      "Sharper rendering on desktop Chrome & Safari.",
      "Fixed right mouse button issue."
    ]
  },
  {
    "version": "1.1.1",
    "changes": [
      "Reset zooming on image load."
    ]
  },
  {
    "version": "1.1.0",
    "changes": [
      "Click/touch and drag panning.",
      "Pinch zooming.",
      "Wheel zooming."
    ]
  },
  {
    "version": "1.0.4",
    "changes": [
      "Fixing checkered background in IE.",
      "Improving slider touch interaction."
    ]
  },
  {
    "version": "1.0.3",
    "changes": [
      "Fixing SVG output in Firefox."
    ]
  },
  {
    "version": "1.0.2",
    "changes": [
      "Caching fonts for offline use.",
      "Removing tap delay on iPhone/iPad.",
      "Fixing iOS add-to-homescreen.",
      "Better mobile demo image."
    ]
  },
  {
    "version": "1.0.1",
    "changes": [
      "Layout fixes.",
      "Better mobile keyboard handling.",
      "A lighter demo SVG for mobile.",
      "Fixing drag & drop."
    ]
  },
  {
    "version": "1.0.0",
    "changes": [
      "First release."
    ]
  }
]

},{}],3:[function(require,module,exports){
"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(s,a){try{var c=t[s](a),o=c.value}catch(e){return void r(e)}if(!c.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}var handleFontRequest=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.match(t);case 2:if(!(r=e.sent)){e.next=5;break}return e.abrupt("return",r);case 5:return e.next=7,fetch(t.clone());case 7:return n=e.sent,e.next=10,caches.open("svgomg-fonts");case 10:return s=e.sent,s.put(t,n.clone()),e.abrupt("return",n);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();require("regenerator-runtime/runtime");var storage=require("../utils/storage"),version=require("../../changelog.json")[0].version,cacheVerion=version.split(".")[0];self.addEventListener("install",function(e){e.waitUntil(_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=storage.get("active-version"),e.next=3,caches.open("svgomg-static-"+cacheVerion);case 3:return r=e.sent,e.next=6,r.addAll(["./","imgs/icon.png","css/all.css","js/gzip-worker.js","js/page.js","js/prism-worker.js","js/svgo-worker.js","changelog.json","https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"]);case 6:return e.next=8,t;case 8:n=e.sent,n&&n.split(".")[0]!==version.split(".")[0]||self.skipWaiting();case 10:case"end":return e.stop()}},e,this)}))())});var expectedCaches=["svgomg-static-"+cacheVerion];self.addEventListener("activate",function(e){e.waitUntil(_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,s,a,c,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:t=e.sent,r=!0,n=!1,s=void 0,e.prev=6,a=t[Symbol.iterator]();case 8:if(r=(c=a.next()).done){e.next=18;break}if(o=c.value,/^svgomg-/.test(o)){e.next=12;break}return e.abrupt("continue",15);case 12:if(-1!=expectedCaches.indexOf(o)){e.next=15;break}return e.next=15,caches.delete(o);case 15:r=!0,e.next=8;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(6),n=!0,s=e.t0;case 24:e.prev=24,e.prev=25,!r&&a.return&&a.return();case 27:if(e.prev=27,!n){e.next=30;break}throw s;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.next=34,storage.set("active-version",version);case 34:case"end":return e.stop()}},e,this,[[6,20,24,32],[25,,27,31]])}))())}),self.addEventListener("fetch",function(e){"fonts.gstatic.com"==new URL(e.request.url).host?e.respondWith(handleFontRequest(e.request)):e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))});

},{"../../changelog.json":2,"../utils/storage":5,"regenerator-runtime/runtime":1}],4:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function promisifyRequest(e){return new Promise(function(t,n){function r(n){t(e.result),i()}function o(t){n(e.error),i()}function i(){e.removeEventListener("complete",r),e.removeEventListener("success",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)}e.addEventListener("complete",r),e.addEventListener("success",r),e.addEventListener("error",o),e.addEventListener("abort",o)})}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),IndexedDouchebag=function(){function e(t,n,r){_classCallCheck(this,e);var o=indexedDB.open(t,n);this.ready=promisifyRequest(o),o.onupgradeneeded=function(e){r(o.result,e.oldVersion)}}return _createClass(e,[{key:"transaction",value:function(e,t,n){return this.ready.then(function(r){var o="readonly";t.apply?n=t:t&&(o=t);var i,u=r.transaction(e,o),a=n(u,r),s=promisifyRequest(u);return a?(i=a[0]&&"result"in a[0]?Promise.all(a.map(promisifyRequest)):promisifyRequest(a),s.then(function(){return i})):s})}},{key:"get",value:function(e,t){return this.transaction(e,function(n){return n.objectStore(e).get(t)})}},{key:"put",value:function(e,t,n){return this.transaction(e,"readwrite",function(r){r.objectStore(e).put(n,t)})}},{key:"delete",value:function(e,t){return this.transaction(e,"readwrite",function(n){n.objectStore(e).delete(t)})}}]),e}();module.exports=IndexedDouchebag;

},{}],5:[function(require,module,exports){
"use strict";function getIdb(){return idb||(idb=new Idb("svgo-keyval",1,function(e){e.createObjectStore("keyval")})),idb}var Idb=require("./indexeddouchbag"),idb;self.indexedDB?module.exports={get:function(e){return getIdb().get("keyval",e)},set:function(e,t){return getIdb().put("keyval",e,t)},delete:function(e){return getIdb().delete("keyval",e)}}:module.exports={get:function(e){return Promise.resolve(localStorage.getItem(e))},set:function(e,t){return Promise.resolve(localStorage.setItem(e,t))},delete:function(e){return Promise.resolve(localStorage.removeItem(e))}};

},{"./indexeddouchbag":4}]},{},[3])

//# sourceMappingURL=sw.js.map
