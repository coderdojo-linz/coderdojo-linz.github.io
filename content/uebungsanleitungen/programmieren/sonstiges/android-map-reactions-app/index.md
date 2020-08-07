---
title: "Android Map Reactions App"
description: "In dieser Übung programmierst du eine Android App in der man einen Satz eingeben kann, der dann als Route auf einer Karte angezeigt wird."
level: 3
img: "map_reactions_app.png"
---

# TODO: image sizes 

# Android Map Reactions App

In dieser Übung programmierst du eine Android App in Java. In dieser App kann man einen Satz eingeben, der dann (phonetisch auf Orte übersetzt) als Route auf einer Karte angezeigt wird. Die Idee dazu basiert auf diesem [Comic Strip](https://xkcd.com/2260/). Während der Entwicklung der App wirst du lernen, wie man eine einfache Android App inklusive Navigation zwischen Screens schreibt. Außerdem wirst du über sogenannte REST Calls mit einem Server über das Internet kommunizieren, um den eingegebenen Satz in eine Route zu verwandeln. Zu guter letzt wird diese Route dann mithilfe von [Open Street Map](https://www.openstreetmap.org/) auf einer Karte angezeigt.

{{< imgblock "https://imgs.xkcd.com/comics/reaction_maps.png" "XKCD's Reaction Maps comic strip" >}}{{< /imgblock >}}

## Voraussetzungen

- Etwas Programmiererfahrung
- Ein Smartphone mit Android 5.0 oder höher ([So findest du die Android Version deines Smartphones](https://support.google.com/android/answer/7680439?hl=de)). Alternativ kannst du auch einen [Emulator](https://developer.android.com/studio/run/emulator) verwenden
- Ein Kabel um dein Smartphone mit dem Computer zu verbinden (falls du dein Smartphone verwendest)
- [Android Studio](https://developer.android.com/studio/install)

## App erstellen und ausführen

Befolge diese Schritte um die App zu erstellen:

1. Starte Android Studio.

2. Erstelle mit `File` -> `New` -> `New Project` ein neues Projekt.

3. Wähle eine `Basic Activity` als `Project Template` aus.

4. Gib die folgenden Dinge ein
	- `Name`: Der Name deiner App - ich nenne meine zum Beispiel `Map Reactions`.
	- `Package name`: Ein eindeutiger Name um deine App im Google Play Store zu identifizieren. Für die Anleitung ist es ganz egal welchen Namen du verwendest.
	- `Save location`: Der Ordner in dem du das Projekt speichern möchtest.
	- `Language`: Native Android Apps kann man in Java oder Kotlin programmieren. In dieser Anleitung werde ich Java verwenden, du kannst aber gerne auch Kotlin ausprobieren.
	- `Minimum SDK`: Die niedrigste Android Version die von der App unterstützt wird. Wähle hier `API 21: Android 5.0 (Lollipop)` aus.

5. Klicke auf `Finish`.

Um die App auf deinem Handy auszuführen, musst du zuerst die Entwickler Optionen und USB-Debugging aktivieren. Das geht mit den folgenden Schritten.

1. Öffne die Einstellungen auf deinem Android Smartphone.

2. Klick auf `Telefoninfo`.

3. Klick 7 mal auf `Build-Nummer` um die Entwickler Optionen zu aktivieren.

4. Gehe zurück zu den Einstellungen und klick auf `Entwickler Optionen`.

5. Aktiviere `USB-Debugging`.

Falls du es noch nicht getan hast, solltest du jetzt dein Smartphone mithilfe eines USB-Kabels mit deinem Computer verbinden. Dann sollte ein Dialog mit dem Titel `USB-Debugging zulassen` am Smartphone erscheinen. Bestätige diesen mit `Erlauben`.

Jetzt kannst du wieder zurück zu Android Studio wechseln und die App ausführen. Wähle dazu dein Smartphone aus (falls es nicht schon automatisch ausgewählt wurde) und klicke dann auf den grünen `Play` Button neben dem Dropdown. Jetzt sollte die App auf deinem Smartphone ausgeführt werden. 

{{< imgblock "img/android_studio_run.png" >}}{{< /imgblock >}}

### Was beinhaltet diese App?

Im oben beschriebenen Schritt hat uns Android Studio eine App mit einer `Basic Activity` generiert. Sehen wir uns mal an, was diese beinhaltet.

- `manifests`
Enthält die `AndroidManifest.xml` Datei.
	- `AndroidManifest.xml`
	Diese Datei muss in jeder Android App vorhanden sein. Sie enthält Informationen über die App, wie zum Beispiel Name, Activities (sind im nächsten Punkt beschrieben) oder Permissions (Rechte, die die App anfragen muss). Jede Activity der App muss hier beschrieben sein. Interessant ist auch der `intent-filter` in der `MainActivity`. Dieser ist dafür verantwortlich, dass das Betriebssytem weiss, welche Activity beim Starten der App angezeigt werden soll.
- `java`
  Enthält alle Java Dateien und Tests.
  - `MainActivity.java`
	Eine Activity ist repräsentiert im Prinzip eine Bildschirmseite (einen Screen) in einer App. Sie kann Elemente wie Buttons, Text- & Eingabefelder, aber auch Fragments  (siehe nächster Punkt) beinhalten. Beim Erstellen einer App generiert Android automatisch die `MainActivity.java`, welche auch gleich ins `AndroidManifest.xml` eingetragen wird.
  - `FirstFragment.java` & `SecondFragment.java` 
	 Ein Fragment ist ein wiederverwendbares Element einer Activity. So kann man beispielweise auf einem Tablet zwei Fragments nebeneinander anzeigen, während man auf einem Smartphone immer nur eines anzeigt. Das `FirstFragment` ist in diesem Fall das erste Fragment, das man sieht wenn man die App öffnet. Klickt man auf den `NEXT` Button wird das `SecondFragment` angezeigt.
- `res`
  Enthält alle Resourcen die keinen Programmcode enthalten wie zum Beispiel Bilder, Texte oder Layouts.
  - `drawable`
    Hier können verschiedene Arten von Grafiken abgelegt werden.
  - `layout`
    In diesem Ordner werden die Layout Dateien abgelegt, die bestimmen wie die Benutzeroberfläche der App aussieht. Mit `setContentView(R.layout.layout_name);` in der `onCreate()` Methode einer Activity beziehungsweise mit `return inflater.inflate(R.layout.layout_name, container, false);` in der `onCreateView()` Methode eines Fragments kann ein Layout gesetzt werden.
  - `menu`
    Hier werden Dateien gespeichert, die definieren wie die Menüs aussehen und welche Elemente sie beinhalten.
  - `mipmap`
    Dieser Ordner beinhaltet das Launcher Icon (App Icon).
  - `navigation`
    Enthält den Navigation graph, welcher alle Informationen über die Navigation in der App beschreibt .
  - `values` 
    Hier werden XML Dateien die einfache Werte enthalten abgelegt. Das sind zum Beispiel Farben oder Texte.

Ganz unten sieht man noch den Abschnitt `Gradle Scripts`. Dieser beinhaltet alles rund um das Build Management-Tool Gradle. Dieses kümmert sich um die Kompilierung des Quellcodes und die Resourcen der App und generiert anschließend eine APK (Android Application Package) Datei, die dann auf einem Smartphone installiert werden kann. Hier sind vor allem die zwei `build.gradle` Dateien wichtig. Die `build.gradle` Datei auf Projektebene (erkennt man am `(Project: Anleitung)` hinter dem Dateinamen) gibt die Build-Anweisungen für das gesamte Projekt vor, ist im Rahmen dieser Anleitung aber nicht so wichtig. Für uns ist die `build.gradle (Module: app)`  viel wichtiger. Sie enthält die Build-Anweisungen und die Bibliotheken (libraries), welche in der App eingebunden sind.  

## Alles muss raus

Jetzt ist es an der Zeit, alles zu entfernen was wir nicht mehr brauchen. Später soll man, wenn man die App öffnet, zuerst ein Eingabefeld sehen, in dem man einen Satz eingeben kann. Gibt man diesen ein und klickt auf "Los" soll eine Karte mit der zum Satz passenden Route angezeigt werden.

{{< imgblock "img/basic_activity.png" >}}{{< /imgblock >}}

Wenn du dir die App ansiehst, wirst du merken dass die Toolbar (ganz oben am Bildschirm) und der Floating Action Button (der türkise Button rechts unten) immer da sind, egal welcher Inhalt sonst noch angezeigt wird. Daraus kannst du schließen, dass diese 2 Komponenten Teile der `MainActivity` sind, während die Buttons ("NEXT" & "PREVIOUS") und das Textfeld ("Hello first fragment") im `FirstFragment` und im `SecondFragment` enthalten sind. 

Mit den folgenden Schritten kannst du die Toolbar und den Floating Action Button entfernen.

1. Öffne die `MainActivity.java`.

2. Lösche die Methoden `onCreateOptionsMenu(Menu menu)` und `onOptionsItemSelected(MenuItem item)`. Diese verwalten das Menü mit den drei Punkten rechts oben, das benötigen wir aber nicht.

3. Um alle Teile des Menüs zu löschen, lösche auch den Ordner `res/menu`.

4. Lösche den folgenden Code. Dieser setzt die Toolbar als Action Bar in der App und konfiguriert den Floating Action Button. Da wir beide nicht brauchen, können wir das einfach löschen. Somit haben wir die Logik der Komponenten entfernt. 

```java
Toolbar toolbar = findViewById(R.id.toolbar);
setSupportActionBar(toolbar);

FloatingActionButton fab = findViewById(R.id.fab);
fab.setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
			.setAction("Action", null).show();
	}
});
```

5. Öffne nun die Datei `res/layout/activity_main.xml` und wähle ganz rechts oben `Design` aus (im Bild unten in Orange gekennzeichnet).

6. Klicke im `Component Tree` (im Bild unten in Grün gekennzeichnet) mit der rechten Maustaste auf das `AppBarLayout` (das enthält die Toolbar) und klicke auf `Delete`.

7. Wiederhole das gleiche für den `fab`, den Floating Action Button.

{{< imgblock "img/android_studio_layout_editor.png" >}}{{< /imgblock >}}

Jetzt hast du alle unnötigen Komponenten aus der MainActivity entfernt und kannst mit den folgenden Schritten in den Fragments weiter machen.

1. Öffne das Layout `fragment_first.xml`.

2. Lösche die `textview_first`, der `button_first` bleibt aber. Das wird später der "Los" Button.

3. Öffne das Layout `fragment_second.xml` und lösche den `button_second`, hier behalten wir die `textview_second`.

4. Öffne das `SecondFragment.java` und lösche den unten stehenden Code.
```java
view.findViewById(R.id.button_second).setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {
		NavHostFragment.findNavController(SecondFragment.this)
			.navigate(R.id.action_SecondFragment_to_FirstFragment);
	}
});
```

## Einen Satz eingeben

Als erstes passt du das `FirstFragment` so an, dass der Benutzer einen Satz eingeben und auf "Los" klicken kann. Wenn er auf "Los" klickt soll sich das 2. Fragment öffnen und der eingegebene Satz an dieses übergeben werden.

### Layout erstellen

1. Öffne die Datei `res/values/strings.xml`. Hier werden alle Texte der App abgelegt.

2. Füge die folgenden Strings hinzu.
```xml
<string name="enter_a_phrase">Gib einen Satz ein</string>
<string name="go">Los</string>
```

3. Öffne nun das Layout `fragment_first.xml` und wähle den Button mit einem Klick aus.

4. Suche in der List der Attribute auf der rechten Seite nach `id`. Gib dem Button die id `button_go`.

5. Wähle im Dialog der erscheint "Don't ask again during this session" und "Yes" aus.

6. Suche in der Attributliste nach `text` und schreib `@string/go` hinein. Somit verlinkst du den String den du vorher erstellt hast mit dem Button.

7. Klicke nun einmal auf den weißen Hintergrund deines Layouts, um die Auswahl des Buttons aufzuheben.

8. Über dem `Component Tree`, den du vorher schon verwendet hast, findest du die `Palette`. Mithilfe der `Palette` kannst du neue Komponenten hinzufügen. Nutze die Lupe um nach `EditText` zu suchen.

9. Wähle `Plain Text` aus und ziehe es irgendwo in die weiße Fläche deines Layouts.

10. Gib dem `EditText` die id `edittext_phrase` und lösche den Text "Name", der automatisch gesetzt wurde.

11. Nutze die Lupe rechts von `Attributes` um nach `hint` zu suchen. Leg `@string/enter_a_phrase` als `hint` fest.

12. Wenn du das eben erstellte `EditText` auswählst, siehst du 4 Punkte an den Rändern. Es befindet sich auch jeder Seite einer. Ziehe den linken Punkt an den ganz linken Rand der weißen Hintergrundfläche. Dann wiederhole das für alle Punkte, zieh also den rechten Punkt zum rechten Rand, den oberen zum oberen Rand und den unteren Punkt zum unteren Rand der Fläche. Pass auf, dass der untere Punkt wirklich am Hintergrund andockt und nicht am Button.

13. Jetzt hast du sogenannte `Constraints` gesetzt, um das `EditText` in der Mitte des Bildschirms auszurichten.

14. Nun soll das `EditText` die ganze Breite des Bildschirms einnehmen. Gehe dazu wieder rechts zur Attributliste und wähle `0dp (match constraint)` als `layout_width` aus. 

15. Damit es nicht ganz so am Rand "festklebt", fügst du jetzt links und rechts einen Rand hinzu. Diesen kannst du im `Constraint Widget` unter der Attributliste setzen (siehe Bild). Leg hier links und rechts einen Rahmen von jeweils 16 fest.
{{< imgblock "img/constraint_widget.png" >}}{{< /imgblock >}}

16. Jetzt musst du nur noch den `Button` positionieren. Dieser soll rechts unterhalb des `EditText` sein. Wähle ihn dazu mit einem Klick aus und ziehe den Punkt an der oberen Kante zur Unterkante des `EditText`

17. Um ihn nun direkt unter dem `EditText` und an der rechten Bildschirmkante zu positionieren, lösche den linken und den unteren Constraint.

18. Lege im Constraint Widget die folgenden Rahmen fest: 
   - Rechts: 16
   - Oben: 32

Das wars auch schon mit dem Layout zum eingeben eines Satzes. Dein Layout sollte nun so aussehen

{{< imgblock "img/layout_phrase_input.png" >}}{{< /imgblock >}}

### Input einlesen und dem nächsten Fragment übergeben

Da das Layout nun fertig ist, ist der nächste Schritt den Input des Benutzers im `FirstFragment.java` einzulesen und dem nächsten Fragment zu übergeben, wenn "LOS" gedrückt wird. Das bedeutet du musst einen `OnClickListener` hinzufügen dessen `onClick(View view)` Methode immer ausgeführt wird, der Benutzer auf "LOS" klickt. In dieser Methode liest du zuerst den Text aus dem `EditText` ein, bevor du zum nächsten Fragment navigierst. 

Ein Teil des Codes den du dazu benötigst ist schon vorhanden. Und zwar gibt es schon einen `OnClickListener` der ausgelöst wird, wenn der Button geklickt wird. Auch die Navigation zum `SecondFragment.java` funktioniert schon. Deshalb sind nur noch die folgenden Schritte nötig.

1. Den `Navigation Graph` vorbereiten, damit du den eingegebenen Satz als Argument übergeben kannst.
   1. Öffne zuerst die Datei `res/navigation/nav_graph.xml`. 
   2. Klicke in der linken Spalte unter `GRAPH` auf `SecondFragment`.
   3. Klicke rechts in der Attributliste auf das `+` rechts von `Arguments`.
   4. Gib "phrase" als Name und "String" als Type ein. Alles andere kannst du leer lassen.
   5. Klicke auf "Add"
   
2. Den Satz einlesen und an das `SecondFragment` übergeben, wenn die `onClick()` Methode aufgerufen wird.
  1. Öffne wieder das `FirstFragment.java`
  2. Ersetze den Inhalt der `onViewCreated()` Methode mit dem folgenden Code.

```java
super.onViewCreated(view, savedInstanceState);

// Bindet das EditText, das du im Layout erstellt hast, an diese Variable
final EditText editText = view.findViewById(R.id.edittext_phrase);

view.findViewById(R.id.button_go).setOnClickListener(new View.OnClickListener() {
	@Override
	public void onClick(View view) {

		// Liest den Text aus dem EditText ein und speichert ihn in die Variable phrase
		String phrase = editText.getText().toString();

		// Erstellt ein Bundle das die Argumente enthält, die ans SecondFragment übergeben werden
		Bundle arguments = new Bundle();
		// Fügt den Text, der oben eingelesen wurde, zum Bundle mit den Argumenten hinzu
		arguments.putString("phrase", phrase);

		// Navigiert zum 2. Fragment und übergibt die oben erstellten Argumente
		NavHostFragment
			.findNavController(FirstFragment.this)
			.navigate(R.id.action_FirstFragment_to_SecondFragment, arguments);
	}
});
```

## Route herunterladen und parsen

Nachdem du das erste Fragment fertig gestellt hast, ist es an der Zeit, die Route im `SecondFragment` zu laden und anschließend auch in einer Liste zu speichern, die du später gut verarbeiten kannst. In diesem Schritt wirst du den Satz, den das `FirstFragment` ans `SecondFragment` übergibt auslesen, die dazugehörige Route laden und diese anschließend parsen und in einer einfachen `TextView` anzeigen.

### Einfaches Layout zum Testen erstellen

In diesem Schritt benötigst du nur eine `TextView` in der du die Route anzeigst. Diese ist im Layout `fragment_second.xml` bereits vorhanden, passe sie aber mit den folgenden Schritten an. Die einzelnen Schritte sind nicht mehr so genau erklärt, da du das alles auch im `fragment_first.xml` schon gemacht hast. Solltest du also nicht weiter kommen, sieh dir einfach die Schritte oben nochmal genauer an. 

1. Gib der `TextView` die id `textview_info`.

2. Ziehe alle 4 Constraints zu den Rändern um die `TextView` zu zentrieren.


### Satz auslesen

In diesem Schritt liest du den Satz aus, denn du im `FirstFragment` übergeben hast und zeigst ihn in der `TextView`, die du soeben angepasst hast, an. Befolge dazu diese Schritte.

1. Öffne das `SecondFragment.java`.

2. Erstelle die folgenden zwei Member-Variablen direkt unter `public class SecondFragment extends Fragment {`.
```java
private TextView textViewInfo;
private String phrase;
```
3. Ersetze die `onViewCreated()` Methode mit dem folgendne Code.
```java
public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
	super.onViewCreated(view, savedInstanceState);

        // Bindet die TextView, die du im Layout erstellt hast, an diese Variable
	textViewInfo = view.findViewById(R.id.textview_info);

	// Holt die "phrase" aus dem Bundle mit den Argumenten
	phrase = getArguments().getString("phrase");
	// Zeigt die phrase in der TextView an
	textViewInfo.setText(phrase);
}
```

Wenn du die App jetzt ausführst, kannst du im ersten Fragment einen Satz eingeben und siehst diesen dann, nachdem du auf "LOS" geklickt hast, im zweiten Fragment.

### Route herunterladen

Um die Route zu laden, verwendest du einen Service, der im Internet angeboten wird. Dort kannst du einen Satz hinschicken und bekommst eine Liste mit Orten, die jeweils aus Name und Position (latitude und longitude) bestehen, zurück. Dieser Service ist unter https://api.map-reactions.ksick.dev/v0-1 verfügbar und so definiert:

```shell
# REQUEST
GET /route
parameter:
    - phrase: String

# ANTWORT
- 200 OK: Gibt eine Liste von Orten zurück, die sich so ähnlich anhören, wie die übergebene Phrase
- 400 Bad Request: Die übergebene Phrase ist ungültig oder nicht vorhanden
- 404 Not Found: Es konnte keine Route für die übergebene Phrase gefunden werden
```

Aus dieser Definition kannst du die folgenden Dinge lesen:

- Du musst einen `HTTP GET request` zu `/route` von diesem Endpunkt absetzen.
- Du musst den eingegebenen Satz in dem parameter `phrase` übergeben. 
- Du bekommst einen Statuscode zurück, der `200` ist wenn alles gut gegangen ist und die Antwort die Route enthält. 
- Wenn etwas nicht passt oder ein Fehler passiert bekommst du einen anderen Statuscode als `200` in der Antwort.

Mit diesen Informationen kannst du den Request absetzen. Da du den Request ins Internet schickst, muss der Benutzer der App dies schon vor dem Download sehen können. Deshalb musst du die Berechtiung dafür im `AndroidManifest.xml` eintragen. Füge dazu die folgenden Zeile über dem `<application` tag ein.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

Um den HTTP Request abzusetzen, kannst du [Volley](https://developer.android.com/training/volley) verwenden. Das ist eine HTTP Library (Bibliothek), die von Google entwickelt wurde, um die Kommunikation mit dem Internet zu vereinfachen. Mit den folgenden Schritten kannst du die Bibliothek zu deinem Projekt hinzufügen und den HTTP Request absetzen.

1. Öffne die Datei `build.gradle (Module: app)`.

2. Füge die `dependency` für Volley  im Block `dependencies` ein.
```xml
dependencies {
	// andere dependencies, die bereits vorhanden sind
	implementation 'com.android.volley:volley:1.1.1'
}
```
3. Klicke rechts oben in der Leiste auf "Sync Now".

4.   Öffne nun das `SecondFragment.java`. 

5. Füge die folgende Methode unter der Methode `onViewCreated()` ein.
```java
public void loadRoute() {
	// Erstellt eine Queue, die alle Requests ausführt, die zu ihr hinzugefügt werden
	RequestQueue requestQueue = Volley.newRequestQueue(getContext());

	// Die URL für den Request. Diese wird aus den folgenden Teilen zusammengesetzt:
	//   - Die Base URL https://api.map-reactions.ksick.dev/v0-1
	//   - Der Endpunkt: /route
	//   - Der Paremeter phrase: ?phrase=<der eingegebene satz>
	// Der Satz, der vom Benutzer eingegeben wurde, muss kodiert werden, damit die gesamte URL gültig ist
	// Sollte dabei etwas schief laufen, wird eine Exception geworfen, und ein Fehler angezeigt
	String url = null;
	try {
		url = "https://api.map-reactions.ksick.dev/v0-1/route?phrase=" + URLEncoder.encode(phrase, "UTF-8");
	} catch (UnsupportedEncodingException e) {
		// Zeigt einen Fehler in der Info-TextView an und führe diese Methode nicht weiter aus
		textViewInfo.setText(e.getMessage());
		return;
	}

	// Erstellt den Request, der später abgesetzt werden soll
	StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
		new Response.Listener<String>() {
			@Override
			public void onResponse(String response) {
				// Der Code in dieser Methode wird ausgeführt, wenn der Request erfolgreich war.
			}
		},
		new Response.ErrorListener() {
			@Override
			public void onErrorResponse(VolleyError error) {
				// Der Code in dieser Methode wird ausgeführt, wenn ein Fehler passiert ist.
			}
		});

	// Fügt den Request zur RequestQueue hinzu um ihn abzusetzen
	requestQueue.add(stringRequest);
}
```

6. Mit dem oben stehenden Code, hast du den Request abgesetzt, das Ergebnis wird aber noch ignoriert. Um diesen Abschnitt abzuschließen, genügt es das Ergebnis in der Info-`TextView` anzuzeigen. Füge dazu ganz einfach die Zeilen `textViewInfo.setText(response);` und `textViewInfo.setText(error.getMessage());` in den `onResponse()` beziehungsweise in den `onErrorResponse` Block ein. 
7. Als letztes muss die soeben erstellte `loadRoute()` Methode noch ausgeführt werden. Rufe sie daher in der letzten Zeile der `onViewCreated()` Methode mit `loadRoute()` auf. 

Nun hast du es geschafft, die Route aus dem Internet herunterzuladen und das Ergebnis in einer `TextView` anzuzeigen. Wenn du die App ausführst und einen Satz eingibst, sollte das Ergebnis in etwa so aussehen (natürlich mit einem anderen Text):

>  *INFO: Es kann sein, dass der erste Request sehr lange dauert oder sogar fehl schlägt. Geh einfach nochmal zurück zum Start und probier es nochmal. Die Lösung für dieses Problem ist im Abschnitt [Bonus: Verbesserungen](#lambda-warmup) beschrieben.*

{{< imgblock "img/load_route_result.jpg" >}}{{< /imgblock >}}

### Route parsen

Die Route wird als sogenanntes JSON zurückgegeben. Dieses JSON wandelst du in diesem Schritt in etwas um, mit dem du auch gut arbeiten kannst, zwar eine Liste von Objekten. Diese Umwandlung von JSON zu einem Objekt oder umgekehrt nennt man "parsen". Dabei kannst du dir wieder von einer Bibliothek helfen lassen. Nämlich von [Gson](https://github.com/google/gson). Dazu brauchst du die dependency `implementation 'com.google.code.gson:gson:2.8.6'`, füge diese in der Datei `build.gradle (Module: app)` hinzu (das funktioniert genauso wie oben bei Volley). 

Nun definierst du zu welchem Objekt Gson das JSON parsen soll. Wenn du dir das JSON ansiehst, das der Server zurückgibt, siehst du, dass die einzelnen Orte jeweils aus "name", "latitude" und "longitude" bestehen. 

```json
[
	{
		"name": "Hy",
		"latitude": 36.57534,
		"longitude": -91.45792
	},
	{
		"name": "Wye",
		"latitude": 38.44936,
		"longitude": -122.73138
	},
	{
		"name": "Getz",
		"latitude": 35.20472,
		"longitude": -114.02023
	}
]
```

Befolge deshalb die folgenden Schritte um die Klasse `Place.Java` zu erstellen. 

1. Klicke mit der rechten Maustaste auf das Package in dem die `MainActivity.java` enthalten ist und gehe auf `New` -> `Java Class`.
{{< imgblock "img/new_java_class.png" >}}{{< /imgblock >}}

2. Gib "Place" als Name ein und drück auf "Enter". 

3. Initialisiere die Klasse mit den folgenden Variablen. 
```java
public class Place {
	private String name;
	private Double latitude;
	private Double longitude;
}
```
4. Um die Getter und Setter automatisch zu generieren, klicke mit der rechten Maustaste auf `Place` und wähle dann `Generate` -> `Getter and Setter` aus. 

5. Wähle mit der Tastenkombination `Strg` + `A` alle Variablen aus und klick auf "OK".

6. Wiederhole das gleiche aber wähle `toString()` statt `Getter and Setter` aus um die `toString()` Methode zu generieren.

Somit hast du das Java Objekt erstellt, das verwendet wird um das JSON zu parsen. Jetzt verwendest du Gson um das JSON zu einer Liste von `Place` Objekten zu parsen. Öffne dazu wieder das `SecondFragment.java` und gehe zum `onResponse()` Listener. Ersetze dort die Zeile `textViewInfo.setText(response);` mit dem folgenden Code.
```java
// Parsed das JSON in der Variable response zu einer Liste von Place Objekten
List<Place> route = new Gson().fromJson(response, new TypeToken<List<Place>>(){}.getType());
// Zeigt den ersten Place in der Liste in der Info-TextView an
textViewInfo.setText(route.get(0).toString());
```

Die App sollte nun so aussehen. 
{{< imgblock "img/parse_route_result.jpg" >}}{{< /imgblock >}}

## Karte anzeigen

Nachdem du die Route im letzten Abschnitt erfolgreich heruntergeladen und geparsed hast, geht es in diesem Abschnitt darum die Karte inklusive Marker und Route auch tatsächlich anzuzeigen. Um die Karte anzuzeigen, verwendest du [osmdroid](https://github.com/osmdroid/osmdroid). Füge dazu die dependency `'org.osmdroid:osmdroid-android:6.1.8'` zur `build.gradle (Module: app)` hinzu.

### Layout anpassen

### Karte anzeigen

### Marker hinzufügen

### Route hinzufügen

## Bonus: Verbesserungen

### naming der files

### navgraph anpassen

### Input validation

### Network on main thread

### UI

### Lambda warmup

## Ideen zum weiterentwickeln

Englische Strings
