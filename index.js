// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isConfigurablePropertyIn=r()}(this,(function(){"use strict";var e=void 0!==Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptor;var t,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}t=e?function(e,t){var n;return null==e||void 0===(n=r(e,t))?null:n}:function(e,r){return i(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var o=t,a=Object,c=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty;function s(e){return"number"==typeof e}function f(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+f(i):f(i)+e,n&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function b(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var y=Math.abs,h=String.prototype.toLowerCase,v=String.prototype.toUpperCase,w=String.prototype.replace,m=/e\+(\d)$/,j=/e-(\d)$/,_=/^(\d+)$/,E=/^(\d+)e/,O=/\.0$/,S=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":y(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,x,"$1e"),t=w.call(t,S,"e"),t=w.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,m,"e+0$1"),t=w.call(t,j,"e-0$1"),e.alternate&&(t=w.call(t,_,"$1."),t=w.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):h.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var A=String.fromCharCode,P=isNaN,V=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function C(e){var r,t,n,i,o,a,c,l,u,s,f,g,d;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!P(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,g=n.padRight,d=void 0,(d=f-s.length)<0?s:s=g?s+T(d):T(d)+s)),a+=n.arg||"",c+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function B(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){var r,t;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[B(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return C.apply(null,r)}var L,G=Object.prototype,Z=G.toString,W=G.__defineGetter__,M=G.__defineSetter__,N=G.__lookupGetter__,U=G.__lookupSetter__;L=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&W&&W.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var X=L;function D(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"boolean"==typeof e}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return q&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var Y=H()?function(e){var r,t,n;if(null==e)return J.call(e);t=e[Q],r=i(e,Q);try{e[Q]=void 0}catch(r){return J.call(e)}return n=J.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return J.call(e)},ee=Boolean,re=Boolean.prototype.toString;var te=H();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function ie(e){return z(e)||ne(e)}D(ie,"isPrimitive",z),D(ie,"isObject",ne);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!z(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(le)return le;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ue.document&&ue.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge,de=/^\s*function\s*([^(]*)/i;D(pe,"REGEXP",de),ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};var be=ge;function ye(e){return null!==e&&"object"==typeof e}var he=function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye);function ve(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(ye,"isObjectLikeArray",he);var we="function"==typeof c||"object"==typeof fe||"function"==typeof se?function(e){return ve(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ve(e).toLowerCase():r};var me,je,_e=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===we(je)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ee=me;function Oe(e){return null==e?null:(e=a(e),Ee(e))}return function(e,r){var t=function(e,r){var t,n;if(null==e)return null;n=Object(e);do{if(t=o(n,r))return t;n=Oe(n)}while(n);return null}(e,r);return null!==t&&!0===t.configurable}}));
//# sourceMappingURL=index.js.map
