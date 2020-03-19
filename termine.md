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

- <span class="type-classroom">Classroom</span>: CoderDojo Classroom besteht aus mehreren Terminen, die aufeinander aufbauen. Wenn du dich zum CoderDojo Classroom anmeldest, solltest du dann bei allen Terminen dabei sein.

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

		var row = "<tr>";
		row += "<td>Freitag, 20. März 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		row += "<p><b>16:00 - 18:00 Elektronik Classroom</b>: Günther vom CoderDojo Linz trifft sich online mit den Teilnehmerinnen und Teilnehmern vom CoderDojo Elektronik Classroom. Alle, die angemeldet sind, erhalten von Günther direkt die Anleitung, wie man teilnehmen kann.</p>";
		
		row += "<p><b>14:00 bis 16:00 C# Web-Programmierworkshop</b>: Hast du schon ein wenig Erfahrung mit C#? Dann könnte dir der C# Web-Programmierworkshop mit Daniel vom CoderDojo Wien Spaß machen.<br/>Link zum Teilnehmen: <a href='http://bit.ly/20-03-19-cd-aspnet' target='_blank'>http://bit.ly/20-03-19-cd-aspnet</a></p>";

		row += "<p><b>14:00 - 16:00 Browser Game mit JavaScript</b>: Hast du schon ein wenig Erfahrung mit HTML und JavaScript? In diesem Fall kannst du mit Rainer vom CoderDojo Linz ein Browser Game mit JavaScript programmieren.<br/>Link zum Teilnehmen: <a href='http://bit.ly/20-03-19-cd-js' target='_blank'>http://bit.ly/20-03-19-cd-js</a></p>";

		row += "<p><b>16:00 - 18:00 Scratch Anfängerworkshop</b>: Peter und Silke laden alle, die noch keine oder wenig Erfahrung beim Programmieren haben, zum Scratch Anfängerworkshop.<br/>Link zum Teilnehmen: <a href='http://bit.ly/20-03-19-cd-scratch' target='_blank'>http://bit.ly/20-03-19-cd-scratch</a></p>";

		row += "<p><b>16:00 - 18:00 Java-Grundlagen</b>: Mit Java kann man so viele interessante Sachen machen. Möchtest du die Grundlagen von Java kennenlernen? Dann passt der Workshop mit Thomas vom CoderDojo Neusiedl am See zum Thema Java-Grundlagen für dich.<br/>Link zum Teilnehmen: <a href='http://bit.ly/20-03-19-cd-java' target='_blank'>http://bit.ly/20-03-19-cd-java</a></p>";

		row += "</td>";
		row += "</tr>";

		eventsTable.append(row);

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
				if (event.type == "classroom") {
					row += "<td>";
                    for (var i = 0; i < event.dates.length; i++) {
                        var classroomDate = moment(new Date(event.dates[i])).startOf("day");
                        row += "<span class='nowrap'>" + classroomDate.format("dddd, DD. MMMM YYYY") + "</span>" + "<br/>";
						if (event.title == "Elektronik") {
							row += "15:00 - 17:30<br/>";
						} else {
							row += "16:00 - 18:00<br/>";
						}
                    }
                    row += "</td>";
				} else if (event.type == "bootcamp") {
					row += "<td><span class='nowrap'>" + date.format("dddd, DD. MMMM YYYY") + "</span><br/>13:30 - 18:30</td>";
				} else {
					row += "<td><span class='nowrap'>" + date.format("dddd, DD. MMMM YYYY") + "</span><br/>16:00 - 18:00</td>";
				}

				if (event.type == "playground") {
					row += "<td class='type-playground'>Playground";
				} else if (event.type == "bootcamp") {
					row += "<td class='type-bootcamp'>Bootcamp";
                } else if (event.type == "classroom") {
					row += "<td class='type-classroom'>Classroom";
				} else {
					row += "<td class='type-coderdojo'>CoderDojo";
				}
				row += "</td>";

				row += "<td>";

                if (event.type == "classroom") {
                    row += "<b>CoderDojo Classroom - " + event.title + "</b>";
                    row += "<br/><br/>";
                    row += event.description;
                    row += "<br/><br/>";
                    var mailBody = "Hallo CoderDojo Team,%0D%0A%0D%0Aich möchte mich zum Kurs CoderDojo Classroom - " + event.title + " anmelden.%0D%0A%0D%0AVorname: %0D%0ANachname: %0D%0AAlter: %0D%0A";
                    row += "<b>Anmeldung unter <a href='mailto:info@coderdojo-linz.org?subject=Anmeldung zu CoderDojo Classroom - " + event.title + "&body=" + mailBody + "'>info@coderdojo-linz.org</a></b>";
                    row += "<br/><br/>";
                } else if (event.type == "bootcamp") {
					row += "<b>" + event.title + "</b>";
                    row += "<br/><br/>";
                    row += event.description;
                    row += "<br/><br/>";
					row += "<b><a href=\"https://www.globalazurebootcamp.at/junior-bootcamp/\" target=\"_blank\">Weitere Infos ...</a> | <a href=\"https://www.eventbrite.de/e/global-azure-bootcamp-austria-2020-tickets-90274179501\" target=\"_blank\">Zur Anmeldung ...</a></b>";
					row += "<br/><br/>";
				}

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
