window.__tnt||(window.__tnt={}),__tnt.notifyPanel=function(){var f=function(N){var o={},r,m=!1,a,p,l,g,v,s={},k=function(){if(p.style.display="block",localStorage.getItem("tnt_notifications"))for(var t=JSON.parse(localStorage.getItem("tnt_notifications")),e=t.length-1;e>=0;e--)o.notes.unshift(t[e]),h(t[e])},L=function(){localStorage.getItem("tnt_notification_subscriptions")&&(s=JSON.parse(localStorage.getItem("tnt_notification_subscriptions")),Object.keys(s).forEach(function(t){if(s[t]==1&&document.getElementById("topic-"+t)){var e=document.getElementById("topic-"+t);e.checked=!0,e.parentNode.querySelector(".sr-only").innerText="Unsubscribe"}}))},q=function(){var t=document.querySelectorAll('[data-control="notification"]');for(i=0;i<t.length;i++)t[i].style.display="block",t[i].addEventListener("click",function(){o.toggle()})},E=function(){for(var t=document.querySelectorAll('[data-control="notification"][data-tooltip]'),e=0;e<t.length;e++)(function(n){var d=localStorage.getItem("tnt_notification_tooltip_"+t[n].dataset.id);if(d===null||t[n].dataset.tooltipDisplayAgain&&Date.now()-d>parseFloat(t[n].dataset.tooltipDisplayAgain)*60*60*1e3){var c;t[n].classList.contains("stuck")?c=t[n]:c=t[n].querySelector(".nav li a"),window.setTimeout(function(){var u={trigger:"manual",placement:t[n].dataset.tooltipPlacement,html:!0,content:'<div class="notification-tooltip">'+t[n].dataset.tooltip+"</div>"};t[n].dataset.tooltipPlacement==="right"&&(u.container="#"+t[n].id),$(c).popover(u),$(c).popover("show")},500);var y=function(){$(c).popover("hide"),document.body.removeEventListener("click",y)};document.body.addEventListener("click",y),localStorage.setItem("tnt_notification_tooltip_"+t[n].dataset.id,Date.now())}})(e)},w=function(){if(o.isOpen()===!1){var t=document.querySelectorAll('[data-control="notification"]');for(i=0;i<t.length;i++)t[i].classList.add("ring"),t[i].querySelector(".badge-dot").style.display="block"}},T=function(){var t=document.querySelectorAll('[data-control="notification"]');for(i=0;i<t.length;i++)t[i].classList.remove("ring"),t[i].querySelector(".badge-dot").style.display="none"},C=function(){document.addEventListener("notification-popup-removed",function(t){o.addNote(t.detail.note),w()}),r.querySelector(".notify-panel-close").addEventListener("click",function(){o.toggle()}),a.addEventListener("click",function(t){if(t.target&&t.target.closest(".notification-item-dismiss")){var e=t.target.closest(".notification-item"),n=Array.prototype.indexOf.call(e.parentNode.children,e);o.removeNote(n)}}),document.getElementById("notify-panel-settings").addEventListener("change",function(t){t.target.classList.contains("switch-input")&&(t.target.disabled=!0,l.style.opacity=0,t.target.checked?TNCMS.Messaging.subscribe(t.target.dataset.topic).then(function(){s[t.target.dataset.topic]=1,localStorage.setItem("tnt_notification_subscriptions",JSON.stringify(s)),t.target.disabled=!1,t.target.checked=!0,t.target.parentNode.querySelector(".sr-only").innerText="Unsubscribe"},function(e){console.error(e),t.target.disabled=!1,t.target.checked=!1,t.target.parentNode.querySelector(".sr-only").innerText="Subscribe",l.innerHTML="Unable to subscribe to topic. Please try again later.",l.style.display="block",l.style.opacity=1}):TNCMS.Messaging.unsubscribe(t.target.dataset.topic).then(function(){s[t.target.dataset.topic]=0,localStorage.setItem("tnt_notification_subscriptions",JSON.stringify(s)),t.target.disabled=!1,t.target.checked=!1,t.target.parentNode.querySelector(".sr-only").innerText="Subscribe"},function(e){console.error(e),t.target.disabled=!1,t.target.checked=!0,t.target.parentNode.querySelector(".sr-only").innerText="Unsubscribe",l.innerHTML="Unable to unsubscribe from topic. Please try again later.",l.style.display="block",l.style.opacity=1}))},!1),l.addEventListener("transitionend",function(t){t.stopPropagation(),t.propertyName==="opacity"&&t.target.style.opacity==="0"&&(t.target.style.display="none",t.target.style.innerHTML="")}),document.addEventListener("tntStickyAnchorLoaded",function(t){var e=t.detail.element,n=document.querySelectorAll('[data-control="notification"]');for(i=0;i<n.length;i++)n[i].classList.contains("stuck")&&(n[i].style.bottom=e.offsetHeight+"px")}),document.addEventListener("tntStickyAnchorClosed",function(){var t=document.querySelectorAll('[data-control="notification"]');for(i=0;i<t.length;i++)t[i].classList.contains("stuck")&&(t[i].style.bottom="0px")})},h=function(t){var e=A(t);a.insertBefore(e,a.firstChild),a.children.length>0&&(p.style.display="none")},P=function(t){a.removeChild(a.children[t]),a.children.length===0&&(p.style.display="block")},S=function(){localStorage.setItem("tnt_notifications",JSON.stringify(o.notes))},I=function(t){if("content"in document.createElement("template"))return t.content;var e=document.createDocumentFragment(),n=t.childNodes;for(i=0;i<n.length;i++)e.appendChild(n[i].cloneNode(!0));return e},A=function(t){var e=I(v).cloneNode(!0);if(e.querySelector(".notification-item-header").textContent=t.title,t.url){var n=e.querySelector(".notification-item a");n.href=t.url,g&&(n.href+="?",Object.keys(g).forEach(function(_,O){O!=0&&(n.href+="&"),n.href+=_+"="+g[_]}))}else{var d=e.querySelector(".notification-item a");d.parentNode.removeChild(d)}if(t.image)e.querySelector(".notification-item-image img").src=t.image;else{var c=e.querySelector(".notification-item-image");c.parentNode.removeChild(c)}var y=e.querySelector(".notification-item-summary"),u=t.message;if(u)y.innerHTML=u;else{var b=e.querySelector(".notification-item-summary");b.parentNode.removeChild(b)}return document.importNode(e,!0)};return o.notes=[],o.init=function(t){r=document.getElementById(t.panel_id),a=r.querySelector(".notify-panel-content-items"),p=r.querySelector(".notify-panel-content-no-items"),l=r.querySelector(".notify-panel-settings-error"),v=r.querySelector("template"),g=t.utm,r.classList.contains("notify-panel")||r.classList.add("notify-panel"),k(),L(),q(),E(),C()},o.open=function(){return r.classList.add("notify-panel-visible"),m=!0,a.children.length===0&&$("#notification-panel .notify-panel-nav ul li:nth-child(2) a").tab("show"),T(),this},o.close=function(){return r.classList.remove("notify-panel-visible"),m=!1,this},o.toggle=function(){return this.isOpen()?this.close():this.open()},o.isOpen=function(){return m},o.addNote=function(t){return this.notes.unshift(t),h(t),S(),this},o.removeNote=function(t){return this.notes.splice(t,1),P(t),S(),this},o.init(N),o};return f}(),function(){if("serviceWorker"in navigator&&"PushManager"in window){var f={panel_id:"notification-panel",utm:{utm_source:"BLOX Broadcast",utm_campaign:"Push Notification",utm_medium:"referral",utm_content:"in-panel notification"}};document.readyState=="loading"?document.addEventListener("DOMContentLoaded",function(){__tnt.notificationPanel=new __tnt.notifyPanel(f)}):__tnt.notificationPanel=new __tnt.notifyPanel(f)}else throw new Error("The Push API and/or Service workers are disabled or not supported")}();
//# sourceMappingURL=tnt.notify.panel.bacbeac9a1ca6ee75b79b21a0e2e99f2.js.map