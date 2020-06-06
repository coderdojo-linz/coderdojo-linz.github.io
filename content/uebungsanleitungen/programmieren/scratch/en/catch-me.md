---
title: "Catch Me"
description: "In this game you are a little fish and you try to escape the big dangerous shark. Can you do it?"
img: "endgame.png"
level: 1
---

## Creating Stage and Sprites

1. ![select the stage](01-background.png){: .right}
You need to decide what your stage should look like. First of all we need to build our underwater world where our fishes live. Click on *Select backdrop from library* on the bottom left and choose your background image, for example the underwater1.

2. ![delete sprite](02-delete-scratchy.png){: .right}
The next step is to delete the Scratchy sprite with the name *Sprite1*, by right-clicking on it and selecting *delete*.

3. ![add sprites](03-fish.png){: .right}
Now we need to add the fish as well as the shark we are trying to escape from to our scene. To do so, click on *Choose sprite form Library* and add the fish and shark sprite. Of course you could choose different characters, for example a bug escaping a bird or a person escaping a lion. It's all up to your creativity.

4. ![resize the fish](04-resize.png){: .right}
Currently the fish sprite is the same size as the shark sprite. To make the little fish actually smaller than the big shark, we have to resize the fish sprite. To do so, select the fish sprite, so it is highlighted with a blue border. Now click on the *Costumes* tab, select the fish and resize it.

5. ![set center point](05-fish-center.png){: .right}
To make the fish rotate at the correct point when he's turning around, you have to define the rotation point by selecting the *center pint* tool on the top right corner and click at the center of your fish sprite.

6. ![rename sprites](06-rename.png){: .right}
To make it easier for you to use the sprites later on, just give them custom names like *Bad Shark* and *Me* by clicking on the blue *i* on the top left corner of the selected sprite.

## Move the Fish

1. ![move the fish](07-move-fish.png){: .right}
To make the fish move up, down, left and right you need to build the scripts that controls the fish<br/><br/>
  • First, select the fish sprite.<br/>
  • Select the *Script* tab and use the *when ... key pressed* action from the *Events* category.<br/>
  • Then add the *point in direction ...* action from the *Motion* category to turn the fish into the right direction.<br/>
  • Afterwards use the *move ...steps* to move the Sprite.<br/><br/>
For *up arrow*: direction 0 degrees, 10 steps.<br/>
For *down arrow*: direction 180 degrees, 10 steps.<br/>
For *left arrow*: direction -90 degrees, 10 steps.<br/>
For *right arrow*: direction 90 degrees, 10 steps.<br/>
the more steps you choose the faster does your character move.


## Move the Shark

1. ![move the shark](08-move-shark.png){: .right}
Now it's time to move the shark around the scene.<br/><br/> 
  • Select the shark sprite, so it is highlighted with a blue border.<br/>
  • Switch to the *Scripts* tab.<br/>
  • Here we use the *when ... clicked* event.<br/>
  • Add the *forever* action from the *Control* category.<br/>
  • Move the shark with the *move 10 steps*, *wait 0.1 secs*, *if on edge, bounce* und *turn ... degrees*<br/>
  • To make the game more exciting we will use a random number to define how many degrees the shark should turn. In this case we use the *pick random 1 to 10* action from the *Operators* category. Drag the action directly over the number 10 from the *turn ... degrees* action.
  
## Catch the Fish

1. ![touching the fish](09-touch-fish.png){: .right}
When the shark touches the fish, the fish should be hidden and repositioned to the left top corner.<br/><br/> 
  • Select the fish sprite.<br/>
  • Within the *Scripts* tab we now add the repositioning logic.<br/>
  • Again drag the *when ... clicked* action from the *Events* category onto your scripts area.<br/>
  • Use the *go to x: ... , y: ...* action from the *Motion* category to set the initial position on the top left corner x: -230 y: 170, and add the *show* action from the *Looks* category.<br/>
  • If the fish touches the shark sprite (*Control* *if ... then* - *Sensing* *touching ...*), then send a message (*Events* *broadcast ...*), *hide*, *wait 5 secs*, *show* ans set the initial position *go to x: -230, y: 170*. Finally show the player a message with the *say ... for ... secs* from the *Looks* category.

2. ![touching the shark](10-touch-shark.png){: .right}
When the shark catches the fish, he should snap twice and the game is over.<br/><br/> 
  • Select the shark sprite.<br/>
  • Switch to the *Script* Tab and tell the player that he is "game over!".<br/>
  • *Events* - *when i receive ...* and *Looks* - *say "game over!" for 4.5 secs*.
  • Drag in the *when i receive ...* event a second time and add the *Control* - *repeat ...* action.<br/>
  • To make the shark snap, a couple of different versions of the shark are available under the *Costumes* tab. Add the following actions within the repeat loop: *switch cosume to shark-b*, *wait 0.3 secs*, *switch cosume to shark-a*, *wait 0.3 secs*<br/>

## Some Ideas

* Make the game more difficult by adding another, slower, shark.
* Add a clock to see how long you can manage to escape the shark.
* Control the fish by mouse instead of the keyboard.


## Try It

You can download and try an already completed version of this game [here](scratch-catch-me.sb2).