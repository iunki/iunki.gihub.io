var controller;

$(function () {
    controller = new ScrollMagic.Controller();

    setTimeout(function () {
        $('#line1').addClass('animated')
    }, 1500);

    setTimeout(function () {
        $('#line2, #line3, #line4').addClass('animated')
    }, 1000);


    animateOffer()
    pinStars()
    pinMountain()
    animateArt()
});


function animateOffer() {
    var scene1 = new ScrollMagic.Scene({triggerElement: '.offer', triggerHook: 'onLeave', duration: '600'})
        .setTween('.offer__title', {x: '40%', ease: Power1.easeOut, opacity: '0'})
        .addTo(controller)
    var scene2 = new ScrollMagic.Scene({triggerElement: '.offer__title', triggerHook: 'onLeave', duration: '500'})
        .setTween('.offer__text', {x: '70%', opacity: '0', ease: Power1.easeOut})
        .addTo(controller)
}

function pinStars() {
    var scene = new ScrollMagic.Scene({triggerElement: "#stars-trigger", duration: '1000', triggerHook: 'onLeave'})
        .setPin("#stars-pin")
        .addTo(controller);
}

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength()
    $el.css('stroke-dasharray', lineLength)
    $el.css('stroke-dashoffset', lineLength)
}

function pinMountain() {
    var $el = $('#mountain_path')

    pathPrepare($el)

    var tween = new TimelineMax()
        .add(TweenMax.to($el, 2, {strokeDashoffset: 0, ease: Power1.easeIn})) // draw word for 0.9
        .add(TweenMax.to($el, 2, {stroke: '#8a90a2', ease: Power2.easeOut}), 0)			// change color during the whole thing
        .add(TweenMax.to($el, 2, {fill: '#000000', ease: Power2.easeIn}), 0)			// change color during the whole thing

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: '#stars-trigger', duration: 800, triggerHook: 'onLeave', tweenChanges: true})
        .setTween(tween)
        .addTo(controller)
}

function animateArt() {
    var $el = $('#word')
    var $d1 = $('#dot1')
    var $d2 = $('#dot2')
    pathPrepare($el)
    pathPrepare($d1)
    pathPrepare($d2)

    var tween = new TimelineMax()
        .add(TweenMax.to($el, 2, {strokeDashoffset: 0, ease: Power1.easeIn}))
        .add(TweenMax.to($d1, 0.1, {strokeDashoffset: 0, ease: Power1.easeIn}, 0))
        .add(TweenMax.to($d2, 0.1, {strokeDashoffset: 0, ease: Power1.easeIn}))

    var scene = new ScrollMagic.Scene({triggerElement: '#art-trigger', duration: 200, triggerHook: 'onEnter', tweenChanges: true})
        .setTween(tween)
        .addTo(controller)
}

