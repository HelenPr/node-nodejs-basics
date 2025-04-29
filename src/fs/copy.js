import { stat, cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const sourceDir = path.resolve(import.meta.dirname, 'files');
  const destinationDir = path.resolve(import.meta.dirname, 'files_copy');
  const errorMessage = 'FS operation failed';

  try {
    const sourceStats = await stat(sourceDir);
    if (!sourceStats.isDirectory()) {
      throw new Error(errorMessage);
    }
  } catch {
    throw new Error(errorMessage);
  }

  try {
    const destStats = await stat(destinationDir);
    if (destStats.isDirectory()) {
      throw new Error(errorMessage);
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw new Error(errorMessage);
    }
  }

  try {
    await cp(sourceDir, destinationDir, { recursive: true, errorOnExist: true, force: false });
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await copy();
