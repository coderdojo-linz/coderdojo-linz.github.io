'use strict';

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

function loadEvents(eventsTable) {
    $.get("https://participants-management-service.azurewebsites.net/api/events/?past=false", function (data) {
        var converter = new showdown.Converter();

        data.forEach(function (event) {
            var row = "";

            var date = moment(new Date(event.date)).startOf("day");
            var formattedDate = date.format("DD.MM.YYYY");

            row += "<tr>";

            // event time
            row += "<td class=\"text-nowrap text-center d-none d-sm-table-cell\">";
            row += "<a id=\"" + formattedDate + "\"></a>";
            row += "<div class=\"event-time\"><span class=\"badge badge-primary badge-pill event-type event-type-" + event.type.toLowerCase().replace(' ', '-') + "\">" + event.type + "</span><br />" + formattedDate + "<br />14:45 - 19:00</div>";
            row += "</td>";

            // event time xs
            row += "<td class=\"event\">";
            row += "<div class=\"d-block d-sm-none event-time event-time-xs\">";
            row += "<span class=\"badge badge-primary badge-pill event-type event-type-" + event.type.toLowerCase().replace(' ', '-') + "\">" + event.type + "</span><br/><b>" + formattedDate + " 14:45 - 19:00</b>";
            row += "</div>";

            // workshops
            if (event.workshops && event.workshops.length) {
                event.workshops.forEach(workshop => {
                    row += "<div class=\"workshop\">";
                    row += "<h3><small><span class=\"d-inline d-sm-none\">" + moment(workshop.begintime).format("DD.MM.YYYY") + "</span> " + moment(workshop.begintime).format("HH:mm") + " - " + moment(workshop.endtime).format("HH:mm") + "</small><br/>" + workshop.title + "</h3>";

                    if (workshop.targetAudience) {
                        row += "<p><strong>Für wen:</strong> " + converter.makeHtml(workshop.targetAudience) + "</p>";
                    }

                    row += "<p><strong>Programm</strong></p>";
                    row += "<p>";
                    if (workshop.description) {
                        row += converter.makeHtml(workshop.description);
                    } else {
                        row += "wird noch bekanntgegeben";
                    }
                    row += "</p>";

                    row += "<p><strong>Voraussetzungen</strong></p>";
                    if (workshop.prerequisites) {
                        row += converter.makeHtml(workshop.prerequisites);
                    } else {
                        row += "werden noch bekanntgegeben";
                    }

                    row += "<p><strong>Link zum Teilnehmen:</strong> " + (workshop.zoom ? "<a href=\"" + workshop.zoom + "\" target=\"_blank\">" + workshop.zoom + "</a>" : "wird noch bekanntgegeben") + "</p>";

                    row += "</div>";
                });
            } else {
                row += "<p>Workshops werden noch bekanntgegeben</p>";
            }

            row += "</td>";

            row += "</tr>";

            eventsTable.append(row);
            $(".loadingText").hide();
        });
    });
}

$(document).ready(function () {
    new WOW().init();

    updateNavbarScrollState();

    //animated header class
    $(window).scroll(function () {
        updateNavbarScrollState();
    });

    var eventsTable = $("#eventsTable");
    if (eventsTable) {
        loadEvents(eventsTable);
    }
});
