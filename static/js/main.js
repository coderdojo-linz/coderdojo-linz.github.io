function updateNavbarScrollState() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        //console.log('a');
        $(".navbar").removeClass("navbar-scroll-top");
    } else {
        //console.log('a');
        $(".navbar").addClass("navbar-scroll-top");
    }
}

$(document).ready(function () {
    new WOW().init();

    updateNavbarScrollState();

    //animated header class
    $(window).scroll(function () {
        updateNavbarScrollState();
    });
});
