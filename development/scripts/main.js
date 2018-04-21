$(document).ready(function () {
    animate();
});


var prevX;
var isMouseDown = false;
var x;
var r;

var slow = 15;
var i = 0;

var frame = [-540, -360, -185, 0];
var k = 0;
var $slide = $('.slide');
var $horse = $('.horse');

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


$slide.mouseup(function (event) {
    isMouseDown = false;
    $(this).css({
        cursor: 'grab',
        cursor: '-moz-grab',
        cursor: '-webkit-grab'
    });
    refreshSlow();
});

$slide.on('mousedown vmousedown', (function (event) {
    $(this).css({
        cursor: 'grabbing',
        cursor: '-moz-grabbing',
        cursor: '-webkit-grabbing'
    });
    isMouseDown = true;
    prevX = event.pageX;
    refreshSlow();
}));

$slide.on('mousemove vmousemove', (function (event) {
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
