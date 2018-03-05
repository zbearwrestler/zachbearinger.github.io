console.log(2);
var top = 100;
var _height = $('.menu').offset().top - parseFloat($('.menu').css('margin-top').replace(/auto/, 0));
$(window).scroll(function(event) {
    var y = $(main).position().top;
    print(y);
    print(top);
    if (y >= top) {
        $('.sidebar').addClass('fixed');
        $('.sidebar').removeClass('sidemenu');
    } else {
        $('.sidebar').removeClass('fixed');
        $('.sidebar').addClass('sidemenu');
    }
});
