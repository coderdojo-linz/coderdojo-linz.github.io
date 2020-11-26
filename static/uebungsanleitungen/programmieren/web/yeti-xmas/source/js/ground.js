function setupGround() {
    // ground sprites
    ground = new Group();

    for (let i = 0; i < config.levels[level - 1].length * 50; i += 50) {
        let item = createSprite(i + 50 / 2, height - 25);
        item.addImage(earthImage);
        item.immovable = true;
        ground.add(item);

        item = createSprite(i + 50 / 2, height - 75);
        item.addImage(earthImage);
        item.immovable = true;
        ground.add(item);

        item = createSprite(i + 50 / 2, height - 100);
        item.addImage(surfaceImage);
        item.immovable = true;
        ground.add(item);
    }

    for (let i = 0; i < config.levels[level - 1].platforms.length; i++) {
        let platformConfig = config.levels[level - 1].platforms[i];
        for (let y = 0; y < platformConfig.length; y++) {
            let platform = createSprite(platformConfig.position * 50 - 25 + y * 50, height - 250);
            platform.addImage(surfaceImage);
            platform.immovable = true;
            ground.add(platform);
        }
    }

    // trap sprites
    traps = new Group();

    for (let i = 0; i < config.levels[level - 1].traps.length; i++) {
        let trapConfig = config.levels[level - 1].traps[i];
        for (let y = 0; y < trapConfig.length; y++) {
            let trap = createSprite(trapConfig.position * 50 - 25 + y * 50, height - 75 - trapImage.height / 2);
            trap.addImage(trapImage);
            trap.immovable = true;
            traps.add(trap);
        }
    } 
}