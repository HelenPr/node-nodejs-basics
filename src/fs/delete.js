import { unlink } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const rm = async ([filePath]) => {
  if (!filePath) {
    throw new Error('File path is not provided');
  }
  const resolvedPath = path.resolve(process.cwd(), filePath);
  await unlink(resolvedPath);
};
