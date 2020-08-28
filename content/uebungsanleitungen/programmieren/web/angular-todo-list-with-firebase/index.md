---
title: "Todo Liste mit Angular und Firebase"
description: "In dieser Übung programmierst du eine Todo Liste mit Angular und Firebase."
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

## Firebase

### Projekt anlegen

Auf der Seite [https://console.firebase.google.com/](https://console.firebase.google.com/) legen wir ein neues Firebase Projekt an. Falls du noch keinen Google Account hast, musst du zuerst einen anlegen und dich damit anmelden.

Lege dann ein neues Projekt mit dem Namen todolist-demo an. Google Analytics kannst du deaktivieren.

{{< imgblock "img/create-firebase-project.png" "Firebase Projekt" >}}{{< /imgblock >}}

### App anlegen

Als nächstes kannst du in Firebase in den Settings eine neue App anlegen. Wir brauchen für unser Angular Projekt eine Web App.

{{< imgblock "img/add-firebase-app.png" "Firebase App" >}}{{< /imgblock >}}

Öffne die Datei `src/envrionments/environment.ts` und füge dort die Firebase Konfiguration, die nach dem Anlegen der App angezeigt wird, ein:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '...',
    authDomain: '...',
    databaseURL: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...'
  }
};
```

## Authentication

Um in Angular auf Firebase zugreifen zu können, brauchen wir die Komponenten `firebase` und `@angular/fire`:

```cmd
npm install firebase @angular/fire --save
```

Als erstes Fügen wir die Firebase Module in die Imports vom `app.module.ts` ein:

```ts
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule
  ],
...
```

Wir fügen jetzt in `app.component.ts` eine `login` und `logout` Methode ein. Im Konstruktor brauchen wir dafür `AngularFireAuth` und den `Router`.

```ts
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  login(): void {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['todo-list']);
    });
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
```

Im HTML fügen wir im Menü die Anzeige des aktuellen Users ein. Und wenn noch kein User angemeldet ist, dann soll im `main` Bereich ein Login Button angezeigt werden.

```html
<nav>
  <ul>
    <li><a routerLink="/todo-list">Todo Liste</a></li>
    <li><a routerLink="/dashboard">Dashboard</a></li>
  </ul>

  <div *ngIf="afAuth.user | async as user" class="user-info">
    {{ user.displayName }}
    <button (click)="logout()">Logout</button>
  </div>
</nav>

<main>
  <div *ngIf="!(afAuth.user | async)">
    <h1>Login</h1>
    <button (click)="login()">Login</button>
  </div>

  <router-outlet></router-outlet>
</main>
```

Für die Anzeige des Users brauchen wir noch einen neuen Style in `app.component.scss`:

```scss
.user-info {
  position: absolute;
  right: 40px;
  top: 0;
  line-height: 40px;
}
```

Außerdem müssen wir in `app-routing.module.ts` noch ergänzen, dass die Routes `dashboard` und `todo-list` nur aufgerufen werden dürfen, wenn ein User angemeldet ist. Dazu ergänzen wir in den `routes` den `AngularFireAuthGuard`:

```ts
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'todo-list', component: TodoListComponent, canActivate: [AngularFireAuthGuard] }
];

```

## Todo Service

Als erstes legen wir ein Interface für die Items in unsere Todo Liste an:

```cmd
ng g interface shared/todo
```

Im Interface legen wir alle Properties fest, die ein Todo haben muss:

```ts
export interface Todo {
  id: string;
  description: string;
  dueDate: firestore.Timestamp;
  doneDate?: firestore.Timestamp;
}
```

Als nächstes bauen wir ein Service, mit dem wir die Todos aus dem Firestore lesen können und Änderungen zum Firestore schicken können. Lege dazu ein neues Service an:

```cmd
ng g service shared/todo-list
```

Der Code vom Service sieht folgendermaßen aus:

```ts
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos: Todo[] = [];

  private userUid = '';
  private todoSubscription: Subscription = Subscription.EMPTY;

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userUid = state.uid;

        this.todoSubscription = this.firestore.collection<any>(
          'todos', ref => {
            return ref.where('userUid', '==', state.uid);
          }).snapshotChanges().subscribe(data => {
            this.todos = data
              .map(e => {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data()
                } as Todo;
              })
              .sort((a, b) => {
                return a.dueDate > b.dueDate ? 1 : -1;
              });
          });
      } else {
        if (this.todoSubscription) {
          this.todoSubscription.unsubscribe();
        }

        this.userUid = '';
        this.todos = [];
      }
    });
  }

  public addTodo(description: string, dueDate: Date): void {
    this.firestore.collection('todos').add({ description: description, dueDate: dueDate, userUid: this.userUid });
  }

  public deleteTodoById(id: string): void {
    this.firestore.doc('todos/' + id).delete();
  }

  public updateTodoById(todo: Todo): void {
    this.firestore.doc('todos/' + todo.id).update({ description: todo.description, dueDate: todo.dueDate });
  }

  public toggleDoneStateById(todo: Todo): void {
    this.firestore.doc('todos/' + todo.id).update({ doneDate: todo.doneDate ? null : new Date() });
  }
}
```

## Todo-List Component

In der `todo-list.component.ts` können wir jetzt das Service verwenden. Dazu verwenden wir Dependency Injection im Konstruktor. Für `addTodo` fügen wir eine eigene Methode hinzu:

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

  constructor(public todoListService: TodoListService) {
  }

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

Damit wir im HTML nach abgeschlossenen und noch nicht abgeschlossenen Items filtern können, erstellen wir eine Angular pipe:

```cmd
ng generate pipe pipes/TodoFilterPipe
```

Der Code für die Pipe sieht folgendermaßen aus:

```ts
import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../shared/todo';

@Pipe({
  name: 'todoFilterPipe'
})
export class TodoFilterPipePipe implements PipeTransform {

  transform(todos: Todo[], done: boolean | null): Todo[] {
    return todos.filter(t => done === null || done === undefined || (done === true && t.doneDate) || (done === false && !t.doneDate));
  }
}
```

Damit wir Form Controls mit Bindings verwenden können, müssen wir im `app.module.ts noch das FormsModule hinzufügen.

```ts
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule
  ],
...
```

Im `todo-list.component.html` können wir die Todos jetzt anzeigen, neue hinzufügen und bestehende als erledigt markieren.

```html
<h2>Todos</h2>

<div class="addItem">
  Neues Todo: <input type="text" [(ngModel)]="todoDescription"> <input type="date" [(ngModel)]="todoDueDate"> <button (click)="addTodo()">Hinzufügen</button>
</div>

<p>Done anzeigen: <input type="checkbox" [(ngModel)]="showDone"></p>

<!-- <div *ngFor="let item of todoListService.getTodos(showDone ? undefined : false) | async"> -->
<div *ngFor="let item of (todoListService.todos | todoFilterPipe: (showDone ? null : false))">
  <button (click)="todoListService.toggleDoneStateById(item)">Done</button>
  <button (click)="todoListService.deleteTodoById(item.id)">Löschen</button>
  <span [ngStyle]="{'text-decoration': (item.doneDate ? 'line-through' : 'none')}">
    <span class="date">{{ item.dueDate.seconds * 1000 | date:'EE, dd.MM.' }}</span>
    <span class="description">{{ item.description }}</span>
  </span>
</div>

<p>
  Todo: {{ (todoListService.todos | todoFilterPipe: false).length }}<br />
  Done: {{ todoListService.todos.length }}
</p>
```

Für eine hübschere Darstellung können noch folgende Styles in `todo-list.component.styles` hinzugefügt werden:

```scss
button {
  margin-right: 10px;
}

.date {
  display: inline-block;
  width: 100px;
}
```

## Dashboard

Im Dashboard wollen wir jetzt zwei Balken anzeigen für die noch offenen und die bereits erledigten Todos. In `dashboard.component.ts` fügen wir dazu zwei Methoden ein, die uns die jeweiligen Prozentsätze ausrechnen:

```ts
import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  getTodoPercentage(): number {
    if (this.todoListService.todos.length) {
      return this.todoListService.todos.filter(t => !t.doneDate).length / this.todoListService.todos.length * 100;
    } else {
      return 0;
    }
  }

  getDonePercentage(): number {
    if (this.todoListService.todos.length) {
      return this.todoListService.todos.filter(t => t.doneDate).length / this.todoListService.todos.length * 100;
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