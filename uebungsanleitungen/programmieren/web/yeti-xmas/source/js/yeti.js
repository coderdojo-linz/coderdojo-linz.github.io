let walkAnimation, runAnimation, pauseAnimation, deadAnimation;

function preloadYeti() {
    walkAnimation = new Animation('assets/yeti-walk-1.png', 'assets/yeti-walk-9.png');
    runAnimation = new Animation('assets/yeti-walk-1.png', 'assets/yeti-walk-9.png');
    pauseAnimation = new Animation('assets/yeti-idle-1.png', 'assets/yeti-idle-9.png');
    deadAnimation = new Animation('assets/yeti-dead-1.png', 'assets/yeti-dead-9.png');
}

function setupYeti() {
    // yeti sprite
    yeti = createSprite(width / 4, 300, 115, 143);
    yeti.scale = 40 / yeti.height;
    yeti.setCollider('rectangle', 0, 0, 115, 280);

    // yeti animations
    walkAnimation.frameDelay = 5;
    yeti.addAnimation('walk', walkAnimation);

    runAnimation.frameDelay = 1;
    yeti.addAnimation('run', runAnimation);

    pauseAnimation.frameDelay = 10;
    yeti.addAnimation('pause', pauseAnimation);

    deadAnimation.frameDelay = 3;
    deadAnimation.looping = false;
    yeti.addAnimation('dead', deadAnimation);

    yeti.changeAnimation('pause');
}

function drawYeti() {
    yeti.velocity.y += gravity;

    // stop animation
    if (sky[0].position.x - width / 2 < (config.levels[level - 1].length * 50 - width) * -1) {
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

    yeti.overlap(traps, _ => {
        if (gameState === state.RUNNING) {
            yeti.changeAnimation('dead');
            gameState = state.GAMEOVER;
            stop();
            restart();
        }
    });

    yeti.overlap(stars, (spriteA, spriteB) => {
        if (gameState === state.RUNNING) {
            spriteB.remove();
            points++;
        }
    });

    yeti.overlap(candy, _ => {
        if (gameState === state.RUNNING) {
            candy.remove();
            stop();
            yeti.changeAnimation('pause');

            if (level === config.levels.length) {
                gameState = state.FINISHED;
            } else { 
                gameState = state.LEVELFINISHED;
            }

            restart();
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