---
layout: sushi
title: Space Shooter mit Phaser.io
description: In dieser Übung programmierst du einen Space Shooter mit TypeScript und Phaser.io
---

# Space Shooter mit Phaser.io

## Ziel der Übung

In unserem Dojo hast du möglicherweise schon bei den Scratch-Übungen den [Space Shooter](http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-space-shooter.html) erstellt. Falls nicht, wirf bitte vor diesem Beispiel einen Blick auf die Space Shooter Scratch Übung und [probiere die Scratch-Implementierung aus](https://scratch.mit.edu/projects/70593136/). Unser Ziel ist es, diesen Space Shooter mit Web-Technologien für den Browser zu entwickeln.

![Space Shooter](space-shooter/phaser-space-shooter.png)

**Bitte beachte, dass dieses Beispiel keine Übung für Anfänger ist!** Falls HTML, JavaScript, Node.js und [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code") für dich neu sind, mache dich erst mit diesen Technologien und Werkzeugen vertraut. Dazu sind folgende Übungsanleitungen zu empfehlen:

* HTML Grundlagen: [Baue deine erste Webseite](http://coderdojo-linz.github.io/trainingsanleitungen/web/html-meine-erste-webseite.html)
* JavaScript Grundlagen: [Zahlen raten](http://coderdojo-linz.github.io/trainingsanleitungen/web/javascript-zahlen-raten.html)
* Node.js Grundlagen: [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html)

## Systemvoraussetzungen

Du brauchst für diese Übung folgende Tools:

* [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code") (kurz *VSCode*)
* [ESLint-Erweiterung für VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Node.js](https://nodejs.org)

Du kannst das Beispiel unter Windows, Linux oder MacOS bauen. Alle verwendeten Tools sind plattformunabhängig.

## Node.js und NPM einrichten

Unser Projekt verwendet eine Reihe von Node.js Modulen. Diese müssen mit *npm*, den *Node Package Manager* installiert werden.

1. Lade den Code, den du zum Starten brauchst, [von GitHub herunter](https://github.com/rstropek/ts-space-shooter-starter/tree/master):
   ![Download GitHub](space-shooter/GitDownload.png)

1. Pro Tipp: Weißt du schon, was *Git* ist? Natürlich kannst du dann das GitHub Repository auch *klonen*. Es macht nichts, wenn du noch nicht weißt, was das bedeutet.

1. Kopiere den Inhalt der ZIP-Datei, die du heruntergeladen hast, in ein *neues, leeres Verzeichnis*. In dieser Anleitung gehe ich davon aus, dass du das Verzeichnis *c:\temp\shooter* genannt hast.

1. Öffne das *shooter* Verzeichnis in *Visual Studio Code*:
   ![Open Folder VSCode](space-shooter/VSCodeOpenFolder.png)

1. Öffne das *Terminal* in VSCode (*Strg+ö*).

1. Installiere die Node.js Module mit dem Befehl `npm install`. Das wird einen Moment dauern.

1. Starte das Programm mit dem Befehl `npm start`.

1. Jetzt müsste ein Browserfenster aufgehen und du müsstest eine Meldung wie diese sehen:
   ![Starter Code Run](space-shooter/StarterRun.png)

**Hinweis:** Im Startcode, den du gerade heruntergeladen hast, stecken eine Menge interessante (aber nicht einfache) Details rund um Webentwicklung. Auf die gehen wir hier nicht ein. Wer aber schon mehr Erfahrung mit Webentwicklung hat, der kann in den vorgefertigten Code reinschauen und versuchen, Teile davon zu verstehen.

## Mentoring-Tipp

Hinweis für Mentorinnen und Mentoren: Alle Schritte dieses Spiels findest du als [*Branches* auf GitHub](https://github.com/rstropek/ts-space-shooter-starter/branches/all).

## Spiel Starten und Hintergrund zeichnen

Öffne die Datei *src/index.ts* in VSCode.

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/f91df134e08104aab4ebebc051051a96ec97411b) durch. Danach sollte die *index.ts*-Datei so aussehen:

```ts
import { Scene, CANVAS, Game } from 'phaser';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und schau, ob du das Spielfeld mit dem Hintergrundbild siehst. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

## Spaceship hinzufügen

Öffne die Datei *src/index.ts* in VSCode.

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/5c1fa52b81bb533c5622bf773a2aab786cf6a63f) durch. Danach sollte die *index.ts*-Datei so aussehen:

```ts
import { Scene, CANVAS, Game, GameObjects } from 'phaser';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: GameObjects.Image;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Add the sprite for our space ship.
        this.spaceShip = this.add.image(0, 0, 'ship');
        this.physics.add.existing(this.spaceShip);

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und schau, ob jetzt auch das Spaceship angezeigt wird. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

## Spaceship bewegen

Öffne die Datei *src/index.ts* in VSCode.

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/7fe124e0b58011b9bccced8ac68b6a1a58a7f171) durch. Danach sollte die *index.ts*-Datei so aussehen:

```ts
import { Scene, Types, CANVAS, Game, GameObjects } from 'phaser';

/** Possible movement directions */
export enum Direction {
    Left = -1, 
    Right = 1 
}

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: GameObjects.Image;
    private speed: number;
    private cursors: Types.Input.Keyboard.CursorKeys;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');

        this.speed = Phaser.Math.GetSpeed(200, 1);
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Add the sprite for our space ship.
        this.spaceShip = this.add.image(0, 0, 'ship');
        this.physics.add.existing(this.spaceShip);

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.move(delta, Direction.Right);
        }
    }
    
    move(delta: number, direction: Direction) {
        // Change position
        this.spaceShip.x += this.speed * delta * direction;

        // Make sure spaceship cannot leave world boundaries
        this.spaceShip.x = Phaser.Math.Clamp(this.spaceShip.x, this.spaceShip.width / 2,
            this.game.canvas.width - this.spaceShip.width / 2);
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und probiere, ob du mit den Cursortasten das Spaceship bewegen kannst. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

**Idee für eigene Erweiterung:**

1. Schaffst du es, den Code so zu ändern, dass man das Raumschiff auch nach oben mit den entsprechenden Cursortasten bewegen kann?

## Spaceship in eigene Dateien

Unser Code in *index.ts* wird langsam zu lang und unübersichtlich. Wir wollen jetzt den Code in mehrere Dateien und *Klassen* aufteilen.

*Mentoring-Tipp:* Verwende diesen Schritt, um über Klassen und Vererbung zu sprechen.

Öffne die Datei *src/index.ts* in VSCode.

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/59653738be2aec95c17659156f58852e2504debf) durch. Danach sollte die *index.ts*-Datei so aussehen:

```ts
import { Scene, Types, CANVAS, Game } from 'phaser';
import { Spaceship, Direction } from './spaceship';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private cursors: Types.Input.Keyboard.CursorKeys;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Füge außerdem die Datei *src/shooterImage.ts* hinzu:

```ts
import { GameObjects } from 'phaser';

/**
* ShooterImage is the base class for all images in our space shooter game.
* 
* Technically, a shooter image is a Phaser Image. Learn more about images at
* https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html.
**/
export class ShooterImage extends GameObjects.Image {
    protected speed: number;
    protected sceneHeight: number;
    protected sceneWidth: number;

    constructor(scene: Phaser.Scene, texture: string, speedDistance: number) {
        // Initialize the Phaser image
        super(scene, 0, 0, texture);

        // Store the size of the scene, we will need it later
        this.sceneHeight = scene.game.canvas.height;
        this.sceneWidth = scene.game.canvas.width;

        // Calculate the speed
        this.speed = Phaser.Math.GetSpeed(speedDistance, 1);
    }

    protected activate() {
        this.setActive(true);
        this.setVisible(true);
    }

    kill() {
        this.setActive(false);
        this.setVisible(false);
    }
}
```

Zum Abschluss brauchst du die Datei *src/spaceship.ts*:

```ts
import { ShooterImage } from './shooterImage';

/** Possible movement directions */
export enum Direction {
    Left = -1, 
    Right = 1 
}

/** Spaceship that can move left and right */
export class Spaceship extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'ship', 200);

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.setPosition(scene.game.canvas.width / 2, scene.game.canvas.height * 0.9);
    }

    move(delta: number, direction: Direction) {
        // Change position
        this.x += this.speed * delta * direction;

        // Make sure spaceship cannot leave world boundaries
        this.x = Phaser.Math.Clamp(this.x, this.width / 2,
            this.sceneWidth - this.width / 2);
    }
}
```

Wechsle zurück zum Browser und probiere, ob du mit den Cursortasten das Spaceship immer noch bewegen kannst. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

## Laser feuern

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/7fe124e0b58011b9bccced8ac68b6a1a58a7f171) durch. Sie bestehen aus folgenden Schritten:

Füge die Datei *src/bullet.ts* hinzu:

```ts
import { ShooterImage } from './shooterImage';

/**
 * Bullet that the spaceship can fire
 * 
 * This class represents a bullet that a spaceship can fire. Bullets are
 * started by calling the fire method. They fly from bottom to top.
 * A bullet is killed if it reaches the top border of the world.
 */
export class Bullet extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'bullet', 400);
    }

    fire(x: number, y: number) {
        // Start a little bit above the given coordinates
        // because this will be the coordinates of the spaceship.
        this.setPosition(x, y - 50);
        this.activate();
    }

    update(_, delta: number) {
        if (this.y < -50) {
            // Bullet has left world on the top border. We have to kill it.
            this.kill();
        }
        
        this.y -= this.speed * delta;
    }
}
```

Öffne die Datei *src/index.ts* in VSCode und ändere sie auf folgenden Inhalt:

```ts
import { Scene, Types, CANVAS, Game, Physics, Input } from 'phaser';
import { Spaceship, Direction } from './spaceship';
import { Bullet } from './bullet';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private bullets: Physics.Arcade.Group;

    private bulletTime = 0;

    private cursors: Types.Input.Keyboard.CursorKeys;
    private spaceKey: Input.Keyboard.Key;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Create bullets and meteors
        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addCapture([' ']);
        this.spaceKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }

        if (this.spaceKey.isDown) {
            this.fireBullet();
        }
    }

    fireBullet() {
        if (this.time.now > this.bulletTime) {
            // Find the first unused (=unfired) bullet
            const bullet = this.bullets.get() as Bullet;
            if (bullet) {
                bullet.fire(this.spaceShip.x, this.spaceShip.y);
                this.bulletTime = this.time.now + 100;
            }
        }
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und probiere, ob du mit der Leertaste Laserschüsse abfeuern kannst. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

**Ideen für eigene Erweiterungen:**

1. *Schwierigkeitsstufe 1*: Im Code siehst du, wie man auf Tasten reagieren kann. Ändere den Code so, dass du das Spaceship mit den Tasten A und D bewegen kannst, anstatt dafür die Cursortasten zu verwenden.

1. *Schwierigkeitsstufe 2*: Man kann nur eine gewisse Anzahl an Laserschüsse pro Sekunde abfeuern. Suche im Code den Teil, der diese Anzahl steuert und probiere, viel mehr und/oder viel weniger Schüsse pro Sekunde zu erlauben.

2. *Schwierigkeitsstufe 3*: Limitiere die Anzahl der verfügbaren Schüsse. Wenn man eine gewisse Anzahl an Schüssen abgegeben hat, dann müssen sich die "Lasergeneratoren" erst wieder aufladen und man kann erst danach wieder feuern.

## Meteoriten

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/659db3bc6ac1badd024b76dce29c7e82a242b1b8) durch. Sie bestehen aus folgenden Schritten:

Füge die Datei *src/meteor.ts* hinzu:

```ts
import { ShooterImage } from './shooterImage';

/**
 * Meteor that falls toward the spaceship
 * 
 * This class represents a meteor that falls toward the spaceship. Meteors are
 * started by calling the fall method. They fly from top to bottom.
 * A meteor is killed if it reaches the bottom border of the world.
 */
export class Meteor extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'meteor', 150);
    }

    fall() {
        // Get a random x position
        this.setPosition(this.sceneWidth * Math.random(), this.sceneHeight / 2 * (-1));
        this.activate();
    }

    update(_, delta: number) {
        if (this.y > this.sceneHeight) {
            // Meteor has left world on the bottom border. We have to kill it.
            this.kill();
        }

        this.y += this.speed * delta;
    }
}
```

Öffne die Datei *src/index.ts* in VSCode und ändere sie auf folgenden Inhalt:

```ts
import { Scene, Types, CANVAS, Game, Physics, Input } from 'phaser';
import { Spaceship, Direction } from './spaceship';
import { Bullet } from './bullet';
import { Meteor } from './meteor';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private meteors: Physics.Arcade.Group;
    private bullets: Physics.Arcade.Group;

    private bulletTime = 0;
    private meteorTime = 0;

    private cursors: Types.Input.Keyboard.CursorKeys;
    private spaceKey: Input.Keyboard.Key;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Create bullets and meteors
        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.meteors = this.physics.add.group({
            classType: Meteor,
            maxSize: 20,
            runChildUpdate: true
        });

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addCapture([' ']);
        this.spaceKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }

        if (this.spaceKey.isDown) {
            this.fireBullet();
        }

        this.handleMeteors();
    }

    fireBullet() {
        if (this.time.now > this.bulletTime) {
            // Find the first unused (=unfired) bullet
            const bullet = this.bullets.get() as Bullet;
            if (bullet) {
                bullet.fire(this.spaceShip.x, this.spaceShip.y);
                this.bulletTime = this.time.now + 100;
            }
        }
    }

    handleMeteors() {
        // Check if it is time to launch a new meteor.
        if (this.time.now > this.meteorTime) {
            // Find first meteor that is currently not used
            const meteor = this.meteors.get() as Meteor;
            if (meteor) {
                meteor.fall();
                this.meteorTime = this.time.now + 500 + 1000 * Math.random();
            }
        }
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und kontrolliere, ob jetzt von oben Meteoriten herunterfallen. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

**Ideen für eigene Erweiterungen:**

1. *Schwierigkeitsstufe 1*: Zeichne eine weitere Art von Meteorit (z.B. größer, andere Farbe) und lasse die Meteoritentypen abwechselnd herunterfallen.

2. *Schwierigkeitsstufe 2*: Die Meteoriten sollen mit der Zeit immer schneller aufeinander folgen (d.h. Frequenz steigt).

3. *Schwierigkeitsstufe 3*: Die Meteoriten sollen mit der Zeit immer schneller herunterfallen (d.h. Geschwindigkeit steigt).

## Laser zerstören Meteoriten

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/801259915bcf12e90fd5eda6d2b1707d097bb92b) an *src/index.ts* durch. Danach sollte die Datei so aussehen:

```ts
import { Scene, Types, CANVAS, Game, Physics, Input } from 'phaser';
import { Spaceship, Direction } from './spaceship';
import { Bullet } from './bullet';
import { Meteor } from './meteor';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private meteors: Physics.Arcade.Group;
    private bullets: Physics.Arcade.Group;

    private bulletTime = 0;
    private meteorTime = 0;

    private cursors: Types.Input.Keyboard.CursorKeys;
    private spaceKey: Input.Keyboard.Key;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Create bullets and meteors
        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.meteors = this.physics.add.group({
            classType: Meteor,
            maxSize: 20,
            runChildUpdate: true
        });

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addCapture([' ']);
        this.spaceKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(this.bullets, this.meteors, (bullet: Bullet, meteor: Meteor) => {
            meteor.kill();
            bullet.kill();
        }, null, this);
    }

    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }

        if (this.spaceKey.isDown) {
            this.fireBullet();
        }

        this.handleMeteors();
    }

    fireBullet() {
        if (this.time.now > this.bulletTime) {
            // Find the first unused (=unfired) bullet
            const bullet = this.bullets.get() as Bullet;
            if (bullet) {
                bullet.fire(this.spaceShip.x, this.spaceShip.y);
                this.bulletTime = this.time.now + 100;
            }
        }
    }

    handleMeteors() {
        // Check if it is time to launch a new meteor.
        if (this.time.now > this.meteorTime) {
            // Find first meteor that is currently not used
            const meteor = this.meteors.get() as Meteor;
            if (meteor) {
                meteor.fall();
                this.meteorTime = this.time.now + 500 + 1000 * Math.random();
            }
        }
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und kontrolliere, ob die Laser jetzt Meteoriten zerstören. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

**Ideen für eigene Erweiterungen:**

1. *Schwierigkeitsstufe 1*: Wenn ein Laser einen Meteoriten trifft, soll er nicht verschwinden, sondern weiterfliegen. Damit kann man mehrere Meteoriten mit einem Schuss zerstören.

2. *Schwierigkeitsstufe 2*: Verändere die Größe der Meteoriten zufällig. Versuche, aus [diesem Beispiel](https://phaser.io/examples/v3/view/transform/scalexy) herauszufinden, wie das geht.

## Game Over

Führe [diese Änderungen](https://github.com/rstropek/ts-space-shooter-starter/commit/0dc23d40bf5cacc5e571ae4c1e2728280b8e0f01) an *src/index.ts* durch. Danach sollte die Datei so aussehen:

```ts
import { Scene, Types, CANVAS, Game, Physics, Input } from 'phaser';
import { Spaceship, Direction } from './spaceship';
import { Bullet } from './bullet';
import { Meteor } from './meteor';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private meteors: Physics.Arcade.Group;
    private bullets: Physics.Arcade.Group;

    private bulletTime = 0;
    private meteorTime = 0;

    private cursors: Types.Input.Keyboard.CursorKeys;
    private spaceKey: Input.Keyboard.Key;
    private isGameOver = false;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        if (this.isGameOver) {
            return;
        }
        
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Create bullets and meteors
        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });
        this.meteors = this.physics.add.group({
            classType: Meteor,
            maxSize: 20,
            runChildUpdate: true
        });

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addCapture([' ']);
        this.spaceKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(this.bullets, this.meteors, (bullet: Bullet, meteor: Meteor) => {
            meteor.kill();
            bullet.kill();
        }, null, this);
        this.physics.add.collider(this.spaceShip, this.meteors, this.gameOver, null, this);
    }

    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }

        if (this.spaceKey.isDown) {
            this.fireBullet();
        }

        this.handleMeteors();
    }

    fireBullet() {
        if (this.time.now > this.bulletTime) {
            // Find the first unused (=unfired) bullet
            const bullet = this.bullets.get() as Bullet;
            if (bullet) {
                bullet.fire(this.spaceShip.x, this.spaceShip.y);
                this.bulletTime = this.time.now + 100;
            }
        }
    }

    handleMeteors() {
        // Check if it is time to launch a new meteor.
        if (this.time.now > this.meteorTime) {
            // Find first meteor that is currently not used
            const meteor = this.meteors.get() as Meteor;
            if (meteor) {
                meteor.fall();
                this.meteorTime = this.time.now + 500 + 1000 * Math.random();
            }
        }
    }

    gameOver() {
        this.isGameOver = true;

        this.bullets.getChildren().forEach((b: Bullet) => b.kill());
        this.meteors.getChildren().forEach((m: Meteor) => m.kill());
        this.spaceShip.kill();

        // Display "game over" text
        const text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Game Over :-(", 
            { font: "65px Arial", fill: "#ff0044", align: "center" });
        text.setOrigin(0.5, 0.5);
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
```

Wechsle zurück zum Browser und kontrolliere, ob *Game Over* erscheint, wenn das Spaceship von einem Meteoriten getroffen wird. Lies den Code genau durch und versuche ihn zu verstehen. Experimentiere ruhig ein wenig und schau, was deine Codeänderungen für Auswirkungen haben.

**Ideen für eigene Erweiterungen:**

1. *Schwierigkeitsstufe 1*: Zähle mit, wie viele Meteoriten schon getroffen wurden und zeige am *Game Over*-Bildschirm die erreichte Anzahl an. Für diese Zusatzaufgabe haben wir im Branch *09-points* eine Musterlösung ausgearbeitet. [Notendige Änderungen...](https://github.com/rstropek/ts-space-shooter-starter/commit/70414ec4a6301ac98c59c12580699ec635533f95)

1. *Schwierigkeitsstufe 2*: Zeige den aktuellen Punktestand laufend am Spielfeldrand an.

1. *Schwierigkeitsstufe 3*: Erlaube durch Drücken einer Taste (z.B. X) as Neustarten des Spiels vom *Game Over* Bildschirm aus.

## Spielen :-)

**Viel Spaß beim Spielen!**
