(function(y,x){typeof exports=="object"&&typeof module<"u"?module.exports=x(require("video.js")):typeof define=="function"&&define.amd?define(["video.js"],x):(y=y||self,y["videojs-vimeo"]=x(y.videojs))})(this,function(y){"use strict";y=y&&y.hasOwnProperty("default")?y.default:y;/*! @vimeo/player v2.10.0 | (c) 2019 Vimeo | MIT License | https://github.com/vimeo/player.js */function x(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function $(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function X(r,e,t){return e&&$(r.prototype,e),t&&$(r,t),r}var q=typeof global<"u"&&{}.toString.call(global)==="[object global]";function F(r,e){return r.indexOf(e.toLowerCase())===0?r:"".concat(e.toLowerCase()).concat(r.substr(0,1).toUpperCase()).concat(r.substr(1))}function G(r){return!!(r&&r.nodeType===1&&"nodeName"in r&&r.ownerDocument&&r.ownerDocument.defaultView)}function K(r){return!isNaN(parseFloat(r))&&isFinite(r)&&Math.floor(r)==r}function I(r){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(r)}function z(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.id,t=r.url,n=e||t;if(!n)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(K(n))return"https://vimeo.com/".concat(n);if(I(n))return n.replace("http:","https:");throw e?new TypeError("\u201C".concat(e,"\u201D is not a valid video id.")):new TypeError("\u201C".concat(n,"\u201D is not a vimeo.com url."))}var Z=typeof Array.prototype.indexOf<"u",ee=typeof window<"u"&&typeof window.postMessage<"u";if(!q&&(!Z||!ee))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var M=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function te(r,e){return e={exports:{}},r(e,e.exports),e.exports}/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */(function(r){if(r.WeakMap)return;var e=Object.prototype.hasOwnProperty,t=function(i,l,f){Object.defineProperty?Object.defineProperty(i,l,{configurable:!0,writable:!0,value:f}):i[l]=f};r.WeakMap=function(){function i(){if(this===void 0)throw new TypeError("Constructor WeakMap requires 'new'");if(t(this,"_id",f("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}t(i.prototype,"delete",function(c){if(l(this,"delete"),!n(c))return!1;var p=c[this._id];return p&&p[0]===c?(delete c[this._id],!0):!1}),t(i.prototype,"get",function(c){if(l(this,"get"),!!n(c)){var p=c[this._id];if(p&&p[0]===c)return p[1]}}),t(i.prototype,"has",function(c){if(l(this,"has"),!n(c))return!1;var p=c[this._id];return!!(p&&p[0]===c)}),t(i.prototype,"set",function(c,p){if(l(this,"set"),!n(c))throw new TypeError("Invalid value used as weak map key");var P=c[this._id];return P&&P[0]===c?(P[1]=p,this):(t(c,this._id,[c,p]),this)});function l(c,p){if(!n(c)||!e.call(c,"_id"))throw new TypeError(p+" method called on incompatible receiver "+typeof c)}function f(c){return c+"_"+h()+"."+h()}function h(){return Math.random().toString().substring(2)}return t(i,"_polyfill",!0),i}();function n(i){return Object(i)===i}})(typeof self<"u"?self:typeof window<"u"?window:M);var S=te(function(r){/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/(function(t,n,i){n[t]=n[t]||i(),r.exports&&(r.exports=n[t])})("Promise",M,function(){var t,n,i,l=Object.prototype.toString,f=typeof setImmediate<"u"?function(o){return setImmediate(o)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(o,a,s,d){return Object.defineProperty(o,a,{value:s,writable:!0,configurable:d!==!1})}}catch{t=function(a,s,d){return a[s]=d,a}}i=function(){var o,a,s;function d(g,v){this.fn=g,this.self=v,this.next=void 0}return{add:function(v,T){s=new d(v,T),a?a.next=s:o=s,a=s,s=void 0},drain:function(){var v=o;for(o=a=n=void 0;v;)v.fn.call(v.self),v=v.next}}}();function h(u,o){i.add(u,o),n||(n=f(i.drain))}function c(u){var o,a=typeof u;return u!=null&&(a=="object"||a=="function")&&(o=u.then),typeof o=="function"?o:!1}function p(){for(var u=0;u<this.chain.length;u++)P(this,this.state===1?this.chain[u].success:this.chain[u].failure,this.chain[u]);this.chain.length=0}function P(u,o,a){var s,d;try{o===!1?a.reject(u.msg):(o===!0?s=u.msg:s=o.call(void 0,u.msg),s===a.promise?a.reject(TypeError("Promise-chain cycle")):(d=c(s))?d.call(s,a.resolve,a.reject):a.resolve(s))}catch(g){a.reject(g)}}function D(u){var o,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(o=c(u))?h(function(){var s=new w(a);try{o.call(u,function(){D.apply(s,arguments)},function(){E.apply(s,arguments)})}catch(d){E.call(s,d)}}):(a.msg=u,a.state=1,a.chain.length>0&&h(p,a))}catch(s){E.call(new w(a),s)}}}function E(u){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=u,o.state=2,o.chain.length>0&&h(p,o))}function b(u,o,a,s){for(var d=0;d<o.length;d++)(function(v){u.resolve(o[v]).then(function(C){a(v,C)},s)})(d)}function w(u){this.def=u,this.triggered=!1}function L(u){this.promise=u,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function k(u){if(typeof u!="function")throw TypeError("Not a function");if(this.__NPO__!==0)throw TypeError("Not a promise");this.__NPO__=1;var o=new L(this);this.then=function(s,d){var g={success:typeof s=="function"?s:!0,failure:typeof d=="function"?d:!1};return g.promise=new this.constructor(function(T,C){if(typeof T!="function"||typeof C!="function")throw TypeError("Not a function");g.resolve=T,g.reject=C}),o.chain.push(g),o.state!==0&&h(p,o),g.promise},this.catch=function(s){return this.then(void 0,s)};try{u.call(void 0,function(s){D.call(o,s)},function(s){E.call(o,s)})}catch(a){E.call(o,a)}}var O=t({},"constructor",k,!1);return k.prototype=O,t(O,"__NPO__",0,!1),t(k,"resolve",function(o){var a=this;return o&&typeof o=="object"&&o.__NPO__===1?o:new a(function(d,g){if(typeof d!="function"||typeof g!="function")throw TypeError("Not a function");d(o)})}),t(k,"reject",function(o){return new this(function(s,d){if(typeof s!="function"||typeof d!="function")throw TypeError("Not a function");d(o)})}),t(k,"all",function(o){var a=this;return l.call(o)!="[object Array]"?a.reject(TypeError("Not an array")):o.length===0?a.resolve([]):new a(function(d,g){if(typeof d!="function"||typeof g!="function")throw TypeError("Not a function");var v=o.length,T=Array(v),C=0;b(a,o,function(le,fe){T[le]=fe,++C===v&&d(T)},g)})}),t(k,"race",function(o){var a=this;return l.call(o)!="[object Array]"?a.reject(TypeError("Not an array")):new a(function(d,g){if(typeof d!="function"||typeof g!="function")throw TypeError("Not a function");b(a,o,function(T,C){d(C)},g)})}),k})}),_=new WeakMap;function A(r,e,t){var n=_.get(r.element)||{};e in n||(n[e]=[]),n[e].push(t),_.set(r.element,n)}function N(r,e){var t=_.get(r.element)||{};return t[e]||[]}function j(r,e,t){var n=_.get(r.element)||{};if(!n[e])return!0;if(!t)return n[e]=[],_.set(r.element,n),!0;var i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),_.set(r.element,n),n[e]&&n[e].length===0}function ne(r,e){var t=N(r,e);if(t.length<1)return!1;var n=t.shift();return j(r,e,n),n}function re(r,e){var t=_.get(r);_.set(e,t),_.delete(r)}var ie=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function B(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ie.reduce(function(t,n){var i=r.getAttribute("data-vimeo-".concat(n));return(i||i==="")&&(t[n]=i===""?1:i),t},e)}function W(r,e){var t=r.html;if(!e)throw new TypeError("An element must be provided");if(e.getAttribute("data-vimeo-initialized")!==null)return e.querySelector("iframe");var n=document.createElement("div");return n.innerHTML=t,e.appendChild(n.firstChild),e.setAttribute("data-vimeo-initialized","true"),e.querySelector("iframe")}function U(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,i){if(!I(r))throw new TypeError("\u201C".concat(r,"\u201D is not a vimeo.com url."));var l="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(r));for(var f in e)e.hasOwnProperty(f)&&(l+="&".concat(f,"=").concat(encodeURIComponent(e[f])));var h="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;h.open("GET",l,!0),h.onload=function(){if(h.status===404){i(new Error("\u201C".concat(r,"\u201D was not found.")));return}if(h.status===403){i(new Error("\u201C".concat(r,"\u201D is not embeddable.")));return}try{var c=JSON.parse(h.responseText);if(c.domain_status_code===403){W(c,t),i(new Error("\u201C".concat(r,"\u201D is not embeddable.")));return}n(c)}catch(p){i(p)}},h.onerror=function(){var c=h.status?" (".concat(h.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(c,".")))},h.send()})}function oe(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document,e=[].slice.call(r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),t=function(i){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(i))};e.forEach(function(n){try{if(n.getAttribute("data-vimeo-defer")!==null)return;var i=B(n),l=z(i);U(l,i,n).then(function(f){return W(f,n)}).catch(t)}catch(f){t(f)}})}function ae(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var e=function(n){if(I(n.origin)&&!(!n.data||n.data.event!=="spacechange")){for(var i=r.querySelectorAll("iframe"),l=0;l<i.length;l++)if(i[l].contentWindow===n.source){var f=i[l].parentElement;f.style.paddingBottom="".concat(n.data.data[0].bottom,"px");break}}};window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e)}}function Y(r){if(typeof r=="string")try{r=JSON.parse(r)}catch(e){return console.warn(e),{}}return r}function R(r,e,t){if(!(!r.element.contentWindow||!r.element.contentWindow.postMessage)){var n={method:e};t!==void 0&&(n.value=t);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(n=JSON.stringify(n)),r.element.contentWindow.postMessage(n,r.origin)}}function ue(r,e){e=Y(e);var t=[],n;if(e.event){if(e.event==="error"){var i=N(r,e.data.method);i.forEach(function(f){var h=new Error(e.data.message);h.name=e.data.name,f.reject(h),j(r,e.data.method,f)})}t=N(r,"event:".concat(e.event)),n=e.data}else if(e.method){var l=ne(r,e.method);l&&(t.push(l),n=e.value)}t.forEach(function(f){try{if(typeof f=="function"){f.call(r,n);return}f.resolve(n)}catch{}})}var V=new WeakMap,H=new WeakMap,se=function(){function r(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(x(this,r),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),typeof document<"u"&&typeof e=="string"&&(e=document.getElementById(e)),!G(e))throw new TypeError("You must pass either a valid element or a valid id.");var i=e.ownerDocument.defaultView;if(e.nodeName!=="IFRAME"){var l=e.querySelector("iframe");l&&(e=l)}if(e.nodeName==="IFRAME"&&!I(e.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(V.has(e))return V.get(e);this.element=e,this.origin="*";var f=new S(function(h,c){var p=function(b){if(!(!I(b.origin)||t.element.contentWindow!==b.source)){t.origin==="*"&&(t.origin=b.origin);var w=Y(b.data),L=w&&w.event==="error",k=L&&w.data&&w.data.method==="ready";if(k){var O=new Error(w.data.message);O.name=w.data.name,c(O);return}var u=w&&w.event==="ready",o=w&&w.method==="ping";if(u||o){t.element.setAttribute("data-ready","true"),h();return}ue(t,w)}};if(i.addEventListener?i.addEventListener("message",p,!1):i.attachEvent&&i.attachEvent("onmessage",p),t.element.nodeName!=="IFRAME"){var P=B(e,n),D=z(P);U(D,P,e).then(function(E){var b=W(E,e);return t.element=b,t._originalElement=e,re(e,b),V.set(t.element,t),E}).catch(c)}});return H.set(this,f),V.set(this.element,this),this.element.nodeName==="IFRAME"&&R(this,"ping"),this}return X(r,[{key:"callMethod",value:function(t){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new S(function(l,f){return n.ready().then(function(){A(n,t,{resolve:l,reject:f}),R(n,t,i)}).catch(f)})}},{key:"get",value:function(t){var n=this;return new S(function(i,l){return t=F(t,"get"),n.ready().then(function(){A(n,t,{resolve:i,reject:l}),R(n,t)}).catch(l)})}},{key:"set",value:function(t,n){var i=this;return new S(function(l,f){if(t=F(t,"set"),n==null)throw new TypeError("There must be a value to set.");return i.ready().then(function(){A(i,t,{resolve:l,reject:f}),R(i,t,n)}).catch(f)})}},{key:"on",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(!n)throw new TypeError("You must pass a callback function.");if(typeof n!="function")throw new TypeError("The callback must be a function.");var i=N(this,"event:".concat(t));i.length===0&&this.callMethod("addEventListener",t).catch(function(){}),A(this,"event:".concat(t),n)}},{key:"off",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(n&&typeof n!="function")throw new TypeError("The callback must be a function.");var i=j(this,"event:".concat(t),n);i&&this.callMethod("removeEventListener",t).catch(function(l){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=H.get(this)||new S(function(n,i){i(new Error("Unknown player. Probably unloaded."))});return S.resolve(t)}},{key:"addCuePoint",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.callMethod("addCuePoint",{time:t,data:n})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,n){if(!t)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:t,kind:n})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new S(function(n){H.delete(t),V.delete(t.element),t._originalElement&&(V.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&t.element.nodeName==="IFRAME"&&t.element.parentNode&&t.element.parentNode.removeChild(t.element),n()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"setMuted",value:function(t){return this.set("muted",t)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(t){return this.set("playbackRate",t)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}}]),r}();q||(oe(),ae());let Q=!1;function ce(){if(Q)return;Q=!0;const r=`
    .vjs-vimeo iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r)),e.appendChild(t)}const J=y.getTech("Tech");class m extends J{constructor(e,t){super(e,t),ce(),this.setPoster(e.poster),this.initVimeoPlayer()}initVimeoPlayer(){const e={url:this.options_.source.src,byline:!1,portrait:!1,title:!1};this.options_.autoplay&&(e.autoplay=!0),this.options_.height&&(e.height=this.options_.height),this.options_.width&&(e.width=this.options_.width),this.options_.maxheight&&(e.maxheight=this.options_.maxheight),this.options_.maxwidth&&(e.maxwidth=this.options_.maxwidth),this.options_.loop&&(e.loop=this.options_.loop),this.options_.color&&(e.color=this.options_.color.replace(/^#/,"")),this._player=new se(this.el(),e),this.initVimeoState(),["play","pause","ended","timeupdate","progress","seeked"].forEach(t=>{this._player.on(t,n=>{this._vimeoState.progress.duration!==n.duration&&this.trigger("durationchange"),this._vimeoState.progress=n,this.trigger(t)})}),this._player.on("pause",()=>this._vimeoState.playing=!1),this._player.on("play",()=>{this._vimeoState.playing=!0,this._vimeoState.ended=!1}),this._player.on("ended",()=>{this._vimeoState.playing=!1,this._vimeoState.ended=!0}),this._player.on("volumechange",t=>this._vimeoState.volume=t),this._player.on("error",t=>this.trigger("error",t)),this.triggerReady()}initVimeoState(){const e=this._vimeoState={ended:!1,playing:!1,volume:0,progress:{seconds:0,percent:0,duration:0}};this._player.getCurrentTime().then(t=>e.progress.seconds=t),this._player.getDuration().then(t=>e.progress.duration=t),this._player.getPaused().then(t=>e.playing=!t),this._player.getVolume().then(t=>e.volume=t)}createEl(){const e=y.dom.createEl("div",{id:this.options_.techId});return e.style.cssText="width:100%;height:100%;top:0;left:0;position:absolute",e.className="vjs-vimeo",e}controls(){return!0}supportsFullScreen(){return!0}src(){return this.options_.source}currentSrc(){return this.options_.source.src}currentTime(){return this._vimeoState.progress.seconds}setCurrentTime(e){this._player.setCurrentTime(e)}volume(){return this._vimeoState.volume}setVolume(e){return this._player.setVolume(e)}duration(){return this._vimeoState.progress.duration}buffered(){const e=this._vimeoState.progress;return y.createTimeRange(0,e.percent*e.duration)}paused(){return!this._vimeoState.playing}pause(){this._player.pause()}play(){this._player.play()}muted(){return this._vimeoState.volume===0}ended(){return this._vimeoState.ended}playbackRate(){return 1}}return m.prototype.featuresTimeupdateEvents=!0,m.isSupported=function(){return!0},J.withSourceHandlers(m),m.nativeSourceHandler={},m.nativeSourceHandler.canPlayType=function(r){return r==="video/vimeo"?"maybe":""},m.nativeSourceHandler.canHandleSource=function(r){return r.type?m.nativeSourceHandler.canPlayType(r.type):r.src?m.nativeSourceHandler.canPlayType(r.src):""},m.nativeSourceHandler.handleSource=function(r,e){e.src(r.src)},m.nativeSourceHandler.dispose=function(){},m.registerSourceHandler(m.nativeSourceHandler),typeof y.registerTech<"u"?y.registerTech("Vimeo",m):y.registerComponent("Vimeo",m),m.VERSION="0.0.1",m});
//# sourceMappingURL=videojs.vimeo.a9cf03ce3c0be99143cf1a6c80ead6f8.js.map
