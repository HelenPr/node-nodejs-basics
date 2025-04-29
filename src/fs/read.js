import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToRead.txt');
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    const errorMessage = 'FS operation failed';
    throw new Error(errorMessage);
  }
};

await read();
