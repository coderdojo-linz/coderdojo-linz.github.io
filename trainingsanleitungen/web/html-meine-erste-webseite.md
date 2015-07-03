---
layout: sushi
title: HTML Meine erste Webseite
description: In dieser Übung erstellst Du deine erste Webseite.
---

# Meine erste Webseite

Das Internet besteht aus vielen Seiten und jede folgt einem strukturiertem Aufbau. 

## Das Grundgerüst einer HTML-Seite

Um nun richtig anfangen zu können, beginnst Du mit einer Textdatei, die folgenden Inhalt hat:

<pre><code>&lt;html&gt;
&lt;head&gt;
&nbsp;&nbsp; &lt;meta charset=&quot;utf-8&quot;&gt;
&nbsp;&nbsp; &lt;title&gt;Beschreibung der Seite (erscheint in der Titelzeile des Browsers)&lt;/title&gt;
&nbsp; &lt;/head&gt;
&nbsp; &lt;body&gt;
&nbsp;&nbsp;&nbsp; &lt;p&gt;Dieser Text wird im Browserfenster angezeigt.&lt;/p&gt;
&nbsp; &lt;/body&gt;
&lt;/html&gt;</code></pre> 
 
Wenn Du beim Anblick dieser HTML-Datei denkst: &quot;Das ist aber schön bunt!&quot; - und vielleicht sogar ein wenig enttäuscht bist, dass es bei Dir nicht so aussieht, keine Sorge! So oder so ähnlich sieht es aus, wenn eine HTML-Datei von einem richtigen HTML-Editor, also einem speziellen Programm zur Anzeige von HTML-Dateien, dargestellt wird.

Mit der ersten Zeile <code>&lt;!doctype html&gt;</code> sagst Du dem Browser: &quot;Ich versuche, mich an den HTML-Standard zu halten, versuch du bitte dasselbe!&quot; Das im Browser sichtbare Ergebnis wird davon nicht unbedingt immer beeinflusst; dennoch ist es allgemein empfehlenswert, die Zeile einfach so zu übernehmen, wie sie ist.

Bestimmt sind Dir schon diese spitzen Klammern aufgefallen. Die sind typisch für HTML. Welche Angabe Du auch immer machst: Wenn Du möchtest, dass der Browser Dich versteht, must du diese Klammern drumherum setzen. So hei&szlig;t die Angabe <code>&lt;html&gt;</code>: Hier fängt der HTML-Bereich an.

Die zweite Angabe mit dem Schrägstrich darin <code>&lt;/html&gt;</code> sagt dem Browser, dass der HTML-Bereich hier zu Ende ist. Auch dieses System zieht sich durch HTML und bleibt sehr verlässlich so. Es gibt zwar ein paar Ausnahmen, aber darum kümmern wir uns jetzt einfach erst einmal nicht. Wir merken uns: Spitze Klammern mit einer Bezeichnung drin - Anfang. Spitze Klammern mit einem Schrägstrich und derselben Bezeichnung drin - Ende.

Das englische &quot;to tag something&quot; bedeutet &quot;etwas markieren" oder &quot;etwas kennzeichnen&quot;, und so spricht man bei HTML von Tags. <code>&lt;html&gt;</code> ist also ein öffnendes Tag, und <code>&lt;/html&gt;</code> ist ein schlie&szlig;endes Tag - beide zusammen &quot;kennzeichnen&quot; den HTML-Bereich.

Nun müssen wir aber endlich zu einem häufig gebrauchten Fachbegriff kommen, bevor wir uns noch was Falsches angewöhnen: Der HTML-Profi spricht nicht von &quot;Bereichen&quot;, sondern von &quot;Elementen&quot;. Wir sagen also nicht mehr &quot;HTML-Bereich&quot;, sondern &quot;HTML-Element&quot;.

Nun können HTML-Elemente auch ineinander verschachtelt sein, d.h. ein Element befindet sich innerhalb eines anderen Elements. Das ist bei HTML ganz normal - auch bei unserer kleinen Beispielseite oben. Das HTML-Element beispielsweise enthält noch zwei weitere Elemente, nämlich <code>head</code> und <code>body</code> (&quot;Kopf&quot; und &quot;Körper&quot;).

Das <code>head</code>-Element (der &quot;Kopf&quot;) enthält Angaben über das folgende Dokument; der eigentliche Inhalt, also das, was der Browser letztlich anzeigen soll, folgt später im <code>body</code>-Element (im &quot;Körper&quot;).

Zwischen die Tags <code>&lt;head&gt;</code> und <code>&lt;/head&gt;</code> notierst Du jetzt einige Angaben, die dem Browser helfen, das Dokument auf den Bildschirm zu zaubern. Los geht's mit der Zeichenkodierung. Es gibt verschiedene Zeichenkodierungen, aber heute nimmt man üblicherweise UTF-8, weil damit die meisten Anwendungsfälle abgedeckt sind. Das Thema Kodierung wird wichtig, wenn Besucher die Seite sehen mit anderen Schrift-Zeichen (Chinesen / Japaner / Araber / ... ):

<pre><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code></pre>

## Der Titel der Seite

Jede HTML-Datei muss einen Titel erhalten. Dieser Titel dient in der Praxis mehreren Zwecken, aber solange Du die Seiten nur zum Lernen und Ausprobieren auf Deinem eigenen Computer entwickelst und testest, wird für Dich erstmal wichtig sein, dass der Titel im Browser in der Titelzeile des Anzeigefensters bzw. Karteireiters (Tab) angezeigt wird. So könnte dies beispielsweise beim Dojo so aussehen.

<img src="html-meine-erste-webseite/html-BrowserTitle.png" />

Später, wenn Deine HTML-Datei aus dem Internet erreichbar sein wird, bekommt der Titel einer HTML-Seite sogar noch grö&szlig;ere Bedeutung:

* Der Titel der Datei wird vom Web-Browser beim Setzen von Lesezeichen (Bookmarks, Favoriten) verwendet.
* Der Titel der Datei wird im Web-Browser in der Liste der bereits besuchten Seiten (Verlauf) angezeigt.
* Der Titel der Datei dient im Web vielen automatischen Suchprogrammen als wichtige Informationsquelle, so dass Deine HTML-Seiten leichter von Interessenten mit einer Suchmaschine wie z.B. Google gefunden werden kann, sofern Du sinnvolle Titel für Deine HTML-Seiten vergeben hast.
* Wenn die Datei zu den Suchtreffern einer Suche gehört, bieten viele Suchmaschinen den Titel der Datei als anklickbaren Verweis an. 

<img src="html-meine-erste-webseite/html-BrowserTitleGoogle.png" />

Unser CoderDojo wird also sicherlich etwas wie das Folgende eintragen:

<pre><code>&lt;title&gt;CoderDojo Linz | Meine erste Webseite&lt;/title&gt;</code></pre>

## Nach dem Kopf folgt der Körper
               
Nun wird es Zeit, dem Browser zu sagen, was er auf dem Monitor darstellen soll. Wie schonschon erwähnt, kommt das in das body-Element rein. Nehmen wir als Beispiel eine schöne gro&szlig;e &Uuml;berschrift. &Uuml;berschrift hei&szlig;t auf Englisch heading. Es gibt sechs &Uuml;berschriftenebenen, die einfach von eins bis sechs nummeriert werden (h1, h2, h3, h4, h5, h6). Gewöhnlich fängt man mit <code>h1</code> an; das ist die grö&szlig;te. Wenn man dann das, was auf diese &Uuml;berschrift folgt, nochmals unterteilen will, nimmt man die nächste: <code>h2</code>. Und so weiter, und so fort.

Da wir gerade erst anfangen, wird die &Uuml;berschrift zwischen die Tags <code>&lt;h1&gt;&lt;/h1&gt;</code>gesetzt. 

Die HTML-Datei sieht jetzt so aus:

<pre><code>&lt;html&gt;
&nbsp; &lt;head&gt;
&nbsp;&nbsp; &nbsp;&lt;meta charset=&quot;utf-8&quot;&gt;
&nbsp;&nbsp;&nbsp; &lt;title&gt;CoderDojo  Linz | Meine erste Webseite &lt;/title&gt;
&nbsp; &lt;/head&gt;
&nbsp; &lt;body&gt;
&nbsp;&nbsp;&nbsp;&lt;h1&gt;Meine erste Webseite&lt;/h1&gt;
&nbsp;&nbsp;&nbsp;&lt;p&gt;Dieser Text wird im Browserfenster angezeigt.&lt;/p&gt;
&nbsp; &lt;/body&gt;
&lt;/html&gt;</code></pre>

Speichere die Datei z.B. unter dem Namen index.html ab. Du kannst jetzt z.B. auf diese Datei doppelklicken, und dann sollte diese im Standardbrowser Deines Systems geöffnet und im Browserfenster angezeigt werden. Die HTML-Datei ist eine ganz normale Textdatei, die Du mit jedem beliebigen Editor oder Browser auf dem normalen Weg öffnen und bearbeiten kannst, wie Du es auch mit anderen Dateien machst.

So schön diese Begrü&szlig;ung auch sein mag: Es fehlt noch etwas, nämlich der eigentliche Inhalt. Deswegen fangen wir jetzt mit dem ernsthaften Erstellen an.

Du willst sicher ein paar Worte über dich schreiben. &Uuml;blicherweise wird ein normalen Text mit Absätzen verfasst. Das englische Wort für &quot;Absatz&quot; lautet paragraph, und daraus ergeben sich dann die Tags <code>&lt;p&gt;</code> (Absatzanfang) und <code>&lt;/p&gt;</code> (Absatzende).

## Ungeordnete Listen, Aufzählungen

Wir sind gleich durch, Schön. Was stand als nächstes auf deiner Liste? Ah ja, die Liste mit den Lieblingsbeschäftigungen. Liste hei&szlig;t auf Englisch list und man notiert sie grundsätzlich auf eine von zwei Arten: Entweder nummeriert (geordnet) oder eben nicht nummeriert (ungeordnet). Nicht nummerierte Listen haben meistens irgendein Symbol vor den einzelnen Listenpunkten; das kennst Du vermutlich aus einem Textverarbeitungsprogramm. Eine geordnete Liste (ordered list) wird bei HTML zwischen <code>&lt;ol&gt;&lt;/ol&gt;</code> notiert. Eine ungeordnete Liste (unordered list) wird zwischen <code>&lt;ul&gt;&lt;/ul&gt;</code> notiert. Jedes einzelne Element der Liste (egal, ob geordnet oder ungeordnet) wird wiederum zwischen die Tags <code>&lt;li&gt;&lt;/li&gt;</code>gesetzt. Probier es einfach mal aus:

<pre><code>&lt;ul&gt;
&nbsp;&lt;li&gt;radfahren&lt;/li&gt;
&nbsp;&lt;li&gt;Musik hören&lt;/li&gt;
&nbsp;&lt;li&gt;mit Freunden spielen&lt;/li&gt;
&nbsp;&lt;li&gt;vor dem Rechner sitzen&lt;/li&gt;
&lt;/ul&gt;</code></pre>

Das sollte im Browser dann ungefähr so dargestellt werden:

<ul>
	<li>radfahren</li>
	<li>Musik hören</li>
	<li>mit Freunden spielen</li>
	<li>vor dem Rechner sitzen</li>
</ul>

Geordnet schaut es so aus:

<pre><code>&lt;ol&gt;
&nbsp;&lt;li&gt;radfahren&lt;/li&gt;>
&nbsp;&lt;li&gt;Musik hören&lt;/li&gt;
&nbsp;&lt;li&gt;mit Freunden spielen&lt;/li&gt;
&nbsp;&lt;li&gt;vor dem Rechner sitzen&lt;/li&gt;
&lt;/ol&gt;</code></pre>

Das sollte im Browser dann ungefähr so dargestellt werden:
<ol class="plain">
	<li>radfahren</li>
	<li>Musik hören</li>
	<li>mit Freunden spielen</li>
	<li>vor dem Rechner sitzen</li>
</ol>


Wir können auch die Listen verschachteln:
<ul>
	<li>radfahren</li>
	<li>
		Musik hören
		<ul>
			<li>Jazz</li>
			<li>Rock</li>
			<li>Pop</li>
		</ul>
	</li>
	<li>mit Freunden spielen</li>
	<li>vor dem Rechner sitzen</li>
</ul>

Wie bekommt man so eine Verschachtelung hin? Ganz einfach: Die Lösung dafür ist die Liste in der Liste! Jetzt müssen wir uns ein bisschen konzentrieren, aber das bekommen wir hin: 

<pre><code>&lt;ul&gt;
&nbsp;&lt;li&gt;radfahren&lt;/li&gt;
&nbsp;&lt;li&gt;Musik hören
&nbsp;&nbsp; &lt;ul&gt;
&nbsp;&nbsp; &nbsp;&lt;li&gt;Jazz&lt;/li&gt;
&nbsp;&nbsp; &nbsp;&lt;li&gt;Rock&lt;/li&gt;
&nbsp;&nbsp; &nbsp;&lt;li&gt;Pop&lt;/li&gt;
&nbsp;&nbsp; &nbsp;&lt;/ul&gt;
&nbsp;&lt;/li&gt;
&nbsp;&lt;li&gt;mit Freunden spielen&lt;/li&gt;
&nbsp;&lt;li&gt;vor dem Rechner sitzen&lt;/li&gt;
&lt;/ul&gt;</code></pre>

Wir haben Dir eine Vorlage zusammengestellt <a href="https://raw.githubusercontent.com/coderdojo-linz/coderdojo-linz.github.io/master/trainingsanleitungen/web/html-meine-erste-webseite/meine-erste-webseite.html" target="_blank">hier</a> klicken zum Herunterladen.

## Wichtige Sonderzeichen

Hier nur mal die wichtigsten Zeichen in der deutschen Sprache 

<table class="table">
	<tr><th><b>Zeichen</b></th><th><b>in Worten</b></th><th><b>Html Code</b></th></tr>
	<tr><td>&szlig;</td><td>scharfes S (sz-Ligatur)</td><td>&amp;szlig;</td></tr>
	<tr><td>ä</td> <td>a Umlaut</td><td>&amp;auml;</td></tr>
	<tr><td>ü</td> <td>u Umlaut</td><td>&amp;uuml;</td></tr>
	<tr><td>ö</td> <td>o Umlaut</td><td>&amp;ouml;</td></tr>
	<tr><td>&Auml;</td> <td>a Umlaut</td><td>&amp;Auml;</td></tr>
	<tr><td>&Uuml;</td> <td>u Umlaut</td><td>&amp;Uuml;</td></tr>
	<tr><td>&Ouml;</td> <td>o Umlaut</td><td>&amp;Ouml;</td></tr>
	<tr><td>&amp;</td>  <td>und Zeichen</td><td>&amp;amp;</td></tr>
</table>

Eine gute Auflistung ist <a href="http://wiki.selfhtml.org/wiki/Referenz:HTML/Zeichenreferenz" target="_blank">hier</a> zu finden

## Bilder einfügen

Das Bild-Element kommt wie alle anderen Elemente auch aus dem englsichen. Bild ist Image auf englisch, da Entwickler gerne Zeichen sparen, wurde es einfach auf <code>img</code> verkürzt.

Jedes Bild braucht auch einen Verweis wo die Bild-Datei zu finden ist. Dies wird als Quelle bezeichnet und lautet im englishen Source also für Entwickler kurz <code>src</code>.

Nun kommt noch ein Attribut, dieses ist nicht zwingend notwendig, aber es wird angezeigt, wenn die Datei nicht geladen werden kann, bzw. für Blinde ist dieses Attribut wichtig.

<code>&lt;img src="meinBild.png" alt="Alternativer Text" /&gt;</code>

## Verlinkungen, Verweise

Der <code>a</code> Tag kommt vom englischen &quot;to anchor&quot; dies kann übersetzt werden mit &quot;verankern&quot; oder &quot;befestigen&quot;

Das zugehörige Attribut hei&szlig;t <code>href</code> (englisch: hyper reference = Hyper[text]-Referenz). Darauf folgt das Gleichheitszeichen (=) und darauf, eingeschlossen in doppelte Anführungszeichen, die &quot;Adresse&quot; (HTML-Datei) zu der man beim Anklicken gelangen soll.

<code>&lt;a href="meinBild.png" alt="Alternativer Text"&gt;Text zum anklicken&lt;/a&gt;</code>

Das sind nun die wichtigsten Begriffe zum Thema HTML.