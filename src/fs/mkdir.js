import { mkdir as mkdirFS } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const mkdir = async ([dirName]) => {
  if (!dirName) {
    throw new Error('Directory name is not provided');
  }
  const dirPath = path.resolve(process.cwd(), dirName);
  await mkdirFS(dirPath, { recursive: false });
}
