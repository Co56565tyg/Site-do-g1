;
(self.AMP=self.AMP||[]).push({m:0,v:"2402262017000",n:"amp-instagram",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}Array.isArray;var o=Object.prototype,u=(o.hasOwnProperty,o.toString);function f(n){return"[object Object]"===u.call(n)}var c,a=["Webkit","webkit","Moz","moz","ms","O","o"];function s(n,t,r,e,i){var o=function(n,t,r){if(t.startsWith("--"))return t;c||(c=Object.create(null));var e=c[t];if(!e||r){if(e=t,void 0===n[t]){var i=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var r=0;r<a.length;r++){var e=a[r]+t;if(void 0!==n[e])return e}return""}(n,i);void 0!==n[o]&&(e=o)}r||(c[t]=e)}return e}(n.style,t,i);if(o){var u,f=e?r+e:r;n.style.setProperty((u=o.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),a.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),f)}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var l=self.__AMP_LOG;function d(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function h(n,t,r,e,i,o,u,f,c,a,s){return n}var m,v=function(n){return t="preconnect",function(n,t){h(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(h(r.ctor),h(r.context),r.obj=new r.ctor(r.context),h(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}(function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t);var t},p=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(c,n);var e,o,u=(e=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(e);if(o){var u=r(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return i(this,n)});function c(n){var t;return(t=u.call(this,n)).Bm=null,t.jnn="",t.Fm=null,t.Snn="",t.mnn=null,t}var a=c.prototype;return a.preconnectCallback=function(n){v(this.win).url(this.getAmpDoc(),"https://www.instagram.com",n),v(this.win).url(this.getAmpDoc(),"https://instagram.fsnc1-1.fna.fbcdn.net",n)},a.renderOutsideViewport=function(){return!1},a.buildCallback=function(){var n,t;this.jnn=(n=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),"The data-shortcode attribute is required for <amp-instagram> %s",t=this.element,(l.user||(l.user=d()),void l.user.win?l.userForEmbed||(l.userForEmbed=d()):l.user).assert(n,"The data-shortcode attribute is required for <amp-instagram> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.Snn=this.element.hasAttribute("data-captioned")?"captioned/":""},a.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},a.layoutCallback=function(){var n,t,r,e,i,o,u,f,c=this,a=this.element.ownerDocument.createElement("iframe");return this.Bm=a,this.Fm=(n=this.win,t="message",r=this.Tnn.bind(this),e=void 0,i=n,o=r,u=function(n){try{return o(n)}catch(n){var t,r;throw null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n),n}},f=function(){if(void 0!==m)return m;m=!1;try{var n={get capture(){return m=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return m}(),i.addEventListener(t,u,!!f&&e),function(){null==i||i.removeEventListener(t,u,!!f&&e),o=null,i=null,u=null}),a.setAttribute("scrolling","no"),a.setAttribute("frameborder","0"),a.setAttribute("allowtransparency","true"),a.setAttribute("title","Instagram: "+this.element.getAttribute("alt")),a.src="https://www.instagram.com/p/"+encodeURIComponent(this.jnn)+"/embed/"+this.Snn+"?cr=1&v=12",function(n,t){n.classList.add("i-amphtml-fill-content")}(a),this.element.appendChild(a),s(a,"opacity",0),this.mnn=this.loadPromise(a).then((function(){c.getVsync().mutate((function(){s(a,"opacity",1)}))}))},a.Tnn=function(n){var t=this;if("https://www.instagram.com"==n.origin&&n.source==this.Bm.contentWindow){var r=function(n){return n.data}(n);if(r&&(f(r)||r.startsWith("{"))){var e=f(r)?r:function(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null}}(r);if(void 0!==e&&"MEASURE"==e.type&&e.details){var i=e.details.height;this.getVsync().measure((function(){t.Bm&&t.Bm.offsetHeight!==i&&t.forceChangeHeight(i)}))}}}},a.unlayoutOnPause=function(){return!0},a.unlayoutCallback=function(){var n,t;return this.Bm&&(null===(t=(n=this.Bm).parentElement)||void 0===t||t.removeChild(n),this.Bm=null,this.mnn=null),this.Fm&&this.Fm(),!0},c}(n.BaseElement);n.registerElement("amp-instagram",p,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-instagram-0.1.js.map