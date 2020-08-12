---
title: "Android Map Reactions App, Teil 2"
description: "In dieser Übung verbesserst du die Map Reactions App unter anderem in den folgenden Punkten: Design, Stabilität und Interaktion mit dem Benutzer."
level: 3
img: "map_reactions_app.png"
---

# Android Map Reactions App, Teil 2

Im [ersten Teil dieser Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app/) hast du eine Android App in Java programmiert. In dieser App kann man bereits einen Satz eingeben, der dann (phonetisch auf Orte übersetzt) als Route auf einer Karte angezeigt wird. Die Idee dazu basiert auf diesem [Comic Strip](https://xkcd.com/2260/). In diesem Teil werden einige Verbesserungen beschrieben, die du noch machen kannst. Diese beinhalten unter anderem das Styling der App, ein paar Verbesserungen des Codes selbst und die App sollte auch etwas stabiler werden.

{{< imgblock "https://imgs.xkcd.com/comics/reaction_maps.png" "XKCD's Reaction Maps comic strip" >}}{{< /imgblock >}}

## Voraussetzungen

- Du solltest den [ersten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app/) abgeschlossen haben.
- Ein Smartphone mit Android 5.0 oder höher ([So findest du die Android Version deines Smartphones](https://support.google.com/android/answer/7680439?hl=de)). Alternativ kannst du auch einen [Emulator](https://developer.android.com/studio/run/emulator) verwenden.
- Ein Kabel um dein Smartphone mit dem Computer zu verbinden (falls du dein Smartphone verwendest).
- [Android Studio](https://developer.android.com/studio/install)

## Die App aufräumen und umstrukturieren

Der erste Schritt um die App zu verbessern, ist sie erstmal aufzuräumen. Dabei wirst du die Namen der Dateien verbessern und Teile, die nicht mehr benötigt werden, löschen. Befolge dazu die unten stehenden Schritte.

1. Benenne als erstes die beiden Fragments so um, dass ihre Namen verraten, welche Funktion sie haben. Wenn ein Projekt größer wird, ist es so einfacher zu verstehen, was sich wo befindet. 

   1. Klicke mit der rechten Maustaste auf das `FirstFragment` und wähle "Refactor" -> "Rename..." aus.
   2. Ersetze den Namen "FirstFragment" mit "PhraseInputFragment". 
   3. Klicke auf "Refactor".
   4. Klicke nun auf das Layout `fragment_first.xml` und klicke wieder auf "Refactor" -> "Rename..." um es in "fragment_phrase_input.xml" umzubenennen.
   5. Verwende die gleichen Schritte um das `SecondFragment` in "MapFragment" umzubenennen. Benenne auch das Layout "fragment_second.xml" in "fragment_map.xml" um.
   
2. Öffne die Datei `res/values/strings.xml` und lösche alle Strings außer die Strings `app_name`, `enter_a_phrase` und `go`.

3. Füge die folgenden zwei Strings hinzu.
```xml
<string name="phrase_input_fragment_label">PhraseInputFragment</string>
<string name="map_fragment_label">MapFragment</string>
```
4. Öffne die Datei `res/navigation/nav_graph.xml`.

5. Klicke auf das `FirstFragment` und ändere das "label" rechts in der Attributliste auf `@string/phrase_input_fragment_label`.

6. Ändere das "label" des `SecondFragment` auf `@string/map_fragment_label`.

7. Ändere auch die "id" der beiden Fragments auf "PhraseInputFragment" beziehungsweise "MapFragment".

8. Da du keine Navigation vom `MapFragment` zum `PhraseInputFragment` benötigst, kannst du den Pfeil vom `MapFragment` zum `PhraseInputFragment` löschen.

9. Klicke auf den Pfeil vom `PhraseInputFragment` zum `MapFragment` und ändere die "id" zu "action_PhraseInputFragment_to_MapFragment".

10. Klicke mit der rechten Maustaste auf das Package in dem die `MainActivity.java` enthalten ist und gehe auf `New` -> `Package`.

11. Nenne das neue Package "model". Lass dazu den Teil, der schon im Eingabefeld steht, einfach stehen und schreibe "model" dahinter. Drücke dann auf "Enter".

12. Ziehe nun die Klasse `Place.java` in das neu erstellte Package und klicke auf "Refactor".

## Aktuellen Status in der Info-TextView anzeigen

Derzeit wird die Info-`TextView` zum Anzeigen der Phrase verwendet. Die `TextView` soll nun den Text "Wird geladen..." anzeigen, während die Route geladen wird. Außerdem soll überprüft werden, ob überhaupt eine Route geladen wurde bevor die Karte angezeigt wird. Falls nicht soll ein Fehler angezeigt werden. Wenn du möchtest, ist das eine gute Aufgabe, die du allein probieren kannst. Lies also hier nicht weiter und versuche das Problem selbst zu lösen. Meine Lösung ist in den folgenden Schritten beschrieben.

1. Öffne die Datei `res/values/strings.xml` und füge die beiden folgenden Strings hinzu
```xml
<string name="loading">Wird geladen…</string>
<string name="load_route_error">Route konnte nicht geladen werden</string>
```
2. Öffne das `MapFragment.java`. 
3. Lösche die Zeile `textViewInfo.setText(phrase);` in der Methode `onViewCreated()`.
4. Gehe zur `loadRoute()` Methode und füge die Zeile `textViewInfo.setText(R.string.loading);` über der Zeile, in der du den StringRequest erstellt hast, ein.
5. Gehe zum `onResponse()` Callback und füge den folgenden Code direkt nach der Zeile, in der die Route geparst wird, ein.
```java
// Überprüft ob die Route geparst werden konnte und Elemente enthält
if (route == null || route.isEmpty()) {
	// Wenn nicht, wird ein Fehler angezeigt und die Karte wird nicht angezeigt
	textViewInfo.setText(getString(R.string.load_route_error));
	return;
}

// Zeigt den eingegebenen Satz in der Info TextView an, da die Route erfolgreich geladen werden konnte
textViewInfo.setText(phrase);
```

## Input Validierung

Wenn man im `PhraseInputFragment` auf "LOS" klickt, wird derzeit nicht überprüft, ob überhaupt ein Satz eingegeben wurde. Das Ziel in diesem Abschnitt ist es, einen Fehler anzuzeigen, wenn nichts eingegeben wurde. Auch bei dieser Aufgabe würde ich dir empfehlen, sie zuerst selbst zu probieren. Im Folgenden ist meine Lösung beschrieben.

1. Füge den String `<string name="please_enter_a_phrase">Bitte gib einen Satz ein</string>` zu den Strings hinzu.

2. Öffne das `PhraseInputFragment.java`.

3. Füge den folgenden Code unter der Zeile `String phrase = editText.getText().toString();` ein.
```java
// Überprüft ob ein Satz eingegeben wurde
if (StringUtils.isBlank(phrase)) {
	// Wenn nicht wird ein Fehler angezeigt und die Methode wird nicht weiter ausgeführt
	editText.setError(getString(R.string.please_enter_a_phrase));
	return;
}
```

## Asynchroner HTTP Request

Wie bereits [im ersten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app/) beschrieben, setzt die Methode `roadManager.getRoad(wayPoints);` einen HTTP Request am Main Thread ab. Das bedeutet, dass diese Methode den Main Thread, und somit die gesamte App, blockieren kann, falls es Probleme beim Request geben sollte. Deshalb waren auch die folgenden beiden Zeilen nötig.
```java
StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
StrictMode.setThreadPolicy(policy);
```

Diese Zeilen werden am Ende dieses Abschnitts nicht mehr nötig sein, da du den Request in einem anderen Thread absetzen und das Ergebnis mithilfe eines Callbacks zurückgeben wirst. Befolge die nächsten Schritte, um dieses Ziel zu erreichen.

1. Erstelle ein neues Package `util`.

2. Erstelle in diesem Package eine neue Klasse mit dem Namen `GetRoadRunnable` und ein neues Interface ("New" -> "Java Class" -> mit den Pfeiltasten "Interface auswählen") mit dem Namen `GetRoadResponseListener`.

3. Öffne den `GetRoadResponseListener` und füge die Methode `void onResponse(Road road);` ein. Diese Methode wird dann ausgeführt, sobald die Route/Straße geladen wurde. Das Interface sollte dann so aussehen.
```java 
public interface GetRoadResponseListener {
	// Wird aufgerufen, wenn die Route geladen wurde
	void onResponse(Road road);
}
```
4. Füge den folgenden Code in das `GetRoadRunnable` ein.
```java
public class GetRoadRunnable implements Runnable {

	// Die Activity, in der das Runnable erstellt wurde
	private Activity activity;
	// Die Wegpunkte, die enthalten sein sollen
	private ArrayList<GeoPoint> wayPoints;
	// Der ResponseListener, dessen "onResponse" aufgerufen wird, sobald eine Antwort verfügbar ist
	private GetRoadResponseListener responseListener;

	// Konstruktor - Erstellt eine neue Instanz des GetRoadRunnable
	public GetRoadRunnable(Activity activity, ArrayList<GeoPoint> wayPoints, GetRoadResponseListener responseListener) {
		this.activity = activity;
		this.wayPoints = wayPoints;
		this.responseListener = responseListener;
	}

	@Override
	public void run() {
		// Erstellt einen neuen RoadManager, der sich ums Erstellen der Route kümmert
		RoadManager roadManager = new OSRMRoadManager(activity);
		// Lädt eine Route, die alle GeoPoints beinhaltet, die oben übergeben wurden.
		final Road road = roadManager.getRoad(wayPoints);

		// Führt den Code innerhalb des run() {} Blocks am UI Thread aus. 
		// UI Elemente können nur auf diesem Thread manipuliert werden.
		activity.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				// Ruft die onResponse() des ResponseListeners auf
				responseListener.onResponse(road);
			}
		});
	}
}
```
5. Öffne das `MapFragment`.

6. Lösche die folgenden Zeilen.
```java
// Die folgenden zwei Zeilen werden benötigt um HTTP Requests am Main Thread abzusetzen.
// Mehr dazu und wie man es besser macht im Abschnitt "Bonus: Verbesserungen" der Anleitung.
StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
StrictMode.setThreadPolicy(policy);

// Erstellt einen neuen RoadManager, der sich ums Erstellen der Route kümmert
RoadManager roadManager = new OSRMRoadManager(getContext());
// Lädt eine Route, die alle GeoPoints beinhaltet, die oben zur Liste hinzugefügt wurden.
// Diese methode macht im Hintergrund einen HTTP Request am Main Thread.
Road road = roadManager.getRoad(geoPoints);
```
7. Lösche außerdem die Zeile `mapView.getController().zoomTo(6.0);` weiter oben in der Methode.

8. Füge den folgenden Code nach der `for`-Schleife ein.
```java
// Erstellt ein neues GetRoadRunnable
Runnable getRoadRunnable = new GetRoadRunnable(getActivity(), geoPoints, new GetRoadResponseListener() {
	@Override
	public void onResponse(Road road) {
		// Dieser Code wird ausgeführt, sobald eine Antwort verfügbar ist.
	}
});
        
// Erstellt einen neuen Thread mit dem oben erstellten Runnable und führt diesen aus.
new Thread(getRoadRunnable).start();
```
9. Kopiere alle Zeilen unter diesem Code (siehe Codeblock unten) in die `onResponse()` Methode.
```java
// Erstellt die Linie, die dann auf der Karte angezeigt wird.
Polyline roadOverlay = RoadManager.buildRoadOverlay(road, Color.BLACK, 6);
// Zeigt die Linie auf der Karte an.
mapView.getOverlays().add(roadOverlay);

// Erlaubt der Karte nicht weiter als auf dieses Level zu zoomen
mapView.setMaxZoomLevel(5.0);
// Zentriert die Karte über der Route
mapView.zoomToBoundingBox(roadOverlay.getBounds(), true, 150);
// Aktualisiert die MapView, damit die Overlays richtig angezeigt werden.
mapView.invalidate();
```

## Timeout und Serverless Function Warmup

Der Endpunkt, von dem die Route abgefragt wird, ist einer sogenannten "Serverless Function" gehosted. Das bedeutet, dass der Cloud-Anbieter, der für die Funktion verantwortlich ist, die benötigten Ressourcen dynamisch verwaltet. Werden keine Anfragen zum Endpunkt gemacht, wird der Code auch nicht ausgeführt. Deshalb muss das System erst "hochgefahren" werden bevor ein Request bearbeitet werden kann. Das bezeichnet man als "cold start". Wird kurz danach ein zweiter Request geschickt, sind die Ressourcen noch vorhanden und der Request kann deutlich schneller verarbeitet werden. Das ist der Grund, warum der erste Request um die Route abzufragen momentan noch oft fehlschlägt. 

Um das Problem zu lösen kannst du das sogenannte "Timeout" bei `Volley` (die Bibliothek mit der der Request abgesetzt wird) erhöhen. Das Timeout definiert wieviel Zeit vergehen darf, bevor man davon ausgeht, dass keine Antwort mehr kommt und der Request abgebrochen wird. Standardmäßig liegt das Timeout bei `Volley` bei 5 Sekunden. Füge den folgenden Code im `MapFragment.java` hinzu, bevor der `stringRequest` zur `requestQueue` hinzugefügt wird.
```java
// Erhöht das Timeout für den Request auf 15 Sekunden
stringRequest.setRetryPolicy(new DefaultRetryPolicy(
	15000, // Das Timeout in Millisekunden
	1, // Wie oft der Request wiederholt werden soll, wenn er fehlschlägt
	1 // Mit dieser Zahl wird das Timeout bei jedem neuen Versuch multipliziert
));
```
Um dem oben beschriebenen "cold start" vorzubeugen, kann man zum Beispiel schon beim Start der App einen leeren Request an die Serverless Function schicken um sie zu starten. Das ist wieder eine Aufgabe, den du allein probieren kannst, wenn du möchtest. Setze dazu im `PhraseInputFragment` einen Request zum Server ab, bei dem du das Ergebnis ignorierst. Im folgenden ist beschrieben, wie ich es gelöst habe.

1. Öffne das `PhraseInputFragment.java`.

2. Erstelle mit dem folgenden Code eine neue Methode.
```java
private void warmUpServerlessFunction() {
	// Erstellt eine Queue, die alle Requests ausführt, die zu ihr hinzugefügt werden
	RequestQueue requestQueue = Volley.newRequestQueue(getContext());
	// Die URL für den Request. Diese beinhaltet keine phrase, da die Function nur gestartet werden soll;
	String url = "https://api.map-reactions.ksick.dev/v0-1/route?phrase=wakeup";

	// Erstellt den Request, der später abgesetzt werden soll
	StringRequest blankRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
		@Override
		public void onResponse(String response) {
			// Das Ergebnis wird ignoriert
		}
	}, null);

	// Fügt den Request zur RequestQueue hinzu um ihn abzusetzen
	requestQueue.add(blankRequest);
}
```
3. Rufe die neue Methode ganz unten in der `onViewCreated()` auf.

## Mehrsprachige App

Wenn du während der Implementierung der App einen Text benötigt hast, hast du diesen immer in die Datei `res/values/strings.xml` eingetragen. Das ist dir wahrscheinlich etwas unpraktisch vorgekommen, aber jetzt wirst du den großen Vorteil dieser Methode sehen. Und zwar kannst du die App jetzt ganz einfach in mehrere Sprachen übersetzen. In diesem Schritt wirst du Englisch als Standardsprache festlegen und Deutsch als zweite Sprache hinzufügen. Das bedeutet, dass die Texte der App in Deutsch sein werden, wenn das Smartphone auf Deutsch eingestellt ist. In allen anderen Fällen werden die Texte in Englisch dargestellt. Befolge dazu die folgenden Schritte.

1. Öffne die Datei `res/values/strings.xml`.

2. Klicke mit der rechten Maustaste irgendwo in den leeren Bereich der Datei und klicke dann auf "Show Context Actions" -> "Open editor".

3. Klicke links oben im Editor auf die Weltkugel mit dem grünen Plus (im Bild unten in Orange gekennzeichnet).

4. Suche nach "German" und wähle "German (de)" aus.

5. Kopiere nun alle Texte der Spalte "Default Value" nach "German (de)".

6. Übersetze nun die Texte in der Spalte "Default Value" in Englisch. Du kannst diese einfach vom folgenden Screenshot abschreiben. 

{{< imgblock "img/android_studio_translations_editor.png" >}}{{< /imgblock >}}

Wenn du die Sprache deines Telefons nun auf Englisch (oder eine andere Sprache außer Deutsch) umstellst, ist auch die App in Englisch. Stellst du die Telefonsprache zurück auf Deutsch, sind die Texte in der App wieder auf Deutsch.

## Styling der App

Die App erfüllt nun alle Ansprüche an die Funktionalität, das Design lässt aber noch zu wünschen übrig. Dieses wirst du in diesem Abschnitt verbessern. Und zwar soll die App am Ende so wie im Bild unten aussehen. Wie du das erreichst, ist in den folgenden Abschnitten beschrieben.

{{< imgblock "img/map_reactions_app.png" >}}{{< /imgblock >}}

Beim betrachten der App, wird schnell klar, das Blau die Hauptfarbe ist. Wenn du die Datei `res/values/colors.xml` öffnest, siehst du, dass es dort drei Farben gibt. Und zwar einmal die `colorPrimary`, die Hauptfarbe der App. Zusätzlich gibt es noch die `colorPrimaryDark`, welche etwas dunkler als die `colorPrimary` sein sollte, diese wird zum Beispiel für die Hintergrundfarbe der Notification Bar verwendet. Zusätzlich gibt es noch die `colorAccent`, welche einen Kontrast zur `colorPrimary` darstellen soll und zum Beispiel für wichtige Elemente wie einen `Floating Action Button` verwendet wird. Passe die Farben mit den folgenden Schritten an.

1. In dieser App brauchst du die `colorAccent` nicht, deshalb kannst du sie löschen.

2.   Setze für die anderen beiden Farben die folgenden Werte.
```xml
<color name="colorPrimary">#0c27ba</color>
<color name="colorPrimaryDark">#071872</color>
```
3. Öffne die Datei `res/values/styles.xml` und lösche die Zeile `<item name="colorAccent">@color/colorAccent</item>`.

### Styling des `PhraseInputFragment`

#### Hintergrund

Der Hintergrund des `PhraseInputFragment` besteht aus zwei Teilen. Zum einen enthält er ein Bild mit einer Karte und zum anderen einen blauen Farbverlauf, der nach rechts unten hin immer heller und transparenter wird, damit man mehr vom Hintergrundbild sieht. Befolge diese Schritte um den Hintergrund so zu gestalten.

1. Das Hintergrundbild ist [hier](https://unsplash.com/photos/4Zk45jNyQS4) auf [Unsplash](https://unsplash.com/) verfügbar. Ich habe das Bild bereits heruntergeladen, zugeschnitten und an verschiedene Auflösungen angepasst. In Android kann man Bilder und Grafiken nämlich in verschiedenen Größen zur Verfügung stellen und das Smartphone wählt dann das richtige Bild aus. Lade dir die [zip Datei](https://coderdojo-map-reactions.s3.eu-central-1.amazonaws.com/phrase_input_background.zip) herunter und extrahiere sie in deinem Projektordner unter `main/res`.

2. Öffne das Layout `fragment_phrase_input.xml` und wähle im `Component Tree` das `ConstraintLayout` aus. 

3. Suche rechts in der Attributliste nach "background" und gib dort "@drawable/phrase_input_background" ein, um das soeben heruntergeladene Bild als Hintergrund zu verwenden.

4. Für den Verlauf, benötigst du eine weitere Farbe. Nämlich das halb transparente blau, das rechts unten im Verlauf zu sehen ist. Öffne deshalb die Datei `res/values/colors.xml` und füge die Farbe `<color name="colorPrimaryTransparent">#cd0c27ba</color>` hinzu.

5. Klicke, um die Datei für den Verlauf zu erstellen, mit der rechten Maustaste auf den `drawable` Ordner und klicke dann auf "New" -> "Drawable Resource File". Gib ihm den Namen "background_gradient" ein und klicke auf "OK".

6. Öffne die Datei und klicke rechts oben bei "Design" auf "Code".

7. Füge den folgenden Code ein. Dieser erstellt einen linearen Verlauf im -45° Winkel von der Farbe `colorPrimary` zur `colorPrimaryTransparent`. 
```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
	<item>
		<shape>
			<gradient
				android:angle="-45"
				android:startColor="@color/colorPrimaryDark"
				android:endColor="@color/colorPrimaryTransparent"
				android:type="linear" />
		</shape>
	</item>
</selector>
```
8. Wechsle wieder zum `fragment_phrase_input.xml` und suche in der `Palette` nach "View".

9. Ziehe die `View` Komponente, die im Suchergebnis erscheint, irgendwo auf das Layout.

10. Ziehe die Constraints der `View` wieder zu allen 4 Bildschirmrändern, um sie übern den ganzen Bildschirm gehen zu lassen. 

11. Suche in der Attributliste wieder nach "background" und setze den Wert "@drawable/background_gradient".

12. Ziehe die `View` im `Component Tree` über den `button_go`,  damit sie in den Hintergrund rückt.

#### UI Elemente

Jetzt ist der Hintergrund soweit fertig. Da das `EditText` zum Eingeben des Satzes aber sehr dunkel ist, sieht man es fast nicht. Also kümmerst du dich als Nächstes um das Styling des `EditTexts` und auch des `Buttons`, da er momentan noch nicht sehr schön aussieht. Außerdem ist in den folgenden Anweisungen beschrieben, wie du das Icon oben in der Mitte herunterladen und hinzufügen kannst.

1. In dem Bild oben siehst, du dass das `EditText` einen weißen Hintergrund mit runden Ecken hat. Wenn du ganz genau hinsiehst, erkennst du auch, dass es einen ganz dünnen blauen Rahmen hat. Erstelle ein neues `Drawable Resource File` namens "edittext_background". 

2. Füge den folgenden Code ein um ein weißes Rechteck mit runden Ecken und einem blauen Rahmen zu erstellen.
```xml
<?xml version="1.0" encoding="utf-8"?>
<?xml version="1.0" encoding="utf-8"?>
<!-- Definiert die Form, also ein Rechteck -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
	android:shape="rectangle">
	<!-- Definiert die Farbe, in diesem Fall weiß -->
	<solid android:color="@android:color/white" />
	<!-- Definiert den Rahmen in der Farbe colorPrimaryDark und mit der Stärke 1dp -->
	<stroke
		android:width="1dp"
		android:color="@color/colorPrimaryDark" />
	<!-- Legt den Radius der Ecken fest -->
	<corners
		android:bottomLeftRadius="32dp"
		android:bottomRightRadius="32dp"
		android:topLeftRadius="32dp"
		android:topRightRadius="32dp" />
</shape>
```
3. Der Hintergrund des `Button`s soll genau gleich aussehen, nur mit umgekehrten Farben. Erstelle deshalb gleich ein zweites `Drawable Resource File` mit dem Namen `button_background` und dem folgenden Inhalt.
```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Definiert die Form, also ein Rechteck -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
	android:shape="rectangle">
	<!-- Definiert die Farbe, in diesem Fall colorPrimaryDark -->
	<solid android:color="@color/colorPrimaryDark" />
	<!-- Definiert den Rahmen in der Farbe Weiß und mit der Stärke 1dp -->
	<stroke
		android:width="1dp"
		android:color="@android:color/white" />
	<!-- Legt den Radius der Ecken fest -->
	<corners
		android:bottomLeftRadius="32dp"
		android:bottomRightRadius="32dp"
		android:topLeftRadius="32dp"
		android:topRightRadius="32dp" />
</shape>
```
4. Öffne nun das `fragment_phrase_input` und wähle das `EditText` aus. 

5. Suche in der Attributliste nach "background" und lege "@drawable/edittext_background" als Hintergrund fest.

6. Suche nun in der Attributliste nach "padding" und vergib für die Felder "paddingStart" und "paddingStart" einen Wert von "24dp" und für "paddingTop" und "paddingBottom" "12dp".

7. Wähle nun den `Button` aus und gib ihm den Hintergrund "@drawable/button_background".

8. Lege zusätzlich "@android:color/white" als "textColor" fest.

9. Ziehe den unteren Constraint zum unteren Bildschirmrand und lösche den oberen Constraint, um den Button rechts unten auszurichten.

10. Lege im `Constraint Widget` unten einen Rahmen von 24 fest.

11. Lade dir [diesen Icon](https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41) von [flaticon](https://ww.flaticon.com) als "PNG" herunter und kopiere dir den "Attribution Link", in diesem Fall `<div>Icons made by <a href="https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`, in eine Text-Datei. 

	> *ACHTUNG: Solltest du die App veröffentlichen, musst du unbedingt die Information, von wo die Icons sind, in den Credits der App und in der Beschreibung der App im PlayStore anzeigen!* 

12. Gehe auf die Seite https://romannurik.github.io/AndroidAssetStudio/ und klicke auf "Generic Icon Generator".

13. Klicke links bei "Source" auf "Image" und lade den soeben heruntergeladenen Icon hoch.

14. Wähle die folgenden Werte aus und klicke dann rechts oben auf "Download".
	- Trim whitespace: Trim
	- Padding: 0%
	- Asset size: 128dp
	- Asset padding: 0dp
	- Color: Weiß
	- Name: "ic_map"

15. Extrahiere die zip-Datei, die du heruntergeladen hast, im `main` Ordner deines Projektes.

16. Öffne das Layout `fragment_phrase_input.xml` und ziehe die `ImageView` von der `Palette` in dein Layout.

17. Wähle das drawable `ic_map` aus und klicke auf "OK".

18. Zentriere die `ImageView` in dem Teil des Bildschirms, der sich über dem `EditText` befindet. Ziehe dazu den linken, oberen  und rechten Constraint der `ImageView` zum jeweiligen Bildschirmrand und den unteren Constraint zur Oberkante des `EditText`.

Nun hast du das `PhraseInputFragment` (wie ich finde) schon um einiges verschönert. Eine kleine Verbesserung ist allerdings noch offen. Dir wird schon aufgefallen sein, dass der `Button` immer verdeckt wird, wenn sich die Tastatur öffnet. Gehe deshalb zum `AndroidManifest.xml` und füge in dem `<activity>` Tag der `MainActivity` das folgende Attribut hinzu.
```xml
android:windowSoftInputMode="stateHidden|adjustResize"
```

#### Schriftart

Auch die Schrift ist ein wichtiger Punkt, um das Design einer App zu verbessern. Ich habe für die App eine Kombination aus den Schriften [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) und [Cabin](https://fonts.google.com/specimen/Cabin) verwendet. Natürlich kannst du auch jede andere Schriftart mit den folgenden Schritten verwenden.

1. Öffne das Layout `fragment_phrase_input.xml` und klicke auf das `EditText` um es auszuwählen.

2. Suche in der Attributliste nach "font".

3. Klicke auf den Pfeil rechts neben "fontFamily" und klicke ganz unten auf "More Fonts..."

4. Suche nach "Cabin", wähle diese Schrift mit einem Klick aus und klicke auf "OK".

5. Wähle nun den `Button` aus, suche wieder nach "fontFamily" und klicke auf "More Fonts...".

6. Suche nun nach "Roboto" und wähle rechts bei "Preview" die Schrift namens "Condensed Bold" aus. Klicke dann wieder auf "OK". 

### Styling des `MapFragment`

Nun hast du das Styling des `PhraseInputFragment` abgeschlossen und es ist an der Zeit, das `MapFragment` zu verschönern. 

#### Info-Box

Die erste Verbesserung, die du hier machen kannst, ist  die Info-`TextView` durch eine ganze Info-Box zu ersetzen, die mehr Informationen zur Route, aber auch einen "Neu starten" -`Button` enthält. Befolge dazu die unten stehenden Schritte.

1. Öffne das Layout `fragment_map.xml`.

2. Suche in der `Palette` nach "CardView" und positioniere die `CardView` ganz unten im `Component Tree`.

3. Suche in der  `Palette` nach "Constraint" und ziehe das `ConstraintLayout` im `Component Tree` in die `CardView` hinein.

4. Ziehe nun die `TextView` im `Component Tree` in das `ConstraintLayout` hinein.

5. Da der untere Constraint der `MapView` am oberen Punkt der `TextView` angeheftet war, muss dieser nun neu gesetzt werden. Wähle die `MapView` dazu aus und ziehe den Punkt, der am oberen Bildschirmrand erscheint, nach ganz unten, um die `MapView` über den gesamten Bildschirm zu erstrecken.

6. Wähle nun die `CardView` im `Component Tree` aus und ziehe die seitlichen und den unteren Constraint zu den jeweiligen Bildschirmrändern, um sie unten am Screen auszurichten.

7. Lege einen Rahmen von "16" auf diesen 3 Seiten fest.

8. Setze den "@drawable/background_gradient" als Hintergrund ("background").

9. Suche nach dem Attribut "cornerRadius" und setze es auf "32dp".

10. Ziehe einen `Button` und eine `TextView` aus der `Palette` in das `ConstraintLayout` in der `CardView` und gib ihnen die ids "button_try_again" und "textview_route". Lösche zusätzlich bei der neuen `TextView` den Wert im Feld "text". 

11. Nun müssen diese 3 `View`s im `ConstraintLayout` ausgerichtet werden. Der `Button` soll ganz unten sein, ziehe deshalb seine beiden seitlichen und den unterent Constraint zu den zugehörigen Rändern der `CardView`. 

12. Darüber soll die `textview_info` angezeigt werden. Wähle sie im `Component Tree` aus und ziehe die seitlichen Constraints zu den Rändern der `CardView` und den unteren Constraints zur Oberkante des `Button`s.

13. Ziehe die seitlichen und den oberen Constraint der `textview_route` ebenfalls zu den Rändern der `CardView`. Ziehe den unteren Constraint zur Oberkante der `textview_info`.

14. Lösche das Padding der `textview_info`.

15. Setze die folgenden Rahmen im `Constraint Widget`.
	- `button_try_again`:
		- Unten: 16
		- Links: 16
		- Rechts: 16
	- `textview_info`:
		- Unten: 16
		- Links: 16
		- Rechts: 16
	- `textview_route`:
		- Oben: 16
		- Links: 16
		- Rechts: 16

16. Setze die Breite ("layout_width") der `textview_route` auf "0dp (match constraint)".

17. Die `textview_info` soll im Vordergund stehen. Gib ihr deshalb die folgenden Attribute.
	- textColor: @android:color/white
	- fontFamily: @font/roboto_condensed_bold
	- textSize: 20sp
	- textAlignment: center

18. Gib der `textview_route` die folgenden Attribute.
	- textColor: @android:color/white
	- fontFamily: @font/cabin
	- textSize: 16sp
	- textAlignment: center

19. Lade dir [diesen Icon](https://www.flaticon.com/free-icon/reply_481675?term=back&page=1&position=43) als PNG herunter, kopiere und speichere den "Attribution Link" und lade das Icon dann wieder in den [Generic Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-generic.html) hoch.

20. Wähle die folgenden Werte aus und klicke dann rechts oben auf "Download".
	- Trim whitespace: Trim
	- Padding: 0%
	- Asset size: 24dp
	- Asset padding: 0dp
	- Color: Weiß
	- Name: "ic_try_again"

21. Extrahiere die zip-Datei, die du heruntergeladen hast, im `main` Ordner deines Projektes.

22. Erstelle einen neuen String in der Datei `res/values/strings.xml` mit der id "try_again" und dem Text "Neu starten" in Deutsch und "Try again" in Englisch.

22. Gib dem Button die folgenden Attribute.
 	- textColor: @android:color/white
	- fontFamily: @font/cabin
	- textSize: 16sp
	- background: @android:color/transparent
	- drawableTop: @drawable/ic_try_again
	- text: @string/try_again
	- textAllCaps: false

Nun ist das Layout für die Info-Box fertig. Die `textview_route` muss allerdings noch mit Text befüllt werden und der `button_try_again` reagiert noch nicht auf Klicks. Diese beiden Dinge kannst du mit den folgenden Schritten lösen.

1. Öffne das `MapFragment.java`.

2. Erstelle die folgenden 2 Member-Variablen unter `private TextView textViewInfo;`.
```java
private TextView textViewRoute;
private Button buttonTryAgain;
```

3. Binde die UI Komponenten an die Variablen. Füge dazu die folgenden Zeilen zur `onViewCreated()` Methode hinzu.
```java
textViewRoute = view.findViewById(R.id.textview_route);
buttonTryAgain = view.findViewById(R.id.button_try_again);
```
4. In der `textview_route` sollen die Orte der Route im Format "[Ort 1, Ort 2, Ort 3, ...]" angezeigt werden. Erstelle dazu eine neue Methode `showRouteSummary()` mit dem folgenden Inhalt.
```java
private void showRouteSummary() {
	// Zeigt den eingegebenen Satz in der Info-TextView an
	// Durch das String.format(...) werden vor und nach dem Satz Anführungszeichen (") angezeigt
	textViewInfo.setText(String.format("\"%s\"", phrase));

	// Erstellt einen neuen StringBuilder um die Route im Format [Ort 1, Ort 2, ...] zusammenzusetzen
	StringBuilder routeStringBuilder = new StringBuilder("[");

	// Iteriert über alle Orte in der Route
	for (Place place : route) {
		// Überprüft ob die Länge des StringBuilders größer als 1 (also mindestens 2) ist
		if (routeStringBuilder.length() > 1) {
			// Wenn ja, werde ein Beistrich und ein Leerzeichen vor dem nächsten Ort hinzugefügt
			routeStringBuilder.append(", ");
            }
		// Hängt den Namen des Ortes an den StringBuilder an
		routeStringBuilder.append(place.getName());
	}

	// Hängt die schließende Klammer an den StringBuilder an
	routeStringBuilder.append("]");
	// Setzt den String des StringBuilders als Text in die TextView, die die Route anzeigt
	textViewRoute.setText(routeStringBuilder.toString());
}
```
5. Rufe die neu erstellte Methode im `onResponse()` Block der `loadRoute()` Methode auf. Ersetze dazu die Zeile `textViewInfo.setText(phrase);` mit `showRouteSummary();`.

6. Wenn der `button_try_again` geklickt wird, soll die App einen Schritt zurück zum `PhraseInputFragment` navigieren. Füge dazu den folgenden Code in die `onViewCreated()` Methode unter die Zeile `buttonTryAgain = view.findViewById(R.id.button_try_again);` ein.
```java
// Setzt einen Klick Listener auf den Button, um über Klicks informiert zu werden
buttonTryAgain.setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		// Dieser code wird ausgeführt, wenn der Benutzer auf den Button klickt
		// Simuliert einen Klick auf die Zurück-Taste
		getActivity().onBackPressed();
	}
});
```

#### Karte
Als letzten Schritt Kannst du noch das Design der Marker und der Route auf der Karte verbessern. Öffne dazu das `MapFragment.java` und befolge die folgenden Schritte. 

1. Suche die Zeile `Polyline roadOverlay = RoadManager.buildRoadOverlay(road, Color.BLACK, 6);` und ersetze `Color.BLACK` mit `getResources().getColor(R.color.colorPrimary);` um die Route in der Hauptfarbe der App darzustellen. Setze außerdem die Breite der Linie (also den nächsten Parameter, derzeit  `6`) auf `8`, um die Route etwas breiter darzustellen.

2. Nun sieht man besonders gut, dass die Route über den Markern gezeichnet wird. Befolge die unten stehenden Schritte, um die Marker über der Route zu zeichnen.

	1. Füge die folgende Zeile unter der Zeile `ArrayList<GeoPoint> geoPoints = new ArrayList<>();` und über der `for`-Schleife ein.

```java
// Erstellt eine Liste mit SpeechBalloonOverlay Objekten. Diese wird später mit den Markern befüllt.
final List<SpeechBalloonOverlay> markers = new ArrayList<>();
```
	2. Ersetze die Zeile `mapView.getOverlays().add(textOverlay);` mit der folgenden Zeile.
```java
// Fügt das Overlay zur Liste der Marker hinzu
markers.add(textOverlay);
```
	3. Füge den folgenden Code unter der Zeile ` mapView.zoomToBoundingBox(roadOverlay.getBounds(), true, 150);` ein, um die Marker erst nach der Route/Straße zu zeichnen.
```java
// Zeigt die Marker auf der Karte an
mapView.getOverlays().addAll(markers);
```
3. Ändere nun die Hintergrundfarbe der Marker, indem du in der  `for`-Schleife in der Zeile `backgroundPaint.setColor(Color.BLACK)` den Parameter `Color.BLACK` auf `getResources().getColor(R.color.colorPrimary)` änderst.

4. Ändere mit der folgenden Zeile die Schriftart des Textes.
```java
textPaint.setTypeface(ResourcesCompat.getFont(getContext(), R.font.cabin));
```

Gratuliere! Nun hast du auch diese Anleitung abgeschlossen und deine App sollte nun in etwa so aussehen. Du kannst natürlich noch selbst versuchen die App weiterzuentwickeln. Dabei kannst du neue Funktionen hinzufügen, die Farben der App ändern, sie in verschiedene Sprachen übersetzen, oder was dir sonst noch so einfällt. Deiner Kreativität sind hier keine Grenzen gesetzt ;-).

{{< imgblock "img/map_reactions_app.png" >}}{{< /imgblock >}}

## "Attribution Links" für die Icons und das Hintergrundbild

Solltest du die App veröffentlichen, musst du unbedingt die Information, von wo die Icons und das Hintergrundbild sind, in den Credits der App und in der Beschreibung der App im PlayStore anzeigen! Unten sind noch einmal die "Attribution Links", also die Links, die angezeigt werden müssen, aufgelistet.

<span>Photo by <a href="https://unsplash.com/@timowielink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Timo Wielink</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

<div>Icons made by <a href="https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/free-icon/reply_481675?term=back&page=1&position=43" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Ressourcen

[Der vollständige Code für diese App](https://github.com/KatharinaSick/coderdojo-anleitung-map-reactions-app)