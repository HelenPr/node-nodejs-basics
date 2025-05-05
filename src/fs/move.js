import { createReadStream, createWriteStream, unlink } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pipeline } from 'node:stream/promises';

export const mv = async ([source, destination]) => {
  if (!source || !destination) {
    throw new Error('Source or destination path is not provided');
  }

  const sourcePath = path.resolve(process.cwd(), source);
  const destinationPath = path.resolve(process.cwd(), destination);

  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(destinationPath, { flags: 'wx' });
  await pipeline(readStream, writeStream);

  await new Promise((resolve, reject) => {
    unlink(sourcePath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
