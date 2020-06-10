---
title: "Chat mit Node.js und Socket.io"
description: "In dieser Übung programmieren wir einen Chat mit Node.js und Socket.io."
level: 2
---

# Chat mit Node.js und Socket.io

## Ziel der Übung

In dieser Übung lernst du, wie du eine Chat-Anwendung mit [Server- und Clientteil](https://de.wikipedia.org/wiki/Client-Server-Modell "Client-Server-Modell auf Wikipedia nachlesen") baust. Mehrere Benutzer können sich im Chat anmelden. Wenn jemand etwas sendet sollen alle anderen Benutzer das sofort sehen. 

**Wichtig: Diese Übung geht davon aus, dass du die Übung [Einen Node.js Webserver programmieren](nodejs-webserver.html) gemacht hast und diese bei dir auf deinem Computer funktioniert.** Mache hier erst weiter, wenn du die vorbereitende Übung erfolgreich abgeschlossen hast.

## Web Sockets

Das besondere an diesem Beispiel ist, dass sich Client und Server in beide Richtungen unterhalten können. In [HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol "HTTP in Wikipedia nachschlagen") fragt normalerweise der Browser den Server um Dateien (z.B. HTML, CSS, JavaScript). Der Server schickt den Inhalt der Dateien an den Browser. Der Server kann aber normalerweise nicht von sich aus dem Browser eine Nachricht schicken. Genau das brauchen wir aber. Schließlich muss der Server alle Browser informieren, wenn ein Benutzer eine Nachricht eingegeben hat.

Die Lösung ist eine Technologie namens [Web Sockets](https://de.wikipedia.org/wiki/WebSocket "Web Sockets auf Wikipedia nachschlagen"). In Node.js gibt es ein spezielles Modul für Web Sockets: [socket.io](http://socket.io/).

## Socket.io installieren

*Socket.io* müssen wir installieren. Das geschieht in der Kommandozeile mit dem Befehl `npm install socket.io` (*Achtung:* Bevor du ihn ausführst, stelle sicher, dass du im Verzeichnis *C:\Code\Chat* bist).

## Den Servercode programmieren

1. Öffne die Datei *server.js* in Visual Studio Code.<br/>
![Datei in Visual Studio Code öffnen](nodejs-socketio-chat/serverjs-oeffnen.png)

2. Mit Socket.io zu programmieren ist nicht schwierig. Man kann auf *Events* reagieren, die die Browser-Clients schicken. Anschließend kann man den Browser-Clients Nachrichten schicken.<br/><br/>
 
3. Hier ist der Code für unseren Chat-Server. Schreibe ihn in deine *server.js* Datei und achte besonders auf die enthaltenen Kommentarzeilen. Wenn du den Code abtippst, musst du die Kommentarzeilen nicht unbedingt mit eingeben.

```javascript
// express und http Module importieren. Sie sind dazu da, die HTML-Dateien
// aus dem Ordner "public" zu veröffentlichen.
var express = require('express');
var app = express();
var server = require('http').createServer(app);

// Mit dieser zusätzlichen Zeile bringen wir Socket.io in unseren Server.
var io = require('socket.io')(server);

// Mit diesem Kommando starten wir den Webserver.
var port = process.env.PORT || 3000;
server.listen(port, function () {
  // Wir geben einen Hinweis aus, dass der Webserer läuft.
  console.log('Webserver läuft und hört auf Port %d', port);
});

// Hier teilen wir express mit, dass die öffentlichen HTML-Dateien
// im Ordner "public" zu finden sind.
app.use(express.static(__dirname + '/public'));

// === Ab hier folgt der Code für den Chat-Server

// Hier sagen wir Socket.io, dass wir informiert werden wollen,
// wenn sich etwas bei den Verbindungen ("connections") zu 
// den Browsern tut. 
io.on('connection', function (socket) {
  // Die variable "socket" repräsentiert die aktuelle Web Sockets
  // Verbindung zu jeweiligen Browser client.
  
  // Kennzeichen, ob der Benutzer sich angemeldet hat 
  var addedUser = false;

  // Funktion, die darauf reagiert, wenn sich der Benutzer anmeldet
  socket.on('add user', function (username) {
    // Benutzername wird in der aktuellen Socket-Verbindung gespeichert
    socket.username = username;
    addedUser = true;
    
    // Dem Client wird die "login"-Nachricht geschickt, damit er weiß,
    // dass er erfolgreich angemeldet wurde.
    socket.emit('login');
    
    // Alle Clients informieren, dass ein neuer Benutzer da ist.
    socket.broadcast.emit('user joined', socket.username);
  });

  // Funktion, die darauf reagiert, wenn ein Benutzer eine Nachricht schickt
  socket.on('new message', function (data) {
    // Sende die Nachricht an alle Clients
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // Funktion, die darauf reagiert, wenn sich ein Benutzer abmeldet.
  // Benutzer müssen sich nicht explizit abmelden. "disconnect"
  // tritt auch auf wenn der Benutzer den Client einfach schließt.
  socket.on('disconnect', function () {
    if (addedUser) {
      // Alle über den Abgang des Benutzers informieren
      socket.broadcast.emit('user left', socket.username);
    }
  });
});
```

## Den Clientcode programmieren

1. Der Client besteht aus einer HTML-Datei und einer JavaScript-Datei. Beginnen wir mit dem HTML. Hier ist der Code, den du in *public/chat.html* schreiben musst. Achte besonders auf die Kommentare. 

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>CoderDojo Linz | Chat Beispiel</title>
  <style>
    /* Globale Schriftart setzen (weniger "schnörkelig") */
    body {
      font-family: sans-serif;
    }
    
    /* Chat-Seite initial ausblenden */
    .chat.page {
      display: none;
    }
    
    /* Format für Benutzernamen bei der Ausgabe einer Chat-Nachricht */
    .username {
      font-weight: bold;
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <!-- Login-Seite -->
  <div class="login page">
    <h3 class="title">Wie ist dein Name?</h3>
    <input class="usernameInput" type="text" maxlength="14" />
  </div>

  <!-- Chat-Seite (initial ausgeblendet) -->
  <div class="chat page">
    <h3 class="title">Was möchtest du allen anderen mitteilen?</h3>
    <input class="inputMessage" placeholder="Type here..."/>
    <ul class="messages"></ul>
  </div>

  <!-- Programmcode auf der Client-Seite -->
  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src="/socket.io/socket.io.js"></script>
  <script src="/main.js"></script>
</body>
</html>
```

2. Ganz am Ende wird auf die JavaScript-Datei *main.js* verwiesen. Die musst du als nächstes erstellen. Hier ist der Code. Wie immer gilt: Gehe die enthaltenen Kommentare Schritt für Schritt durch.

```javascript
$(function () {
  // Hilfsvariablen für HTML-Elemente werden mit Hilfe von JQuery gesetzt.
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Eingabefeld für Benutzername
  var $messages = $('.messages');           // Liste mit Chat-Nachrichten
  var $inputMessage = $('.inputMessage');   // Eingabefeld für Chat-Nachricht
  var $loginPage = $('.login.page');        // Login-Seite
  var $chatPage = $('.chat.page');          // Chat-Seite

  var username;                             // Aktueller Benutzername
  var connected = false;                    // Kennzeichen ob angemeldet
  
  // Eingabefeld für Benutzername erhält den Fokus
  var $currentInput = $usernameInput.focus();
  
  // Socket.io Objekt anlegen
  var socket = io();

  // ==== Code für Benutzerschnittstelle

  // Tastendruck behandeln
  $window.keydown(function (event) {
    // Die Return-Taste (Ascii 13) behandeln wir speziell
    if (event.which === 13) {
      if (username) {
        // Wenn der Benutzername schon gesetzt ist, handelt es sich
        // um eine Chat-Nachricht.
        sendMessage();
      } else {
        // Wenn der Benutzername noch nicht gesetzt ist, hat sich
        // der Benutzer gerade angemeldet.
        setUsername();
      }
    }
  });

  // Benutzername wird gesetzt
  function setUsername() {
    // Benutzername aus Eingabefeld holen (ohne Leerzeichen am Anfang oder Ende).
    username = $usernameInput.val().trim();

    // Prüfen, ob der Benutzername nicht leer ist
    if (username) {
      // Loginmaske ausblenden und Chat-Seite einblenden
      $loginPage.fadeOut();
      $chatPage.show();

      // Chat-Nachricht wird neues, aktuelles Eingabefeld
      $currentInput = $inputMessage.focus();

      // Server mit Socket.io über den neuen Benutzer informieren. Wenn die
      // Anmeldung klappt wird der Server die "login"-Nachricht zurückschicken.
      socket.emit('add user', username);
    }
  }

  // Chat-Nachricht versenden
  function sendMessage() {
    // Nachricht aus Eingabefeld holen (ohne Leerzeichen am Anfang oder Ende).
    var message = $inputMessage.val().trim();

    // Prüfen, ob die Nachricht nicht leer ist und wir verbunden sind.
    if (message && connected) {
      // Eingabefeld auf leer setzen
      $inputMessage.val('');

      // Chat-Nachricht zum Chatprotokoll hinzufügen
      addChatMessage({ username: username, message: message });
      
      // Server über neue Nachricht informieren. Der Server wird die Nachricht
      // an alle anderen Clients verteilen.
      socket.emit('new message', message);
    }
  }

  // Protokollnachricht zum Chat-Protokoll anfügen
  function log(message) {
    var $el = $('<li>').addClass('log').text(message);
    $messages.append($el);
  }

  // Chat-Nachricht zum Chat-Protokoll anfügen
  function addChatMessage(data) {
    var $usernameDiv = $('<span class="username"/>').text(data.username);
    var $messageBodyDiv = $('<span class="messageBody">').text(data.message);
    var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv);
    $messages.append($messageDiv);
  }

  // ==== Code für Socket.io Events

  // Server schickt "login": Anmeldung war erfolgreich
  socket.on('login', function (data) {
    connected = true;
    log("Willkommen beim Chat!");
  });

  // Server schickt "new message": Neue Nachricht zum Chat-Protokoll hinzufügen
  socket.on('new message', function (data) {
    addChatMessage(data);
  });

  // Server schickt "user joined": Neuen Benutzer im Chat-Protokoll anzeigen
  socket.on('user joined', function (data) {
    log(data + ' joined');
  });

  // Server schickt "user left": Benutzer, der gegangen ist, im Chat-Protokoll anzeigen
  socket.on('user left', function (data) {
    log(data + ' left');
  });
});
```

## Ausprobieren

1. Geschafft, jetzt können wir unseren Chat ausprobieren. Starte dazu das Kommando `node server.js` in der Kommandozeile. Es müsste die Meldung erscheinen `Webserver läuft und hört auf Port 3000`.<br/>
![Node.js starten](nodejs-webserver/nodejs-starten.png)

6. Starte einen Webbrowser und öffne die URL `http://localhost:3000/chat.html`. Du müsstest eine Anmeldeseite sehen.<br/>
![Leere Anmeldeseite](nodejs-socketio-chat/anmeldeseite.png)

6. Gib einen Benutzernamen ein und drücke *Return*. Ich verwendet als erstes den Namen *Rainer*. Du müsstes jetzt angemeldet sein.<br/>
![Leere Anmeldeseite](nodejs-socketio-chat/angemeldet.png)

6. Öffne einen zweiten Webbrowser und melde dich dort mit einem anderen Benutzernamen an. Jetzt müsste im ersten Browser eine Meldung zu sehen sein, dass sich ein zweiter Browser angemeldet hat.<br/>
![Leere Anmeldeseite](nodejs-socketio-chat/zwei-browser-angemeldet.png)

6. Jetzt kannst du ausprobieren, ob sich die Benutzer gegenseitig Nachrichten schicken können. Viel Spaß!<br/>
![Leere Anmeldeseite](nodejs-socketio-chat/chatting.png)

## Chat mit Passwort sichern

Damit nicht jeder einfach in deinem Chat mitlesen kann, kannst du die Applikation mit einem Passwort sichern. Installiere dazu in der Kommandozeile das Paket express-basic-auth mit dem Befehl `npm install express-basic-auth --save` (*Achtung:* Bevor du ihn ausführst, stelle sicher, dass du im Verzeichnis *C:\Code\Chat* bist). 

Jetzt kannst du den Code in server.js um folgende Zeilen erweitern:

```javascript
// Mit diesem Kommando starten wir den Webserver.
var port = process.env.PORT || 3000;
app.use(require('express-basic-auth')({
  users: { 'admin': 'password' }, // vergib hier deine gewünschten Benutzernamen und Passwörter
  challenge: true
}));
server.listen(port, function () {
  // Wir geben einen Hinweis aus, dass der Webserer läuft.
  console.log('Webserver läuft und hört auf Port %d', port);
});
```

Wenn du den Webserver jetzt wieder mit `node server.js` startest und dann deine Seite `localhost:3000/index.html` öffnest, bekommst zu einen Dialog zum Eingeben deines Usernamen und deines Passworts angezeigt.

![Authentifizierung](nodejs-socketio-chat/basic-authentication.png)

## Was als nächstes?

Hier noch einige Ideen, die du dir erarbeiten oder mit deinen Mentoren durchgehen kannst:

* Debugging des JavaScripts am Client.<br/>
[Hier](https://developer.chrome.com/devtools/docs/javascript-debugging) findest du eine Anleitung, wie das im Chrome-Browser funktioniert.

* Veröffentlichen der Anwendung im Internet (siehe auch [Linksammlung](/infos/linksammlung.html)).

* Möchtest du deine Webseite im Internet veröffentlichen? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/dreamspark-azure.html).