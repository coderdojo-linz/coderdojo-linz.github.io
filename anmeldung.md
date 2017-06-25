---
layout: default
title: Anmeldung
---

# Anmeldung

Eine Anmeldung ist nur erforderlich, wenn du noch keinen CoderDojo Mitgliedsausweis hast. Hast du bereits deinen Mitgliedsausweis erhalten, kannst du ohne Anmeldung zu allen <a href="termine.html">Terminen</a> kommen. 

<div class="row registration-form">
  <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
    <div class="card card-block">
        <form>
            <h3>Ich möchte am CoderDojo teilnehmen</h3>
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

## Was muss mitgebracht werden?

Grundsätzlich muss jedes Kind einen Laptop mitbringen. Der Laptop muss aber nicht besonders schnell sein. Es ist egal, ob er mit Windows, Mac OS oder Linux betrieben wird. iPads, Android-Tablets oder Smartphones reichen nicht aus.

Falls kein Laptop zur Verfügung steht, geben Sie bitte bei der Anmeldung an, dass ein Leihgerät benötigt wird. Wir haben eine limitierte Anzahl an Geräten, die wir während der CoderDojos zur Verfügung stellen können.

## Ort

Das CoderDojo findet üblicherweise im [Wissensturm](http://www.linz.at/wissensturm/){:target="_blank"} in der Kärtnerstraße 26, 4020 Linz statt.
Ausnahmen davon sind soweit jetzt schon bekannt der **21. Juli**, der **04. August** und der **15. September** 2107. Unter [Termine](termine.html) findest du die aktuellen Termine mit Verstaltungsort.

Auf der Webseite des Wissensturms findest du noch weitere Hinweise zu [Anreise und Parken](http://www.linz.at/wissensturm/anreise.asp){:target="_blank"}.

<iframe frameborder="0" style="border: 0; width: 100%; height: 400px;" src="https://www.google.com/maps/embed/v1/place?q=Wissensturm%20Volkshochschule%20Linz%20Stadtbibliothek%2C%20K%C3%A4rntnerstra%C3%9Fe%2C%20Linz%2C%20Austria&key=AIzaSyAAgaQBWJByXn9NNkGVGGRFRxGXUWXxBXE" allowfullscreen></iframe>