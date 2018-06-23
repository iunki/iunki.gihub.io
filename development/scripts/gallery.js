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
    var scene = new ScrollMagic.Scene({triggerElement: "#stars-trigger", duration: '2000', triggerHook: 'onLeave'})
        .setPin(".stars-wrapper")
        .addTo(controller);
}

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength()
    $el.css('stroke-dasharray', lineLength)
    $el.css('stroke-dashoffset', lineLength)
}

function pinMountain() {
    var $mountain = $('path#mountain_path')

    pathPrepare($mountain)

    var tween = new TimelineMax()
        .add(TweenMax.to($mountain, 2, {strokeDashoffset: 0, ease: Power1.easeIn})) // draw word for 0.9
        .add(TweenMax.to('path', 2, {stroke: '#495c9a', ease: Power2.easeOut}), 0)			// change color during the whole thing
        .add(TweenMax.to('path', 2, {fill: '#000000', ease: Power2.easeIn}), 0)			// change color during the whole thing

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: '#stars-trigger', duration: 800, triggerHook: 'onLeave', tweenChanges: true})
        .setTween(tween)
        .addTo(controller)

}

