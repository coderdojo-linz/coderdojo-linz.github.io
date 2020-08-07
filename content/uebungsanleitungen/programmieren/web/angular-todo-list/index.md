---
title: "Todo Liste mit Angular"
description: "In dieser Übung programmierst du eine Todo Liste mit Angular."
level: 2
categories:
- Angular
---

# Todo Liste mit Angular

## Voraussetzungen

* Aktuelle Version von [Visual Studio Code](https://code.visualstudio.com/)

## Projekt anlegen und starten

* Öffne einen Command Prompt und installiere als erstes die Angular CLI: `npm install -g @angular/cli`
* Lege einen Ordner an, in dem dein Projekt liegen soll - z.B. `angular-todo-list`.
* Führe in diesem Ordner im Command Prompt folgendes Command aus um die neue Angular Applikation anzulegen: `ng new todo-list-app --strict`
    * Routing - yes
    * Stylesheet format - SCSS
* Wenn das Projekt fertig angelegt ist, wechsle in den generierten Ordner `todo-list-app` und öffne diesen in Visual Studio Code.
* Im Terminal von Visual Studio Code (STRG + ö) kannst du das Projekt mit folgendem Command starten: `ng serve`  
falls die URL bei dir im Chrome nicht geöffnet werden kann, kannst du localhost auch durch 127.0.0.1 ersetzen

Wenn du das Projekt erfolgreich angelegt und gestartet hast, solltest du im Browser folgende Seite sehen:

{{< imgblock "img/initial-project.png" "Initiales Projekt" >}}{{< /imgblock >}}

## Navigationsmenü anlegen

### Globale Styles

Styles, die für das gesamte Projekt gelten sollen, findest du unter `src/styles.scss`. Dort ändern wir als erstes die Schriftart und den Margin für den `body`:

```scss
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
}
```

### HTML Grundgerüst

Das HTML Grundgerüst deiner App wird im File `src/index.html` festgelegt. Dort kannst du z.B. externe CSS oder Javascript Libraries wie Bootstrap einbinden. Für unser Beispiel verwenden wir diesmal keine Library und müssen daher im Moment auch nichts ändern im `index.html`.

Angular Apps bestehen aus mehrere Components und die erste Component wird beim Anlegen des Projekts auch gleich automatisch angelegt - die *AppComponent. Sie besteht aus den folgenden Dateien: 

* `src/app/app.component.html` - für das HTML der Component
* `src/app/app.component.scss` - für die Styles, die Styles gelten nur für diese Component und können in anderen Components nicht verwendet werden
* `src/app/app.component.spec.ts`- damit kann die Logik von Components getestet werden, wir werden in diesem Beispiel noch keine Tests schreiben
* `src/app/app.component.ts` - in diesem File ist der Typescript Code zur Component enthalten

Wenn du dir den generierten Typescript Code ansiehst, siehst du, dass hier die Urls für das Template (HTML) und die Styles (SCSS) angegeben sind. Außerdem wird mit dem Selector festgelegt, wie die Component verwendet werden kann. `app-root` heißt, dass die Komponente im HTML mit `<app-root></app-root>` verwendet werden kann.

Wenn du jetzt einen Blick in `src/index.html` wirfst, dann siehst du, dass genau diese Komponente im `<body>` verwendet wird.

### Navigationsmenü erstellen

Lösche dazu den ganzen generierten Content im `src/app/app.component.html` und ersetze ihn durch folgendes HTML:

```HTML
<nav>
  <ul>
    <li>Todo Liste</li>
    <li>Dashboard</li>
  </ul>
</nav>

<main>
  <router-outlet></router-outlet>
  Test
</main>
```

Das Tag `<router-outlet>` ist ein Platzhalter, in dem dann weitere Komponenten die wir erst erstellen müssen, angezeigt werden können, sobald der User auf einen Menüpunkt klickt.

Für eine hübschere Darstellung fügen wir noch ein paar Styles in `src/app/app.component.scss` ein:

```scss
ul {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0 40px;
    width: 100%;
    background-color: #ffeb3b;
    height: 40px;
    line-height: 40px;
}

li {
    display: inline;
    margin-right: 40px;
}

main {
    margin-top: 40px;
    padding: 40px;
}
```

Deine Seite sollte dann so aussehen:

{{< imgblock "img/menu.png" "Menu" >}}{{< /imgblock >}}

## Komponenten hinzufügen

Wir wollen jetzt für jeden Menüpunkt eine Komponente erstellen. Führe dazu entweder im Command Prompt im Ordner `todo-list-app` oder in einem neuen Terminal Fenster im Visual Studio Code folgende Commands aus:

```cmd
ng g component todo-list
ng g component dashboard
```

Die beiden Components können jetzt schon mit den generierten Selektoren `app-dashboard` und `app-todo-list` verwendet werden. Damit sie auch über eine eigene Url erreichbar sind, müssen wir im `src/app/app-routing.module.ts` neue Routes dafür einfügen:

```ts
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo-list', component: TodoListComponent }
];
```

Über die Urls `http://127.0.0.1:4200/todo-list` und `http://127.0.0.1:4200/dashboard` können die beiden Komponenten geladen werden.

Im `src/app/app.component.html` können wir die Testausgabe löschen. Stattdessen fügen wir in der Navigationsleiste Links zu den beiden neuen Komponenten hinzu.

```html
<nav>
  <ul>
    <li><a routerLink="/todo-list">Todo Liste</a></li>
    <li><a routerLink="/dashboard">Dashboard</a></li>
  </ul>
</nav>

<main>
  <router-outlet></router-outlet>
</main>
```

Das Ergebnis sollte jetzt so aussehen:

{{< imgblock "img/menu-with-routes.png" "Menu" >}}{{< /imgblock >}}

## Todo Component

Als erstes legen wir ein Interface für die Items in unsere Todo Liste an:

```cmd
ng g interface shared/todo
```

Im Interface legen wir alle Properties fest, die ein Todo haben muss:

```ts
export interface Todo {
    id: number;
    description: string;
    dueDate: Date;
    doneDate?: Date;
}
```

Dieses Interface können wir jetzt in `src/app/todo-list-component.ts` verwenden. Wir legen dort ein public Property mit einigen Todo List Items an:

```ts
  public todos: Todo[] = [
    { id: 1, description: 'Mathe Ferien-Hausübung', dueDate: new Date(2020, 9, 21) },
    { id: 2, description: 'Geburtstagsgeschenk Oma', dueDate: new Date(2020, 8, 20) },
    { id: 3, description: 'Zimmer aufräumen', dueDate: new Date(2020, 8, 14) }
  ];
```

Diese Items können wir jetzt im HTML anzeigen. Im einfachsten Fall können wir die Variable todos mit `{{ todos }}` ausgeben. Das würde `[object Object],[object Object],[object Object]` ausgeben. Wir können auch komplexere Ausdrücke wie z.B. `{{ todos.length }}` verwenden, um die Anzahl der Items auszugeben.

Wenn wir die Items filter möchten, so dass z.B. nur noch Items ohne `doneDate` ausgegeben werden, dann können wir das über eine Methode in `src/app/todo-list-component.ts` lösen. Hier können wir auch gleich noch nach dem Fälligkeitsdatum sortieren:

```ts
  getOpenTodos(): Todo[] {
    return this.todos.filter(t => !t.doneDate).sort((a, b) => a.dueDate < b.dueDate ? -1 : 1);
  }
```

Im HTML können wir die Methode jetzt folgendemaßen verwenden:

```html
<h2>Todos</h2>

<div *ngFor="let item of getOpenTodos()">
    {{ item.dueDate | date:'EE, dd.MM.' }} {{ item.description }}
</div>

<p>Items: {{ getOpenTodos().length }}</p>
```

Damit bekommen wir folgendes Ergebnis:

{{< imgblock "img/todo-list.png" "Menu" >}}{{< /imgblock >}}

## Todo List Service

Wir könnten jetzt die Methoden zum Hinzufügen und Ändern von Items auch direkt in `todo-list.component.ts` machen. Um die Todo Liste später aber an mehreren Stellen verwenden zu können (z.B. im Dashboard), legen wir dazu ein neues Service an:

```cmd
ng g service shared/todo-list
```

In diesem Service bieten wir Methoden zum Lesen und Ändern der Todo Liste an. Man kann in diesem Service dann auch den Zugriff auf ein Webservice einbauen, um die Daten aus einer Datenbank zu lesen.

Der Code für das Service könnte z.B. folgendemaßen aussehen:

```ts
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos: Todo[] = [];

  constructor() { }

  public getTodos(done?: boolean): Todo[] {
    return this.todos
      .filter(t => done === undefined || (done && t.doneDate) || (!done && !t.doneDate))
      .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  }

  public addTodo(description: string, dueDate: Date): void {
    let newId = 0;
    if (this.todos.length) {
      newId = Math.max(...this.todos.map(t => t.id)) + 1;
    }

    this.todos.push({ id: newId, description: description, dueDate: dueDate });
  }

  public deleteTodoById(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }

  public updateTodoById(id: number, description: string, dueDate: Date): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index >= 0) {
      this.todos[index].description = description;
      this.todos[index].dueDate = dueDate;
    }
  }

  public toggleDoneStateById(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index >= 0) {
      if (this.todos[index].doneDate) {
        this.todos[index].doneDate = undefined;
      } else {
        this.todos[index].doneDate = new Date();
      }
    }
  }
}
```

In der Komponente können wir jetzt das Property `todos` und die Methode `getOpenTodos` entfernen. Stattdessen verwenden wir Dependency Injection, um Zugriff auf das Todo List Service zu bekommen. Dazu fügen wir es in den Constructor von `todo-list.component.ts` ein:

```ts
  constructor(public todoListService: TodoListService) { }
```

Das HTML müssen wir jetzt so ändern, dass das Service anstelle des Properties verwendet wird:

```html
<h2>Todos</h2>

<div *ngFor="let item of todoListService.getTodos(false)">
    {{ item.dueDate | date:'EE, dd.MM.' }} {{ item.description }}
</div>

<p>Items: {{ todoListService.getTodos(false).length }}</p>
```

## Einfügen von Items

Damit wir Form Controls mit Bindings verwenden können, müssen wir im `app.module.ts` das `FormsModule` hinzufügen:

```ts
...
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In der `todo-list.component.ts` fügen wir jetzt Properties für die `description` und das `dueDate` ein. Diese verwenden wir im HTML dann zum Data Binding. In der neuen Methode `addTodo` fügen wir das Item im Service dann ein.

```ts
import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoDescription = '';
  public todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public showDone = false;

  constructor(public todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  public addTodo(): void {
    if (this.todoDescription && this.todoDueDate) {
      this.todoListService.addTodo(this.todoDescription, new Date(this.todoDueDate));
      this.todoDescription = '';
      this.todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    }
  }
}
```

Jetzt müssen wir noch im HTML eine Möglichkeit bieten, neue Todos zu erfassen und zu löschen:

```html
<h2>Todos</h2>

<div class="addItem">
    Neues Todo: <input type="text" [(ngModel)]="todoDescription"> <input type="date" [(ngModel)]="todoDueDate"> <button (click)="addTodo()">Hinzufügen</button>
</div>

<div *ngFor="let item of todoListService.getTodos(false)">
    <button (click)="todoListService.toggleDoneStateById(item.id)">Done</button> <button (click)="todoListService.deleteTodoById(item.id)">Löschen</button> {{ item.dueDate | date:'EE, dd.MM.' }} {{ item.description }}
</div>

<p>Todo: {{ todoListService.getTodos(false).length }}<br/>Done: {{ todoListService.getTodos(true).length }}</p>
```

## Done Items anzeigen

Wir möchten jetzt noch ein Häkchen hinzufügen, mit dem wir bereits erledigte Items anzeigen können. Dazu fügen wir zuerst in `todo-list.component.ts` ein Property `showDone` ein:

```ts
public showDone = false;
```

Im HTML können wir jetzt das Häckchen hinzufügen und im `*ngFor` dann den richtigen Parameter übergeben. Außerdem werden bereits erledigte Elemente durchgestrichen angezeigt:

```html
<h2>Todos</h2>

<div class="addItem">
    Neues Todo: <input type="text" [(ngModel)]="todoDescription"> <input type="date" [(ngModel)]="todoDueDate"> <button (click)="addTodo()">Hinzufügen</button>
</div>

<p>Done anzeigen: <input type="checkbox" [(ngModel)]="showDone"></p>

<div *ngFor="let item of todoListService.getTodos(showDone ? undefined : false)">
    <button (click)="todoListService.toggleDoneStateById(item.id)">Done</button> 
    <button (click)="todoListService.deleteTodoById(item.id)">Löschen</button> 
    <span [ngStyle]="{'text-decoration': (item.doneDate ? 'line-through' : 'none')}">{{ item.dueDate | date:'EE, dd.MM.' }} {{ item.description }}</span>
</div>

<p>Todo: {{ todoListService.getTodos(false).length }}<br/>Done: {{ todoListService.getTodos(true).length }}</p>
```

{{< imgblock "img/todo-list-with-done.png" "Todo Liste" >}}{{< /imgblock >}}

## Dashboard

Im Dashboard wollen wir jetzt zwei Balken anzeigen für die noch offenen und die bereits erledigten Todos. In `dashboard.component.ts` fügen wir dazu zwei Methoden ein, die uns die jeweiligen Prozentsätze ausrechnen:

```ts
import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  getTodoPercentage(): number {
    const allTodos = this.todoListService.getTodos();

    if (allTodos.length) {
      return this.todoListService.getTodos(false).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }

  getDonePercentage(): number {
    const allTodos = this.todoListService.getTodos();

    if (allTodos.length) {
      return this.todoListService.getTodos(true).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }
}
```

Dann fügen wir im HTML zwei divs ein, deren Breite über Data Binding im `[ngStyle]` gesteuert wird. Hier verwenden wir die berrechneten Prozentsätze:

```html
<h2>Dashboard</h2>
<div class="bar-chart">
    <div [ngStyle]="{ 'width': getTodoPercentage().toString() + '%' }" class="todo-bar">Todo: {{ getTodoPercentage() | number:'1.0-0' }} %</div>
    <div [ngStyle]="{ 'width': getDonePercentage().toString() + '%' }" class="done-bar">Done: {{ getDonePercentage() | number:'1.0-0' }} %</div>
</div>
```

Im Stylesheet müssen wir noch die Höhe und Farben der Balken festlegen:

```scss
.bar-chart {
    >div {
        height: 40px;
        margin-bottom: 10px;
        white-space: nowrap;
    }

    .todo-bar {
        background-color: #03a9f4;
        height: 40px;
    }

    .done-bar {
        background-color: #4caf50;
        height: 40px;
    }
}
```

{{< imgblock "img/dashboard.png" "Dashboard" >}}{{< /imgblock >}}