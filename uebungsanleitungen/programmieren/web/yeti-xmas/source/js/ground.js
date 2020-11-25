function setupGround() {
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

    // trap sprites
    traps = new Group();
    // while (i < sceneWidth) {

    // }
    let trap = createSprite(425, height - 75 - trapImage.height / 2);
    trap.addImage(trapImage);
    traps.add(trap);
}