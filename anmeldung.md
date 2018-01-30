---
layout: default
title: Anmeldung
---

# Dein erster Besuch beim CoderDojo Linz

**Eine Anmeldung ist nur erforderlich, wenn du noch nie beim CoderDojo warst. Hast du bereits einmal teilgenommen, kannst du ohne Anmeldung zu allen <a href="termine.html">Terminen</a> kommen.**

So läuft dein erster Besuch beim CoderDojo Linz ab:

1. Lies die Informationen durch, die wir für dich zusammengestellt haben.<br/>
   <a class="btn btn-material-light-blue-700" href="/infos/kinder.html" target="_blank">Infos für Coder&nbsp;...</a>&nbsp;

1. Lies gemeinsam mit deinen Eltern die Informationen durch, die wir für sie zusammengestellt haben.<br/>
   <a class="btn btn-material-light-blue-700" href="/infos/kinder.html" target="_blank">Infos für Eltern&nbsp;...</a>&nbsp;

1. Du füllst das <a href="#form">Anmeldeformular</a> unten aus.<br/>
   <a class="btn btn-material-light-blue-700" href="#form">Anmeldung&nbsp;...</a>&nbsp;

1. Wir schicken dir eine Email und bestätigen den Termin.

1. Du kommst mit <a href="/infos/eltern.html#Laptop" target="_blank">deinem Laptop</a> zum CoderDojo Linz in den <a href="#Wissensturm">Wissensturm</a>. Falls du keinen eigenen Laptop hast, gib im Anmeldeformular an, dass du ein Leihgerät brauchst.

1. Eine Mentorin oder ein Mentor vom CoderDojo Linz zeigt dir, wie das CoderDojo funktioniert und gibt dir Tipps, womit und wie du starten könntest.

## <a name="form" />Anmeldung

<div class="row registration-form">
  <div class="col-sm-10 col-md-8 col-lg-6">
    <div class="card card-block">
        <div class="registration-finished hide">
            <h3>Anmeldung abgeschlossen</h3>
            <p>Danke für deine Anmeldung, wir freuen uns schon auf dich!</p>
        </div>
        <div class="registration-error hide">
            <h3>Fehler bei der Anmeldung</h3>
            <p>Die Anmeldung ist leider fehlgeschlagen. Bitte kontaktiere uns unter <a href="mailto:info@coderdojo-linz.org">info@coderdojo-linz.org</a>.</p>
        </div>
        <form class="registration" id="registration-form">
            <h3>Ich möchte zum ersten Mal zum CoderDojo kommen</h3>
            <div class="form-group">
                <label for="event">Termin</label>
                <select id="event" class="form-control">
                </select>
                <div style="padding-top: 15px"><small><small>Der Ort kann sich in seltenen Fällen ändern. Bitte überprüfe einige Tage vor der Veranstaltung unter <a href="termine.html" target="_blank">Termine</a>, ob der Veranstaltungsort geändert wurde.</small></small></div>
            </div>
            <div class="form-group">
                <label for="givenName">Vorname</label>
                <input type="text" class="form-control" id="givenName" required="required" 
                    oninvalid="this.setCustomValidity('Gib bitte den Vornamen des Teilnehmers an.')" oninput="setCustomValidity('')">
            </div>
            <div class="form-group">
                <label for="familyName">Nachname</label>
                <input type="text" class="form-control" id="familyName" required="required" 
                    oninvalid="this.setCustomValidity('Gib bitte den Nachnamen des Teilnehmers an.')" oninput="setCustomValidity('')">
            </div>
            <div class="form-group">
                <label for="gender">Mädchen / Junge</label>
                <select id="gender" class="form-control" required="required"
                    oninvalid="this.setCustomValidity('Gib bitte an, ob der Teilnehmer ein Mädchen oder ein Junge ist.')" oninput="setCustomValidity('')">
                    <option value="" disabled selected></option>
                    <option value="f">Mädchen</option>
                    <option value="m">Junge</option>
                </select>
            </div>
            <div class="form-group">
                <label for="yearOfBirth">Geburtsjahr</label>
                <select id="yearOfBirth" class="form-control" required="required"
                    oninvalid="this.setCustomValidity('Gib bitte das Geburtsjahr des Teilnehmers an.')" oninput="setCustomValidity('')">
                    <option value="" disabled selected></option>
                </select>
            </div>
            <div class="form-group">
                <label for="rentalNotebook">Ich brauche ein Leih-Notebook</label>
                <select id="rentalNotebook" class="form-control" required="required"
                    oninvalid="this.setCustomValidity('Gib bitte an, ober der Teilnehmer ein Leih-Notebook braucht.')" oninput="setCustomValidity('')">
                    <option value=""></option>
                    <option value="no">Nein</option>
                    <option value="yes">Ja</option>
                </select>
            </div>
            <div class="form-group">
                <label for="email">Email Adresse</label>
                <input type="email" class="form-control" id="email" required="required"
                    oninvalid="this.setCustomValidity('Gib uns bitte eine Email-Adresse, unter dir wir dich bei Fragen oder Termin-Änderungen erreichen können.')" oninput="setCustomValidity('')">
            </div>
            <div class="pull-right">
                <button type="submit" class="btn btn-material-light-blue-700">Anmelden</button>
            </div>
        </form>
    </div>
  </div>
</div>


## <a name="Wissensturm" />Ort

Das CoderDojo findet üblicherweise im [Wissensturm](http://www.linz.at/wissensturm/){:target="_blank"} in der Kärtnerstraße 26, 4020 Linz statt.
Ausnahmen davon sind soweit jetzt schon bekannt der **15. Dezember 2017** und der **18. Mai 2018**. Unter [Termine](termine.html) findest du die aktuellen Termine mit jeweiligem Verstaltungsort.

Der Ort kann sich in seltenen Fällen ändern. Bitte überprüfe einige Tage vor der Veranstaltung unter <a href="termine.html" target="_blank">Termine</a>, ob der Veranstaltungsort geändert wurde.

Auf der Webseite des Wissensturms findest du noch weitere Hinweise zu [Anreise und Parken](http://www.linz.at/wissensturm/anreise.asp){:target="_blank"}.

<iframe frameborder="0" style="border: 0; width: 100%; height: 400px;" src="https://www.google.com/maps/embed/v1/place?q=Wissensturm%20Volkshochschule%20Linz%20Stadtbibliothek%2C%20K%C3%A4rntnerstra%C3%9Fe%2C%20Linz%2C%20Austria&key=AIzaSyAAgaQBWJByXn9NNkGVGGRFRxGXUWXxBXE" allowfullscreen></iframe>

<script language="javascript">

$.get("https://participants-management-service.azurewebsites.net/api/events/?past=false", function(data) {
    data.filter(item => item.type != "playground").slice(1, 4).forEach(function(item) {
         $("#event").append("<option value=\"" + item._id + "\">" + (new moment(item.date)).format("DD. MMMM YYYY") + " - " + (item.location ? item.location : "Wissensturm") + "</option>");
    });

    var currentYear = new moment().year();
    for (var i = currentYear - 6; i >= currentYear - 18; i--) {
        $("#yearOfBirth").append("<option value=\"" + i.toString() + "\">" + i.toString() + "</option>");
    }
});

$("#registration-form").submit(function () {
    var url = "https://prod-26.northeurope.logic.azure.com:443/workflows/b6064052cfbc4d7995dfcd32ce28899a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rFRMP5l-GmN8t0k0h2YHd98T5zMZp3DitjsQDmnkTos";

    var eventId = $("#event").val();

    var registration = {
        "eventId": eventId,
        "eventDate": $("#event option:selected").text(),
        "participants": {
            "email": $("#email").val(),
            "givenName": $("#givenName").val(),
            "familyName": $("#familyName").val(),
            "gender": $("#gender").val(),
            "yearOfBirth": $("#yearOfBirth").val()
        },
        "needsComputer": $("#rentalNotebook").val() == "yes" ? true : false
    };

    $.ajax({ 
        url: url, 
        type: "POST",
        data: JSON.stringify(registration), 
        contentType:"application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            $(".registration-finished").removeClass("hide");
            $(".registration").addClass("hide");
        }
    }).fail(function(jqXHR, textStatus) {
        if (textStatus == "parsererror") {
            $(".registration-finished").removeClass("hide");
            $(".registration").addClass("hide");
        } else {
            $(".registration-error").removeClass("hide");
            $(".registration").addClass("hide");
        }
    });

    return false;
});

</script>
