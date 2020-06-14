function updateNavbarScrollState() {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
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

function selectCategory(category) {
    $('.category-overview .category').removeClass('selected');
    $('.category-overview .' + category).addClass('selected');

    $('.category-cards .category').hide();
    $('.category-cards .' + category).show();

    return false;
}

$(document).ready(function () {
    new WOW().init();

    updateNavbarScrollState();

    //animated header class
    $(window).scroll(function () {
        updateNavbarScrollState();
    });
});
