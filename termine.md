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
<h3>Online CoderDojos</h3>
Aufgrund der aktuellen COVID-19 Lage finden die CoderDojos bis auf weiteres online statt. Eine Anleitung, wie du an den Onlinemeetings teilnimmst, findest du unter <a href="online-coderdojo-tipps.html"><em>Tipps für Online CoderDojos</em></a>.</div>

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
		row += "<td>Freitag, 05. Juni 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];

		// workshops.push({
		// 	time: "13:45 - 15:45",
		// 	title: "Micro:bit Workshop",
		// 	description: "Wir basteln gemeinsam an einer Micro:bit Wetterstation. Das richtige Projekt für die von euch, die schon etwas Erfahrung mit Programmieren mit Scratch oder Mirco:bit haben.",
		// 	prerequisites: "<ul><li>Installiertes <a href=\"https://www.microsoft.com/de-at/p/makecode-for-micro-bit/9pjc7sv48lcx?rtc=1#activetab=pivot:overviewtab\" target=\"_blank\">MakeCode for micro:bit</a></li><li>oder <a href=\"https://makecode.microbit.org/\" target=\"_blank\">Onlinevariante von MakeCode for micro:bit</a></li><li>zwei \"echte\" Micro:bit oder der in MakeCode eingebaute Emulator</li></ul>",
		// 	mentors: ["Daniel"],
		// 	link: "https://us02web.zoom.us/j/82813503653?pwd=WHNpVkMwRjE1YW5tMXNTWCtaSWQrZz09"
		// });

		workshops.push({
			time: "13:45 - 15:45",
			title: "Mein erstes Computerspiel mit Scratch",
			description: "Du hast noch nie programmiert, bist aber neugierig wie das geht? In diesem Workshop programmierst du gemeinsam mit unserem Mentor Rainer dein erstes Computerspiel mit Scratch. Wenn du jünger als 10 Jahre alt bist, solltest du eine erwachsene Begleitperson bitten, dir beim Webmeeting zu helfen. Tastatur und Maus gehören aber dir! Die Erwachsenen helfen nur, wenn du gerade mal überhaupt nicht weiter weißt. Falls du schon recht vertraut mit dem Umgang mit Computer und Internet bist, kannst du gerne auch alleine am Workshop teilnehmen.",
			prerequisites: "<ul><li><b>ab 8 Jahren</b>, Lesekenntnisse erforderlich</li><li><b>keine</b> Vorkenntnisse über Programmieren notwendig</li><li>Software für die Teilnahme an Online CoderDojos (<a href=\"https://linz.coderdojo.net/online-coderdojo-tipps.html\" target=\"_blank\">Anleitung</a>)</li><li>Installierte Version von Scratch (<a href=\"https://scratch.mit.edu/download\" target=\"_blank\">Download</a>)</li><li>oder Online-Version von Scratch - dafür brauchst du nur einen Browser und öffnest <a href=\"https://scratch.mit.edu/create/\" target=\"_blank\">https://scratch.mit.edu/create/</a></li></ul>",
			mentors: ["Rainer", "Karin"],
			link: "https://us02web.zoom.us/j/83084810683?pwd=MTJYbmgya1hXSjBwdHRIWFk3QlZQZz09"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Virtuelles Elektronikbasteln",
			description: "Diesen Freitag starten wir mit der Lösung von Serien- und Parallelschaltung von Widerständen. Wir bauen die Schaltung im TinkerCAD nach und überprüfen die berechneten Ergebnisse mit dem Multimeter. Das Ohmsche Gesetz kommt auch wieder vor. Diese Übung ist auch für Anfänger geeignet. Vorbereiten kannst Du Dich auf unserer Hompage unter dem Menüpunkt Löten mit den Elektronikübungen 1/2/3.<br/><br/>Im zweiten Teil werden wir wieder mit dem Arduino eine Schaltung bauen. Dieses Mal steuern wir eine bunte Led-Reihe von Neopixel an. Wir starten mit der Block Programmierung und schalten danach auf den Programmtext um. Dieses Beispiel eignet sich super für eigene LED Projekte. Viel Spaß",
			prerequisites: "Ein Computer mit <a href=\"https://www.tinkercad.com\" target=\"_blank\">Tinkercad</a> Zugang.",
			mentors: ["Günther"],
			link: "https://us02web.zoom.us/j/84139135484?pwd=WGRWbEZ0cjY0Rit2SVVxSWFuUmhyUT09"
		});

		// workshops.push({
		// 	time: "13:45 - 15:45",
		// 	title: "Minecraft Redstone",
		// 	description: "Teil 2 unserer Kombination-locks! Diesesmal versuchen wir uns an Locks die Buttons als Eingabe verwenden. Das macht das ganze um einiges Komplizierter, wie ihr merken werdet ;)",
		// 	prerequisites: "Ihr braucht einen offiziellen Minecraft Account und die Java-Minecraft Version 1.15.2 installiert. Wir werden auf einem gemeinsamen Server unsere Übungen machen.",
		// 	mentors: ["Matthias", "Jan"],
		// 	link: "https://us02web.zoom.us/j/81971337266?pwd=U1YrdDdZR1hyRCtFdmNiUmdhMlVBUT09"
		// });

		// workshops.push({
		// 	time: "13:45 - 15:45",
		// 	title: "HTML & CSS Hands-On",
		// 	description: "In diesem Workshop werden wir ausführlich die Basics von HTML und CSS üben:<br/><ul><li>welche HTML Elemente gibt es</li><li>wie kann ich sie positionieren</li><li>welche CSS Selektoren gibt es</li><li>wie kann ich die Darstellung für verschiedene Display-Größen anpassen</li><li>Variablen in CSS</li><li>wie kann ich in CSS rechnen</li><li>...</li></ul>",
		// 	prerequisites: "<ul><li>ein wenig Erfahrung mit HTML & CSS</li></ul>",
		// 	mentors: ["Karin"],
		// 	link: "https://us02web.zoom.us/j/89640081964?pwd=RDFtMjBrdWxzeXpkSEpqYlNMZWdZdz09"
		// });

		workshops.push({
			time: "13:45 - 15:45",
			title: "Dynamische Webseite mit Node.js",
			description: "Dynamischen Webseiten sind in der Lage sich Informationen zu merken und diese zu verarbeiten, weil unser Code nicht nur im Browser sondern auch am Webserver selbst ausgeführt wird. Das gibt uns Möglichkeiten, die man mit statischen Webseiten nicht hat.<br/><br/>Dieses Mal implementieren wir die beiden noch fehlenden CRUD-Operationen (create, read, update, delete) um Einträge in der FeuerwehrApp ändern und löschen zu können. Weiters sehen wir uns an, wie man die empfangenen Daten mit Javascript als Tabelle darstellt und diese mit einer Filterfunktion versieht. Falls noch Zeit bleibt, können wir beginnen die ChatApp und die FeuerwehrApp in einem gemeinsame App zu integrieren.",
			prerequisites: "<p>Grundlegende Kenntnisse:</p><ul><li>beim Programmieren (z.B. mit JavaScript, Java, C#, C++, ...)</li><li>HTML</li></ul><p>Software:</p><ul><li>einen Texteditor wie z.B. <a href=\"https://notepad-plus-plus.org/\" target=\"_blank\">Notepad++</a>, <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li><li><a href=\"https://nodejs.org/en/download/\" target=\"_blank\">Node.js</a></li><li><a href=\"https://git-scm.com/download/win\" target=\"_blank\">Git</a></li></ul><p>Installationsanleitung:</p><p>Wenn Du möchtest, kannst Du schon vorab unser Projekt bei Dir installieren. So haben wir beim Workshop mehr Zeit für's Programmieren und brauchen nicht so lange warten bis alle mit der Installation fertig sind. Eine Anleitung dazu findest Du auf <a href=\"https://github.com/coderdojo-neusiedl/dynamic-webpage/tree/workshop-20200605\" target=\"_blank\">Github</a>.</p>",
			mentors: ["Thomas"],
			link: "https://us02web.zoom.us/j/81648902295?pwd=UWRkVEZiRC8xM2dGQ0pBTENzdTFzdz09"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Python für AnfängerInnen",
			description: "Wir haben letztes Mal mit dem Spiel \"Bubble Blaster\" begonnen und gelernt wie man ein U-Boot mit Pfeiltasten steuern kann. Dieses Mal erzeugen wir Bubbles, die über den Bildschirm wandern. Ziel des Spiel ist es, möglichst viele Bubbles mit dem U-Boot zu treffen. Neueinsteiger sind auch herzlich willkommen. Ihr bekommt den Code vom letzten Mal und wir wiederholen die wichtigsten Schritte.",
			prerequisites: "<ul><li>Aktuelle Version von <a href=\"https://www.python.org/downloads/\" target=\"_blank\">Python</a></li></ul>",
			mentors: ["Sonja"],
			link: "https://us02web.zoom.us/j/89358979222?pwd=TWRnMzBlVzJzNngvWEUyZlhPQytSdz09"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Discord Bot mit C#",
			description: "Du wolltest schon immer mal deinen eigenen Discord Bot machen? Dann ist das genau der richtige Workshop für dich! In unserer ersten Session werden wir einen Bot programmieren, der uns auf Kommando süße Katzenbilder zusendet oder uns mit lustigen Witzen unterhält! Ideen und Vorschläge könnt ihr gerne vor oder während des Workshops bei mir ( @El'Capitano#5113 ) abgeben :)",
			prerequisites: "Bitte installier dir schon vor dem Coderdojo folgende Dinge:<br/><ul><li><a href=\"https://visualstudio.microsoft.com/vs/community/\" target=\"_blank\">Visual Studio 2019 Community</a></li><li><b>und</b> <a href=\"https://dotnet.microsoft.com/download/dotnet-core/3.1\" target=\"_blank\">.NET Core</a></li></ul><br/>Nice to Haves/Know (Optional):<br/><br/><ul><li><a href=\"https://www.postman.com/downloads/\" target=\"_blank\">Postman</a></li><li><a href=\"https://app.quicktype.io/\" target=\"_blank\">Quicktype</a></li></ul>",
			mentors: ["Jonas"],
			link: "https://us02web.zoom.us/j/85874187975?pwd=Vm85ZTB2T0owa1RKVE5NMkxLdGN5dz09"
		});

		// workshops.push({
		// 	time: "16:00 - 18:00",
		// 	title: "Unity Moonhack",
		// 	description: "Das Spiel Moonhack kennt ihr vielleicht schon vom Beispiel Scratch Moonhack. Diesmal werden wir versuchen das gleiche Spiel mit Unity zu realisieren.",
		// 	prerequisites: "Bitte installier dir schon vor dem Coderdojo folgende Dinge:<br/><ul><li><a href=\"https://store.unity.com/\" target=\"_blank\">Unity 2019.3</a> (oder eine aktuellere - du wirst dafür einen Account bei Unity anlegen müssen - nimm bitte die Individual/Personal Version)</li><li><b>und</b> <a href=\"https://visualstudio.microsoft.com/de/vs/unity-tools/\" target=\"_blank\">Visual Studio 2019 Community</a></li></ul>",
		// 	mentors: ["Hans-Peter"],
		// 	link: "https://us02web.zoom.us/j/85099735480?pwd=MmN1dUd5WDBBdzJIcy9SRS9MQUNVQT09"
		// });

		// workshops.push({
		// 	time: "16:00 - 18:00",
		// 	title: "Web-Entwicklung mit Hugo",
		// 	description: "Wenn du schon etwas Ahnung von HTML und CSS hast, kannst du mit Karin in diesem Workshop lernen, wie man hübsche und vor allem schnelle Webseiten erstellen kann. Karin zeigt, wie der Open-Source Webseiten-Generator Hugo funktioniert und man damit seine Homepage wie ein echter Profi aufbaut.",
		// 	prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li><a href=\"https://github.com/gohugoio/hugo/releases/tag/v0.70.0\" target=\"_blank\">Hugo herunterladen</a></li></ul>",
		// 	mentors: ["Karin", "Rainer"],
		// 	link: "https://us02web.zoom.us/j/81510541132?pwd=UnU3aTNiRlgvOUtzZ0ZvZWxjRThodz09"
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

		data.filter(function(event) { return moment(new Date(event.date)).startOf("day").format('YYYY-MM-DD') != '2020-06-05'; }).forEach(function(event) {
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
