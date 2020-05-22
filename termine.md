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
		row += "<td>Freitag, 22. Mai 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];

		// workshops.push({
		// 	time: "13:45 - 15:45",
		// 	title: "Microbit Einsteiger",
		// 	description: "Auf einem virtuellen oder wenn bei euch vorhanden echten Micro:bit werden wir ein Einsteiger gerechtes Projekt gemeinsam umsetzen und wenn Zeit bleibt einfach weiter dran tüfteln.",
		// 	prerequisites: "<ul><li>Installiertes <a href=\"https://www.microsoft.com/de-at/p/makecode-for-micro-bit/9pjc7sv48lcx?rtc=1#activetab=pivot:overviewtab\" target=\"_blank\">MakeCode for micro:bit</a></li><li>oder <a href=\"https://makecode.microbit.org/\" target=\"_blank\">Onlinevariante von MakeCode for micro:bit</a></li></ul>",
		// 	mentors: ["Daniel"],
		// 	link: "https://us02web.zoom.us/j/84399293341?pwd=dkV1VGErU1F4TjAyTXJUdFMwRit4dz09"
		// });
		
		workshops.push({
			time: "12:30 - 13:30",
			title: "HTML, CSS & JavaScript - Ask Me Anything",
			description: "Habt ihr Fragen zu HTML, CSS & JavaScript? Sucht ihr Übungen, die ihr Zuhause machen könnt, oder steht ihr in euren eigenen Projekten vor Problemen, bei denen wir euch helfen können? Schaut einfach zwischen 12:30 und 13:30 vorbei.",
			prerequisites: "-",
			mentors: ["Karin"],
			link: "https://us02web.zoom.us/j/88241974823?pwd=NlVjK2dHRVhSMnRNUWhkTW9lcFJYQT09"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Minecraft Redstone",
			description: "Teil 2 unserer Kombination-locks! Diesesmal versuchen wir uns an Locks die Buttons als Eingabe verwenden. Das macht das ganze um einiges Komplizierter, wie ihr merken werdet ;)",
			prerequisites: "Ihr braucht einen offiziellen Minecraft Account und die Java-Minecraft Version 1.15.2 installiert. Wir werden auf einem gemeinsamen Server unsere Übungen machen.",
			mentors: ["Matthias", "Jan"],
			link: "https://us02web.zoom.us/j/81971337266?pwd=U1YrdDdZR1hyRCtFdmNiUmdhMlVBUT09"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Heap, Stack und Rekursion",
			description: "Ist euch der Unterschied zwischen Heap- und Stack-Speicher schon klar? Diese beiden Speicherarten sind die Grundlage für die meisten, weit verbreiteten Programmiersprachen. Gemeinsam erarbeiten wir die charakteristischen Eigenschaften von Heap und Stack und üben speziell den Umgang mit dem Stack, indem wir einen Blick auf einfache, rekursive Algorithmen werfen.",
			prerequisites: "<ul><li>Grundkenntnisse beim Programmieren mit z.B. mit JavaScript, Java, Python, C#, C++, ...</li><li><a href=\"https://nodejs.org/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li></ul>",
			mentors: ["Rainer"],
			link: "https://us02web.zoom.us/j/81944109337?pwd=T1NMaW9RSlN0YVBHVlNodGlkZzBPQT09"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Dynamische Webseite mit Node.js",
			description: "Dynamischen Webseiten sind in der Lage sich Informationen zu merken und diese zu verarbeiten, weil unser Code nicht nur im Browser sondern auch am Webserver selbst ausgeführt wird. Das gibt uns Möglichkeiten, die man mit statischen Webseiten nicht hat. Dieses Mal sehen wir uns an, wie man am Server eine Datenbank benutzt und deren Daten am Client anzeigt.",
			prerequisites: "<p>Grundlegende Kenntnisse:</p><ul><li>beim Programmieren (z.B. mit JavaScript, Java, C#, C++, ...)</li><li>HTML</li></ul><p>Software:</p><ul><li>einen Texteditor wie z.B. <a href=\"https://notepad-plus-plus.org/\" target=\"_blank\">Notepad++</a>, <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li><li><a href=\"https://nodejs.org/en/download/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://git-scm.com/download/win\" target=\"_blank\">Git</a></li></ul><p>Installationsanleitung:</p><p>Wenn Du möchtest, kannst Du schon vorab unser Projekt bei Dir installieren. So haben wir beim Workshop mehr Zeit für's Programmieren und brauchen nicht so lange warten bis alle mit der Installation fertig sind. Eine Anleitung dazu findest Du auf <a href=\"https://github.com/coderdojo-neusiedl/dynamic-webpage/tree/workshop-20200522\" target=\"_blank\">Github</a>.</p>",
			mentors: ["Thomas"],
			link: "https://us02web.zoom.us/j/81130037599?pwd=eXNVZnlvb25qNXNOWm9LL2dORTk4Zz09"
		});

		// workshops.push({
		// 	time: "16:00 - 18:00",
		// 	title: "Python für AnfängerInnen",
		// 	description: "Nachdem wir letzte Woche erste Schritte in Python gemacht haben, werden wir dieses Mal mit Tkinter einen Alien zeichnen und programmieren.",
		// 	prerequisites: "<ul><li>Aktuelle Version von <a href=\"https://www.python.org/downloads/\" target=\"_blank\">Python</a></li></ul>",
		// 	mentors: ["Sonja"],
		// 	link: "https://us02web.zoom.us/j/82206885442?pwd=UTBZT2s5bXhxamZwSG1EMjBndXR5UT09"
		// });

		workshops.push({
			time: "16:00 - 18:00",
			title: "Scratch Packman",
			description: "Fortsetzung des PacMan in Scratch vom letzen mal. Für alle die neu dazukommen werde ich unseren aktuellen Stand als SB3-Datei weitergeben, sodass ihr gleich mit einsteigen könnt. Diesmal werden wir dafür sorgen dass die Geister auf der Bildfläche erscheinen und PacMan auch endlich mal was zu Essen bekommt :).",
			prerequisites: "<ul><li>Installiertes <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">Scratch</a></li><li>oder <a href=\"https://scratch.mit.edu/\" target=\"_blank\">Onlinevariante von Scratch</a></li></ul>",
			mentors: ["Hans-Peter"],
			link: "https://us02web.zoom.us/j/83641277582?pwd=ZDFMdEJiWSt4VlBjQ1BDOEtDQTNPdz09"
		});

		// workshops.push({
		// 	time: "16:00 - 18:00",
		// 	title: "Web-Entwicklung mit Hugo",
		// 	description: "Wenn du schon etwas Ahnung von HTML und CSS hast, kannst du mit Karin in diesem Workshop lernen, wie man hübsche und vor allem schnelle Webseiten erstellen kann. Karin zeigt, wie der Open-Source Webseiten-Generator Hugo funktioniert und man damit seine Homepage wie ein echter Profi aufbaut.",
		// 	prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li><a href=\"https://github.com/gohugoio/hugo/releases/tag/v0.70.0\" target=\"_blank\">Hugo herunterladen</a></li></ul>",
		// 	mentors: ["Karin", "Rainer"],
		// 	link: "https://us02web.zoom.us/j/81510541132?pwd=UnU3aTNiRlgvOUtzZ0ZvZWxjRThodz09"
		// });

		// workshops.push({
		// 	time: "13:45 - 15:45",
		// 	title: "Virtuelles Elektronikbasteln",
		// 	description: "Wir werden werden mit vier Widerständen einen sogenannte Messbrücke aufbauen und die Spannung und den Strom messen und die Effekte besprechen. Mit dem Arduino machen wir diesesmal einen Rauchmelder mit einem Gassensor und vergleichen den Blockcode mit den Textcode.",
		// 	prerequisites: "Ein Computer mit <a href=\"https://www.tinkercad.com\" target=\"_blank\">Tinkercad</a> Zugang.",
		// 	mentors: ["Günther", "Michael"],
		// 	link: "https://us02web.zoom.us/j/88265661736?pwd=aFUrUHRFQ3U5OFRPQ2Q3aWd2UWdLUT09"
		// });
		
		/*

		workshops.push({
			time: "16:00 - 18:00",
			title: "Java",
			description: "Wir werden unserem Spiel beibringen Kollisionen zu erkennen.",
			prerequisites: "<ul><li><a href=\"https://www.jetbrains.com/de-de/idea/download/#section=windows\" target=\"_blank\">IntelliJ IDEA (Community Edition)</a></li><li><a href=\"https://git-scm.com/download/win\" target=\"_blank\">Git</a></li></ul>",
			mentors: ["Thomas"],
			link: "https://zoom.us/j/92032918488"
		});

		*/

		workshops.forEach(function(w) {
			row += "<p><span class=\"workshop-title\">" + w.time + " " + w.title + "</span></p><p>" + w.description + "</p><p><b>Voraussetzungen</b></p><p>" + w.prerequisites + "</p><p><b>Mentoren:</b> " + w.mentors.join(", ") + "</p><p><b>Link zum Teilnehmen:</b> <a href='" + w.link + "' target='_blank'>" + w.link + "</a></p>";
		});

		row += "</td>";
		row += "</tr>";

		eventsTable.append(row);

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-05-22'; }).forEach(function(event) {
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
