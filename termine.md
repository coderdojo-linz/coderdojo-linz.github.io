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
		row += "<td>Freitag, 01. Mai 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];

		workshops.push({
			time: "13:45 - 15:45",
			title: "Scratch Hacking mit Node.js und TypeScript",
			description: "Die letzten Wochen haben wir uns Details rund um TypeScript angesehen. Diesmal wenden wir das gelernte an, um Scratch zu hacken. Wir wollen mit Node.js und TypeScript computergenerierte Scratch-Spiele erzeugen und dabei etwas über den Umgang mit Dateien, JSON, Serialisierung von Daten etc. zu lernen. Scratch ist eine hervorragende, in TypeScript geschriebene Anwendung und wir möchten durch den Blick hinter die Kulissen von den Profis lernen, die Scratch entwickelt haben.",
			prerequisites: "<ul><li>Ein wenig Programmiererfahrung mit JavaScript, TypeScript, Java, C# oder einer ähnlichen Programmiersprache</li><li>Mikrofon und idealerweise Webcam, da wir viel über Coding-Konzepte reden werden</li><li><a href=\"https://nodejs.org/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li></ul>",
			mentors: ["Rainer"],
			link: "https://us02web.zoom.us/j/89069840267?pwd=M3BTT2JuTUdRa2NTOVM5T2VUOEFyUT09"
		});
		
		workshops.push({
			time: "16:00 - 18:00",
			title: "Scratch Open Space",
			description: "Wir treffen uns zum Scratchen. Ihr könnt selbständig an Scratch-Projekten arbeiten und wir helfen euch bei Problemen. Keine Idee, welches Scratch-Projekt das richtige für dich ist? Wir suchen gerne mit dir ein für deine Erfahrung passendes aus unseren Übungsanleitungen. Falls Anfängerinnen und Anfänger dabei sind, die noch nie mit Scratch programmiert haben, helfen wir gerne bei den ersten Schritten.",
			prerequisites: "<ul><li>Installiert Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li><li>oder verwendet die Onlineversion von Scratch: <a href=\"https://scratch.mit.edu/\" target=\"_blank\">https://scratch.mit.edu/</a></li></ul>",
			mentors: ["Rainer", "Karin"],
			link: "https://us02web.zoom.us/j/83951225879?pwd=MHNjcVlGRXMwY1RWeC84RFEwc21nUT09"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Dynamische Webseite mit Node.js",
			description: "Dynamischen Webseiten sind in der Lage sich Informationen zu merken und diese zu verarbeiten, weil unser Code nicht nur im Browser sondern auch am Webserver selbst ausgeführt wird. Das gibt uns Möglichkeiten, die man mit statischen Webseiten nicht hat.<br/><br/>Wir werden uns den Unterschied zu statischen Webseiten erarbeiten und gemeinsam eine einfache dynamische Webseite mit Node.js bauen.",
			prerequisites: "<p>Grundlegende Kenntnisse:</p><ul><li>beim Programmieren (z.B. mit JavaScript, Java, C#, C++, ...)</li><li>HTML</li></ul><p>Software:</p><ul><li>einen Texteditor wie z.B. <a href=\"https://notepad-plus-plus.org/\" target=\"_blank\">Notepad++</a>, <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li><li><a href=\"https://nodejs.org/en/download/\" target=\"_blank\">Node.js</a></li></ul>",
			mentors: ["Thomas"],
			link: "https://us02web.zoom.us/j/83443070804?pwd=dDFlb3lGRXZ6Yk5zZUFVVkdhQkNlQT09"
		});
		
		workshops.push({
			time: "16:00 - 18:00",
			title: "Minecraft Redstone",
			description: "Diese Woche beschäftigen wir uns mit versteckten Zugängen.<br/><ul><li>Lifte, Stiegen, Türen</li><li>Wie kann ich Türöffner/Schlüssel gut verstecken</li></ul>",
			prerequisites: "Ihr braucht einen offiziellen Minecraft Account und die Java-Minecraft Version 1.15.2 installiert. Wir werden auf einem gemeinsamen Server unsere Übungen machen.",
			mentors: ["Matthias", "Jan"],
			link: "https://us02web.zoom.us/j/82701702618?pwd=cjRUYnlkeEp2aFRJR2hVYis2b0kwUT09"
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

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-05-01'; }).forEach(function(event) {
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
