'use strict';

function updateNavbarScrollState() {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
        //console.log('a');
        $('.navbar,.breadcrumb-container').addClass('navbar-scroll');
    } else {
        //console.log('a');
        $('.navbar,.breadcrumb-container').removeClass('navbar-scroll');
    }
}

function scrollDown() {
    window.scroll({
        top: window.innerHeight - 50,
        left: 0,
        behavior: 'smooth'
    });
}

function sendContactForm(type) {
    $('#contact-success').hide();
    $('#contact-error').hide();
    console.log('sendContactForm');

    grecaptcha.ready(function () {
        grecaptcha.execute('6LfXNMcZAAAAALYnf3GpUqw5uotVMyjhLNU438i9', { action: 'contactForm' }).then(function (token) {
            var form = document.getElementById('contact-form');
            form.classList.add('was-validated');
            if (form.checkValidity() === true) {

                $.ajax({
                    type: 'POST',
                    url: 'https://prod-168.westeurope.logic.azure.com/workflows/2dd6d3e5e6704ed1afa801d769e4708b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=r26oUrw9V_-PToMEcu1HhY7w7-LQxyvK5H0M9U8knLc',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify({ 
                        email: $('#contact-email').val(), 
                        text: type + '\n\n' + $('#contact-text').val(),
                        token: token,
                        action: 'contactForm' })
                }).done(function () {
                    $('#contact-success').show();
                }).fail(function (error) {
                    if (error.status === 200 || error.status === 202) {
                        $('#contact-success').show();
                    } else {
                        $('#contact-error').show();
                    }
                });
            }
        });
    });
}

function selectCategory(category) {
    $('.category-overview .category').removeClass('selected');
    $('.category-overview .' + category).addClass('selected');

    $('.category-cards .category').hide();
    $('.category-cards .' + category).show();

    return false;
}

function loadEventsOverview(eventsTable) {
    $.get('https://cdw-planner.azurewebsites.net/api/events?past=false', function (data) {
        var converter = new showdown.Converter();

        data.slice(0, 3).forEach(function (event) {
            var row = '';
            var date = moment(new Date(event.date)).startOf('day');
            var formattedDate = date.format('DD.MM.YYYY');
            var description = converter.makeHtml(event.location);
            if (event.type == 'CoderDojo Virtual') {
                description = 'Online Event';
            }

            row += '<tr>';
            row += '<td>';
            row += '<span class=\'badge badge-primary badge-pill event-type event-type-' + event.type.toLowerCase().replace(' ', '-') + '\'>' + event.type + '</span>';
            row += '<span class=\'d-block d-sm-none\'>' + formattedDate + '</span>';
            row += '</td>';

            row += '<td class=\'d-none d-sm-table-cell\'>' + formattedDate + '</td>';
            row += '<td class=\'d-none d-sm-table-cell\'>' + description + '</td>';

            row += '</tr>';
            eventsTable.append(row);
        });

        $('.loadingText').hide();
    });
}

function loadEvents(eventsTable) {
    $.get('https://cdw-planner.azurewebsites.net/api/events?past=false', function (data) {
        var converter = new showdown.Converter();

        data.forEach(function (event) {
            var row = '';

            var date = moment(new Date(event.date)).startOf('day');
            var formattedDate = date.format('DD.MM.YYYY');

            var formattedBeginTime = '13:45';
            var formattedEndTime = '18:00';

            if (event && event.workshops.length) {
                formattedBeginTime = moment(event.workshops
                    .map(function (w) { return w.begintime; })
                    .reduce(function (min, val) { return min && min < val ? min : val; }, null))
                    .format('HH:mm');

                formattedEndTime = moment(event.workshops
                    .map(function (w) { return w.endtime; })
                    .reduce(function (max, val) { return max && max > val ? max : val; }, null))
                    .format('HH:mm');
            }

            row += '<tr>';

            // event time
            row += '<td class=\'text-nowrap text-center d-none d-sm-table-cell\'>';
            row += '<a id=\'' + formattedDate + '\'></a>';
            row += '<div class=\'event-time\'><span class=\'badge badge-primary badge-pill event-type event-type-' + event.type.toLowerCase().replace(' ', '-') + '\'>' + event.type + '</span><br />' + formattedDate + '<br />' + formattedBeginTime + ' - ' + formattedEndTime + '</div>';
            row += '</td>';

            // event time xs
            row += '<td class=\'event\'>';
            row += '<div class=\'d-block d-sm-none event-time event-time-xs\'>';
            row += '<span class=\'badge badge-primary badge-pill event-type event-type-' + event.type.toLowerCase().replace(' ', '-') + '\'>' + event.type + '</span><br/><b>' + formattedDate + ' ' + formattedBeginTime + ' - ' + formattedEndTime + '</b>';
            row += '</div>';

            // workshops
            if (event.workshops && event.workshops.length) {
                event.workshops.forEach(workshop => {
                    row += '<div class=\'workshop\'>';
                    row += '<h3><small><span class=\'d-inline d-sm-none\'>' + moment(workshop.begintime).format('DD.MM.YYYY') + '</span> ' + moment(workshop.begintime).format('HH:mm') + ' - ' + moment(workshop.endtime).format('HH:mm') + '</small><br/>' + workshop.title + '</h3>';

                    if (workshop.targetAudience) {
                        row += '<p><strong>Für wen:</strong> ' + converter.makeHtml(workshop.targetAudience) + '</p>';
                    }

                    row += '<p><strong>Programm</strong></p>';
                    row += '<p>';
                    if (workshop.description) {
                        row += converter.makeHtml(workshop.description);
                    } else {
                        row += 'wird noch bekanntgegeben';
                    }
                    row += '</p>';

                    row += '<p><strong>Voraussetzungen</strong></p>';
                    if (workshop.prerequisites) {
                        row += converter.makeHtml(workshop.prerequisites);
                    } else {
                        row += 'werden noch bekanntgegeben';
                    }

                    row += '<p><strong>Mentoren:</strong> ' + ((workshop.mentors && workshop.mentors.length) ? workshop.mentors.join(', ') : 'werden noch bekanntgegeben') + '</p>';

                    row += '<p><strong>Link zum Teilnehmen:</strong> ' + (workshop.zoom ? '<a href=\'' + workshop.zoom + '\' target=\'_blank\'>' + workshop.zoom + '</a>' : 'wird noch bekanntgegeben') + '</p>';

                    row += '<p><strong>Zoom User für Mentoren:</strong> ' + (workshop.zoomUser ? workshop.zoomUser.replace(/@linz.coderdojo.net/, '') : '') + '</p>';

                    row += '</div>';
                });
            } else {
                row += '<p>Workshops werden noch bekanntgegeben</p>';
            }

            row += '</td>';

            row += '</tr>';

            eventsTable.append(row);
        });

        $('.loadingText').hide();
    });
}

$(document).ready(function () {
    new WOW().init();

    updateNavbarScrollState();

    //animated header class
    $(window).scroll(function () {
        updateNavbarScrollState();
    });

    var eventsTable = $('#eventsTable');
    if (eventsTable && eventsTable.length) {
        loadEvents(eventsTable);
    }

    var eventsOverviewTable = $('#eventsOverviewTable');
    if (eventsOverviewTable && eventsOverviewTable.length) {
        loadEventsOverview(eventsOverviewTable);
    }
});
