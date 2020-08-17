---
title: "Android Map Reactions App, Teil 1"
description: "In dieser Übung programmierst du eine Android App in der man einen Satz eingeben kann, der dann als Route auf einer Karte angezeigt wird."
level: 3
img: "basic_map_reactions_app.png"
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

3. Wähle eine "Basic Activity" als "Project Template" aus.

4. Gib die folgenden Dinge ein
	- "Name": Der Name deiner App - ich nenne meine zum Beispiel `Map Reactions`.
	- "Package name": Ein eindeutiger Name um deine App im Google Play Store zu identifizieren. Für die Anleitung ist es ganz egal welchen Namen du verwendest.
	- "Save location": Der Ordner in dem du das Projekt speichern möchtest.
	- "Language": Native Android Apps kann man in Java oder [Kotlin](https://kotlinlang.org/) programmieren. In dieser Anleitung werde ich Java verwenden, du kannst aber gerne auch Kotlin ausprobieren.
	- "Minimum SDK": Die niedrigste Android Version die von der App unterstützt wird. Wähle hier `API 21: Android 5.0 (Lollipop)` aus.

5. Klicke auf `Finish`.

Um die App auf deinem Handy auszuführen, musst du zuerst die Entwickler Optionen und USB-Debugging aktivieren. Das geht mit den folgenden Schritten.

1. Öffne die Einstellungen auf deinem Android Smartphone.

2. Klicke auf "Telefoninfo".

3. Klicke 7 mal auf "Build-Nummer" um die Entwickler Optionen zu aktivieren.

4. Gehe zurück zu den Einstellungen und klicke auf "Entwickler Optionen".

5. Aktiviere "USB-Debugging".

Falls du es noch nicht getan hast, solltest du dein Smartphone jetzt mithilfe eines USB-Kabels mit deinem Computer verbinden. Dann sollte ein Dialog mit dem Titel "USB-Debugging zulassen" auf deinem Smartphone erscheinen. Bestätige diesen mit "Erlauben".

Jetzt kannst du wieder zurück zu Android Studio wechseln und die App ausführen. Wähle dazu dein Smartphone aus (falls es nicht schon automatisch ausgewählt wurde) und klicke dann auf den grünen "Play" Button neben dem Dropdown. Jetzt sollte die App auf deinem Smartphone ausgeführt werden. 

{{< imgblock "img/android_studio_run.png" >}}{{< /imgblock >}}

### Was beinhaltet diese App?

Im oben beschriebenen Schritt hat dir Android Studio eine App mit einer "Basic Activity" generiert. Sehen wir uns mal an, was diese beinhaltet.

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

Mit den folgenden Schritten kannst du die `Toolbar` und den `FloatingActionButton` entfernen.

1. Öffne die `MainActivity.java`.

2. Lösche die Methoden `onCreateOptionsMenu(Menu menu)` und `onOptionsItemSelected(MenuItem item)`. Diese verwalten das Menü mit den drei Punkten rechts oben, das benötigst du aber nicht.

3. Um alle Teile des Menüs zu löschen, lösche auch den Ordner `res/menu`.

4. Lösche den folgenden Code, welcher die `Toolbar` als `ActionBar` in der App setzt und den `FloatingActionButton` konfiguriert. 

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

5. Im vorigen Schritt hast du die Logik der beiden Komponenten entfernt. Lösche sie nun auch aus dem Layout. Öffne dazu die Datei `res/layout/activity_main.xml` und wähle ganz rechts oben "Design" aus (im Bild unten in Orange gekennzeichnet).

6. Klicke im `Component Tree` (im Bild unten in Grün gekennzeichnet) mit der rechten Maustaste auf das `AppBarLayout` (das enthält die `Toolbar`) und klicke auf "Delete".

7. Wiederhole das gleiche für den `fab`, den `FloatingActionButton`.

{{< imgblock "img/android_studio_layout_editor.png" >}}{{< /imgblock >}}

Jetzt hast du alle unnötigen Komponenten aus der `MainActivity` entfernt und kannst mit den folgenden Schritten in den Fragments weiter machen.

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

Nachdem du im vorigen Schritt alle unnötigen Komponenten entfernt hast, ist es nun an der Zeit mit der eigentlichen Implementierung der App zu beginnen. Der erste Schritt dazu ist das `FirstFragment` so anzupassen, dass der Benutzer einen Satz eingeben und auf "Los" klicken kann. Wenn er auf "Los" klickt soll sich das 2. Fragment öffnen und der eingegebene Satz an dieses übergeben werden.

### Layout erstellen

1. Öffne die Datei `res/values/strings.xml`. Hier werden alle Texte der App abgelegt.

2. Füge die folgenden Strings hinzu.
```xml
<string name="enter_a_phrase">Gib einen Satz ein</string>
<string name="go">Los</string>
```

3. Öffne nun das Layout `fragment_first.xml` und wähle den `Button` mit einem Klick aus.
4. Suche in der List der Attribute auf der rechten Seite nach `id` und gib dem `Button` die id `button_go`.
5. Wähle im Dialog der erscheint "Don't ask again during this session" und "Yes" aus.
6. Suche in der Attributliste nach "text" und schreib "@string/go" hinein. Somit verlinkst du den String, den du vorher erstellt hast, mit dem Text des Buttons.
7. Klicke nun einmal auf den weißen Hintergrund deines Layouts, um die Auswahl des `Button` aufzuheben.
8. Über dem `Component Tree`, den du vorher schon verwendet hast, findest du die `Palette`. Mithilfe der `Palette` kannst du neue Komponenten hinzufügen. Nutze die Lupe um nach "EditText" zu suchen.
9. Wähle `Plain Text` aus und ziehe es irgendwo in die weiße Fläche deines Layouts.
10. Gib dem `EditText` die id "edittext_phrase" und lösche den Text "Name", der automatisch gesetzt wurde.
11. Nutze die Lupe rechts von `Attributes` um nach "hint" zu suchen. Leg "@string/enter_a_phrase" als `hint` fest.
12. Wenn du das eben erstellte `EditText` auswählst, siehst du 4 Punkte an den Rändern. Es befindet sich an jeder Seite einer. Ziehe den linken Punkt an den ganz linken Rand der weißen Hintergrundfläche. Dann wiederhole das für alle Punkte, zieh also den rechten Punkt zum rechten Rand, den oberen zum oberen Rand und den unteren Punkt zum unteren Rand der Fläche. Pass auf, dass der untere Punkt wirklich am Hintergrund andockt und nicht am Button.
13. Jetzt hast du sogenannte `Constraints` gesetzt, um das `EditText` in der Mitte des Bildschirms auszurichten.
14. Nun soll das `EditText` die ganze Breite des Bildschirms einnehmen. Gehe dazu wieder rechts zur `Attributes` und wähle "0dp (match constraint)" als `layout_width` aus. 
15. Damit es nicht ganz so am Rand "festklebt", fügst du jetzt links und rechts einen Rand hinzu. Diesen kannst du im `Constraint Widget` unter der Attributliste setzen (siehe Bild). Lege hier links und rechts einen Rahmen von jeweils 16 fest.
{{< imgblock "img/constraint_widget.png" >}}{{< /imgblock >}}
16. Jetzt musst du nur noch den `Button` positionieren. Dieser soll rechts unterhalb des `EditText` sein. Wähle ihn dazu mit einem Klick aus und ziehe den Punkt an der oberen Kante zur Unterkante des `EditText`
17. Um den `Button` nun direkt unter dem `EditText` und an der rechten Bildschirmkante zu positionieren, lösche den linken und den unteren `Constraint` indem du sie mit einem Klick auswählst und dann auf der Tastatur auf `Entf` klickst.
18. Lege im `Constraint Widget` die folgenden Rahmen fest: 
   - Rechts: 16
   - Oben: 32

Das wars auch schon mit dem Layout zum eingeben eines Satzes. Dein Layout sollte nun so aussehen

{{< imgblock "img/layout_phrase_input.png" >}}{{< /imgblock >}}

### Input einlesen und an das nächste Fragment übergeben

Da das Layout nun fertig ist, ist der nächste Schritt den Input des Benutzers im `FirstFragment` einzulesen und an das nächste Fragment zu übergeben, wenn auf "LOS" gedrückt wird. Das bedeutet du musst einen `OnClickListener` hinzufügen dessen `onClick(View view)` Methode immer ausgeführt wird, wenn der Benutzer auf "LOS" klickt. In dieser Methode liest du zuerst den Text aus dem `EditText` ein, bevor du zum nächsten Fragment navigierst. 

Ein Teil des Codes, den du dazu benötigst, ist schon vorhanden. Und zwar gibt es schon einen `OnClickListener` der ausgelöst wird, wenn der Button geklickt wird. Auch die Navigation zum `SecondFragment` funktioniert schon. Deshalb sind nur noch die folgenden Schritte nötig.

1. Bereite den `Navigation Graph` vor, damit du den eingegebenen Satz als Argument übergeben kannst.
   1. Öffne zuerst die Datei `res/navigation/nav_graph.xml`. 
   2. Klicke in der linken Spalte unter `GRAPH` auf `SecondFragment`.
   3. Klicke rechts in der Attributliste auf das `+` rechts von `Arguments`.
   4. Gib "phrase" als Name und "String" als Type ein. Alles andere kannst du leer lassen.
   5. Klicke auf "Add".
   
2. Lies den Satz ein und übergib ihn an das `SecondFragment`, wenn die `onClick()` Methode aufgerufen wird.
  1. Öffne  das `FirstFragment`.
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

1. Öffne das `SecondFragment`.

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

2. Füge die `Dependency` für Volley  im Block `dependencies` ein.
```xml
dependencies {
	...
	
	implementation 'com.android.volley:volley:1.1.1'
}
```
3. Klicke rechts oben in der Leiste auf "Sync Now". Damit werden alle Dependencies geladen.

4. Öffne nun das `SecondFragment`. 

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

6. Mit dem oben stehenden Code, hast du den Request abgesetzt, das Ergebnis wird aber noch ignoriert. Um diesen Abschnitt abzuschließen, genügt es das Ergebnis in der Info-`TextView` anzuzeigen. Füge dazu ganz einfach die Zeilen `textViewInfo.setText(response);` und `textViewInfo.setText(error.toString());` in den `onResponse()` beziehungsweise in den `onErrorResponse()` Block ein. 
7. Als letztes muss die soeben erstellte `loadRoute()` Methode noch ausgeführt werden. Rufe sie daher in der letzten Zeile der `onViewCreated()` Methode mit `loadRoute()` auf. 

Nun hast du es geschafft, die Route aus dem Internet herunterzuladen und das Ergebnis in einer `TextView` anzuzeigen. Wenn du die App ausführst und einen Satz eingibst, sollte das Ergebnis in etwa so aussehen (natürlich mit einem anderen Text):

>  *INFO: Es kann sein, dass der erste Request sehr lange dauert oder sogar fehl schlägt. Geh einfach nochmal zurück zum Start und probier es nochmal. Die Lösung für dieses Problem ist im [zweiten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app-2/) beschrieben.*

{{< imgblock "img/load_route_result.jpg" >}}{{< /imgblock >}}

### Route parsen

Die Route wird als sogenanntes [JSON](https://www.json.org/json-de.html) zurückgegeben. Dieses JSON wandelst du in diesem Schritt in etwas um, mit dem du auch gut arbeiten kannst, zwar  eine Liste von Objekten. Diese Umwandlung von JSON zu einem Objekt oder umgekehrt nennt man "parsen". Dabei kannst du dir wieder von einer Bibliothek helfen lassen. Nämlich von [Gson](https://github.com/google/gson). Dazu brauchst du die Dependency `implementation 'com.google.code.gson:gson:2.8.6'`, füge diese in der Datei `build.gradle (Module: app)` hinzu (das funktioniert genauso wie oben bei Volley). 

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

1. Klicke mit der rechten Maustaste auf das Package in dem die `MainActivity` enthalten ist und gehe auf `New` -> `Java Class`.
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

Somit hast du das Java Objekt erstellt, das verwendet wird um das JSON zu parsen. Jetzt verwendest du Gson um das JSON zu einer Liste von `Place` Objekten zu parsen. Öffne dazu wieder das `SecondFragment` und gehe zum `onResponse()` Listener. Ersetze dort die Zeile `textViewInfo.setText(response);` mit dem folgenden Code.
```java
// Parsed das JSON in der Variable response zu einer Liste von Place Objekten
List<Place> route = new Gson().fromJson(response, new TypeToken<List<Place>>(){}.getType());
// Zeigt den ersten Place in der Liste in der Info-TextView an
textViewInfo.setText(route.get(0).toString());
```

Die App sollte nun so aussehen. 
{{< imgblock "img/parse_route_result.jpg" >}}{{< /imgblock >}}

## Karte anzeigen

Nachdem du die Route im letzten Abschnitt erfolgreich heruntergeladen und geparst hast, geht es in diesem Abschnitt darum die Karte inklusive Marker und Route anzuzeigen. Um die Karte anzuzeigen, kannst du [osmdroid](https://github.com/osmdroid/osmdroid) verwenden. Füge dazu die Dependency `'org.osmdroid:osmdroid-android:6.1.8'` zur `build.gradle (Module: app)` hinzu.

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

6. Lösche den oberen `Constraint` um die `TextView` am unteren Bildschirmrand auszurichten. 

7. Gib der TextView die Breite (`layout_width`) "0dp (match constraint)" um sie über die ganze Breite anzuzeigen.

8. Such in der Attributliste nach "padding" und vergib ein `padding` von "16dp".

9. Wähle die `MapView` im `Component Tree` aus. 

10. Du siehst nun ganz links oben den rechten und unteren `Constraint` Punkt der `MapView`. Ziehe den rechten zum rechten Bildschirmrand.

11. Jetzt ist die `MapView` durch den `Constraint` nach ganz rechts oben gerutscht, ziehe nun den linken Punkt zum linken Bildschirmrand und den unteren zum oberen Punkt der `TextView`.

12. Nun siehst du auch den oberen Punkt der `MapView`. Ziehe diesen ganz nach oben, damit die `MapView` den gesamten Bildschirm über der `TextView` einnimmt.

13. Gib der `MapView` die `id` "mapview".

### Karte anzeigen

Osmdroid speichert Teile der Karte auf dem Telefon des Benutzers. Deshalb musst du, bevor du die Karte laden kannst, die Berechtigung dafür einholen. Du kennst das sicher von Instagram, Facebook, WhatsApp oder anderen Apps, dass du der App erlauben musst auf deine Kamera zuzugreifen, bevor du ein Foto machen kannst. Genau das gleiche muss jetzt Speicherzugriff gemacht werden, damit die App auf den Speicher zugreifen darf. Glücklicherweise bietet Android hier gute Unterstützung an und du kannst die Berechtigung mit den folgenden Schritten abfragen.

1.  Öffne das `AndroidManifest.xml`.

2. Füge die folgende Zeile unter `<uses-permission android:name="android.permission.INTERNET" />` ein.
```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

3. Öffne das `SecondFragment`.

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

>  *ACHTUNG: Es kann sein, dass der erste Request sehr lange dauert oder sogar fehl schlägt. Geh einfach nochmal zurück zum Start und probier es nochmal. Die Lösung für dieses Problem ist im [zweiten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app-2/) beschrieben.*

{{< imgblock "img/request_permission.jpg" >}}{{< /imgblock >}}

Befolge die nächsten Schritte um eine Karte anzuzeigen.

1. Öffne das `SecondFragment`.

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

Nun hast du es geschafft eine Karte anzuzeigen. Sie sollte in etwa so wie im unteren Bild aussehen. Wenn sie nicht lädt, geh einfach nochmal zurück klicke erneut auf "Los", beim ersten Request zur API, über die die Route geladen wird, ist diese immer etwas langsam. Eine Lösung für dieses Problem ist im [zweiten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app-2/) beschrieben. 

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

Um eine Route auf einer OpenStreetMap Karte anzuzeigen, kannst du das [OSMBonusPack](https://github.com/MKergall/osmbonuspack) verwenden. Die Dependency dafür ist aber auf einem anderen Server (Repository) gespeichert als die bisherigen. Öffne deshalb zuerst die `build.gradle (Project: <DEIN_PROJEKT_NAME>)` und füge das Repository `maven { url "https://jitpack.io" }` im folgenden Block ein und klicke auf "Sync Now".

```xml
allprojects {
	repositories { 
    	...
    	maven { url "https://jitpack.io" }
	}
}
```

Nun kannst du die Dependency `'com.github.MKergall:osmbonuspack:6.6.0'` wie gewohnt zur `build gradle (Module: app)` hinzufügen. Befolge danach die unten stehenden Schritte um die Route zwischen den Markern anzuzeigen.

1. Der `RoadManager`, der später verwendet wird um eine Route zu laden, setzt einen HTTP Request ins Internet ab. Das funktioniert ähnlich, wie du es vorher gemacht hast, um die Liste von `Place` Objekten zu laden. Der `RoadManager` schickt diesen Request aber nicht, wie du vorher, an einen Endpunkt der mit HTTPS abgesichert ist, sondern an einen unsicheren HTTP Endpunkt. Das ist in Android nur erlaubt, wenn man im `AndroidManifest.xml` angibt, dass man Requests zu HTTP Endpunkten schickt. Öffne deshalb das `AndroidManifest.xml` und füge die folgende Zeile im `<application>` tag ein.
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

Gratuliere! Nun hast du den ersten Teil der Anleitung geschafft und solltest eine Karte mit deiner Route sehen. Wenn du deine App noch weiter verbessern möchtest, sieh dir doch den [zweiten Teil der Anleitung](/uebungsanleitungen/programmieren/sonstiges/android-map-reactions-app-2/) an. Dieser beinhaltet unter anderem das Styling der App, ein paar Verbesserungen zur Stabilität und noch ein paar Punkte, die man einfach besser machen kann.

{{< imgblock "img/basic_map_reactions_app.png" >}}{{< /imgblock >}}

## Ressourcen

[Der vollständige Code für diese App](https://github.com/KatharinaSick/coderdojo-anleitung-map-reactions-app/tree/teil1)