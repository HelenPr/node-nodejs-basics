import { createWriteStream } from 'fs';
import path from 'node:path';

const write = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);

  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};

await write();
