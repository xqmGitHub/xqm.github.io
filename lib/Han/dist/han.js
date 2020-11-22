!function(e,n){"object"==typeof module&&"object"==typeof module.exports?module.exports=n(e,!0):"function"==typeof define&&define.amd?define(function(){return n(e,!0)}):n(e)}("undefined"!=typeof window?window:this,function(s,e){"use strict";var i=s.document,c=i.documentElement,d=i.body,n="3.3.0",a=function(e,n){return new a.fn.init(e,n)};a.version=n,a.fn=a.prototype={version:n,constructor:a,context:d,condition:c,routine:["initCond","renderElem","renderJiya","renderHanging","correctBiaodian","renderHWS","substCombLigaWithPUA"],init:function(){return arguments[0]&&(this.context=arguments[0]),arguments[1]&&(this.condition=arguments[1]),this},setRoutine:function(e){return Array.isArray(e)&&(this.routine=e),this},render:function(e){var n=this;return(e=Array.isArray(e)?e:this.routine).forEach(function(e){"string"==typeof e&&"function"==typeof n[e]?n[e]():Array.isArray(e)&&"function"==typeof n[e[0]]&&n[e.shift()].apply(n,e)}),this}},a.fn.init.prototype=a.fn,a.init=function(){return a.init=a().render()};var t,r,o,u,l,h,p,f,g,b,m,v,y,x,E,w,C,N,T,S,L,z,k={punct:{base:"[…,.;:!?‽_]",sing:"[‐-—…]",middle:"[\\/~\\-&‐-—_]",open:"['\"‘“\\(\\[¡¿⸘«‹‚“„]",close:"['\"”’\\)\\]»›‛”‟]",end:"['\"”’\\)\\]»›‛”‟‼‽⁇-⁉,.;:!?]"},biaodian:{base:"[︰．、，。：；？！ー]",liga:"[—…⋯]",middle:"[·＼／－゠＆・＿]",open:"[「『《〈（〔［｛【〖]",close:"[」』》〉）〕］｝】〗]",end:"[」』》〉）〕］｝】〗︰．、，。：；？！ー]"},hanzi:{base:"[一-鿿㐀-䶵㇀-㇣〇﨎﨏﨑﨓﨔﨟﨡﨣﨤﨧-﨩]|[\ud800-\udbff][\udc00-\udfff]",desc:"[⿰-⿺]",radical:"[⼀-⿕⺀-⻳]"},latin:{base:"[A-Za-z0-9À-ÿĀ-ſƀ-ɏⱠ-Ɀ꜠-ꟿḀ-ỿ]",combine:"[̀-́᷀-᷿]"},ellinika:{base:"[0-9Ͱ-Ͽἀ-῿]",combine:"[̀-᷀ͅ-᷿]"},kirillica:{base:"[0-9Ѐ-҂Ҋ-ӿԀ-ԯꙀ-ꙮ꙾-ꚗ]",combine:"[҃-҉ⷠ-ⷿ꙯-꙽ꚟ]"},kana:{base:"[アイウエオ-ヺあいうえお-ゔゟヿ]|\ud82c[\udc00-\udc01]",small:"[ぁぃぅぇぉァィゥェォっゃゅょゎゕゖッャュョヮヵヶㇰ-ㇿ]",combine:"[゙-゜]",half:"[ｦ-ﾟ]",mark:"[゠ゝゞ・-ヾ]"},eonmun:{base:"[가-힣]",letter:"[ᄀ-ᇿㅏ-ㅣㄱ-ㆎꥠ-ꥼힰ-ퟻ]",half:"[ﾡ-ￜ]"},zhuyin:{base:"[ㄅ-ㄭㆠ-ㆺ]",initial:"[ㄅ-ㄙㄪ-ㄬㆠ-ㆣ]",medial:"[ㄧ-ㄩ]",final:"[ㄚ-ㄩㄭㆤ-ㆳㆸ-ㆺ]",tone:"[˙ˊ˅ˇˋ˪˫]",checked:"[ㆴ-ㆷ][̍͘]?"}},I=(W="[\\x20\\t\\r\\n\\f]",t=k.punct.open,k.punct.close,H=k.punct.end,r=k.punct.middle,o=k.punct.sing,u=t+"|"+H+"|"+r,l=k.biaodian.open,h=k.biaodian.close,p=k.biaodian.end,f=k.biaodian.middle,g=k.biaodian.liga+"{2}",b=l+"|"+p+"|"+f,m=k.kana.base+k.kana.combine+"?",v=k.kana.small+k.kana.combine+"?",y=k.kana.half,x=k.eonmun.base+"|"+k.eonmun.letter,E=k.eonmun.half,_=k.hanzi.base+"|"+k.hanzi.desc+"|"+k.hanzi.radical+"|"+m,w=k.ellinika.combine,C=k.latin.base+w+"*",N=k.ellinika.base+w+"*",T=k.kirillica.combine,S=k.kirillica.base+T+"*",z=_+"|(?:"+(L=C+"|"+N+"|"+S)+"|['’])+",n=k.zhuyin.initial,r=k.zhuyin.medial,w=k.zhuyin.final,T=k.zhuyin.tone+"|"+k.zhuyin.checked,{char:{punct:{all:new RegExp("("+u+")","g"),open:new RegExp("("+t+")","g"),end:new RegExp("("+H+")","g"),sing:new RegExp("("+o+")","g")},biaodian:{all:new RegExp("("+b+")","g"),open:new RegExp("("+l+")","g"),close:new RegExp("("+h+")","g"),end:new RegExp("("+p+")","g"),liga:new RegExp("("+g+")","g")},hanzi:new RegExp("("+_+")","g"),latin:new RegExp("("+C+")","ig"),ellinika:new RegExp("("+N+")","ig"),kirillica:new RegExp("("+S+")","ig"),kana:new RegExp("("+m+"|"+v+"|"+y+")","g"),eonmun:new RegExp("("+x+"|"+E+")","g")},group:{biaodian:[new RegExp("(("+b+"){2,})","g"),new RegExp("("+g+l+")","g")],punct:null,hanzi:new RegExp("("+_+")+","g"),western:new RegExp("("+C+"|"+N+"|"+S+"|"+u+")+","ig"),kana:new RegExp("("+m+"|"+v+"|"+y+")+","g"),eonmun:new RegExp("("+x+"|"+E+"|"+u+")+","g")},jinze:{hanging:new RegExp(W+"*([、，。．])(?!"+p+")","ig"),touwei:new RegExp("("+l+"+)("+z+")("+p+"+)","ig"),tou:new RegExp("("+l+"+)("+z+")","ig"),wei:new RegExp("("+z+")("+p+"+)","ig"),middle:new RegExp("("+z+")("+f+")("+z+")","ig")},zhuyin:{form:new RegExp("^˙?("+n+")?("+r+")?("+w+")?("+T+")?$"),diao:new RegExp("("+T+")","g")},hws:{base:[new RegExp("("+_+")("+L+"|"+t+")","ig"),new RegExp("("+L+"|"+H+")("+_+")","ig")],strict:[new RegExp("("+_+")"+W+"?("+L+"|"+t+")","ig"),new RegExp("("+L+"|"+H+")"+W+"?("+_+")","ig")]},"display-as":{"ja-font-for-hant":["查 査","啟 啓","鄉 鄕","值 値","污 汚"],"comb-liga-pua":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"],["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]],"comb-liga-vowel":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"]],"comb-liga-zhuyin":[["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]]},"inaccurate-char":[["[•‧]","·"],["⋯⋯","……"],["──","——"],["‵","‘"],["′","’"],["‶","“"],["″","”"]]});a.UNICODE=k,a.TYPESET=I,a.UNICODE.cjk=a.UNICODE.hanzi,a.UNICODE.greek=a.UNICODE.ellinika,a.UNICODE.cyrillic=a.UNICODE.kirillica,a.UNICODE.hangul=a.UNICODE.eonmun,a.UNICODE.zhuyin.ruyun=a.UNICODE.zhuyin.checked,a.TYPESET.char.cjk=a.TYPESET.char.hanzi,a.TYPESET.char.greek=a.TYPESET.char.ellinika,a.TYPESET.char.cyrillic=a.TYPESET.char.kirillica,a.TYPESET.char.hangul=a.TYPESET.char.eonmun,a.TYPESET.group.hangul=a.TYPESET.group.eonmun,a.TYPESET.group.cjk=a.TYPESET.group.hanzi;var M,R,j,A={id:function(e,n){return(n||i).getElementById(e)},tag:function(e,n){return this.makeArray((n||i).getElementsByTagName(e))},qs:function(e,n){return(n||i).querySelector(e)},qsa:function(e,n){return this.makeArray((n||i).querySelectorAll(e))},parent:function(e,n){return n?function(){if("function"==typeof A.matches){for(;!A.matches(e,n);){if(!e||e===i.documentElement){e=void 0;break}e=e.parentNode}return e}}():e?e.parentNode:void 0},create:function(e,n){var t="!"===e?i.createDocumentFragment():""===e?i.createTextNode(n||""):i.createElement(e);try{n&&(t.className=n)}catch(e){}return t},clone:function(e,n){return e.cloneNode("boolean"!=typeof n||n)},remove:function(e){return e.parentNode.removeChild(e)},setAttr:function(e,n){if("object"==typeof n){var t=n.length;if("object"==typeof n[0]&&"name"in n[0])for(var i=0;i<t;i++)void 0!==n[i].value&&e.setAttribute(n[i].name,n[i].value);else for(var r in n)n.hasOwnProperty(r)&&void 0!==n[r]&&e.setAttribute(r,n[r]);return e}},isElmt:function(e){return e&&e.nodeType===Node.ELEMENT_NODE},isIgnorable:function(e){return!!e&&("WBR"===e.nodeName||e.nodeType===Node.COMMENT_NODE)},makeArray:function(e){return Array.prototype.slice.call(e)},extend:function(e,n){if(("object"==typeof e||"function"==typeof e)&&"object"==typeof n)for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}},H=function(i){var t=i.NON_INLINE_PROSE,r=i.PRESETS.prose.filterElements,a=(s||{}).document||void 0;function o(e,n,t){var i=Element.prototype,i=i.matches||i.mozMatchesSelector||i.msMatchesSelector||i.webkitMatchesSelector;return e instanceof Element?i.call(e,n):!(!t||!/^[39]$/.test(e.nodeType))}if(void 0===a)throw new Error("Fibre requires a DOM-supported environment.");var c=function(e,n){return new c.fn.init(e,n)};return c.version="0.2.1",c.matches=o,c.fn=c.prototype={constructor:c,version:"0.2.1",finder:[],context:void 0,portionMode:"retain",selector:{},preset:"prose",init:function(e,n){if(n&&(this.preset=null),this.selector={context:null,filter:[],avoid:[],boundary:[]},!e)throw new Error("A context is required for Fibre to initialise.");return e instanceof Node?e instanceof Document?this.context=e.body||e:this.context=e:"string"==typeof e&&(this.context=a.querySelector(e),this.selector.context=e),this},filterFn:function(e){var n=this.selector.filter.join(", ")||"*",t=this.selector.avoid.join(", ")||null,t=o(e,n,!0)&&!o(e,t);return("prose"!==this.preset||r(e))&&t},boundaryFn:function(e){var n=o(e,this.selector.boundary.join(", ")||null);return"prose"===this.preset&&t(e)||n},filter:function(e){return"string"==typeof e&&this.selector.filter.push(e),this},endFilter:function(e){return e?this.selector.filter=[]:this.selector.filter.pop(),this},avoid:function(e){return"string"==typeof e&&this.selector.avoid.push(e),this},endAvoid:function(e){return e?this.selector.avoid=[]:this.selector.avoid.pop(),this},addBoundary:function(e){return"string"==typeof e&&this.selector.boundary.push(e),this},removeBoundary:function(){return this.selector.boundary=[],this},setMode:function(e){return this.portionMode="first"===e?"first":"retain",this},replace:function(e,n){var t=this;return t.finder.push(i(t.context,{find:e,replace:n,filterElements:function(e){return t.filterFn(e)},forceContext:function(e){return t.boundaryFn(e)},portionMode:t.portionMode})),t},wrap:function(e,n){var t=this;return t.finder.push(i(t.context,{find:e,wrap:n,filterElements:function(e){return t.filterFn(e)},forceContext:function(e){return t.boundaryFn(e)},portionMode:t.portionMode})),t},revert:function(e){var n=this.finder.length,e=Number(e)||(0===e?Number(0):"all"===e?n:1);if(void 0===n||0===n)return this;n<e&&(e=n);for(var t=e;0<t;t--)this.finder.pop().revert();return this}},c.fn.filterOut=c.fn.avoid,c.fn.init.prototype=c.fn,c}((M="retain",R=i,j={}.hasOwnProperty,P.NON_PROSE_ELEMENTS={br:1,hr:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1},P.NON_CONTIGUOUS_PROSE_ELEMENTS={address:1,article:1,aside:1,blockquote:1,dd:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,nav:1,noscript:1,ol:1,output:1,p:1,pre:1,section:1,ul:1,br:1,li:1,summary:1,dt:1,details:1,rp:1,rt:1,rtc:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1,table:1,tbody:1,thead:1,th:1,tr:1,td:1,caption:1,col:1,tfoot:1,colgroup:1},P.PRESETS={prose:{forceContext:P.NON_INLINE_PROSE=function(e){return j.call(P.NON_CONTIGUOUS_PROSE_ELEMENTS,e.nodeName.toLowerCase())},filterElements:function(e){return!j.call(P.NON_PROSE_ELEMENTS,e.nodeName.toLowerCase())}}},(P.Finder=B).prototype={search:function(){var a,o=0,c=0,s=this.options.find,e=this.getAggregateText(),d=[],u=this;return s="string"==typeof s?RegExp(String(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"):s,function e(n){for(var t=0,i=n.length;t<i;++t){var r=n[t];if("string"==typeof r){if(s.global)for(;a=s.exec(r);)d.push(u.prepMatch(a,o++,c));else(a=r.match(s))&&d.push(u.prepMatch(a,0,c));c+=r.length}else e(r)}}(e),d},prepMatch:function(e,n,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return e.endIndex=t+e.index+e[0].length,e.startIndex=t+e.index,e.index=n,e},getAggregateText:function(){var a=this.options.filterElements,o=this.options.forceContext;return function e(n,t){if(3===n.nodeType)return[n.data];if(a&&!a(n))return[];var t=[""];var i=0;if(n=n.firstChild)do{var r;3!==n.nodeType?(r=e(n),o&&1===n.nodeType&&(!0===o||o(n))?(t[++i]=r,t[++i]=""):("string"==typeof r[0]&&(t[i]+=r.shift()),r.length&&(t[++i]=r,t[++i]=""))):t[i]+=n.data}while(n=n.nextSibling);return t}(this.node)},processMatches:function(){var e,n,t,i=this.matches,r=this.node,a=this.options.filterElements,o=[],c=r,s=i.shift(),d=0,u=0,l=[r];e:for(;;){if(3===c.nodeType&&(!n&&c.length+d>=s.endIndex?n={node:c,index:u++,text:c.data.substring(s.startIndex-d,s.endIndex-d),indexInMatch:d-s.startIndex,indexInNode:s.startIndex-d,endIndexInNode:s.endIndex-d,isEnd:!0}:e&&o.push({node:c,index:u++,text:c.data,indexInMatch:d-s.startIndex,indexInNode:0}),!e&&c.length+d>s.startIndex&&(e={node:c,index:u++,indexInMatch:0,indexInNode:s.startIndex-d,endIndexInNode:s.endIndex-d,text:c.data.substring(s.startIndex-d,s.endIndex-d)}),d+=c.data.length),t=1===c.nodeType&&a&&!a(c),e&&n){if(c=this.replaceMatch(s,e,o,n),d-=n.node.data.length-n.endIndexInNode,n=e=null,o=[],u=0,!(s=i.shift()))break}else if(!t&&(c.firstChild||c.nextSibling)){c=c.firstChild?(l.push(c),c.firstChild):c.nextSibling;continue}for(;;){if(c.nextSibling){c=c.nextSibling;break}if((c=l.pop())===r)break e}}},revert:function(){for(var e=this.reverts.length;e--;)this.reverts[e]();this.reverts=[]},prepareReplacementString:function(e,n,i,t){var r=this.options.portionMode;return"first"===r&&0<n.indexInMatch?"":(e=e.replace(/\$(\d+|&|`|')/g,function(e,n){var t;switch(n){case"&":t=i[0];break;case"`":t=i.input.substring(0,i.startIndex);break;case"'":t=i.input.substring(i.endIndex);break;default:t=i[+n]}return t}),"first"===r?e:n.isEnd?e.substring(n.indexInMatch):e.substring(n.indexInMatch,n.indexInMatch+n.text.length))},getPortionReplacementNode:function(e,n,t){var i,r=this.options.replace||"$&",a=this.options.wrap;if(a&&a.nodeType&&((i=R.createElement("div")).innerHTML=a.outerHTML||(new XMLSerializer).serializeToString(a),a=i.firstChild),"function"==typeof r)return(r=r(e,n,t))&&r.nodeType?r:R.createTextNode(String(r));a="string"==typeof a?R.createElement(a):a;return(r=R.createTextNode(this.prepareReplacementString(r,e,n,t))).data&&a?(a.appendChild(r),a):r},replaceMatch:function(e,n,t,i){var r,a,o=n.node,c=i.node;if(o===c){var s=o;0<n.indexInNode&&(r=R.createTextNode(s.data.substring(0,n.indexInNode)),s.parentNode.insertBefore(r,s));var d=this.getPortionReplacementNode(i,e);return s.parentNode.insertBefore(d,s),i.endIndexInNode<s.length&&(a=R.createTextNode(s.data.substring(i.endIndexInNode)),s.parentNode.insertBefore(a,s)),s.parentNode.removeChild(s),this.reverts.push(function(){r===d.previousSibling&&r.parentNode.removeChild(r),a===d.nextSibling&&a.parentNode.removeChild(a),d.parentNode.replaceChild(s,d)}),d}r=R.createTextNode(o.data.substring(0,n.indexInNode)),a=R.createTextNode(c.data.substring(i.endIndexInNode));for(var u=this.getPortionReplacementNode(n,e),l=[],h=0,p=t.length;h<p;++h){var f=t[h],g=this.getPortionReplacementNode(f,e);f.node.parentNode.replaceChild(g,f.node),this.reverts.push(function(e,n){return function(){n.parentNode.replaceChild(e.node,n)}}(f,g)),l.push(g)}var b=this.getPortionReplacementNode(i,e);return o.parentNode.insertBefore(r,o),o.parentNode.insertBefore(u,o),o.parentNode.removeChild(o),c.parentNode.insertBefore(b,c),c.parentNode.insertBefore(a,c),c.parentNode.removeChild(c),this.reverts.push(function(){r.parentNode.removeChild(r),u.parentNode.replaceChild(o,u),a.parentNode.removeChild(a),b.parentNode.replaceChild(c,b)}),b}},P));function P(){return function(e,n,t,i,r){if(n&&!n.nodeType&&arguments.length<=2)return!1;var a="function"==typeof t;a&&(t=function(t){return function(e,n){return t(e.text,n.startIndex)}}(t));var o=O(n,{find:e,wrap:a?null:t,replace:a?t:"$"+(i||"&"),prepMatch:function(e,n){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";var t;return 0<i&&(t=e[i],e.index+=e[0].indexOf(t),e[0]=t),e.endIndex=e.index+e[0].length,e.startIndex=e.index,e.index=n,e},filterElements:r});return P.revert=function(){return o.revert()},!0}.apply(null,arguments)||O.apply(null,arguments)}function O(e,n){return new B(e,n)}function B(e,n){var t=n.preset&&P.PRESETS[n.preset];if(n.portionMode=n.portionMode||M,t)for(var i in t)j.call(t,i)&&!j.call(n,i)&&(n[i]=t[i]);this.node=e,this.options=n,this.prepMatch=n.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}var D=((W=A.create("div")).appendChild(A.create("","0-")),W.appendChild(A.create("","2")),W.normalize(),2!==W.firstChild.length);function F(e){return"function"==typeof e||e instanceof Element?e:void 0}function q(e){var n=0===e.index&&e.isEnd?"biaodian cjk":"biaodian cjk portion "+(0===e.index?"is-first":e.isEnd?"is-end":"is-inner"),n=A.create("h-char-group",n);return n.innerHTML=e.text,n}function U(e){var n=A.create("div"),t=e.charCodeAt(0).toString(16);return n.innerHTML='<h-char unicode="'+t+'" class="biaodian cjk '+((t=e).match(I.char.biaodian.open)?"bd-open":t.match(I.char.biaodian.close)?"bd-close bd-end":t.match(I.char.biaodian.end)?/(?:\u3001|\u3002|\uff0c)/i.test(t)?"bd-end bd-cop":"bd-end":t.match(new RegExp(k.biaodian.liga))?"bd-liga":t.match(new RegExp(k.biaodian.middle))?"bd-middle":"")+'">'+e+"</h-char>",n.firstChild}A.extend(H.fn,{normalize:function(){return D&&this.context.normalize(),this},jinzify:function(e){return this.filter(e||null).avoid("h-jinze").replace(I.jinze.touwei,function(e,n){var t=A.create("h-jinze","touwei");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).replace(I.jinze.wei,function(e,n){var t=A.create("h-jinze","wei");return t.innerHTML=n[0],0===e.index?t:""}).replace(I.jinze.tou,function(e,n){var t=A.create("h-jinze","tou");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).replace(I.jinze.middle,function(e,n){var t=A.create("h-jinze","middle");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).endAvoid().endFilter()},groupify:function(e){e=A.extend({biaodian:!1,hanzi:!1,kana:!1,eonmun:!1,western:!1},e||{});return this.avoid("h-word, h-char-group"),e.biaodian&&this.replace(I.group.biaodian[0],q).replace(I.group.biaodian[1],q),(e.hanzi||e.cjk)&&this.wrap(I.group.hanzi,A.clone(A.create("h-char-group","hanzi cjk"))),e.western&&this.wrap(I.group.western,A.clone(A.create("h-word","western"))),e.kana&&this.wrap(I.group.kana,A.clone(A.create("h-char-group","kana"))),(e.eonmun||e.hangul)&&this.wrap(I.group.eonmun,A.clone(A.create("h-word","eonmun hangul"))),this.endAvoid(),this},charify:function(e){return(e=A.extend({avoid:!0,biaodian:!1,punct:!1,hanzi:!1,latin:!1,ellinika:!1,kirillica:!1,kana:!1,eonmun:!1},e||{})).avoid&&this.avoid("h-char"),e.biaodian&&this.replace(I.char.biaodian.all,F(e.biaodian)||function(e){return U(e.text)}).replace(I.char.biaodian.liga,F(e.biaodian)||function(e){return U(e.text)}),(e.hanzi||e.cjk)&&this.wrap(I.char.hanzi,F(e.hanzi||e.cjk)||A.clone(A.create("h-char","hanzi cjk"))),e.punct&&this.wrap(I.char.punct.all,F(e.punct)||A.clone(A.create("h-char","punct"))),e.latin&&this.wrap(I.char.latin,F(e.latin)||A.clone(A.create("h-char","alphabet latin"))),(e.ellinika||e.greek)&&this.wrap(I.char.ellinika,F(e.ellinika||e.greek)||A.clone(A.create("h-char","alphabet ellinika greek"))),(e.kirillica||e.cyrillic)&&this.wrap(I.char.kirillica,F(e.kirillica||e.cyrillic)||A.clone(A.create("h-char","alphabet kirillica cyrillic"))),e.kana&&this.wrap(I.char.kana,F(e.kana)||A.clone(A.create("h-char","kana"))),(e.eonmun||e.hangul)&&this.wrap(I.char.eonmun,F(e.eonmun||e.hangul)||A.clone(A.create("h-char","eonmun hangul"))),this.endAvoid(),this}}),A.extend(a,{isNodeNormalizeNormal:D,find:H,createBDGroup:q,createBDChar:U}),A.matches=a.find.matches,["setMode","wrap","replace","revert","addBoundary","removeBoundary","avoid","endAvoid","filter","endFilter","jinzify","groupify","charify"].forEach(function(e){a.fn[e]=function(){return this.finder||(this.finder=a.find(this.context)),this.finder[e](arguments[0],arguments[1]),this}});var Y,_,W,V,Z,$,J={};function G(e,n){var t,i=A.create("canvas");return i.width="50",i.height="20",i.style.display="none",d.appendChild(i),(t=i.getContext("2d")).textBaseline="top",t.font="15px "+n+", sans-serif",t.fillStyle="black",t.strokeStyle="black",t.fillText(e,0,0),{node:i,context:t,remove:function(){A.remove(i,d)}}}function K(e,n){var t,i=e.context,r=n.context;try{for(var a=1;a<=20;a++)for(var o=1;o<=50;o++){if(void 0===t&&i.getImageData(o,a,1,1).data[3]!==r.getImageData(o,a,1,1).data[3]){t=!1;break}if("boolean"==typeof t)break;50===o&&20===a&&void 0===t&&(t=!0)}return e.remove(),n.remove(),n=e=null,t}catch(e){}return!1}function Q(e){var n,t=e.charAt(0).toUpperCase()+e.slice(1);return(e+" "+Z.join(t+" ")+t).split(" ").forEach(function(e){"string"==typeof $.style[e]&&(n=!0)}),n||!1}function X(e,n){var t,i=d||A.create("body"),r=A.create("div"),a=d?r:i,n="function"==typeof n?n:function(){},o=["<style>",e,"</style>"].join("");return a.innerHTML+=o,i.appendChild(r),d||(i.style.background="",i.style.overflow="hidden",t=c.style.overflow,c.style.overflow="hidden",c.appendChild(i)),e=n(a,e),A.remove(a),d||(c.style.overflow=t),e}function ee(e,n){var t;return s.getComputedStyle?t=i.defaultView.getComputedStyle(e,null).getPropertyValue(n):e.currentStyle&&(t=e.currentStyle[n]),t}J.writeOnCanvas=G,J.compareCanvases=K,J.detectFont=function(e,n,t){return n=G(t=t||"辭Q",n=n||"sans-serif"),!K(e=G(t,e),n)},J.support=(Z="Webkit Moz ms".split(" "),$=A.create("h-test"),{columnwidth:Q("columnWidth"),fontface:(X('@font-face { font-family: font; src: url("//"); }',function(e,n){e=A.qsa("style",e)[0],e=e.sheet||e.styleSheet,e=e?e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"":"";V=/src/i.test(e)&&0===e.indexOf(n.split(" ")[0])}),V),ruby:(_=A.create("ruby"),W=A.create("rt"),H=A.create("rp"),_.appendChild(H),_.appendChild(W),c.appendChild(_),H="none"===ee(H,"display")||"ruby"===ee(_,"display")&&"ruby-text"===ee(W,"display"),c.removeChild(_),W=_=null,H),"ruby-display":((W=A.create("div")).innerHTML='<h-test-a style="display: ruby;"></h-test-a><h-test-b style="display: ruby-text-container;"></h-test-b>',"ruby"===W.querySelector("h-test-a").style.display&&"ruby-text-container"===W.querySelector("h-test-b").style.display),"ruby-interchar":(H="inter-character",(W=A.create("div")).innerHTML='<h-test style="-moz-ruby-position:'+H+";-ms-ruby-position:"+H+";-webkit-ruby-position:"+H+";ruby-position:"+H+';"></h-test>',(W=W.querySelector("h-test").style).rubyPosition===H||W.WebkitRubyPosition===H||W.MozRubyPosition===H||W.msRubyPosition===H),textemphasis:Q("textEmphasis"),unicoderange:(X('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}',function(){Y=!J.detectFont("test-for-unicode-range",'Arial, "Droid Sans"',"Q")}),Y),writingmode:Q("writingMode")}),J.initCond=function(e){var n,t,e=e||c,i="";for(t in J.support)n=(J.support[t]?"":"no-")+t,e.classList.add(n),i+=n+" ";return i};var ne=J.support["ruby-interchar"];function te(e){var r,n=A.create("!"),a=e.classList;return n.appendChild(A.clone(e)),A.tag("rt",n.firstChild).forEach(function(e){for(var n,t=A.create("!"),i=[];(n=(n||e).previousSibling)&&!n.nodeName.match(/((?:h\-)?r[ubt])/i)&&(t.insertBefore(A.clone(n),t.firstChild),i.push(n),!n.nodeName.match(/((?:h\-)?r[ubt])/i)););r=(a.contains("zhuyin")?se:ce)(t,e);try{e.parentNode.replaceChild(r,e),i.map(A.remove)}catch(e){}}),ae(n)}function ie(e){var n=A.create("!");return n.appendChild(A.clone(e)),A.tag("rt",n.firstChild).forEach(function(e){for(var n,t,i=A.create("!"),r=[];(n=(n||e).previousSibling)&&!n.nodeName.match(/((?:h\-)?r[ubt])/i)&&(i.insertBefore(A.clone(n),i.firstChild),r.push(n),!n.nodeName.match(/((?:h\-)?r[ubt])/i)););(t=A.create("rt")).innerHTML=de(e),e.parentNode.replaceChild(t,e)}),n.firstChild}function re(e){var n,i,s,d,t=A.create("!"),u=e.classList;return t.appendChild(A.clone(e)),n=t.firstChild,i=s=A.tag("rb",n),d=i.length,(e=n.querySelector("rtc.zhuyin"))&&(s=A.tag("rt",e).map(function(e,n){if(i[n]){var t=se(i[n],e);try{i[n].parentNode.replaceChild(t,i[n])}catch(e){}return t}}),A.remove(e),n.setAttribute("rightangle","true")),A.qsa("rtc:not(.zhuyin)",n).forEach(function(e,c){s=A.tag("rt",e).map(function(e,n){var t,i,r=Number(e.getAttribute("rbspan")||1),a=0,o=[];d<r&&(r=d);do{try{t=s.shift(),o.push(t)}catch(e){}}while(void 0!==t&&(a+=Number(t.getAttribute("span")||1))<r);if(r<a){if(1<o.length)return void console.error("An impossible `rbspan` value detected.",ruby);o=A.tag("rb",o[0]),s=o.slice(r).concat(s),o=o.slice(0,r),a=r}i=ce(o,e,{class:u,span:a,order:c});try{o[0].parentNode.replaceChild(i,o.shift()),o.map(A.remove)}catch(e){}return i}),1===c&&n.setAttribute("doubleline","true"),A.remove(e)}),ae(t)}function ae(e){var n=e.firstChild,e=A.create("h-ruby");return e.innerHTML=n.innerHTML,A.setAttr(e,n.attributes),e.normalize(),e}function oe(e){if(!e instanceof Element)return e;var n=e.classList;return n.contains("pinyin")?n.add("romanization"):n.contains("romanization")?n.add("annotation"):n.contains("mps")?n.add("zhuyin"):n.contains("rightangle")&&n.add("complex"),e}function ce(e,n,t){var i=A.create("h-ru"),n=A.clone(n);return(t=t||{}).annotation="true",Array.isArray(e)?i.innerHTML=e.map(function(e){return void 0===e?"":e.outerHTML}).join("")+n.outerHTML:(i.appendChild(A.clone(e)),i.appendChild(n)),A.setAttr(i,t),i}function se(e,n){var e=A.clone(e),t=A.create("h-ru");return t.setAttribute("zhuyin",!0),t.appendChild(e),t.innerHTML+=de(n),t}function de(e){var n="string"==typeof e?e:e.textContent,t=n.replace(I.zhuyin.diao,""),e=t?t.length:0,n=n.replace(t,"").replace(/[\u02C5]/g,"ˇ").replace(/[\u030D]/g,"͘");return 0===e?"":'<h-zhuyin length="'+e+'" diao="'+n+'"><h-yin>'+t+"</h-yin><h-diao>"+n+"</h-diao></h-zhuyin>"}A.extend(J,{renderRuby:function(e,n){n=n||"ruby",n=A.qsa(n,e);A.qsa("rtc",e).concat(n).map(oe),n.forEach(function(e){var n,t=e.classList;t.contains("complex")?n=re(e):t.contains("zhuyin")&&(n=(ne?ie:te)(e)),n&&e.parentNode.replaceChild(n,e)})},simplifyRubyClass:oe,getZhuyinHTML:de,renderComplexRuby:re,renderSimpleRuby:te,renderInterCharRuby:ie}),A.extend(J,{renderElem:function(e){this.renderRuby(e),this.renderDecoLine(e),this.renderDecoLine(e,"s, del"),this.renderEm(e)},renderDecoLine:function(e,n){var t=A.qsa(n||"u, ins",e),i=t.length;e:for(;i--;){var r=t[i],a=null;do{if(!(a=(a||r).previousSibling))continue e}while(t[i-1]===a&&r.classList.add("adjacent"),A.isIgnorable(a))}},renderEm:function(e,n){var t=n?"qsa":"tag",n=n||"em";A[t](n,e).forEach(function(e){e=a(e);J.support.textemphasis?e.avoid("rt, h-char").charify({biaodian:!0,punct:!0}):e.avoid("rt, h-char, h-char-group").jinzify().groupify({western:!0}).charify({hanzi:!0,biaodian:!0,punct:!0,latin:!0,ellinika:!0,kirillica:!0})})}}),a.normalize=J,a.localize=J,a.support=J.support,a.detectFont=J.detectFont,a.fn.initCond=function(){return this.condition.classList.add("han-js-rendered"),a.normalize.initCond(this.condition),this},["Elem","DecoLine","Em","Ruby"].forEach(function(e){var n="render"+e;a.fn[n]=function(e){return a.normalize[n](this.context,e),this}}),A.extend(a.support,{heiti:!0,songti:a.detectFont('"Han Songti"'),"songti-gb":a.detectFont('"Han Songti GB"'),kaiti:a.detectFont('"Han Kaiti"'),fangsong:a.detectFont('"Han Fangsong"')}),a.correctBiaodian=function(e){e=e||i,e=a.find(e);return e.avoid("h-char").replace(/([‘“])/g,function(e){e=a.createBDChar(e.text);return e.classList.add("bd-open","punct"),e}).replace(/([’”])/g,function(e){e=a.createBDChar(e.text);return e.classList.add("bd-close","bd-end","punct"),e}),a.support.unicoderange?e:e.charify({biaodian:!0})},a.correctBasicBD=a.correctBiaodian,a.correctBD=a.correctBiaodian,A.extend(a.fn,{biaodian:null,correctBiaodian:function(){return this.biaodian=a.correctBiaodian(this.context),this},revertCorrectedBiaodian:function(){try{this.biaodian.revert("all")}catch(e){}return this}}),a.fn.correctBasicBD=a.fn.correctBiaodian,a.fn.revertBasicBD=a.fn.revertCorrectedBiaodian;var ue,le="<<hws>>",he=A.create("h-hws");function pe(e,n){return e.isEnd&&0===e.index?n[1]+le+n[2]:0===e.index?function(e,n){var t,i,r=e,n=n||"";if(A.isElmt(e.nextSibling)||(i=(t=e).nextSibling,t&&i&&t.parentNode===i.parentNode))return n+le;for(;!r.nextSibling;)r=r.parentNode;return e!==r&&r.insertAdjacentHTML("afterEnd","<h-hws hidden> </h-hws>"),n}(e.node,e.text):e.text}function fe(e){return 0===e.index?A.clone(he):""}function ge(e){var n=e.node.parentNode;return 0===e.index&&(ue=e.endIndexInNode-2),"h-hws"!==n.nodeName.toLowerCase()||1!==e.index&&e.indexInMatch!==ue||n.classList.add("quote-inner"),e.text}function be(e){var n=e.node.parentNode;return"h-hws"===n.nodeName.toLowerCase()&&n.classList.add("quote-outer"),e.text}he.setAttribute("hidden",""),he.innerHTML=" ",A.extend(a,{renderHWS:function(e,n){var t=n?"textarea, code, kbd, samp, pre":"textarea",n=n?"strict":"base",e=e||i,e=a.find(e);return e.avoid(t).replace(a.TYPESET.hws[n][0],pe).replace(a.TYPESET.hws[n][1],pe).replace(new RegExp("("+le+")+","g"),fe).replace(/([\'"])\s(.+?)\s\1/g,ge).replace(/\s[‘“]/g,be).replace(/[’”]\s/g,be).normalize(),e}}),A.extend(a.fn,{renderHWS:function(e){return a.renderHWS(this.context,e),this},revertHWS:function(){return A.tag("h-hws",this.context).forEach(function(e){A.remove(e)}),this.HWS=[],this}});var me="bd-hangable",ve=a.find.matches;function ye(){var e,n=A.create("div");return n.innerHTML="<span>a b</span><span style=\"font-family: 'Han Space'\">a b</span>",d.appendChild(n),e=n.firstChild.offsetWidth!==n.lastChild.offsetWidth,A.remove(n),e}a.support["han-space"]=ye(),A.extend(a,{detectSpaceFont:ye,isSpaceFontLoaded:ye(),renderHanging:function(e){e=e||i,e=a.find(e);return e.avoid("textarea, code, kbd, samp, pre").avoid("h-char.bd-hangable").replace(I.jinze.hanging,function(e){if(/^[\x20\t\r\n\f]+$/.test(e.text))return"";var n,t,i,r=e.node.parentNode;return(n=A.parent(r,"h-jinze"))&&((i=(t=n).nextSibling)&&ve(i,"h-cs.jinze-outer")?i.classList.add("hangable-outer"):t.insertAdjacentHTML("afterend",'<h-cs hidden class="jinze-outer hangable-outer"> </h-cs>')),i=e.text.trim(),(t=a.createBDChar(i)).innerHTML="<h-inner>"+i+"</h-inner>",t.classList.add(me),(e=A.parent(r,"h-char.biaodian"))?(e.classList.add(me),ve(r,"h-inner, h-inner *")?i:t.firstChild):t}),e}}),A.extend(a.fn,{renderHanging:function(){var e=this.condition.classList;return a.isSpaceFontLoaded=ye(),a.isSpaceFontLoaded&&e.contains("no-han-space")&&(e.remove("no-han-space"),e.add("han-space")),a.renderHanging(this.context),this},revertHanging:function(){return A.qsa("h-char.bd-hangable, h-cs.hangable-outer",this.context).forEach(function(e){e=e.classList;e.remove("bd-hangable"),e.remove("hangable-outer")}),this}});var xe,Ee,we="bd-jiya",Ce="bd-consecutive",Ne='<h-cs hidden class="jinze-outer jiya-outer"> </h-cs>',ve=a.find.matches;function Te(e){return e.replace(/(biaodian|cjk|bd-jiya|bd-consecutive|bd-hangable)/gi,"").trim()}function Se(e){var n=e.text,t=e.node.parentNode,i=A.parent(t,"h-char.biaodian"),r=a.createBDChar(n);return r.innerHTML="<h-inner>"+n+"</h-inner>",r.classList.add(we),(e=A.parent(t,"h-jinze"))&&function(e){ve(e,".tou, .touwei")&&!ve(e.previousSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("beforebegin",Ne);ve(e,".wei, .touwei")&&!ve(e.nextSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("afterend",Ne)}(e),i?(i.classList.add(we),ve(t,"h-inner, h-inner *")?n:r.firstChild):r}function Le(e){var n=xe,t=e.node.parentNode,i=A.parent(t,"h-char.biaodian"),r=A.parent(i,"h-jinze"),t=i.classList;return n&&i.setAttribute("prev",n),Ee&&t.contains("bd-open")&&Ee.pop().setAttribute("next","bd-open"),Ee=void 0,e.isEnd?(xe=void 0,t.add(Ce,"end-portion")):(xe=Te(i.getAttribute("class")),t.add(Ce)),r&&(Ee=function(e,n){var t,i;ve(e,".tou, .touwei")&&(t=e.previousSibling,ve(t,"h-cs")&&(t.className="jinze-outer jiya-outer",t.setAttribute("prev",n.prev)));ve(e,".wei, .touwei")&&(i=e.nextSibling,ve(i,"h-cs")&&(i.className="jinze-outer jiya-outer "+n.class,i.removeAttribute("prev")));return[t,i]}(r,{prev:n,class:Te(i.getAttribute("class"))})),e.text}a.renderJiya=function(e){e=e||i,e=a.find(e);return e.avoid("textarea, code, kbd, samp, pre, h-cs").avoid("h-char.bd-jiya").charify({avoid:!1,biaodian:Se}).endAvoid().avoid("textarea, code, kbd, samp, pre, h-cs").replace(I.group.biaodian[0],Le).replace(I.group.biaodian[1],Le),e},A.extend(a.fn,{renderJiya:function(){return a.renderJiya(this.context),this},revertJiya:function(){return A.qsa("h-char.bd-jiya, h-cs.jiya-outer",this.context).forEach(function(e){e=e.classList;e.remove("bd-jiya"),e.remove("jiya-outer")}),this}});var ze="textarea, code, kbd, samp, pre";function ke(t,i,r){return function(){var e=a.localize.writeOnCanvas(i,t),n=a.localize.writeOnCanvas(r,t);return a.localize.compareCanvases(e,n)}}function Ie(){return ke('"Romanization Sans"',"i̍","󰁩")}function Me(t){return function(e){var e=e||i,n=a.find(e).avoid(ze);return t.forEach(function(i){n.replace(new RegExp(i[0],"ig"),function(e,n){var t=A.clone(Re);return t.innerHTML="<h-inner>"+n[0]+"</h-inner>",t.setAttribute("display-as",i[1]),0===e.index?t:""})}),n}}var Re=A.create("h-char","comb-liga");return A.extend(a,{isVowelCombLigaNormal:ke('"Romanization Sans"',"a̍","󰁡"),isVowelICombLigaNormal:Ie(),isZhuyinCombLigaNormal:ke('"Zhuyin Kaiti"',"ㆴ͘","󳆴"),isCombLigaNormal:Ie()(),substVowelCombLiga:Me(a.TYPESET["display-as"]["comb-liga-vowel"]),substZhuyinCombLiga:Me(a.TYPESET["display-as"]["comb-liga-zhuyin"]),substCombLigaWithPUA:Me(a.TYPESET["display-as"]["comb-liga-pua"]),substInaccurateChar:function(e){var e=e||i,n=a.find(e);n.avoid(ze),a.TYPESET["inaccurate-char"].forEach(function(e){n.replace(new RegExp(e[0],"ig"),e[1])})}}),A.extend(a.fn,{"comb-liga-vowel":null,"comb-liga-vowel-i":null,"comb-liga-zhuyin":null,"inaccurate-char":null,substVowelCombLiga:function(){return this["comb-liga-vowel"]=a.substVowelCombLiga(this.context),this},substVowelICombLiga:function(){return this["comb-liga-vowel-i"]=a.substVowelICombLiga(this.context),this},substZhuyinCombLiga:function(){return this["comb-liga-zhuyin"]=a.substZhuyinCombLiga(this.context),this},substCombLigaWithPUA:function(){return a.isVowelCombLigaNormal()?a.isVowelICombLigaNormal()||(this["comb-liga-vowel-i"]=a.substVowelICombLiga(this.context)):this["comb-liga-vowel"]=a.substVowelCombLiga(this.context),a.isZhuyinCombLigaNormal()||(this["comb-liga-zhuyin"]=a.substZhuyinCombLiga(this.context)),this},revertVowelCombLiga:function(){try{this["comb-liga-vowel"].revert("all")}catch(e){}return this},revertVowelICombLiga:function(){try{this["comb-liga-vowel-i"].revert("all")}catch(e){}return this},revertZhuyinCombLiga:function(){try{this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},revertCombLigaWithPUA:function(){try{this["comb-liga-vowel"].revert("all"),this["comb-liga-vowel-i"].revert("all"),this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},substInaccurateChar:function(){return this["inaccurate-char"]=a.substInaccurateChar(this.context),this},revertInaccurateChar:function(){try{this["inaccurate-char"].revert("all")}catch(e){}return this}}),s.addEventListener("DOMContentLoaded",function(){var e;c.classList.contains("han-init")?a.init():(e=i.querySelector(".han-init-context"))&&(a.init=a(e).render())}),void 0!==e&&!1!==e||(s.Han=a),a});