---
title: "Space Invaders"
description: "We will follow another amazing Tutorial by Ania Kubów to build our very own Space Invaders game."
level: 2
categories:
- HTML
- JavaScript
- CSS
---

# Space Invaders 

We will follow another amazing Tutorial by [Ania Kubów](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw) to build our very own Space Invaders game. 
If you didn't do so yet head to her Youtube channel and subscribe or give her a like because her content is amazing.

## Set up our files 

As usual we will use [codesandbox.io](https://codesandbox.io/) for our implementation. The entrypoint for our website is our `index.html` file. 
In this file we need to add a link to our `styles.css` and a reference to our `app.js`. In order to check that our linking 
works fine I will add some dummy code to show an alert in our JavaScript file `alert("Hey Space Invaders")` and a `body { background-color: hotpink }` to our CSS file. 
Now when we refresh or open our HTML file we should see a pink background a pop up greeting the Space Invaders. 

## Grid Setup 

The main thing we need in our game is our game grid - ours will have a size of 15 X 15. Therefore, we need 225 cells. 
A cell will be represented by a div tag.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="app.js"></script>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <title>Space Invaders</title>
    </head>
    <body>
        <div class="grid">
            <div class="cell"></div>
            ...
            <div class="cell"></div>
        </div>
    </body>
</html>
```

Next up we will define the size of our grid and make it visible by applying some background colors. We want every cell to have a size of 20 x 20 pixels therefor our whole grid will have a width and height of 15 * 20 = 300 pixels. We will also set up some styling for our cells so we see their placement.

```css
.grid {
    height: 300px; 
    width: 300px;
    background: lightblue;
}

.cell {
    border: solid lightgray 1px;
    height: 18px;
    width: 18px;
}
```

When we refresh our page now, we will see that our cells actually fall out of our grid. In order to correct that we will use flex-wrap on the grid, which tells the child elements to wrap if necessary (instead of overflowing like we've seen before). 

```css
.grid {
    display: flex;
    flex-wrap: wrap;
}
```

Now we should end up with a grid that resembles this structure: 
```
00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 
15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
...
195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 
210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 
```

## Displaying the player 

The first thing we want to is display our player. In the beginning of our game our player will be at the middle of one of the bottom rows. 
We will create a variable to keep its position in our JavaScript file so that we can later on modify it.
The player will be displayed on the grid by just setting a CSS class on a specific grid cell. 


```javascript
let cells = document.querySelectorAll('.grid .cell');
let playerPosition = 202;
cells[playerPosition].classList.add('player');
``` 

💡 With `document.querySelectorAll` you can select and modify HTML elements based on a CSS selector. `querySelector` will return the first matching element
whereas `querySelectorAll` will return a collection of all matching elements.

## The documenet is not yet ready 

When we open our index file in the browser now, we get an error:
```
Uncaught TypeError: Cannot read property 'classList' of undefined
     at app.js:4`
```
When we set a breakpoint we actually see, that our `cells` list is empty. That is because we need to wait for our HTML to be built correctly before we select the elements with the selector.
A convenient way to achieve this is to listen to the `DOMContentLoaded` event.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    let cells = document.querySelectorAll('.grid .cell');
    let playerPosition = 202;
    cells[playerPosition].classList.add('player');
});
```

💡 `document.addEventListener` receives two parameters - the first one is the event to listen to, and the second is a function that will be invoked whenever the specified event occurs.

Now if we take a look in our console our error will be gone and we will see one cell has an addional "player" class if we inspect our HTML markup in the browser. 
To make this player visible we can add a simple styling: 

```css
.player {
    background-color: darkblue;
}
```

Now we see one cell in a dark blue color, this is our player. 

## Giving it a space invaders style 

Next we will change our player to actually be a spaceship and the background of our game to black to simulate the space. 

```
.grid {
  background: black;
}

.cell {
  height: 20px;
  width: 20px;
}

.player {
  background: url(assets/player_01.png) no-repeat center center;
  background-size: contain;
}
```

## Moving the space ship

Next we will implement our moveLeft and moveRight functions so that we can move our player to the left and right when we press those arrow keys: 

```javascript 
function moveLeft() {
    cells[playerPosition].classList.remove('player');
    playerPosition -= 1; 
    cells[playerPosition].classList.add('player');
}

function moveRight() {
    cells[playerPosition].classList.remove('player');
    playerPosition += 1; 
    cells[playerPosition].classList.add('player');
}
```

By adding an event listener to the keydown event we can specify a function that will always be called when any key on the keyboard is pressed. This event has a property `keyCode` which we can use to only react on certain key presses. 

```javascript
document.addEventListener('keydown', function keyDownListener(e) {
    if (e.keyCode === 39) { // arrow right
        moveRight();
    } else if (e.keyCode === 37) { // arrow left
        moveLeft();
    }
});
```

Now we can already properly move to the left and to the right - but we can move outside of our grid and cause an error in our program, so we need to add a check in the moveLeft/moveRight function to only move if we are not yet touching the edge. 
We can easily identify if one of our displayed elements touches the left side by calculating the aboslute positions and using the modulo function. 

```javascript
function touchingRightEdge() {
    return playerPosition % 15 === 14;
}

function moveRight() {
    if (!touchingRightEdge()) {
        // remove player class, move player, add player class
    }
}

function touchingLeftEdge() {
    return playerPosition % 15 === 0;
}

function moveLeft() {
    if (!touchingLeftEdge()) {
        // remove player class, move player, add player class
    }
}
```

## Showing our Invaders

For a start we will show three rows with 10 invaders in each row. Let's start by defining the Array of how those invaders are placed in reference to each other. 
Additionally we will define a position that will be modified when the invaders and will be used to draw the invaders on our game grid.

```javascript
let invaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ];
let invadersPosition = 3;
```

We wil use the `invadersPosition` variable to calculate our absolute position in the cells array and we can place the 
space invaders by adding a css class `invader` to the respective cells. 

```javascript
function drawInvaders() {
    invaders.forEach(relativePosition => cells[relativePosition + invadersPosition].classList.add('invader'));
}

function undrawInvaders() {
    invaders.forEach(relativePosition => cells[relativePosition + invadersPosition].classList.remove('invader'));
}
```

When we call our `drawInvaders()` function once in the beginning of our script and add some styling to our class, the invaders should show up.

```css
.invader {
  background-color: purple;
}
```

## Add aliens 

We can improve our styling by applying images for our alien invaders. As they are a little bit big I also changed the size of the cells to 18 px with a 2 px border.
As we have three different invaders I also split it into three css classes. 

```javascript
function drawInvaders() {
    invaders.forEach(relativePosition => {
        if (relativePosition < 10) {
            cells[relativePosition + invadersPosition].classList.add('invader-1');
        } else if (relativePosition < 25) {
            cells[relativePosition + invadersPosition].classList.add('invader-2');
        } else {
            cells[relativePosition + invadersPosition].classList.add('invader-3');
        }
    });
}

function undrawInvaders() {
    invaders.forEach(relativePosition => {
        cells[relativePosition + invadersPosition].classList.remove('invader-1');
        cells[relativePosition + invadersPosition].classList.remove('invader-2');
        cells[relativePosition + invadersPosition].classList.remove('invader-3');
    })
}
```

```css
.invader-1 {
    background: url(assets/enemy_01.png) no-repeat center center;
    background-size: contain;
}

.invader-2 {
    background: url(assets/enemy_02.png) no-repeat center center;
    background-size: contain;
}

.invader-3 {
    background: url(assets/enemy_03.png) no-repeat center center;
    background-size: contain;
}
```

## Let the alien invaders move 

Our alien invaders start at the top left edge, move to the right until they touch the right edge, move one row down, move to the left until we touch the left edge, move one row down and so an and so forth. 
Let's implement the move function. 

```javascript
function moveInvaders() {
    undrawInvaders();
    if (direction === 'LEFT') {
        if (touchingLeftEdge()) {
            moveInvadersDown();
            direction = 'RIGHT';
        } else {
            moveInvadersLeft();
        }
    } else if (direction === 'RIGHT') {
        if (touchingRightEdge()) {
            moveInvadersDown();
            direction = 'LEFT';
        } else {
            moveInvadersRight();
        }
    }
}

function moveInvadersDown() {
    undrawInvaders();
    invadersPosition += 15;
    drawInvaders();
}

function moveInvadersRight() {
    undrawInvaders();
    invadersPosition += 1;
    drawInvaders();
}

function moveInvadersLeft() {
    undrawInvaders();
    S -= 1;
    drawInvaders();
}
```

To get more of an arcade game feeling we will add a sound to every movement our alien makes. Let's call this function `playAlienCreak` and invoke it at the end of our `moveInvaders`.

```
function playAlienCreak() {
    let audio = new Audio('assets/alien.wav');
    audio.play();
}
```

## Losing the game if the invaders catch us 

The game is over when any of the invaders touch our ship. After every invader movement we need to check if any of our invaders overlap with the current players position.

```javascript
function checkGameOver() {
    if (invaders.some(realtivePosition => realtivePosition + invadersPosition === playerPosition)) {
        alert("An invader got you");
        clearInterval(invaderMovement);
    } 
}
```

And because it's fun let's add another sound when we lose. 

```javascript
function playGameOver() {
    let audio = new Audio('assets/game-over.mp3');
    audio.play();
}
```

## Shooting at the aliens

To give our spaceship any chance of winnig we will equip it with the ability to shoot lasers. 
Whenever we press the space bar we want a new laser to appear at the space ships position. then we want it to move upwards. 

```javascript 
function shootLaser() {
    let laserPosition = playerPosition;
    function moveLaser() {
        cells[laserPosition].classList.remove("laser");
        laserPosition -= 15;
        if (laserPosition < 0) {
            clearInterval(laserId);
        }
        cells[laserPosition].classList.add("laser");
    }
    let laserId = setInterval(moveLaser, 500);
}
```

And the logic to call this function whenever the space bar is pressed is in our eventhandler for the keypress. 

```javascript
document.addEventListener('keydown', function keyDownListener(e) {
    // ... handle other key codes
    if (e.keyCode === 32) {
        shootLaser();
    }
});
```

Now we can shoot lasers but nothing happens yet when they touch an alien. We can simply check if the laser touches an invader if one of the invaders have the same position as the laser. 
When this is the case we hide the invader and remove it from our invaders list. Moreover we will increase a score to dispaly on our page. 

```javascript
let hitByLaser = invaders.find(invaderRelativePosition => invaderRelativePosition + invadersPosition === laserPosition);
if (hitByLaser != null) {
    cells[hitByLaser + invadersPosition].classList.remove("invader");
    cells[hitByLaser + invadersPosition].classList.remove("laser");
    invaders = invaders.filter(invader => invader !== hitByLaser);
    score += 1;
    document.querySelector(".score").innerHTML = score;
    clearInterval(laserId);
}
```
