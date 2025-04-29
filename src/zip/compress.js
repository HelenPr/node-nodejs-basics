import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'node:path';
import { pipeline } from 'node:stream';

const compress = async () => {
  const sourcePath = path.resolve(import.meta.dirname, 'files', 'fileToCompress.txt');
  const destinationPath = path.resolve(import.meta.dirname, 'files', 'archive.gz');
  const readableStream = createReadStream(sourcePath);
  const writableStream = createWriteStream(destinationPath);

  pipeline(readableStream, createGzip(), writableStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();
