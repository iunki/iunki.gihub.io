$(function () {
    setTimeout(function () {
        $('#line1').addClass('animated')
    }, 1500);

    setTimeout(function () {
        $('#line2, #line3, #line4').addClass('animated')
    }, 1000);

    $(document).scroll(function (event) {
        $('.offer__title').css('padding-left', window.pageYOffset + 'px');
        $('.offer__text').css('padding-left', window.pageYOffset * 1.5 + 'px');
    });

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../../../assets/audio/where-is-my-mind.mp3');
    audioElement.play();
});