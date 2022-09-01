// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isConfigurablePropertyIn=e()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyDescriptor;var r,n=Object.prototype.hasOwnProperty;function o(t,e){return null!=t&&n.call(t,e)}r=t?function(t,r){var n;return null==t||void 0===(n=e(t,r))?null:n}:function(t,e){return o(t,e)?{configurable:!0,enumerable:!0,writable:!0,value:t[e]}:null};var u=r,i=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c,f=Object.defineProperty,a=Object.prototype,p=a.toString,y=a.__defineGetter__,b=a.__defineSetter__,s=a.__lookupGetter__,d=a.__lookupSetter__;c=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?f:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===p.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(s.call(t,e)||d.call(t,e)?(n=t.__proto__,t.__proto__=a,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&y&&y.call(t,e,r.get),i&&b&&b.call(t,e,r.set),t};var v=c;function j(t,e,r){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(t){return"boolean"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return g&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var O="function"==typeof Symbol?Symbol.toStringTag:"";var h=w()?function(t){var e,r,n;if(null==t)return m.call(t);r=t[O],e=o(t,O);try{t[O]=void 0}catch(e){return m.call(t)}return n=m.call(t),e?t[O]=r:delete t[O],n}:function(t){return m.call(t)},S=Boolean.prototype.toString;var P=w();function A(t){return"object"==typeof t&&(t instanceof Boolean||(P?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function E(t){return _(t)||A(t)}function T(){return new Function("return this;")()}j(E,"isPrimitive",_),j(E,"isObject",A);var B="object"==typeof self?self:null,x="object"==typeof window?window:null,C="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},V="object"==typeof C?C:null;var k=function(t){if(arguments.length){if(!_(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(B)return B;if(x)return x;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),F=k.document&&k.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var D,I=/^\s*function\s*([^(]*)/i;j(L,"REGEXP",I),D=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var M=D;function N(t){return null!==t&&"object"==typeof t}var R=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!M(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(N);function U(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=I.exec(n.toString()))return e[1]}return N(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}j(N,"isObjectLikeArray",R);var X="function"==typeof i||"object"==typeof G||"function"==typeof F?function(t){return U(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?U(t).toLowerCase():e};var q,z,H=Object.getPrototypeOf;z=Object.getPrototypeOf,q="function"===X(z)?H:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=q;function K(t){return null==t?null:(t=Object(t),J(t))}return function(t,e){var r=function(t,e){var r,n;if(null==t)return null;n=Object(t);do{if(r=u(n,e))return r;n=K(n)}while(n);return null}(t,e);return null!==r&&!0===r.configurable}}));
//# sourceMappingURL=index.js.map
