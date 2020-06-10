---
title: "Erste Schritte mit Unity"
description: "In dieser Übung lernst du Unity kennen."
aliases:
  - /trainingsanleitungen/unity/erste-schritte-mit-unity.html
---

# Unity Racing Game

Ganz ehrlich – wer gerne Programmiert hat fast immer schon einmal davon geträumt ein eigenes Computerspiel auf die Beine zu stellen. Kein Wunder, immerhin faszinieren Computerspiele den Menschen schon fast 50 Jahre und sie haben einen großen Anteil an der vormals rasanten Entwicklung im Hardwarebereich. Während die älteren Semester hierbei oft an komplizierte Matrizenberechnungen und native [OpenGL](https://de.wikipedia.org/wiki/OpenGL) Programmierung denken fällt das Entwickeln von Spielen heute so leicht wie nie zu vor. Komplexe Game Engines sind teilweise gratis verfügbar und bieten neben einer leicht zu beherrschenden IDE sogar die Möglichkeit fertige Komplettpakete von 3D Modellen samt Animationen in einem eigenen Store zu kaufen und direkt weiterzuverwenden. Um einen kleinen Einblick in die Spieleentwicklung zu geben werden wir in mehreren Sessions ein kleines Rennspiel mit [Unity 5](https://unity3d.com/5) entwickeln. 

## Warum Unity?

Unity ist der ideale Einstiegspunkt in die Computerspielentwicklung. Das Ziel der einfachen Programmierung mit [C#](https://de.wikipedia.org/wiki/C-Sharp) samt [Visual Studio](http://www.visualstudio.com) Unterstützung in Kombination mit einem leicht verständlichen Modellierungstool hat sich der Hersteller zum Ziel gesetzt. Wie oben bereits erwähnt können ganz einfach 3D Modelle im so genannten *Asset Store* erworben (viele sind auch gratis erhältlich) und unmittelbar eingesetzt werden. Das Ergebnis lässt sich schließlich für fast alle gängigen Plattformen von Xbox bis iPhone bauen – ideal um die eigene Spieleidee auch in allen Märkten zu positionieren. 

## Unity 5 herunterladen und installieren

Downloadlink: [https://unity3d.com/get-unity/download?ref=personal](https://unity3d.com/get-unity/download?ref=personal)

Unter diesem Link kommt ihr direkt zum Download der *Unity 5 Personal Edition*. Das Tool ist (sofern nicht bestimmte Gewinngrenzen überschritten werden) mit fast allen für den Einstieg wichtigen Funktionen kostenlos. Installiert Unity am besten gleich vollständig um euch spätere Wartezeiten zu ersparen. 
Beim Start nach der Installation müsst ihr euch registrieren und ein Unity Konto anlegen. Sobald ihr fertig seid könnt ihr sofort ein neues Projekt anlegen und die Fülle des Programms offenbart sich. 
 
In der Mitte des Fensters befindet sich der *3D Editor*, auf der linken Seite die Elemente in der aktuellen Szene, rechts können die Eigenschaften der aktuellen Auswahl eingesehen werden und unten erlangt ihr Zugriff auf verfügbare Assets sowie dem Asset Store und die Console auf welcher Debug Ausgaben ausgegeben werden können. Schon jetzt könnt Ihr mit einem Klick auf den Play Button oben in der Mitte das Spiel sofort starten. Außer einem Horizont am Hintergrund gibt es jedoch nichts zu sehen, daher stoppen wir die Ausführung wieder. Bevor wir richtig mit der Programmierung starten noch ein paar Details zum 3D Editor.

{{< imgblock "img/bildschirmaufbau-unity.png" "Bildschirmaufbau bei Unity" >}}{{< /imgblock >}}

## Der 3D Editor

Der Editor erlaubt Einblicke in die Basis eines jeden 3D Spiels – dem [*Euklidischen Raum*](https://de.wikipedia.org/wiki/Euklidischer_Raum). Euklid ist einer der wichtigsten Mathematiker der Geschichte und seine Entdeckungen in der Geometrie führten schließlich zur Entdeckung des Koordinatensystems, welches in der 3dimensionalen Form (mit 3 Achsen [x,y,z](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem)) „Euklidischer Raum“ genannt wird. Über zweitausend Jahre glaubten die Menschen die Realität in welcher wir leben ist nichts anderes als dieses 3 dimensionale Koordinatensystem und sämtliche Vorgänge ließen sich darin beschreiben. Erst [Einstein](https://de.wikipedia.org/wiki/Albert_Einstein) konnte zeigen, dass die Realität nun doch ein wenig komplizierter ist als ein Computerspiel. 

Jedes Objekt welches wir in diesem Raum platzieren hat 3 wesentliche Eigenschaften (im Eigenschaften-Fenster rechts zu sehen):

* die Position, 
* die Rotation 
* sowie die Größe (*Scale*).

Um überhaupt etwas sehen zu können, muss natürlich eine *Kamera* im Raum platziert sein – dies machte uns Unity schon beim Erstellen des Projektes. Wenn ihr die Kamera mit der Maus selektiert (Entweder direkt in der Hauptansicht oder links bei den *Elementen in der Szene*) füllt sich das Eigenschaftenfenster und auch die Kamera erhält nun kleine Pfeile, in denen ihr ihre Position verändern könnt. 

## Hinzufügen von Objekten

Das wichtigste fehlt unserm Spiel natürlich noch: 3D Objekte. Um ein 3D Objekt in den Raum zu bringen, wählt in der Menüleiste: *GameObject => 3D Object => Cube*. Nun wird der Szene ein Würfel hinzugefügt und er erhält einen Eintrag im Elementfenster. Wenn ihr nun wiederum die Kamera anwählt seht ihr in einem kleinen Fenster direkt die Sicht des Spielers. Verändert nun die Position der Kamera so dass der Würfel sichtbar ist. Wenn das Spiel nun gestartet wird, merkt ihr, dass sich bis auf den nun sichtbaren Würfel nichts weiter tut. Moment – eigentlich müsste der Würfel ja hinunterfallen wenn es hier um eine virtuelle Realität handelt!?

## Eigenschaften von Objekten

Dafür müsst ihr Wissen, dass *GameObjects* in Unity prinzipiell keine Eigenschaften aufweisen – alles muss erst selbst in Handarbeit zugewiesen werden (und in einer Traumwelt gilt ja auch nicht immer die Schwerkraft). Wir werden nun dem Würfel übliche, physikalische Eigenschaften zuweisen. Dafür wählt den Würfel an und klickt im Eigenschaften-Fenster rechts ganz unten *Add Component => Physics => Rigidbody*. Im Eigenschaftenfenster erscheint sofort der Rigidbody mit seinen möglichen Einstellungen wie der [Masse](https://de.wikipedia.org/wiki/Masse_(Physik)) des Objektes. Wenn das Spiel nun gestartet wird, passiert immerhin erstmals etwas – der Würfel fällt einfach hinunter ins leere Nichts. 

Ein Charakter (wir nehmen einfach mal an, der Würfel ist unser Spieler-Objekt, also das Auto) alleine ist natürlich noch zu wenig, es gilt ja noch den eigentlichen Level zu designen. Man könnte einen Level selbst auf verschiedenste Varianten bauen, etwa in dem wir viele Würfel ohne Rigidbody platzieren. Da wir bei unserem Rennspiel ja eigentlich nur eine Ebene (=*Plane) zum darauf fahren brauchen, fügen wir nun eine solche ein: *GameObject => 3D Object => Plane*. 

Wir platzieren nun die Plane unterhalb des Würfels und starten das Spiel. Man sieht den Würfel nun fallen bis er auf der Fläche abprallt und liegen bleibt. Perfekt – nun haben wir einen Level (die Plane) und einen Spieler (den Würfel). 

## Materialen und Texturen

Bevor wir aber mit der Programmierung starten, müssen wir die farblosen Objekte noch etwas auf hübscher machen, indem wir ihnen eine Oberfläche, ein sogenanntes *Material* verpassen. Im unteren Fenster (*Project*) befinden sich sämtliche Objekte, Materialien oder Scripts in unserer Szene. Um Speicherplatz zu sparen sind zu Beginn allerdings weder Modelle noch Materialien vorhanden. Wir müssen diese erst importieren: *Assets => Import Package => Environment*. Nach einer kurzen Ladezeit taucht ein Fenster mit dem Inhalt des Pakets auf. Wir importieren es einfach zur Gänze, indem wir sämtliche Einträge mit einem Häkchen versehen (dies sollte auch die Standardeinstellung sein).

Nachdem das Paket importiert wurde, werden wir für unser Spiel noch ein weiteres hinzufügen: *Assets => Import Package => Vehicles*. Wir können nun auch im unteren Fenster (*Project – Assets*) die importierten Objekte sehen. Bei Bedarf kann in diesem Fenster natürlich im Asset Store weiter eingekauft werden. Wir geben uns jedoch mit den bereits vorhandenen Dingen zufrieden und wählen uns sowohl für den Würfel als auch die Plane ein Material aus und ziehen es direkt auf das betreffende Objekt im *Elemente Fenster* links. Das Resultat – die texturierte Fläche bzw. den Würfel können wir in voller Pracht in der 3D Ansicht bewundern. 
Nun können wir endlich zu Programmieren beginnen. 

## Entwickeln von Scripts

Um für den Würfel ein eigenes Verhalten zu definieren, fügen wir ihm eine weitere Eigenschaft hinzu – ein sogenanntes *Script*. Eigentlich ist der Rigidbody selbst ja auch nur ein programmiertes Script, welches uns Unity aufgrund der hohen Komplexität zum Glück vorenthält. Wir wählen also wieder den Würfel an und wählen *Add Component => New Script*. Wir benennen dieses Script *CarBehavior*. Im Eigenschaftsfenster taucht nun das Script auf. 

Wer von euch nun [Visual Studio Community Edition](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) auf seinem Rechner hat (kostenfrei), kann die Scripts auch mit Visual Studio editieren. Bei Unity selbst ist der so genannte *Mono Developer* Editor dabei, welcher für einfache Aufgaben auch reicht, aber natürlich lässt sich mit Visual Studio gleich viel besser arbeiten.

Um Visual Studio zu verwenden, geht auf *Edit => Preferences => External Tools*. Die Einstellung *external Script Editor* befindet sich ganz oben, Mono Develop ist hier ausgewählt. Wechselt einfach zu *Microsoft Visual Studio 2013* und schließt dieses Fenster wieder.

{{< imgblock "img/unity-mit-visual-studio-verbinden.png" "Unity mit Visual Studio verbinden" >}}{{< /imgblock >}}

Wählt als nächstes wieder den Würfel aus, dem wir zuvor das Script hinzugefügt haben. Klickt das Script mit der rechten Maustaste an und wählt *Edit Script*. Nun wird der Code Editor gestartet (dies kann eine Weile dauern). 
Wenn der Ladevorgang fertig ist, befinden wir uns in Visual Studio und können das Script sofort bearbeiten. Zu Beginn sieht es noch folgendermaßen aus: 

{{< imgblock "img/script-in-visual-studio.png" "Script in Visual Studio" >}}{{< /imgblock >}}

Das Script enthält zu Beginn nur 2 Methoden: *Start* und *Update*. Diese verhalten sich natürlich auch ganz ihrem Namen nach: Die Start-Methode wird hinzugefügt, sobald das Spiel gestartet wird (bzw. wenn ein GameObject initialisiert wird, das erst im späteren Spielverlauf hinzukommt). Die Update-Methode wird jedoch für jeden [Frame](https://de.wikipedia.org/wiki/Einzelbild_(Film)) (sprich um ein flüssiges Spiel zu erhalten mindestens 25x pro Sekunde) aufgerufen. Wenn wir komplexe Vorgänge in unsere Scripts einbauen, müssen wir natürlich auch darauf achten, in der Update Methode nicht zu viel Zeit zu verlieren. 

Wir wollen nun die Update Methode so anpassen, dass sich der Würfel ein wenig wie ein Fahrzeug verhält, also fügen wir unserer Scriptklasse ein paar Variablen hinzu um dies zu ermöglichen:

```csharp
private readonly Vector3 _direction = Vector3.forward;
private float _speed = 0f;
private const float Velocity = 1f;
private float _wheelangle = 0;
```

Zuerst einen [Vektor](https://de.wikipedia.org/wiki/Vektor) für die Richtung, in welche sich unser Würfel bewegt (mit dem Wert *Vector3.forward*, damit sich der Würfel in die von ihm aus gesehen Richtung gerade nach vorne bewegt). Bewegungen im 3dimensionalen Raum werden mit Vektoren beschrieben. Um hierbei fit zu sein, empfiehlt es sich, gut im Mathematikunterricht aufzupassen und/oder sich die Grundlagen durch Recherche in Büchern oder im Internet zu ereignen (z.B. [http://www.frustfrei-lernen.de/mathematik/vektor-vektorrechnung-mathematik.html](http://www.frustfrei-lernen.de/mathematik/vektor-vektorrechnung-mathematik.html)).

Zusätzlich zur Bewegungsrichtung legen wir auch Variablen für die Geschwindigkeit (*_speed*), die Beschleunigung (*Velocity*) und den Lenkradwinkel (*_wheelangle*) an.
 
Dem Inhalt der Update Methode fügen wir nun folgenden Code hinzu:

```csharp
if (Input.GetKey(KeyCode.UpArrow))
{
    _speed += Velocity;
}
if (Input.GetKey(KeyCode.DownArrow))
{
    _speed -= Velocity;
}
if (Input.GetKey(KeyCode.LeftArrow))
{
    _wheelangle -= 2f;
}
if (Input.GetKey(KeyCode.RightArrow))
{
    _wheelangle += 2f;
}
```

Wir benutzen für unsere Steuerung die Pfeiltasten. Mit *Input.GetKey(KeyCode c)* können wir abfragen, ob eine bestimmte Taste gerade gedrückt ist. Wenn dem so ist, verändern wir einfach die Werte unserer Variablen je nach gedrückter Taste. 

Zu guter Letzt müssen wir die Änderungen auf das Objekt anwenden:

```csharp
_wheelangle /= 2;
Debug.Log(_speed);
    this.transform.Translate(_direction*_speed * Time.deltaTime);

this.transform.Rotate(Vector3.up, _wheelangle);
```

Wir teilen in jedem Durchlauf den Lenkrad Winkel durch 2 um zu simulieren, dass sich das Lenkrad nach Loslassen der Taste langsam wieder in die Mittelposition bewegt. Anschließend geben wir (auch um die Console zu zeigen) die aktuelle Geschwindigkeit aus.
 
Um den Würfel auch fahren zu lassen, müssen wir ihn nun noch bewegen (*transform.Translate*) sowie rotieren (*transform.Rotate*) lassen.
 
## Transform.Translate

Diese Methode erwartet einen Vektor für die Bewegungsrichtung. Diesen multiplizieren wir erstens mit der aktuellen Geschwindigkeit sowie *Time.deltaTime*. Dies ist notwendig, damit sich das Objekt auch immer gleich schnell bewegt, unabhängig von der aktuellen Framerate. Da sich der Würfel durch die Bewegung natürlich nicht dreht, müssen wir ihn auch noch drehen. 

## Transform.Rotate

Dieser Methode müssen wir sowohl einen Vektor angeben, um welchen die Drehung durchgeführt wird, als auch einen Winkel für die Intensität. Wir drehen somit das Fahrzeug um die Intensität *_wheelangle* um die Z-Achse.

Nun haben wir bereits das Wichtigste geschafft. Wenn wir die Datei speichern, zurück in Unity wechseln und den Play Button anklicken, geht das Spiel los. Der Würfel fällt auf die Plane und kann anschließend mit den Pfeiltasten herumgefahren werden. 

Da die Plane eine etwas kleine Fläche zum Herumfahren ist, können wir sie selektieren und im Eigenschaftsfenster ihren Größe (*Scale*) etwa von 1 auf 20 erhöhen.

## Zusammengesetzte Objekte

Nun kommen wir zum letzten Punkt von Teil 1 unseres Unity Rennspiels. Der Würfel ist ja noch immer kein Fahrzeug. Wir können Objekte in Gruppen zusammenfügen um zu garantieren dass unsere Scripts auch für ein zusammengesetztes Objekt gelten. Wir suchen uns nun unter *Assets* das *Skycar* und ziehen es direkt auf den Würfel im Elemente-Fenster. Man sieht das Skycar nun leicht eingerückt was anzeigt, dass er zum Würfel gehört. Wenn wir auch noch die Kamera im Elemente-Fenster auf den Würfel ziehen dann wird auch sie ein *Kindelement* des Würfels und folgt ihm (ebenso wie das Skycar, welches nun direkt über dem Würfe liegt, sodass dieser bei normaler Größe im Inneren des Skycars verschwindet). Die Kamera richten wir nun mit der Maus im Editor oder durch Verändern seiner Positions/Rotationswerte im Eigenschaftsfenster noch so aus, dass sie von hinten auf das Fahrzeug zeigt. 

## Ergebnis und Build

Wenn wir das Spiel nun starten, fällt das Fahrzeug auf die Plane und wir können herumfahren – perfekt. Wir können bei Bedarf auch noch ein paar weitere Würfel mit Rigidbody-Eigenschaft in die Szene einfügen und mit unserem Auto physikalische Kollisionen provozieren.
 
Zu guter Letzt wollen wir das Spiel natürlich auch noch ohne Unity spielen, und dazu müssen wir es bauen: *File => Build & Run*. Wir können nun die Plattform für den Build wählen. Da wir auf unserem lokalen Rechner spielen wollen, nehmen wir *Windows (x86)*. Nach erfolgreichem Build können wir uns noch die Grafikeigenschaften für das Spiel auswählen und los geht’s!

{{< imgblock "img/fertiges-spiel.png" "Unser fertiges Spiel" >}}{{< /imgblock >}}

Viel Spaß!

 
