---
layout: default
title: Termine
bannerimage: /images/coderdojo-banner-3.jpg
---

# Termine

**Hast du noch nie beim CoderDojo teilgenommnen, musst du dich für die Teilnahme an deinem ersten Termin anmelden. Wenn es dir gefällt und du wiederkommen möchtest, kannst du ohne weitere Anmeldung zu allen Terminen kommen.**

<p class="text-center"><a class="btn btn-material-light-blue-700" href="/anmeldung.html">Zur Anmeldung</a></p>

Es gibt drei verschiedene Veranstaltungen:

- <span class="type-coderdojo">CoderDojo</span>: Das ist unsere Hauptveranstaltung. Beim CoderDojo helfen dir Mentoren von deinen ersten Schritten im Programmieren bis zu kniffligen technischen Problemen. Zu diesen Veranstaltungen kommen üblicherweise 35 bis 65 junge Coder.

- <span class="type-playground">Playground</span>: Beim Playground hast du Gelegenheit, im Umfeld von anderen jungen Codern selbständig an deinen Projekten zu arbeiten und zu üben. Mentorinnen und Mentoren stehen hier weniger zur Verfügung. Zu diesen Veranstaltungen kommen üblicherweise 15 bis 25 junge Coder. [Mehr über Playgrounds&nbsp;...](/infos/playground.html)

- <span class="type-classroom">Classroom</span>: CoderDojo Classroom besteht aus mehreren Terminen, die aufeinander aufbauen. Wenn du dich zum CoderDojo Classroom anmeldest, solltest du dann bei allen Terminen dabei sein.

<div class="corona-info">
<h3>COVID-19 Info</h3>
Aufgrund der aktuellen COVID-19 Lage finden die CoderDojos bis auf weiteres online statt. Bitte installiere dir zum Teilnehmen die <a href="https://www.bluejeans.com/downloads" target="_blank">BlueJeans App</a>. Es gibt sie kostenlos für alle erdenklichen Plattformen. Danach klicke zum Teilnehmen einfach auf den Teilnahmelink des jeweiligen Workshops.</div>

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
		row += "<td>Freitag, 04. April 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];
		
		workshops.push({
			title: "14:00 - 16:00 Virtuelle Elektronik",
			description: "Bei Günther und Michael könnt ihr virtuell Elektronik basteln mit <a href=\"https://www.tinkercad.com/\" target=\"_blank\">Tinkercad</a>. Ihr werdet Schaltungen bauen und braucht dafür weder Lötkolben noch Bauteile. Dieser Workshop ist offen für alle, nicht nur für Teilnehmerinnen und Teilnehmern vom CoderDojo Elektronik Classroom.",
			prerequisites: "<ul><li>Legt euch ein Konto (Personal Account) bei TinkerCAD an: <a href=\"https://www.tinkercad.com/join\" target=\"_blank\">https://www.tinkercad.com/join</a></li></ul>",
			link: "https://bluejeans.com/925481189"
		});

		workshops.push({
			title: "14:00 - 16:00 Browser Game mit JavaScript",
			description: "Letzte Woche hat Matthias mit euch im JavaScript-Workshop ein Browser Game mit JavaScript begonnen. Alle, die letzte Woche dabei waren, können das Spiel diese Woche mit Matthias fertig machen.",
			prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li>Node.js (LTS-Version): <a href=\"https://nodejs.org/en/\" target=\"_blank\">https://nodejs.org/en/</a></li></ul>",
			link: "https://bluejeans.com/294267547"
		});

		workshops.push({
			title: "14:00 - 16:00 Programmieren von Web Apps und Webseiten",
			description: "Möchtet ihr mehr über das Programmieren von Web Apps und Webseiten lernen? Dann ist der Workshop über HTML und CSS mit Rainer, Karin und Cornelia der richtige. Anfänger*innen lernen die Basics und erfahrenere Coder lernen viele Tricks rund ums Web.",
			prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li>Node.js (LTS-Version): <a href=\"https://nodejs.org/en/\" target=\"_blank\">https://nodejs.org/en/</a></li></ul>",
			link: "https://bluejeans.com/726759318"
		});

		workshops.push({
			title: "14:00 - 16:00 Java mit Greenfoot",
			description: "Greenfoot ist eine super Plattform zum spielerischen Lernen von Java. Ihr könnt mit Markus einen Blick auf <a href=\"https://www.greenfoot.org/\" target=\"_blank\">Greenfoot</a> werfen und dabei in Java einsteigen oder euer Java-Wissen vertiefen.",
			prerequisites: "<ul><li>Greenfoot: <a href=\"https://www.greenfoot.org/\" target=\"_blank\">https://www.greenfoot.org/</a></li></ul>",
			link: "https://bluejeans.com/622647341"
		});

		workshops.push({
			title: "16:00 - 18:00 Grundlagen der Spieleentwicklung mit Java",
			description: "Thomas macht mit seinem Java Workshop weiter. Diesmal dreht sich alles um Spielemechanik. Ihr lernt die Grundlagen der Spieleentwicklung mit Java besser kennen.",
			prerequisites: "<ul><li>JDK der Java SE14: <a href=\"https://www.oracle.com/java/technologies/javase-downloads.html\" target=\"_blank\">https://www.oracle.com/java/technologies/javase-downloads.html</a></li><li>IntelliJ IDEA (Community Edition): <a href=\"https://www.jetbrains.com/de-de/idea/download/#section=windows\" target=\"_blank\">https://www.jetbrains.com/de-de/idea/download/#section=windows</a></li></ul>",
			link: "https://bluejeans.com/222168253"
		});

		workshops.push({
			title: "16:00 - 18:00 Scratch Anfängerworkshop",
			description: "Natürlich darf ein Workshop für Anfänger*innen mit Scratch im CoderDojo nicht fehlen. Wenn ihr noch nie mit Scratch gearbeitet habt, dann könnt ihr in diesem Workshop mit Silke, Lotte und Gerlinde euer erstes Computerspiel programmieren!",
			prerequisites: "<ul><li>Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li></ul>",
			link: "https://bluejeans.com/183964824"
		});

		workshops.push({
			title: "16:00 - 18:00 Scratch Space Shooter",
			description: "Habt ihr schon ein wenig Scratch-Erfahrung? Dann möchtet ihr vielleicht ein etwas spannenderes Scratch-Beispiel mit Hans-Peter machen. Er wird mit euch einen Space Shooter bauen.",
			prerequisites: "<ul><li>Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li></ul>",
			link: "https://bluejeans.com/499993405"
		});

		workshops.forEach(function(w) {
			row += "<p><span class=\"workshop-title\">" + w.title + "</span></p><p>" + w.description + "</p><p><b>Voraussetzungen</b></p><p>" + w.prerequisites + "</p><p><b>Link zum Teilnehmen:</b> <a href='" + w.link + "' target='_blank'>" + w.link + "</a></p>";
		});

		row += "</td>";
		row += "</tr>";

		eventsTable.append(row);

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-04-03'; }).forEach(function(event) {
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
					row += "<b><a href=\"https://www.globalazurebootcamp.at/junior-bootcamp/\" target=\"_blank\">Weitere Infos ...</a></b>";
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
