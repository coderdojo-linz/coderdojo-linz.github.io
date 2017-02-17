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

<p class="warning">Für unsere regelmäßigen CoderDojo Teilnehmer haben wir auch für ausgebuchte Events Tickets reserviert. Die notwendigen Informationen zur Anmeldung bekommt ihr per Email.</p>

## Was muss mitgebracht werden?

Grundsätzlich muss jedes Kind einen Laptop mitbringen. Der Laptop muss aber nicht besonders schnell sein. Es ist egal, ob er mit Windows, Mac OS oder Linux betrieben wird. iPads, Android-Tablets oder Smartphones reichen nicht aus.

Falls kein Laptop zur Verfügung steht, geben Sie bitte bei der Anmeldung an, dass ein Leihgerät benötigt wird. Wir haben eine limitierte Anzahl an Geräten, die wir während der CoderDojos zur Verfügung stellen können.

## Ort

Das CoderDojo findet üblicherweise im [Wissensturm](http://www.linz.at/wissensturm/){:target="_blank"} in der Kärtnerstraße 26, 4020 Linz statt.
Ausnahmen davon sind der 31. März und der 19. Mai. Der Veranstaltungsort für diese beiden Termine wird noch bekanntgegeben.

Auf der Webseite des Wissensturms findet ihr noch weitere Hinweise zu [Anreise und Parken](http://www.linz.at/wissensturm/anreise.asp){:target="_blank"}.

<script language="javascript">
$.get("https://participants-management-api.azurewebsites.net/api/events/", function(data) {
	var eventsTable = $("#eventsTable");

	data.forEach(function(event) {
		var date = moment(new Date(event.date)).startOf("day");
		var formattedDate = date.format("YYYY-MM-DD");
		var row = "<tr>";
		row += "<td>" + date.format("dddd, DD. MMMM YYYY") + " 16:00 - 18:00</td>";

		row += "<td>";
		if (formattedDate == "2017-03-31") {
			row += "<a href=\"http://www.aec.at/center/skyloft/\" target=\"_blank\">AEC Sky Loft</a>, Ars-Electronica-Straße 1, 4040 Linz";
		} else if (formattedDate == "2017-05-19") {
			row += "Ort wird noch bekanntgegeben";
		} else {
			row += "Wissensturm, Kärtnerstraße 26, 4020 Linz";
		}

		if (formattedDate == "2017-03-03" || formattedDate == "2017-03-17" || formattedDate == "2017-04-21") {
			row += "<div class=\"sponsor\"><div>Dieses CoderDojo wird von der Firma <a href=\"https://www.oxaion.de/\" target=\"_blank\">Oxaion</a> gesponsert.</div><a href=\"https://www.oxaion.de/\" target=\"_blank\"><img src=\"images/oxaion.svg\" style=\"width: 100%; max-width: 150px; margin-bottom: 0;\" /></a></div>";
		}

		row += "</td>";

		row += "<td id='availableTickets" + event.eventbriteId + "' class='text-right'></td>";
		row += "<td><a href='https://www.eventbrite.de/e/coderdojo-linz-wissensturm-tickets-" + event.eventbriteId + "' target='_blank'>zur Anmeldung</a></td>";
		row += "</tr>";
		eventsTable.append(row);
	});

	$(".loadingText").hide();

	$.get("https://participants-management-api.azurewebsites.net/api/events?tcStatus=true&past=false", function(data) {
		data.forEach(function(event) {
			if (event.quantitySold >= event.quantityTotal) {
				$("#availableTickets" + event.eventbriteId).append("<span class='warning'>ausgebucht</span>");
			} else {
				$("#availableTickets" + event.eventbriteId).append(event.quantityTotal - event.quantitySold);
			}
		});
	});
});
</script>

<iframe frameborder="0" style="border: 0; width: 100%; height: 400px;" src="https://www.google.com/maps/embed/v1/place?q=Wissensturm%20Volkshochschule%20Linz%20Stadtbibliothek%2C%20K%C3%A4rntnerstra%C3%9Fe%2C%20Linz%2C%20Austria&key=AIzaSyAAgaQBWJByXn9NNkGVGGRFRxGXUWXxBXE" allowfullscreen></iframe>
