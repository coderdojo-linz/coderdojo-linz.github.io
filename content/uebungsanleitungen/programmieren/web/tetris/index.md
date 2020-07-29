# Tetris 

In this session we will impelment a version of the TETRIS game based on a video by the amazin Ania Kubów. Check out her youtube channel [ --> here <-- ](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw). 

## Project setup and file linking 

We will need three files - a index.html that contains the markup of our website, an app.js file that contains our logic and a styles.css for styling. 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="app.js"></script>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <title>Tetris</title>
    </head>
    <body>

    </body>
</html>
```

In order to verify that our linking works out properly we put an `alert('Hello Tetris')` to the app.js file and a `body { background: hotpink; }` to the styles.css file. 
We should now see a popup containing the text "Hello Tetris" when we reload the page and the pages background should have a specified color. 

## Set up the Grid for our Tetris game 

The main thing we need in our game is our game grid - We will start with a game are with a width of 10 and a height of 20. Therefore we need 200 cells. 
A cell will be represented by a div tag.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="app.js"></script>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <title>Tetris</title>
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

Next up we will define the size of our grid and make it visibile by applying some background colors. We want every cell to have a size of 20 x 20 pixels therefor our whole grid will have a width of 10 * 20 = 200 and a height of 20 * 20 = 400 pixels. We will also set up some styling for our cells so we see their placement.

```css
.grid {
    height: 400px; 
    width: 200px;
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
00 01 02 03 04 05 06 07 08 09
10 11 12 13 14 15 16 17 18 19
20 21 22 23 24 25 26 27 28 29
...
190 191 192 193 194 195 196 197 198 199
```

## Display a random Tetromino on the top. 

There are five different tetrominos and in order to choose randomly from them we'll need to define each tetromino. We will define each tetromino as an array of their possible rotations inside a 4x4 field. 

An lTetromino(L) can have the following displays: 

```
  0 1 2 3
0   # #
1   # 
2   #
3

  0 1 2 3
0
1 # # #
2     #    
3   

  0 1 2 3
0   #
1   # 
2 # # 
3

  0 1 2 3
0
1 #
2 # # #
3   
```

which corresponds to 

```javascript
const lTetromino = [
    [1, width+1, width*2+1, 2], 
    [width, width+1, width+2, width*2+2], 
    [1, width+1, width*2+1, width*2], 
    [width, width*2, width*2+1, width*2+2]
];
```

We'll do the exact same thing for all five of our tetrominos and put the five tetrominos in one array to choose randomly from.

```javascript
const width = 10;
const height = 20;

const lTetromino = [
    [1, width+1, width*2+1, 2], 
    [width, width+1, width+2, width*2+2], 
    [1, width+1, width*2+1, width*2], 
    [width, width*2, width*2+1, width*2+2]
];
const zTetromino = [
    [0, width, width+1, width*2+1], 
    [width+1, width+2, width*2, width*2 +1], 
    [0, width, width+1, width*2+1], 
    [width+1, width+2, width*2, width*2 +1]
];
const tTetromino = [
    [1, width, width+1, width+2], 
    [1, width+1, width+2, width*2+1], 
    [width, width+1, width+2, width*2+1], 
    [1, width, width+1, width*2+1]
];
const iTetromino = [
    [1, width+1, width*2+1, width*3+1], 
    [width, width+1, width+2, width+3], 
    [1, width+1, width*2+1, width*3+1], 
    [width, width+1, width+2, width+3]
];
const oTetromino = [
    [0, width, 1, width+1], 
    [0, width, 1, width+1], 
    [0, width, 1, width+1], 
    [0, width, 1, width+1]
];

const allTetrominos = [lTetromino, zTetromino, tTetromino, iTetromino, oTetromino];

```

Next we will write a function to display our tetromino on the grid, we will do this by applying a css class to the cells that our tetromino is covering. First we will add some styling to all elements that have a `class="falling-tetromino"`. 

```css 
.falling-tetromino {
    background: hotpink;
}
```

Now we need to implement a draw and undraw function for our tetromino - the function will draw a tetromino, which is an array of numbers that tells us which cells to color repectively to our current position at a specific position. `currentTetromino` and `currentPosition` are global variables, we will need to modify and read them across functions. 

```javascript
let cells = Array.from(document.querySelectorAll('.grid div'))
let currentTetromino = allTetrominos[0][0];
let currentPosition = 4;

function draw() {
    currentTetromino.forEach(drawingOffset => {
        cells[currentPosition + drawingOffset].classList.add('falling-tetromino');
    });
}

function undraw() {
    currentTetromino.forEach(drawingOffset => {
        cells[currentPosition + drawingOffset].classList.remove('falling-tetromino');
    });
}

```

In order to test it we will just use a `draw();` at the end of our code and set `currentTetromino` to  `allTetrominos[0][0]` and currentPosition to `4` which is the center of the top row of our grid. Now if we reload the page - we might see no tetrominio displayed and see an error in our console instead. 

⚠️ That's because we try to load all cells with `document.querySelectorAll('.grid div')` before the HTML is built actually and then this selector returns nothing. 
In order to fix that we will wrap our code in a event listener that listens on the document ready - this event will be fired once the full HTML has been rendered initially. 

```javascript
document.addEventListener('DOMContentLoaded', () => {
   // all of our existing code
});
```

## Implement moving left and right with the arrow keys

Next we will implement our moveLeft and moveRight functions so that we can move our tetromino to the left and right when we press those arrow keys: 

```javascript 
function moveLeft() {
    undraw();
    currentPosition -= 1; 
    draw();
}

function moveRight() {
    undraw();
    currentPosition += 1; 
    draw();
}
```

By adding an event listener to the keydown event we can specify a function that will always be called when any key on the keyboard is pressed. This event has a property `keyCode` which we can use to only react on certain key presses. 

```javascript
document.addEventListener('keydown', function keyDownListener(e) {
    if (e.keyCode ===39) { // arrow right
        moveRight();
    } else if (e.keyCode === 37) { // arrow left
        moveLeft();
    }
});
```

Now we can already properly move to the left and to the right but we can move outside of our grid and cause an error in our program, so we need to add a check in the moveLeft/moveRight function to only if move if we are not yet touching the edge. 

We can easily identify if one of our displayed elements touches the left side by calculating the aboslute positions and using the modolo function. 

```javascript
function touchingRightEdge() {
    return currentTetromino.some(offset => (currentPosition + offset) % width === width - 1);
}

function moveRight() {
    if (!touchingRightEdge()) {
        // undraw, modify currentPosition, draw
    }
}

function touchingLeftEdge() {
    return currentTetromino.some(offset => (currentPosition + offset) % width === 0);
}

function moveLeft() {
    if (!touchingLeftEdge()) {
        // undraw, modify currentPosition, draw
    }
}
```

💡 `some` is a function on an array or list that evaluates a given condition for every element in the array or list. If the condition resolves to true for any (or some ;)) of the elements it will return `true`.

## Implement rotating with the arrow up key 

When we press the arrow up key we would like to rotate our tetromino. In order to do so we will extract variables for the currentTetrominoIdx and the currentRotationIdx and modify the rotationIdx and currentTetromino variable in the rotate function. Moreover we will add another if statement to our keydown event listener.

```javascript
function rotate() {
    undraw()
    currentRotationIdx = (currentRotationIdx + 1) % 4
    currentTetromino = allTetrominos[currentTetrominoIdx][currentRotationIdx]
    draw()
}

document.addEventListener('keydown', function keyDownListener(e) {
    // left and right arrow handling
    } else if (e.keyCode === 38) { // arrow up
        rotate();
    }
});
```

Now when we press the arrow up key we can rotate our tetromino - great! 

## Implement moving down with the arrow down key

In tetris the tetrominos fall downward over time (we will implement that soon ;)) but you can also speed that process up by clicking the down arrow. That's what we will implement next. 

```javascript
function moveDown() {
    undraw()
    currentPosition += width
    draw()
}

document.addEventListener('keydown', function keyDownListener(e) {
    // left, right and up arrow handling
    } else if (e.keyCode === 40) { // arrow down
        moveDown();
    }
});
```

Now we have the same problem as we had before when we implemented the left and right movement. When we are at the bottom of our field we get an error. What should actually happen is that the block freezes and stays at the bottom. 

We reach the last row if any of our absolute positions from our current tetromino is greater than 190. When we reach it we will mark our current tetromino cells as `frozen-tetromino` for later usage and start a new tetromino at the top of our grid.

```javascript
function moveDown() {
    // undraw, modify currentPosition, draw
    freeze();
}

function freeze() {
    if (touchingBottom()) {
        currentTetromino.forEach(offset => cells[currentPosition + offset].classList.add('frozen-tetromino'));
        setupRandomTetromino();
    }
}

function setupRandomTetromino() {
    currentTetrominoIdx = Math.floor(Math.random() * allTetrominos.length)
    currentRotationIdx = Math.floor(Math.random() * allTetrominos[currentTetrominoIdx].length)
    currentTetromino = allTetrominos[currentTetrominoIdx][currentRotationIdx];
    currentPosition = 4;
    draw();
}
```

Perfect! Now tetrominos get stuck at the bottom and new ones appear at the top. But for now they can still fall through other tetrominos. We will fix this next - we will make tetrominos get stuck when they touch another tetromino. 

## Freezing tetrominos when they touch another tetromino

This is where our `frozen-tetromino` class comes into play. We will add a function to check if any cell of our current tetrominos would touch an existing frozen tetromino at its new index. 

```javascript
function wouldTouchFrozenTetromino(potentialPosition) {
    return currentTetromino.some(offset => cells[potentialPosition + offset].classList.contains('frozen-tetromino'));
}
```

We need to call this function in our freeze method, to check if we would touch a frozen tetromino, if we were on row below.

```javascript
function freeze() {
    if (touchingBottom() || wouldTouchFrozenTetromino(currentPosition + width)) {
        // as before
    }
}
```

We should also check in our moveLeft and moveRight function if no frozen tetrominos are in our way. 

```javascript
function moveRight() {
    if (!touchingRightEdge() && !wouldTouchFrozenTetromino(currentPosition + 1)) {
        // as before
    }
}

function moveLeft() {
    if (!touchingLeftEdge() && !wouldTouchFrozenTetromino(currentPosition - 1)) {
        // as before
    }
}
```

## Tetrominos move down on their own 

Next up we will let the tetrominos move down on their own as soon as we click a start button. For that we will add a start button and a score field to our HTML above the grid.

```html
    <button class="start-button">Start</button>
    <h1>Score: <span class="score">0</span></h1>
```

In our JavaScript file we will add an on-click listener to the start button and call the setupTetromino logic from there to randomly select a tetromino. We can now also remove our hardcoded tetromnio from the beginning (the draw call). 

```javascript
let timerId = null;
document.querySelector('.start-button').addEventListener('click', () => {
    setupRandomTetromino();
    timerId = setInterval(moveDown, 1000);
});
```

💡 With setInterval we can create a recurring event that will happen with an interval of the given number inbetween any two calls. It returns us its unique ID and we will keep it so that we can stop this recurring action in the game over logic. 

## Full rows vanish and add to the score

Great now we can already play the game and it behaves a lot like the original game, but full rows don't vanish yet. 
Whenever all cells in one row have the `frozen-tetromino` class we need to cut out that row, and add it on top of the array again (top of the grid).

```javascript
function recalculateScore() {
    for (currentIndex = 0; currentIndex < 200; currentIndex += width) {
        const row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9]
        if (row.every(index => cells[index].classList.contains('frozen-tetromino'))) {
            const cellsRemoved = cells.splice(currentIndex, width)
            cells = cellsRemoved.concat(cells)
            cells.forEach(cell => document.querySelector('.grid').appendChild(cell)           
        }
    }
}
```

By increasing our `currentIndex` by `width` (`currentIndex += width`) in every iteration of our loop we go through our loop 20 times, as we have 20 rows. In each iteration we will save the indices of the current row in a `row` variable. The row always contains 10 values - [0, 1, 2 ... 8, 9] in the first row, [10, 11, 12 .. 18, 19] in the second row and so on until [190, 191, 192, .. 198, 199] in the last row.

💡 `every` is a function on an array or list that evaluates a given condition for every element in the array or list, like `some`. In comparision to `some` it will only return `true` if the condition is true for each element in the list or array. If a single element results in the condition evaluating to `false` the result of the `every` call will be false.

💡 `splice` is a method on an array that cuts out n elements on a specific index and returns a list of those elements. 

We add a call to this function in our `moveDown()` function. 

```javascript
function moveDown() {
    // previous logic
    recalculateScore();
}
```

Now when we are able to create a full row that row will vanish and the row will appear at the top of the grid again - with the frozen-tetromino class styling so still in pink, we need to remove this styling before we move the row to the top

```javascript
if (row.every(index => cells[index].classList.contains('frozen-tetromino'))) {
    row.forEach(
        cellIndex => {
            cells[cellIndex].classList.remove('frozen-tetromino');
            cells[cellIndex].classList.remove('falling-tetromino');
        }
    )

    const cellsRemoved = cells.splice(currentIndex, width)
    // add cells on top ...
}
```

Now the moving of the cells to the top should work properly. One thing that's still left is adding to the score and displaying it. 
We can easily do that by increasing the score by 10 whenever a row is full (because a row consists of 10 blocks) and updating our dedicated HTML element.

```javascript
if (row.every(index => cells[index].classList.contains('frozen-tetromino'))) {
    score += 10;
    document.querySelector('.score').innerHTML = score;
    // splice array and move cells to top ...
}
```

## Game Over 

Whenever we start a new tetromino and on any of its positions there is already a tetromino, that means we have lost. 
So we need to check if we are touching any frozen tetromino on our current position whenever we create a new random tetromino.
When we have lost we will just show a pop up that tells us that we have lost and clear the interval to prevent the tetrominos from falling down further. 

```javascript
function setupRandomTetromino() {
    // set up of tetrominos
    if (wouldTouchFrozenTetromino(currentPosition)) {
        alert('Game Over!');
        clearInterval(timerId);
    }
}
```

