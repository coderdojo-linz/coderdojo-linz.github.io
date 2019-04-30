---
layout: default
title: Termine
bannerimage: /images/coderdojo-banner-3.jpg
---

# Termine

**Hast du noch nie beim CoderDojo teilgenommnen, musst du dich für die Teilnahme an deinem ersten Termin anmelden. Wenn es dir gefällt und du wiederkommen möchtest, kannst du ohne weitere Anmeldung zu allen Terminen kommen.**

<p class="text-center"><a class="btn btn-material-light-blue-700" href="/anmeldung.html">Zur Anmeldung</a></p>

Es gibt zwei verschiedene Veranstaltungen:

- <span class="type-coderdojo">CoderDojo</span>: Das ist unsere Hauptveranstaltung. Beim CoderDojo helfen dir Mentoren von deinen ersten Schritten im Programmieren bis zu kniffligen technischen Problemen. Zu diesen Veranstaltungen kommen üblicherweise 35 bis 65 junge Coder.

- <span class="type-playground">Playground</span>: Beim Playground hast du Gelegenheit, im Umfeld von anderen jungen Codern selbständig an deinen Projekten zu arbeiten und zu üben. Mentorinnen und Mentoren stehen hier weniger zur Verfügung. Zu diesen Veranstaltungen kommen üblicherweise 15 bis 25 junge Coder. [Mehr über Playgrounds&nbsp;...](/infos/playground.html)

<table class="table" id="eventsTable">
	<thead>
		<tr>
			<th>Datum</th>
			<th>Typ</th>
			<th>Ort</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>

<p class="loadingText">Die Termine werden geladen ...</p>

<script language="javascript">
	Date.prototype.addDays = function(days) {
		var dat = new Date(this.valueOf());
		dat.setDate(dat.getDate() + days);
		return dat;
	}

	var eventsTable = $("#eventsTable");

	$.get("https://participants-management-service.azurewebsites.net/api/events/?past=false", function(data) {
		var additionalEvents = [
			{ date: new Date(2017, 6, 7), title: "Sommerferien 2017", type: "header" },
			{ date: new Date(2017, 6, 13), title: "Sommerferien 2017", type: "header" },
			{ date: new Date(2017, 8, 14), title: "Wintersemester 2017 / 2018", type: "header" }
		].filter(function(event) { return event.date >= new Date(); });
		
		data = data.concat(additionalEvents).sort(function(a, b) {
			a = new Date(a.date);
			b = new Date(b.date);
			return a > b ? 1 : a < b ? -1 : 0;
		});

		data.forEach(function(event) {
			var row = "";

			if (event.type == "header") {
				row = "<tr class='subtitle'><td colspan='3'>" + event.title + "</td></tr>";
			} else {
				var date = moment(new Date(event.date)).startOf("day");
				var formattedDate = date.format("YYYY-MM-DD");

				/*row = "<tr";
				if (event.type == "playground") {
					row += " class='playground'";
				} else if (event.type == "bootcamp") {
					row += " class='bootcamp'";
				} else {
					row += " class='coderdojo'";
				}*/

				if (date.unix() == moment(new Date(2018, 4, 4)).startOf("day").unix()) {
					console.log("test");
					row += "<tr>";
					row += "<td>" + moment(new Date(2018, 3, 21)).startOf("day").format("dddd, DD. MMMM YYYY") + " 16:00 - 18:00</td>";
					row += "<td class='type-bootcamp'>Bootcamp</td>";
					row += "<td>Junior Bootcamp - im Rahmen des <a href='https://coding-club-linz.github.io/global-azure-bootcamp-2018/junior-bootcamp.html' target='_blank'>Global Azure Bootcamps</a><br/>für junge Coder ab 13 Jahren<br/>";
					row += "<a href=\"http://www.linz.at/wissensturm/anreise.asp\" target=\"_blank\">Wissensturm</a>, Kärtnerstraße 26, 4020 Linz</td>";
					row += "</tr>";
				}

				row += "<tr>";
				if (formattedDate == "2019-05-24") {
					row += "<td>" + date.format("dddd, DD. MMMM YYYY") + " 15:30 - 17:30</td>";
				} else {
					row += "<td>" + date.format("dddd, DD. MMMM YYYY") + " 16:00 - 18:00</td>";
				}

				if (event.type == "playground") {
					row += "<td class='type-playground'>Playground";
				} else if (event.type == "bootcamp") {
					row += "<td class='type-bootcamp'>Bootcamp";
				} else {
					row += "<td class='type-coderdojo'>CoderDojo";
				}
				row += "</td>";

				row += "<td>";

				/*if (event.type == "playground") {
					row += "Playground<br/>";
				} else if (event.type == "bootcamp") {
					row += "Junior Bootcamp - im Rahmen des <a href='https://coding-club-linz.github.io/global-azure-bootcamp-2017/junior-bootcamp.html' target='_blank'>Global Azure Bootcamps</a><br/>";
					row += "für junge Coder ab 13 Jahren<br/>";
				} else {
					row += "CoderDojo<br/>";
				}*/
				
				if (event.location) {
					row += event.location;
				} else {
					if (event.type == "playground") {
						row += "<a href=\"http://www.linz.at/wissensturm/anreise.asp\" target=\"_blank\">Wissensturm</a>, Raum 10.02, Kärtnerstraße 26, 4020 Linz";
					} else {
						row += "<a href=\"http://www.linz.at/wissensturm/anreise.asp\" target=\"_blank\">Wissensturm</a>, Veranstaltungssaal E09, Kärtnerstraße 26, 4020 Linz";
					}
				}

				if (formattedDate == "2017-06-02") {
					row += "<div class=\"sponsor\"><div>Der Robotics Workshop bei diesem CoderDojo wird von <a href=\"http://www.sparxsystems.at\" target=\"_blank\">Sparx Systems</a>, <a href=\"https://www.microsoft.com/de-at\" target=\"_blank\">Microsoft</a>, <a href=\"https://www.aec.at/\" target=\"_blank\">Ars Electronica</a> und <a href=\"http://www.voesi.or.at/\" target=\"_blank\">VÖSI</a> gesponsert.</div><img src=\"images/sponsors_20170602.jpg\" style=\"width: 100%; margin-top: 5px; margin-bottom: 0;\" /></div>";
				} else if (formattedDate == "2017-06-23") {
					row += "<div class=\"sponsor\"><div>Wir feiern den 2. Geburtstag vom CoderDojo Linz! Die Linzer Firma <a href=\"https://www.insite-it.net/en/start-en\" target=\"_blank\">INSITE IT</a> sponsert zu diesem Anlass Kuchen für alle :-). Vielen Dank!</div><a href=\"https://www.insite-it.net/en/start-en\" target=\"_blank\"><img src=\"images/insite-it-logo.png\" style=\"width: 100%; max-width: 250px; margin-top: 5px; margin-bottom: 0;\" /></a></div>";
				}

				if (event.sponsor) {
					row += "<br/><span class=\"sponsor\">Sponsored by " + event.sponsor + "</a>";
				}

				row += "</td>";

			
				row += "</tr>";
			}

			eventsTable.append(row);
		});

		$(".loadingText").hide();
	});
</script>
