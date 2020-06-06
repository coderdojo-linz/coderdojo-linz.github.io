---
title: "Chess"
description: "In this example, we want to build a chess engine, and above all, the two most important functions - the calculation and application of different move combinations, and the evaluation of resulting boards."
img: "chess-game.png"
imgposition: "center top"
level: 3
sprites: 4
scripts: 35
data: 70
---

You can try the finished project at <a href="https://scratch.mit.edu/projects/148769358/" target="_blank">https://scratch.mit.edu/projects/148769358/</a>

Chess programs try to find the optimal move by calculating as many moves in advance as possible. The number of resulting boards grows exponentially with each additional move, so that even modern computers reach their computing limits. Our chess program must therefore be quick and smart. Smart means that not every move combination is calculated, which can be achieved by discarding bad moves immediately. Once the program has calculated a sequence of moves, it will evaluate the resulting board and compare it to previous results.

## Preparation

Log in to Scratch with your Scratch user. If you do not have a Scratch user yet, a mentor will be happy to help creating one. Prerequisite is an existing e-mail address. You need to be logged in to Scratch so you can remix the project template, thus obtain a working copy. Open the project [https://scratch.mit.edu/projects/150304452/](https://scratch.mit.edu/projects/150304452/), and click on "Remix". Now you have a project copy that you can continue working on.

We would like to implement these two missing function blocks. You can find them in the upper left corner of the "Board" sprite's script:

<p><img src="chess-blocks-en.png" class="max-full" /></p>

Our program will play with the black pieces, the user plays white.

## Board Evaluation - EvaluateBoard()

The board evaluation is implemented by the custom block "EvaluateBoard". It is important to select the option "Run without screen refresh" (right-click on the custom block header, then "Edit"). Otherwise our program would be too slow.

Our evaluation is composed of the material and position values. Each piece has an assigned value; a king is ranked higher than everything else combined (20,000), as a defeated king means loss by checkmate. Next comes the queen (900), then rooks (500), and so on. The opponent's pieces have a negative value so that all numbers can be added up for the board's material balance. Having one pawn and one tower more than the other side results in a board evaluation of 900 + 500 = 1400. Thus, we can search for moves that promise the best board evaluation, and discard others.

Piece values are stored in variables named "BlackKing", "WhiteKing", etc. Our current chessboard state is stored in the "Board" list. Board has 64 list entries, one for each square. For calculating the board evaluation, we loop over the list and add up its entries.

The second evaluation aspect is piece position. A queen in the middle of the board usually is preferable to a corner placement, because it has a lot more attack options. Similar rules apply to other pieces. However, placing a king in the center is not good, at least not at the beginning of the game. Pawns can be active in the center, or protect the king once it has castled, or advance for pawn promotion later.

In order to automatically evaluate piece positions, there are lists like "KingPieceSquare", "QueenPieceSquare", etc. Those contain 64 entries, representing the additional value a certain piece has on a certain square. Because our program play black, white piece position values must be negated. For the black pieces we have to mirror the position on the board. This is done by accessing list index "65 - Idx". The entire custom block looks like this:

<p><img src="chess-eval-code-en.png" class="max-full" /></p>

## Move Selection - AlphaBetaMinMaxImpl()

Now that we can evaluate boards, what is missing is to calculate the boards which result from playing the move sequence we are currently looking into. First we create a list of possible moves. We then loop over those moves and apply the current one. We then invoke AlphaBetaMinMaxImpl() again, so it can compute the opponent's followup-move and so on.

When calculating the opponent's moves, we can assume that the opponent chooses the best move available (Min evaluation for white) - and so does the engine (Max evaluation for black), hence the name "MiniMax".

The runtime performance of Scratch only allows to look a few moves ahead. Thereafter, the resulting board is evaluated and compared with previous boards. This results in a decision tree as depicted below, with nodes representing the board states and their evaluation, and  arrows representing the respective moves to transition from one board state to another. The best guaranteed evaluation in this example is 5. Even if a board with an evaluation of 10 seems possible, the opponent can prevent this by a skillful countermove, which then results in a worse rating (namely 2). We therefore choose the move that ensures an evaluation of 5, no matter which move the opponent will play.

<p><img src="chess-minimax.png" class="max-full" /></p>

In this decision tree example, there are only a few moves per round. For chess, there are a lot more. With 4 consecutive moves and 30 moves for each turn, there are 30^4 = 810,000 resulting boards, each of which must be evaluated, resulting in 51,840,000 assignments (unless we provide a smarter, incremental approach by working with evaluation deltas per move). Java or C++ programs might still handle that in time (although it would be better to use computing power for greater search depth). But in Scratch this would simply be much too slow.

We can apply a better approach, namely the same thing that humans intuitively do when playing chess: discard pointless move options immediately. Moves that are worse than the previously guaranteed result need not be considered any further. The same is true for the opponent's moves. This is called Alpha / Beta Pruning - Alpha and Beta are the guaranteed upper and lower valuation limits for the current move sequence calculation. All variants outside of these limits can be discarded.

Our script is a custom block that keeps calling itself. This is known as a recursive function. We apply the current move and invoke AlphaBetaMinMaxImpl() for the next moves to be calculated and applied. Of course we'll have to stop that at some point - and that's when we have reached MaxDepth, our maximum search depth (depending on the level of difficulty, these are two, three or four moves). At this point the board is evaluated, and the function returns;

Our intermediate values (Min, Max, Alpha, Beta, Moves) are all stored in lists. This is necessary for recursions because there are no local variables in Scratch (and function parameters cannot be changed). Scratch variables are not sufficient for this, otherwise we would overwrite them in cascaded AlphaBetaMinMaxImpl() calls. These lists contain an entry for every possible call depth. An alternative would be to label the variables from 1 to N and to duplicate the whole custom block for each draft depth. But we really do not want to go that path (the full project would require 15 duplicate variables and custom blocks). The resulting MiniMax / Alpha-Beta Pruning implementation looks like this

<p><img src="chess-minimax-code-en.png" class="max-full" /></p>

Great, you're done! Please go ahead and start the program now. Once you have made your move, the engine starts to calculate, running the two custom blocks you just programmed.

Further information about our chess project can be found in the Scratch discussion forum at [https://scratch.mit.edu/discuss/post/2967632/](https://scratch.mit.edu/discuss/post/2967632/). Chess programming in general is discussed in more detail in this presentation: [https://www.slideshare.net/ArnoHuetter/chess-engine-programming](https://www.slideshare.net/ArnoHuetter/chess-engine-programming)

We hope you enjoy playing against your own little chess engine. Are you winning at level Difficult? How could you still improve it - perhaps by increasing search depth on some selected moves, even if it takes a little longer? The original program at [https://scratch.mit.edu/projects/148769358/](https://scratch.mit.edu/projects/148769358/) can look ahead up to 15 moves, making it the most powerful chess program on Scratch. The best chess programs in the world go as far as 35 subsequent moves.
