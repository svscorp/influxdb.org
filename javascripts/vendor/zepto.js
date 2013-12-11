!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(n){if(void 0===this||null===this)throw new TypeError;var e,r=Object(this),i=r.length>>>0,a=0;if("function"!=typeof n)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)e=arguments[1];else for(;;){if(a in r){e=r[a++];break}if(++a>=i)throw new TypeError}for(;i>a;)a in r&&(e=n.call(t,e,r[a],a,r)),a++;return e})}();var Zepto=function(){function t(t){return null==t?String(t):V[X.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(n){return"object"==t(n)}function a(t){return i(t)&&!e(t)&&t.__proto__==Object.prototype}function o(t){return t instanceof Array}function u(t){return"number"==typeof t.length}function s(t){return N.call(t,function(t){return null!=t})}function c(t){return t.length>0?k.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in D?D[t]:D[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,n){return"number"!=typeof n||P[l(t)]?n:n+"px"}function d(t){var n,e;return z[t]||(n=R.createElement(t),R.body.appendChild(n),e=j(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),z[t]=e),z[t]}function g(t){return"children"in t?C.call(t.children):k.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,n,e){for(_ in n)e&&(a(n[_])||o(n[_]))?(a(n[_])&&!a(t[_])&&(t[_]={}),o(n[_])&&!o(t[_])&&(t[_]=[]),p(t[_],n[_],e)):n[_]!==M&&(t[_]=n[_])}function m(t,n){return n===M?k(t):k(t).filter(n)}function v(t,e,r,i){return n(e)?e.call(t,r,i):e}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function x(t,n){var e=t.className,r=e&&e.baseVal!==M;return n===M?r?e.baseVal:e:(r?e.baseVal=n:t.className=n,void 0)}function b(t){var n;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(n=Number(t))?/^[\[\{]/.test(t)?k.parseJSON(t):t:n):t}catch(e){return t}}function w(t,n){n(t);for(var e in t.childNodes)w(t.childNodes[e],n)}var M,_,k,E,S,T,A=[],C=A.slice,N=A.filter,R=window.document,z={},D={},j=R.defaultView.getComputedStyle,P={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O=/^\s*<(\w+|!)[^>]*>/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,F=/^(?:body|html)$/i,q=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],H=R.createElement("table"),U=R.createElement("tr"),$={tr:R.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:U,th:U,"*":R.createElement("div")},Z=/complete|loaded|interactive/,Y=/^\.([\w-]+)$/,B=/^#([\w-]*)$/,G=/^[\w-]+$/,V={},X=V.toString,W={},J=R.createElement("div");return W.matches=function(t,n){if(!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var r,i=t.parentNode,a=!i;return a&&(i=J).appendChild(t),r=~W.qsa(i,n).indexOf(t),a&&J.removeChild(t),r},S=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},T=function(t){return N.call(t,function(n,e){return t.indexOf(n)==e})},W.fragment=function(t,n,e){t.replace&&(t=t.replace(L,"<$1></$2>")),n===M&&(n=O.test(t)&&RegExp.$1),n in $||(n="*");var r,i,o=$[n];return o.innerHTML=""+t,i=k.each(C.call(o.childNodes),function(){o.removeChild(this)}),a(e)&&(r=k(i),k.each(e,function(t,n){q.indexOf(t)>-1?r[t](n):r.attr(t,n)})),i},W.Z=function(t,n){return t=t||[],t.__proto__=k.fn,t.selector=n||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,e){if(t){if(n(t))return k(R).ready(t);if(W.isZ(t))return t;var r;if(o(t))r=s(t);else if(i(t))r=[a(t)?k.extend({},t):t],t=null;else if(O.test(t))r=W.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==M)return k(e).find(t);r=W.qsa(R,t)}return W.Z(r,t)}return W.Z()},k=function(t,n){return W.init(t,n)},k.extend=function(t){var n,e=C.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){p(t,e,n)}),t},W.qsa=function(t,n){var e;return r(t)&&B.test(n)?(e=t.getElementById(RegExp.$1))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:C.call(Y.test(n)?t.getElementsByClassName(RegExp.$1):G.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n))},k.contains=function(t,n){return t!==n&&t.contains(n)},k.type=t,k.isFunction=n,k.isWindow=e,k.isArray=o,k.isPlainObject=a,k.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},k.inArray=function(t,n,e){return A.indexOf.call(n,t,e)},k.camelCase=S,k.trim=function(t){return t.trim()},k.uuid=0,k.support={},k.expr={},k.map=function(t,n){var e,r,i,a=[];if(u(t))for(r=0;r<t.length;r++)e=n(t[r],r),null!=e&&a.push(e);else for(i in t)e=n(t[i],i),null!=e&&a.push(e);return c(a)},k.each=function(t,n){var e,r;if(u(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(r in t)if(n.call(t[r],r,t[r])===!1)return t;return t},k.grep=function(t,n){return N.call(t,n)},window.JSON&&(k.parseJSON=JSON.parse),k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){V["[object "+n+"]"]=n.toLowerCase()}),k.fn={forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,indexOf:A.indexOf,concat:A.concat,map:function(t){return k(k.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return k(C.apply(this,arguments))},ready:function(t){return Z.test(R.readyState)?t(k):R.addEventListener("DOMContentLoaded",function(){t(k)},!1),this},get:function(t){return t===M?C.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):k(N.call(this,function(n){return W.matches(n,t)}))},add:function(t,n){return k(T(this.concat(k(t,n))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==M)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):u(t)&&n(t.item)?C.call(t):k(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return k(e)},has:function(t){return this.filter(function(){return i(t)?k.contains(this,t):k(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:k(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:k(t)},find:function(t){var n,e=this;return n="object"==typeof t?k(t).filter(function(){var t=this;return A.some.call(e,function(n){return k.contains(n,t)})}):1==this.length?k(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)})},closest:function(t,n){var e=this[0],i=!1;for("object"==typeof t&&(i=k(t));e&&!(i?i.indexOf(e)>=0:W.matches(e,t));)e=e!==n&&!r(e)&&e.parentNode;return k(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=k.map(e,function(t){return(t=t.parentNode)&&!r(t)&&n.indexOf(t)<0?(n.push(t),t):void 0});return m(n,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return g(this)}),t)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,n){return N.call(g(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return k.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==j(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=k(t).get(0),i=r.parentNode||this.length>1;return this.each(function(n){k(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){k(this[0]).before(t=k(t));for(var n;(n=t.children()).length;)t=n.first();k(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=k(this),i=r.contents(),a=e?t.call(this,n):t;i.length?i.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){k(this).replaceWith(k(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=k(this);(t===M?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return k(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return k(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===M?this.length>0?this[0].innerHTML:null:this.each(function(n){var e=this.innerHTML;k(this).empty().append(v(this,t,n,e))})},text:function(t){return t===M?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,n){var e;return"string"==typeof t&&n===M?0==this.length||1!==this[0].nodeType?M:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:this.each(function(e){if(1===this.nodeType)if(i(t))for(_ in t)y(this,_,t[_]);else y(this,t,v(this,n,e,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,n){return n===M?this[0]&&this[0][t]:this.each(function(e){this[t]=v(this,n,e,this[t])})},data:function(t,n){var e=this.attr("data-"+l(t),n);return null!==e?b(e):M},val:function(t){return t===M?this[0]&&(this[0].multiple?k(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(n){this.value=v(this,t,n,this.value)})},offset:function(t){if(t)return this.each(function(n){var e=k(this),r=v(this,t,n,e.offset()),i=e.offsetParent().offset(),a={top:r.top-i.top,left:r.left-i.left};"static"==e.css("position")&&(a.position="relative"),e.css(a)});if(0==this.length)return null;var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2&&"string"==typeof n)return this[0]&&(this[0].style[S(n)]||j(this[0],"").getPropertyValue(n));var r="";if("string"==t(n))e||0===e?r=l(n)+":"+h(n,e):this.each(function(){this.style.removeProperty(l(n))});else for(_ in n)n[_]||0===n[_]?r+=l(_)+":"+h(_,n[_])+";":this.each(function(){this.style.removeProperty(l(_))});return this.each(function(){this.style.cssText+=";"+r})},index:function(t){return t?this.indexOf(k(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return A.some.call(this,function(t){return this.test(x(t))},f(t))},addClass:function(t){return this.each(function(n){E=[];var e=x(this),r=v(this,t,n,e);r.split(/\s+/g).forEach(function(t){k(this).hasClass(t)||E.push(t)},this),E.length&&x(this,e+(e?" ":"")+E.join(" "))})},removeClass:function(t){return this.each(function(n){return t===M?x(this,""):(E=x(this),v(this,t,n,E).split(/\s+/g).forEach(function(t){E=E.replace(f(t)," ")}),x(this,E.trim()),void 0)})},toggleClass:function(t,n){return this.each(function(e){var r=k(this),i=v(this,t,e,x(this));i.split(/\s+/g).forEach(function(t){(n===M?!r.hasClass(t):n)?r.addClass(t):r.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),r=F.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(k(t).css("margin-top"))||0,e.left-=parseFloat(k(t).css("margin-left"))||0,r.top+=parseFloat(k(n[0]).css("border-top-width"))||0,r.left+=parseFloat(k(n[0]).css("border-left-width"))||0,{top:e.top-r.top,left:e.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||R.body;t&&!F.test(t.nodeName)&&"static"==k(t).css("position");)t=t.offsetParent;return t})}},k.fn.detach=k.fn.remove,["width","height"].forEach(function(t){k.fn[t]=function(n){var i,a=this[0],o=t.replace(/./,function(t){return t[0].toUpperCase()});return n===M?e(a)?a["inner"+o]:r(a)?a.documentElement["offset"+o]:(i=this.offset())&&i[t]:this.each(function(e){a=k(this),a.css(t,v(this,n,e,a[t]()))})}}),I.forEach(function(n,e){var r=e%2;k.fn[n]=function(){var n,i,a=k.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:W.fragment(e)}),o=this.length>1;return a.length<1?this:this.each(function(t,n){i=r?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null,a.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return k(t).remove();w(i.insertBefore(t,n),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},k.fn[r?n+"To":"insert"+(e?"Before":"After")]=function(t){return k(t)[n](this),this}}),W.Z.prototype=k.fn,W.uniq=T,W.deserializeValue=b,k.zepto=W,k}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function n(t){var n=this.os={},e=this.browser={},r=t.match(/WebKit\/([\d.]+)/),i=t.match(/(Android)\s+([\d.]+)/),a=t.match(/(iPad).*OS\s([\d_]+)/),o=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),u=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),s=u&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/(BB10).*Version\/([\d.]+)/),d=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),p=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(e.webkit=!!r)&&(e.version=r[1]),i&&(n.android=!0,n.version=i[2]),o&&(n.ios=n.iphone=!0,n.version=o[2].replace(/_/g,".")),a&&(n.ios=n.ipad=!0,n.version=a[2].replace(/_/g,".")),u&&(n.webos=!0,n.version=u[2]),s&&(n.touchpad=!0),f&&(n.blackberry=!0,n.version=f[2]),h&&(n.bb10=!0,n.version=h[2]),d&&(n.rimtabletos=!0,n.version=d[2]),g&&(e.playbook=!0),c&&(n.kindle=!0,n.version=c[1]),l&&(e.silk=!0,e.version=l[1]),!l&&n.android&&t.match(/Kindle Fire/)&&(e.silk=!0),p&&(e.chrome=!0,e.version=p[1]),m&&(e.firefox=!0,e.version=m[1]),n.tablet=!!(a||g||i&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),n.phone=!(n.tablet||!(i||o||u||f||h||p&&t.match(/Android/)||p&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}n.call(t,navigator.userAgent),t.__detect=n}(Zepto),function(t){function n(t){return t._zid||(t._zid=d++)}function e(t,e,a,o){if(e=r(e),e.ns)var u=i(e.ns);return(h[n(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!u.test(t.ns)||a&&n(t.fn)!==n(a)||o&&t.sel!=o)})}function r(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(n,e,r){"string"!=t.type(n)?t.each(n,r):n.split(/\s/).forEach(function(t){r(t,e)})}function o(t,n){return t.del&&("focus"==t.e||"blur"==t.e)||!!n}function u(t){return p[t]||t}function s(e,i,s,c,l,f){var d=n(e),g=h[d]||(h[d]=[]);a(i,s,function(n,i){var a=r(n);a.fn=i,a.sel=c,a.e in p&&(i=function(n){var e=n.relatedTarget;return!e||e!==this&&!t.contains(this,e)?a.fn.apply(this,arguments):void 0}),a.del=l&&l(i,n);var s=a.del||i;a.proxy=function(t){var n=s.apply(e,[t].concat(t.data));return n===!1&&(t.preventDefault(),t.stopPropagation()),n},a.i=g.length,g.push(a),e.addEventListener(u(a.e),a.proxy,o(a,f))})}function c(t,r,i,s,c){var l=n(t);a(r||"",i,function(n,r){e(t,n,r,s).forEach(function(n){delete h[l][n.i],t.removeEventListener(u(n.e),n.proxy,o(n,c))})})}function l(n){var e,r={originalEvent:n};for(e in n)y.test(e)||void 0===n[e]||(r[e]=n[e]);return t.each(x,function(t,e){r[t]=function(){return this[e]=m,n[t].apply(n,arguments)},r[e]=v}),r}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var n=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,n.call(this)}}}var h=(t.zepto.qsa,{}),d=1,g={},p={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(e,r){if(t.isFunction(e)){var i=function(){return e.apply(r,arguments)};return i._zid=n(e),i}if("string"==typeof r)return t.proxy(e[r],e);throw new TypeError("expected function")},t.fn.bind=function(t,n){return this.each(function(){s(this,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){c(this,t,n)})},t.fn.one=function(t,n){return this.each(function(e,r){s(this,t,n,null,function(t,n){return function(){var e=t.apply(r,arguments);return c(r,n,t),e}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(n,e,r){return this.each(function(i,a){s(a,e,r,n,function(e){return function(r){var i,o=t(r.target).closest(n,a).get(0);return o?(i=t.extend(l(r),{currentTarget:o,liveFired:a}),e.apply(o,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,n,e){return this.each(function(){c(this,n,e,t)})},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,r){return!e||t.isFunction(e)?this.bind(n,e||r):this.delegate(e,n,r)},t.fn.off=function(n,e,r){return!e||t.isFunction(e)?this.unbind(n,e||r):this.undelegate(e,n,r)},t.fn.trigger=function(n,e){return("string"==typeof n||t.isPlainObject(n))&&(n=t.Event(n)),f(n),n.data=e,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(n)})},t.fn.triggerHandler=function(n,r){var i,a;return this.each(function(o,u){i=l("string"==typeof n?t.Event(n):n),i.data=r,i.target=u,t.each(e(u,n.type||n),function(t,n){return a=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),a},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return t?this.bind(n,t):this.trigger(n)}}),["focus","blur"].forEach(function(n){t.fn[n]=function(t){return t?this.bind(n,t):this.each(function(){try{this[n]()}catch(t){}}),this}}),t.Event=function(t,n){"string"!=typeof t&&(n=t,t=n.type);var e=document.createEvent(g[t]||"Events"),r=!0;if(n)for(var i in n)"bubbles"==i?r=!!n[i]:e[i]=n[i];return e.initEvent(t,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),e.isDefaultPrevented=function(){return this.defaultPrevented},e}}(Zepto),function(t){function n(n,e,r){var i=t.Event(e);return t(n).trigger(i,r),!i.defaultPrevented}function e(t,e,r,i){return t.global?n(e||y,r,i):void 0}function r(n){n.global&&0===t.active++&&e(n,null,"ajaxStart")}function i(n){n.global&&!--t.active&&e(n,null,"ajaxStop")}function a(t,n){var r=n.context;return n.beforeSend.call(r,t,n)===!1||e(n,r,"ajaxBeforeSend",[t,n])===!1?!1:(e(n,r,"ajaxSend",[t,n]),void 0)}function o(t,n,r){var i=r.context,a="success";r.success.call(i,t,a,n),e(r,i,"ajaxSuccess",[n,r,t]),s(a,n,r)}function u(t,n,r,i){var a=i.context;i.error.call(a,r,n,t),e(i,a,"ajaxError",[r,i,t]),s(n,r,i)}function s(t,n,r){var a=r.context;r.complete.call(a,n,t),e(r,a,"ajaxComplete",[n,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==_?"html":t==M?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,n){return(t+"&"+n).replace(/[&?]{1,2}/,"?")}function h(n){n.processData&&n.data&&"string"!=t.type(n.data)&&(n.data=t.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=f(n.url,n.data))}function d(n,e,r,i){var a=!t.isFunction(e);return{url:n,data:a?e:void 0,success:a?t.isFunction(r)?r:void 0:e,dataType:a?i||r:r}}function g(n,e,r,i){var a,o=t.isArray(e);t.each(e,function(e,u){a=t.type(u),i&&(e=r?i:i+"["+(o?"":e)+"]"),!i&&o?n.add(u.name,u.value):"array"==a||!r&&"object"==a?g(n,u,r,e):n.add(e,u)})}var p,m,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,M="application/json",_="text/html",k=/^\s*$/;t.active=0,t.ajaxJSONP=function(n){if(!("type"in n))return t.ajax(n);var e,r="jsonp"+ ++v,i=y.createElement("script"),s=function(){clearTimeout(e),t(i).remove(),delete window[r]},l=function(t){s(),t&&"timeout"!=t||(window[r]=c),u(null,t||"abort",f,n)},f={abort:l};return a(f,n)===!1?(l("abort"),!1):(window[r]=function(t){s(),o(t,f,n)},i.onerror=function(){l("error")},i.src=n.url.replace(/=\?/,"="+r),t("head").append(i),n.timeout>0&&(e=setTimeout(function(){l("timeout")},n.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:M,xml:"application/xml, text/xml",html:_,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(n){var e=t.extend({},n||{});for(p in t.ajaxSettings)void 0===e[p]&&(e[p]=t.ajaxSettings[p]);r(e),e.crossDomain||(e.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(e.url)&&RegExp.$2!=window.location.host),e.url||(e.url=window.location.toString()),h(e),e.cache===!1&&(e.url=f(e.url,"_="+Date.now()));var i=e.dataType,s=/=\?/.test(e.url);if("jsonp"==i||s)return s||(e.url=f(e.url,"callback=?")),t.ajaxJSONP(e);var d,g=e.accepts[i],v={},y=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:window.location.protocol,x=e.xhr();e.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),g&&(v.Accept=g,g.indexOf(",")>-1&&(g=g.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(g)),(e.contentType||e.contentType!==!1&&e.data&&"GET"!=e.type.toUpperCase())&&(v["Content-Type"]=e.contentType||"application/x-www-form-urlencoded"),e.headers=t.extend(v,e.headers||{}),x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(d);var n,r=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==y){i=i||l(x.getResponseHeader("content-type")),n=x.responseText;try{"script"==i?(1,eval)(n):"xml"==i?n=x.responseXML:"json"==i&&(n=k.test(n)?null:t.parseJSON(n))}catch(a){r=a}r?u(r,"parsererror",x,e):o(n,x,e)}else u(null,x.status?"error":"abort",x,e)}};var b="async"in e?e.async:!0;x.open(e.type,e.url,b);for(m in e.headers)x.setRequestHeader(m,e.headers[m]);return a(x,e)===!1?(x.abort(),!1):(e.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=c,x.abort(),u(null,"timeout",x,e)},e.timeout)),x.send(e.data?e.data:null),x)},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var n=d.apply(null,arguments);return n.type="POST",t.ajax(n)},t.getJSON=function(){var n=d.apply(null,arguments);return n.dataType="json",t.ajax(n)},t.fn.load=function(n,e,r){if(!this.length)return this;var i,a=this,o=n.split(/\s/),u=d(n,e,r),s=u.success;return o.length>1&&(u.url=o[0],i=o[1]),u.success=function(n){a.html(i?t("<div>").html(n.replace(x,"")).find(i):n),s&&s.apply(a,arguments)},t.ajax(u),this};var E=encodeURIComponent;t.param=function(t,n){var e=[];return e.add=function(t,n){this.push(E(t)+"="+E(n))},g(e,t,n),e.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=t(this);var r=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(n)this.bind("submit",n);else if(this.length){var e=t.Event("submit");this.eq(0).trigger(e),e.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,n){function e(t){return r(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(t){return t.toLowerCase()}function i(t){return a?a+t:r(t)}var a,o,u,s,c,l,f,h,d="",g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},p=window.document,m=p.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(g,function(t,e){return m.style[t+"TransitionProperty"]!==n?(d="-"+r(t)+"-",a=e,!1):void 0}),o=d+"transform",y[u=d+"transition-property"]=y[s=d+"transition-duration"]=y[c=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[h=d+"animation-timing-function"]="",t.fx={off:a===n&&m.style.transitionProperty===n,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,e,r,i){return t.isPlainObject(e)&&(r=e.easing,i=e.complete,e=e.duration),e&&(e=("number"==typeof e?e:t.fx.speeds[e]||t.fx.speeds._default)/1e3),this.anim(n,e,r,i)},t.fn.anim=function(r,i,a,d){var g,p,m,x={},b="",w=this,M=t.fx.transitionEnd;if(i===n&&(i=.4),t.fx.off&&(i=0),"string"==typeof r)x[l]=r,x[f]=i+"s",x[h]=a||"linear",M=t.fx.animationEnd;else{p=[];for(g in r)v.test(g)?b+=g+"("+r[g]+") ":(x[g]=r[g],p.push(e(g)));b&&(x[o]=b,p.push(o)),i>0&&"object"==typeof r&&(x[u]=p.join(", "),x[s]=i+"s",x[c]=a||"linear")}return m=function(n){if("undefined"!=typeof n){if(n.target!==n.currentTarget)return;t(n.target).unbind(M,m)}t(this).css(y),d&&d.call(this)},i>0&&this.bind(M,m),this.size()&&this.get(0).clientLeft,this.css(x),0>=i&&setTimeout(function(){w.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,n){function e(e,r,i,a,o){"function"!=typeof r||o||(o=r,r=n);var u={opacity:i};return a&&(u.scale=a,e.css(t.fx.cssPrefix+"transform-origin","0 0")),e.animate(u,r,null,o)}function r(n,r,i,a){return e(n,r,0,i,function(){o.call(t(this)),a&&a.call(this)})}var i=window.document,a=(i.documentElement,t.fn.show),o=t.fn.hide,u=t.fn.toggle;t.fn.show=function(t,r){return a.call(this),t===n?t=0:this.css("opacity",0),e(this,t,1,"1,1",r)},t.fn.hide=function(t,e){return t===n?o.call(this):r(this,t,"0,0",e)},t.fn.toggle=function(e,r){return e===n||"boolean"==typeof e?u.call(this,e):this.each(function(){var n=t(this);n["none"==n.css("display")?"show":"hide"](e,r)})},t.fn.fadeTo=function(t,n,r){return e(this,t,n,null,r)},t.fn.fadeIn=function(t,n){var e=this.css("opacity");return e>0?this.css("opacity",0):e=1,a.call(this).fadeTo(t,e,n)},t.fn.fadeOut=function(t,n){return r(this,t,null,n)},t.fn.fadeToggle=function(n,e){return this.each(function(){var r=t(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](n,e)})}}(Zepto),function(t){var n,e=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(e.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",n&&clearTimeout(n),n=setTimeout(function(){e=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function n(n,r){var s=n[u],c=s&&i[s];if(void 0===r)return c||e(n);if(c){if(r in c)return c[r];var l=o(r);if(l in c)return c[l]}return a.call(t(n),r)}function e(n,e,a){var s=n[u]||(n[u]=++t.uuid),c=i[s]||(i[s]=r(n));return void 0!==e&&(c[o(e)]=a),c}function r(n){var e={};return t.each(n.attributes,function(n,r){0==r.name.indexOf("data-")&&(e[o(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),e}var i={},a=t.fn.data,o=t.camelCase,u=t.expando="Zepto"+ +new Date;t.fn.data=function(r,i){return void 0===i?t.isPlainObject(r)?this.each(function(n,i){t.each(r,function(t,n){e(i,t,n)})}):0==this.length?void 0:n(this[0],r):this.each(function(){e(this,r,i)})},t.fn.removeData=function(n){return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function(){var e=this[u],r=e&&i[e];r&&t.each(n,function(){delete r[o(this)]})})}}(Zepto),function(t){function n(n){return n=t(n),!(!n.width()&&!n.height())&&"none"!==n.css("display")}function e(t,n){t=t.replace(/=#\]/g,'="#"]');var e,r,i=u.exec(t);if(i&&i[2]in o&&(e=o[i[2]],r=i[3],t=i[1],r)){var a=Number(r);r=isNaN(a)?r.replace(/^["']|["']$/g,""):a}return n(t,e,r)}var r=t.zepto,i=r.qsa,a=r.matches,o=t.expr[":"]={visible:function(){return n(this)?this:void 0},hidden:function(){return n(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,n){return t===n.length-1?this:void 0},eq:function(t,n,e){return t===e?this:void 0},contains:function(n,e,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,n,e){return r.qsa(this,e).length?this:void 0}},u=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),s=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(n,a){return e(a,function(e,o,u){try{var l;!e&&o?e="*":s.test(e)&&(l=t(n).addClass(c),e="."+c+" "+e);var f=i(n,e)}catch(h){throw console.error("error performing selector: %o",a),h}finally{l&&l.removeClass(c)}return o?r.uniq(t.map(f,function(t,n){return o.call(t,n,f,u)})):f})},r.matches=function(t,n){return e(n,function(n,e,r){return!(n&&!a(t,n)||e&&e.call(t,null,r)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function n(t){return"tagName"in t?t:t.parentNode}function e(t,n,e,r){var i=Math.abs(t-n),a=Math.abs(e-r);return i>=a?t-n>0?"Left":"Right":e-r>0?"Up":"Down"}function r(){c=null,l.last&&(l.el.trigger("longTap"),l={})}function i(){c&&clearTimeout(c),c=null}function a(){o&&clearTimeout(o),u&&clearTimeout(u),s&&clearTimeout(s),c&&clearTimeout(c),o=u=s=c=null,l={}}var o,u,s,c,l={},f=750;t(document).ready(function(){var h,d;t(document.body).bind("touchstart",function(e){h=Date.now(),d=h-(l.last||h),l.el=t(n(e.touches[0].target)),o&&clearTimeout(o),l.x1=e.touches[0].pageX,l.y1=e.touches[0].pageY,d>0&&250>=d&&(l.isDoubleTap=!0),l.last=h,c=setTimeout(r,f)}).bind("touchmove",function(t){i(),l.x2=t.touches[0].pageX,l.y2=t.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&t.preventDefault()}).bind("touchend",function(){i(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?s=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+e(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(u=setTimeout(function(){var n=t.Event("tap");n.cancelTouch=a,l.el.trigger(n),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):o=setTimeout(function(){o=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",a),t(window).bind("scroll",a)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}})}(Zepto),this.Zepto&&function(t){var n,e;return n=function(t,n,e,r,i){var a,o;return t?(o=t[e](),a={width:["left","right"],height:["top","bottom"]},a[e].forEach(function(n){return o+=parseInt(t.css("padding-"+n),10),r&&(o+=parseInt(t.css("border-"+n+"-width"),10)),i?o+=parseInt(t.css("margin-"+n),10):void 0}),o):null},["width","height"].forEach(function(e){var r,i,a,o,u;return r=e.replace(/./,function(t){return t[0].toUpperCase()}),(i=t.fn)[o="inner"+r]||(i[o]=function(t){return n(this,r,e,!1,t)}),(a=t.fn)[u="outer"+r]||(a[u]=function(t){return n(this,r,e,!0,t)})}),(e=t.fn).detach||(e.detach=function(t){var n,e;return e=this,null!=t&&(e=e.filter(t)),n=e.clone(!0),e.remove(),n})}(Zepto);