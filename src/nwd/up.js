import path from 'node:path';
import process from 'node:process';

export const up = () => {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, '..');
  const rootDir = path.parse(currentDir).root;

  if (parentDir !== currentDir && parentDir.length >= rootDir.length) {
    process.chdir(parentDir);
  }
};
