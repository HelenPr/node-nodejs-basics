import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import process from 'node:process';
import os from 'node:os';

export const cat = async ([filePath]) => {
  if (!filePath) {
    throw new Error('Path is not provided');
  }
  const resolvedPath = path.resolve(process.cwd(), filePath);
  const stream = createReadStream(resolvedPath, "utf-8");
  stream.on('end', () => process.stdout.write(os.EOL));
  await pipeline(stream, process.stdout, {end: false});
  stream.destroy();
};
