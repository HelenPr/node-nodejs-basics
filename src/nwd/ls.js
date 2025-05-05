import fs from 'node:fs/promises';
import process from 'node:process';

export const ls = async () => {
  const entries = await fs.readdir(process.cwd(), { withFileTypes: true });

  const folders = [];
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      folders.push({ Name: entry.name, Type: 'directory' });
    } else {
      files.push({ Name: entry.name, Type: 'file' });
    }
  }

  folders.sort((prev, next) => prev.Name.localeCompare(next.Name));
  files.sort((prev, next) => prev.Name.localeCompare(next.Name));

  const result = [...folders, ...files];

  console.table(result);
};
