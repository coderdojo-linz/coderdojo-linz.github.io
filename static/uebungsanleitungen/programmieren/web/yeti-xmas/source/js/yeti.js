function setupYeti() {
    // yeti sprite
    yeti = createSprite(width / 2, 300, 115, 143);
    yeti.scale = 0.3;
    yeti.setCollider('rectangle', 0, 0, 115, 280);

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

    // stop animation
    if (sky[0].position.x - skyImage.width / 2 === (config.levels[level - 1].length * 50 - width) * -1) {
        yeti.changeAnimation('pause');
        stop();
    }

    // check collisions
    yeti.collide(ground, (collision) => {
        if (collision.touching.bottom) {
            yeti.velocity.y = 0;
            canJump = true;
        } else if (collision.touching.top) { 
            yeti.velocity.y = 0;
        }
    });

    yeti.collide(traps, _ => {
        if (gameState === state.RUNNING) {
            yeti.changeAnimation('dead');
            gameState = state.GAMEOVER;
            stop();
            initializeRestart();
        }
    });

    yeti.collide(candy, _ => {
        if (gameState === state.RUNNING) {
            candy.remove();
            gameState = state.FINISHED;
            yeti.changeAnimation('pause');
            initializeRestart();
        }
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
    if (gameState == state.RUNNING) {
        if (keyCode === 32 && canJump) {
            yeti.velocity.y = jump;
            canJump = false;
        }
    }
}