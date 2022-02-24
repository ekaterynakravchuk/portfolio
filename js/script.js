$(function() {
    $('.switch').on('click', function(e) {
        $('body').toggleClass('switchMode');
        e.preventDefault();
    });
});