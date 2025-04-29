import { createReadStream } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pipeline } from 'node:stream/promises';

const filePath = path.resolve(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(filePath);
  stream.on('end', () => process.stdout.write(os.EOL));

  await pipeline(stream, process.stdout, {end: false});
};

await read();
