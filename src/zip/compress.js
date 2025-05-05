import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import path from 'node:path';
import { pipeline } from 'node:stream';

export const compress = async ([source, destination]) => {
  if (!source || !destination) {
    throw new Error('Source or destination path is not provided');
  }

  const sourcePath = path.resolve(process.cwd(), source);
  const destinationPath = path.resolve(process.cwd(), destination);
  const readableStream = createReadStream(sourcePath);
  const writableStream = createWriteStream(destinationPath);

  pipeline(readableStream, createBrotliCompress(), writableStream, (error) => {
    if (error) {
      throw new Error('An error occurred:', error);
    }
  });
};
