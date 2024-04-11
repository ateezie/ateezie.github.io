(function(n,o){if(typeof exports=="object"&&typeof module<"u"){var h=require("video.js");module.exports=o(h.default||h)}else typeof define=="function"&&define.amd?define(["videojs"],function(s){return n.Youtube=o(s)}):n.Youtube=o(n.videojs)})(this,function(n){"use strict";var o=n.browser.IS_IOS||n.browser.IS_NATIVE_ANDROID,h=n.getTech("Tech"),s=n.extend(h,{constructor:function(e,t){h.call(this,e,t),this.setPoster(e.poster),this.setSrc(this.options_.source,!0),this.setTimeout(function(){this.el_&&(this.el_.parentNode.className+=" vjs-youtube",o&&(this.el_.parentNode.className+=" vjs-youtube-mobile"),s.isApiReady?this.initYTPlayer():s.apiReadyQueue.push(this))}.bind(this))},dispose:function(){if(this.ytPlayer)this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo(),this.ytPlayer.destroy&&this.ytPlayer.destroy();else{var e=s.apiReadyQueue.indexOf(this);e!==-1&&s.apiReadyQueue.splice(e,1)}this.ytPlayer=null,this.el_.parentNode.className=this.el_.parentNode.className.replace(" vjs-youtube","").replace(" vjs-youtube-mobile",""),this.el_.parentNode.removeChild(this.el_),h.prototype.dispose.call(this)},createEl:function(){var e=document.createElement("div");e.setAttribute("id",this.options_.techId),e.setAttribute("style","width:100%;height:100%;top:0;left:0;position:absolute"),e.setAttribute("class","vjs-tech");var t=document.createElement("div");if(t.appendChild(e),!o&&!this.options_.ytControls){var i=document.createElement("div");i.setAttribute("class","vjs-iframe-blocker"),i.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%"),i.onclick=function(){this.pause()}.bind(this),t.appendChild(i)}return t},initYTPlayer:function(){var e={controls:0,modestbranding:1,rel:0,showinfo:0,loop:this.options_.loop?1:0};if(typeof this.options_.autohide<"u"&&(e.autohide=this.options_.autohide),typeof this.options_.cc_load_policy<"u"&&(e.cc_load_policy=this.options_.cc_load_policy),typeof this.options_.ytControls<"u"&&(e.controls=this.options_.ytControls),typeof this.options_.disablekb<"u"&&(e.disablekb=this.options_.disablekb),typeof this.options_.color<"u"&&(e.color=this.options_.color),e.controls?typeof this.options_.fs<"u"&&(e.fs=this.options_.fs):e.fs=0,this.options_.source.src.indexOf("end=")!==-1){var t=this.options_.source.src.match(/end=([0-9]*)/);this.options_.end=parseInt(t[1])}if(typeof this.options_.end<"u"&&(e.end=this.options_.end),typeof this.options_.hl<"u"?e.hl=this.options_.hl:typeof this.options_.language<"u"&&(e.hl=this.options_.language.substr(0,2)),typeof this.options_.iv_load_policy<"u"&&(e.iv_load_policy=this.options_.iv_load_policy),typeof this.options_.list<"u"?e.list=this.options_.list:this.url&&typeof this.url.listId<"u"&&(e.list=this.url.listId),typeof this.options_.listType<"u"&&(e.listType=this.options_.listType),typeof this.options_.modestbranding<"u"&&(e.modestbranding=this.options_.modestbranding),typeof this.options_.playlist<"u"&&(e.playlist=this.options_.playlist),typeof this.options_.playsinline<"u"&&(e.playsinline=this.options_.playsinline),typeof this.options_.rel<"u"&&(e.rel=this.options_.rel),typeof this.options_.showinfo<"u"&&(e.showinfo=this.options_.showinfo),this.options_.source.src.indexOf("start=")!==-1){var i=this.options_.source.src.match(/start=([0-9]*)/);this.options_.start=parseInt(i[1])}if(typeof this.options_.start<"u"&&(e.start=this.options_.start),typeof this.options_.theme<"u"&&(e.theme=this.options_.theme),typeof this.options_.customVars<"u"){var r=this.options_.customVars;Object.keys(r).forEach(function(l){e[l]=r[l]})}this.activeVideoId=this.url?this.url.videoId:null,this.activeList=e.list;var a={videoId:this.activeVideoId,playerVars:e,events:{onReady:this.onPlayerReady.bind(this),onPlaybackQualityChange:this.onPlayerPlaybackQualityChange.bind(this),onPlaybackRateChange:this.onPlayerPlaybackRateChange.bind(this),onStateChange:this.onPlayerStateChange.bind(this),onVolumeChange:this.onPlayerVolumeChange.bind(this),onError:this.onPlayerError.bind(this)}};typeof this.options_.enablePrivacyEnhancedMode<"u"&&this.options_.enablePrivacyEnhancedMode&&(a.host="https://www.youtube-nocookie.com"),this.ytPlayer=new YT.Player(this.options_.techId,a)},onPlayerReady:function(){this.options_.muted&&this.ytPlayer.mute();var e=this.ytPlayer.getAvailablePlaybackRates();e.length>1&&(this.featuresPlaybackRate=!0),this.playerReady_=!0,this.triggerReady(),this.playOnReady?this.play():this.cueOnReady&&(this.cueVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId)},onPlayerPlaybackQualityChange:function(){},onPlayerPlaybackRateChange:function(){this.trigger("ratechange")},onPlayerStateChange:function(e){var t=e.data;if(!(t===this.lastState||this.errorNumber))switch(this.lastState=t,t){case-1:this.trigger("loadstart"),this.trigger("loadedmetadata"),this.trigger("durationchange"),this.trigger("ratechange");break;case YT.PlayerState.ENDED:this.trigger("ended");break;case YT.PlayerState.PLAYING:this.trigger("timeupdate"),this.trigger("durationchange"),this.trigger("playing"),this.trigger("play"),this.isSeeking&&this.onSeeked();break;case YT.PlayerState.PAUSED:this.trigger("canplay"),this.isSeeking?this.onSeeked():this.trigger("pause");break;case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate"),this.player_.trigger("waiting");break}},onPlayerVolumeChange:function(){this.trigger("volumechange")},onPlayerError:function(e){this.errorNumber=e.data,this.trigger("pause"),this.trigger("error")},error:function(){var e=1e3+this.errorNumber;switch(this.errorNumber){case 5:return{code:e,message:"Error while trying to play the video"};case 2:case 100:return{code:e,message:"Unable to find the video"};case 101:case 150:return{code:e,message:"Playback on other Websites has been disabled by the video owner."}}return{code:e,message:"YouTube unknown error ("+this.errorNumber+")"}},loadVideoById_:function(e){var t={videoId:e};this.options_.start&&(t.startSeconds=this.options_.start),this.options_.end&&(t.endSeconds=this.options_.end),this.ytPlayer.loadVideoById(t)},cueVideoById_:function(e){var t={videoId:e};this.options_.start&&(t.startSeconds=this.options_.start),this.options_.end&&(t.endSeconds=this.options_.end),this.ytPlayer.cueVideoById(t)},src:function(e){return e&&this.setSrc({src:e}),this.source},poster:function(){return o?null:this.poster_},setPoster:function(e){this.poster_=e},setSrc:function(e){!e||!e.src||(delete this.errorNumber,this.source=e,this.url=s.parseUrl(e.src),this.options_.poster||this.url.videoId&&(this.poster_="https://img.youtube.com/vi/"+this.url.videoId+"/0.jpg",this.trigger("posterchange"),this.checkHighResPoster()),this.options_.autoplay&&!o?this.isReady_?this.play():this.playOnReady=!0:this.activeVideoId!==this.url.videoId&&(this.isReady_?(this.cueVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId):this.cueOnReady=!0))},autoplay:function(){return this.options_.autoplay},setAutoplay:function(e){this.options_.autoplay=e},loop:function(){return this.options_.loop},setLoop:function(e){this.options_.loop=e},play:function(){!this.url||!this.url.videoId||(this.wasPausedBeforeSeek=!1,this.isReady_?(this.url.listId&&(this.activeList===this.url.listId?this.ytPlayer.playVideo():(this.ytPlayer.loadPlaylist(this.url.listId),this.activeList=this.url.listId)),this.activeVideoId===this.url.videoId?this.ytPlayer.playVideo():(this.loadVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId)):(this.trigger("waiting"),this.playOnReady=!0))},pause:function(){this.ytPlayer&&this.ytPlayer.pauseVideo()},paused:function(){return this.ytPlayer?this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING:!0},currentTime:function(){return this.ytPlayer?this.ytPlayer.getCurrentTime():0},setCurrentTime:function(e){this.lastState===YT.PlayerState.PAUSED&&(this.timeBeforeSeek=this.currentTime()),this.isSeeking||(this.wasPausedBeforeSeek=this.paused()),this.ytPlayer.seekTo(e,!0),this.trigger("timeupdate"),this.trigger("seeking"),this.isSeeking=!0,this.lastState===YT.PlayerState.PAUSED&&this.timeBeforeSeek!==e&&(clearInterval(this.checkSeekedInPauseInterval),this.checkSeekedInPauseInterval=setInterval(function(){this.lastState!==YT.PlayerState.PAUSED||!this.isSeeking?clearInterval(this.checkSeekedInPauseInterval):this.currentTime()!==this.timeBeforeSeek&&(this.trigger("timeupdate"),this.onSeeked())}.bind(this),250))},seeking:function(){return this.isSeeking},seekable:function(){return this.ytPlayer?n.createTimeRange(0,this.ytPlayer.getDuration()):n.createTimeRange()},onSeeked:function(){clearInterval(this.checkSeekedInPauseInterval),this.isSeeking=!1,this.wasPausedBeforeSeek&&this.pause(),this.trigger("seeked")},playbackRate:function(){return this.ytPlayer?this.ytPlayer.getPlaybackRate():1},setPlaybackRate:function(e){this.ytPlayer&&this.ytPlayer.setPlaybackRate(e)},duration:function(){return this.ytPlayer?this.ytPlayer.getDuration():0},currentSrc:function(){return this.source&&this.source.src},ended:function(){return this.ytPlayer?this.lastState===YT.PlayerState.ENDED:!1},volume:function(){return this.ytPlayer?this.ytPlayer.getVolume()/100:1},setVolume:function(e){this.ytPlayer&&this.ytPlayer.setVolume(e*100)},muted:function(){return this.ytPlayer?this.ytPlayer.isMuted():!1},setMuted:function(e){if(this.ytPlayer)this.muted(!0);else return;e?this.ytPlayer.mute():this.ytPlayer.unMute(),this.setTimeout(function(){this.trigger("volumechange")},50)},buffered:function(){if(!this.ytPlayer||!this.ytPlayer.getVideoLoadedFraction)return n.createTimeRange();var e=this.ytPlayer.getVideoLoadedFraction()*this.ytPlayer.getDuration();return n.createTimeRange(0,e)},preload:function(){},load:function(){},reset:function(){},networkState:function(){if(!this.ytPlayer)return 0;switch(this.ytPlayer.getPlayerState()){case-1:return 0;case 3:return 2;default:return 1}},readyState:function(){if(!this.ytPlayer)return 0;switch(this.ytPlayer.getPlayerState()){case-1:return 0;case 5:return 1;case 3:return 2;default:return 4}},supportsFullScreen:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled},checkHighResPoster:function(){var e="https://img.youtube.com/vi/"+this.url.videoId+"/maxresdefault.jpg";try{var t=new Image;t.onload=function(){if("naturalHeight"in t){if(t.naturalHeight<=90||t.naturalWidth<=120)return}else if(t.height<=90||t.width<=120)return;this.poster_=e,this.trigger("posterchange")}.bind(this),t.onerror=function(){},t.src=e}catch{}}});s.isSupported=function(){return!0},s.canPlaySource=function(e){return s.canPlayType(e.type)},s.canPlayType=function(e){return e==="video/youtube"},s.parseUrl=function(e){var t={videoId:null},i=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,r=e.match(i);r&&r[2].length===11&&(t.videoId=r[2]);var a=/[?&]list=([^#\&\?]+)/;return r=e.match(a),r&&r[1]&&(t.listId=r[1]),t};function u(){YT.ready(function(){s.isApiReady=!0;for(var e=0;e<s.apiReadyQueue.length;++e)s.apiReadyQueue[e].initYTPlayer()})}function d(e,t){var i=!1,r=document.createElement("script"),a=document.getElementsByTagName("script")[0];a&&(a.parentNode.insertBefore(r,a),r.onload=function(){i||(i=!0,t())},r.onreadystatechange=function(){!i&&(this.readyState==="complete"||this.readyState==="loaded")&&(i=!0,t())},r.src=e)}function c(){var e=".vjs-youtube .vjs-iframe-blocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-youtube .vjs-poster { background-size: cover; }.vjs-youtube-mobile .vjs-big-play-button { display: none; }",t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),t.appendChild(i)}s.apiReadyQueue=[],typeof document<"u"&&(d("https://www.youtube.com/iframe_api",u),c()),typeof n.registerTech<"u"?n.registerTech("Youtube",s):n.registerComponent("Youtube",s)});
//# sourceMappingURL=videojs.youtube.79dd21555e538dc5096f7ab488182f35.js.map