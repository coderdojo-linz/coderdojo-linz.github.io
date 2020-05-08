import {emptySvg, svgTemplate} from './svgTemplates';

import * as JSZip from 'jszip';
import * as process from 'process';
import * as fs from 'fs';
import { emptyStageFileName, buildProject } from './projectBuilder';

// Get number from which we have to count down.
function getCountdownMax(): number {
    // - First argument is node.exe
    // - Second argument is name of the Node.js app (app.js)
    // - Third argument will be the number we have to count down from

    // Verify that third argument is present
    if (process.argv.length < 3) {
        // No third argument given -> error message
        console.error('Missing number from which we have to count down.');
        process.exit(-1); // Exit code <> 0 indicates error
    }

    // Verify that third argument is a string
    const countdownMax = Number(process.argv[2]);
    if (isNaN(countdownMax)) {
        // Third argument is not a number -> error message
        console.error("Please specify a valid number");
        process.exit(-1);
    }

    return countdownMax;
}

const countdownMax = getCountdownMax();
const spriteCostume = {
    "assetId": "ASSET-ID-HERE",
    "name": "NAME-HERE",
    "bitmapResolution": 1,
    "md5ext": "FILE-NAME-HERE",
    "dataFormat": "svg",
    "rotationCenterX": 240,
    "rotationCenterY": 180
};

const project = buildProject(countdownMax);
const zip = new JSZip();
zip.file(emptyStageFileName, emptySvg);
for (let i = countdownMax; i >= 0; i--) {
    const numberAsString = i.toString();
    const numberAsPaddedString = numberAsString.padStart(32, '0');
    const fileName = `${numberAsPaddedString}.svg`;

    const costume: any = {};
    Object.assign(costume, spriteCostume);
    costume.assetId = numberAsPaddedString;
    costume.name = numberAsString;
    costume.md5ext = fileName;
    project.targets[1].costumes.push(costume);

    const svg = svgTemplate.replace('NUMBER-HERE', numberAsString);
    zip.file(fileName, svg);
}

zip.file('project.json', JSON.stringify(project));

zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream('countdown.sb3'))
    .on('finish', () => {
        console.log("Scratch game generated");
    });
