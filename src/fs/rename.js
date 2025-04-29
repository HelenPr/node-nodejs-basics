import { rename as renameFs } from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  const basePath = path.resolve(import.meta.dirname, 'files');
  const oldPath = path.resolve(basePath, 'wrongFilename.txt');
  const newPath = path.resolve(basePath, 'properFilename.md');
  const errorMessage = 'FS operation failed';

  try {
    await renameFs(oldPath, newPath);
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EEXIST') {
      throw new Error(errorMessage);
    }
  }
};

await rename();
