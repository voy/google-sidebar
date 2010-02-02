// ==UserScript==
// @name           Google Search Sidebar for FF3 - Adds results for various internet services
// @namespace
// @description    Adds a sidebar with search results from Dictionary.com, Wikipedia, Flickr, and Youtube. Please report any bugs.
// @include        http://www.google.tld/search?*
// @include        http://www.google.tld/#*
// @include        http://www.google.tld/webhp*
// ==/UserScript==

/* Copyright (c) 2010, Ataxo Interactive
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*  * Redistributions of source code must retain the above copyright notice,
*    this list of conditions and the following disclaimer.
*  * Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
*  * Neither the name of Ataxo Interactive nor the names of its contributors
*    may be used to endorse or promote products derived from this software
*    without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

/*
* Acknowledgment:
*
* I would like to thank Kyle Day, on whose code this sidebar is partly based.
* His original code can be found at http://userscripts.org/scripts/show/11888.
*
* - Vojtech Jasny <voy@voy.cz>
*/

// Initialize MooTools
var MooTools={version:"1.2.5dev",build:"168759f5904bfdaeafd6b1c0d1be16cd78b5d5c6"};var Native=function(k){k=k||{};var a=k.name;var i=k.legacy;var b=k.protect;var c=k.implement;var h=k.generics;var f=k.initialize;var g=k.afterImplement||function(){};var d=f||i;h=h!==false;d.constructor=Native;d.$family={name:"native"};if(i&&f){d.prototype=i.prototype}if(!d.prototype){d.prototype={}}d.prototype.constructor=d;if(a){var e=a.toLowerCase();d.prototype.$family={name:e};Native.typize(d,e)}var j=function(n,l,o,m){if(!b||m||!n.prototype[l]){n.prototype[l]=o}if(h){Native.genericize(n,l,b)}g.call(n,l,o);return n};d.alias=function(n,l,p){if(typeof n=="string"){var o=this.prototype[n];if((n=o)){return j(this,l,n,p)}}for(var m in n){this.alias(m,n[m],l)}return this};d.implement=function(m,l,o){if(typeof m=="string"){return j(this,m,l,o)}for(var n in m){j(this,n,m[n],l)}return this};if(c){d.implement(c)}return d};Native.genericize=function(b,c,a){if((!a||!b[c])&&typeof b.prototype[c]=="function"){b[c]=function(){var d=Array.prototype.slice.call(arguments);return b.prototype[c].apply(d.shift(),d)}}};Native.implement=function(d,c){for(var b=0,a=d.length;b<a;b++){d[b].implement(c)}};Native.typize=function(a,b){if(!a.type){a.type=function(c){return($type(c)===b)}}};(function(){var a={Array:Array,Date:Date,Function:Function,Number:Number,RegExp:RegExp,String:String};for(var h in a){new Native({name:h,initialize:a[h],protect:true})}var d={"boolean":Boolean,"native":Native,object:Object};for(var c in d){Native.typize(d[c],c)}var f={Array:["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf"],String:["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf"]};for(var e in f){for(var b=f[e].length;b--;){Native.genericize(a[e],f[e][b],true)}}})();var Hash=new Native({name:"Hash",initialize:function(a){if($type(a)=="hash"){a=$unlink(a.getClean())}for(var b in a){this[b]=a[b]}return this}});Hash.implement({forEach:function(b,c){for(var a in this){if(this.hasOwnProperty(a)){b.call(c,this[a],a,this)}}},getClean:function(){var b={};for(var a in this){if(this.hasOwnProperty(a)){b[a]=this[a]}}return b},getLength:function(){var b=0;for(var a in this){if(this.hasOwnProperty(a)){b++}}return b}});Hash.alias("forEach","each");Array.implement({forEach:function(c,d){for(var b=0,a=this.length;b<a;b++){c.call(d,this[b],b,this)}}});Array.alias("forEach","each");function $A(b){if(b.item){var a=b.length,c=new Array(a);while(a--){c[a]=b[a]}return c}return Array.prototype.slice.call(b)}function $arguments(a){return function(){return arguments[a]}}function $chk(a){return !!(a||a===0)}function $clear(a){clearTimeout(a);clearInterval(a);return null}function $defined(a){return(a!=undefined)}function $each(c,b,d){var a=$type(c);((a=="arguments"||a=="collection"||a=="array")?Array:Hash).each(c,b,d)}function $empty(){}function $extend(c,a){for(var b in (a||{})){c[b]=a[b]}return c}function $H(a){return new Hash(a)}function $lambda(a){return($type(a)=="function")?a:function(){return a}}function $merge(){var a=Array.slice(arguments);a.unshift({});return $mixin.apply(null,a)}function $mixin(e){for(var d=1,a=arguments.length;d<a;d++){var b=arguments[d];if($type(b)!="object"){continue}for(var c in b){var g=b[c],f=e[c];e[c]=(f&&$type(g)=="object"&&$type(f)=="object")?$mixin(f,g):$unlink(g)}}return e}function $pick(){for(var b=0,a=arguments.length;b<a;b++){if(arguments[b]!=undefined){return arguments[b]}}return null}function $random(b,a){return Math.floor(Math.random()*(a-b+1)+b)}function $splat(b){var a=$type(b);return(a)?((a!="array"&&a!="arguments")?[b]:b):[]}var $time=Date.now||function(){return +new Date};function $try(){for(var b=0,a=arguments.length;b<a;b++){try{return arguments[b]()}catch(c){}}return null}function $type(a){if(a==undefined){return false}if(a.$family){return(a.$family.name=="number"&&!isFinite(a))?false:a.$family.name}if(a.nodeName){switch(a.nodeType){case 1:return"element";case 3:return(/\S/).test(a.nodeValue)?"textnode":"whitespace"}}else{if(typeof a.length=="number"){if(a.callee){return"arguments"}else{if(a.item){return"collection"}}}}return typeof a}function $unlink(c){var b;switch($type(c)){case"object":b={};for(var e in c){b[e]=$unlink(c[e])}break;case"hash":b=new Hash(c);break;case"array":b=[];for(var d=0,a=c.length;d<a;d++){b[d]=$unlink(c[d])}break;default:return c}return b}var Browser=$merge({Engine:{name:"unknown",version:0},Platform:{name:(window.orientation!=undefined)?"ipod":(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase()},Features:{xpath:!!(document.evaluate),air:!!(window.runtime),query:!!(document.querySelector)},Plugins:{},Engines:{presto:function(){return(!window.opera)?false:((arguments.callee.caller)?960:((document.getElementsByClassName)?950:925))},trident:function(){return(!window.ActiveXObject)?false:((window.XMLHttpRequest)?((document.querySelectorAll)?6:5):4)},webkit:function(){return(navigator.taintEnabled)?false:((Browser.Features.xpath)?((Browser.Features.query)?525:420):419)},gecko:function(){return(!document.getBoxObjectFor&&window.mozInnerScreenX==null)?false:((document.getElementsByClassName)?19:18)}}},Browser||{});Browser.Platform[Browser.Platform.name]=true;Browser.detect=function(){for(var b in this.Engines){var a=this.Engines[b]();if(a){this.Engine={name:b,version:a};this.Engine[b]=this.Engine[b+a]=true;break}}return{name:b,version:a}};Browser.detect();Browser.Request=function(){return $try(function(){return new XMLHttpRequest()},function(){return new ActiveXObject("MSXML2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")})};Browser.Features.xhr=!!(Browser.Request());Browser.Plugins.Flash=(function(){var a=($try(function(){return navigator.plugins["Shockwave Flash"].description},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")})||"0 r0").match(/\d+/g);return{version:parseInt(a[0]||0+"."+a[1],10)||0,build:parseInt(a[2],10)||0}})();function $exec(b){if(!b){return b}if(window.execScript){window.execScript(b)}else{var a=document.createElement("script");a.setAttribute("type","text/javascript");a[(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerText":"text"]=b;document.head.appendChild(a);document.head.removeChild(a)}return b}Native.UID=1;var $uid=(Browser.Engine.trident)?function(a){return(a.uid||(a.uid=[Native.UID++]))[0]}:function(a){return a.uid||(a.uid=Native.UID++)};var Window=new Native({name:"Window",legacy:(Browser.Engine.trident)?null:window.Window,initialize:function(a){$uid(a);if(!a.Element){a.Element=$empty;if(Browser.Engine.webkit){a.document.createElement("iframe")}a.Element.prototype=(Browser.Engine.webkit)?window["[[DOMElement.prototype]]"]:{}}a.document.window=a;return $extend(a,Window.Prototype)},afterImplement:function(b,a){window[b]=Window.Prototype[b]=a}});Window.Prototype={$family:{name:"window"}};new Window(window);var Document=new Native({name:"Document",legacy:(Browser.Engine.trident)?null:window.Document,initialize:function(a){$uid(a);a.head=a.getElementsByTagName("head")[0];a.html=a.getElementsByTagName("html")[0];if(Browser.Engine.trident&&Browser.Engine.version<=4){$try(function(){a.execCommand("BackgroundImageCache",false,true)})}if(Browser.Engine.trident){a.window.attachEvent("onunload",function(){a.window.detachEvent("onunload",arguments.callee);a.head=a.html=a.window=null})}return $extend(a,Document.Prototype)},afterImplement:function(b,a){document[b]=Document.Prototype[b]=a}});Document.Prototype={$family:{name:"document"}};new Document(document);Array.implement({every:function(c,d){for(var b=0,a=this.length;b<a;b++){if(!c.call(d,this[b],b,this)){return false}}return true},filter:function(d,e){var c=[];for(var b=0,a=this.length;b<a;b++){if(d.call(e,this[b],b,this)){c.push(this[b])}}return c},clean:function(){return this.filter($defined)},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b}}return -1},map:function(d,e){var c=[];for(var b=0,a=this.length;b<a;b++){c[b]=d.call(e,this[b],b,this)}return c},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if(c.call(d,this[b],b,this)){return true}}return false},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a]}return d},link:function(c){var a={};for(var e=0,b=this.length;e<b;e++){for(var d in c){if(c[d](this[e])){a[d]=this[e];delete c[d];break}}}return a},contains:function(a,b){return this.indexOf(a,b)!=-1},extend:function(c){for(var b=0,a=c.length;b<a;b++){this.push(c[b])}return this},getLast:function(){return(this.length)?this[this.length-1]:null},getRandom:function(){return(this.length)?this[$random(0,this.length-1)]:null},include:function(a){if(!this.contains(a)){this.push(a)}return this},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b])}return this},erase:function(b){for(var a=this.length;a--;a){if(this[a]===b){this.splice(a,1)}}return this},empty:function(){this.length=0;return this},flatten:function(){var d=[];for(var b=0,a=this.length;b<a;b++){var c=$type(this[b]);if(!c){continue}d=d.concat((c=="array"||c=="collection"||c=="arguments")?Array.flatten(this[b]):this[b])}return d},hexToRgb:function(b){if(this.length!=3){return null}var a=this.map(function(c){if(c.length==1){c+=c}return c.toInt(16)});return(b)?a:"rgb("+a+")"},rgbToHex:function(d){if(this.length<3){return null}if(this.length==4&&this[3]==0&&!d){return"transparent"}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c)}return(d)?b:"#"+b.join("")}});String.implement({test:function(a,b){return((typeof a=="string")?new RegExp(a,b):a).test(this)},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1},trim:function(){return this.replace(/^\s+|\s+$/g,"")},clean:function(){return this.replace(/\s+/g," ").trim()},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase()})},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase())})},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase()})},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},toInt:function(a){return parseInt(this,a||10)},toFloat:function(){return parseFloat(this)},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return(a)?a.slice(1).hexToRgb(b):null},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null},stripScripts:function(b){var a="";var c=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){a+=arguments[1]+"\n";return""});if(b===true){$exec(a)}else{if($type(b)=="function"){b(a,c)}}return c},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1)}return(a[c]!=undefined)?a[c]:""})}});Function.implement({extend:function(a){for(var b in a){this[b]=a[b]}return this},create:function(b){var a=this;b=b||{};return function(d){var c=b.arguments;c=(c!=undefined)?$splat(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c)}var e=function(){return a.apply(b.bind||null,c)};if(b.delay){return setTimeout(e,b.delay)}if(b.periodical){return setInterval(e,b.periodical)}if(b.attempt){return $try(e)}return e()}},run:function(a,b){return this.apply(b,$splat(a))},pass:function(a,b){return this.create({bind:b,arguments:a})},bind:function(b,a){return this.create({bind:b,arguments:a})},bindWithEvent:function(b,a){return this.create({bind:b,arguments:a,event:true})},attempt:function(a,b){return this.create({bind:b,arguments:a,attempt:true})()},delay:function(b,c,a){return this.create({bind:c,arguments:a,delay:b})()},periodical:function(c,b,a){return this.create({bind:b,arguments:a,periodical:c})()}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this))},round:function(a){a=Math.pow(10,a||0);return Math.round(this*a)/a},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this)}},toFloat:function(){return parseFloat(this)},toInt:function(a){return parseInt(this,a||10)}});Number.alias("times","each");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat($A(arguments)))}}});Number.implement(a)})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){for(var a in this){if(this.hasOwnProperty(a)&&this[a]===b){return a}}return null},hasValue:function(a){return(Hash.keyOf(this,a)!==null)},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c)},this);return this},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c)},this);return this},erase:function(a){if(this.hasOwnProperty(a)){delete this[a]}return this},get:function(a){return(this.hasOwnProperty(a))?this[a]:null},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b}return this},empty:function(){Hash.each(this,function(b,a){delete this[a]},this);return this},include:function(a,b){if(this[a]==undefined){this[a]=b}return this},map:function(b,c){var a=new Hash;Hash.each(this,function(e,d){a.set(d,b.call(c,e,d,this))},this);return a},filter:function(b,c){var a=new Hash;Hash.each(this,function(e,d){if(b.call(c,e,d,this)){a.set(d,e)}},this);return a},every:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&!b.call(c,this[a],a)){return false}}return true},some:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&b.call(c,this[a],a)){return true}}return false},getKeys:function(){var a=[];Hash.each(this,function(c,b){a.push(b)});return a},getValues:function(){var a=[];Hash.each(this,function(b){a.push(b)});return a},toQueryString:function(a){var b=[];Hash.each(this,function(f,e){if(a){e=a+"["+e+"]"}var d;switch($type(f)){case"object":d=Hash.toQueryString(f,e);break;case"array":var c={};f.each(function(h,g){c[g]=h});d=Hash.toQueryString(c,e);break;default:d=e+"="+encodeURIComponent(f)}if(f!=undefined){b.push(d)}});return b.join("&")}});Hash.alias({keyOf:"indexOf",hasValue:"contains"});var Element=new Native({name:"Element",legacy:window.Element,initialize:function(a,b){var c=Element.Constructors.get(a);if(c){return c(b)}if(typeof a=="string"){return document.newElement(a,b)}return document.id(a).set(b)},afterImplement:function(a,b){Element.Prototype[a]=b;if(Array[a]){return}Elements.implement(a,function(){var c=[],g=true;for(var e=0,d=this.length;e<d;e++){var f=this[e][a].apply(this[e],arguments);c.push(f);if(g){g=($type(f)=="element")}}return(g)?new Elements(c):c})}});Element.Prototype={$family:{name:"element"}};Element.Constructors=new Hash;var IFrame=new Native({name:"IFrame",generics:false,initialize:function(){var f=Array.link(arguments,{properties:Object.type,iframe:$defined});var d=f.properties||{};var c=document.id(f.iframe);var e=d.onload||$empty;delete d.onload;d.id=d.name=$pick(d.id,d.name,c?(c.id||c.name):"IFrame_"+$time());c=new Element(c||"iframe",d);var b=function(){var g=$try(function(){return c.contentWindow.location.host});if(!g||g==window.location.host){var h=new Window(c.contentWindow);new Document(c.contentWindow.document);if(!h.Element.prototype){h.Element.prototype={}}$extend(h.Element.prototype,Element.Prototype)}e.call(c.contentWindow,c.contentWindow.document)};var a=$try(function(){return c.contentWindow});((a&&a.document.body)||window.frames[d.id])?b():c.addListener("load",b);return c}});var Elements=new Native({initialize:function(f,b){b=$extend({ddup:true,cash:true},b);f=f||[];if(b.ddup||b.cash){var g={},e=[];for(var c=0,a=f.length;c<a;c++){var d=document.id(f[c],!b.cash);if(b.ddup){if(g[d.uid]){continue}g[d.uid]=true}if(d){e.push(d)}}f=e}return(b.cash)?$extend(f,this):f}});Elements.implement({filter:function(a,b){if(!a){return this}return new Elements(Array.filter(this,(typeof a=="string")?function(c){return c.match(a)}:a,b))}});Document.implement({newElement:function(a,b){if(Browser.Engine.trident&&b){["name","type","checked"].each(function(c){if(!b[c]){return}a+=" "+c+'="'+b[c]+'"';if(c!="checked"){delete b[c]}});a="<"+a+">"}return document.id(this.createElement(a)).set(b)},newTextNode:function(a){return this.createTextNode(a)},getDocument:function(){return this},getWindow:function(){return this.window},id:(function(){var a={string:function(d,c,b){d=b.getElementById(d);return(d)?a.element(d,c):null},element:function(b,e){$uid(b);if(!e&&!b.$family&&!(/^object|embed$/i).test(b.tagName)){var c=Element.Prototype;for(var d in c){b[d]=c[d]}}return b},object:function(c,d,b){if(c.toElement){return a.element(c.toElement(b),d)}return null}};a.textnode=a.whitespace=a.window=a.document=$arguments(0);return function(c,e,d){if(c&&c.$family&&c.uid){return c}var b=$type(c);return(a[b])?a[b](c,e,d||document):null}})()});if(window.$==null){Window.implement({$:function(a,b){return document.id(a,b,this.document)}})}Window.implement({$$:function(a){if(arguments.length==1&&typeof a=="string"){return this.document.getElements(a)}var f=[];var c=Array.flatten(arguments);for(var d=0,b=c.length;d<b;d++){var e=c[d];switch($type(e)){case"element":f.push(e);break;case"string":f.extend(this.document.getElements(e,true))}}return new Elements(f)},getDocument:function(){return this.document},getWindow:function(){return this}});Native.implement([Element,Document],{getElement:function(a,b){return document.id(this.getElements(a,true)[0]||null,b)},getElements:function(a,d){a=a.split(",");var c=[];var b=(a.length>1);a.each(function(e){var f=this.getElementsByTagName(e.trim());(b)?c.extend(f):c=f},this);return new Elements(c,{ddup:b,cash:!d})}});(function(){var h={},f={};var i={input:"checked",option:"selected",textarea:(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerHTML":"value"};var c=function(l){return(f[l]||(f[l]={}))};var g=function(n,l){if(!n){return}var m=n.uid;if(Browser.Engine.trident){if(n.clearAttributes){var q=l&&n.cloneNode(false);n.clearAttributes();if(q){n.mergeAttributes(q)}}else{if(n.removeEvents){n.removeEvents()}}if((/object/i).test(n.tagName)){for(var o in n){if(typeof n[o]=="function"){n[o]=$empty}}Element.dispose(n)}}if(!m){return}h[m]=f[m]=null};var d=function(){Hash.each(h,g);if(Browser.Engine.trident){$A(document.getElementsByTagName("object")).each(g)}if(window.CollectGarbage){CollectGarbage()}h=f=null};var j=function(n,l,s,m,p,r){var o=n[s||l];var q=[];while(o){if(o.nodeType==1&&(!m||Element.match(o,m))){if(!p){return document.id(o,r)}q.push(o)}o=o[l]}return(p)?new Elements(q,{ddup:false,cash:!r}):null};var e={html:"innerHTML","class":"className","for":"htmlFor",defaultValue:"defaultValue",text:(Browser.Engine.trident||(Browser.Engine.webkit&&Browser.Engine.version<420))?"innerText":"textContent"};var b=["compact","nowrap","ismap","declare","noshade","checked","disabled","readonly","multiple","selected","noresize","defer"];var k=["value","type","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];b=b.associate(b);Hash.extend(e,b);Hash.extend(e,k.associate(k.map(String.toLowerCase)));var a={before:function(m,l){if(l.parentNode){l.parentNode.insertBefore(m,l)}},after:function(m,l){if(!l.parentNode){return}var n=l.nextSibling;(n)?l.parentNode.insertBefore(m,n):l.parentNode.appendChild(m)},bottom:function(m,l){l.appendChild(m)},top:function(m,l){var n=l.firstChild;(n)?l.insertBefore(m,n):l.appendChild(m)}};a.inside=a.bottom;Hash.each(a,function(l,m){m=m.capitalize();Element.implement("inject"+m,function(n){l(this,document.id(n,true));return this});Element.implement("grab"+m,function(n){l(document.id(n,true),this);return this})});Element.implement({set:function(o,m){switch($type(o)){case"object":for(var n in o){this.set(n,o[n])}break;case"string":var l=Element.Properties.get(o);(l&&l.set)?l.set.apply(this,Array.slice(arguments,1)):this.setProperty(o,m)}return this},get:function(m){var l=Element.Properties.get(m);return(l&&l.get)?l.get.apply(this,Array.slice(arguments,1)):this.getProperty(m)},erase:function(m){var l=Element.Properties.get(m);(l&&l.erase)?l.erase.apply(this):this.removeProperty(m);return this},setProperty:function(m,n){var l=e[m];if(n==undefined){return this.removeProperty(m)}if(l&&b[m]){n=!!n}(l)?this[l]=n:this.setAttribute(m,""+n);return this},setProperties:function(l){for(var m in l){this.setProperty(m,l[m])}return this},getProperty:function(m){var l=e[m];var n=(l)?this[l]:this.getAttribute(m,2);return(b[m])?!!n:(l)?n:n||null},getProperties:function(){var l=$A(arguments);return l.map(this.getProperty,this).associate(l)},removeProperty:function(m){var l=e[m];(l)?this[l]=(l&&b[m])?false:"":this.removeAttribute(m);return this},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this},hasClass:function(l){return this.className.contains(l," ")},addClass:function(l){if(!this.hasClass(l)){this.className=(this.className+" "+l).clean()}return this},removeClass:function(l){this.className=this.className.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)"),"$1");return this},toggleClass:function(l){return this.hasClass(l)?this.removeClass(l):this.addClass(l)},adopt:function(){Array.flatten(arguments).each(function(l){l=document.id(l,true);if(l){this.appendChild(l)}},this);return this},appendText:function(m,l){return this.grab(this.getDocument().newTextNode(m),l)},grab:function(m,l){a[l||"bottom"](document.id(m,true),this);return this},inject:function(m,l){a[l||"bottom"](this,document.id(m,true));return this},replaces:function(l){l=document.id(l,true);l.parentNode.replaceChild(this,l);return this},wraps:function(m,l){m=document.id(m,true);return this.replaces(m).grab(m,l)},getPrevious:function(l,m){return j(this,"previousSibling",null,l,false,m)},getAllPrevious:function(l,m){return j(this,"previousSibling",null,l,true,m)},getNext:function(l,m){return j(this,"nextSibling",null,l,false,m)},getAllNext:function(l,m){return j(this,"nextSibling",null,l,true,m)},getFirst:function(l,m){return j(this,"nextSibling","firstChild",l,false,m)},getLast:function(l,m){return j(this,"previousSibling","lastChild",l,false,m)},getParent:function(l,m){return j(this,"parentNode",null,l,false,m)},getParents:function(l,m){return j(this,"parentNode",null,l,true,m)},getSiblings:function(l,m){return this.getParent().getChildren(l,m).erase(this)},getChildren:function(l,m){return j(this,"nextSibling","firstChild",l,true,m)},getWindow:function(){return this.ownerDocument.window},getDocument:function(){return this.ownerDocument},getElementById:function(o,n){var m=this.ownerDocument.getElementById(o);if(!m){return null}for(var l=m.parentNode;l!=this;l=l.parentNode){if(!l){return null}}return document.id(m,n)},getSelected:function(){return new Elements($A(this.options).filter(function(l){return l.selected}))},getComputedStyle:function(m){if(this.currentStyle){return this.currentStyle[m.camelCase()]}var l=this.getDocument().defaultView.getComputedStyle(this,null);return(l)?l.getPropertyValue([m.hyphenate()]):null},toQueryString:function(){var l=[];this.getElements("input, select, textarea",true).each(function(m){if(!m.name||m.disabled||m.type=="submit"||m.type=="reset"||m.type=="file"){return}var n=(m.tagName.toLowerCase()=="select")?Element.getSelected(m).map(function(o){return o.value}):((m.type=="radio"||m.type=="checkbox")&&!m.checked)?null:m.value;$splat(n).each(function(o){if(typeof o!="undefined"){l.push(m.name+"="+encodeURIComponent(o))}})});return l.join("&")},clone:function(o,l){o=o!==false;var r=this.cloneNode(o);var n=function(v,u){if(!l){v.removeAttribute("id")}if(Browser.Engine.trident){v.clearAttributes();v.mergeAttributes(u);v.removeAttribute("uid");if(v.options){var w=v.options,s=u.options;for(var t=w.length;t--;){w[t].selected=s[t].selected}}}var x=i[u.tagName.toLowerCase()];if(x&&u[x]){v[x]=u[x]}};if(o){var p=r.getElementsByTagName("*"),q=this.getElementsByTagName("*");for(var m=p.length;m--;){n(p[m],q[m])}}n(r,this);return document.id(r)},destroy:function(){Element.empty(this);Element.dispose(this);g(this,true);return null},empty:function(){$A(this.childNodes).each(function(l){Element.destroy(l)});return this},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this},hasChild:function(l){l=document.id(l,true);if(!l){return false}if(Browser.Engine.webkit&&Browser.Engine.version<420){return $A(this.getElementsByTagName(l.tagName)).contains(l)}return(this.contains)?(this!=l&&this.contains(l)):!!(this.compareDocumentPosition(l)&16)},match:function(l){return(!l||(l==this)||(Element.get(this,"tag")==l))}});Native.implement([Element,Window,Document],{addListener:function(o,n){if(o=="unload"){var l=n,m=this;n=function(){m.removeListener("unload",n);l()}}else{h[this.uid]=this}if(this.addEventListener){this.addEventListener(o,n,false)}else{this.attachEvent("on"+o,n)}return this},removeListener:function(m,l){if(this.removeEventListener){this.removeEventListener(m,l,false)}else{this.detachEvent("on"+m,l)}return this},retrieve:function(m,l){var o=c(this.uid),n=o[m];if(l!=undefined&&n==undefined){n=o[m]=l}return $pick(n)},store:function(m,l){var n=c(this.uid);n[m]=l;return this},eliminate:function(l){var m=c(this.uid);delete m[l];return this}});window.addListener("unload",d)})();Element.Properties=new Hash;Element.Properties.style={set:function(a){this.style.cssText=a},get:function(){return this.style.cssText},erase:function(){this.style.cssText=""}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase()}};Element.Properties.html=(function(){var c=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};a.thead=a.tfoot=a.tbody;var b={set:function(){var e=Array.flatten(arguments).join("");var f=Browser.Engine.trident&&a[this.get("tag")];if(f){var g=c;g.innerHTML=f[1]+e+f[2];for(var d=f[0];d--;){g=g.firstChild}this.empty().adopt(g.childNodes)}else{this.innerHTML=e}}};b.erase=b.set;return b})();if(Browser.Engine.webkit&&Browser.Engine.version<420){Element.Properties.text={get:function(){if(this.innerText){return this.innerText}var a=this.ownerDocument.newElement("div",{html:this.innerHTML}).inject(this.ownerDocument.body);var b=a.innerText;a.destroy();return b}}}Element.Properties.styles={set:function(a){this.setStyles(a)}};Element.Properties.opacity={set:function(a,b){if(!b){if(a==0){if(this.style.visibility!="hidden"){this.style.visibility="hidden"}}else{if(this.style.visibility!="visible"){this.style.visibility="visible"}}}if(!this.currentStyle||!this.currentStyle.hasLayout){this.style.zoom=1}if(Browser.Engine.trident){this.style.filter=(a==1)?"":"alpha(opacity="+a*100+")"}this.style.opacity=a;this.store("opacity",a)},get:function(){return this.retrieve("opacity",1)}};Element.implement({setOpacity:function(a){return this.set("opacity",a,true)},getOpacity:function(){return this.get("opacity")},setStyle:function(b,a){switch(b){case"opacity":return this.set("opacity",parseFloat(a));case"float":b=(Browser.Engine.trident)?"styleFloat":"cssFloat"}b=b.camelCase();if($type(a)!="string"){var c=(Element.Styles.get(b)||"@").split(" ");a=$splat(a).map(function(e,d){if(!c[d]){return""}return($type(e)=="number")?c[d].replace("@",Math.round(e)):e}).join(" ")}else{if(a==String(Number(a))){a=Math.round(a)}}this.style[b]=a;return this},getStyle:function(g){switch(g){case"opacity":return this.get("opacity");case"float":g=(Browser.Engine.trident)?"styleFloat":"cssFloat"}g=g.camelCase();var a=this.style[g];if(!$chk(a)){a=[];for(var f in Element.ShortStyles){if(g!=f){continue}for(var e in Element.ShortStyles[f]){a.push(this.getStyle(e))}return a.join(" ")}a=this.getComputedStyle(g)}if(a){a=String(a);var c=a.match(/rgba?\([\d\s,]+\)/);if(c){a=a.replace(c[0],c[0].rgbToHex())}}if(Browser.Engine.presto||(Browser.Engine.trident&&!$chk(parseInt(a,10)))){if(g.test(/^(height|width)$/)){var b=(g=="width")?["left","right"]:["top","bottom"],d=0;b.each(function(h){d+=this.getStyle("border-"+h+"-width").toInt()+this.getStyle("padding-"+h).toInt()},this);return this["offset"+g.capitalize()]-d+"px"}if((Browser.Engine.presto)&&String(a).test("px")){return a}if(g.test(/(border(.+)Width|margin|padding)/)){return"0px"}}return a},setStyles:function(b){for(var a in b){this.setStyle(a,b[a])}return this},getStyles:function(){var a={};Array.flatten(arguments).each(function(b){a[b]=this.getStyle(b)},this);return a}});Element.Styles=new Hash({left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"});Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(g){var f=Element.ShortStyles;var b=Element.Styles;["margin","padding"].each(function(h){var i=h+g;f[h][i]=b[i]="@px"});var e="border"+g;f.border[e]=b[e]="@px @ rgb(@, @, @)";var d=e+"Width",a=e+"Style",c=e+"Color";f[e]={};f.borderWidth[d]=f[e][d]=b[d]="@px";f.borderStyle[a]=f[e][a]=b[a]="@";f.borderColor[c]=f[e][c]=b[c]="rgb(@, @, @)"});(function(){Element.implement({scrollTo:function(h,i){if(b(this)){this.getWindow().scrollTo(h,i)}else{this.scrollLeft=h;this.scrollTop=i}return this},getSize:function(){if(b(this)){return this.getWindow().getSize()}return{x:this.offsetWidth,y:this.offsetHeight}},getScrollSize:function(){if(b(this)){return this.getWindow().getScrollSize()}return{x:this.scrollWidth,y:this.scrollHeight}},getScroll:function(){if(b(this)){return this.getWindow().getScroll()}return{x:this.scrollLeft,y:this.scrollTop}},getScrolls:function(){var i=this,h={x:0,y:0};while(i&&!b(i)){h.x+=i.scrollLeft;h.y+=i.scrollTop;i=i.parentNode}return h},getOffsetParent:function(){var h=this;if(b(h)){return null}if(!Browser.Engine.trident){return h.offsetParent}while((h=h.parentNode)&&!b(h)){if(d(h,"position")!="static"){return h}}return null},getOffsets:function(){if(this.getBoundingClientRect){var j=this.getBoundingClientRect(),m=document.id(this.getDocument().documentElement),p=m.getScroll(),k=this.getScrolls(),i=this.getScroll(),h=(d(this,"position")=="fixed");return{x:j.left.toInt()+k.x-i.x+((h)?0:p.x)-m.clientLeft,y:j.top.toInt()+k.y-i.y+((h)?0:p.y)-m.clientTop}}var l=this,n={x:0,y:0};if(b(this)){return n}while(l&&!b(l)){n.x+=l.offsetLeft;n.y+=l.offsetTop;if(Browser.Engine.gecko){if(!f(l)){n.x+=c(l);n.y+=g(l)}var o=l.parentNode;if(o&&d(o,"overflow")!="visible"){n.x+=c(o);n.y+=g(o)}}else{if(l!=this&&Browser.Engine.webkit){n.x+=c(l);n.y+=g(l)}}l=l.offsetParent}if(Browser.Engine.gecko&&!f(this)){n.x-=c(this);n.y-=g(this)}return n},getPosition:function(k){if(b(this)){return{x:0,y:0}}var l=this.getOffsets(),i=this.getScrolls();var h={x:l.x-i.x,y:l.y-i.y};var j=(k&&(k=document.id(k)))?k.getPosition():{x:0,y:0};return{x:h.x-j.x,y:h.y-j.y}},getCoordinates:function(j){if(b(this)){return this.getWindow().getCoordinates()}var h=this.getPosition(j),i=this.getSize();var k={left:h.x,top:h.y,width:i.x,height:i.y};k.right=k.left+k.width;k.bottom=k.top+k.height;return k},computePosition:function(h){return{left:h.x-e(this,"margin-left"),top:h.y-e(this,"margin-top")}},setPosition:function(h){return this.setStyles(this.computePosition(h))}});Native.implement([Document,Window],{getSize:function(){if(Browser.Engine.presto||Browser.Engine.webkit){var i=this.getWindow();return{x:i.innerWidth,y:i.innerHeight}}var h=a(this);return{x:h.clientWidth,y:h.clientHeight}},getScroll:function(){var i=this.getWindow(),h=a(this);return{x:i.pageXOffset||h.scrollLeft,y:i.pageYOffset||h.scrollTop}},getScrollSize:function(){var i=a(this),h=this.getSize();return{x:Math.max(i.scrollWidth,h.x),y:Math.max(i.scrollHeight,h.y)}},getPosition:function(){return{x:0,y:0}},getCoordinates:function(){var h=this.getSize();return{top:0,left:0,bottom:h.y,right:h.x,height:h.y,width:h.x}}});var d=Element.getComputedStyle;function e(h,i){return d(h,i).toInt()||0}function f(h){return d(h,"-moz-box-sizing")=="border-box"}function g(h){return e(h,"border-top-width")}function c(h){return e(h,"border-left-width")}function b(h){return(/^(?:body|html)$/i).test(h.tagName)}function a(h){var i=h.getDocument();return(!i.compatMode||i.compatMode=="CSS1Compat")?i.html:i.body}})();Element.alias("setPosition","position");Native.implement([Window,Document,Element],{getHeight:function(){return this.getSize().y},getWidth:function(){return this.getSize().x},getScrollTop:function(){return this.getScroll().y},getScrollLeft:function(){return this.getScroll().x},getScrollHeight:function(){return this.getScrollSize().y},getScrollWidth:function(){return this.getScrollSize().x},getTop:function(){return this.getPosition().y},getLeft:function(){return this.getPosition().x}});Native.implement([Document,Element],{getElements:function(h,g){h=h.split(",");var c,e={};for(var d=0,b=h.length;d<b;d++){var a=h[d],f=Selectors.Utils.search(this,a,e);if(d!=0&&f.item){f=$A(f)}c=(d==0)?f:(c.item)?$A(c).concat(f):c.concat(f)}return new Elements(c,{ddup:(h.length>1),cash:!g})}});Element.implement({match:function(b){if(!b||(b==this)){return true}var d=Selectors.Utils.parseTagAndID(b);var a=d[0],e=d[1];if(!Selectors.Filters.byID(this,e)||!Selectors.Filters.byTag(this,a)){return false}var c=Selectors.Utils.parseSelector(b);return(c)?Selectors.Utils.filter(this,c,{}):true}});var Selectors={Cache:{nth:{},parsed:{}}};Selectors.RegExps={id:(/#([\w-]+)/),tag:(/^(\w+|\*)/),quick:(/^(\w+|\*)$/),splitter:(/\s*([+>~\s])\s*([a-zA-Z#.*:\[])/g),combined:(/\.([\w-]+)|\[(\w+)(?:([!*^$~|]?=)(["']?)([^\4]*?)\4)?\]|:([\w-]+)(?:\(["']?(.*?)?["']?\)|$)/g)};Selectors.Utils={chk:function(b,c){if(!c){return true}var a=$uid(b);if(!c[a]){return c[a]=true}return false},parseNthArgument:function(h){if(Selectors.Cache.nth[h]){return Selectors.Cache.nth[h]}var e=h.match(/^([+-]?\d*)?([a-z]+)?([+-]?\d*)?$/);if(!e){return false}var g=parseInt(e[1],10);var d=(g||g===0)?g:1;var f=e[2]||false;var c=parseInt(e[3],10)||0;if(d!=0){c--;while(c<1){c+=d}while(c>=d){c-=d}}else{d=c;f="index"}switch(f){case"n":e={a:d,b:c,special:"n"};break;case"odd":e={a:2,b:0,special:"n"};break;case"even":e={a:2,b:1,special:"n"};break;case"first":e={a:0,special:"index"};break;case"last":e={special:"last-child"};break;case"only":e={special:"only-child"};break;default:e={a:(d-1),special:"index"}}return Selectors.Cache.nth[h]=e},parseSelector:function(e){if(Selectors.Cache.parsed[e]){return Selectors.Cache.parsed[e]}var d,h={classes:[],pseudos:[],attributes:[]};while((d=Selectors.RegExps.combined.exec(e))){var i=d[1],g=d[2],f=d[3],b=d[5],c=d[6],j=d[7];if(i){h.classes.push(i)}else{if(c){var a=Selectors.Pseudo.get(c);if(a){h.pseudos.push({parser:a,argument:j})}else{h.attributes.push({name:c,operator:"=",value:j})}}else{if(g){h.attributes.push({name:g,operator:f,value:b})}}}}if(!h.classes.length){delete h.classes}if(!h.attributes.length){delete h.attributes}if(!h.pseudos.length){delete h.pseudos}if(!h.classes&&!h.attributes&&!h.pseudos){h=null}return Selectors.Cache.parsed[e]=h},parseTagAndID:function(b){var a=b.match(Selectors.RegExps.tag);var c=b.match(Selectors.RegExps.id);return[(a)?a[1]:"*",(c)?c[1]:false]},filter:function(f,c,e){var d;if(c.classes){for(d=c.classes.length;d--;d){var g=c.classes[d];if(!Selectors.Filters.byClass(f,g)){return false}}}if(c.attributes){for(d=c.attributes.length;d--;d){var b=c.attributes[d];if(!Selectors.Filters.byAttribute(f,b.name,b.operator,b.value)){return false}}}if(c.pseudos){for(d=c.pseudos.length;d--;d){var a=c.pseudos[d];if(!Selectors.Filters.byPseudo(f,a.parser,a.argument,e)){return false}}}return true},getByTagAndID:function(b,a,d){if(d){var c=(b.getElementById)?b.getElementById(d,true):Element.getElementById(b,d,true);return(c&&Selectors.Filters.byTag(c,a))?[c]:[]}else{return b.getElementsByTagName(a)}},search:function(o,h,t){var b=[];var c=h.trim().replace(Selectors.RegExps.splitter,function(k,j,i){b.push(j);return":)"+i}).split(":)");var p,e,A;for(var z=0,v=c.length;z<v;z++){var y=c[z];if(z==0&&Selectors.RegExps.quick.test(y)){p=o.getElementsByTagName(y);continue}var a=b[z-1];var q=Selectors.Utils.parseTagAndID(y);var B=q[0],r=q[1];if(z==0){p=Selectors.Utils.getByTagAndID(o,B,r)}else{var d={},g=[];for(var x=0,w=p.length;x<w;x++){g=Selectors.Getters[a](g,p[x],B,r,d)}p=g}var f=Selectors.Utils.parseSelector(y);if(f){e=[];for(var u=0,s=p.length;u<s;u++){A=p[u];if(Selectors.Utils.filter(A,f,t)){e.push(A)}}p=e}}return p}};Selectors.Getters={" ":function(h,g,j,a,e){var d=Selectors.Utils.getByTagAndID(g,j,a);for(var c=0,b=d.length;c<b;c++){var f=d[c];if(Selectors.Utils.chk(f,e)){h.push(f)}}return h},">":function(h,g,j,a,f){var c=Selectors.Utils.getByTagAndID(g,j,a);for(var e=0,d=c.length;e<d;e++){var b=c[e];if(b.parentNode==g&&Selectors.Utils.chk(b,f)){h.push(b)}}return h},"+":function(c,b,a,e,d){while((b=b.nextSibling)){if(b.nodeType==1){if(Selectors.Utils.chk(b,d)&&Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,e)){c.push(b)}break}}return c},"~":function(c,b,a,e,d){while((b=b.nextSibling)){if(b.nodeType==1){if(!Selectors.Utils.chk(b,d)){break}if(Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,e)){c.push(b)}}}return c}};Selectors.Filters={byTag:function(b,a){return(a=="*"||(b.tagName&&b.tagName.toLowerCase()==a))},byID:function(a,b){return(!b||(a.id&&a.id==b))},byClass:function(b,a){return(b.className&&b.className.contains&&b.className.contains(a," "))},byPseudo:function(a,d,c,b){return d.call(a,c,b)},byAttribute:function(c,d,b,e){var a=Element.prototype.getProperty.call(c,d);if(!a){return(b=="!=")}if(!b||e==undefined){return true}switch(b){case"=":return(a==e);case"*=":return(a.contains(e));case"^=":return(a.substr(0,e.length)==e);case"$=":return(a.substr(a.length-e.length)==e);case"!=":return(a!=e);case"~=":return a.contains(e," ");case"|=":return a.contains(e,"-")}return false}};Selectors.Pseudo=new Hash({checked:function(){return this.checked},empty:function(){return !(this.innerText||this.textContent||"").length},not:function(a){return !Element.match(this,a)},contains:function(a){return(this.innerText||this.textContent||"").contains(a)},"first-child":function(){return Selectors.Pseudo.index.call(this,0)},"last-child":function(){var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false}}return true},"only-child":function(){var b=this;while((b=b.previousSibling)){if(b.nodeType==1){return false}}var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false}}return true},"nth-child":function(g,e){g=(g==undefined)?"n":g;var c=Selectors.Utils.parseNthArgument(g);if(c.special!="n"){return Selectors.Pseudo[c.special].call(this,c.a,e)}var f=0;e.positions=e.positions||{};var d=$uid(this);if(!e.positions[d]){var b=this;while((b=b.previousSibling)){if(b.nodeType!=1){continue}f++;var a=e.positions[$uid(b)];if(a!=undefined){f=a+f;break}}e.positions[d]=f}return(e.positions[d]%c.a==c.b)},index:function(a){var b=this,c=0;while((b=b.previousSibling)){if(b.nodeType==1&&++c>a){return false}}return(c==a)},even:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n+1",a)},odd:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n",a)},selected:function(){return this.selected},enabled:function(){return(this.disabled===false)}});var Event=new Native({name:"Event",initialize:function(a,f){f=f||window;var k=f.document;a=a||f.event;if(a.$extended){return a}this.$extended=true;var j=a.type;var g=a.target||a.srcElement;while(g&&g.nodeType==3){g=g.parentNode}if(j.test(/key/)){var b=a.which||a.keyCode;var m=Event.Keys.keyOf(b);if(j=="keydown"){var d=b-111;if(d>0&&d<13){m="f"+d}}m=m||String.fromCharCode(b).toLowerCase()}else{if(j.match(/(click|mouse|menu)/i)){k=(!k.compatMode||k.compatMode=="CSS1Compat")?k.html:k.body;var i={x:a.pageX||a.clientX+k.scrollLeft,y:a.pageY||a.clientY+k.scrollTop};var c={x:(a.pageX)?a.pageX-f.pageXOffset:a.clientX,y:(a.pageY)?a.pageY-f.pageYOffset:a.clientY};if(j.match(/DOMMouseScroll|mousewheel/)){var h=(a.wheelDelta)?a.wheelDelta/120:-(a.detail||0)/3}var e=(a.which==3)||(a.button==2);var l=null;if(j.match(/over|out/)){switch(j){case"mouseover":l=a.relatedTarget||a.fromElement;break;case"mouseout":l=a.relatedTarget||a.toElement}if(!(function(){while(l&&l.nodeType==3){l=l.parentNode}return true}).create({attempt:Browser.Engine.gecko})()){l=false}}}}return $extend(this,{event:a,type:j,page:i,client:c,rightClick:e,wheel:h,relatedTarget:l,target:g,code:b,key:m,shift:a.shiftKey,control:a.ctrlKey,alt:a.altKey,meta:a.metaKey})}});Event.Keys=new Hash({enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46});Event.implement({stop:function(){return this.stopPropagation().preventDefault()},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation()}else{this.event.cancelBubble=true}return this},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault()}else{this.event.returnValue=false}return this}});Element.Properties.events={set:function(a){this.addEvents(a)}};Native.implement([Element,Window,Document],{addEvent:function(e,g){var h=this.retrieve("events",{});h[e]=h[e]||{keys:[],values:[]};if(h[e].keys.contains(g)){return this}h[e].keys.push(g);var f=e,a=Element.Events.get(e),c=g,i=this;if(a){if(a.onAdd){a.onAdd.call(this,g)}if(a.condition){c=function(j){if(a.condition.call(this,j)){return g.call(this,j)}return true}}f=a.base||f}var d=function(){return g.call(i)};var b=Element.NativeEvents[f];if(b){if(b==2){d=function(j){j=new Event(j,i.getWindow());if(c.call(i,j)===false){j.stop()}}}this.addListener(f,d)}h[e].values.push(d);return this},removeEvent:function(c,b){var a=this.retrieve("events");if(!a||!a[c]){return this}var f=a[c].keys.indexOf(b);if(f==-1){return this}a[c].keys.splice(f,1);var e=a[c].values.splice(f,1)[0];var d=Element.Events.get(c);if(d){if(d.onRemove){d.onRemove.call(this,b)}c=d.base||c}return(Element.NativeEvents[c])?this.removeListener(c,e):this},addEvents:function(a){for(var b in a){this.addEvent(b,a[b])}return this},removeEvents:function(a){var c;if($type(a)=="object"){for(c in a){this.removeEvent(c,a[c])}return this}var b=this.retrieve("events");if(!b){return this}if(!a){for(c in b){this.removeEvents(c)}this.eliminate("events")}else{if(b[a]){while(b[a].keys[0]){this.removeEvent(a,b[a].keys[0])}b[a]=null}}return this},fireEvent:function(d,b,a){var c=this.retrieve("events");if(!c||!c[d]){return this}c[d].keys.each(function(e){e.create({bind:this,delay:a,"arguments":b})()},this);return this},cloneEvents:function(d,a){d=document.id(d);var c=d.retrieve("events");if(!c){return this}if(!a){for(var b in c){this.cloneEvents(d,b)}}else{if(c[a]){c[a].keys.each(function(e){this.addEvent(a,e)},this)}}return this}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:1,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};(function(){var a=function(b){var c=b.relatedTarget;if(c==undefined){return true}if(c===false){return false}return($type(this)!="document"&&c!=this&&c.prefix!="xul"&&!this.hasChild(c))};Element.Events=new Hash({mouseenter:{base:"mouseover",condition:a},mouseleave:{base:"mouseout",condition:a},mousewheel:{base:(Browser.Engine.gecko)?"DOMMouseScroll":"mousewheel"}})})();function Class(b){if(b instanceof Function){b={initialize:b}}var a=function(){Object.reset(this);if(a._prototyping){return this}this._current=$empty;var c=(this.initialize)?this.initialize.apply(this,arguments):this;delete this._current;delete this.caller;return c}.extend(this);a.implement(b);a.constructor=Class;a.prototype.constructor=a;return a}Function.prototype.protect=function(){this._protected=true;return this};Object.reset=function(a,c){if(c==null){for(var e in a){Object.reset(a,e)}return a}delete a[c];switch($type(a[c])){case"object":var d=function(){};d.prototype=a[c];var b=new d;a[c]=Object.reset(b);break;case"array":a[c]=$unlink(a[c]);break}return a};new Native({name:"Class",initialize:Class}).extend({instantiate:function(b){b._prototyping=true;var a=new b;delete b._prototyping;return a},wrap:function(a,b,c){if(c._origin){c=c._origin}return function(){if(c._protected&&this._current==null){throw new Error('The method "'+b+'" cannot be called.')}var e=this.caller,f=this._current;this.caller=f;this._current=arguments.callee;var d=c.apply(this,arguments);this._current=f;this.caller=e;return d}.extend({_owner:a,_origin:c,_name:b})}});Class.implement({implement:function(a,d){if($type(a)=="object"){for(var e in a){this.implement(e,a[e])}return this}var f=Class.Mutators[a];if(f){d=f.call(this,d);if(d==null){return this}}var c=this.prototype;switch($type(d)){case"function":if(d._hidden){return this}c[a]=Class.wrap(this,a,d);break;case"object":var b=c[a];if($type(b)=="object"){$mixin(b,d)}else{c[a]=$unlink(d)}break;case"array":c[a]=$unlink(d);break;default:c[a]=d}return this}});Class.Mutators={Extends:function(a){this.parent=a;this.prototype=Class.instantiate(a);this.implement("parent",function(){var b=this.caller._name,c=this.caller._owner.parent.prototype[b];if(!c){throw new Error('The method "'+b+'" has no parent.')}return c.apply(this,arguments)}.protect())},Implements:function(a){$splat(a).each(function(b){if(b instanceof Function){b=Class.instantiate(b)}this.implement(b)},this)}};var Chain=new Class({$chain:[],chain:function(){this.$chain.extend(Array.flatten(arguments));return this},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false},clearChain:function(){this.$chain.empty();return this}});var Events=new Class({$events:{},addEvent:function(c,b,a){c=Events.removeOn(c);if(b!=$empty){this.$events[c]=this.$events[c]||[];this.$events[c].include(b);if(a){b.internal=true}}return this},addEvents:function(a){for(var b in a){this.addEvent(b,a[b])}return this},fireEvent:function(c,b,a){c=Events.removeOn(c);if(!this.$events||!this.$events[c]){return this}this.$events[c].each(function(d){d.create({bind:this,delay:a,"arguments":b})()},this);return this},removeEvent:function(b,a){b=Events.removeOn(b);if(!this.$events[b]){return this}if(!a.internal){this.$events[b].erase(a)}return this},removeEvents:function(c){var d;if($type(c)=="object"){for(d in c){this.removeEvent(d,c[d])}return this}if(c){c=Events.removeOn(c)}for(d in this.$events){if(c&&c!=d){continue}var b=this.$events[d];for(var a=b.length;a--;a){this.removeEvent(d,b[a])}}return this}});Events.removeOn=function(a){return a.replace(/^on([A-Z])/,function(b,c){return c.toLowerCase()})};var Options=new Class({setOptions:function(){this.options=$merge.run([this.options].extend(arguments));if(!this.addEvent){return this}for(var a in this.options){if($type(this.options[a])!="function"||!(/^on[A-Z]/).test(a)){continue}this.addEvent(a,this.options[a]);delete this.options[a]}return this}});var Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,noCache:false},initialize:function(a){this.xhr=new Browser.Request();this.setOptions(a);this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.headers=new Hash(this.options.headers)},onStateChange:function(){if(this.xhr.readyState!=4||!this.running){return}this.running=false;this.status=0;$try(function(){this.status=this.xhr.status}.bind(this));this.xhr.onreadystatechange=$empty;if(this.options.isSuccess.call(this,this.status)){this.response={text:this.xhr.responseText,xml:this.xhr.responseXML};this.success(this.response.text,this.response.xml)}else{this.response={text:null,xml:null};this.failure()}},isSuccess:function(){return((this.status>=200)&&(this.status<300))},processScripts:function(a){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return $exec(a)}return a.stripScripts(this.options.evalScripts)},success:function(b,a){this.onSuccess(this.processScripts(b),a)},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain()},failure:function(){this.onFailure()},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr)},setHeader:function(a,b){this.headers.set(a,b);return this},getHeader:function(a){return $try(function(){return this.xhr.getResponseHeader(a)}.bind(this))},check:function(){if(!this.running){return true}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false}return false},send:function(k){if(!this.check(k)){return this}this.running=true;var i=$type(k);if(i=="string"||i=="element"){k={data:k}}var d=this.options;k=$extend({data:d.data,url:d.url,method:d.method},k);var g=k.data,b=String(k.url),a=k.method.toLowerCase();switch($type(g)){case"element":g=document.id(g).toQueryString();break;case"object":case"hash":g=Hash.toQueryString(g)}if(this.options.format){var j="format="+this.options.format;g=(g)?j+"&"+g:j}if(this.options.emulation&&!["get","post"].contains(a)){var h="_method="+a;g=(g)?h+"&"+g:h;a="post"}if(this.options.urlEncoded&&a=="post"){var c=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers.set("Content-type","application/x-www-form-urlencoded"+c)}if(this.options.noCache){var f="noCache="+new Date().getTime();g=(g)?f+"&"+g:f}var e=b.lastIndexOf("/");if(e>-1&&(e=b.indexOf("#"))>-1){b=b.substr(0,e)}if(g&&a=="get"){b=b+(b.contains("?")?"&":"?")+g;g=null}this.xhr.open(a.toUpperCase(),b,this.options.async);this.xhr.onreadystatechange=this.onStateChange.bind(this);this.headers.each(function(m,l){try{this.xhr.setRequestHeader(l,m)}catch(n){this.fireEvent("exception",[l,m])}},this);this.fireEvent("request");this.xhr.send(g);if(!this.options.async){this.onStateChange()}return this},cancel:function(){if(!this.running){return this}this.running=false;this.xhr.abort();this.xhr.onreadystatechange=$empty;this.xhr=new Browser.Request();this.fireEvent("cancel");return this}});(function(){var a={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(b){a[b]=function(){var c=Array.link(arguments,{url:String.type,data:$defined});return this.send($extend(c,{method:b}))}});Request.implement(a)})();Element.Properties.send={set:function(a){var b=this.retrieve("send");if(b){b.cancel()}return this.eliminate("send").store("send:options",$extend({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")},a))},get:function(a){if(a||!this.retrieve("send")){if(a||!this.retrieve("send:options")){this.set("send",a)}this.store("send",new Request(this.retrieve("send:options")))}return this.retrieve("send")}};Element.implement({send:function(a){var b=this.get("send");b.send({data:this,url:a||b.options.url});return this}});Request.HTML=new Class({Extends:Request,options:{update:false,append:false,evalScripts:true,filter:false},processHTML:function(c){var b=c.match(/<body[^>]*>([\s\S]*?)<\/body>/i);c=(b)?b[1]:c;var a=new Element("div");return $try(function(){var d="<root>"+c+"</root>",g;if(Browser.Engine.trident){g=new ActiveXObject("Microsoft.XMLDOM");g.async=false;g.loadXML(d)}else{g=new DOMParser().parseFromString(d,"text/xml")}d=g.getElementsByTagName("root")[0];if(!d){return null}for(var f=0,e=d.childNodes.length;f<e;f++){var h=Element.clone(d.childNodes[f],true,true);if(h){a.grab(h)}}return a})||a.set("html",c)},success:function(d){var c=this.options,b=this.response;b.html=d.stripScripts(function(e){b.javascript=e});var a=this.processHTML(b.html);b.tree=a.childNodes;b.elements=a.getElements("*");if(c.filter){b.tree=b.elements.filter(c.filter)}if(c.update){document.id(c.update).empty().set("html",b.html)}else{if(c.append){document.id(c.append).adopt(a.getChildren())}}if(c.evalScripts){$exec(b.javascript)}this.onSuccess(b.tree,b.elements,b.html,b.javascript)}});Element.Properties.load={set:function(a){var b=this.retrieve("load");if(b){b.cancel()}return this.eliminate("load").store("load:options",$extend({data:this,link:"cancel",update:this,method:"get"},a))},get:function(a){if(a||!this.retrieve("load")){if(a||!this.retrieve("load:options")){this.set("load",a)}this.store("load",new Request.HTML(this.retrieve("load:options")))}return this.retrieve("load")}};Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Object.type,url:String.type}));return this}});var Fx=new Class({Implements:[Chain,Events,Options],options:{fps:50,unit:false,duration:500,link:"ignore"},initialize:function(a){this.subject=this.subject||this;this.setOptions(a);this.options.duration=Fx.Durations[this.options.duration]||this.options.duration.toInt();var b=this.options.wait;if(b===false){this.options.link="cancel"}},getTransition:function(){return function(a){return -(Math.cos(Math.PI*a)-1)/2}},step:function(){var a=$time();if(a<this.time+this.options.duration){var b=this.transition((a-this.time)/this.options.duration);this.set(this.compute(this.from,this.to,b))}else{this.set(this.compute(this.from,this.to,1));this.complete()}},set:function(a){return a},compute:function(c,b,a){return Fx.compute(c,b,a)},check:function(){if(!this.timer){return true}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false}return false},start:function(b,a){if(!this.check(b,a)){return this}this.from=b;this.to=a;this.time=0;this.transition=this.getTransition();this.startTimer();this.onStart();return this},complete:function(){if(this.stopTimer()){this.onComplete()}return this},cancel:function(){if(this.stopTimer()){this.onCancel()}return this},onStart:function(){this.fireEvent("start",this.subject)},onComplete:function(){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject)}},onCancel:function(){this.fireEvent("cancel",this.subject).clearChain()},pause:function(){this.stopTimer();return this},resume:function(){this.startTimer();return this},stopTimer:function(){if(!this.timer){return false}this.time=$time()-this.time;this.timer=$clear(this.timer);return true},startTimer:function(){if(this.timer){return false}this.time=$time()-this.time;this.timer=this.step.periodical(Math.round(1000/this.options.fps),this);return true}});Fx.compute=function(c,b,a){return(b-c)*a+c};Fx.Durations={"short":250,normal:500,"long":1000};Fx.CSS=new Class({Extends:Fx,prepare:function(d,e,b){b=$splat(b);var c=b[1];if(!$chk(c)){b[1]=b[0];b[0]=d.getStyle(e)}var a=b.map(this.parse);return{from:a[0],to:a[1]}},parse:function(a){a=$lambda(a)();a=(typeof a=="string")?a.split(" "):$splat(a);return a.map(function(c){c=String(c);var b=false;Fx.CSS.Parsers.each(function(f,e){if(b){return}var d=f.parse(c);if($chk(d)){b={value:d,parser:f}}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b})},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(e){a.push({value:d[e].parser.compute(d[e].value,c[e].value,b),parser:d[e].parser})});a.$family={name:"fx:css:value"};return a},serve:function(c,b){if($type(c)!="fx:css:value"){c=this.parse(c)}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b))});return a},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b))},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a]}var b={};Array.each(document.styleSheets,function(e,d){var c=e.href;if(c&&c.contains("://")&&!c.contains(document.domain)){return}var f=e.rules||e.cssRules;Array.each(f,function(j,g){if(!j.style){return}var h=(j.selectorText)?j.selectorText.replace(/^\w+/,function(i){return i.toLowerCase()}):null;if(!h||!h.test("^"+a+"$")){return}Element.Styles.each(function(k,i){if(!j.style[i]||Element.ShortStyles[i]){return}k=String(j.style[i]);b[i]=(k.test(/^rgb/))?k.rgbToHex():k})})});return Fx.CSS.Cache[a]=b}});Fx.CSS.Cache={};Fx.CSS.Parsers=new Hash({Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true)}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false},compute:function(c,b,a){return c.map(function(e,d){return Math.round(Fx.compute(c[d],b[d],a))})},serve:function(a){return a.map(Number)}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b}},String:{parse:$lambda(false),compute:$arguments(1),serve:$arguments(0)}});Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property}this.render(this.element,b,a,this.options.unit);return this},start:function(c,e,d){if(!this.check(c,e,d)){return this}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);return this.parent(a.from,a.to)}});Element.Properties.tween={set:function(a){var b=this.retrieve("tween");if(b){b.cancel()}return this.eliminate("tween").store("tween:options",$extend({link:"cancel"},a))},get:function(a){if(a||!this.retrieve("tween")){if(a||!this.retrieve("tween:options")){this.set("tween",a)}this.store("tween",new Fx.Tween(this,this.retrieve("tween:options")))}return this.retrieve("tween")}};Element.implement({tween:function(a,c,b){this.get("tween").start(arguments);return this},fade:function(c){var e=this.get("tween"),d="opacity",a;c=$pick(c,"toggle");switch(c){case"in":e.start(d,1);break;case"out":e.start(d,0);break;case"show":e.set(d,1);break;case"hide":e.set(d,0);break;case"toggle":var b=this.retrieve("fade:flag",this.get("opacity")==1);e.start(d,(b)?0:1);this.store("fade:flag",!b);a=true;break;default:e.start(d,arguments)}if(!a){this.eliminate("fade:flag")}return this},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=(a=="transparent")?"#fff":a}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));b.callChain()}.bind(this));return this}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")]}}return a}});Fx.Transition=function(b,a){a=$splat(a);return $extend(b,{easeIn:function(c){return b(c,a)},easeOut:function(c){return 1-b(1-c,a)},easeInOut:function(c){return(c<=0.5)?b(2*c,a)/2:(2-b(2*(1-c),a))/2}})};Fx.Transitions=new Hash({linear:$arguments(0)});Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b])}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a[0]||6)},Expo:function(a){return Math.pow(2,8*(a-1))},Circ:function(a){return 1-Math.sin(Math.acos(a))},Sine:function(a){return 1-Math.sin((1-a)*Math.PI/2)},Back:function(b,a){a=a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a)},Bounce:function(f){var e;for(var d=0,c=1;1;d+=c,c/=2){if(f>=(7-4*d)/11){e=c*c-Math.pow((11-6*d-11*f)/4,2);break}}return e},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a[0]||1)/3)}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,[a+2])})});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(a){if(typeof a=="string"){a=this.search(a)}for(var b in a){this.render(this.element,b,a[b],this.options.unit)}return this},compute:function(e,d,c){var a={};for(var b in e){a[b]=this.parent(e[b],d[b],c)}return a},start:function(b){if(!this.check(b)){return this}if(typeof b=="string"){b=this.search(b)}var e={},d={};for(var c in b){var a=this.prepare(this.element,c,b[c]);e[c]=a.from;d[c]=a.to}return this.parent(e,d)}});Element.Properties.morph={set:function(a){var b=this.retrieve("morph");if(b){b.cancel()}return this.eliminate("morph").store("morph:options",$extend({link:"cancel"},a))},get:function(a){if(a||!this.retrieve("morph")){if(a||!this.retrieve("morph:options")){this.set("morph",a)}this.store("morph",new Fx.Morph(this,this.retrieve("morph:options")))}return this.retrieve("morph")}};Element.implement({morph:function(a){this.get("morph").start(a);return this}});Element.Events.domready={onAdd:function(a){if(Browser.loaded){a.call(this)}}};(function(){var b=function(){if(Browser.loaded){return}Browser.loaded=true;window.fireEvent("domready");document.fireEvent("domready")};window.addEvent("load",b);if(Browser.Engine.trident){var a=document.createElement("div");(function(){($try(function(){a.doScroll();return document.id(a).inject(document.body).set("html","temp").dispose()}))?b():arguments.callee.delay(50)})()}else{if(Browser.Engine.webkit&&Browser.Engine.version<525){(function(){(["loaded","complete"].contains(document.readyState))?b():arguments.callee.delay(50)})()}else{document.addEvent("DOMContentLoaded",b)}}})();var Cookie=new Class({Implements:Options,options:{path:false,domain:false,duration:false,secure:false,document:document},initialize:function(b,a){this.key=b;this.setOptions(a)},write:function(b){b=encodeURIComponent(b);if(this.options.domain){b+="; domain="+this.options.domain}if(this.options.path){b+="; path="+this.options.path}if(this.options.duration){var a=new Date();a.setTime(a.getTime()+this.options.duration*24*60*60*1000);b+="; expires="+a.toGMTString()}if(this.options.secure){b+="; secure"}this.options.document.cookie=this.key+"="+b;return this},read:function(){var a=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return(a)?decodeURIComponent(a[1]):null},dispose:function(){new Cookie(this.key,$merge(this.options,{duration:-1})).write("");return this}});Cookie.write=function(b,c,a){return new Cookie(b,a).write(c)};Cookie.read=function(a){return new Cookie(a).read()};Cookie.dispose=function(b,a){return new Cookie(b,a).dispose()};var Swiff=new Class({Implements:[Options],options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"transparent",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object},initialize:function(l,m){this.instance="Swiff_"+$time();this.setOptions(m);m=this.options;var b=this.id=m.id||this.instance;var a=document.id(m.container);Swiff.CallBacks[this.instance]={};var e=m.params,g=m.vars,f=m.callBacks;var h=$extend({height:m.height,width:m.width},m.properties);var k=this;for(var d in f){Swiff.CallBacks[this.instance][d]=(function(n){return function(){return n.apply(k.object,arguments)}})(f[d]);g[d]="Swiff.CallBacks."+this.instance+"."+d}e.flashVars=Hash.toQueryString(g);if(Browser.Engine.trident){h.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=l}else{h.type="application/x-shockwave-flash";h.data=l}var j='<object id="'+b+'"';for(var i in h){j+=" "+i+'="'+h[i]+'"'}j+=">";for(var c in e){if(e[c]){j+='<param name="'+c+'" value="'+e[c]+'" />'}}j+="</object>";this.object=((a)?a.empty():new Element("div")).set("html",j).firstChild},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this.toElement(),a);return this},inject:function(a){document.id(a,true).appendChild(this.toElement());return this},remote:function(){return Swiff.remote.apply(Swiff,[this.toElement()].extend(arguments))}});Swiff.CallBacks={};Swiff.remote=function(obj,fn){var rs=obj.CallFunction('<invoke name="'+fn+'" returntype="javascript">'+__flash__argumentsToXML(arguments,2)+"</invoke>");return eval(rs)};

/*
 * The JavaScript implementation of the Secure Hash Algorithm 1
 *
 *   Copyright (c) 2008  Takanori Ishikawa  <takanori.ishikawa@gmail.com>
 *   All rights reserved.
 *
 *   Redistribution and use in source and binary forms, with or without
 *   modification, are permitted provided that the following conditions
 *   are met:
 *
 *   1. Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *
 *   2. Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *
 *   3. Neither the name of the authors nor the names of its contributors
 *      may be used to endorse or promote products derived from this
 *      software without specific prior written permission.
 *
 *   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *   A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *   OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *   TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * This is the javascript file for code which implements
 * the Secure Hash Algorithm 1 as defined in FIPS 180-1 published April 17, 1995.
 *
 *   Author: Takanori Ishikawa <takanori.ishikawa@gmail.com>
 *   Copyright: Takanori Ishikawa 2008
 *   License: BSD License (see above)
 *
 * NOTE:
 *   Only 8-bit string is supported, please use encodeURIComponent() function
 *   if you want to hash multibyte string.
 *
 * Supported Browsers:
 *   [Win] IE 6, Firefox 2
 *   [Mac] Safari 3, Firefox 2
 *
 * Usage:
 *   var hexdigest = new SHA1("Hello.").hexdigest(); // "9b56d519ccd9e1e5b2a725e186184cdc68de0731"
 *
 * See Also:
 *   FIPS 180-1 - Secure Hash Standard
 *   http://www.itl.nist.gov/fipspubs/fip180-1.htm
 *
 */
var SHA1=(function(){var c={enabled:true,equals:function(k,j){if(k instanceof Array&&j instanceof Array){if(k.length!=j.length){return false}for(var l=0;l<k.length;l++){if(!c.equals(k[l],j[l])){return false}}return true}if((k!=null&&j!=null)&&(typeof k=="object"&&typeof j=="object")){for(var l in k){if(!c.equals(k[l],j[l])){return false}}return true}return(k==j)},should:function(l,k){c.currentIndicator++;if(!l){var j=["[Spec failed",c.currentTitle?" ("+c.currentTitle+")] ":"] ",(k||(c.currentMessage+" "+c.currentIndicator)||"")].join("");alert(j);throw j}return !!l},describe:function(l,j){c.currentTitle=l;for(var k in j){c.currentMessage=k;c.currentIndicator=0;j[k]();c.currentIndicator=null}c.currentMessage=c.currentTitle=null},Version:"0.1"};c.should.equal=function(k,j,l){return c.should(c.equals(k,j),l)};c.should.not=function(j,k){return c.should(!j,k)};c.should.not.equal=function(k,j,l){return c.should(!c.equals(k,j),l)};if(!c.enabled){c.describe=function(){}}c.describe("Spec object",{should:function(){c.should(true);c.should(1)},"should.not":function(){c.should.not(false);c.should.not(0)},"should.equal":function(){c.should.equal(null,null);c.should.equal("","");c.should.equal(12345,12345);c.should.equal([0,1,2],[0,1,2]);c.should.equal([0,1,[0,1,2]],[0,1,[0,1,2]]);c.should.equal({},{});c.should.equal({x:1},{x:1});c.should.equal({x:[1]},{x:[1]})},"should.not.equal":function(){c.should.not.equal([1,2,3],[1,2,3,4]);c.should.not.equal({x:1},[1,2,3,4])}});function h(j){j&=4294967295;if(j<0){j+=4294967296}var k=Number(j).toString(16);if(k.length<8){k="00000000".substr(0,8-k.length)+k}return k}c.describe("sha1",{strfhex32:function(){c.should.equal(h(0),"00000000");c.should.equal(h(291),"00000123");c.should.equal(h(4294967295),"ffffffff")}});function a(j){if(typeof arguments.callee.ZERO32=="undefined"){arguments.callee.ZERO32=new Array(33).join("0")}var k=Number(j).toString(2);if(k.length<32){k=arguments.callee.ZERO32.substr(0,32-k.length)+k}return k.replace(/(\d{8})/g,"$1 ").replace(/^\s*(.*?)\s*$/,"$1")}c.describe("sha1",{strfbits:function(){c.should.equal(a(0),"00000000 00000000 00000000 00000000");c.should.equal(a(1),"00000000 00000000 00000000 00000001");c.should.equal(a(123),"00000000 00000000 00000000 01111011")}});function d(j){var k=j+1+64;return 512*Math.ceil(k/512)/32}c.describe("sha1",{padding_size:function(){c.should.equal(d(0),16);c.should.equal(d(1),16);c.should.equal(d(512-64-1),16);c.should.equal(d(512-64),32)}});function e(k){var p=k.length;var o=d(p*8);var q=new Array(o);for(var n=0,l=0;n<p;){q[l++]=((k.charCodeAt(n++)&255)<<24)|((k.charCodeAt(n++)&255)<<16)|((k.charCodeAt(n++)&255)<<8)|((k.charCodeAt(n++)&255))}while(l<o){q[l++]=0}return q}c.describe("sha1",{word_array:function(){c.should.equal(e(""),[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);c.should.equal(e("1234")[0],825373492)}});function f(m,k,l){if(l>4294967295){var j=l&4294967295;if(j<0){j+=4294967296}m[k-1]=j;m[k-2]=(l-j)/4294967296}else{m[k-1]=l;m[k-2]=0}return m}c.describe("sha1",{write_nbits:function(){c.should.equal(f([0,0],2,1),[0,1]);c.should.equal(f([0,0],2,4294967295),[0,4294967295]);c.should.equal(f([0,0],2,4294967296),[1,0]);c.should.equal(f([0,0],2,8589934591),[1,4294967295]);c.should.equal(f([0,0],2,1249835483136),[291,0]);c.should.equal(f([0,0],2,1252717883154),[291,2882400018])}});function i(l,k){var j=Math.floor(k/32);l[j]|=(1<<(((j+1)*32)-k-1));f(l,d(k),k);return l}function g(q){var p=0,u=0;var s=[1732584193,4023233417,2562383102,271733878,3285377520];while(p<q.length){var n=new Array(80);for(u=0;u<16;u++){n[u]=q[p++]}for(u=16;u<80;u++){var r=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=(r<<1)|(r>>>31)}var m=s[0],l=s[1],k=s[2],j=s[3],v=s[4];for(u=0;u<80;u++){var o=((m<<5)|(m>>>27))+v+n[u];if(u>=0&&u<=19){o+=((l&k)|((~l)&j))+1518500249}else{if(u>=20&&u<=39){o+=(l^k^j)+1859775393}else{if(u>=40&&u<=59){o+=((l&k)|(l&j)|(k&j))+2400959708}else{if(u>=60&&u<=79){o+=(l^k^j)+3395469782}}}}v=j;j=k;k=((l<<30)|(l>>>2));l=m;m=o}s[0]=(s[0]+m)&4294967295;s[1]=(s[1]+l)&4294967295;s[2]=(s[2]+k)&4294967295;s[3]=(s[3]+j)&4294967295;s[4]=(s[4]+v)&4294967295;if(s[0]<0){s[0]+=4294967296}if(s[1]<0){s[1]+=4294967296}if(s[2]<0){s[2]+=4294967296}if(s[3]<0){s[3]+=4294967296}if(s[4]<0){s[4]+=4294967296}}return s}var b=function(j){this.message=j};b.prototype={digest:function(){var j=this.message.length*8;var k=i(e(this.message),j);return g(k)},hexdigest:function(){var k=this.digest();for(var j=0;j<k.length;j++){k[j]=h(k[j])}return k.join("")}};c.describe("sha1",{"SHA1#hexdigest":function(){c.should.equal(new b("").hexdigest(),"da39a3ee5e6b4b0d3255bfef95601890afd80709");c.should.equal(new b("1").hexdigest(),"356a192b7913b04c54574d18c28d46e6395428ab");c.should.equal(new b("Hello.").hexdigest(),"9b56d519ccd9e1e5b2a725e186184cdc68de0731");c.should.equal(new b("9b56d519ccd9e1e5b2a725e186184cdc68de0731").hexdigest(),"f042dc98a62cbad68dbe21f11bbc1e9d416d2bf6");c.should.equal(new b("MD5abZRVSXZVRcasdfasdddddddddddddddds+BNRJFSLKJFN+SEONBBJFJXLKCJFSE)RUNVXDLILKVJRN)#NVFJ)WVFWRW#)NVS$Q=$dddddddddddddWV;no9wurJFSE)RUNVXDLILKVJRN)#NVFJ)WVFWRW#)NVS$Q=$dddddddddddddWV;no9wurJFSE)RUNVXDLILKVJRN)#NVFJ)WVFWRW#)NVS$Q=$dddddddddddddWV;no9wurJFSE)RUNVXDLILKVJRN)#NVFJ)WVFWRW#)NVS$Q=$dddddddddddddWV;no9wuraddddddasdfasdfd").hexdigest(),"662dbf4ebc9cdb4224766e87634e5ba9e6de672b")}});return b})();

String.implement({
	truncate: function(len, sep) {
		sep = (sep == undefined)	? " ..." : sep;

		var str = this;
		if (str.length > len) {
			str = str.substring(0, len) + "<span> " + sep + "</span>";
		}
		return str;
	}
});

Hash.implement({
	getCleanRecursive: function() {
		var keys = this.getKeys(),
			clean = this.getClean();

		keys.forEach(function(key) {
			if ($type(clean[key]) == "hash"
					&& $type(clean[key].getClean) == "function"
					&& $type(clean[key].getCleanRecursive) == "function") {
				clean[key] = clean[key].getCleanRecursive();
			}
		}.bind(this));

		return clean;
	},

	flatten: function() {
		function _flatten(hash, trail) {
			var flat = [];
			hash.each(function(value, key) {
				if ($type(value) == "hash" || $type(value) == "object") {
					trail.push(key);
					flat.combine(_flatten(new Hash(value), trail));
					trail.pop();
				} else {
					trail.push(key);
					flat.push([ trail.join("."), value ]);
					trail.pop();
				}
			});
			return flat;
		}

		var hash = new Hash();
		_flatten(this, []).forEach(function(item) {
			hash.set(item[0], item[1]);
		});

		return hash;
	}
});

Element.Properties.extend({
	unselectable: {
		set: function(value) {
			Browser.Engine.gecko && (this.style.MozUserSelect = value ? 'none' : 'text') ||
                Browser.Engine.webkit && (this.style.KhtmlUserSelect = value ? 'none' : 'text') ||
                (Browser.Engine.trident || Browser.Engine.opera) && (this.unselectable = value ? 'on' : 'off');
			this.getChildren('*').set('unselectable', value);
			return this;
		}
	}
});


/******************************************************************************
 * Main sidebar class                                                         *
 ******************************************************************************/

var Sidebar = new Class({
	Implements: [ Options ],

	options: {
		elementIds: {
			sidebar: 'gSearchSidebar',
			ads: ['3po', 'mbEnd', 'mbb10', 'tads'],
			searchWiki: 'wml',
			results: 'res' // this is where we need to inject sidebar
		},
		selectors: {
			query: '#sft input',
			tsf: "#tsf", // top and bottom search forms
			bsf: "#bsf form"
		},
		defaultHeaders: {
			'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
			'Accept': 'text/html'
		}
	},

	initialize: function(options) {
		this.setOptions(options);

		// Stops execution if sidebar already exists (a bug that happens sometimes)
		var container = $(this.options.elementIds.sidebar);
		if (container) {
			return;
		} else {
			this.container = this.createContainer();
		}

		this.services = [];
		this.serviceMap = {};

		this.removeAds();
		this.fixSearchWiki();
		this.stylePage();
		this.bind();
	},

	isSaneEnvironment: function() {
		// no inputs is kinda odd, seems like we were loaded from an iframe or something
		var inputs = $$(this.options.selectors.query);
		return inputs.length ? true : false;
	},

	bind: function() {
		["tsf", "bsf"].each(function(key) {
			var form = document.getElement(this.options.selectors[key]);
			if (form) {
				form.addEvent("submit", function() {
					var query = form.getElement(".lst").get("value");
					this.query(query);
				}.bind(this));
			}
		}.bind(this));
	},

	createContainer: function() {
		var sidebar = new Element("div", { id: this.options.elementIds.sidebar }),
			results = $(this.options.elementIds.results);

		results && sidebar.inject(this.options.elementIds.results, "after");

		return sidebar;
	},

	setSettingsManager: function(settingsManager) {
		this.settingsManager = settingsManager;
	},

	setSettingsDialog: function(settingsDialog) {
		this.settingsDialog = settingsDialog;
	},

	registerService: function(service) {
		this.services.push(service);
		this.serviceMap[service.options.id] = service;
		var containerId = this.getServiceContainerId(service),
			styles = service.getStyles().map(function(rule) {
				var prefix = "#" + containerId + " ";
				return (rule.indexOf(prefix) === 0) ? rule : prefix + rule;
			}.bind(this)).join("");
		GM_addStyle(styles);
	},

	query: function(queryOverride) {
		var settings = this.settingsManager.getSettings(),
			query = ($type(queryOverride) != "string") ? this.getQuery() : queryOverride;

		if (!this.settingsManager.hasRunBefore()) {
			this.settingsDialog.show();
			(function() {
				alert("I see this is the first time you've run Google Search Sidebar. "
					+ "You can now take the time to adjust the settings to your liking.\n\n"
					+ "Settings can be accessed anytime later by clicking the GreaseMonkey icon and choosing"
					+ "Configure Google Sidebar from the \"User Script Commands...\" menu.");
			}).delay(1);
		}

		this.createServiceContainers();

		if (query) {
			this.services.each(function(service) {
				if (settings.services[service.options.id].show) {
					service.query(query, this);
				}
			}.bind(this));
		}
	},

	// Say good bye to the annoying ads.
	removeAds: function() {
		this.options.elementIds.ads.each(function(elmId) {
			if ($(elmId)) {
				$(elmId).dispose();
			}
		});
	},

	// Fix SearchWiki positioning
	fixSearchWiki: function() {
		if ($(this.options.elementIds.searchWiki)) {
			$(this.options.elementIds.searchWiki).setStyle('clear','both');
		}
	},

	// Get the search query
	getQuery: function() {
		var query,
			inputs = $$(this.options.selectors.query);
		inputs.each(function(input) {
			if (input.get('type') == 'text') {
				query = input.get('value');
			}
		});

		return query;
	},

	// Create our new sidebar
	getSidebar: function() {
		new Element('div').set('id', this.elements.sidebar).inject('res', 'after');
	},

	// Add some style ;)
	stylePage: function() {
		styles = 'body { min-width:940px; }';
		styles += '#gSearchSidebar { overflow:hidden; margin:0 0 50px; float:right; width:320px; }';
		styles += '#gSearchSidebar p { margin-top:5px; }';
		styles += '#gSearchSidebar h1 { font-size:1em; margin:0 0 10px; background-color:#F0F7F9; border-top:1px solid #6b90da; padding:5px }';
		styles += '#gSearchSidebar h1 a { text-decoration:none; font-weight:bold; color:#000; }';
		styles += '#gSearchSidebar h2 { font-size:0.9em; color:#333; margin:0; padding:0; }';
		styles += '#res { overflow:hidden; }';
		styles += '#gSearchSidebar p { font-size:0.9em; line-height:1.3em; padding:0; }';
		styles += '.me { font-weight:bold; font-size:1.2em; }';
		styles += '.pg { color: #581; display:inline; font-style:italic; }';
		styles += '.ital-inline, .alt-ital { font-style:italic; }';
		styles += '#res { width:600px; float:left; margin-bottom:15px; margin-top:-11px; }';
		styles += 'div.t.n.bt { clear: both; }';

		GM_addStyle(styles);
	},

	getServiceById: function(serviceId) {
		return this.serviceMap[serviceId];
	},

	getHeaders: function() {
		return this.options.defaultHeaders;
	},

	getServiceContainerId: function(service) {
		var serviceId, containerId;

		if ($type(service) == "undefined") {
			return null;
		} else if ($type(service) == "string") {
			containerId = (service + "-container").camelCase();
			return containerId;
		} else {
			serviceId = service.options.id;
			containerId = (serviceId + "-container").camelCase();
			return containerId;
		}
	},

	createServiceContainers: function() {
		while (this.container.getFirst()) this.container.getFirst().dispose();

		var settings = this.settingsManager.getSettings(),
			order = settings.order.filter(function(item) {
				return settings.services[item].show;
			}.bind(this));

		order.forEach(function(serviceId) {
			var containerId = this.getServiceContainerId(serviceId);
			new Element("div").set("id", containerId).inject(this.container);
		}.bind(this));
	},

	getServiceContainer: function(service) {
		var containerId = this.getServiceContainerId(service),
			container = $(containerId);

		service.getHeader().inject(container, "top");

		return container;
	},

	onSettingsChanged: function() {
		this.query();
	}
});


/******************************************************************************
 * Settings manager class                                                     *
 ******************************************************************************/

var SettingsManager = new Class({
	Implements: [ Options ],

	options: {
		presets: {
			show: [ "flickr", "wikipedia", "twitter" ],
			order: [ "wikipedia", "dictionarycom", "flickr", "slideshare", "scribd", "twitter", "youtube", "digg" ]
		}
	},

	initialize: function(sidebar) {
		this.sidebar = sidebar;
		this.settings = this.loadSettings();
	},

	setProperty: function(key, value) {
		GM_setValue(key, value);
	},

	getProperty: function(key, defaultValue) {
		return GM_getValue(key, defaultValue);
	},

	getSettings: function() {
		return this.settings;
	},

	/**
	 * Return a basic set of default settings.
	 */
	initSettings: function() {
		var services = this.sidebar.services,
			settings = new Hash(),
			serviceSettings;

		settings.set("services", new Hash());
		serviceSettings = settings.get("services");

		services.forEach(function(service) {
			serviceSettings.set(service.options.id, new Hash({ show: false }));
		});

		settings.set("order", this.options.presets.order);

		return settings;
	},

	hasRunBefore: function() {
		return this.getProperty("ranBefore", false)
	},

	/**
	 * Load settings from local storage encapsulated in setProperty and getProperty.
	 */
	loadSettings: function() {
		var settings = this.initSettings(),
			services = settings.get("services"),
			loadPresets = !this.hasRunBefore();

		this.setProperty("ranBefore", true);

		var order = this.loadOrder(loadPresets);
		settings.set("order", order);

		this.sidebar.services.forEach(function(service) {
			var serviceSettings = this.loadServiceSettings(service, loadPresets);
			services.set(service.options.id, serviceSettings);

			if (!order.contains(service.options.id)) {
				order.push(service.options.id);
			}
		}.bind(this));

		return settings;
	},

	loadOrder: function(loadPresets) {
		if (loadPresets) {
			return this.options.presets.order;
		} else {
			var order = this.getProperty("order", []);
			if ($type(order) == "string") {
				order = order.split(",");
			}
			return order;
		}
	},

	loadServiceSettings: function(service, loadPresets) {
		var settings = new Hash(),
			showKeyName  = "services.{0}.show".substitute([ service.options.id ]);

		if (loadPresets) {
			var presetShow = this.options.presets.show.contains(service.options.id);
			settings.set("show", presetShow);
		} else {
			settings.set("show",  this.getProperty(showKeyName, false));
		}

		return settings;
	},

	saveSettings: function(settings) {
		settings.set("order", settings.get("order").join(","));
		var settings = settings.flatten();

		settings.forEach(function(value, key) {
			this.setProperty(key, value);
		}.bind(this));

		this.settings = this.loadSettings();
	},

	onSettingsChanged: function(newSettings) {
		var oldSettings = this.settings,
			settings = new Hash(oldSettings).extend(newSettings);
		this.saveSettings(settings);
	}
})


/*****************************************************************************
 * Settings dialog                                                           *
 ******************************************************************************/

var SettingsDialog = new Class({

	Implements: [ Options, Events ],

	options: {
		buttons: {
			"cancel": "Cancel",
			"save": "Save"
		}
	},

	initialize: function(sidebar, settingsManager) {
		this.settingsManager = settingsManager;
		this.sidebar = sidebar;
		this.container = null;
		this.addStyles();
	},

	render: function() {
		var container = new Element("div").set("id", "gssSettings"),
			title = new Element("h2").set("html", "Settings").inject(container);
			helpText = new Element("p").set("text", "Reload page to see your new settings in action.").inject(container),
			form = new Element("form").inject(container),
			settings = this.settingsManager.getSettings();

		this.renderServices(settings).inject(form);
		this.renderButtons().inject(form);

		return container;
	},

	createOrderButtons: function() {
		var buttons = ["up", "down"].map(function(dir) {
			return new Element("a", {
				"class": "order" + dir.capitalize(),
				html: (dir == "up") ? "▲" : "▼",
				href: "#",
				events: {
					click: function(event) {
						event.stop();
						this.onReorderItem.call(this, event, dir);
					}.bind(this)
				}
			});
		}.bind(this));

		buttons.push(new Element("span", {
			"class": "placeholder",
			html: "&nbsp;"
		}));

		return buttons;
	},

	renderServices: function(settings) {
		var list = new Element("ul").inject(form);
		settings.order.forEach(function(serviceId, i) {
			var service = this.sidebar.getServiceById(serviceId),
				listItem = new Element("li").setStyle("clear", "both"),
				label = new Element("label").set("unselectable", true).inject(listItem),
				text = new Element("span").set("class", "serviceLabel").set("html", service.options.label),
				checkbox = new Element("input").set("type", "checkbox").addClass("showService").set("value", service.options.id),
				cbContainer = new Element("span").set("class", "checkbox").adopt(checkbox);
				orderContainer = new Element("span").set("class", "order").inject(listItem, "top"),
				first = (i == 0),
				last  = (i == settings.order.length - 1);

			this.injectReorderButtons(orderContainer, first, last);

			checkbox.set("checked", settings.services[service.options.id].show);

			cbContainer.inject(label);
			text.inject(label);

			listItem.inject(list);
		}.bind(this));

		return list;
	},

	injectReorderButtons: function(orderContainer, first, last) {
		var orderButtons = this.createOrderButtons();

		while (orderContainer.getFirst()) orderContainer.getFirst().dispose();

		// inject appropriate sorting buttons or a placeholder if first|last list item
		(first && orderButtons[2].inject(orderContainer)) || orderButtons[0].inject(orderContainer);
		(last  && orderButtons[2].inject(orderContainer)) || orderButtons[1].inject(orderContainer);
	},

	onReorderItem: function(event, dir) {
		var 	listItem = $(event.target).getParent("li");
			method = (dir == "up") ? "getPrevious" : "getNext",
			sibling = listItem[method]();

		if (sibling) {
			$(listItem.dispose()).inject(sibling, (dir == "up") ? "before" : "after");
		}

		this.refreshReorderControls([ listItem, sibling ]);
	},

	refreshReorderControls: function(listItems) {
		listItems.forEach(function(listItem, i) {
			this.injectReorderButtons(listItem.getElement(".order"), !listItem.getPrevious(), !listItem.getNext());
		}.bind(this));
	},

	renderButtons: function() {
		var buttons = new Element("div").set("class", "buttons");

		new Hash(this.options.buttons).each(function(value, key) {
			Element("button", {
				html: value,
				"class": "lsb",
				events: {
					click: this["on" + key.capitalize() + "Click"].bind(this)
				}
			}).inject(buttons);
		}.bind(this));

		return buttons;
	},

	onCancelClick: function() {
		this.hide();
	},

	onSaveClick: function() {
		var newSettings = this.getSettings();
		this.fireEvent("save", newSettings);
		this.hide();
	},

	getSettings: function() {
		var settings = {},
			serviceSettings = settings.services = {},
			order = settings.order = [];

		this.container.getElements("input.showService").forEach(function(input, i) {
			var serviceId = input.get("value");
			serviceSettings[serviceId] = { show: input.get("checked") };
			order.push(serviceId);
		});

		return settings;
	},

	position: function() {
		var c = this.container,
			width  = c.offsetWidth;
			sWidth = window.innerWidth,
			height  = c.offsetHeight,
			sHeight = window.innerHeight,
			scrollY = window.pageYOffset;

			c.setStyle("left", (sWidth - width) / 2);
			c.setStyle("top", ((sHeight - height) / 2) + scrollY);
	},

	show: function() {
		this.container = this.render().inject(document.body);
		this.position();
	},

	hide: function() {
		this.container.dispose();
	},

	addStyles: function() {
		var styles = [
			"#gssSettings { position: absolute; width: 350px; background-color: white; border: 1px solid #6B90DA; padding: 5px 10px; top: 0; left: 0;}",
			"#gssSettings h2 { margin: 0; }",
			"#gssSettings ul { padding-left: 0; }",
			"#gssSettings label { display: block; }",
			"#gssSettings li { list-style-type: none; background-color: #F0F7F9; -moz-border-radius: 3px; padding: 5px 4px; margin-bottom: 3px; }",
			"#gssSettings li:hover { background-color: #6B90DA; }",
			"#gssSettings li .checkbox { float: right }",
			"#gssSettings li .checkbox input { position: relative; top: -3px; }",
			"#gssSettings .buttons { text-align: right; }",
			"#gssSettings .buttons .lsb { width: 65px; margin-left: 5px;}",
			"#gssSettings .order { float: left; width: 35px; }",
			"#gssSettings .order a, #gssSettings .order span.placeholder { text-decoration: none; float: left; width: 13px; color: black; }"
		];
		GM_addStyle(styles.join(""));
	}
});


/*****************************************************************************
 * Base service class                                                         *
 ******************************************************************************/

var BaseService = new Class({
	Implements: [ Options ],

	options: {
		id: null,
		label: null,
		url: null,
		apiKey: null,
		method: 'GET',
		postBody: null,
		images: {},
		webSearchUri: null,
		webUrl: null,
		headers: {
			"User-Agent": "Mozilla/4.0 (compatible) Greasemonkey",
			"Content-Type": "text/plain"
		},
		maxResults: null
	},

	initialize: function(options) {
		this.setOptions(options);
	},

	getResults: function() {

	},

	renderItem: function() {
	},

	getExtraParameters: function() {
		return {};
	},

	getParameters: function(query) {
		var normal = {
			apiKey: this.options.apiKey,
			maxResults: this.options.maxResults
		}

		if (query) {
			normal.query = encodeURIComponent(query);
		}

		var extra  = this.getExtraParameters(),
			merged = $merge(normal, extra);

		return merged;
	},

	getUrl: function(query) {
		var params = this.getParameters(query);
			url = this.options.url.substitute(params);
		return url;
	},

	query: function(query, sidebar) {
		var url = this.getUrl(query),
			xhrParams = {
				method: this.options.method,
				url: url,
				headers: this.options.headers,
				onload: function(response) {
					if (response.status === 200) {
						try {
							this.processResponse(response, query, sidebar);
						} catch (e) {
							console.log("Error while processing \"{0}\".".substitute([ this.options.label ]), e);
							console.log("URL hit: {0}".substitute([ url ]));
						}
					}
				}.bind(this)
			};

		if (this.options.method == "POST" && this.options.postBody !== null) {
			xhrParams.data = this.options.postBody.substitute(this.getParameters(query));
		}

		GM_xmlhttpRequest(xhrParams);
	},

	processResponse: function(response, query, sidebar) {
		// abstract method
	},

	getHeader: function() {
		var header = new Element('h1')
				.set('html', this.options.label)
				.setStyle('clear', 'both');

		return header;
	},

	refreshHeader: function(container, query) {
		if (this.options.webUrl == null) {
			return;
		}

		var header = $(container).getElement("h1"),
			link = header.getFirst("a");

		if (link == null) {
			link = new Element("a").set("html", this.options.label);
			new Element("h1").adopt(link).replaces(header);
		}

		link.set("href", this.options.webUrl.substitute({ query: encodeURIComponent(query) }));
	},

	getStyles: function() {
		return [];
	}
});


/******************************************************************************
 * Flickr                                                                     *
 ******************************************************************************/

var FlickrSearch = new Class({
	Extends: BaseService,

	options: {
		id: "flickr",
		label: "Flickr",
		apiKey: "33db8eb821f12753b480df732f0e3b11",
		url: "http://api.flickr.com/services/rest?method=flickr.photos.search&api_key={apiKey}&text={query}&sort=relevance&per_page={maxResults}&format=json&jsoncallback=eval",
		webUrl: "http://www.flickr.com/search/?q={query}&m=text",
		maxResults: 12
	},

	processResponse: function(response, query, sidebar) {
		var flickr = eval(response.responseText);
		if (flickr.photos.total > 0) {
			var container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);

			flickr.photos.photo.forEach(function(photo) {
				var item = this.renderItem(photo);
				item.inject(container);
			}.bind(this));

			new Element('div').setStyle('clear', 'both').inject(container);
		}
	},

	renderItem: function(photo) {
		var photoUrl  = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret,
			flickrUrl = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;

		thumb = new Element('img').set('src', photoUrl + '_s.jpg');
		thumb.setStyles({'float': 'left', 'margin-right': '3px', 'margin-bottom': '3px', 'border-style': 'none'});
		photoLink = new Element('a').set({'href': flickrUrl, 'target': '_blank'}).adopt(thumb);
		photoLink.adopt(thumb);

		return photoLink;
	},

	getStyles: function() {
		return [
			"#flickrContainer { padding-bottom: 15px; }"
		];
	}
});


/******************************************************************************
 * Dictionary.com                                                             *
 ******************************************************************************/

var DictionaryComSearch = new Class({
	Extends: BaseService,

	options: {
		id: "dictionarycom",
		label: "Dictionary.com",
		url: "http://dictionary.reference.com/browse/{query}",
		webUrl: "http://dictionary.reference.com/browse/{query}",
		maxDefinitionLen: 600,
		headers: {
			'Content-Type': 'text/html'
		},
		selectors: {
			word: '.luna-Ent h2.me',
			definition: '.luna-Ent .body',
			pron: '.luna-Ent span.show_spellpr span.pron'
		}
	},

	processResponse: function(response, query, sidebar) {
		var hidden = new Element('iframe').setStyle('display','none').inject(document.body);
		hidden.contentWindow.document.body.innerHTML = response.responseText;
		html = hidden.contentWindow.document.body;
		hidden.dispose();

		var word, definition, pron,
			selectors = this.options.selectors;

		if ($(html).getElement(selectors.word)) {
			word = $(html).getElements(selectors.word)[0];
			definition = $(html).getElements(selectors.definition)[0];
			pron = $(html).getElements(selectors.pron)[0];
		}

		if (word && definition && pron) {
			word = word.innerHTML;
			definition = definition.innerHTML.truncate(this.options.maxDefinitionLenth);
			pron = pron.innerHTML;

			var container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);
			this.renderItem(word, definition, pron).inject(container);
		}
	},

	renderItem: function(word, definition, pron) {
		var body = '<span class="me">{word}</span>&nbsp;&nbsp;<span class="pron">[{pron}]</span><br />{definition}'.substitute({
				word: word, definition: definition, pron: pron
			});

		return new Element('p').set('html', body);
	},

	getStyles: function() {
		return [
			".luna-Ent { color: #333; font-size:1em; margin-left:1em; }",
			'.pron { color:#800; font-family: Verdana, "Arial Unicode MS", "Lucida Sans Unicode", Helvetica, Arial, sans-serif; }'
		];
	}
});


/******************************************************************************
 * YouTube                                                                    *
 ******************************************************************************/

var YouTubeSearch = new Class({
	Extends: BaseService,

	options: {
		id: "youtube",
		label: "YouTube",
		url: "http://gdata.youtube.com/feeds/videos?max-results={maxResults}&alt=json&vq={query}",
		webUrl: "http://www.youtube.com/results?search_query={query}&search=Search",
		maxDescriptionLen: 125,
		maxResults: 4
	},

	processResponse: function(response, query, sidebar) {
		var yt = eval('('+ response.responseText +')');
		if (yt.feed.openSearch$totalResults.$t > 0) {
			var container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);

			yt.feed.entry.each(function(entry) {
				var elms = this.renderItem(entry);
				container.adopt(elms);
			}.bind(this));
		}
	},

	renderItem: function(item) {
		var thumbUrl = item.media$group.media$thumbnail[0].url,
			videoUrl = item.media$group.media$player[0].url,
			description = item.media$group.media$description.$t,
			title = item.media$group.media$title.$t,
			results = [];

		description = description.truncate(this.options.maxDescriptionLen);

		var thumb = new Element('img').set('src', thumbUrl).setStyles({

		});

		var videolink = new Element('a').set({'href': videoUrl, 'target': '_blank'}).adopt(thumb);
		results.push(videolink);

		var videotitle = new Element('h2')
				.adopt(
					new Element('a')
					.set({'text': title, 'href': videoUrl, 'target': '_blank'})
				);
		results.push(videotitle);

		var videodescr = new Element('div').addClass("descr").set('text', description);
		results.push(videodescr);

		results.push(new Element('div').setStyle('clear', 'both'));

		return results;
	},

	getStyles: function() {
		return [
			"img { float: left; margin-bottom: 5px; width: 98px; height: 73px; border-style: none; }",
			"h2 { float: right; width: 215px; }",
			".descr { float: right; width: 215px; }"
		];
	}
});


/******************************************************************************
 * Wikipedia                                                                  *
 ******************************************************************************/

var WikipediaSearch = new Class({
	Extends: BaseService,

	options: {
		id: "wikipedia",
		label: "Wikipedia",
		url: "http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=GoogleSearchSidebar&site=en.wikipedia.org&query={query}&results=1&output=json&callback=eval",
		webUrl: "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search={query}&fulltext=Search"
	},

	getLogo: function(url) {
		var link = new Element("a").set("href", url).addClass("wikipediaLogo"),
			logo = new Element('img')
				.set('src','http://en.wikipedia.org/images/wiki-en.png')
				.inject(link);
		return link;
	},

	processResponse: function(response, query, sidebar) {
		var wikipedia = eval(response.responseText);

		var result;
		if (result = wikipedia.ResultSet.Result[0]) {
			if (!result.Title.match(/^.+:/)) {
				var container = sidebar.getServiceContainer(this);
				this.refreshHeader(container, query);
				container.adopt(this.renderItem(result));
			}
		}
	},

	renderItem: function(item) {
		var results = [];

		results.push(this.getLogo(item.Url));

		// Insert Wikipedia title
		var title = item.Title.replace(/ - Wikipedia, the free encyclopedia$/,'').replace(/&amp;amp;/g,'&amp;')
		results.push(new Element('h2').set('html', title));

		// Insert the article summary text into the page
		var summary = item.Summary.replace(/&amp;amp;/g, '&amp;') + ' ',
			text = new Element('div').set('html', summary);
		new Element('a').set({'href': item.Url, 'target': '_blank'}).set({'text': 'View Entry'}).inject(text);
		results.push(text);

		results.push(new Element('div').setStyle('clear','both'));

		return results;
	},

	getStyles: function() {
		return [
			".wikipediaLogo { margin: 0 5px 5px 0; border: 0; }",
			"#wikipediaContainer { padding-bottom: 15px; }",
			"div { margin-left: 110px; margin-top: 5px; }",
			".wikipediaLogo { float: left; }",
			".wikipediaLogo img { width: 101px; height: 116px; border: 0; }"
		]
	}
});


/******************************************************************************
 * slideshare                                                                 *
 ******************************************************************************/

var SlideShareSearch = new Class({
	Extends: BaseService,

	options: {
		id: "slideshare",
		label: "slideshare",
		url: "http://www.slideshare.net/api/2/search_slideshows?api_key={apiKey}&ts={ts}&hash={hash}&q={query}&items_per_page={maxResults}",
		webUrl: "http://www.slideshare.net/search/slideshow?q={query}&submit=post&searchfrom=header",
		method: "GET",
		webUrl: "http://www.slideshare.net/search/slideshow?searchfrom=header&q={query}",
		apiKey: "13nU2keR",
		sharedSecret: "3NzU2Fb5", // a not so secret secret ;)
		headers: {
			'Accept': 'text/xml'
		},
		maxResults: 3,
		maxDescriptionLen: 160
	},

	getExtraParameters: function() {
		var time = Math.floor(new Date().getTime() / 1000),
			hash = new SHA1(this.options.sharedSecret + time).hexdigest(),
			params = {
				ts: time,
				hash: hash
			};

		return params;
	},

	processResponse: function(response, query, sidebar) {
		// no responseXML in GM :-(
		var parser = new DOMParser();
			xmlDoc = parser.parseFromString(response.responseText, "text/xml");

		var slideshows = xmlDoc.querySelectorAll("Slideshow"),
			fields = ["Title", "Description", "ThumbnailSmallURL", "URL"];

		if (slideshows.length) {
			var container = sidebar.getServiceContainer(this),
				data;
			this.refreshHeader(container, query);

			Array.prototype.slice.call(slideshows).forEach(function(slideshow) {
				data = {};
				fields.forEach(function(tagName) {
					data[tagName] = slideshow.querySelector(tagName).textContent;
				});
				this.renderItem(data).inject(container);
			}.bind(this));
		}
	},

	renderItem: function(item) {
		var slideshow = new Element("div").set("class", "slideshow");

		var thumbnail = new Element("img").set("src", item['ThumbnailSmallURL']);
		new Element("a").set("href", item['URL']).set("class", "thumbLink").adopt(thumbnail).inject(slideshow);

		var textContainer = new Element("div").set("class", "textContainer");

		var link = new Element("a", { "html": item['Title'], "href": item['URL'] });
		new Element("h2").adopt(link).inject(textContainer);

		new Element("div").set("html", item['Description'].truncate(this.options.maxDescriptionLen)).inject(textContainer);

		textContainer.inject(slideshow);

		new Element('div').setStyle('clear', 'both').inject(slideshow);

		return slideshow;
	},

	getStyles: function() {
		return [
			".slideshow .thumbLink { float: left; margin-right: 5px; }",
			".slideshow { margin-bottom: 8px; }",
			".slideshow img { border: 0; max-width: 100px; }",
			".textContainer { margin-left: 105px; }"
		];
	}
});


/******************************************************************************
 * Twitter                                                                    *
 ******************************************************************************/

var TwitterSearch = new Class({
	Extends: BaseService,

	options: {
		id: "twitter",
		label: "twitter",
		url: "http://search.twitter.com/search.json?q={query}&rpp={maxResults}",
		webUrl: "http://twitter.com/#search?q={query}",
		userProfileUrl: "http://twitter.com/{from_user}",
		maxResults: 5
	},

	processResponse: function(response, query, sidebar) {
		var tweets = eval("(" + response.responseText + ")");

		if (tweets.results.length) {
			var container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);

			tweets.results.forEach(function(tweet) {
				this.renderItem(tweet).inject(container);
			}.bind(this));
		}
	},

	renderItem: function(tweet) {
		var container = new Element("div").set("class", "tweet");

		var profileUrl = this.options.userProfileUrl.substitute(tweet),
			profileLink = new Element("a").set("class", "thumbLink").set("href", profileUrl);

		new Element("img")
			.set("src", tweet.profile_image_url)
			.inject(profileLink)
			.getParent().inject(container);

		var text = "<strong>{from_user}:</strong> {text}".substitute(tweet),
			textContent = new Element("div").set("html", text).set("class", "textContent").inject(container);

		new Element('div').setStyle('clear', 'both').inject(container);

		return container;
	},

	getStyles: function() {
		return [
			".tweet { margin-bottom: 8px; }",
			".tweet img { max-width: 48px; }",
			".thumbLink { float: left; }",
			".thumbLink img { border: 0 }",
			".textContent { margin-left: 53px; }"
		];
	}
});


/******************************************************************************
 * Scribd                                                                     *
 ******************************************************************************/

var ScribdSearch = new Class({
	Extends: BaseService,

	options: {
		id: "scribd",
		label: "Scribd",
		url: "http://api.scribd.com/api?method=docs.search&api_key={apiKey}&query={query}&scope=all&num_results={maxResults}",
		webUrl: "http://www.scribd.com/search?cat=google&cof=FORID%3A10&cx=007890693382555206581%3A7fgc6et2hmk&ie=UTF-8&q={query}&sq=Search#1112",
		docUrl: "http://www.scribd.com/doc/{doc_id}",
		apiKey: "23wzsmvao1fi1xjpq8dfl",
		maxDescriptionLength: 200,
		maxResults: 3
	},

	processResponse: function(response, query, sidebar) {
		// no responseXML in GM :-(
		var parser = new DOMParser();
			xmlDoc = parser.parseFromString(response.responseText, "text/xml");

		var results = xmlDoc.querySelectorAll("result");

		if (results.length) {
			var fields = ["doc_id", "title", "description", "thumbnail_url"],
				container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);

			Array.prototype.slice.call(results).forEach(function(result) {
				var data = {};
				fields.forEach(function(tagName) {
					data[tagName] = result.querySelector(tagName).textContent.trim();
				});
				this.renderItem(data).inject(container);
			}.bind(this));
		}
	},

	renderItem: function(item) {
		var container = new Element("div").set("class", "resultItem"),
			docUrl = this.options.docUrl.substitute(item);

		var thumbnail = new Element("img").set("src", item['thumbnail_url']);
		new Element("a").set("href", docUrl).set("class", "thumbLink").adopt(thumbnail).inject(container);

		var textContent = new Element("div").set("class", "textContent"),
			link = new Element("a").set("href", docUrl).set("html", item['title']),
			description = item['description'].truncate(this.options.maxDescriptionLength);
		new Element("h2").adopt(link).inject(textContent);
		new Element("div").set("html", description).inject(textContent);

		textContent.inject(container);

		new Element('div').setStyle('clear', 'both').inject(container);

		return container;
	},

	getStyles: function() {
		return [
			".resultItem { margin-bottom: 8px }",
			".thumbLink { text-align: center; float: left; }",
			".thumbLink img { border: 0; max-width: 100px; }",
			".textContent { margin-left: 105px; }"
		];
	}
});


/******************************************************************************
 * Digg                                                                       *
 ******************************************************************************/

var DiggSearch = new Class({
	Extends: BaseService,

	options: {
		id: "digg",
		label: "Digg",
		url: "http://services.digg.com/1.0/endpoint?method=search.stories&query={query}&count={maxResults}&type=json",
		webUrl: "http://digg.com/search?s={query}",
		maxResults: 3,
		maxDescriptionLen: 200
	},

	processResponse: function(response, query, sidebar) {
		var results = eval("(" + response.responseText + ")");

		if (results.stories.length) {
			var container = sidebar.getServiceContainer(this);
			this.refreshHeader(container, query);

			results.stories.forEach(function(story) {
				this.renderItem(story).inject(container);
			}.bind(this));
		}
	},

	renderItem: function(story) {
		var container = new Element("div").set("class", "diggStory");

		var textContent = new Element("div").set("class", "textContent");
		new Element("a").set("href", story.href).set("html", story.title).inject(textContent);
		new Element("p").set("html", story.description.truncate(this.options.maxDescriptionLen)).inject(textContent);

		new Element('div').setStyle('clear', 'both').inject(container);

		textContent.inject(container);

		return container;
	},

	getStyles: function() {
		return [
			".diggStory { margin-bottom: 8px; }"
		];
	}
});


/******************************************************************************
 * A template for custom services                                             *
 ******************************************************************************/

var ServiceTemplate = new Class({
	Extends: BaseService,

	options: {
		id: "",
		label: "",
		url: "",
		webUrl: ""
	},

	processResponse: function(response, query, sidebar) {

	},

	renderItem: function(item) {

	}
});

$(window).addEvent("domready", function() {
	sidebar = new Sidebar();
	if (!sidebar.isSaneEnvironment()) {
		console.log("not sane");
		return;
	}

	sidebar.registerService(new FlickrSearch());
	sidebar.registerService(new DictionaryComSearch());
	sidebar.registerService(new YouTubeSearch());
	sidebar.registerService(new WikipediaSearch());
	sidebar.registerService(new SlideShareSearch());
	sidebar.registerService(new TwitterSearch());
	sidebar.registerService(new ScribdSearch());
	sidebar.registerService(new DiggSearch());

	var sm = new SettingsManager(sidebar),
		sd = new SettingsDialog(sidebar, sm);

	sd.addEvent("save", sm.onSettingsChanged.bind(sm));

	GM_registerMenuCommand("Configure Google Sidebar", sd.show.bind(sd));

	sidebar.setSettingsManager(sm);
	sidebar.setSettingsDialog(sd);

	sidebar.query();
})();