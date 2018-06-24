var isMobile = false,
    mobileEvents = [];

var $slide, $horse;


var prevX,
    isMouseDown = false,
    x,
    r,

    slow = 15,
    i = 0,

    frame = [-540, -360, -185, 0],
    k = 0;

$(function () {
    $slide = $('.slide');
    $horse = $('.horse');

    animate();
    isMobile = (window).innerWidth < 600;
    if (isMobile) {
        mobileEvents.mousedown = 'vmousedown';
        mobileEvents.mousemove = 'vmousemove';
        mobileEvents.mouseup = 'vmouseup';
    }

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../../../assets/audio/where-is-my-mind.mp3');
    audioElement.volume = 0.1;
    audioElement.play();

    bindEvents();
});


function animate() {
    requestAnimationFrame(animate);
    $slide.css({backgroundPositionX: '+=0.7px'});

    if ((i % slow) == 0) {
        if (k == frame.length) {
            k = 0;
        }
        $horse.css('background-position', frame[k] + 'px 0');
        k++;
    }
    i++;
}


function refreshSlow() {
    slow = 15;
}

function bindEvents() {
    $slide.on('mouseup ' + mobileEvents.mouseup, function (event) {
        console.log(mobileEvents.mouseup);
        isMouseDown = false;
        $(this).css({
            cursor: 'grab',
            cursor: '-moz-grab',
            cursor: '-webkit-grab'
        });
        refreshSlow();
    });

    $slide.on('mousedown ' + mobileEvents.mousedown, (function (event) {
        $(this).css({
            cursor: 'grabbing',
            cursor: '-moz-grabbing',
            cursor: '-webkit-grabbing'
        });
        isMouseDown = true;
        prevX = event.pageX;
        refreshSlow();
    }));

    $slide.on('mousemove ' + mobileEvents.mousemove, (function (event) {
        if (isMouseDown) {
            x = event.pageX;
            r = x - prevX;

            if (r > 0) { //ускоряемся
                slow = 6;
            } else {  // стоп
                $horse.css('background-position', frame[0] + 'px 0');
                k = 0;
            }
            $slide.css({backgroundPositionX: '+=' + r + 'px'});
            prevX = x;
        }
    }));
}


