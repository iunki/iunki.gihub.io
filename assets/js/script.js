$(function(){setTimeout(function(){$("#line1").addClass("animated")},1500),setTimeout(function(){$("#line2, #line3, #line4").addClass("animated")},1e3),$(document).scroll(function(e){$(".offer__title").css("padding-left",window.pageYOffset+"px"),$(".offer__text").css("padding-left",1.5*window.pageYOffset+"px")});var e=document.createElement("audio");e.setAttribute("src","../../../assets/audio/where-is-my-mind.mp3"),e.play()});var $slide,$horse,prevX,x,r,isMobile=!1,mobileEvents=[],isMouseDown=!1,slow=15,i=0,frame=[-540,-360,-185,0],k=0;function animate(){requestAnimationFrame(animate),$slide.css({backgroundPositionX:"+=0.7px"}),i%slow==0&&(k==frame.length&&(k=0),$horse.css("background-position",frame[k]+"px 0"),k++),i++}function refreshSlow(){slow=15}function bindEvents(){$slide.on("mouseup "+mobileEvents.mouseup,function(e){console.log(mobileEvents.mouseup),isMouseDown=!1,$(this).css({cursor:"grab",cursor:"-moz-grab",cursor:"-webkit-grab"}),refreshSlow()}),$slide.on("mousedown "+mobileEvents.mousedown,function(e){$(this).css({cursor:"grabbing",cursor:"-moz-grabbing",cursor:"-webkit-grabbing"}),isMouseDown=!0,prevX=e.pageX,refreshSlow()}),$slide.on("mousemove "+mobileEvents.mousemove,function(e){isMouseDown&&(x=e.pageX,0<(r=x-prevX)?slow=6:($horse.css("background-position",frame[0]+"px 0"),k=0),$slide.css({backgroundPositionX:"+="+r+"px"}),prevX=x)})}$(function(){$slide=$(".slide"),$horse=$(".horse"),animate(),(isMobile=window.innerWidth<600)&&(mobileEvents.mousedown="vmousedown",mobileEvents.mousemove="vmousemove",mobileEvents.mouseup="vmouseup"),bindEvents()});