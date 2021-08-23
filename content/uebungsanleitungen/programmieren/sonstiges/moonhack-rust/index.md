---
title: "Moonhack - Rust Edition"
description: "In diesem Spiel landest du auf dem Mond."
img: "moonhack-title.png"
level: 3
categories:
 - Rust
---

# Moonhack - Rust Edition

In dieser Übung werden wir uns ein klein wenig mit der Programmiersprache "Rust" auseinandersetzen. Es handelt sich dabei um eine relativ neue Sprache die viel Wert darauf legt, mögliche typische Fehler bereits während dem Programmieren zu finden und zu beseitigen.

## Vorbereitung

Du wirst folgende Dinge brauchen um du brauchen:

- Rust Compiler und Cargo - [Anleitung in Deutsch](https://panicbit.github.io/rustbook-de/Rust_Installieren.html) oder die [Offizielle Anleitung](https://www.rust-lang.org/tools/install)
- Eine Programmierumgebung - [Visual Studio Code](https://code.visualstudio.com/download)
  - In VS Code bitte auch die Erweiterung **Rust Analyzer** installieren.

## Anlegen des Projekts

Wenn du das alles erledigt hast, werden wir unser erstes Rust Projekt anlegen:

```
cargo new moonhack-rust --bin
```

erzeugt ein neues Verzeichnis mit allem was du für ein einfaches Rust-Projekt brauchst. Das ist unser Projektverzeichnis.
Öffne das neue Verzeichnis in VS Code und wir können loslegen.

## Grafiken und Sounds bereitstellen

{{< imgblock "img/projektfolder_assets.png" "" 4>}}
Die Grafiken und Sounds kannst du dir [hier](files/assets.zip) herunterladen.

Lege dir im Projektverzeichnis einen ordner `assets` an und kopiere den Inhalt der ZIP-Datei hinein.

Dein Projektverzeichnis sollte dann in etwa so aussehen.
{{< /imgblock >}}

## Cargo.toml - Bauen und Bibliotheken

`Cargo` is sozusagen das alles in einem Build-System von Rust. Damit kannst du festlegen welche Bibliotheken du verwenden möchtest und wo dein fertiges Programm dann laufen soll.

Wir möchten unser Moonhack zuerst gerne auf unserem Computer Spielen und anschließend das ganze noch im Web für alle anderen zur Verfügung stellen.

Als Spiele-Framework werden wir in unserem Fall das [*Bevy - Framework*](https://bevyengine.org/) verwenden. Damit das mit dem Ton Abspielen auch ordentlich funktioniert werden wir zusätzlich auch das [*bevy-kira Framework*](https://docs.rs/kira/0.5.3/kira/) hinzufügen. Unser *cargo.toml* sieht demnach so aus:

```toml
[package]
name = "moonhack-rust"
version = "0.1.0"
authors = ["dein name"]

[dependencies]
bevy_kira_audio = {version = "0.5.0", default-features = false, features = ["ogg"] }
bevy = "0.5.0"
```

## Bevy-Framework starten
Nun wird es Zeit, unser Programm zu erstellen.

Das Bevy-Framework benutzt
- sogenannte "systems" um die Abläufe im Spiel zu koordinieren
- Resources um den Zugriff auf Spiel-Weite Ressourcen (Wie Grafiken, Sound, ...) zu ermöglichen
- Bundles um die Spielobjekte zu verwalten

Beim Start werden wir das startup-system verwenden.

main.rs
```rust
pub fn main() {
    let mut app = App::build();
    app.insert_resource(ClearColor(Color::rgb(0.04, 0.04, 0.04)))
        .insert_resource(WindowDescriptor {
            title: "CoderDojo MoonHack".to_string(),
            width: 640.,
            height: 480.,
            scale_factor_override: Some(1.5),
            ..Default::default()
        })
        .add_plugins(DefaultPlugins)
        .add_startup_system(setup.system())
        .add_startup_stage("background", SystemStage::single(spawn_background.system()));

        app.run();
}

fn setup(
    mut commands: Commands,
    asset_server: Res<AssetServer>,
    texture_atlases: ResMut<Assets<TextureAtlas>>,
    materials: ResMut<Assets<ColorMaterial>>
) {
    commands.spawn_bundle(OrthographicCameraBundle::new_2d());
    commands.insert_resource(GameAssets::new(materials, texture_atlases, asset_server));
}

fn spawn_background(
    mut commands: Commands,
    game_assets: Res<GameAssets>,
) {
    commands.spawn_bundle(SpriteBundle {
        material: game_assets.background.clone(), 
        transform: Transform {
            translation: Vec3::new(0., 0., 1.),
            scale: Vec3::new(0.7, 0.7, 1.), // durch Probieren rausgefunden 
            ..Default::default()
        },
        ..Default::default()
    });
}


// Game-Assets (Grafiken und Töne) zur späteren Verwendung im Spiel
struct GameAssets {
    background: Handle<ColorMaterial>,
    lunar_module: Handle<TextureAtlas>,
    sound_thruster: Handle<AudioSource>,
    sound_landed: Handle<AudioSource>,
    sound_crashed: Handle<AudioSource>,
}

impl GameAssets {
    fn new(mut materials: ResMut<Assets<ColorMaterial>>, mut texture_atlases: ResMut<Assets<TextureAtlas>>, asset_server: Res<AssetServer>) -> Self { 

        let lunar_lander_handle = asset_server.load("lunar_module_map.png");
        
        Self { 
            background: materials.add(asset_server.load("background.png").into()), 
            lunar_module: texture_atlases.add(TextureAtlas::from_grid(lunar_lander_handle, Vec2::new(128., 96.), 2, 2)), 
            sound_thruster: asset_server.load("thrusters.ogg").into(), 
            sound_landed: asset_server.load("landed.ogg").into(), 
            sound_crashed: asset_server.load("problem.ogg").into(), 
        } 
    }
}

```

Wenn du das Spiel jetzt startest, siehst du ein Fenster mit dem Hintergrund am Bildschirm.

# Plugins hinzufügen
Damit wir später auch Töne ordentlich ausgeben können (Triebwerk und Funk auf unterschiedlichen Kanälen) werden wir noch einige Plugins hinzufügen.
Das vollständige main.rs sieht dann folgendermaßen aus:

```rust
use bevy_kira_audio::{AudioChannel, AudioPlugin, AudioSource};
use bevy;
use bevy::math::{Vec2, Vec3};
use bevy::prelude::{*};
use bevy::sprite::{ColorMaterial, TextureAtlas};
use lunar_lander::LunarLander;
pub mod lunar_lander;

struct GameAssets {
    background: Handle<ColorMaterial>,
    lunar_module: Handle<TextureAtlas>,
    sound_thruster: Handle<AudioSource>,
    sound_landed: Handle<AudioSource>,
    sound_crashed: Handle<AudioSource>,
}

impl GameAssets {
    fn new(mut materials: ResMut<Assets<ColorMaterial>>, mut texture_atlases: ResMut<Assets<TextureAtlas>>, asset_server: Res<AssetServer>) -> Self { 

        let lunar_lander_handle = asset_server.load("lunar_module_map.png");
        
        Self { 
            background: materials.add(asset_server.load("background.png").into()), 
            lunar_module: texture_atlases.add(TextureAtlas::from_grid(lunar_lander_handle, Vec2::new(128., 96.), 2, 2)), 
            sound_thruster: asset_server.load("thrusters.ogg").into(), 
            sound_landed: asset_server.load("landed.ogg").into(), 
            sound_crashed: asset_server.load("problem.ogg").into(), 
        } 
    }
}

pub struct AudioChannels {
    thruster: AudioChannel,
    radio: AudioChannel,   
}

impl AudioChannels {
    fn new() -> Self {
        Self {
            thruster: AudioChannel::new("thruster".to_owned()),
            radio: AudioChannel::new("radio".to_owned()),
        }
    }
}

pub fn main() {
    let mut app = App::build(); // mut - heisst "mutable" - Veränderbar. "app" wird intern durch die inserts verändert.
    app.insert_resource(ClearColor(Color::rgb(0.04, 0.04, 0.04)))
        .insert_resource(WindowDescriptor {
            title: "CoderDojo MoonHack".to_string(),
            width: 640.,
            height: 480.,
            scale_factor_override: Some(1.5),
            ..Default::default()
        })
        .insert_resource(AudioChannels::new()) // Audiochannels für kira - werden später noch gebraucht
        .add_plugins(DefaultPlugins)
        .add_plugin(AudioPlugin) // Initialisieren von Kira
        .add_plugin(LunarLander) // Hier kommt die Mondlandefähre ins Spiel
        .add_startup_system(setup.system())
        .add_startup_stage("background", SystemStage::single(spawn_background.system()));
        
        app.run();
}

fn setup(
    mut commands: Commands,
    asset_server: Res<AssetServer>,
    texture_atlases: ResMut<Assets<TextureAtlas>>,
    materials: ResMut<Assets<ColorMaterial>>
) {
    commands.spawn_bundle(OrthographicCameraBundle::new_2d());
    commands.insert_resource(GameAssets::new(materials, texture_atlases, asset_server));
}

fn spawn_background(
    mut commands: Commands,
    game_assets: Res<GameAssets>,
) {
    commands.spawn_bundle(SpriteBundle {
        material: game_assets.background.clone(), 
        transform: Transform {
            translation: Vec3::new(0., 0., 1.),
            scale: Vec3::new(0.7, 0.7, 1.), // durch Probieren rausgefunden 
            ..Default::default()
        },
        ..Default::default()
    });
}
```

## Mondlandefähre
Nun fehlt nur noch der Code für die Mondlandefähre:

```rust
use bevy_kira_audio::Audio;
use bevy::prelude::{*};
use crate::{AudioChannels, GameAssets};

pub struct LanderStart;

pub struct LunarLanderProperties {
    pub velocity: f32,
    pub fuel: f32,
    pub touchdown: bool,
    pub thrusting: bool,
}

pub struct LunarLander;

impl Plugin for LunarLander {
    fn build(&self, app: &mut AppBuilder) {
        app
            .add_startup_stage("spawn_lander", SystemStage::single(spawn_lander.system()))
            .add_system(lander_input.system())
            .add_system(lander_run.system());
    }
}

fn spawn_lander(
    mut commands: Commands,
    game_assets: Res<GameAssets>
) 
{
    commands.spawn_bundle(SpriteSheetBundle {
        texture_atlas: game_assets.lunar_module.clone(),
        transform: Transform {
            translation: Vec3::new(0., 150., 5.),
            scale: Vec3::new(0.5, 0.5, 1.),
            ..Default::default()
        },

        ..Default::default()
    })
    .insert(LunarLander)
    .insert(LunarLanderProperties {
        velocity: 2.,
        fuel: 100.,
        touchdown: false,
        thrusting: false,
    });
}

// aktualisieren des Landers (z.B. Position und Landung)
fn lander_run(
    audio: Res<Audio>,
    audiochannels: Res<AudioChannels>,
    game_assets: Res<GameAssets>,
    mut query: Query<(&mut LunarLanderProperties, &mut TextureAtlasSprite, &mut Transform), With<LunarLander> >    
) {
    if let Ok((mut properties, mut sprite, mut transform)) = query.single_mut() {
        if properties.touchdown {
            return;
        }

        if (transform.translation.y - properties.velocity) <= -200. {
            transform.translation.y;
            properties.touchdown = true;

            if properties.velocity > 1. {
                sprite.index = 2;
                println!("crashed");
                audio.play_in_channel(game_assets.sound_crashed.clone(), &audiochannels.radio);
            } else {
                sprite.index = 0;
                println!("Landed sucessfully");
                audio.play_in_channel(game_assets.sound_landed.clone(), &audiochannels.radio);
            }
            return;
        }

        transform.translation.y -= properties.velocity;

    }
}

// Eingaben verarbeiten die für den Lander relevant sind
fn lander_input(
    keyboard: Res<Input<KeyCode>>,
    mouse_button_input_events: Res<Input<MouseButton>>,
    audio: Res<Audio>,
    audiochannels: Res<AudioChannels>,
    game_assets: Res<GameAssets>,
    mut query: Query<(&mut LunarLanderProperties, &mut TextureAtlasSprite), With<LunarLander> >    
) 
{
    if let Ok((mut properties, mut sprite)) = query.single_mut() {
        if properties.touchdown {
            audio.stop_channel(&audiochannels.thruster);
            return;
        }
        
        if (keyboard.pressed(KeyCode::Space) || mouse_button_input_events.pressed(MouseButton::Left)) && (properties.fuel > 0.) {
            if !properties.thrusting {
                sprite.index = 1;
                audio.play_looped_in_channel(game_assets.sound_thruster.clone(), &audiochannels.thruster);
            }
            properties.velocity -= 0.1;
            properties.thrusting = true;
        } else {
            if properties.thrusting {
                sprite.index = 0;
                audio.stop_channel(&audiochannels.thruster);
            }
            properties.velocity += 0.03;
            properties.thrusting = false;
        }
    }
}

```

Das Vollstädnige Programm das auch als WASM kompilert werden kann [findest du hier](https://github.com/weidingerhp/moonhack-rust).
