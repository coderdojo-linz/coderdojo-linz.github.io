const state = {
    READY: 'ready',
    RUNNING: 'running',
    GAMEOVER: 'gameover',
    FINISHED: 'finished'
};

// sprites
let ground, yeti, sky, btnStart;
let speed = 1;
let yetiSpeed = 3;
let gravity = 0.3;
let jump = -7;
let canJump = true;
let skyImage, earthImage, surfaceImage, trapImage, btnStartImage;
let backgroundPosition = 0;
let sceneWidth = 1000;
let gameState = state.READY;

this.focus();

function preload() {
    // background
    skyImage = loadImage('assets/background.png');
    earthImage = loadImage('assets/earth.png');
    surfaceImage = loadImage('assets/surface.png');
    trapImage = loadImage('assets/surface-danger.png');
    btnStartImage = loadImage('assets/btn-start.png');
}

function setup() {
    createCanvas(600, 500);

    // sky sprite
    sky = new Group();
    for (let i = 0; i < sceneWidth; i += skyImage.width) {
        let item = createSprite(
            i + skyImage.width / 2,
            skyImage.height / 2);
        item.addImage(skyImage);
        sky.add(item);
    }

    setupGround();
    setupYeti();

    // button sprites
    btnStart = createSprite(width / 2, height / 2 - 30);
    btnStart.addImage(btnStartImage);
    btnStart.scale = 0.5;
    btnStart.onMousePressed = () => {
        if (gameState == state.GAMEOVER || gameState == state.FINISHED) {
            restart();
        } else {
            start();
        }
    }
}

function draw() {
    clear();
    background('#00ccff');

    text(gameState.toString(), 20, 20);

    if (sky[0].position.x - skyImage.width / 2 === (sceneWidth - width) * -1) {
        yeti.changeAnimation('pause');
        gameState = state.FINISHED;
        stop();
    }

    drawYeti();
    drawSprites();
}

function keyPressed() {
    yetiKeyPressed();
}

function start() {
    gameState = state.RUNNING;
    btnStart.visible = false;

    sky.forEach(i => i.velocity.x = -1);
    ground.forEach(i => i.velocity.x = -1);
    traps.forEach(i => i.velocity.x = -1);

    yeti.changeAnimation('walk');
}

function restart() {
    sky.removeSprites();
    ground.removeSprites();
    traps.removeSprites();
    yeti.remove();
    btnStart.remove();
    gameState = state.READY;
    setup();
}

function stop() {
    sky.forEach(i => i.velocity.x = 0);
    ground.forEach(i => i.velocity.x = 0);
    traps.forEach(i => i.velocity.x = 0);

    setTimeout(() => {
        btnStart.visible = true;
    }, 3000);
}
