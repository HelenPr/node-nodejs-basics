import { unlink } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToRemove.txt');

  try {
    await unlink(filePath);
  } catch (error) {
    const errorMessage = 'FS operation failed';
    if (error.code === 'ENOENT') {
      throw new Error(errorMessage);
    }
  }
};

await remove();
