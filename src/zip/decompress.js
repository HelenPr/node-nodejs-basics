import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'node:path';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const sourcePath = path.resolve(import.meta.dirname, 'files', 'archive.gz');
    const destinationPath = path.resolve(import.meta.dirname, 'files', 'fileToCompress.txt');
    const readableStream = createReadStream(sourcePath);
    const writableStream = createWriteStream(destinationPath);

    pipeline(readableStream, createGunzip(), writableStream, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
};

await decompress();
