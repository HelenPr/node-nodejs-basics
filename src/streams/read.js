import { createReadStream } from 'fs';
import path from 'node:path';
import readline from 'readline';

const read = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath);

  stream.pipe(process.stdout);

  await new Promise((resolve, reject) => {
    stream.on('end', () => resolve());
    stream.on('error', (error) => reject(error));
  });

  console.log('\n\nPress Enter to exit...');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await new Promise((resolve) => {
    rl.question('', () => {
        rl.close();
        resolve();
    });
  });
};

await read();
