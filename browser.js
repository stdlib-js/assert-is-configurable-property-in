// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyDescriptor,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}e=r?function(e,r){var n;return null==e||void 0===(n=t(e,r))?null:n}:function(e,r){return i(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var o=e,a=Object,c=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function s(e){return"number"==typeof e}function f(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+f(i):f(i)+e,n&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function b(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var h=Math.abs,v=String.prototype.toLowerCase,w=String.prototype.toUpperCase,m=String.prototype.replace,j=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,O=/^(\d+)e/,S=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function T(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":h(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,k,"$1e"),t=m.call(t,x,"e"),t=m.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,j,"e+0$1"),t=m.call(t,_,"e-0$1"),e.alternate&&(t=m.call(t,E,"$1."),t=m.call(t,O,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function P(e,r,t){var n=r-e.length;return n<0?e:e=t?e+A(n):A(n)+e}var V=String.fromCharCode,F=isNaN,C=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,n,i,o,a,c,u,l;if(!C(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(y(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!F(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=P(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=B.exec(e);n;)(r=e.slice(i,B.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=B.lastIndex,n=B.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function G(e){return"string"==typeof e}function Z(e){var r,t,n;if(!G(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=L(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return $.apply(null,t)}var W,M=Object.prototype,N=M.toString,U=M.__defineGetter__,X=M.__defineSetter__,D=M.__lookupGetter__,z=M.__lookupSetter__;W=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(D.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(e,r,t.get),a&&X&&X.call(e,r,t.set),e};var q=W;function H(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(e){return"boolean"==typeof e}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,ee="function"==typeof Symbol?Symbol:void 0,re="function"==typeof ee?ee.toStringTag:"",te=Q()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[re],r=i(e,re);try{e[re]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[re]=t:delete e[re],n}:function(e){return Y.call(e)},ne=Boolean,ie=Boolean.prototype.toString,oe=Q();function ae(e){return"object"==typeof e&&(e instanceof ne||(oe?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===te(e)))}function ce(e){return J(e)||ae(e)}function ue(){return new Function("return this;")()}H(ce,"isPrimitive",J),H(ce,"isObject",ae);var le="object"==typeof self?self:null,se="object"==typeof window?window:null,fe="object"==typeof globalThis?globalThis:null,pe=function(e){if(arguments.length){if(!J(e))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ue()}if(fe)return fe;if(le)return le;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,de=Int8Array;function be(){return/^\s*function\s*([^(]*)/i}var ye,he=/^\s*function\s*([^(]*)/i;H(be,"REGEXP",he),ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===te(e)};var ve=ye;function we(e){return null!==e&&"object"==typeof e}var me=function(e){if("function"!=typeof e)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(we);function je(e){var r,t,n,i;if(("Object"===(t=te(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=he.exec(n.toString()))return r[1]}return we(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}H(we,"isObjectLikeArray",me);var _e,Ee,Oe="function"==typeof c||"object"==typeof de||"function"==typeof ge?function(e){return je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?je(e).toLowerCase():r},Se=Object.getPrototypeOf;Ee=Object.getPrototypeOf,_e="function"===Oe(Ee)?Se:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===te(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var xe=_e;function ke(e){return null==e?null:(e=a(e),xe(e))}return function(e,r){var t=function(e,r){var t,n;if(null==e)return null;n=Object(e);do{if(t=o(n,r))return t;n=ke(n)}while(n);return null}(e,r);return null!==t&&!0===t.configurable}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isConfigurablePropertyIn=r();
//# sourceMappingURL=browser.js.map
