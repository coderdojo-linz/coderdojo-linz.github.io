'use strict';

function register() {
  let url =
    'https://prod-26.northeurope.logic.azure.com:443/workflows/b6064052cfbc4d7995dfcd32ce28899a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rFRMP5l-GmN8t0k0h2YHd98T5zMZp3DitjsQDmnkTos';

  let eventId = $('#event').val();

  const registration = {
    eventId: eventId,
    eventDate: $('#event option:selected').text(),
    participants: {
      email: $('#email').val(),
      givenName: $('#givenName').val(),
      familyName: $('#familyName').val(),
      //gender: $('#gender').val(),
      //yearOfBirth: $('#yearOfBirth').val(),
    },
    //needsComputer: $('#rentalNotebook').val() == 'yes' ? true : false,
  };

  $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(registration),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      $('.registration-finished').removeClass('d-none');
      $('.registration').addClass('hide');
    },
  }).fail(function (jqXHR, textStatus) {
    if (textStatus == 'parsererror') {
      $('.registration-finished').removeClass('d-none');
      $('.registration').addClass('d-none');
    } else {
      $('.registration-error').removeClass('d-none');
      $('.registration').addClass('d-none');
    }
  });

  return false;
}

function addParticipant() {
  $('.registration-finished').addClass('d-none');
  $('.registration').removeClass('d-none');
}

function updateNavbarScrollState() {
  let scroll = $(window).scrollTop();

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
    behavior: 'smooth',
  });
}

function sendContactForm(type) {
  $('#contact-success').hide();
  $('#contact-error').hide();
  console.log('sendContactForm');

  grecaptcha.ready(function () {
    grecaptcha
      .execute('6LfXNMcZAAAAALYnf3GpUqw5uotVMyjhLNU438i9', {
        action: 'contactForm',
      })
      .then(function (token) {
        let form = document.getElementById('contact-form');
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
              action: 'contactForm',
            }),
          })
            .done(function () {
              $('#contact-success').show();
            })
            .fail(function (error) {
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
  $.get(
    'https://cdw-planner.azurewebsites.net/api/events?past=false',
    function (data) {
      let converter = new showdown.Converter();

      data.sort((a, b) =>
        a.date < b.date
          ? -1
          : a.date > b.date
          ? 1
          : a.type.toLowerCase() === 'coderdojo'
          ? -1
          : 1
      );

      data.slice(0, 3).forEach(function (event) {
        let row = '';
        let date = moment(new Date(event.date)).startOf('day');
        let formattedDate = date.format('DD.MM.YYYY');
        let description = converter
          .makeHtml(event.location)
          .replace(/<p>/, '')
          .replace(/<\/p>/, '');
        if (event.type == 'CoderDojo Virtual') {
          description = 'Online Event';
        }

        row += '<tr>';
        row += '<td>';
        row +=
          "<span class='badge badge-primary badge-pill event-type event-type-" +
          event.type.toLowerCase().replace(/\s/g, '-') +
          "'>" +
          event.type +
          '</span>';
        row += "<span class='d-block d-sm-none'>" + formattedDate + '</span>';
        row += '</td>';

        row += "<td class='d-none d-sm-table-cell'>" + formattedDate + '</td>';
        row += "<td class='d-none d-sm-table-cell'>" + description + '</td>';

        row += '</tr>';
        eventsTable.append(row);
      });

      $('.loadingText').hide();
    }
  );
}

function loadEvents(eventsTable) {
  $.get(
    'https://cdw-planner.azurewebsites.net/api/events?past=false',
    function (data) {
      let converter = new showdown.Converter();

      data.sort((a, b) =>
        a.date < b.date
          ? -1
          : a.date > b.date
          ? 1
          : a.type.toLowerCase() === 'coderdojo'
          ? -1
          : 1
      );

      data.forEach(function (event) {
        let row = '';

        let date = moment(new Date(event.date)).startOf('day');
        let formattedDate = date.format('DD.MM.YYYY');

        let formattedBeginTime = '15:00';
        let formattedEndTime = '19:00';

        if (event.type.toLowerCase() === 'coderdojo') {
          formattedBeginTime = '16:00';
          formattedEndTime = '18:00';

          if (formattedDate === '13.10.2023') {
            if (event.location.indexOf('Leonding') >= 0) {
              formattedBeginTime = '15:00';
              formattedEndTime = '17:00';
            }
          }
        }

        if (event && event.workshops.length) {
          formattedBeginTime = moment(
            event.workshops
              .map(function (w) {
                return w.begintime;
              })
              .reduce(function (min, val) {
                return min && min < val ? min : val;
              }, null)
          ).format('HH:mm');

          formattedEndTime = moment(
            event.workshops
              .map(function (w) {
                return w.endtime;
              })
              .reduce(function (max, val) {
                return max && max > val ? max : val;
              }, null)
          ).format('HH:mm');
        }

        row += '<tr>';

        // event time
        row += "<td class='text-nowrap text-center d-none d-sm-table-cell'>";
        row += "<a id='" + formattedDate + "'></a>";
        row +=
          "<div class='event-time'><span class='badge badge-primary badge-pill event-type event-type-" +
          event.type.toLowerCase().replace(/\s/g, '-') +
          "'>" +
          event.type +
          '</span><br />' +
          formattedDate +
          '<br />' +
          formattedBeginTime +
          ' - ' +
          formattedEndTime +
          '</div>';
        row += '</td>';

        // event time xs
        row += "<td class='event'>";
        row += "<div class='d-block d-sm-none event-time event-time-xs'>";
        row +=
          "<span class='badge badge-primary badge-pill event-type event-type-" +
          event.type.toLowerCase().replace(/\s/g, '-') +
          "'>" +
          event.type +
          '</span><br/><b>' +
          formattedDate +
          ' ' +
          formattedBeginTime +
          ' - ' +
          formattedEndTime +
          '</b>';
        row += '</div>';

        // event location
        if (event.location && event.type === 'CoderDojo') {
          row += '<p><b>Ort:</b> ' + event.location + '</p>';

          let registrationLink = '';
          let location = '';
          if (formattedDate === '01.12.2023') {
            if (event.location.indexOf('Leonding') >= 0) {
              registrationLink = 'https://forms.office.com/e/BkmTrFg3Mr';
              //location = 'im TIC Steyr';
            } else {
              registrationLink = 'https://forms.office.com/e/1df7uFkfah';
              //location = 'in der Grand Garage'
            }
          }

          if (registrationLink) {
            row +=
              '<p>Für dieses CoderDojo ist eine Anmeldung erforderlich.</p>' +
              '<p><a class="btn btn-primary" target="_blank" href="' +
              registrationLink +
              '">Zur Anmeldung</a></p>';
          } else if (
            formattedDate !== '06.09.2023' &&
            formattedDate !== '07.09.2023' &&
            formattedDate !== '08.09.2023' &&
            formattedDate !== '09.09.2023' &&
            formattedDate !== '10.09.2023'
          ) {
            row +=
              '<p>Der Link zur Anmeldung wird 2 Wochen vor dem Event bekannt gegeben.</p>';
          }
        }

        // workshops
        if (event.workshops && event.workshops.length) {
          event.workshops.forEach((workshop) => {
            row += "<div class='workshop'>";
            row +=
              '<h3 id="' +
              workshop.shortCode +
              "\"><small><span class='d-inline d-sm-none'>" +
              moment(workshop.begintime).format('DD.MM.YYYY') +
              '</span> ' +
              moment(workshop.begintime).format('HH:mm') +
              ' - ' +
              moment(workshop.endtime).format('HH:mm') +
              '</small><br/>' +
              workshop.title +
              '</h3>';

            if (workshop.targetAudience && workshop.targetAudience !== '-') {
              row +=
                '<p><strong>Für wen:</strong> ' +
                converter.makeHtml(workshop.targetAudience) +
                '</p>';
            }

            row += '<p><strong>Programm</strong></p>';
            row += '<p>';
            if (workshop.description) {
              row += converter.makeHtml(workshop.description);
            } else {
              row += 'wird noch bekanntgegeben';
            }
            row += '</p>';

            if (workshop.prerequisites && workshop.prerequisites !== '-') {
              row += '<p><strong>Voraussetzungen</strong></p>';
              if (workshop.prerequisites) {
                row += converter.makeHtml(workshop.prerequisites);
              } else {
                row += 'werden noch bekanntgegeben';
              }
            }

            if (
              workshop.mentors &&
              workshop.mentors.length &&
              workshop.mentors[0] !== '-'
            ) {
              row +=
                '<p><strong>Mentoren:</strong> ' +
                (workshop.mentors && workshop.mentors.length
                  ? workshop.mentors.join(', ')
                  : 'werden noch bekanntgegeben') +
                '</p>';
            }

            let zoomLink = workshop?.zoomShort?.shortenedLink ?? workshop.zoom;
            if (zoomLink && zoomLink !== '-') {
              row +=
                '<p><strong>Link zum Teilnehmen:</strong> ' +
                (zoomLink
                  ? "<a href='" +
                    zoomLink +
                    "' target='_blank'>" +
                    zoomLink +
                    '</a>'
                  : 'wird noch bekanntgegeben') +
                '</p>';
            }

            if (workshop.zoomUser && workshop.zoomUser !== '-') {
              row +=
                '<p><strong>Zoom User für Mentoren:</strong> ' +
                (workshop.zoomUser
                  ? workshop.zoomUser.replace(/@linz.coderdojo.net/, '')
                  : '') +
                '</p>';
            }

            row += '</div>';
          });
        } else {
          if (event.type.toLowerCase() === 'coderdojo virtual') {
            row +=
              '<p>Die Workshops werden zwei Tage vor dem Event bekanntgegeben. Keine Anmeldung erforderlich.</p>';
          }
        }

        // virtual coderdojo tips
        if (event.type.toLowerCase() === 'coderdojo virtual') {
          row +=
            '<p><a href="#virtualCoderDojos">Tipps zu Online CoderDojos</p>';
        }

        row += '</td>';

        row += '</tr>';

        eventsTable.append(row);
      });

      $('.loadingText').hide();

      // scroll to hash parameter
      if (window.location.hash) {
        let workshop = window.location.hash.substr(1);
        let selectedWorkshop = document.getElementById(workshop);
        if (selectedWorkshop) {
          selectedWorkshop.scrollIntoView();
        }
      }
    }
  );
}

function toggleShowMore(element, button) {
  const toggleElement = document.querySelector(element);
  const toggleButton = document.querySelector(button);

  if (toggleElement) {
    if (toggleElement.classList.contains('show-more')) {
      toggleElement.classList.remove('show-more');

      if (toggleButton) {
        toggleButton.innerText = 'Mehr anzeigen';
      }
    } else {
      toggleElement.classList.add('show-more');

      if (toggleButton) {
        toggleButton.innerText = 'Weniger anzeigen';
      }
    }
  }
}

function loadRegistrationEvents() {
  $.get(
    'https://cdw-planner.azurewebsites.net/api/events?past=false',
    function (data) {
      //  && (new moment(item.date)).format("YYYY-MM-DD") != "2018-06-08"
      data
        .filter(
          (item) =>
            item.type.toLowerCase() === 'coderdojo' &&
            new moment(item.date).format('YYYY-MM-DD') != '2019-03-01'
        )
        .slice(0, 4)
        .forEach(function (item) {
          $('#event').append(
            '<option value="' +
              item._id +
              '">' +
              new moment(item.date).format('DD. MMMM YYYY') +
              ' - ' +
              (item.location ? item.location : 'Wissensturm') +
              '</option>'
          );
        });

      let currentYear = new moment().year();
      for (let i = currentYear - 6; i >= currentYear - 18; i--) {
        $('#yearOfBirth').append(
          '<option value="' + i.toString() + '">' + i.toString() + '</option>'
        );
      }
    }
  );
}

$(document).ready(function () {
  new WOW().init();

  updateNavbarScrollState();

  //animated header class
  $(window).scroll(function () {
    updateNavbarScrollState();
  });

  let eventsTable = $('#eventsTable');
  if (eventsTable && eventsTable.length) {
    loadEvents(eventsTable);
  }

  let eventsOverviewTable = $('#eventsOverviewTable');
  if (eventsOverviewTable && eventsOverviewTable.length) {
    loadEventsOverview(eventsOverviewTable);
  }

  let registrationForm = $('form#registration-form');
  if (registrationForm) {
    loadRegistrationEvents();
  }

  // Get the forms we want to add validation styles to
  let forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  let validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
});
