// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,c=r,f=function(e,t,r){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e},p=t()?c:f,y=p,b=function(e,t,r){y(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},m=function(e){return"number"==typeof e},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,v=d,h=function(e){return v.call(e)},g=Object.prototype.hasOwnProperty,w=function(e,t){return null!=e&&g.call(e,t)},j="function"==typeof Symbol?Symbol.toStringTag:"",E=w,S=j,T=d,O=h,P=function(e){var t,r,n;if(null==e)return T.call(e);r=e[S],t=E(e,S);try{e[S]=void 0}catch(t){return T.call(e)}return n=T.call(e),t?e[S]=r:delete e[S],n},N=_()?P:O,x=Number,V=x.prototype.toString,k=N,C=x,L=function(e){try{return V.call(e),!0}catch(e){return!1}},R=_(),A=function(e){return"object"==typeof e&&(e instanceof C||(R?L(e):"[object Number]"===k(e)))},B=m,G=A,M=b,Y=function(e){return B(e)||G(e)},F=A;M(Y,"isPrimitive",m),M(Y,"isObject",F);var I=Y.isPrimitive,J=p,q=b,z=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"},D=function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e};function H(e,t){if(!(this instanceof H))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!I(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!I(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return J(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),J(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}q(H,"BYTES_PER_ELEMENT",8),q(H.prototype,"BYTES_PER_ELEMENT",8),q(H.prototype,"byteLength",16),q(H.prototype,"toString",z),q(H.prototype,"toJSON",D);var K=H,Q=function(e){return e.re},U=function(e){return e.im};return function(e,t){var r=Q(e)+Q(t),n=U(e)+U(t);return new K(r,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cadd=t();
//# sourceMappingURL=index.js.map
