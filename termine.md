---
layout: default
title: Termine
bannerimage: /images/coderdojo-banner-3.jpg
---

# Termine

<table class="table" id="eventsTable">
	<thead>
		<tr>
			<th>Datum</th>
			<th>Ort</th>
			<th>Freie Plätze</th>
			<th>Anmeldung</th>
		</tr>
	</thead>
	<tbody>
		<tr class="subtitle">
			<td colspan="4">Schuljahr 2016 / 2017</td>
		</tr>
	</tbody>
</table>

<p class="loadingText">Die Termine werden geladen ...</p>

<p class="warning">* Ausgebucht: Für unsere regelmäßigen CoderDojo Teilnehmer haben wir auch für ausgebuchte Events Tickets reserviert. Die notwendigen Informationen zur Anmeldung bekommt ihr per Email.</p>

<p>* Playground: Wer beim normalen CoderDojo schon etwas Erfahrung gesammelt hat und mit Freunden an seinen Projekten arbeiten möchte, hat beim CoderDojo Playground Gelegenheit dazu. 
Den Link für die Anmeldung zum CoderDojo Playground erhaltet ihr, nachdem ihr zum ersten Mal an 
einem normalen Dojo teilgenommen habt.</p>

## Keine Tickets mehr verfügbar?

Schicke uns bitte eine Email an [info@coderdojo-linz.at](mailto:info@coderdojo-linz.at) mit folgenden Daten:

- Vorname
- Nachname
- Alter
- Vorkenntnisse im Programmieren (wenn vorhanden)

Wir setzen dich auch unsere Warteliste und melden uns bei dir, sobald wieder Plätze verfügbar sind.

## Was muss mitgebracht werden?

Grundsätzlich muss jedes Kind einen Laptop mitbringen. Der Laptop muss aber nicht besonders schnell sein. Es ist egal, ob er mit Windows, Mac OS oder Linux betrieben wird. iPads, Android-Tablets oder Smartphones reichen nicht aus.

Falls kein Laptop zur Verfügung steht, geben Sie bitte bei der Anmeldung an, dass ein Leihgerät benötigt wird. Wir haben eine limitierte Anzahl an Geräten, die wir während der CoderDojos zur Verfügung stellen können.

## Ort

Das CoderDojo findet üblicherweise im [Wissensturm](http://www.linz.at/wissensturm/){:target="_blank"} in der Kärtnerstraße 26, 4020 Linz statt.
Ausnahmen davon sind der **21. Juli** und der **04. August**. An diesen Terminen findet das CoderDojo an der Johannes Kepler Universität Linz statt.

Auf der Webseite des Wissensturms findet ihr noch weitere Hinweise zu [Anreise und Parken](http://www.linz.at/wissensturm/anreise.asp){:target="_blank"}.

<script language="javascript">
$.get("https://participants-management-service.azurewebsites.net/api/events/?tcStatus=true&past=false", function(data) {
	var eventsTable = $("#eventsTable");
	additionalEvents = [
		{ date: new Date(2017, 2, 24), type: "playground" },
		{ date: new Date(2017, 3, 7), type: "playground" },
		{ date: new Date(2017, 3, 22), type: "bootcamp" },
		{ date: new Date(2017, 3, 28), type: "playground" },
		{ date: new Date(2017, 4, 12), type: "playground" },
		{ date: new Date(2017, 5, 9), type: "playground" },
		{ date: new Date(2017, 5, 30), type: "playground" },
		{ date: new Date(2017, 6, 14), type: "playground" }
	].filter(function(event) { return event.date >= new Date(); });
	
	data = data.concat(additionalEvents).sort(function(a, b) {
		a = new Date(a.date);
		b = new Date(b.date);
		return a > b ? 1 : a < b ? -1 : 0;
	});

	data.forEach(function(event) {
		var date = moment(new Date(event.date)).startOf("day");
		var formattedDate = date.format("YYYY-MM-DD");
		var row = "<tr";
		if (event.type == "playground") {
			row += " class='playground'";
		} else if (event.type == "bootcamp") {
			row += " class='bootcamp'";
		}

		row += ">";
		row += "<td>" + date.format("dddd, DD. MMMM YYYY") + " 16:00 - 18:00</td>";

		row += "<td>";

		if (event.type == "playground") {
			row += "Playground*<br/>";
		} else if (event.type == "bootcamp") {
			row += "Junior Bootcamp - im Rahmen des <a href='https://coding-club-linz.github.io/global-azure-bootcamp-2017/junior-bootcamp.html' target='_blank'>Global Azure Bootcamps</a><br/>";
			row += "für junge Coder ab 13 Jahren<br/>";
		} else {
			row += "CoderDojo<br/>";
		}
		
		if (formattedDate == "2017-03-31") {
			row += "<a href=\"http://www.aec.at/center/skyloft/\" target=\"_blank\">AEC Sky Loft</a>, Ars-Electronica-Straße 1, 4040 Linz";
		} else if (formattedDate == "2017-05-19") {
			row += "<a href=\"https://www.grz.at/eBusiness/01_template1/1077528498541834366-1079162600655747802_1079162937542245764-1079162937542245764-NA-42-NA.html\" target=\"_blank\">GRZ IT Center GmbH</a>, Goethestr. 80, 4020 Linz";
		} else if (formattedDate == "2017-07-21" || formattedDate == "2017-08-04") {
			row += "<a href=\"http://www.jku.at/content/e213/e161/e6998/e6930\" target=\"_blank\">Johannes Kepler Universität Linz, Keplergebäude, Raum K 033C</a>, Altenberger Straße 69, 4040 Linz";
		} else {
			row += "Wissensturm, Kärtnerstraße 26, 4020 Linz";
		}

		if (formattedDate == "2017-06-02") {
			row += "<div class=\"sponsor\"><div>Der Robotics Workshop bei diesem CoderDojo wird von <a href=\"http://www.sparxsystems.at\" target=\"_blank\">Sparx Systems</a>, <a href=\"https://www.microsoft.com/de-at\" target=\"_blank\">Microsoft</a>, <a href=\"https://www.aec.at/\" target=\"_blank\">Ars Electronica</a> und <a href=\"http://www.voesi.or.at/\" target=\"_blank\">VÖSI</a> gesponsert.</div><img src=\"images/sponsors_20170602.jpg\" style=\"width: 100%; margin-top: 5px; margin-bottom: 0;\" /></div>";
		} else if (formattedDate == "2017-06-23") {
			row += "<div class=\"sponsor\"><div>Wir feiern den 2. Geburtstag vom CoderDojo Linz! Die Linzer Firma <a href=\"https://www.insite-it.net/en/start-en\" target=\"_blank\">INSITE IT</a> sponsert zu diesem Anlass Kuchen für alle :-). Vielen Dank!</div><a href=\"https://www.insite-it.net/en/start-en\" target=\"_blank\"><img src=\"images/insite-it-logo.png\" style=\"width: 100%; max-width: 250px; margin-top: 5px; margin-bottom: 0;\" /></a></div>";
		}

		row += "</td>";

		row += "<td id='availableTickets" + event.eventbriteId + "' class='text-right'></td>";
		if (event.type == "playground") {
			row += "<td></td>";
		} else if (event.type == "bootcamp") {
			row += "<td><a href='https://www.eventbrite.de/e/global-azure-bootcamp-austria-2017-tickets-31460449050' target='_blank'>zur Anmeldung</a></td>";
		} else {
			row += "<td><a href='https://www.eventbrite.de/e/coderdojo-linz-wissensturm-tickets-" + event.eventbriteId + "' target='_blank'>zur Anmeldung</a></td>";
		}
		
		row += "</tr>";
		eventsTable.append(row);
	});

	$(".loadingText").hide();

	data.forEach(function(event) {
		if (event.quantitySold >= event.quantityTotal) {
			$("#availableTickets" + event.eventbriteId).append("<span class='warning'>ausgebucht*</span>");
		} else {
			$("#availableTickets" + event.eventbriteId).append(event.quantityTotal - event.quantitySold);
		}
	});
});
</script>

<iframe frameborder="0" style="border: 0; width: 100%; height: 400px;" src="https://www.google.com/maps/embed/v1/place?q=Wissensturm%20Volkshochschule%20Linz%20Stadtbibliothek%2C%20K%C3%A4rntnerstra%C3%9Fe%2C%20Linz%2C%20Austria&key=AIzaSyAAgaQBWJByXn9NNkGVGGRFRxGXUWXxBXE" allowfullscreen></iframe>
