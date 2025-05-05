import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const add = async ([fileName]) => {
  if (!fileName) {
    throw new Error('Filename is not provided');
  }
  const filePath = path.resolve(process.cwd(), fileName);
  await writeFile(filePath, '');
};
