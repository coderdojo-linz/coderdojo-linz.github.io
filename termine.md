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
Aufgrund der aktuellen COVID-19 Lage finden die CoderDojos bis auf weiteres online statt. Bitte installiere dir zum Teilnehmen den <a href="https://zoom.us/download" target="_blank">Zoom Client</a>. Es gibt ihn kostenlos für alle erdenklichen Plattformen. Danach klicke zum Teilnehmen einfach auf den Teilnahmelink des jeweiligen Workshops.</div>

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
		row += "<td>Freitag, 17. April 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];
		
		workshops.push({
			time: "13:45 - 15:45",
			title: "Virtuelles Elektronikbasteln",
			description: "Alle die schon mal im Classroom waren können die Zugänge wieder benutzen, alle die noch nie etwas mit Tinkercad gemacht haben bitte gleich am Anfang melden, dann erhaltet ihr eine 10 Min Einführung in Tinkercad. Ihr könnt euch auf dieser Seite schon einmal vorab informieren: <a href=\"https://www.smarthome-tricks.de/esp8266-einfuehrung/arduino-schaltung-mit-tinkercad-simulieren/\" target=\"_blank\">Tinkercad Kurzanleitung.</a><br/><br/>Wir basteln wieder mit Tinkercad. Wir werden bei der Strom- und Spannungsmessung weiter machen. Dieses Mal werfen wir einen Blick auf die Versorgungsspannung der Batterie und die Spannungsabfälle an den Verbrauchern, sowie die Ströme, die durch die Bauteile und Verbraucher fliessen. Wir werfen nochmals einen Blick auf das Ohmsche Gesetz und überprüfen unsere Beobachtungen<br/><br/>Mit den Arduino werden wir eine Temperaturmessung bauen. Dazu nutzen wir den Analogeingang des Arduinos. Wir werden auch ein paar Themen rund um den Arduino besprechen.</p>",
			prerequisites: "PC oder Laptop, Internetzugang, eventuell einen Taschenrechner (es geht auch der am PC)",
			mentors: ["Günther", "Michael"],
			link: "https://zoom.us/j/98789138621"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Typescript",
			description: "In diesem Workshop setzen wir uns im Detail mit Basiskonzepten von Programmiersprachen wie Variablen, Datentypen, Funktionen, Klassen, Ablauflogik etc. am Beispiel von TypeScript auseinander. Auch wenn du andere Programmiersprachen verwendest, kannst du das Wissen aus diesem Workshop dort sicher auch anwenden. Du bist hier richtig, wenn du mehr über die Hintergründe von Coding erfahren möchtest und Verständnis dafür gewinnen möchtest, was so manche Codezeilen, die du bisher aus unseren Beispielangaben kopiert hast, wirklich bedeuten.",
			prerequisites: "<ul><li>Programmiererfahrung (zumindest eine Menge Scratch, noch besser ein wenig HTML/CSS/JavaScript, Java, Python oder Ähnliches)</li><li>Mikrofon und idealerweise Webcam, da wir viel über Coding-Konzepte reden werden</li><li><a href=\"https://nodejs.org/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li></ul>",
			mentors: ["Rainer"],
			link: "https://zoom.us/j/92198752576"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Scratch Anfängerworkshop",
			description: "Natürlich darf ein Workshop für Anfängerinnen und Anfänger mit Scratch im CoderDojo nicht fehlen. Wenn ihr noch nie mit Scratch gearbeitet habt, dann könnt ihr in diesem Workshop euer erstes Computerspiel programmieren.",
			prerequisites: "<ul><li>Installiert Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li><li>oder verwendet die Onlineversion von Scratch: <a href=\"https://scratch.mit.edu/\" target=\"_blank\">https://scratch.mit.edu/</a></li></ul>",
			mentors: ["Sonja", "Gerlinde"],
			link: "https://zoom.us/j/99339025558"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Java",
			description: "Wir werden unserem Spiel beibringen Kollisionen zu erkennen.",
			prerequisites: "<ul><li><a href=\"https://www.jetbrains.com/de-de/idea/download/#section=windows\" target=\"_blank\">IntelliJ IDEA (Community Edition)</a></li><li><a href=\"https://git-scm.com/download/win\" target=\"_blank\">Git</a></li></ul>",
			mentors: ["Thomas"],
			link: "https://zoom.us/j/92032918488"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Minecraft Redstone",
			description: "Wenn du schon immer Redstone Schaltungen selber entwerfen wolltest oder verstehen willst wie die Schaltungen funktionieren die du von Youtube kopierst ;) dann bist du hier genau richtig! Wir werden unseren Kurs fortsetzen, diesesmal mit:<br/><br/><ul><li>Speicherzellen, wie kann ich Zustände in meinen Schaltungen abbilden</li><li>Taktgeber, wie kann ich regelmäßig meine Schaltung aktivieren</li><li>Impulsgeber, wie kann ich Signale auf Impulse umwandeln</li></ul>",
			prerequisites: "Ihr braucht einen offiziellen Minecraft Account und die Java-Minecraft Version 1.15.2 installiert. Wir werden auf einem gemeinsamen Server unsere Übungen machen.",
			mentors: ["Matthias", "Jan"],
			link: "https://zoom.us/j/99966757401"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Bootstrap",
			description: "Letzte Woche haben wir eine Webseite mit CSS hübscher gestaltet und mit einigen Animationen versehen. Diese Woche starten wir mit der selben Webseite wie beim letzten Mal, verwenden aber <a href=\"https://getbootstrap.com/\" target=\"_blank\">Bootstrap</a> um die Webseite zu gestalten. Wir verwenden das Grid System, um das Layout auf für mobile Devices anzupassen, und wir werden einige Komponenten wie z.B. das Karussell zum Durchblättern von Bildern einbauen.",
			prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li>mit folgende Plugins:<ul><li><a href=\"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\" target=\"_blank\">Live Server</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare\" target=\"_blank\">Live Share</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer\" target=\"_blank\">Autoprefixer</a></li></ul></li></ul>",
			mentors: ["Karin", "Rainer"],
			link: "https://zoom.us/j/99506376161"
		});

		workshops.forEach(function(w) {
			row += "<p><span class=\"workshop-title\">" + w.time + " " + w.title + "</span></p><p>" + w.description + "</p><p><b>Voraussetzungen</b></p><p>" + w.prerequisites + "</p><p><b>Mentoren:</b> " + w.mentors.join(", ") + "</p><p><b>Link zum Teilnehmen:</b> <a href='" + w.link + "' target='_blank'>" + w.link + "</a></p>";
		});

		row += "</td>";
		row += "</tr>";

		eventsTable.append(row);

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-04-17'; }).forEach(function(event) {
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
