function setupSky() {
    // sky sprite
    sky = new Group();
    for (let i = 0; i < config.levels[level - 1].length * 50 + width / 2; i += skyImage.width) {
        let item = createSprite(
            i + skyImage.width / 2,
            skyImage.height / 2);
        item.addImage(skyImage);
        sky.add(item);
    }
}

function drawSky() {
    background('#00ccff');
}