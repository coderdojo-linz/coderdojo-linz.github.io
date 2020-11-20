// sprites
let ground, yeti;
let speed = 1;
let yetiSpeed = 3;
let gravity = 0.3;
let jump = -7;
let canJump = true;
let skyImage, earthImage, surfaceImage, trapImage;
let backgroundPosition = 0;
let sceneWidth = 1000;
let gameOver = false;

this.focus();

function preload() {
    // background
    skyImage = loadImage('assets/background.png');
    earthImage = loadImage('assets/earth.png');
    surfaceImage = loadImage('assets/surface.png');
    trapImage = loadImage('assets/surface-danger.png');
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

    sky.forEach(i => i.velocity.x = -1);

    // ground sprite
    ground = new Group();
    for (let i = 0; i < sceneWidth; i += 50) {
        let item = createSprite(i + 50 / 2, height - 25);
        item.addImage(earthImage);
        item.scale = 50.0 / earthImage.width;
        item.immovable = true;
        ground.add(item);

        item = createSprite(i + 50 / 2, height - 75);
        item.addImage(earthImage);
        item.scale = 50.0 / earthImage.width;
        item.immovable = true;
        ground.add(item);

        item = createSprite(i + 50 / 2, height - 100);
        item.addImage(surfaceImage);
        item.scale = 50.0 / surfaceImage.width;
        item.immovable = true;
        ground.add(item);
    }

    ground.forEach(i => i.velocity.x = -1);

    // trap sprites
    traps = new Group();
    // while (i < sceneWidth) {

    // }
    let trap = createSprite(425, height - 75 - trapImage.height / 2);
    trap.addImage(trapImage);
    traps.add(trap);
    traps.forEach(i => i.velocity.x = -1);

    // yeti sprite
    yeti = createSprite(300, 330, 115, 143);
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

    yeti.changeAnimation('walk');
}

function draw() {
    clear();
    background('#00ccff');

    if (sceneFinished()) {
        yeti.changeAnimation('pause');
        stopScene();
    }

    yeti.velocity.y += gravity;
    yeti.collide(ground, _ => {
        yeti.velocity.y = 0;
        canJump = true;
    });

    yeti.collide(traps, _ => {
        gameOver = true;
        yeti.changeAnimation('dead');
        stopScene();
    });

    moveYeti();
    drawSprites();
}

function moveYeti() {
    if (!gameOver) {
        if (keyIsPressed && keyIsDown(LEFT_ARROW) && yeti.position.x > 0) {
            yeti.changeAnimation('run');
            yeti.mirrorX(-1);
            yeti.velocity.x = -1 * yetiSpeed;
        } else if (keyIsPressed && keyIsDown(RIGHT_ARROW) && yeti.position.x < width) {
            yeti.changeAnimation('run');
            yeti.mirrorX(1);
            yeti.velocity.x = yetiSpeed;
        } else if (!gameOver) {
            if (sceneFinished()) {
                yeti.changeAnimation('pause');
            } else {
                yeti.changeAnimation('walk');
            }
            yeti.mirrorX(1);
            yeti.velocity.x = 0;
        }
    }
}

function sceneFinished() {
    return sky[0].position.x - skyImage.width / 2 === (sceneWidth - width) * -1;
}

function keyPressed() {
    if (!gameOver) {
        if (keyCode === 32 && canJump) {
            yeti.velocity.y = jump;
            canJump = false;
        }
    }
}

function stopScene() {
    sky.forEach(i => i.velocity.x = 0);
    ground.forEach(i => i.velocity.x = 0);
    traps.forEach(i => i.velocity.x = 0);
}
