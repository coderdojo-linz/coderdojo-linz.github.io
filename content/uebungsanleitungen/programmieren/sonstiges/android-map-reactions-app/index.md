---
title: "Android Map Reactions App"
description: "In dieser Übung programmierst du eine Android App in der man einen Satz eingeben kann, der dann als Route auf einer Karte angezeigt wird."
level: 3
img: "map_reactions_app.png"
---

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
	- `Language`: Native Android Apps kann man in Java oder [Kotlin](https://kotlinlang.org/) programmieren. In dieser Anleitung werde ich Java verwenden, du kannst aber gerne auch Kotlin ausprobieren.
	- `Minimum SDK`: Die niedrigste Android Version die von der App unterstützt wird. Wähle hier `API 21: Android 5.0 (Lollipop)` aus.

5. Klicke auf `Finish`.

Um die App auf deinem Handy auszuführen, musst du zuerst die Entwickler Optionen und USB-Debugging aktivieren. Das geht mit den folgenden Schritten.

1. Öffne die Einstellungen auf deinem Android Smartphone.

2. Klicke auf `Telefoninfo`.

3. Klicke 7 mal auf `Build-Nummer` um die Entwickler Optionen zu aktivieren.

4. Gehe zurück zu den Einstellungen und klicke auf `Entwickler Optionen`.

5. Aktiviere `USB-Debugging`.

Falls du es noch nicht getan hast, solltest du dein Smartphone jetzt mithilfe eines USB-Kabels mit deinem Computer verbinden. Dann sollte ein Dialog mit dem Titel `USB-Debugging zulassen` auf deinem Smartphone erscheinen. Bestätige diesen mit `Erlauben`.

Jetzt kannst du wieder zurück zu Android Studio wechseln und die App ausführen. Wähle dazu dein Smartphone aus (falls es nicht schon automatisch ausgewählt wurde) und klicke dann auf den grünen `Play` Button neben dem Dropdown. Jetzt sollte die App auf deinem Smartphone ausgeführt werden. 

{{< imgblock "img/android_studio_run.png" >}}{{< /imgblock >}}

### Was beinhaltet diese App?

Im oben beschriebenen Schritt hat dir Android Studio eine App mit einer `Basic Activity` generiert. Sehen wir uns mal an, was diese beinhaltet.

- `manifests`
Enthält die `AndroidManifest.xml` Datei.
	- `AndroidManifest.xml`
	Diese Datei muss in jeder Android App vorhanden sein. Sie enthält Informationen über die App, wie zum Beispiel Name, Activities (sind im nächsten Punkt beschrieben) oder Permissions (Rechte, die die App anfragen muss). Jede Activity der App muss hier beschrieben sein. Interessant ist auch der `intent-filter` in der `MainActivity`. Dieser ist dafür verantwortlich, dass das Betriebssytem weiß, welche Activity beim Starten der App angezeigt werden soll.
- `java`
  Enthält alle Java Dateien und Tests.
  - `MainActivity.java`
	Eine Activity repräsentiert im Prinzip eine Bildschirmseite (einen Screen) in einer App. Sie kann Elemente wie Buttons, Text- & Eingabefelder, aber auch Fragments  (siehe nächster Punkt) beinhalten. Beim Erstellen einer App generiert Android automatisch die `MainActivity.java`, welche auch gleich ins `AndroidManifest.xml` eingetragen wird.
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
    Enthält den Navigation graph, welcher alle Informationen über die Navigation in der App enthält .
  - `values` 
    Hier werden XML Dateien, die einfache Werte enthalten, abgelegt. Das sind zum Beispiel Farben oder Texte.

Ganz unten sieht man noch den Abschnitt `Gradle Scripts`. Dieser beinhaltet alles rund um das Build Management-Tool Gradle. Dieses kümmert sich um die Kompilierung des Quellcodes und die Ressourcen der App und generiert anschließend eine APK (Android Application Package) Datei, die dann auf einem Smartphone installiert werden kann. Hier sind vor allem die zwei `build.gradle` Dateien wichtig. Die `build.gradle` Datei auf Projektebene (erkennt man am `(Project: <DEIN_PROJEKT_NAME>)` hinter dem Dateinamen) gibt die Build-Anweisungen für das gesamte Projekt vor, ist im Rahmen dieser Anleitung aber nicht so wichtig. Für uns ist die `build.gradle (Module: app)`  viel wichtiger. Sie enthält die Build-Anweisungen und die Bibliotheken (libraries), welche in der App eingebunden sind.  

## Alles muss raus

Jetzt ist es an der Zeit, alles zu entfernen was du nicht mehr brauchst. Später soll man, wenn man die App öffnet, zuerst ein Eingabefeld sehen, in dem man einen Satz eingeben kann. Gibt man einen Satz ein und klickt auf "Los" soll eine Karte mit der zum Satz passenden Route angezeigt werden.

{{< imgblock "img/basic_activity.png" >}}{{< /imgblock >}}

Wenn du dir die App ansiehst, wirst du merken dass die `Toolbar` (ganz oben am Bildschirm) und der `Floating Action Button` (der türkise Button rechts unten) immer da sind, egal welcher Inhalt sonst noch angezeigt wird. Daraus kannst du schließen, dass diese 2 Komponenten Teile der `MainActivity` sind, während die Buttons ("NEXT" & "PREVIOUS") und das Textfeld ("Hello first fragment") im `FirstFragment` und im `SecondFragment` enthalten sind. 

Mit den folgenden Schritten kannst du die Toolbar und den Floating Action Button entfernen.

1. Öffne die `MainActivity.java`.

2. Lösche die Methoden `onCreateOptionsMenu(Menu menu)` und `onOptionsItemSelected(MenuItem item)`. Diese verwalten das Menü mit den drei Punkten rechts oben, das benötigst du aber nicht.

3. Um alle Teile des Menüs zu löschen, lösche auch den Ordner `res/menu`.

4. Lösche den folgenden Code, welcher die Toolbar als Action Bar in der App setzt und den Floating Action Button konfiguriert. 

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

5. Im vorigen Schritt hast du die Logik der beiden Komponenten entfernt. Lösche sie nun auch aus dem Layout. Öffne dazu die Datei `res/layout/activity_main.xml` und wähle ganz rechts oben `Design` aus (im Bild unten in Orange gekennzeichnet).

6. Klicke im `Component Tree` (im Bild unten in Grün gekennzeichnet) mit der rechten Maustaste auf das `AppBarLayout` (das enthält die Toolbar) und klicke auf `Delete`.

7. Wiederhole das gleiche für den `fab`, den Floating Action Button.

{{< imgblock "img/android_studio_layout_editor.png" >}}{{< /imgblock >}}

Jetzt hast du alle unnötigen Komponenten aus der MainActivity entfernt und kannst mit den folgenden Schritten in den Fragments weiter machen.

1. Öffne das Layout `fragment_first.xml`.

2. Lösche die `textview_first`, aber nicht den `button_first`. Das wird später der "Los" Button.

3. Öffne das Layout `fragment_second.xml` und lösche den `button_second`, hier behältst du die `textview_second`.

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

Nachdem du im vorigen Schritt alle unnötigen Komponenten entfernt hast, ist es nun an der Zeit mit der eigentlichen Entwicklung der App zu beginnen. Der erste Schritt dazu ist das `FirstFragment` so anzupassen, dass der Benutzer einen Satz eingeben und auf "Los" klicken kann. Wenn er auf "Los" klickt soll sich das 2. Fragment öffnen und der eingegebene Satz an dieses übergeben werden.

### Layout erstellen

1. Öffne die Datei `res/values/strings.xml`. Hier werden alle Texte der App abgelegt.

2. Füge die folgenden Strings hinzu.
```xml
<string name="enter_a_phrase">Gib einen Satz ein</string>
<string name="go">Los</string>
```

3. Öffne nun das Layout `fragment_first.xml` und wähle den Button mit einem Klick aus.
4. Suche in der List der Attribute auf der rechten Seite nach `id` und gib dem Button die id `button_go`.
5. Wähle im Dialog der erscheint "Don't ask again during this session" und "Yes" aus.
6. Suche in der Attributliste nach "text" und schreib `@string/go` hinein. Somit verlinkst du den String den du vorher erstellt hast mit dem Text des Buttons.
7. Klicke nun einmal auf den weißen Hintergrund deines Layouts, um die Auswahl des Buttons aufzuheben.
8. Über dem `Component Tree`, den du vorher schon verwendet hast, findest du die `Palette`. Mithilfe der `Palette` kannst du neue Komponenten hinzufügen. Nutze die Lupe um nach `EditText` zu suchen.
9. Wähle `Plain Text` aus und ziehe es irgendwo in die weiße Fläche deines Layouts.
10. Gib dem `EditText` die id `edittext_phrase` und lösche den Text "Name", der automatisch gesetzt wurde.
11. Nutze die Lupe rechts von "Attributes" um nach "hint" zu suchen. Leg `@string/enter_a_phrase` als `hint` fest.
12. Wenn du das eben erstellte `EditText` auswählst, siehst du 4 Punkte an den Rändern. Es befindet sich an jeder Seite einer. Ziehe den linken Punkt an den ganz linken Rand der weißen Hintergrundfläche. Dann wiederhole das für alle Punkte, zieh also den rechten Punkt zum rechten Rand, den oberen zum oberen Rand und den unteren Punkt zum unteren Rand der Fläche. Pass auf, dass der untere Punkt wirklich am Hintergrund andockt und nicht am Button.
13. Jetzt hast du sogenannte `Constraints` gesetzt, um das `EditText` in der Mitte des Bildschirms auszurichten.
14. Nun soll das `EditText` die ganze Breite des Bildschirms einnehmen. Gehe dazu wieder rechts zur Attributliste und wähle `0dp (match constraint)` als `layout_width` aus. 
15. Damit es nicht ganz so am Rand "festklebt", fügst du jetzt links und rechts einen Rand hinzu. Diesen kannst du im `Constraint Widget` unter der Attributliste setzen (siehe Bild). Leg hier links und rechts einen Rahmen von jeweils 16 fest.
{{< imgblock "img/constraint_widget.png" >}}{{< /imgblock >}}
16. Jetzt musst du nur noch den `Button` positionieren. Dieser soll rechts unterhalb des `EditText` sein. Wähle ihn dazu mit einem Klick aus und ziehe den Punkt an der oberen Kante zur Unterkante des `EditText`
17. Um den `Button` nun direkt unter dem `EditText` und an der rechten Bildschirmkante zu positionieren, lösche den linken und den unteren Constraint indem du sie mit einem Klick auswählst und dann auf der Tastatur auf `Entf` klickst.
18. Lege im Constraint Widget die folgenden Rahmen fest: 
   - Rechts: 16
   - Oben: 32

Das wars auch schon mit dem Layout zum eingeben eines Satzes. Dein Layout sollte nun so aussehen

{{< imgblock "img/layout_phrase_input.png" >}}{{< /imgblock >}}

### Input einlesen und an das nächste Fragment übergeben

Da das Layout nun fertig ist, ist der nächste Schritt den Input des Benutzers im `FirstFragment.java` einzulesen und an das nächste Fragment zu übergeben, wenn auf "LOS" gedrückt wird. Das bedeutet du musst einen `OnClickListener` hinzufügen dessen `onClick(View view)` Methode immer ausgeführt wird, wenn der Benutzer auf "LOS" klickt. In dieser Methode liest du zuerst den Text aus dem `EditText` ein, bevor du zum nächsten Fragment navigierst. 

Ein Teil des Codes, den du dazu benötigst, ist schon vorhanden. Und zwar gibt es schon einen `OnClickListener` der ausgelöst wird, wenn der Button geklickt wird. Auch die Navigation zum `SecondFragment.java` funktioniert schon. Deshalb sind nur noch die folgenden Schritte nötig.

1. Bereite den `Navigation Graph` vor, damit du den eingegebenen Satz als Argument übergeben kannst.
   1. Öffne zuerst die Datei `res/navigation/nav_graph.xml`. 
   2. Klicke in der linken Spalte unter `GRAPH` auf `SecondFragment`.
   3. Klicke rechts in der Attributliste auf das `+` rechts von `Arguments`.
   4. Gib "phrase" als Name und "String" als Type ein. Alles andere kannst du leer lassen.
   5. Klicke auf "Add".
   
2. Lies den Satz ein und übergib ihn an das `SecondFragment`, wenn die `onClick()` Methode aufgerufen wird.
  1. Öffne  das `FirstFragment.java`.
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

In diesem Schritt benötigst du nur eine `TextView`, in der du die Route anzeigst. Diese ist im Layout `fragment_second.xml` bereits vorhanden, passe sie aber mit den folgenden Schritten an. Die einzelnen Schritte sind nicht mehr so genau erklärt, da du das alles auch im `fragment_first.xml` schon gemacht hast. Solltest du also nicht weiter kommen, sieh dir einfach die Schritte oben nochmal genauer an. 

1. Gib der `TextView` die id `textview_info`.

2. Ziehe alle 4 Constraints zu den Rändern des Bildschirms um die `TextView` zu zentrieren.

### Satz auslesen

In diesem Schritt liest du den Satz, den du im `FirstFragment` übergeben hast, aus und zeigst ihn in der `TextView`, die du soeben angepasst hast, an. Befolge dazu diese Schritte.

1. Öffne das `SecondFragment.java`.

2. Erstelle die folgenden zwei Member-Variablen direkt unter `public class SecondFragment extends Fragment {`.
```java
private TextView textViewInfo;
private String phrase;
```
3. Ersetze die `onViewCreated()` Methode mit dem folgenden Code.
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

Um die Route zu laden, verwendest du einen Service der im Internet angeboten wird. Dort kannst du einen Satz hinschicken und bekommst eine Liste mit Orten, die jeweils aus Name und Position (Längen- und Breitengrad) bestehen, zurück. Dieser Service ist unter https://api.map-reactions.ksick.dev/v0-1 verfügbar und so definiert:

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

- Du musst einen `HTTP GET request` zum Endpunkt `/route` dieser URL absetzen.
- Du musst den eingegebenen Satz in dem Parameter `phrase` übergeben. 
- Du bekommst einen Statuscode zurück, der `200` ist wenn alles gut gegangen ist und die Route in der Antwort enthalten ist.
- Wenn etwas nicht passt oder ein Fehler passiert ist bekommst du einen anderen Statuscode als `200` als Antwort zurück.

Mit diesen Informationen kannst du den Request absetzen. Da du den Request ins Internet schickst, muss der Benutzer der App dies schon vor dem Download sehen können. Deshalb musst du die Berechtiung dafür im `AndroidManifest.xml` eintragen. Füge dazu die folgenden Zeile über dem `<application` tag ein.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

Um den HTTP Request abzusetzen, kannst du [Volley](https://developer.android.com/training/volley) verwenden. Das ist eine HTTP Library (Bibliothek), die von Google entwickelt wurde, um die Kommunikation mit dem Internet zu vereinfachen. Mit den folgenden Schritten kannst du die Bibliothek zu deinem Projekt hinzufügen und den HTTP Request absetzen.

1. Öffne die Datei `build.gradle (Module: app)`.

2. Füge die `dependency` für Volley  im Block `dependencies` ein.
```xml
dependencies {
	...
	
	implementation 'com.android.volley:volley:1.1.1'
}
```
3. Klicke rechts oben in der Leiste auf "Sync Now". Damit werden alle Dependencies geladen.

4. Öffne nun das `SecondFragment.java`. 

5. Füge die folgende Methode unter der Methode `onViewCreated()` ein.
```java
private void loadRoute() {
	// Erstellt eine Queue, die alle Requests ausführt, die zu ihr hinzugefügt werden
	RequestQueue requestQueue = Volley.newRequestQueue(getContext());

	// Die URL für den Request. Diese wird aus den folgenden Teilen zusammengesetzt:
	//   - Die URL https://api.map-reactions.ksick.dev/v0-1
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

6. Mit dem oben stehenden Code, hast du den Request abgesetzt, das Ergebnis wird aber noch ignoriert. Um diesen Abschnitt abzuschließen, genügt es das Ergebnis in der Info-`TextView` anzuzeigen. Füge dazu ganz einfach die Zeilen `textViewInfo.setText(response);` und `textViewInfo.setText(error.toString());` in den `onResponse()` beziehungsweise in den `onErrorResponse` Block ein. 
7. Als letztes muss die soeben erstellte `loadRoute()` Methode noch ausgeführt werden. Rufe sie daher in der letzten Zeile der `onViewCreated()` Methode mit `loadRoute()` auf. 

Nun hast du es geschafft, die Route aus dem Internet herunterzuladen und das Ergebnis in einer `TextView` anzuzeigen. Wenn du die App ausführst und einen Satz eingibst, sollte das Ergebnis in etwa so aussehen (natürlich mit einem anderen Text):

>  *INFO: Es kann sein, dass der erste Request sehr lange dauert oder sogar fehl schlägt. Geh einfach nochmal zurück zum Start und probier es nochmal. Die Lösung für dieses Problem ist im Abschnitt [Bonus: Verbesserungen](#timeout-und-serverless-function-warmup) beschrieben.*

{{< imgblock "img/load_route_result.jpg" >}}{{< /imgblock >}}

### Route parsen

Die Route wird als sogenanntes [JSON](https://www.json.org/json-de.html) zurückgegeben. Dieses JSON wandelst du in diesem Schritt in etwas um, mit dem du auch gut arbeiten kannst, zwar eine Liste von Objekten. Diese Umwandlung von JSON zu einem Objekt oder umgekehrt nennt man "parsen". Dabei kannst du dir wieder von einer Bibliothek helfen lassen. Nämlich von [Gson](https://github.com/google/gson). Dazu brauchst du die dependency `implementation 'com.google.code.gson:gson:2.8.6'`, füge diese in der Datei `build.gradle (Module: app)` hinzu (das funktioniert genauso wie oben bei Volley). 

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

Befolge deshalb die folgenden Schritte um die Klasse `Place.java` zu erstellen. 

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

5. Wähle mit der Tastenkombination `Strg` + `A` alle Variablen aus und klicke auf "OK".

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

Nachdem du die Route im letzten Abschnitt erfolgreich heruntergeladen und geparst hast, geht es in diesem Abschnitt darum die Karte inklusive Marker und Route anzuzeigen. Um die Karte anzuzeigen, kannst du [osmdroid](https://github.com/osmdroid/osmdroid) verwenden. Füge dazu die dependency `'org.osmdroid:osmdroid-android:6.1.8'` zur `build.gradle (Module: app)` hinzu.

### Layout anpassen

Die `MapView` von osmdroid kann leider nicht im Design Editor ins Layout eingefügt werden. Das ist aber kein großes Problem, da Android Studio alles was im Design Editor eingegeben wird in eine XML Datei übersetzt. Deshalb kannst du auch einfach die XML Datei bearbeiten, um die `MapView` hinzuzufügen. Das ist in den folgenden Schritten beschrieben. 

1. Öffne das Layout `fragment_second.xml`.

2. Wechsle ganz rechts oben im Editor von "Design" zu "Split". 

3. Benutze den folgenden Code um die `MapView` über der bereits vorhandenen `TextView` einzufügen. Dabei wird Android Studio zuerst einen Fehler anzeigen, den kannst du aber ignorieren. Dieses Problem wirst du gleich lösen.
```xml
<org.osmdroid.views.MapView
	android:layout_width="0dp"
	android:layout_height="0dp" />
```

4. Wechsle rechts oben wieder zu "Design".

5. Wähle die `textview_info` im `Component Tree` aus. 

6. Lösche den oberen Constraint um die `TextView` am unteren Bildschirmrand auszurichten. 

7. Gib der TextView die Breite (`layout_width`) `0dp (match constraint)` um sie über die ganze Breite anzuzeigen.

8. Such in der Attributliste nach "padding" und vergib ein `padding` von `16dp`.

9. Wähle die `MapView` im `Component Tree` aus. 

10. Du siehst nun ganz links oben den rechten und unteren Constraint Punkt der `MapView`. Ziehe den rechten zum rechten Bildschirmrand.

11. Jetzt ist die `MapView` durch den Constraint nach ganz rechts oben gerutscht, ziehe nun den linken Punkt zum linken Bildschirmrand und den unteren zum oberen Punkt der `TextView`.

12. Nun siehst du auch den oberen Punkt der `MapView`. Ziehe diesen ganz nach oben, damit die `MapView` den gesamten Bildschirm über der `TextView` einnimmt.

13. Gib der `MapView` die id `mapview`.

### Karte anzeigen

osmdroid speichert Teile der Karte auf dem Telefon des Benutzers. Deshalb musst du, bevor du die Karte laden kannst, die Berechtigung dafür einholen. Du kennst das sicher von Instagram, Facebook, WhatsApp oder anderen Apps, dass du der App erlauben musst auf deine Kamera zuzugreifen, bevor du ein Foto machen kannst. Genau das gleiche muss jetzt Speicherzugriff gemacht werden, damit die App auf den Speicher zugreifen darf. Glücklicherweise bietet Android hier gute Unterstützung an und du kannst die Berechtigung mit den folgenden Schritten abfragen.

1.  Öffne das `AndroidManifest.xml`.

2. Füge die folgende Zeile unter `<uses-permission android:name="android.permission.INTERNET" />` ein.
```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

3. Öffne das `SecondFragment.java`.

4. Erstelle eine neue Methode, die wie folgt definiert ist und fürs Erste leer bleibt. 
```java
private void showMap() {}
```

5. Nun brauchst du eine Methode, die überprüft ob der Benutzer der App schon erlaubt hat auf den Speicher zuzugreifen. Verwende dazu diese Methode.
```java
private boolean isStoragePermissionGranted() {
	// Holt den Status der Berechtigung, also ob sie zugelassen (granted) oder abgelehnt (denied) wurde.
	int permissionStatus = ContextCompat.checkSelfPermission(getContext(), Manifest.permission.WRITE_EXTERNAL_STORAGE);
	// Gibt true zurück, wenn die Berechtigung zugelassen wurde. Sonst wird false zurückgegeben.
	return permissionStatus == PackageManager.PERMISSION_GRANTED;
}
```

6. Definiere als Vorbereitung eine neue Konstante. Füge dazu die folgende Zeile ganz oben in deiner Klasse unter `public class SecondFragment extends Fragment {`  ein.
```java
private final int PERMISSION_REQUEST_CODE = 123;
```

7. Gehe nun zum `onResponse()` Block in der `loadRoute()` Methode. Das ist die Stelle wo die neue `showMap()` Methode zum Anzeigen der Karte aufgerufen werden soll. Ersetze deshalb die Zeile `textViewInfo.setText(route.get(0).toString());` mit diesem Code.
```java 
// Überprüft ob der Benutzer der App erlaubt hat auf den Speicher zuzugreifen
if (isStoragePermissionGranted()) {
	// Wenn Ja wird showMap() aufgerufen
	showMap();
} else {
	// Wenn Nein wird ein Dialog angezeigt, in dem der Benutzer um die Berechtigung gefragt wird
	requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, PERMISSION_REQUEST_CODE);
}
```

8. Die Antwort auf `requestPermissions()` kommt asynchron über einen Callback. Das bedeutet, dass sobald der Benutzer im Dialog eine Antwort auswählt, die Methode `onRequestPermissionsResult()` ausgeführt wird. Diese gibt es bereits in der Klasse `Fragment`, von der das  `SecondFragment` abgeleitet ist. Deshalb musst du diese überschreiben. Füge dazu die folgende Methode zum `SecondFragment` hinzu.
```java
@Override
public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
	// Führt die Implementierung dieser Methode in der Fragment.java Klasse aus
	super.onRequestPermissionsResult(requestCode, permissions, grantResults);
   
	// Überprüft ob der request code mit dem übereinstimmt, der vorher abgesetzt wurde. 
	// Falls er nicht übereinstimmt, ist es nicht das Ergebnis auf deinen Request und du musst nichts machen.
	if (requestCode == PERMISSION_REQUEST_CODE) {
		// Überprüft ob der Benutzer der App erlaubt hat auf den Speicher zuzugreifen
		if (isStoragePermissionGranted()) {
			// Wenn Ja wird showMap() aufgerufen
			showMap();	
		} else {
			// Wenn Nein wird die App geschlossen
			getActivity().finish();
		}
	}
}
```

Wenn du die App jetzt ausführst, einen Satz eingibst und wartest bis der HTTP Request erfolgreich war, solltest du nun so einen Dialog sehen. Klickst du auf "Ablehnen" wird die App einfach geschlossen und beim nächsten mal wenn du zu diesem Punkt kommst, wird der Dialog wieder angezeigt. Klickst du auf "Zulassen" passiert derweil noch nichts, weil deine `showMap()` Methode noch leer ist. Wenn du nun die App schließen würdest und diese Schritte wiederholen würdest, würde der Dialog nicht mehr erscheinen, weil Android sich merkt, dass du dieser App erlaubt hast auf den Speicher zuzugreifen.

>  *ACHTUNG: Es kann sein, dass der erste Request sehr lange dauert oder sogar fehl schlägt. Geh einfach nochmal zurück zum Start und probier es nochmal. Die Lösung für dieses Problem ist im Abschnitt [Bonus: Verbesserungen](#timeout-und-serverless-function-warmup) beschrieben.*

{{< imgblock "img/request_permission.jpg" >}}{{< /imgblock >}}

Befolge die nächsten Schritte um eine Karte anzuzeigen.

1. Öffne das `SecondFragment.java`.

2. Erstelle die folgende Member-Variable.
```java
private MapView mapView;
```

2. Gehe zur `onViewCreated()` Methode und binde darin die `MapView` mit dem folgenden Code an die soeben erstellte Variable.
```java 
mapView = view.findViewById(R.id.mapview);
```

3. Befülle nun die `showMap()` Methode mit dem folgenden Code.
```java
// Lädt oder initiliasiert die osmdroid Konfiguration
Configuration.getInstance().load(getContext(), PreferenceManager.getDefaultSharedPreferences(getContext()));
   
// Definiert wie die Karte aussehen soll, MAPNIK ist quasi die Standard Open Street Map Karte
mapView.setTileSource(TileSourceFactory.MAPNIK);
// Braucht man, damit man mit zwei Fingern zoomen kann
mapView.setMultiTouchControls(true);
// Zoomt auf das Zoom Level 6
mapView.getController().zoomTo(6.0);
```

Nun hast du es geschafft eine Karte anzuzeigen. Sie sollte in etwa so wie im unteren Bild aussehen. Wenn sie nicht lädt, geh einfach nochmal zurück klicke erneut auf "Los", beim ersten Request zur API, über die die Route geladen wird, ist diese immer etwas langsam. Eine Lösung für dieses Problem ist im Abschnitt [Bonus: Verbesserungen](#timeout-und-serverless-function-warmup) beschrieben. 

{{< imgblock "img/map.jpg" >}}{{< /imgblock >}}

### Marker hinzufügen

Nun ist es an der Zeit, die Orte, die in der Route enthalten sind, auf der Karte anzuzeigen. Der erste Schritt hierfür ist, eine Member-Variable für die Route zu erstellen, damit sie auch außerhalb des `onResponse()` Callbacks verwendet werden kann. Danach verwendest du die Klasse `SpeechBalloonOverlay`, die in osmdroid enthalten ist, um die Marker zu erstellen und zur Route hinzuzufügen. Befolge dazu diese Schritte.

1. Erstelle mit der folgenden Zeile eine Member-Variable für die Route. Füge diese unter `private MapView mapView;` ein.
```java
private List<Place> route;
```

2. Gehe zur `onResponse()` Methode und ersetze die Zeile
```java
List<Place> route = new Gson().fromJson(response, new      TypeToken<List<Place>>() {}.getType());
```
mit der folgenden.
```java
route = new Gson().fromJson(response, new TypeToken<List<Place>>() {}.getType());
```
Nun wird die Route nicht mehr in einer lokalen Variable gespeichert, sondern in einer Member-Variable, die in der ganzen Klasse verfügbar ist.

3. Füge nun den folgenden Code zur Methode `showMap()` hinzu, um die Marker anzuzeigen.

```java
// Iteriert über alle Places, die in der Route enthalten sind
for  (int i = 0; i < route.size(); i++) {
	// Speichert den aktuellen Place in die Variable place
	Place place = route.get(i);
	// Erstellt einen GeoPoint mit den Koordinaten des aktuellen Place
	GeoPoint geoPoint = new GeoPoint(place.getLatitude(), place.getLongitude());
   
	// Erstellt das Overlay (= Marker) der später angezeigt wird
	SpeechBalloonOverlay textOverlay = new SpeechBalloonOverlay();
	// Positioniert das Overlay
	textOverlay.setGeoPoint(geoPoint);
	// Definiert den Titel/Text des Overlays. Dieser sieht später zum Biespiel so aus: "1 - Ortsname"
	textOverlay.setTitle((i + 1) + " - " + place.getName());
   
	// Definiert wie die Schrift aussehen soll, also weiß und in der Schriftgröße 48
	Paint textPaint = new Paint();
	textPaint.setColor(Color.WHITE);
	textPaint.setTextSize(48);
   
	// Definiert die Hintergrundfarbe, in diesem Fall schwarz
	Paint backgroundPaint = new Paint();
	backgroundPaint.setColor(Color.BLACK);
   
	// Übergibt die soeben erstellten Paints für Text und Hintergrund an das Overlay, damit diese verwendet werden
	textOverlay.setForeground(textPaint);
	textOverlay.setBackground(backgroundPaint);
   
	// Legt einen Rahmen fest, damit die Marker ein bisschen besser aussehen
	textOverlay.setMargin(16);
   
	// Fügt das Overlay zur Karte hinzu
	mapView.getOverlays().add(textOverlay);
}
```

Wenn du nun einen Satz eingibst und dann auf der Karte nach Amerika navigierst, solltest du die Marker für deine Route sehen.   

### Route hinzufügen

Um eine Route auf einer OpenStreetMap Karte anzuzeigen, kannst du das [OSMBonusPack](https://github.com/MKergall/osmbonuspack) verwenden. Die Dependency dafür ist aber auf einem anderen Server (repository) gespeichert als die bisherigen. Öffne deshalb zuerst die `build.gradle (Project: <DEIN_PROJEKT_NAME>)` und füge das repository `maven { url "https://jitpack.io" }` im folgenden Block ein und klicke auf "Sync Now".

```xml
allprojects {
	repositories { 
    	...
    	maven { url "https://jitpack.io" }
	}
}
```

Nun kannst du die Dependency `'com.github.MKergall:osmbonuspack:6.6.0'` wie gewohnt zur `build gradle (Module: app)` hinzufügen. Befolge danach die unten stehenden Schritte um die Route zwischen den Markern anzuzeigen.

1. Der `RoadManager`, der später verwendet wird um eine Route zu laden, setzt einen HTTP Request ins Internet ab. Das funktioniert ähnlich, wie du es vorher gemacht hast um die Liste von `Place` Objekten zu laden. Der `RoadManager` schickt diesen Request aber nicht, wie du vorher, an einen Endpunkt der mit HTTPS abgesichert ist, sondern an einen unsicheren HTTP Endpunkt. Das ist in Android nur erlaubt, wenn man im `AndroidManifest.xml` angibt, dass man Requests zu HTTP Endpunkten schickt. Öffne deshalb das `AndroidManifest.xml` und füge die folgende Zeile im `<application>` tag ein.
```xml
<application
	...
	android:usesCleartextTraffic="true" >
	<activity ...>
		...
	</activity>
</application>
```

2. Um eine Route erstellen zu können, benötigst du eine Liste von `GeoPoint` Objekten. Füge deshalb über der `for`-Schleife, die du oben erstellt hast die folgende Zeile ein.
```java
ArrayList<GeoPoint> geoPoints = new ArrayList<>();
```

3. Nachdem du Liste erstellt hast, muss sie auch befüllt werden. Du erstellst ja in der `for`-Schleife mit `GeoPoint geoPoint = new GeoPoint(place.getLatitude(), place.getLongitude());` einen GeoPoint, der die Position des Markers bestimmt. Füge diesen in der nächsten Zeile mit `geoPoints.add(geoPoint);` zur Liste hinzu.

4. Füge den folgenden Code unter der `for`-Schleife ein um die Route zu laden.
```java
// Die folgenden zwei Zeilen werden benötigt um HTTP Requests am Main Thread abzusetzen.
// Mehr dazu und wie man es besser macht im Abschnitt "Bonus: Verbesserungen" der Anleitung.
StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
StrictMode.setThreadPolicy(policy);
   
// Erstellt einen neuen RoadManager, der sich ums Erstellen der Route kümmert
RoadManager roadManager = new OSRMRoadManager(getContext());
// Lädt eine Route, die alle GeoPoints beinhaltet, die oben zur Liste hinzugefügt wurden.
// Diese methode macht einen HTTP Request am Main Thread.
Road road = roadManager.getRoad(geoPoints);
// Erstellt die Linie, die dann auf der Karte angezeigt wird.
Polyline roadOverlay = RoadManager.buildRoadOverlay(road, Color.BLACK, 6);
// Zeigt die Linie auf der Karte an.
mapView.getOverlays().add(roadOverlay);
   
// Erlaubt der Karte nicht weiter als auf dieses Level zu zoomen
mapView.setMaxZoomLevel(5.0);
// Zentriert die Karte über der Route
mapView.zoomToBoundingBox(roadOverlay.getBounds(), true, 150, 6.0, 100L);
// Aktualisiert die MapView, damit die Overlays richtig angezeigt werden.
mapView.invalidate();
```

Gratuliere! Nun hast du den Basisteil der Anleitung geschafft und solltest eine Karte mit deiner Route sehen. 

{{< imgblock "img/basic_app_done.png" >}}{{< /imgblock >}}

## Bonus: Verbesserungen

In diesem Abschnitt werden einige Verbesserungen beschrieben, die du noch machen kannst, wenn du möchtest. Diese beinhalten unter anderem das Styling der App, ein paar Verbesserungen des Codes selbst und die App sollte auch etwas schneller werden.

### Die App aufräumen und umstrukturieren

Der erste Schritt um die App zu verbessern, ist sie erstmal aufzuräumen. Dabei wirst du die Benennung der Dateien verbessern und Teile, die nicht mehr benötigt werden, löschen. Befolge dazu die unten stehenden Schritte.

1. Benenne als erstes die beiden Fragments so um, dass ihre Namen verraten, welche Funktion sie haben. Wenn euer Projekt größer wird, ist es so einfacher zu verstehen, was sich wo befindet. 

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

### Aktuellen Status in der Info-TextView anzeigen

Derzeit wird die Info-`TextView` zum Anzeigen der Phrase verwendet. Die `TextView` soll nun den Text "Laden..." anzeigen während die Route geladen wird. Außerdem soll überprüft werden, ob überhaupt eine Route geladen wurde, bevor die Karte angezeigt wird. Falls nicht soll ein Fehler angezeigt werden. Wenn du möchtest, ist das eine gute Aufgabe, die du allein probieren kannst. Lies also hier nicht weiter und versuche das Problem selbst zu lösen. Meine Lösung ist in den folgenden Schritten beschrieben.

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

### Input Validierung

Wenn man im `PhraseInputFragment` auf "LOS" klickt, wird derzeit nicht überprüft, ob überhaupt ein Satz eingegeben wurde. Das Ziel dieser Verbesserung ist es, einen Fehler anzuzeigen, wenn nichts eingegeben wurde. Auch bei dieser Aufgabe würde ich dir empfehlen, sie zuerst selbst zu probieren. Im folgenden ist meine Lösung beschrieben.

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

### Asynchrone HTTP Requests

Wie bereits weiter oben beschrieben, setzt die Methode `roadManager.getRoad(wayPoints);` eine HTTP Request am Main Thread ab. Das bedeutet, dass diese Methode den Main Thread sehr lange blockieren kann, falls es Probleme beim Request geben sollte. Deshalb waren auch die folgenden beiden Zeilen nötig.
```java
StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
StrictMode.setThreadPolicy(policy);
```

Diese Zeilen werden am Ende dieses Abschnitts nicht mehr nötig sein, da du den Request in einem anderen Thread absetzen und das Ergebnis in einem Callback zurückgeben wirst. Befolge die folgenden Schritte, um dieses Ziel zu erreichen.

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

### Timeout und Serverless Function Warmup
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
Um dem oben beschriebenen "cold start" vorzubeugen, kann man zum Beispiel schon beim Start der App einen leeren Request an die Serverless Function schicken um sie zu starten. Das ist wieder ein Task, den du allein probieren kannst, wenn du möchtest. Setze dazu im `PhraseInputFragment` einen Request zum Server ab, bei dem du das Ergebnis ignorierst. Im folgenden ist beschrieben, wie ich es gelöst habe.

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

### Mehrsprachige App

Wenn du während der Implementierung der App einen Text benötigt hast, hast du diesen immer in die Datei `res/values/strings.xml` eingetragen. Das ist dir wahrscheinlich etwas unpraktisch vorgekommen, aber jetzt wirst du den großen Vorteil dieser Methode sehen. Und zwar kannst du die App jetzt ganz einfach in mehrere Sprachen übersetzen. In diesem Schritt wirst du Englisch als Standardsprache festlegen und Deutsch als zweite Sprache hinzufügen. Das bedeutet, dass die Texte der App in Deutsch sein werden, wenn das Smartphone auf Deutsch eingestellt ist. In allen anderen Fällen werden die Texte in Englisch dargestellt. Befolge dazu die folgenden Schritte.

1. Öffne die Datei `res/values/strings.xml`.

2. Klicke mit der rechten Maustaste irgendwo in den leeren Bereich der Datei und klicke dann auf "Show Context Actions" -> "Open editor".

3. Klicke links oben im Editor auf die Weltkugel mit dem grünen Plus (im Bild unten in Orange gekennzeichnet).

4. Suche nach "German" und wähle "German (de)" aus.

5. Kopiere nun alle Texte der Spalte "Default Value" nach "German (de)".

6. Übersetze nun die Texte in der Spalte "Default Value" in Englisch. Du kannst diese einfach vom folgenden Screenshot abschreiben. 

{{< imgblock "img/android_studio_translations_editor.png" >}}{{< /imgblock >}}

Wenn du die Sprache deines Telefons nun auf Englisch (oder eine andere Sprache außer Deutsch) umstellst, ist auch die App in Englisch. Stellst du die Telefonsprache zurück auf Deutsch, sind die Texte in der App wieder auf Deutsch.

### Styling der App

Die App erfüllt nun alle Ansprüche an die Funktionalität, das Design lässt aber noch zu wünschen übrig. Dieses wirst du in diesem Abschnitt verbessern. Und zwar soll die App am Ende so wie im Bild unten aussehen. Wie du das erreichst, ist in den folgenden Abschnitten beschrieben.

{{< imgblock "img/map_reactions_app.png" >}}{{< /imgblock >}}

Beim betrachten der App, wird schnell klar, das Blau die Hauptfarbe ist. Wenn du die Datei `res/values/colors.xml` öffnest, siehst du, dass es dort drei Farben gibt. Und zwar einmal die `colorPrimary`, die Hauptfarbe der App. Zusätzlich gibt es noch die `colorPrimaryDark`, welche etwas dunkler als die `colorPrimary` sein sollte, diese wird zum Beispiel für die Hintergrundfarbe der Notification Bar verwendet. Zusätzlich gibt es noch die `colorAccent`, welche einen Kontrast zur `colorPrimary` darstellen soll und zum Beispiel für wichtige Elemente wie den `Floating Action Button` verwendet wird. Passe die Farben mit den folgenden Schritten an.

1. In dieser App brauchst du die `colorAccent` nicht, deshalb kannst du sie löschen.

2.   Setze für die anderen beiden Farben die folgenden Werte.
```xml
<color name="colorPrimary">#0c27ba</color>
<color name="colorPrimaryDark">#071872</color>
```
3. Öffne die Datei `res/values/styles.xml` und lösche die Zeile `<item name="colorAccent">@color/colorAccent</item>`.

#### Styling des `PhraseInputFragment`

##### Hintergrund

Der Hintergrund des `PhraseInputFragment` besteht aus zwei Teilen. Zum einen enthält er ein Bild mit einer Karte und zum anderen einen blauen Farbverlauf, der nach rechts unten hin immer heller und transparenter wird, damit man mehr von der Karte sieht. Befolge diese Schritte um den Hintergrund so zu gestalten.

1. Das Hintergrundbild ist [hier](https://unsplash.com/photos/4Zk45jNyQS4) auf [Unsplash](https://unsplash.com/) verfügbar. Ich habe das Bild bereits heruntergeladen, zugeschnitten und an verschiedene Auflösungen angepasst. In Android kann man Bilder und Grafiken nämlich in verschiedenen Größen zur Verfügung stellen und das Smartphone wählt dann das richtige Bild aus. Lade dir die [zip Datei](https://coderdojo-map-reactions.s3.eu-central-1.amazonaws.com/phrase_input_background.zip) herunter und extrahiere sie in deinem Projektordner unter `res`.

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

12. Ziehe die `view` im `Component Tree` über den `button_go`,  damit sie in den Hintergrund rückt.

##### UI Elemente

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
3.  Button soll genau gleich aussehen, nur mit umgekehrten Farben. Erstelle deshalb gleich ein zweites `Drawable Resource File` mit dem Namen `button_background` und dem folgenden Inhalt.
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

11. Lade dir [diesen Icon](https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41) von [flaticon](https://ww.flaticon.com) als "PNG" herunter und kopiere dir den "Attribution Link", in diesem Fall "<div>Icons made by <a href="https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>" in eine Text-Datei. Diese Information wirst du am Ende der Anleitung noch in die App einbauen.

> *ACHTUNG: Solltest du die App irgendwo veröffentlichen, musst du unbedingt die Information, von wo die Icons sind in den Credits der App und in der Info des Playstores anzeigen!* 

12. Gehe auf die Seite https://romannurik.github.io/AndroidAssetStudio/ und klicke auf "Generic Icon Generator".

13. Klicke links bei "Source" auf "Image" und lade den soeben heruntergeladenen Icon hoch.

14. Wähle die folgendne Werte aus und klicke dann rechts oben auf "Download".
	- Trim whitespace: Trim
	- Padding: 0%
	- Asset size: 128dp
	- Asset padding: 0%
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

##### Schriftart

Auch die Schrift ist ein wichtiger Punkt, um das Design einer App zu verbessern. Ich habe für die App eine Kombination aus den Schriften [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) und [Cabin](https://fonts.google.com/specimen/Cabin) verwendet. Natürlich kannst du auch jede andere Schriftart mit den folgenden Schritten verwenden.

1. Öffne das Layout `fragment_phrase_input.xml` und klicke auf das `EditText` um es auszuwählen.

2. Suche in der Attributliste nach "font".

3. Klicke auf den Pfeil rechts neben "fontFamily" und klicke ganz unten auf "More Fonts..."

4. Suche nach "Cabin" und wähle diese Schrift mit einem Klick aus und klicke auf "OK".

5. Wähle nun den `Button` aus, suche wieder nach "fontFamily" und klicke auf "More Fonts...".

6. Suche nun nach "Roboto" und wähle rechts bei "Preview" die Schrift namens "Condensed Bold" aus. Klicke dann wieder auf "OK". 

#### Styling des `MapFragment`

Nun hast du das Styling des `PhraseInputFragment` abgeschlossen und es ist an der Zeit, das `MapFragment` zu verschönern. 

##### Styling der Info-Box

Die erste Verbesserung, die du hier machen kannst, ist es die Info-`TextView` durch eine ganze Info-Box zu ersetzen, die mehr Informationen zur Route, aber auch einen "Neu starten" -`Button` enthält. Befolge dazu die unten stehenden Schritte.

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

##### Styling der Karte

 

#### Credits


<span>Photo by <a href="https://unsplash.com/@timowielink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Timo Wielink</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

<div>Icons made by <a href="https://www.flaticon.com/free-icon/placeholder_2942933?term=map&page=1&position=41" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/free-icon/reply_481675?term=back&page=1&position=43" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


## Ressourcen

[Die App vor dem Abschnitt "Bonus: Verbesserungen"](https://github.com/KatharinaSick/coderdojo-anleitung-map-reactions-app)

[Die App inklusive der Verbesserungen](https://github.com/KatharinaSick/coderdojo-anleitung-map-reactions-app/tree/bonus)

TODO link zu app icons!!

