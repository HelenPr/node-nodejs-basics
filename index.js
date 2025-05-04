const DEFAULT_USERNAME = 'User';

const userName = process.env.npm_config_username || DEFAULT_USERNAME;

console.log(`Welcome to the File Manager, ${userName}!`);
