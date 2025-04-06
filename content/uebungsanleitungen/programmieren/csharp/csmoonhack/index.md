---
title: Moonhack für C#
description: Lande auf dem Mond mit C# und MonoGame
level: 2
img: "csmoonhack/game.png"
aliases:
  - /trainingsanleitungen/csharp/csmoonhack.html
---

# Lande auf dem Mond - mit C#

Damit das Spiel möglichst wie sein Scratch-Zwilling aussieht, kannst du die gleichen Grafiken und Sounds verwenden:
- Den [Hintergrund](assets/backdrop1.png)
- Das [Spritesheet für den Lunar Lander](assets/lunar_lander_sheet.png)
- Die Audiodateien für [das Triebwerk](assets/thruster.wav), [die erfolgreiche Landung](assets/landed.wav) sowie [die Bruchlandung](assets/problem.wav)

## Einrichtung der Programmierumgebung

Du benötigst lokal:
- dotnet ([net8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0))
- eine IDE wie z.B. [Visual Studio](https://my.visualstudio.com/), [Visual Studio Code](https://code.visualstudio.com/) oder [Jetbrains Rider](https://www.jetbrains.com/rider/)
- Unter macOS brauchst du zusätzlich Xcode (aus dem App Store)

Sobald das alles installiert ist, richten wir die `dotnet new` - Templates (Vorlagen) für MonoGame ein:
```
dotnet new install "MonoGame.Templates.CSharp"
```

Dann können wir schon loslegen und ein neues, leeres MonoGame-Projekt erstellen.

## Anlegen des Projekts

{{< imgblock "img/new_project.png" "Neues Projekt" 3 >}}
Das geht relativ einfach, indem man entweder in der IDE ein Template auswählt.
{{< /imgblock >}}

Alternativ kann man das auch von Hand machen (z. B. mit VS Code). Schaut euch einfach die verfügbaren Templates an:
```
> dotnet new list monogame
These templates matched your input: 'monogame'

Template Name                                Short Name   Language  Tags                                      
-------------------------------------------  -----------  --------  ------------------------------------------
MonoGame Android Application                 mgandroid    [C#]      MonoGame/Games/Mobile/Android             
MonoGame Content Pipeline Extension          mgpipeline   [C#]      MonoGame/Games/Extensions                 
MonoGame Cross-Platform Desktop Application  mgdesktopgl  [C#]      MonoGame/Games/Desktop/Windows/Linux/macOS
MonoGame Game Library                        mglib        [C#]      MonoGame/Games/Library                    
MonoGame iOS Application                     mgios        [C#]      MonoGame/Games/Mobile/iOS                 
MonoGame Shared Library Project              mgshared     [C#]      MonoGame/Games/Library                    
MonoGame Windows Desktop Application         mgwindowsdx  [C#]      MonoGame/Games/Desktop/Windows/Linux/macOS
```
Legt ein neues Verzeichnis an und wählt dann das passende Template aus:
```
> mkdir csmoonhack
> cd csmoonhack
> dotnet new mgwindowsdx
```
Dann könnt ihr euer Projekt mit eurer Entwicklungsumgebung (IDE, Integrated Development Environment) öffnen.

## Anpassen des erstellten Codes

Die Vorlage für das Spiel ist ja nun fertig. Zuerst benennen wir die Datei `Game1.cs` in `LunarLanderGame.cs` um. Anschließend die Datei öffnen und dort die Zeile:
```cs
public class Game1 : Game {
```
in
```cs
public class LunarLanderGame : Game {
```
ändern.

In Program.cs müssen wir auch dafür sorgen, dass dort die neue Klasse verwendet wird. Dort wird die Zeile
```cs
using var game = new csmoonhack.Game1();
```
zu
```cs
using var game = new csmoonhack.LunarLanderGame();
```
## Content hinzufügen

Kopiere die im ersten Abschnitt genannten Dateien (`.png` und `.wav`) in das Unterverzeichnis `Content` deines Projekts. Dazu gehören:

- `backdrop1.png`
- `lunar_lander_sheet.png`
- `thruster.wav`
- `landed.wav`
- `problem.wav`

Öffne anschließend die Datei `Content.mgcb`, die sich ebenfalls im `Content`-Ordner befindet. Dort kannst du die Assets zum Projekt hinzufügen und verwalten.

---
> <u>**Info:**</u>   
> Eine `.mgcb`-Datei ist eine Textdatei, die Informationen darüber enthält, welche Dateien vom Content-Pipeline-Tool verarbeitet werden sollen.  
> Jede hinzugefügte Datei wird mit einem `#begin`-Eintrag eingeleitet, gefolgt von Optionen wie z. B. `Importer`, `Processor` und `Build`.  
> Beispiel:
> ```
> #begin backdrop1.png
> /importer:TextureImporter
> /processor:TextureProcessor
> /build:backdrop1.png
> ```
> Diese Datei kannst du entweder mit einem Editor oder bequem mit dem MGCB-Editor bearbeiten, der in Visual Studio als Erweiterung verfügbar ist.
---

Die Datei sollte dann in der Sektion Content wie unten aussehen. Den Rest lassen wir einfach, wie er ist.
```
#---------------------------------- Content ---------------------------------#
#begin backdrop1
/importer:TextureImporter
/processor:TextureProcessor
/build:backdrop1.png

#begin lunar_lander_sheet
/importer:TextureImporter
/processor:TextureProcessor
/build:lunar_lander_sheet.png

#begin thruster
/importer:WavImporter
/processor:SoundEffectProcessor
/build:thruster.wav

#begin problem
/importer:WavImporter
/processor:SoundEffectProcessor
/build:problem.wav

#begin landed
/importer:WavImporter
/processor:SoundEffectProcessor
/build:landed.wav
```

## Variablen und vorbereiten des Spielfelds

Ab hier werden wir die Datei `LunarLanderGame.cs` mit code füllen. Als Erstes brauchen wir einige Variablen, um den aktuellen Spielzustand zu halten. 

- Texturen und Soundeffects
- der aktuelle Sprite-Index (normal, kaputt und mit Triebwerk ein)
- die aktuelle Geschwindigkeit
- die Position über der Mondoberfläche
- die Position als Pixel-Position im Bild
- einen Indikator, ob das Spiel noch läuft oder schon vorbei ist.

Der Anfang der Klasse `LunarLanderGame` sollte dann so aussehen:
```cs
public class LunarLanderGame : Game {
    private const int GAME_UNIT_HEIGHT = 200;

    // wird vom Framework benötigt
    private GraphicsDeviceManager _graphics;
    private SpriteBatch _spriteBatch;

    // Grafiken die von "Content" geladen werden
    private Texture2D _lunarLanderSpriteSheet;
    private Texture2D _backgroundTexture;
    private Rectangle[] _spriteFrames;

    // SoundEffects
    private SoundEffectInstance _thrusterSoundInstance;
    private SoundEffectInstance _landedSoundInstance;
    private SoundEffectInstance _problemSoundInstance;

    // Variablen für das den Spielzustand
    private int _currentSprite;
    private float _speed;
    private float _position;
    private int _absoluteYPos;
    private bool _gameOver;
```
Ausserdem müssen wir im Konstruktor, den wir auch noch auf `LunarLanderGame` umbenennen sollten, noch das Spielfeld einstellen:
```cs
    public LunarLanderGame() {
        _graphics = new GraphicsDeviceManager(this) {
            PreferredBackBufferWidth = 1024,
            PreferredBackBufferHeight = 720,
            GraphicsProfile = GraphicsProfile.HiDef,
            PreferMultiSampling = true
        };
        Content.RootDirectory = "Content";
        IsMouseVisible = true;
    }
```

In der `Initialize` Methode sollten die Zustände für den Spielanfang eingetragen werden:
```cs
    protected override void Initialize() {
        // Initiale Werte für das Spiel
        _speed = 0;
        _gameOver = false;
        _absoluteYPos = 0;
        _currentSprite = 0;

        base.Initialize();
    }
```

## Laden des Content
Die Inhalte, die in `Content.mgcb` eingefügt wurden können wir nun einfach laden. Das Spritesheet müssen wir allerdings noch zerlegen:
```cs
    protected override void LoadContent() {
        _spriteBatch = new SpriteBatch(GraphicsDevice);

        _lunarLanderSpriteSheet = Content.Load<Texture2D>("lunar_lander_sheet");
        _backgroundTexture = Content.Load<Texture2D>("backdrop1");

        // Lade Audio-Dateien
        SoundEffect thrustersSound = Content.Load<SoundEffect>("thruster");
        SoundEffect landedSound = Content.Load<SoundEffect>("landed");
        SoundEffect problemSound = Content.Load<SoundEffect>("problem");

        _thrusterSoundInstance = thrustersSound.CreateInstance();
        _thrusterSoundInstance.IsLooped = true;

        _landedSoundInstance = landedSound.CreateInstance();
        _landedSoundInstance.IsLooped = false;

        _problemSoundInstance = problemSound.CreateInstance();
        _problemSoundInstance.IsLooped = false;

        SliceSpriteSheet();
    }

    private void SliceSpriteSheet() {
        int frameHeight = _lunarLanderSpriteSheet.Height;

        _spriteFrames = new Rectangle[3];
        // Zerlege das SpriteSheet in einzelne Sprites
        int pos = 30;

        _spriteFrames[0] = new Rectangle(pos, 0, 525, frameHeight);
        pos += 525 + 30;

        _spriteFrames[1] = new Rectangle(pos, 0, 931, frameHeight);
        pos += 931 + 30;

        _spriteFrames[2] = new Rectangle(pos, 0, 526, frameHeight);
    }
```

## Die Hauptschleife des Spiels (Update und Draw)

Unsere `Update`-Methode sieht ungefähr so aus:
```cs
    protected override void Update(GameTime gameTime) {
        if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed ||
            Keyboard.GetState().IsKeyDown(Keys.Escape)) {
            Exit();
        }

        if (!_gameOver) {
            TouchCollection touchCollection = TouchPanel.GetState();
            bool isThrusting =
                GamePad.GetState(PlayerIndex.One).Buttons.BigButton == ButtonState.Pressed ||
                (touchCollection.Count > 0 && touchCollection[0].State == TouchLocationState.Pressed) ||
                Keyboard.GetState().IsKeyDown(Keys.Space);

            if (isThrusting) {
                if (_thrusterSoundInstance.State != SoundState.Playing) {
                    _thrusterSoundInstance.Play();
                }
            } else {
                if (_thrusterSoundInstance.State == SoundState.Playing) {
                    _thrusterSoundInstance.Stop();
                }
            }

            CalculateSpritePosition(gameTime, isThrusting);
            CheckLanding();

            // Aktuelle Position des Lunar-Lander berechnen
            _absoluteYPos = (int)(_position * (_graphics.PreferredBackBufferHeight / GAME_UNIT_HEIGHT));
        } else {
            if (_thrusterSoundInstance.State == SoundState.Playing) {
                _thrusterSoundInstance.Stop();
            }
        }
    }
```

Die Hilfsmethoden `CalculateSpritePosition` und `CheckLanding` haben wir ausgelagert und du findest sie hier:
```cs
    private void CheckLanding() {
        if (_position > GAME_UNIT_HEIGHT * 0.95f) {
            // ende nach 95% des spielfelds
            _gameOver = true;
            _position = GAME_UNIT_HEIGHT * 0.95f;

            if (_speed > 10) { // Das war wohl zu schnell
                _currentSprite = 1;
                _problemSoundInstance.Play();
            } else { // Super - wir sind gelanded
                _currentSprite = 0;
                _landedSoundInstance.Play();
            }

            _speed = 0;
        }
    }

    private void CalculateSpritePosition(GameTime gameTime, bool isThrusting) {
        if (isThrusting) {
            _currentSprite = 2;
            _speed -= gameTime.ElapsedGameTime.Milliseconds * 0.05f;
        } else {
            _currentSprite = 0;
            _speed += gameTime.ElapsedGameTime.Milliseconds * 0.01f;
        }

        _position += _speed * gameTime.ElapsedGameTime.Milliseconds * 0.001f;
    }
```

Die `Draw`-Methode kümmert sich um die Skalierung der Figuren und die Darstellung des Spielfelds
```cs
    protected override void Draw(GameTime gameTime) {
        GraphicsDevice.Clear(Color.CornflowerBlue);

        // Hintergrund zeichnen
        _spriteBatch.Begin();
        _spriteBatch.Draw(_backgroundTexture, GraphicsDevice.Viewport.Bounds, Color.White);

        // skalieren des Landers
        float scale = (_graphics.PreferredBackBufferHeight / 5f) / _spriteFrames[_currentSprite].Height;

        int targetWidth = (int)(_spriteFrames[_currentSprite].Width * scale);
        int targetHeight = (int)(_spriteFrames[_currentSprite].Height * scale);
        Rectangle destinationRectangle = new Rectangle(
            (_graphics.PreferredBackBufferWidth - targetWidth) / 2,
            _absoluteYPos,
            targetWidth,
            targetHeight
        );

        // und zeichnen des Landers an seiner aktuellen Position
        _spriteBatch.Draw(_lunarLanderSpriteSheet, destinationRectangle, _spriteFrames[_currentSprite], Color.White);
        _spriteBatch.End();

        base.Draw(gameTime);
    }
``` 

Damit ist das Spiel nun fertig. Viel Spaß damit und viel Erfolg beim Landen auf dem Mond.

## Erweiterungen
Wenn du noch eine Herausforderung suchst, bau doch bitte einen Treibstoffzähler ein, der während des Triebwerkseinsatzes Treibstoff verbraucht. Wie auch in der echten Mondlandefähre ist Treibstoff immer knapp und sollte mit Bedacht eingesetzt werden.