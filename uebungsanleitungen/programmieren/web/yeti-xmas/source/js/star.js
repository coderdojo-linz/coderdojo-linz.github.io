let starImage;
let star;
let stars;

function preloadStar() {
    starImage = loadImage('assets/star.png');
}

function setupStar() {
    stars = new Group();

    setInterval(() => {
        if (gameState === state.RUNNING && candy.velocity.x != 0) {
            star = createSprite(random(0, width), 0, 50, 47);
            star.addImage(starImage);
            star.velocity.x = random(-10, 10) / 10;
            star.velocity.y = gravity;
            stars.add(star);
        }
    }, 3000);
}

function drawStar() {
    stars.forEach(i => i.velocity.y += gravity / 5);
}