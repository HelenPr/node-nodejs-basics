import { rename } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const rn = async ([filePath, newName]) => {
  if (!filePath || !newName) {
    throw new Error('File name or path are not provided');
  }

  const oldPath = path.resolve(process.cwd(), filePath.trim());
  const newPath = path.resolve(process.cwd(), newName.trim());
  await rename(oldPath, newPath);
};
