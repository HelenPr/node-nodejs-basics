import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const cd = async ([targetPath]) => {
  if (!targetPath) {
    throw new Error('Path is not provided');
  }

  const resolvedPath = path.resolve(process.cwd(), targetPath);

  const stats = await fs.stat(resolvedPath);
  if (!stats.isDirectory()) {
    throw new Error('Not a directory');
  }

  process.chdir(resolvedPath);
};
