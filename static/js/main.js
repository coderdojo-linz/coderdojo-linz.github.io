function updateNavbarScrollState() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        //console.log('a');
        $(".navbar,.breadcrumb-container").addClass("navbar-scroll");
    } else {
        //console.log('a');
        $(".navbar,.breadcrumb-container").removeClass("navbar-scroll");
    }
}

function scrollDown() {
    window.scroll({
        top: window.innerHeight - 50,
        left: 0,
        behavior: 'smooth'
    });
}

function sendContactForm() {
    var form = document.getElementById('contact-form');
    form.classList.add('was-validated');
}

$(document).ready(function () {
    new WOW().init();

    updateNavbarScrollState();

    //animated header class
    $(window).scroll(function () {
        updateNavbarScrollState();
    });
});
