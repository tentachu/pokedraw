function get_browser_info(){var e=navigator.userAgent,n,a=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?(n=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE ",version:n[1]||""}):"Chrome"===a[1]&&(n=e.match(/\bOPR\/(\d+)/),null!=n)?{name:"Opera",version:n[1]}:(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(n=e.match(/version\/(\d+)/i))&&a.splice(1,1,n[1]),{name:a[0],version:a[1]})}$(document).ready(function(){function e(){var e="Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata Raticate Spearow Fearow Ekans Arbok Pikachu Raichu Sandshrew Sandslash Nidoran♀ Nidorina Nidoqueen Nidoran♂ Nidorino Nidoking Clefairy Clefable Vulpix Ninetales Jigglypuff Wigglytuff Zubat Golbat Oddish Gloom Vileplume Paras Parasect Venonat Venomoth Diglett Dugtrio Meowth Persian Psyduck Golduck Mankey Primeape Growlithe Arcanine Poliwag Poliwhirl Poliwrath Abra Kadabra Alakazam Machop Machoke Machamp Bellsprout Weepinbell Victreebel Tentacool Tentacruel Geodude Graveler Golem Ponyta Rapidash Slowpoke Slowbro Magnemite Magneton Farfetchd Doduo Dodrio Seel Dewgong Grimer Muk Shellder Cloyster Gastly Haunter Gengar Onix Drowzee Hypno Krabby Kingler Voltorb Electrode Exeggcute Exeggutor Cubone Marowak Hitmonlee Hitmonchan Lickitung Koffing Weezing Rhyhorn Rhydon Chansey Tangela Kangaskhan Horsea Seadra Goldeen Seaking Staryu Starmie Mr.Mime Scyther Jynx Electabuzz Magmar Pinsir Tauros Magikarp Gyarados Lapras Ditto Eevee Vaporeon Jolteon Flareon Porygon Omanyte Omastar Kabuto Kabutops Aerodactyl Snorlax Articuno Zapdos Moltres Dratini Dragonair Dragonite Mewtwo Mew";return e.split(" ")}function n(e,n){$.ajax({type:"GET",url:"/ajax/getDrawingsByPokemon/"+e+"/"+n}).done(function(e){l(e)})}function a(e){var n=e||12;$.ajax({type:"GET",url:"/ajax/getDrawingFilenames/"+n}).done(function(e){c(e)})}function t(){m.length>150&&(m=[],alert("Congratulations! You drew all 151 Pokemon! Go outside!"));for(var e=Math.floor(Math.random()*p.length)+1;-1!==m.indexOf(e);)e=Math.floor(Math.random()*p.length)+1;m.push(e);var n="00"+e,a=n.substr(n.length-3);$(".js-reference-image").attr("src","img/"+a+".png"),$(".pip").attr("src","img/"+a+".png"),$(".js-reference-image__container").waitForImages(function(){s()}),f=p[e-1],$(".js-pokemon-name").text(f)}function r(){if(g){u();var e=canvas.toDataURL("image/jpeg");$.ajax({type:"POST",url:"/ajax/saveImage",data:{imgBase64:e,pokemon:f,browser:browser.name,browser_version:browser.version}}).done(function(e){var n=e._id;d(n),$(".js-save").attr({href:"drawings/"+n,download:f+".jpeg"}),a()}),g=!1,setTimeout(function(){g=!0},4e4)}}function o(){$(".hero").slideUp("fast"),"block"===$(".pip__container").css("display")&&$(".hero").css("height","0px"),$(".js-new-round.intro").css("display","none"),$(".js-new-round").removeClass("animated bounce"),$(".js-canvas__timer").text("45").css({color:"#666",display:"inline"}).fadeIn("fast"),$(".round-controls").css("display","none"),$(".js-controls__color-list").css("display","inline-block")}function i(){$(".js-new-round").css("display","block").text("Draw a new Pokémon!").removeClass("intro").prependTo($(".round-controls"));var e=setInterval(function(){$(".js-new-round").addClass("animated bounce"),clearInterval(e)},3500);b.css("pointer-events","none"),$(".round-controls").css("display","inline-block").fadeIn("fast"),$(".js-controls__color-list").css("display","none"),$(".js-canvas__timer").fadeOut("slow").removeClass("animated pulse infinite")}function s(){var e=setInterval(function(){w-=1,$(".js-canvas__timer").text(w),5===w&&$(".js-canvas__timer").css("color","#FF6A62").addClass("animated pulse infinite"),0===w&&(clearInterval(e),i(),$(".js-sbp__dropdown").val(f).change(),b.sketch().actions.length>0&&r(),ga("send","event","round-complete","trigger"))},1e3)}function c(e){k.flickity("remove",k.find("img")),e.forEach(function(e){var n=$("<img src='drawings/"+e._id+"'></img>");k.flickity("append",n)}),k.waitForImages(function(){k.flickity("resize")})}function l(e){y.slideDown("fast").flickity("remove",y.find("img")),e.forEach(function(e){var n=$("<img src='drawings/"+e._id+"'></img>");y.flickity("append",n)}),y.waitForImages(function(){y.flickity("resize")})}function d(e){v="http://"+document.domain+"/drawings/"+e,$(".js-share-twitter").attr("href","http://twitter.com/share?url="+v+"&text=I drew this "+f+" all by myself on pokedraw.net!")}function u(){_.globalCompositeOperation="destination-over",_.fillStyle="#fff"}function h(){b.attr({width:b.css("width"),height:b.css("height")}),b.sketch().redraw(),$(".js-reference-image__container").css("height",b.css("height"))}var g=!0,f,p=e(),m=[],w,v,k=$(".js-header__flickity-slider"),y=$(".js-sbp-slider");!function j(){k.flickity({wrapAround:!0,prevNextButtons:!1,pageDots:!1,imagesLoaded:!0,cellAlign:"left"}),y.flickity({wrapAround:!0,prevNextButtons:!1,pageDots:!1,imagesLoaded:!0,cellAlign:"left"}),a(),p.forEach(function(e){var n=$('<option value="'+e+'">'+e+"</option>");$(".js-sbp__dropdown").append(n)})}(),$(".js-header__control--hide").on("click",function(){return $(".recent-drawing").css("display","none"),!1}),$(".js-header__control--refresh").on("click",function(){return a(),!1}),$(".js-controls__color").append("<a></a>"),$(".js-controls__color a").each(function(){var e=$(this).parent().css("background-color");$(this).attr({"data-color":e,href:"#js-canvas"})}),$(".js-controls__color").on("click",function(){$(this).siblings().removeClass("controls__color--selected"),$(this).addClass("controls__color--selected")}),$(".js-new-round").click(function(){$("#js-canvas").css("background","#fff"),$(".js-reference-image").attr("src","").removeClass("intro"),o(),b.sketch().clear(),b.css("pointer-events","auto"),w=45,"block"===$(".pip__container").css("display")&&$("html,body").animate({scrollTop:$("#js-canvas").offset().top-12},500),t(),ga("send","event","new-round","click")}),$(".js-sbp__dropdown").on("change",function(){if(0!==$(this).val()){$('.js-sbp__dropdown option[value="0"]').remove();var e=$(this).val().toLowerCase();n(e,12),$(".js-sbp-gallery").slideDown("1000")}}),$(".js-save").click(function(){u(),ga("send","event","save-button","click")});var b=$("#js-canvas"),_=b[0].getContext("2d");b.sketch(),h(),$(window).resize(h),function(){var e=function(){FB.ui({method:"feed",link:"http://pokedraw.net/",caption:"I drew this Pokemon all by myself!!!!",description:"Think you can draw a Pokemon better than this? Click here to try. It only takes 45 seconds.",picture:v})};$(".js-share-facebook").click(function(){FB.login(function(n){n.authResponse&&e()},{scope:"publish_stream"}),ga("send","event","share-facebook","click")})}(),$(".js-share-twitter").click(function(e){var n=575,a=400,t=($(window).width()-n)/2,r=($(window).height()-a)/2,o=this.href,i="status=1,width="+n+",height="+a+",top="+r+",left="+t;return window.open(o,"twitter",i),ga("send","event","share-twitter","click"),!1})}),!function(e){var n="waitForImages";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},e.expr[":"].uncached=function(n){if(!e(n).is('img[src][src!=""]'))return!1;var a=new Image;return a.src=n.src,!a.complete},e.fn.waitForImages=function(){var a,t,r,o=0,i=0,s=e.Deferred();if(e.isPlainObject(arguments[0])?(r=arguments[0].waitForAll,t=arguments[0].each,a=arguments[0].finished):1===arguments.length&&"boolean"===e.type(arguments[0])?r=arguments[0]:(a=arguments[0],t=arguments[1],r=arguments[2]),a=a||e.noop,t=t||e.noop,r=!!r,!e.isFunction(a)||!e.isFunction(t))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var c=e(this),l=[],d=e.waitForImages.hasImageProperties||[],u=e.waitForImages.hasImageAttributes||[],h=/url\(\s*(['"]?)(.*?)\1\s*\)/g;r?c.find("*").addBack().each(function(){var n=e(this);n.is("img:uncached")&&l.push({src:n.attr("src"),element:n[0]}),e.each(d,function(e,a){var t,r=n.css(a);if(!r)return!0;for(;t=h.exec(r);)l.push({src:t[2],element:n[0]})}),e.each(u,function(a,t){var r,o=n.attr(t);return o?(r=o.split(","),void e.each(r,function(a,t){t=e.trim(t).split(" ")[0],l.push({src:t,element:n[0]})})):!0})}):c.find("img:uncached").each(function(){l.push({src:this.src,element:this})}),o=l.length,i=0,0===o&&(a.call(c[0]),s.resolveWith(c[0])),e.each(l,function(r,l){var d=new Image,u="load."+n+" error."+n;e(d).one(u,function h(n){var r=[i,o,"load"==n.type];return i++,t.apply(l.element,r),s.notifyWith(l.element,r),e(this).off(u,h),i==o?(a.call(c[0]),s.resolveWith(c[0]),!1):void 0}),d.src=l.src})}),s.promise()}}(jQuery);var browser=get_browser_info();