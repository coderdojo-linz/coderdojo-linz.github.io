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

# TODO

## Probleme beheben

Den Quellcode einer lauffähigen Version des Spiels zum Vergleichen [findest du hier](https://github.com/weidingerhp/moonhack-rust).