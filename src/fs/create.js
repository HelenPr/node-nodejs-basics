import { open } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const filePath = path.resolve('src/fs/files', 'fresh.txt');

  try {
    const fileHandle = await open(filePath, 'wx');
    const content = 'I am fresh and young';
    try {
      await fileHandle.writeFile(content, 'utf-8');
    } finally {
      await fileHandle.close();
    }
  } catch (err) {
    const errorMessage = 'FS operation failed';
    if (err.code === 'EEXIST') {
      throw new Error(errorMessage);
    }
    throw err;
  }
};

await create();
