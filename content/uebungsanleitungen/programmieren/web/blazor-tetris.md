---

title: Tetris mit Blazor
description: In dieser Übung programmierst du Tetris mit CSharp und Blazor
---

# Tetris mit Blazor

## Kostenlose Voraussetzungen

* Neueste Version von [Visual Studio 2017 Community Edition](https://visualstudio.microsoft.com/free-developer-offers/) mit *ASP.NET and web development*
* [ASP.NET Core Blazor Language Services](https://marketplace.visualstudio.com/items?itemName=aspnet.blazor)

## Projekt anlegen

* Visual Studio starten

* *File* / *New* / *Project*

* Neues *ASP.NET* Projekt anlegen:<br/>
  ![Neues Projekt](blazor-tetris/new-project.png)

* *Blazor* Projekttyp auswählen:<br/>
  ![Blazor](blazor-tetris/new-blazor-project.png)

* Nach dem Anlegen des Projekt den Startmodus ändern:<br/>
  ![Startmodus](blazor-tetris/start-as-cmd.png)

* Probiere, das Programm mit *F5* oder *Debug* / *Start Debugging* zu starten. Es müsste ein Kommandozeilenfenster und ein Browser aufgehen. Im Browser solltest du folgendes sehen:<br/>
  ![Hello World](blazor-tetris/hello-world.png)

* Um den Debugger wieder zu beenden, beende das Kommandozeilenfenster.<br/>
  ![Debugger beenden](blazor-tetris/close-debugger.png)

Gratuliere! Du hast dein erstes Blazor-Programm zum Laufen gebracht.

## Aufräumen

Visual Studio hat dir einiges an Code generiert, damit du nicht ganz von vorne starten musst. Einen Teil davon brauchen wir für unser Tetris nicht. Daher müssen wir als erstes im Projekt aufräumen.

* Lösche die in der folgenden Grafik durchgestrichenen Ordner und Dateien aus dem generierten Projekt:<br/>
  ![Dateien löschen](blazor-tetris/files-to-delete.png)

* Lösche den Inhalt der Datei *css/site.css*. **Achtung!** Die Datei selbst muss erhalten bleiben. Lösche nur den **Inhalt**!

* In *Pages/index.cshtml* muss folgender Code stehen:

```cs
@page "/"

<h1>Tetris</h1>
```

* In *Shared/MainLayout.cshtml* muss folgender Code stehen:

```cs
@inherits BlazorLayoutComponent

@Body
```

* Probiere, das Programm mit *F5* oder *Debug* / *Start Debugging* zu starten. Es müsste ein Kommandozeilenfenster und ein Browser aufgehen. Im Browser solltest du folgendes sehen:<br/>
  ![Aufgeräumtes Projekt](blazor-tetris/cleaned-project.png)

* Um den Debugger wieder zu beenden, beende das Kommandozeilenfenster.

Super! Jetzt haben wir ein sauberes Projekt und können beginnen, zu programmieren.

## Spielfeld

Als erstes generieren wir das Spielfeld.

* Füge einen Ordner namens *Logic* zum Projekt hinzu:<br/>
  ![Add folder](blazor-tetris/new-folder.png)

* Füge in den Ordner eine Klasse namens *BoardContentExtensions.cs* hinzu:<br/>
  ![Add class](blazor-tetris/new-class.png)

* *BoardContentExtensions.cs* muss folgenden Code enthalten. Es handelt sich um Hilfsfunktionen, mit denen man in Schleifen das Spielfeld durchlaufen (Englisch *iterate*) kann. Lass dir von jemandem aus dem Mentorenteam den Code erklären.

```cs
namespace BlazorTetris.Logic
{
    public delegate bool CancelableIterator(int row, int col);
    public delegate void Iterator(int row, int col);

    public static class BoardContentExtensions
    {
        public static bool Iterate(this string[,] matrix, CancelableIterator iterator)
        {
            for (var row = 0; row < matrix.GetLength(0); row++)
            {
                for (var col = 0; col < matrix.GetLength(1); col++)
                {
                    if (!iterator(row, col))
                    {
                        return false;
                    }
                }
            }

            return true;
        }


        public static void Iterate(this string[,] matrix, Iterator iterator) =>
            Iterate(matrix, (row, col) => { iterator(row, col); return true; });
    }
}
```

* Ändere den Code in *Pages/Index.cshtml* wie folgt:

```cs
@page "/"
@using BlazorTetris.Logic

<h1>Tetris</h1>

<table>
    @for (var row = 0; row < ROWS; row++)
    {
        <tr>
            @for (var col = 0; col < COLUMNS; col++)
            {
                <td class="@board[row, col]"></td>
            }
        </tr>
    }
</table>

@if (lost)
{
    <h1>Verloren :-(</h1>
}

@functions {
    private const int ROWS = 16;
    private const int COLUMNS = 10;

    private string[,] board;
    private bool lost = false;

    protected override void OnInit()
    {
        InitializeBoard();
    }

    private void InitializeBoard()
    {
        board = new string[ROWS, COLUMNS];
        board.Iterate((row, col) => board[row, col] = string.Empty);
    }
}
```

* Ändere den Code in *wwwroot/css/site.css* wie folgt:

```css
table {
    border-collapse: collapse;
    border-spacing: 0;
}

td {
    width: 25px;
    height: 25px;
    border: 1px solid black;
}
```

* Probiere, das Programm mit *F5* oder *Debug* / *Start Debugging* zu starten. Es müsste ein Kommandozeilenfenster und ein Browser aufgehen. Im Browser solltest du folgendes sehen:<br/>
  ![Leeres Board](blazor-tetris/empty-board.png)

* Um den Debugger wieder zu beenden, beende das Kommandozeilenfenster.

## Tetris Spielsteine

Jetzt brauchen wir Code für die Tetris-Spielsteine. Hier zwei wichtige Links dazu:

* Eine Liste von Tetris-Spielsteinen und ihrer klassischen Farben findest du unter [https://en.wikipedia.org/wiki/Tetris#Tetromino_colors](https://en.wikipedia.org/wiki/Tetris#Tetromino_colors)
* Eine Liste von Farbnamen, die der Browser kennt, findest du unter [https://en.wikipedia.org/wiki/Web_colors](https://en.wikipedia.org/wiki/Web_colors)

* Erstelle eine neue Klasse *Logic/Pieces.cs* und füge folgenden Code ein. Lass dir von jemandem aus dem Mentorenteam den Code erklären.

```cs
using System;

namespace BlazorTetris.Logic
{
    public class Pieces
    {
        // Color of Tetris pieces: https://en.wikipedia.org/wiki/Tetris#Tetromino_colors
        // Web color names: https://en.wikipedia.org/wiki/Web_colors

        public static readonly string __ = string.Empty;
        public static readonly string IC = "I";
        public static readonly string JC = "J";

        public static readonly string[,] IH = {
            { IC, IC, IC, IC }
        };
        public static readonly string[,] IV = {
            { IC },
            { IC },
            { IC },
            { IC }
        };
        public static readonly string[,] JH = {
            { JC, JC, JC, JC },
            { __, __, __, JC }
        };
        public static readonly string[,] JV = {
            { __, JC },
            { __, JC },
            { __, JC },
            { JC, JC }
        };
        public static readonly string[][,] AvailablePieces = new[] { IV, IH, JV, JH };

        public static string[,] GetRandomPiece()
        {
            var random = new Random();
            return (string[,])AvailablePieces[random.Next(0, AvailablePieces.Length)].Clone();
        }
    }
}
```

* Wie du siehst, deckt der Code nur zwei Arten von Spielsteinen ab. Ergänze den Rest selbst. Bei Bedarf lass dir von jemandem aus dem Mentorenteam helfen.

