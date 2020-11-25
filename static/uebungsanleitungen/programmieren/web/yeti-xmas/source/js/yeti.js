function setupYeti() {
    // yeti sprite
    yeti = createSprite(width / 2, 330, 115, 143);
    yeti.scale = 0.3;
    yeti.setCollider('rectangle', 0, 20, 115, 143);

    // yeti animations
    const walkAnimation = new Animation('assets/yeti-walk-1.png', 'assets/yeti-walk-9.png');
    walkAnimation.frameDelay = 5;
    yeti.addAnimation('walk', walkAnimation);

    const runAnimation = new Animation('assets/yeti-walk-1.png', 'assets/yeti-walk-9.png');
    runAnimation.frameDelay = 1;
    yeti.addAnimation('run', runAnimation);

    const pauseAnimation = new Animation('assets/yeti-walk-1.png');
    yeti.addAnimation('pause', pauseAnimation);

    const deadAnimation = new Animation('assets/yeti-dead-1.png', 'assets/yeti-dead-9.png');
    deadAnimation.frameDelay = 3;
    deadAnimation.looping = false;
    yeti.addAnimation('dead', deadAnimation);

    yeti.changeAnimation('pause');
}

function drawYeti() {
    yeti.velocity.y += gravity;

    // check collisions
    yeti.collide(ground, _ => {
        yeti.velocity.y = 0;
        canJump = true;
    });

    yeti.collide(traps, _ => {
        yeti.changeAnimation('dead');
        gameState = state.GAMEOVER;
        stop();
    });

    // move
    if (gameState == state.RUNNING) {
        if (keyIsPressed && keyIsDown(LEFT_ARROW) && yeti.position.x > 0) {
            yeti.changeAnimation('run');
            yeti.mirrorX(-1);
            yeti.velocity.x = -1 * yetiSpeed;
        } else if (keyIsPressed && keyIsDown(RIGHT_ARROW) && yeti.position.x < width) {
            yeti.changeAnimation('run');
            yeti.mirrorX(1);
            yeti.velocity.x = yetiSpeed;
        } else {
            yeti.changeAnimation('walk');
            yeti.mirrorX(1);
            yeti.velocity.x = 0;
        }
    }
}

function yetiKeyPressed() {
    if (gameState == state.READY) {
        start();
    } else if (gameState == state.RUNNING) {
        if (keyCode === 32 && canJump) {
            yeti.velocity.y = jump;
            canJump = false;
        }
    }
}