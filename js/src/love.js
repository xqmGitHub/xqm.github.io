!function(e,o){var n,a=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(t){var n=o.createElement("style");n.type="text/css";try{n.appendChild(o.createTextNode(t))}catch(e){n.styleSheet.cssText=t}o.getElementsByTagName("head")[0].appendChild(n)}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),n="function"==typeof e.onclick&&e.onclick,e.onclick=function(e){var t;n&&n(),t=e,(e=o.createElement("div")).className="heart",a.push({el:e,x:t.clientX-5,y:t.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),o.body.appendChild(e)},function e(){for(var t=0;t<a.length;t++)a[t].alpha<=0?(o.body.removeChild(a[t].el),a.splice(t,1)):(a[t].y--,a[t].scale+=.004,a[t].alpha-=.013,a[t].el.style.cssText="left:"+a[t].x+"px;top:"+a[t].y+"px;opacity:"+a[t].alpha+";transform:scale("+a[t].scale+","+a[t].scale+") rotate(45deg);background:"+a[t].color+";z-index:99999");requestAnimationFrame(e)}()}(window,document),function(){var e,t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?(document.title="ฅ( •̀ .̫ •́ )ฅ 我藏起来了！",clearTimeout(e)):(document.title="(●'◡'●)被发现了!",e=setTimeout(function(){document.title=t},1e3))}),console.clear(),console.log("%c又特么来偷我代码？","background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:2em;")}();var bar=1,line="|||||||||",amount="|";function count(){bar+=9,amount+=line,document.getElementById("chart").value=amount,document.getElementById("percent").value=bar+"%",bar<99?setTimeout("count()",100):$("#loading-wrap").fadeOut(500)}function go_high(){var e,t=["https://m7.music.126.net/20190410144840/5e92e5f61ae1ae183b27aa276782c68a/ymusic/035f/0659/0653/457d7520ab133721525719042895f037.mp3","https://m7.music.126.net/20190410145100/7724df29ab28e76d4932d857dc2a826b/ymusic/5ad8/3666/012a/91e5524b201c66380f2c385fc2200122.mp3",""];function n(e){e={height:(e=e).offsetHeight,width:e.offsetWidth};return l<e.height&&e.height<m&&s<e.width&&e.width<u}function o(){for(var e=document.getElementsByClassName(p),t=new RegExp("\\b"+p+"\\b");0<e.length;)e[0].className=e[0].className.replace(t,"")}null===(e=document.getElementById("audio_element_id"))&&((e=document.createElement("audio")).setAttribute("class",w),e.setAttribute("curSongIndex",0),e.id="audio_element_id",e.loop=!1,e.bgcolor=0,e.addEventListener("canplay",function(){setTimeout(function(){E.className+=" "+p+" "+g},500),setTimeout(function(){var e;o(),(e=document.createElement("div")).setAttribute("class",y),document.body.appendChild(e),setTimeout(function(){document.body.removeChild(e)},100);for(var t=0;t<T.length;t++)T[t].className+=" "+p+" "+b[Math.floor(Math.random()*b.length)]},15500)},!0),e.addEventListener("ended",function(){o(),function(){for(var e=document.getElementsByClassName(w),t=0;t<e.length;t++)document.body.removeChild(e[t])}(),go()},!0),e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>",document.body.appendChild(e));for(var a,i,r,d,c,l=30,s=30,m=350,u=350,h=parseInt(document.getElementById("audio_element_id").getAttribute("curSongIndex")),f=t[h],p="mw-harlem_shake_me",g="im_first",b=["im_drunk","im_baked","im_trippin","im_blown"],y="mw-strobe_light",w="mw_added_css",v=(a=document.documentElement,window.innerWidth?window.innerHeight:a&&!isNaN(a.clientHeight)?a.clientHeight:0),x=window.pageYOffset||Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=document.getElementsByTagName("*"),E=null,_=0;_<k.length;_++){var A=k[_];if(n(A)&&(i=function(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}(i=A),x<=i&&i<=v+x)){E=A;break}}if(null!==A){(r=document.createElement("link")).setAttribute("type","text/css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href","//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css"),r.setAttribute("class",w),document.body.appendChild(r),null!=(c=document.getElementById("audio_element_id"))&&(d=parseInt(c.getAttribute("curSongIndex")),t.length-2<d?d=0:d++,c.setAttribute("curSongIndex",d),o()),c.src=f,c.play();for(var T=[],_=0;_<k.length;_++)n(A=k[_])&&T.push(A)}else console.warn("Could not find a node of the right size. Please try a different page.")}count();