window.__tnt||(window.__tnt={}),__tnt.client=function(t,r){return this.obj={},this.obj.userAgent=navigator.userAgent.toLowerCase(),this.obj.browser={name:function(){var n=navigator.userAgent;return n.indexOf("Chrome")!==-1&&n.indexOf("Chromium")==-1&&n.indexOf("OPR")==-1&&n.indexOf("Edge")==-1&&n.indexOf("SamsungBrowser")==-1?"Chrome":n.indexOf("Safari")!==-1&&n.indexOf("Chrome")==-1&&n.indexOf("Chromium")==-1&&n.indexOf("Android")==-1?"Safari":n.indexOf("Firefox")!==-1&&n.indexOf("Seamonkey")==-1?"Firefox":/trident/i.test(n)?"IE":n.indexOf("OPR")!==-1?"Opera":n.indexOf("SamsungBrowser")!==-1?"Samsung Internet":n.indexOf("Edge")!==-1&&n.indexOf("Chrome")!==-1?"Edge":"Other"}()},this.obj.browser.version=function(){if(this.obj.browser.name!="Other"){var n=this.obj.browser.name+"/";if(this.obj.browser.name=="Opera")var n="OPR/";if(this.obj.browser.name=="Safari")var n="Version/";var d=navigator.userAgent.indexOf(n),s=navigator.userAgent.substring(d+n.length),u=s.indexOf(" ");u>0&&(s=s.substring(0,u));var c=s.indexOf(".",2)>0?s.indexOf(".",2):s.indexOf(".",1),m=s.substring(0,c);return Number(m)}}(),this.obj.browser.minimumVersion={Chrome:61,Firefox:60,Safari:11,Edge:79,Opera:48,"Samsung Internet":8.2},this.obj.platform=t["eb.platform"]={win:/win/.test(this.obj.userAgent),mac:/mac/.test(this.obj.userAgent),touchDevice:function(){try{return"ontouchstart"in document.documentElement}catch{return!1}}(),android:this.obj.userAgent.indexOf("android")>-1,ipad:!!(this.obj.userAgent.match(/ipad/i)||/Mac/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2),iphone:!!this.obj.userAgent.match(/iphone/i),ipod:!!this.obj.userAgent.match(/ipod/i),winphone:!!this.obj.userAgent.match(/Windows Phone/i),blackberry:!!this.obj.userAgent.match(/BlackBerry/i),webos:!!this.obj.userAgent.match(/webOS/i)},this.obj.platform.ios=this.obj.platform.ipad||this.obj.platform.ipod||this.obj.platform.iphone,this.obj.touchOnly=this.obj.platform.touchDevice&&(this.obj.platform.android||this.obj.platform.ios||this.obj.platform.winphone||this.obj.platform.blackberry||this.obj.platform.webos||this.obj.platform.silk),this.obj.clickEvent=this.obj.touchOnly?"touchend":"click",this.obj.capabilities={supportsCookies:!!navigator.cookieEnabled,supportsLocalStorage:function(){var n="test";try{return localStorage.setItem(n,n),localStorage.removeItem(n),!0}catch{return!1}},supportsFlash:function(){}},this.obj}(window),__tnt.user=function(t,r){return this.obj={authToken:TNCMS.User.isLoggedIn()?!0:null,screenName:TNCMS.User.getScreenName(),avatar:Cookies.get("tncms-avatarurl"),remember:TNCMS.User.hasPersistentSession(),services:Cookies.get("tncms-services"),update:function(){__tnt.user.loggedIn=TNCMS.User.isLoggedIn()?!0:null,__tnt.user.authToken=TNCMS.User.isLoggedIn()?!0:null,__tnt.user.screenName=Cookies.get("tncms-screenname"),__tnt.user.remember=TNCMS.User.hasPersistentSession(),__tnt.user.services=Cookies.get("tncms-services"),__tnt&&__tnt.subscription&&__tnt.subscription.access&&__tnt.subscription.access.status&&(__tnt.subscription.access.status.data=null,__tnt.subscription.access.status.trigger(userStatus))}},this.obj.loggedIn=TNCMS.User.isLoggedIn(),this.obj}(window),__tnt.log=function(t){window.console&&console.log(t)},__tnt.deprecatedCheck=function(){if(document.body.dataset.browserCompatibilityModal!=="true")return!1;let t=document.querySelector("#browser-compatibility-modal .modal");(__tnt.client.browser.version<__tnt.client.browser.minimumVersion[__tnt.client.browser.name]||isNaN(__tnt.client.browser.minimumVersion[__tnt.client.browser.name])&&!this.obj.userAgent.match(/FBAN|FBAV/i))&&(sessionStorage.getItem("__tnt.deprecatedCheck")||$(t).modal("show")),$(t).on("hide.bs.modal",function(r){sessionStorage.setItem("__tnt.deprecatedCheck","1")})},__tnt.urlHash=function(t){var r=new RegExp("#.*[?&]"+t+"=([^&]+)(&|$)"),n=location.href.match(r);return n?n[1]:""},__tnt.isAuthor=!1,document.addEventListener("DOMContentLoaded",function(){if(document.body.dataset.authors!==void 0){var t=JSON.parse(document.body.dataset.authors);__tnt.user.loggedIn&&t.indexOf(__tnt.user.screenName)!==-1&&(__tnt.isAuthor=!0)}}),__tnt.trackEventLater=[],__tnt.trackEvent=function(t){jQuery.type(t)==="object"&&__tnt.trackEventLater.push(t)},__tnt.truncateStr=function(t,r,n){return t.length>r&&(n=n||"",t=t.substring(0,r)+n),t},__tnt.compareArray=function(t,r){if(!(typeof t>"u"||typeof r>"u")){typeof t=="string"&&(t=JSON.parse(t));var n=t.filter(function(d){return r.indexOf(d)>-1});return n.length>0}},__tnt.shuffleArray=function(t){for(var r=t.length,n,d;r!==0;)d=Math.floor(Math.random()*r),r-=1,n=t[r],t[r]=t[d],t[d]=n;return t},__tnt.loadScript=function(t){return new Promise(function(r,n){for(var d=document.getElementsByTagName("script"),s=null,u=0;u<d.length;u++)if(d[u].src&&d[u].src==t){s=d[u];break}if(s)r(s);else{var c=document.createElement("script");c.src=t,c.onload=function(){r(c)},c.onerror=function(){n(new Error("Script load error for "+t))},document.head.append(c)}})},__tnt.elementOnScreen=function(t,s){if($(t).length===0)return!1;var n=$(t),d=$(window),s=s||5,u=d.scrollTop(),c=u+d.height(),m=n.offset().top-s,f=m+n.height()-s;return c>=m&&u<=f},__tnt.outerHeight=function(t,r){var n,d,s=0;return typeof t=="string"?n=document.querySelector(t):typeof t=="object"&&(n=t),n!==null?(d=n.offsetHeight,r===!0&&(s=parseInt(document.defaultView.getComputedStyle(n,"").getPropertyValue("margin-top"))+parseInt(document.defaultView.getComputedStyle(n,"").getPropertyValue("margin-bottom"))),d+s):0},__tnt.dmp={},__tnt.dmp.audienceExtractedLotame=function(t){var r=new CustomEvent("tnt-dmp-audience-extracted-lotame",{detail:{userAudience:t}});window.dispatchEvent(r)},__tnt.dmp.audienceExtractedSegment=function(t){var r=new CustomEvent("tnt-dmp-audience-extracted-segment",{detail:{userAudience:t}});window.dispatchEvent(r)},__tnt.dmp.behaviorRec=function(t){var r=new CustomEvent("tnt-dmp-behavior-rec",{detail:{userAudience:t}});window.dispatchEvent(r)},__tnt.isPreview=function(){return window.location.pathname.indexOf("/tncms/admin/action/main/preview/site")},__tnt.scrubUrl=function(t){if(location.href.indexOf("tncms/admin")==-1)return t;var r=location.href.split("/")[3],n="https://www."+r,d="https://"+r,s,u=new RegExp("https://admin[-.].*?.(com|net)/"+r,"g");return t.charAt(0)=="/"&&t.indexOf("/"+r+"/tncms/admin/action/main/preview/site")==-1||/^https:\/\/admin[\-\.].*?\.(com|net)/.test(t)==!0&&t.indexOf("/shared-content/")==-1&&u.test(t)==!1?s="/"+r+"/tncms/admin/action/main/preview/site/-"+t.replace(/https:\/\/admin[\-\.].*?\.(com|net)/,""):t.indexOf("http://www."+r)==0?s="/"+r+"/tncms/admin/action/main/preview/site/-"+t.replace("http://www."+r,""):t.indexOf(n)==0?s="/"+r+"/tncms/admin/action/main/preview/site/-"+t.replace(n,""):t.indexOf("us-corp-qa-3")!=-1?s="/"+r+"/tncms/admin/action/main/preview/site/-"+t.replace(d,""):s=t,s},__tnt.scrubElem=function(t,r){if(__tnt.isPreview){if(r||(r="a"),t.content){var n=t;t=t.content}t.querySelectorAll(r).forEach(function(d){let s=d.getAttribute("href");d.setAttribute("href",__tnt.scrubUrl(s))}),n&&(n.content=t,t=n)}return t},__tnt.template=function(t,r,n,d,s){var u="";if(t)if(typeof n>"u"&&(n=!1),t.nodeName=="TEMPLATE"){if("content"in document.createElement("template"))u=document.importNode(t.content,!0);else{u=document.createDocumentFragment();var c=t.childNodes;for(i=0;i<c.length;i++)u.appendChild(c[i].cloneNode(!0))}Array.isArray(d)&&d.forEach(function(m){var f=u;if(m&&(f=u.querySelectorAll(m.element),m.first&&(f=f.slice(0,1))),f){if(m.attr)for(a=0;a<m.attr.length;a++)for(e=0;e<f.length;e++)f[e].setAttribute(m.attr[a].attr,m.attr[a].value);if(m.html)for(i=0;i<f.length;i++)f[i].innerHTML=m.html}}),typeof s=="function"&&s(u),r&&(n?r.insertBefore(u,r.firstChild):r.appendChild(u))}else __tnt.log("__tnt.template - no valid template element found - update to use template tag");else __tnt.log("__tnt.template - no template element found");return u},__tnt.youtube=function(t,r){var n,d=0;return o={},o.create=[],o.playing=!1,o.state={change:function(s){switch(s.data){case YT.PlayerState.ENDED:clearInterval(n);break;case YT.PlayerState.PLAYING:s.target!=o.playing&&o.state.pause(),o.playing=s.target,o.playing.playerInfo.currentTime>1&&o.videoDataEvent(o.playing,"video_resumed"),n=setInterval(function(){o.videoDataEvent(o.playing)},1e3);break;case YT.PlayerState.PAUSED:o.videoDataEvent(o.playing,"video_paused"),clearInterval(n);break}},pause:function(){o.playing&&typeof o.playing.pauseVideo=="function"?o.playing.pauseVideo():console.log("TNT: o.playing.pauseVideo is not available")}},o.players={register:function(s){if(o.create.length===0){var u=document.createElement("script");u.src="https://www.youtube.com/iframe_api";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(u,c)}o.create.push(s)},init:function(){o.create.length>0&&(__tnt.log("  Players:"),$.each(o.create,function(s,u){__tnt.log("    "+u),new YT.Player(u,{events:{onStateChange:o.state.change}});var c=document.getElementById(u),m=function(p,g){p[0].isIntersecting?c.dataset.visible="true":c.dataset.visible="false"},f=new IntersectionObserver(m);f.observe(c)}))}},o.videoDataEvent=function(s,u){var c="",m="video",f="",p="",g=s.playerInfo.duration,h=s.playerInfo.currentTime,l=Math.round(100-(g-Math.floor(h))/g*100),v=!1;if(l>=5&&l<=10?(l=10,v=!0):l>=20&&l<=25?(l=25,v=!0):l>=45&&l<=50?(l=50,v=!0):l>=70&&l<=75?(l=75,v=!0):l>=95&&l<=100&&(l=100),u=="video_paused")c="video_paused",f="video paused",p=o.playing.h.dataset.title+":"+o.playing.h.dataset.uuid,h=g/100*l;else if(h<=1)c="video_start",f="video start",p=o.playing.h.dataset.title+":"+o.playing.h.dataset.uuid,h=0;else if(l==100)clearInterval(n),c="video_complete",f="video ended",p=o.playing.h.dataset.title+":"+o.playing.h.dataset.uuid,h=g;else if(u=="video_resumed")c="video_resumed",f="video resumed",p=o.playing.h.dataset.title+":"+o.playing.h.dataset.uuid,h=g/100*l;else if(v)if(l>d)d=l,c="video_progress",f="video progress",p=l+":"+o.playing.h.dataset.title+":"+o.playing.h.dataset.uuid,h=g/100*l;else return;else return;var _=new CustomEvent("tntVideoData",{detail:{video_uuid:o.playing.h.dataset.uuid,video_title:o.playing.h.dataset.title,video_provider:"youtube",video_duration:Math.round(g),video_url:s.playerInfo.videoUrl,video_current_time:Math.round(h),video_progress:l,visible:o.playing.h.dataset.visible}});dispatchEvent(_),dataLayer.push({event:"tncms.event.trigger","tncms.event.trigger.category":m,"tncms.event.trigger.action":f,"tncms.event.trigger.label":p,"tncms.event.trigger.value":"1","tncms.event.trigger.name":c,"tncms.event.trigger.video_uuid":o.playing.h.dataset.uuid,"tncms.event.trigger.video_title":o.playing.h.dataset.title,"tncms.event.trigger.video_provider":"youtube","tncms.event.trigger.video_url":s.playerInfo.videoUrl,"tncms.event.trigger.video_duration":Math.round(g),"tncms.event.trigger.video_current_time":Math.round(h),"tncms.event.trigger.video_percent":l,"tncms.event.trigger.visible":o.playing.h.dataset.visible})},o}(window);function onYouTubeIframeAPIReady(){jQuery(window).load(function(){__tnt.log("Init YT:"),__tnt.youtube.players.init()})}window.addEventListener("BLOXFileDownload",function(t){if(window.dataLayer){var r={};r.action=t.detail.action||"fileDownload",t.detail.category&&(r.category=t.detail.category),t.detail.label&&(r.label=t.detail.label),t.detail.link_text&&(r.link_text=t.detail.link_text),t.detail.link_url&&(r.link_url=t.detail.link_url),dataLayer.push({event:"tncms.event.trigger",tncms:{event:{trigger:r}}})}});
//# sourceMappingURL=tnt.ee95c0b6f1daceb31bf5ef84353968c6.js.map
