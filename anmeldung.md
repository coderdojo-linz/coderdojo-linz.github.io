---
layout: default
title: Anmeldung
---

# Dein erster Besuch beim CoderDojo Linz

**Eine Anmeldung ist nur erforderlich, wenn du noch keinen CoderDojo Mitgliedsausweis hast. Hast du bereits deinen Mitgliedsausweis erhalten, kannst du ohne Anmeldung zu allen <a href="termine.html">Terminen</a> kommen.**

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
  <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
    <div class="card card-block">
        <form>
            <h3>Ich möchte zum ersten Mal zum CoderDojo Linz kommen</h3>
            <div class="form-group">
                <label for="event">Termin</label>
                <select id="event" class="form-control">
                    <option value="2017-07-07">07. Juli 2017</option>
                    <option value="2017-07-21">21. Juli 2017</option>
                    <option value="2017-08-04">04. August 2017</option>
                    <option value="2017-08-1807">18. August 2017</option>
                </select>
            </div>
            <div class="form-group">
                <label for="givenName">Vorname</label>
                <input type="text" class="form-control" id="givenName" placeholder="Vorname des Teilnehmers" required="required" 
                    oninvalid="this.setCustomValidity('Gib bitte den Vornamen des Teilnehmers an.')" oninput="setCustomValidity('')">
            </div>
            <div class="form-group">
                <label for="familyName">Nachname</label>
                <input type="text" class="form-control" id="familyName" placeholder="Nachname des Teilnehmers" required="required" 
                    oninvalid="this.setCustomValidity('Gib bitte den Nachnamen des Teilnehmers an.')" oninput="setCustomValidity('')">
            </div>
            <div class="form-group">
                <label for="yearOfBirth">Geburtsjahr</label>
                <input type="number" class="form-control" id="yearOfBirth" placeholder="Geburtsjahr des Teilnehmers" required="required"
                    oninvalid="this.setCustomValidity('Gib bitte das Geburtsjahr des Teilnehmers an.')" oninput="setCustomValidity('')">
            </div>
            <div class="form-group">
                <label for="rentalNotebook">Ich brauche ein Leih-Notebook</label>
                <select id="rentalNotebook" class="form-control">
                    <option value="no">Nein</option>
                    <option value="yes">Ja</option>
                </select>
            </div>
            <div class="form-group">
                <label for="knowledge">Gibt es Vorkenntnisse?</label>
                <textarea rows="3" class="form-control" id="knowledge" placeholder="Hast du schon erste Erfahrungen im Programmieren gesammelt? Wenn ja, welche?"></textarea>
            </div>
            <div class="form-group">
                <label for="email">Email Adresse</label>
                <input type="email" class="form-control" id="email" placeholder="Email Adresse für Rückfragen und Infos" required="required"
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
Ausnahmen davon sind soweit jetzt schon bekannt der **21. Juli**, der **04. August** und der **15. September** 2017. Unter [Termine](termine.html) findest du die aktuellen Termine mit jeweiligem Verstaltungsort.

Auf der Webseite des Wissensturms findest du noch weitere Hinweise zu [Anreise und Parken](http://www.linz.at/wissensturm/anreise.asp){:target="_blank"}.

<iframe frameborder="0" style="border: 0; width: 100%; height: 400px;" src="https://www.google.com/maps/embed/v1/place?q=Wissensturm%20Volkshochschule%20Linz%20Stadtbibliothek%2C%20K%C3%A4rntnerstra%C3%9Fe%2C%20Linz%2C%20Austria&key=AIzaSyAAgaQBWJByXn9NNkGVGGRFRxGXUWXxBXE" allowfullscreen></iframe>