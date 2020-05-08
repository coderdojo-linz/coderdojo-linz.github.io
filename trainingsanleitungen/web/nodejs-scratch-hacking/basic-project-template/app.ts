import * as JSZip from 'jszip';
import * as process from 'process';
import * as fs from 'fs';

function getCountdownMax(): number {
    if (process.argv.length < 3) {
        console.error('Missing number from which we have to count down.');
        process.exit(-1); // Exit code <> 0 indicates error
    }

    const countdownMax = Number(process.argv[2]);
    if (isNaN(countdownMax)) {
        console.error("Please specify a valid number");
        process.exit(-1);
    }

    return countdownMax;
}

const countdownMax = getCountdownMax();
const zip = new JSZip();
zip.file("text1.txt", "Hallo");
zip.file("text2.txt", "Welt");
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream('beispiel.zip'))
    .on('finish', () => {
        console.log("File generated");
    });
