import { spawn } from 'node:child_process';
import path from 'node:path';

const scriptPath = path.resolve(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptPath, ...args], {
      stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3]);
