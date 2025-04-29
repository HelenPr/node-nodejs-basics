import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  try {
    const dirPath = path.resolve(import.meta.dirname, 'files');
    const filenames = await readdir(dirPath);
    console.log(filenames);
  } catch (error) {
    const errorMessage = 'FS operation failed';
    throw new Error(errorMessage);
  }
};

await list();
