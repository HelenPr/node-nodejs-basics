import { cpus } from 'node:os';
import path from 'node:path';
import { Worker } from 'node:worker_threads';

const numCPUs = cpus().length;
const workerPath = path.resolve(import.meta.dirname, 'worker.js');
const initialData = 10;

const performCalculations = async () => {
  const workers = Array.from({ length: numCPUs }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, {
        workerData: initialData + i,
      });

      worker.on('message', (msg) => {
        resolve(msg);
      });

      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    });
  });

  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
