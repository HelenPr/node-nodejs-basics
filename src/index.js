import readline from 'node:readline';
import process from 'node:process';

import { up } from './commands/up.js';
import { cd } from './commands/cd.js';
import { ls } from './commands/ls.js';

const DEFAULT_USERNAME = 'User';
const EXIT_CMD = '.exit';

const userName = process.env.npm_config_username || DEFAULT_USERNAME;

const printCWD = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

const commandsMap = {
  up,
  cd,
  ls
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandHandler = async (commandLine) => {
  const trimmed = commandLine.trim();
  try {
    if (trimmed === EXIT_CMD) {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
    } else if (!trimmed){
      console.log('Invalid input');
    } else {
      const [command, ...args] = trimmed.split(' ');
      const handler = commandsMap[command];
      if (handler) {
        await handler(args);
      } else {
        console.log('Invalid input');
      }
    }
  } catch(error) {
    console.log('Operation failed');
  } finally {
    printCWD();
  }
};

rl.on('line', (line) => {
  commandHandler(line);
});

rl.on('SIGINT', () => commandHandler(EXIT_CMD));

console.log(`Welcome to the File Manager, ${userName}!`);
printCWD();
