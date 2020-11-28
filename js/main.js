"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$(function(){function l(){var t=$("#nav"),e=window.innerWidth<768||i+a>t.width()-30;e?t.addClass("hide-menu"):t.removeClass("hide-menu")}function r(){var e=$("#toggle-menu"),t=$("#sidebar-menus"),i=$("#menu-mask"),a=$("body");function o(){a.css({overflow:"","padding-right":""}),i.fadeOut(),e.removeClass("open").addClass("close"),t.removeClass("open")}e.on("click",function(){btf.sidebarPaddingR(),a.css("overflow","hidden"),i.fadeIn(),e.removeClass("close").addClass("open"),t.addClass("open")}),i.on("click touchstart",function(t){e.hasClass("open")&&o()}),$(window).on("resize",function(t){e.is(":visible")||e.hasClass("open")&&o()})}function d(){var o,n,s,c,t=GLOBAL_CONFIG.highlight.highlightCopy,e=GLOBAL_CONFIG.highlight.highlightLang,i=GLOBAL_CONFIG_SITE.isHighlightShrink,a=t||e||void 0!==i,l="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]');a&&l.length&&(o="prismjs"===GLOBAL_CONFIG.highlight.plugin,c=!(s=n="")===i?"closed":"",void 0!==i&&(n='<i class="fas fa-angle-down expand '.concat(c,'"></i>')),t&&(s='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),e?o?l.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(c,'">').concat(n+e+s,"</div>"))}):l.each(function(t,e){var i=$(this),a=i.attr("class").split(" ")[1];"plain"!==a&&void 0!==a||(a="Code");a='<div class="code-lang">'.concat(a,"</div>");i.prepend('<div class="highlight-tools '.concat(c,'">').concat(n+a+s,"</div>"))}):(e='<div class="highlight-tools '.concat(c,'">').concat(n+s,"</div>"),o?l.wrap('<figure class="highlight"></figure>').before(e):l.prepend(e)),void 0!==i&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),t&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e=window.getSelection(),i=document.createRange();o?i.selectNodeContents(t.find("> pre code")[0]):i.selectNodeContents(t.find("table .code pre")[0]),e.removeAllRanges(),e.addRange(i);var a;e.toString();a=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(a).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),e.removeAllRanges(),t.removeClass("copy-true")}))}var i=$("#site-name").width(),a=$("#menus").width();function h(){var o=0,n=!0,s=$("#rightside"),c=$("#nav"),l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow;$(window).scroll(btf.throttle(function(t){var e,i,a=$(this).scrollTop(),i=(i=o<(e=a),o=e,i);56<a?(i?(c.hasClass("visible")&&c.removeClass("visible"),r&&!0===n&&(chatBtnHide(),n=!1)):(c.hasClass("visible")||c.addClass("visible"),l&&!1===n&&(window.chatBtnShow(),n=!0)),c.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&c.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200))}function f(){var t=$("#card-toc"),c=t.find(".toc-content"),l=c.find(".toc-child"),r=c.find(".toc-link"),o=$("#article-container");l.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();i(e),n(e)},100));var i=function(t){var e=o.height(),i=$(window).height(),a=(t-o.offset().top)/(i<e?e-i:$(document).height()-i),i=Math.round(100*a),i=100<i?100:i<=0?0:i;c.attr("progress-percentage",i)},d=GLOBAL_CONFIG.isanchor,e=function(){t.css("display","block")},a=function(){t.css("animation","toc-close .2s"),setTimeout(function(){t.css({display:"",animation:""})},100)};$("#mobile-toc-button").on("click",function(){(t.is(":visible")?a:e)()}),r.on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<900&&a()});var h=o.find("h1,h2,h3,h4,h5,h6"),n=function(e){if(0===r.length)return!1;var i="";h.each(function(){var t=$(this);e>t.offset().top-70&&(i="#"+encodeURI($(this).attr("id")))}),""===i&&(r.removeClass("active"),l.hide());var t,a,o,n,s=r.filter(".active");i&&s.attr("href")!==i&&(d&&(n=i,window.history.replaceState&&n!==window.location.hash&&window.history.replaceState(void 0,void 0,n)),r.removeClass("active"),(t=r.filter('[href="'+i+'"]')).addClass("active"),a=e,s=(o=t).offset().top,o=(n=c).scrollTop(),s>a+$(window).height()-100&&n.scrollTop(o+100),s<a+100&&n.scrollTop(o-100),o=0<(o=t.parents(".toc-child")).length?o.last():t,(t=o.closest(".toc-item").find(".toc-child")).is(":visible")||t.fadeIn(400),o.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}var u=!1,t=$("#rightside");t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")}),t.on("click","#hide-aside-btn",function(){var t=$(document.documentElement);t.hasClass("hide-aside")?(t.removeClass("hide-aside"),saveToLocal.set("aside-status","show",2)):(t.addClass("hide-aside"),saveToLocal.set("aside-status","hide",2))});function g(t){t.each(function(t,e){var i=$(e),e=i.attr("datetime");i.text(btf.diffDate(e,!0)).css("display","inline")})}var o,p=function(){$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,i=$(this),a=i.parent();a.hasClass("active")||(e=i.parents(".nav-tabs").next(),a.siblings(".active").removeClass("active"),a.addClass("active"),i=i.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(i)).addClass("active"),0<(i=e.find(i).find(".justified-gallery")).length&&btf.initJustifiedGallery(i))})},m=function(){$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))})};window.refreshFn=function(){var t,e,i,a,o,n,s,c;l(),$("#nav").addClass("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&f(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(i=GLOBAL_CONFIG.noticeOutdate,(a=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=i.limitDay&&(a='<div class="post-outdate-notice">'.concat(i.messagePrev+" "+a+" "+i.messageNext,"</div>"),"top"===i.position?$("#article-container").prepend(a):$("#article-container").append(a))),GLOBAL_CONFIG.relativeDate.post&&g($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&g($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(e=$("#runtimeshow")).length&&(t=e.attr("data-publishDate"),e.text(btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime)),(e=$("#last-push-date")).length&&(t=e.attr("data-lastPushDate"),t=btf.diffDate(t,!0),e.text(t)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault(),$(this).toggleClass("expand").parents(".parent").next().slideToggle(300)})),r(),GLOBAL_CONFIG_SITE.isHome&&$("#scroll-down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&d(),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var i=$(e);i.attr("alt")&&(e=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>"),i.after(e))}),(o=$(".justified-gallery")).length&&((s=o.find("img")).unwrap(),s.length&&s.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),u?btf.initJustifiedGallery(o):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(o)}),u=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),a=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat(a,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(n=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";n.update({background:e})})),h(),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(s=$(".hide-button")).length&&s.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&0<i.find(".justified-gallery").length&&btf.initJustifiedGallery(i.find(".justified-gallery"))}),p(),m(),c=!1,$("#comment-switch > .switch-btn").on("click",function(){var t=$(this);t.hasClass("move")?t.removeClass("move"):t.addClass("move"),$("#post-comment > .comment-wrap > div").each(function(t,e){e=$(e);e.is(":visible")?e.hide():e.css({display:"block",animation:"tabshow .5s"})}),c||"function"!=typeof loadOtherComment||(c=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){l()}),$("#sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(o=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),e=e.length>o.limitCount?e+"\n\n\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});