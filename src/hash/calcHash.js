import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import process from 'node:process';

export const hash = async ([filePath]) => {
  if (!filePath) {
    throw new Error('File path is not provided');
  }

  const fullPath = path.resolve(process.cwd(), filePath);
  const hash = createHash('sha256');
  const stream = createReadStream(fullPath);
  await pipeline(stream, hash);

  const digest = hash.digest('hex');
  console.log(`File SHA256 hash: ${digest}`);
};
