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
		row += "<td>Freitag, 08. Mai 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];

		workshops.push({
			time: "13:45 - 15:45",
			title: "Scratch Hacking mit Node.js und TypeScript",
			description: "Letzte Woche haben wir das Dateiformat von Scratch zerlegt und dabei etwas über ZIP-Archive und JSON gelernt. Anschließend haben wir das Grundgerüst unseres Node.js-Programms zum Generieren eines Scratch-Spiels mit Code gebaut. Diese Woche machen wir mit dem eigentlichen, automatischen Bauen des Scratch-Spiels weiter. Alle Coder von letzter Woche sind eingeladen, wieder mitzumachen. Quereinsteigen ist aber auf jeden Fall auch möglich.",
			prerequisites: "<ul><li>Ein wenig Programmiererfahrung mit JavaScript, TypeScript, Java, C# oder einer ähnlichen Programmiersprache</li><li>Mikrofon und idealerweise Webcam, da wir viel über Coding-Konzepte reden werden</li><li><a href=\"https://nodejs.org/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li></ul>",
			mentors: ["Rainer", "Karin"],
			link: "https://us02web.zoom.us/j/84300080892?pwd=MjlReDBKL2p4N0xxNW9paERxSENSQT09"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Virtuelles Elektronikbasteln",
			description: "Wir messen wieder Strom und Spannung an einem Spannungsteiler. Danach basteln wir an einem LED Lauflicht mit dem Arduino. Wir stellen den Blockcode einen Textcode gegenüber und werden den Textcode optimieren.",
			prerequisites: "Ein Computer mit <a href=\"https://www.tinkercad.com\" target=\"_blank\">Tinkercad</a> Zugang.",
			mentors: ["Günther", "Michael"],
			link: "https://us02web.zoom.us/j/85413750768?pwd=OGNOZUdPVzRYemRmWEUwRURFNGYyQT09"
		});
		
		workshops.push({
			time: "16:00 - 18:00",
			title: "Von Scratch zu Python",
			description: "Viele von euch haben schon Erfahrung mit Scratch und sind neugierig, wie \"richtiges\", textuelles Programmieren funktioniert. Sonja zeigt euch in diesem Workshop erste Schritte in Python. Ihr baut ein kleines Programm in Scratch und anschließend übersetzt ihr es in Python. So lernt ihr, wie Scratch-Programmierbausteine in Python-Kommandos aussehen.",
			prerequisites: "<ul><li>Installiert Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li><li>oder verwendet die Onlineversion von Scratch: <a href=\"https://scratch.mit.edu/\" target=\"_blank\">https://scratch.mit.edu/</a></li><li>Aktuelle Version von <a href=\"https://www.python.org/downloads/\" target=\"_blank\">Python</a></li></ul>",
			mentors: ["Sonja"],
			link: "https://us02web.zoom.us/j/82665569429?pwd=SlVsVjFEY3BFVWlBU1NpUEFzVHQwdz09"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Dynamische Webseite mit Node.js",
			description: "Dynamischen Webseiten sind in der Lage sich Informationen zu merken und diese zu verarbeiten, weil unser Code nicht nur im Browser sondern auch am Webserver selbst ausgeführt wird. Das gibt uns Möglichkeiten, die man mit statischen Webseiten nicht hat.<br/><br/>Wir werden an unserer ChatApp weiterarbeiten.",
			prerequisites: "<p>Grundlegende Kenntnisse:</p><ul><li>beim Programmieren (z.B. mit JavaScript, Java, C#, C++, ...)</li><li>HTML</li></ul><p>Software:</p><ul><li>einen Texteditor wie z.B. <a href=\"https://notepad-plus-plus.org/\" target=\"_blank\">Notepad++</a>, <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li><li><a href=\"https://nodejs.org/en/download/\" target=\"_blank\">Node.js</a></li></ul>",
			mentors: ["Thomas"],
			link: "	https://us02web.zoom.us/j/88940936374?pwd=K2hLZWJRSXVyanRSTmJPaVNXVDg2QT09"
		});
		
		workshops.push({
			time: "16:00 - 18:00",
			title: "Minecraft Redstone",
			description: "Diese Woche werden wir einen Blick auf automatisierte Farmen werfen. Natürlich nur solche die auch einen Haufen Redstone beinhalten ;)",
			prerequisites: "Ihr braucht einen offiziellen Minecraft Account und die Java-Minecraft Version 1.15.2 installiert. Wir werden auf einem gemeinsamen Server unsere Übungen machen.",
			mentors: ["Matthias", "Jan"],
			link: "https://us02web.zoom.us/j/85327277265?pwd=MXo1S0lUZEpJVW04T1hZbC9hT3Y4dz09"
		});


		/*

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
			title: "Bootstrap",
			description: "Letzte Woche haben wir eine Webseite mit CSS hübscher gestaltet und mit einigen Animationen versehen. Diese Woche starten wir mit der selben Webseite wie beim letzten Mal, verwenden aber <a href=\"https://getbootstrap.com/\" target=\"_blank\">Bootstrap</a> um die Webseite zu gestalten. Wir verwenden das Grid System, um das Layout auf für mobile Devices anzupassen, und wir werden einige Komponenten wie z.B. das Karussell zum Durchblättern von Bildern einbauen.",
			prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li>mit folgende Plugins:<ul><li><a href=\"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\" target=\"_blank\">Live Server</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare\" target=\"_blank\">Live Share</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer\" target=\"_blank\">Autoprefixer</a></li></ul></li></ul>",
			mentors: ["Karin", "Rainer"],
			link: "https://zoom.us/j/99506376161"
		});*/

		workshops.forEach(function(w) {
			row += "<p><span class=\"workshop-title\">" + w.time + " " + w.title + "</span></p><p>" + w.description + "</p><p><b>Voraussetzungen</b></p><p>" + w.prerequisites + "</p><p><b>Mentoren:</b> " + w.mentors.join(", ") + "</p><p><b>Link zum Teilnehmen:</b> <a href='" + w.link + "' target='_blank'>" + w.link + "</a></p>";
		});

		row += "</td>";
		row += "</tr>";

		eventsTable.append(row);

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-05-08'; }).forEach(function(event) {
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
