import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'node:path';

const calculateHash = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      const result = hash.digest('hex');
      console.log(result);
      resolve(result);
    });

    stream.on('error', (error) => {
      reject(error);
    });
  });
};

await calculateHash();
