import readline from 'node:readline';
import process from 'node:process';
import os from 'node:os';

const DEFAULT_USERNAME = 'User';
const EXIT_CMD = '.exit';

const userName = process.env.npm_config_username || DEFAULT_USERNAME;

console.log(`Welcome to the File Manager, ${userName}!`);

const printCWD = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

printCWD();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandHandler = (command) => {
  const trimmed = command.trim();
  try {
    if (trimmed === EXIT_CMD) {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
    } else {
      console.log('Invalid input');
    }
  } catch(error) {
    console.log('Operation failed');
  }
};

rl.on('line', (line) => {
  commandHandler(line);
});

rl.on('SIGINT', () => commandHandler(EXIT_CMD));
