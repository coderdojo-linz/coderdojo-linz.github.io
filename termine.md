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
		row += "<td>Freitag, 10. April 2020</td>";
		row += "<td class='type-coderdojo'>CoderDojo Online</td>";
		row += "<td>";

		var workshops = [];
		
		workshops.push({
			time: "13:45 - 15:45",
			title: "Virtuelles Elektronikbasteln",
			description: "In diesem Workshop könnt ihr virtuell Elektronik basteln mit <a href=\"https://www.tinkercad.com/\" target=\"_blank\">Tinkercad</a>. Ihr werdet Schaltungen bauen und braucht dafür weder Lötkolben noch Bauteile. Dieser Workshop ist offen für alle, nicht nur für Teilnehmerinnen und Teilnehmern vom CoderDojo Elektronik Classroom.<p>Wir werden die Strom und Spannungsmessung in Tinkercad anschauen und es werden die Grundlagen Strom, Spannung und Widerstand anhand eines einfachen Beispiels erklärt, dass jeder zu Hause im Nachgang nachbauen kann. Mit Alufolie, einem Bleistift, einer 12V Lampe aus dem Auto und eine 9V Batterie bauen wir eine Helligkeitsregelung.</p><p>Im zweiten Teil werden wir den Elternalarm mit dem Arduino und ein paar virtuellen Bauteilen auf Tinkercad bauen. Wer möchte nicht wissen wenn sich die Eltern oder Geschwister dem Zimmer nähern. Mit der Schaltung und dem Programm könnte ihr dann dieses Projekt später in die Realität überführen.</p>",
			prerequisites: "Computer mit Internetzugang, Begeisterung und etwas Zeit. Es wird wieder eine Tinkercad Classroom geben, wo ihr in den erste 10 Min mit euren Nickname Zugang bekommt. Und dann geht es auch schon los!",
			mentors: ["Günther", "Michael"],
			link: "https://zoom.us/j/190881403"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Pimp Your Website mit CSS",
			description: "Letzte Woche haben wir uns im Detail mit HTML beschäftigt. Diesmal wollen wir unsere Webseiten hübsch gestalten und mit coolen Animationen versehen. Voraussetzung für diesen Workshop ist, dass ihr die Grundlagen von HTML beherrscht.",
			prerequisites: "<ul><li>Visual Studio Code: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">https://code.visualstudio.com/</a></li><li>mit folgende Plugins:<ul><li><a href=\"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\" target=\"_blank\">Live Server</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare\" target=\"_blank\">Live Share</a></li><li><a href=\"https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer\" target=\"_blank\">Autoprefixer</a></li></ul></li></ul>",
			mentors: ["Karin", "Rainer", "Cornelia", "Gerlinde"],
			link: "https://zoom.us/j/384514141"
		});

		workshops.push({
			time: "13:45 - 15:45",
			title: "Java",
			description: "Wir werden unserem Spiel beibringen auf Benutzereingaben zu reagieren und Kollisionen zu erkennen.",
			prerequisites: "<ul><li><a href=\"https://www.jetbrains.com/de-de/idea/download/#section=windows\" target=\"_blank\">IntelliJ IDEA (Community Edition)</a></li><li><a href=\"https://git-scm.com/download/win\" target=\"_blank\">Git</a></li></ul>",
			mentors: ["Thomas"],
			link: "https://zoom.us/j/218047339"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Minecraft Redstone",
			description: "Wenn du schon immer Redstone Schaltungen selber entwerfen wolltest oder verstehen willst wie die Schaltungen funktionieren die du von Youtube kopierst ;) dann bist du hier genau richtig! Wir werden einen Einsteigerkurs in Redstone machen mit:<ul><li>Grundlagen: Was ist redstone, welche Bauteile gibt es dafür, ...</li><li>Erste logische Schaltungen: Was sind Und/Oder/Nicht Schaltungen und warum brauch ich sie.</li><li>Erste kompliziertere Schaltungungen, wie baue ich eine versteckte Tür mit Pistons.</li></ul>",
			prerequisites: "Du brauchst einen offiziellen Minecraft Account und Minecraft in der Version 1.15.2 installiert und spielbereit. Es muss ein offizieller Account sein, weil wir auf einem gemeinsamen Server unsere Übungen machen werden.",
			mentors: ["Matthias", "Jan"],
			link: "https://zoom.us/j/973893563"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Scratch Anfängerworkshop",
			description: "Natürlich darf ein Workshop für Anfängerinnen und Anfänger mit Scratch im CoderDojo nicht fehlen. Wenn ihr noch nie mit Scratch gearbeitet habt, dann könnt ihr in diesem Workshop euer erstes Computerspiel programmieren.",
			prerequisites: "<ul><li>Installiert Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li><li>oder verwendet die Onlineversion von Scratch: <a href=\"https://scratch.mit.edu/\" target=\"_blank\">https://scratch.mit.edu/</a></li></ul>",
			mentors: ["Gerlinde", "Sonja", "Walter"],
			link: "https://zoom.us/j/976771003"
		});

		workshops.push({
			time: "16:00 - 18:00",
			title: "Pimp Your Scratch Space Shooter",
			description: "Habt ihr unseren Scratch Spaceshooter schon mal gebaut? Wir werden diesmal bei der Version vom Freitag, 3.4. weitermachen. Wenn ihr da nicht dabei wart ist das kein Problem. Die Version könnt ihr unter <a href=\"https://scratch.mit.edu/projects/382856553\" target=\"_blank\">CoderDojo-Spaceshooter V1</a> einfach öffnen und herunterladen. Von dort aus werden wir den Spaceshooter erweitern und neue Funktionen hinzufügen. Freut euch auf:<ul><li>Hintergrund mit bewegten Sternen</li><li>ein Spiel mit mehr als nur einem Leben</li><li>gefährliche Meteoritenbruchstücke</li></ul>",
			prerequisites: "<ul><li>Installiert Scratch: <a href=\"https://scratch.mit.edu/download\" target=\"_blank\">https://scratch.mit.edu/download</a></li><li>oder verwendet die Onlineversion von Scratch: <a href=\"https://scratch.mit.edu/\" target=\"_blank\">https://scratch.mit.edu/</a></li></ul>",
			mentors: ["Hans-Peter"],
			link: "https://dynatrace.zoom.us/j/839746804"
		});

		workshops.forEach(function(w) {
			row += "<p><span class=\"workshop-title\">" + w.time + " " + w.title + "</span></p><p>" + w.description + "</p><p><b>Voraussetzungen</b></p><p>" + w.prerequisites + "</p><p><b>Mentoren:</b> " + w.mentors.join(", ") + "</p><p><b>Link zum Teilnehmen:</b> <a href='" + w.link + "' target='_blank'>" + w.link + "</a></p>";
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
