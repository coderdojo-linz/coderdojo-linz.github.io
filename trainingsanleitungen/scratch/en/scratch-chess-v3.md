---
layout: sushi
title: Scratch Chess
description: In this example, we want to build a chess engine, and above all, the two most important functions - the application of different move combinations, and the evaluation of the resulting board.
scratch-images:
- scratch-chess-v3/chess-game.png
scratch-level: 3
scratch-sprites: 4
scratch-scripts: 35
scratch-data: 70
---

# Scratch Chess

<div class="row sushi-intro">
	<div class="col-sm-6"><img alt="Chess" src="scratch-chess/chess-game.png" /></div>
	<div class="col-sm-6">
		<p></p>
		<p>In this example, we want to build a chess engine, and above all, the two most important functions - the application of different move combinations, and the evaluation of the resulting board.</p>
		<p>You can also try the finished project at <a href="https://scratch.mit.edu/projects/148769358/" target="_blank">https://scratch.mit.edu/projects/148769358/</a></p>
		<table class="table sushi-stats">
			<tbody>
				<tr>
					<td>Figuren</td>
					<td>4</td>
				</tr>
				<tr>
					<td>Skripte</td>
					<td>35</td>
				</tr>
				<tr>
					<td>Daten</td>
					<td>70</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

Chess programs try to find the optimal move choice and calculate as many moves in advance as possible. As a result, the number of resulting boards to be examined grows exponentially, so that even modern computers reach their computing limits. Our chess program must therefore be quick and smart. "Smart" means that not every move combination is calculated, by discarding bad moves immediately. Once the program has calculated a sequence of moves, it will evaluate the resulting board and compare that to other previous results.
## Preparation

Log in to Scratch with your user. If you do not have a scratch user yet, a mentor will be happy to help. Prerequisite for creating a Scratch user is an existing e-mail address. You need to be logged in to Scratch so you can remix the project template, thus obtain a working copy. Open the project [https://scratch.mit.edu/projects/150304452/](https://scratch.mit.edu/projects/150304452/){:target="_blank"}, and click on "Remix". Now you have a project copy that you can continue working on.

We would like to implement these two function blocks. You can find them in the upper left corner sprite of the "Board" script:

<p><img src="scratch-chess-v3/chess-blocks.png" class="max-full" /></p>

Our program will play with the black pieces, the user plays white.

## Board Evaluation - EvaluateBoard()

The board evaluation is implemented by the custom block "EvaluateBoard". It is important that we select option "Run without screen refresh" (right-click on the custom block header, then "Edit"). Otherwise our program would be too slow.

The evaluation is composed of the material value and the position value. Each piece has an assigned value; a king is valued higher than everything else combined (20,000), as a defeated king means loss by checkmate. Next comes the queen (900), then rooks (500), and so on. The opponent's pieces have a negative value so that all numbers can be added up. Having one pawn and one tower more than the other side results in a bard evaluation of 900 + 500 = 1400. Thus we can search for moves that promise the best evaluation, and discard others.

Piece values are stored in constant variables named "BlackKing", "WhiteKing", etc. Our current chessboard is stored in the "Board" list. Board has 64 list entries, one for each square. For a board evaluation, we loop over the list and add up the entry values.

The second evaluation aspect is the piece position. A queen in the middle of the board usually is preferable to a corner placement, because it then has a lot more attack options. Similar rules apply to other pieces. However, placing a king in the center is not good, at least not at the beginning of the game. Pawns can be active in the center, or protect the king once it has castled, or advance to a pawn promotion later.

In order to be able to automatically evaluate piece positions, there are lists like "KingPieceSquare", "QueenPieceSquare", etc. Those lists again contain 64 entries. Because our program play black, whit piece position values must be negated. For the black pieces we have to mirror the position on the board. This is done by accessing list index "65 - Idx". The entire custom block looks like this:

<p><img src="scratch-chess-v3/chess-eval-code.png" class="max-full" /></p>

## Move Selection - AlphaBetaMinMaxImpl()

Now that we can evaluate a board, we have to calculate the boards which result from playing move sequences we want to look into. For this, we first calculate a list of possible moves. We then loop over those moves and apply the current move. We then invoke AlphaBetaMinMaxImpl() again, so it can calculate the opponent's followup-move and so on.

When calculating the opponent's moves, we can assume that the opponent chooses the best move available (Min evaluation for white) - and so do we (Max evaluation for black).

The runtime performance of Scratch only allows to look ahead a few  moves. Thereafter, the resulting board is evaluated and compared with previous scores. This results in a decision tree as below, with the nodes representing the boards and their evaluation, with the arrows  representing the respective moves in between. The best guaranteed evaluation in this example is 5. Even if a board with an evaluation f 10 seems possible, the opponent can prevent this by a skillful countermove, which then results in a worse rating (namely 2). We therefore choose the move that ensures an evaluation of 5, no matter which move the opponent chooses.

<p><img src="scratch-chess-v3/chess-minimax.png" class="max-full" /></p>

In this decision tree example, there are only a few possible moves. For chess, there are a lot more. With four consecutive moves and 30 moves for each turn, there are 30^4 = 810,000 resulting boards, each of which must be evaluation, resulting in 51,840,000 assignments (unless we provide a smarter, incremental approach by working with evaluation deltas per move). Java or C++ programs might still handle that (although it would be better to use computing power for grater search depth), But in Scratch this would simply be much to slow.

We can apply a better approach, namely the same thing that humans intuitively do when playing chess: discard pointless move options immediately. Moves that are worse than the previously guaranteed result need not be considered any further. The same is true for the opponent's move. This is called Alpha / Beta Search - Alpha and Beta are the guaranteed upper and lower valuation limits for the current calculation. All variants outside of these limits can be discarded.

Our script is a custom block that keeps calling itself. This is known as a recursive function. We apply the current move and invoke AlphaBetaMinMaxImpl() for the next moves to be calculated an applied. Of course we'll have to stop that at some point - and that's when we have reached MaxDepth (depending on the level of difficulty, these are two, three or four moves). At this point the board is evaluated. 

Our intermediate values (Min, Max, Alpha, Beta, Moves) are all stored in lists. This is necessary for recursions because there are no local variables in Scratch, and function parameters cannot be changed in value. Scratch variables are not sufficient for this, otherwise we would overwrite the them in AlphaBetaMinMaxImpl() calls. These lists contain an entry for each call depth. An alternative would be to label the variables from 1 to N and to duplicate the whole function block for each draft depth. But we really do not want to go that path (the full project would require 15 duplicate variables and custom blocks). The resulting MiniMax / Alpha-Beta Pruning implementation looks like this

<p><img src="scratch-chess-v3/chess-minimax-code.png" class="max-full" /></p>

Great, you're done! Please go ahead and start the program now. Once oyu made your move the engine begins to calculate, running the two custom blocks you just programmed.

Not all special cases have been covered though. For example, our program does not yet pay attention whether a king is in check. Draws are currently not being detected. And the evaluation lacks some parts, e.g. piece mobility.

Further information about our chess project can be found in the Scratch discussion forum at [https://scratch.mit.edu/discuss/post/2967632/](https://scratch.mit.edu/discuss/post/2967632/){:target="_blank"}. Chess programming in general is discussed in more detail in this presentation: [https://www.slideshare.net/ArnoHuetter/chess-engine-programming](https://www.slideshare.net/ArnoHuetter/chess-engine-programming){:target="_blank"}

We hope you enjoy playing against your own chess engine. Are you winning at level Difficult? How could you still improve it - perhaps by increasing search depth on some selected moves, even if it takes a little longer? The original program at https://scratch.mit.edu/projects/148769358/ can look ahead up to 15 moves, making it the most powerful chess program on Scratch. The best chess programs in the world go as far as 35 subsequent moves.
