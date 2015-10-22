---
layout: sushi
title: Space Shooter mit Phaser.io
description: In dieser Übung programmierst du einen Space Shooter mit TypeScript und Phaser.io
---

# Space Shooter mit Phaser.io

## Ziel der Übung

In unserem Dojo hast du möglicherweise schon bei den Scratch-Übungen den [Space Shooter](http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-space-shooter.html){:target="_blank"} erstellt. Falls nicht, wirf bitte vor diesem Beispiel einen Blick auf die Space Shooter Scratch Übung und [probiere die Scratch-Implementierung aus](https://scratch.mit.edu/projects/70593136/){:target="_blank"}. Unser Ziel ist es, diesen Space Shooter mit Web-Technologien für den Browser zu entwickeln.

![Space Shooter](space-shooter/phaser-space-shooter.png)

**Bitte beachte, dass dieses Beispiel keine Übung für Anfänger ist!** Falls HTML, JavaScript, Node.js und [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} für dich neu sind, mache dich erst mit diesen Technologien und Werkzeugen vertraut. Dazu sind folgende Übungsbeispiele zu empfehlen:

* HTML Grundlagen: [Baue deine erste Webseite](http://coderdojo-linz.github.io/trainingsanleitungen/web/html-meine-erste-webseite.html)
* JavaScript Grundlagen: [Zahlen raten](http://coderdojo-linz.github.io/trainingsanleitungen/web/javascript-zahlen-raten.html)
* Node.js Grundlagen: [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html)

## Systemvoraussetzungen

Du brauchst für diese Übung die gleichen Tools, die schon in der oben genannten Übung [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html) erwähnt sind. Falls du die Übung schon gemacht hast, hast du schon alle notwendigen Tools. Falls nicht, schau dort bitte nach.

Du kannst das Beispiel unter Windows, Linux oder MacOS bauen. Alle verwendeten Tools sind plattformunabhängig.

## Node.js und NPM einrichten

Unser Projekt verwendet eine Reihe von Node.js Modulen. Diese müssen mit *npm*, den *Node Package Manager* installiert werden.

1. Wir möchten, dass die Abhängigkeiten in einer Konfigurationsdatei gespeichert sind, damit wir sie später leicht wieder aus dem Internet herunterladen können. Die Konfigurationsdatei für Node.js heißt *package.json*. Du erstellst sie mit der Kommandozeile *npm init*. *npm* wird dich um einige Informationen über dein Projekt wie z.B. Beschreibung fragen. Gib bitte folgende Daten ein. Danach müsste es eine Datei *package.json* geben.

        C:\temp\shooter>npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.
        
        See `npm help json` for definitive documentation on these fields
        and exactly what they do.
        
        Use `npm install <pkg> --save` afterwards to install a package and
        save it as a dependency in the package.json file.
        
        Press ^C at any time to quit.
        name: (shooter) space-shooter
        version: (1.0.0)
        description: Space Shooter - CoderDojo Linz
        entry point: (index.js) server.js
        test command:
        git repository:
        keywords:
        author: Rainer Stropek
        license: (ISC) MIT
        About to write to C:\temp\shooter\package.json:
        
        {
          "name": "space-shooter",
          "version": "1.0.0",
          "description": "Space Shooter - CoderDojo Linz",
          "main": "server.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Rainer Stropek",
          "license": "MIT"
        }
        
        
        Is this ok? (yes) y
        
        C:\temp\shooter>

2. Jetzt installieren wir die notwendigen Node.js Module. Für den Server brauchen wir *express*, für das Game am Client verwenden wir die Game-Engine [Phaser.io](http://phaser.io/){:target="_blank"}. Installiere die beiden Module mit Hilfe der Kommandozeile `npm install express phaser --save`. Schau danach in deine *package.json* Datei. Dort müssten die beiden Module vermerkt sein.

## Gulp und TypeScript einrichten

Wir werden unseren Space Shooter mit [TypeScript](http://www.typescriptlang.org){:target="_blank"} programmieren. TypeScript baut auf JavaScript auf. Aus dem TypeScript Code wird JavaScript erzeugt. TypeScript erleichtert die Programmierung mit JavaScript ganz enorm.

Um das Umwandeln von TypeScript in JavaScript (dieser Schritt wird als *TypeScript in JavaScript kompilieren* bezeichnet) zu automatisieren, verwenden wir einen sogenannten *Task Runner*, in diesem Fall das weit verbreitete Tool [Gulp](http://gulpjs.com/){:target="_blank"}.

**Besprich mit deinem CoderDojo Mentor, was genau Gulp macht und wie das Kompilieren abläuft.**

1. Installiere *Gulp* auf deinem Computer mit der Kommandozeile `npm install --global gulp`.

2. Installiere *TypeScript* auf deinem Computer mit der Kommandozeile `npm install -g typescript`. Falls du *Visual Studio* verwendest, kannst du alternativ auch den TypeScript Installer [herunterladen und installieren](http://www.typescriptlang.org/){:target="_blank"}.

3. Installiere das Tool *TSD* auf deinem Computer mit der Kommandozeile `npm install -g tsd`. Wir werden es in einem der nächsten Schritte brauchen.

3. Installiere in dein Projekt alle *Gulp*-Plugins, die wir brauchen. Das machst du mit der Kommandozeile `npm install del gulp gulp-changed gulp-concat gulp-debug gulp-newer gulp-sourcemaps gulp-typescript gulp-uglify tsd typescript --save-dev`. Schau danach in deine *package.json* Datei. Dort müssten die neuen Module vermerkt sein.

4. Für TypeScript brauchen wir *Type Definitions*. Das sind Dateien, die Informationen darüber enthalten, was die verschiedenen Module wie *express* oder *phaser* können. TypeScript verwendet diese Informationen, um dich z.B. darauf hinzuweisen, falls du dich bei einem Methodennamen vertippst. Die Type Definitions für unsere Module installierst du mit folgenden Kommandozeilen.

        tsd init
        tsd install node express serve-static mime --save

5. Mach dich mit den entstandenen Dateien und Verzeichnissen vertraut. Frage deinen CoderDojo Mentor, wenn dir etwas nicht klar ist. Dein Projekt sollte jetzt in etwa so aussehen:

        C:\temp\shooter>dir
        ...         
        14.08.2015  10:29    <DIR>          .
        14.08.2015  10:29    <DIR>          ..
        14.08.2015  10:24    <DIR>          node_modules
        14.08.2015  10:25               657 package.json
        14.08.2015  10:30               538 tsd.json
        14.08.2015  10:30    <DIR>          typings
        ...         

        C:\temp\shooter>dir node_modules
        ...         
        14.08.2015  10:24    <DIR>          .
        14.08.2015  10:24    <DIR>          ..
        14.08.2015  10:25    <DIR>          .bin
        14.08.2015  10:24    <DIR>          del
        14.08.2015  10:10    <DIR>          express
        14.08.2015  10:24    <DIR>          gulp
        14.08.2015  10:24    <DIR>          gulp-changed
        14.08.2015  10:24    <DIR>          gulp-concat
        14.08.2015  10:24    <DIR>          gulp-debug
        14.08.2015  10:24    <DIR>          gulp-newer
        14.08.2015  10:24    <DIR>          gulp-sourcemaps
        14.08.2015  10:25    <DIR>          gulp-typescript
        14.08.2015  10:24    <DIR>          gulp-uglify
        14.08.2015  10:10    <DIR>          phaser
        14.08.2015  10:24    <DIR>          tsd
        14.08.2015  10:25    <DIR>          typescript
        ...         

        C:\temp\shooter>dir typings
        ...         
        14.08.2015  10:30    <DIR>          .
        14.08.2015  10:30    <DIR>          ..
        14.08.2015  10:30    <DIR>          express
        14.08.2015  10:30    <DIR>          mime
        14.08.2015  10:30    <DIR>          node
        14.08.2015  10:30    <DIR>          serve-static
        14.08.2015  10:30               183 tsd.d.ts

# Gulpfile anlegen

Wie erwähnt verwenden wir Gulp, um unseren TypeScript-Code in JavaScript zu kompilieren.

1. Erstelle die Datei *Gulpfile.js* mit [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} und füge folgenden Code ein.

        /// <binding ProjectOpened='sass:watch, typescript:watch' />
        	// Include all the necessary plugins
        var gulp = require("gulp");
        var concat = require("gulp-concat");
        var uglify = require("gulp-uglify");
        var del = require("del");
        var ts = require("gulp-typescript");
        var sourcemaps = require("gulp-sourcemaps");
        var changed = require("gulp-changed");
        var newer = require('gulp-newer');
        var debug = require("gulp-debug");
        
        // Helper arrays holding file and folder names for later use in this gruntfile
        // External script dependencies
        var dependencyScripts = ["node_modules/phaser/dist/phaser.js"];
        // TypeScript sources
        var typescriptFiles = ["./client/**/*.ts"];
        
        // Delete build targets to clean up
        gulp.task("clean", function () {
        	del.sync(["./client/**/*.js", "./server.js"]);
        });
        
        // Combine all external scripts (don't minify as this is for learning purposes)
        gulp.task("dependencyScriptsAndStyles", [], function () {
        	// External scripts
        	gulp.src(dependencyScripts)
        		.pipe(newer("client/scripts/dependencies.js"))
        		.pipe(concat("dependencies.js"))
        		.pipe(gulp.dest("client/scripts/"));
        });
        
        // Process TypeScript files
        gulp.task("typescript", [], function () {
        	gulp.src("./*.ts")
        		.pipe(newer("server.js"))
        		.pipe(sourcemaps.init())
        		.pipe(ts({
        			out: "server.js",
        			target: "ES5",
        			
        		}))
        		.pipe(sourcemaps.write("./"))
        		.pipe(gulp.dest("./"));
        		
        	return gulp.src(typescriptFiles)
        		.pipe(newer("client/scripts/app.js"))
        		.pipe(sourcemaps.init())
        		.pipe(ts({
        			out: "app.js",
        			target: "ES5",
        			
        		}))
        		.pipe(sourcemaps.write("./"))
        		.pipe(gulp.dest("client/scripts"));
        });
        
        // Watch tasks for TypeScript sources
        gulp.task("typescript:watch", function () {
        	gulp.watch(["./*.ts", "./client/**/*.ts"], ["typescript"]);
        });
        
        // Set a default tasks
        gulp.task("default", ["clean", "typescript", "dependencyScriptsAndStyles"], function () { });

2. **Sprich mit deinem Mentor, wenn du Fragen zum Code hast**.

# Webserver anlegen

Wie im Beispiel [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html) im Detail erklärt, verwenden wir auch hier Node.js als Webserver für unser Game.

1. Erstelle die Datei *server.ts* mit [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} und füge folgenden Code ein. **Achte beim Programmieren darauf, wie dich der Editor dabei unterstützt, indem er dir Vorschläge für z.B. Methodennamen anbietet.** Das ist der große Vorteil von TypeScript.

        /// <reference path="typings/tsd.d.ts" />
        
        // express und http Module importieren. Sie sind dazu da, die HTML-Dateien
        // aus dem Ordner "public" zu veröffentlichen.
        var express = require('express');
        var app = express();
        var server = require('http').createServer(app);
        var port = 3000;
            
         // Mit diesem Kommando starten wir den Webserver.
        server.listen(port, function () {
        	// Wir geben einen Hinweis aus, dass der Webserer läuft.
        	console.log('Webserver läuft und hört auf Port %d', port);
        });
            
        // Hier teilen wir express mit, dass die öffentlichen HTML-Dateien
        // im Ordner "public" zu finden sind.
        app.use(express.static(__dirname + '/client'));

2. **Sprich mit deinem Mentor, wenn du Fragen zum Code hast**.

2. Jetzt kannst du zum ersten Mal *Gulp* verwenden, um die gerade angelegte Datei *server.ts* in JavaScript zu übersetzen. Gib einfach in der Kommandozeile `gulp` ein. Danach müsstest du eine Datei *server.js* haben.

        C:\temp\shooter>gulp
        [10:40:07] Using gulpfile C:\temp\shooter\Gulpfile.js
        [10:40:07] Starting 'clean'...
        [10:40:07] Finished 'clean' after 4.25 ms
        [10:40:07] Starting 'typescript'...
        [10:40:08] Starting 'dependencyScriptsAndStyles'...
        [10:40:08] Finished 'dependencyScriptsAndStyles' after 2.74 ms
        [10:40:08] Finished 'typescript' after 28 ms
        [10:40:08] Starting 'default'...
        [10:40:08] Finished 'default' after 3.8 µs
        
        C:\temp\shooter>

# Client anlegen

Jetzt haben wir den Server, also legen wir mit dem Client und dem Game los.

1. Erstelle einen Ordner `client` falls er noch nicht existiert (er sollte durch *Gulp* schon angelegt worden sein).

2. Erstelle die Datei *default.html* **im Ordner `client`** mit [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} und füge folgenden Code ein. Wie du siehst ist die HTML-Datei praktisch leer. Das ist OK so.

        <!DOCTYPE html>
        
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>TypeScript HTML App</title>
            <script src="scripts/dependencies.js"></script>
            <script src="scripts/app.js"></script>
        </head>
        <body>
        </body>
        </html>

# Das Game

Jetzt programmieren wir das Space Shooter Game.

1. Erstelle die Datei *app.ts* **im Ordner `client`** mit [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"}.

2. Hier ist der Code unseres Games. **Achte auf die Kommentare im Quellcode. Versuch den Quellcode zu verstehen. Lies dazu bei den angegebenen URLs nach und sprich mit deinem Mentor über den Code.**

        /// <reference path="../typings/tsd.d.ts" />
        /// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
        
        var game = new Phaser.Game(
            512,                // Game width 
            512,                // Game height
            Phaser.CANVAS,      // Use HTML5 canvas for rendering (see also http://www.w3schools.com/html/html5_canvas.asp)
            '',                 // No parent 
            // Set methods for initializing, creating, and updating our game
            { preload: preload, create: create, update: update });
        
        function preload() {
            // Preload images so that we can use them in our game
            game.load.image('space', 'images/deep-space.jpg');
            game.load.image('bullet', 'images/scratch-laser.png');
            game.load.image('ship', 'images/scratch-spaceship.png');
            game.load.image('meteor', 'images/scratch-meteor.png')
        }
        
        // Declare variables for spaceship, bullets, and meteors
        var spaceShip: Phaser.Sprite;
        var spaceShipBody: Phaser.Physics.Arcade.Body;
        
        var bullets: Phaser.Group;
        var bulletTime = 0;     // Helper storing the time when next bullet can be fired
        
        var meteors: Phaser.Group;
        var nextMeteorTime = 0; // Helper storing the time when next meteor should appear
        
        var cursors: Phaser.CursorKeys; // Cursor keys to control space ship
        var gameIsOver = false; // Indicating whether the game is over (ship hit by meteor)
        
        function create() {
            // We have a filling background image -> disable clearBeforeRender to make game run faster. 
            // (see http://phaser.io/docs/2.4.2/PIXI.CanvasRenderer.html#clearBeforeRender for details)
            game.renderer.clearBeforeRender = false;
        
            //  We want arcade physics.
            // (see http://phaser.io/docs#arcadephysics for details)
            game.physics.startSystem(Phaser.Physics.ARCADE);
        
            //  Add a background
            game.add.tileSprite(0, 0, game.width, game.height, 'space');
        
            // Create bullets and meteors
            bullets = createSpriteGroup("bullet");
            meteors = createSpriteGroup("meteor");
        
            // Add the sprite for our space ship.
            spaceShip = game.add.sprite(
                game.world.centerX,         // Center ship horizontally           
                game.world.height * 0.9,    // Put ship in the lower part of the world 
                'ship');
            spaceShip.anchor.set(0.5);      // Set origin to middle of the sprite
            
            // Enable physics for our space ship and store ship body for later use
            // (see http://phaser.io/docs#physics for details)
            game.physics.enable(spaceShip, Phaser.Physics.ARCADE);
            spaceShipBody = spaceShip.body;
        
            // Setup game input handling
            cursors = game.input.keyboard.createCursorKeys();
            game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        }
        
        function update() {
            // Do nothing if game is already over
            if (gameIsOver) {
                return;
            }
            
            // Move ship if cursor keys are pressed
            if (cursors.left.isDown) {
                spaceShipBody.x -= 5;
            }
            else if (cursors.right.isDown) {
                spaceShipBody.x += 5;
            }
        
            // Fire if spacebar is pressed
            if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                fireBullet();
            }
        
            // Launch new meteors if necessary
            handleMeteors();
            
            // Handle screen wraps
            screenWrap();
        
            // Check for overlappings of spaceship and meteors. If there
            // is an overlap, spacewhip was hit -> game over
            game.physics.arcade.overlap(spaceShip, meteors, gameOver);
            
            // Check for overlappings of bullets and meteors. If there
            // is an overlap, meteor was hit by a bullet -> remove meteor
            game.physics.arcade.overlap(bullets, meteors,
                (bullet, meteor: Phaser.Sprite) => meteor.kill());
        }
        
        function gameOver() {
            // Set game over indicator
            gameIsOver = true;
            
            // Kill all sprites
            bullets.forEachExists((b: Phaser.Sprite) => b.kill(), this);
            meteors.forEachExists((m: Phaser.Sprite) => m.kill(), this);
            spaceShip.kill();
        
            // Display "game over" text
            var text = game.add.text(game.world.centerX, game.world.centerY, "Game Over :-(", { font: "65px Arial", fill: "#ff0044", align: "center" });
            text.anchor.setTo(0.5, 0.5);
        }
        
        function handleMeteors() {
            // Check if it is time to launch a new meteor.
            if (game.time.now > nextMeteorTime) {
                // Find first meteor that is currently not used
                var meteor = <Phaser.Sprite>meteors.getFirstExists(false);
                if (meteor) {
                    // Display meteor at the top of the screen
                    meteor.reset(game.width * Math.random(), meteor.height / 2 * (-1));
                    
                    // Set velocity so that meteor is falling downwards
                    meteor.body.velocity.y = 150 + 150 * Math.random();
                    
                    // Calculate random time for next monitor
                    nextMeteorTime = game.time.now + 500 + 1000 * Math.random();
                }
            }
        }
        
        function fireBullet() {
            // Check if it is time to launch a new bullet.
            if (game.time.now > bulletTime) {
                // Find the first unused (=unfired) bullet
                var bullet = <Phaser.Sprite>bullets.getFirstExists(false);
                if (bullet) {
                    // Display bullet at the current place of the space ship
                    bullet.reset(spaceShip.x, spaceShip.y);
                    
                    // Set velocity so that meteor is flying upwards
                    bullet.body.velocity.y = -400;
                    
                    // Set next time when a new bullet can be fired
                    bulletTime = game.time.now + 50;
                }
            }
        
        }
        
        function screenWrap() {
            // Check if spaceship would move out of left world bounds
            if ((spaceShip.x - spaceShip.width / 2) < 0) {
                spaceShip.x = spaceShip.width / 2;
            }
            // Check if spaceship would move out of right world bounds
            else if (spaceShip.x > (game.world.width - spaceShip.width / 2)) {
                spaceShip.x = game.world.width - spaceShip.width / 2;
            }
            
            // Kill bullets and meteors that are out of the world's bound
            bullets.forEachExists(b => { if ((b.y - b.height / 2) < 0) { b.kill(); } }, this);
            meteors.forEachExists(m => { if ((m.y - m.height / 2) > game.height) { m.kill(); } }, this);
        }
        
        function createSpriteGroup(imageName: string): Phaser.Group {
            // Create bullets and meteors in a group.  
            // (see http://phaser.io/docs/2.4.2/Phaser.GameObjectFactory.html#group for details)
            var group = game.add.group();
            
            // Enable body and physics
            group.enableBody = true;
            group.physicsBodyType = Phaser.Physics.ARCADE;
            
            // Note that we are creating 40 items on stock so that we do not have to create
            // items while the game loop is running. This enhances performance of our game. 
            // Items are going to be displayed when needed.
            group.createMultiple(40, imageName);
            
            // Set origin to middle of the sprite (50% width, 50% height)
            group.setAll('anchor.x', 0.5);
            group.setAll('anchor.y', 0.5);
        
            return group;
        }

3. In der Funktion `preload` werden einige Bilddateien referenziert. Du kannst diese von [Github](https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/master/trainingsanleitungen/web/space-shooter){:target="_blank"} herunterladen. **Speichere sie in dem Ordner `client/images`**.

2. Verwende wieder *Gulp*, um die gerade angelegte Datei *app.ts* in JavaScript zu übersetzen. Gib einfach in der Kommandozeile im Wurzelverzeichnis deines Projekts `gulp` ein.

3. Bessere eventuelle Fehler aus. Falls du dabei Probleme hast, wende dich an deinen Mentor.

## Spielen :-)

Wenn *Gulp* fehlerlos durchläuft, sollte dein Projekt bereit zum Spielen sein.

1. Starte den Node.js Webserver mit der Kommandozeile `node server.js`. Du solltest die Statusmeldung `Webserver läuft und hört auf Port 3000` bekommen.

2. Öffne einen Webbrowser und navigiere zu *http://localhost:3000/default.html*.

Siehst du dein Spiel? **Viel Spaß beim Spielen!**

## Weitere Schritte

Wenn du das Spiel erfolgreich zum Laufen gebracht hast, haben wir hier ein paar Ideen für mögliche Verbesserungen:

* Spielstand aufzeichnen - für jeden abgeschossenen Meteor könntest du Punkte vergeben.
* Das Spiel könnte langsam schwieriger werden, indem die Meteoriten schneller herunterfallen.
* Möchtest du deine Webseite im Internet veröffentlichen? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/dreamspark-azure.html).
* Für Profis: Verwende einen [Phaser Particle Emitter](http://phaser.io/docs#particles){:target="_blank"}, um Meteoriten explodieren zu lassen.
