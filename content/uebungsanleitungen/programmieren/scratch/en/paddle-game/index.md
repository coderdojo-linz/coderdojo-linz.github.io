---
title: "Paddle Game"
description: "In this exercise you build a little game where you try to prevent a ball from falling down with a paddle you can move from left to right."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/buehne-und-figuren.png"
imgposition: "center bottom"
level: 2
version: 2
sprites: 3
scripts: 9
data: 2
aliases:
- /trainingsanleitungen/scratch/en/scratch-paddle-game-v3.html
- /trainingsanleitungen/scratch/en/scratch-paddle-game.html
---

## Creating Stage and Sprites

1. {{< imgblock "img/buehne-und-figuren.png" "creating stage and sprites" >}}
You begin by defining what your stage should look like. For this Game we need the beach backdrop, a ball, a paddle a sprite that defines the *out* area.<br/><br/>
Select the backdrop from the library with the button on the bottom left.
{{< /imgblock >}}

{{< imgblock "img/buehnenbild-auswaehlen.png" "select backdrop" >}}
{{< /imgblock >}}

2. {{< imgblock "img/figur-loeschen.png" "delete sprite" >}}
The next step is to delete the Scratchy sprite with the name *Sprite1*, by right-clicking on it and selecting *delete*.
{{< /imgblock >}}

3. {{< imgblock "img/figur-hinzufuegen.png" "add ball sprite" >}}
Now we need to add the ball sprite. To do so, click on *Choose sprite form Library* and add choose a ball sprite to use.
{{< /imgblock >}}

4. {{< imgblock "img/figur-zeichnen.png" "paint sprite" >}}
The paddle sprite has to be panted manually. For this we use the *paint new sprite* button.
{{< /imgblock >}}

5. {{< imgblock "img/paddle-malen.png" "paint paddle" 8 >}}
At the drawing area we have to paint a simple rectangle. Therefore we need the *rectangle* and the *fill with color* tool from the toolbox.<br/><br/>
When your have finished drawing the paddle you can move it by clicking and dragging the sprite in the top left scene design area. Drag the paddle to the bottom part of your scene but not at the very bottom, because we need some extra space for the *out* area down there.
{{< /imgblock >}}

6. {{< imgblock "img/out.png" "Out" >}}
Finally we have to paint another sprite using the same tools to create the *out* area. Only this time, paint the rectangle in another color and use the whole drawing area. When done move the sprite to the very bottom of your scene.
{{< /imgblock >}}

7. {{< imgblock "img/figuren-benennen.png" "rename the figures" >}}
To make it easier for you to use the sprites later on, just give them custom names like *paddle* and *out* instead of *Sprite 1* and *Sprite 2*, by clicking on the blue *i* on the top left corner of the selected sprite..
{{< /imgblock >}}

## Move the Paddle From Left to Right.

1. {{< imgblock "img/schlaeger-bewegen.png" "move the paddle" 4 >}}
In order to be able to keep the ball in the air, you must be able to move the paddle to the left and right.
To do so use the *when ... key pressed* event. You can choose the *left arrow* and the *right arrow*.
In case of *left arrow*, set the direction to -90 degrees, which means that the paddle will move to the left. Then move the paddle 15 steps.
For *right arrow* set the direction to 90 degrees, which means that the paddle will move to the right. <br/><br/>
To prevent the paddle from moving out of the screen, check if the current *x-position* of the paddle is in a valid range. <br/><br/>
When you press either the left or right arrow now, the paddle will move. <br/><br/>
At the start of the game the paddle should be placed in the center of the screen. To do so use the *when flag clicked* action and set the current x-position of the paddle to 0.
{{< /imgblock >}}

## Let the Ball Bounce

1. {{< imgblock "img/ball-bewegen.png" "move ball" 4 >}}
Now it's time to move the ball. When the game is started the ball should be placed in the middle of the screen. To do so set the current x- and y-position to 0. Moreover set the direction to zero, which means that the ball will move upwards. <br/><br/>
Now the movement can start. Repeat the following three actions: *move 10 steps*, *if on edge, bounce* and *wait 0.05 secs*. 
By changing this value you can control the balls speed. <br/><br/>
If you run this script now, the ball will bounce between top and bottom edge, but the paddle will be ignored.
{{< /imgblock >}}

2. {{< imgblock "img/schlaeger-beruehren.png" "touching paddle" 4 >}}
To change the direction of the ball, as soon as he touches the paddle, we need some more actions when the game starts. 
Here we have to check infinitely whether the ball touches the paddle or not. If it does, the direction is set to a random value between -40 and 40. <br/><br/>
Direction 0 degrees means straight upwards. A value between -40 and 40 means that the ball will move upwards but spreads slightly to the left or right. <br/><br/>
Then wait until the ball no longer touches the paddle before continuing the script. 
{{< /imgblock >}}

3. {{< imgblock "img/out-erkennen.png" "recognize out" 4 >}}
Last but not least you have to detect the ball touching the out area. In that case the game is over.
{{< /imgblock >}}

{{< imgblock "img/game-over.png" "Game over" >}}
{{< /imgblock >}}

## Some Ideas

* Instead of letting the ball move constant 10 steps a time you could increase the step count over time to make the game more difficult.
* Count the amount of paddle hits and let the player know at the end of the game how many times the ball touched the paddle.
* Control the paddle by mouse instead of the keyboard.
* Add another ball to the game after some time. 

## Try It

You can download and try an already completed version of this game [here](scratch-paddle-game.sb2).