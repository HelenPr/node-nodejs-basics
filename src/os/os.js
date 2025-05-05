import os from 'node:os';

const getEOL = () => {
  const eol = JSON.stringify(os.EOL);
  console.log(`Default EOL: ${eol}`);
};

const getCPUs = () => {
  const cpus = os.cpus();
  console.log(`Overall amount of CPUs: ${cpus.length}`);
  cpus.forEach((cpu, index) => {
    const ghz = (cpu.speed / 1000).toFixed(2);
    console.log(`CPU ${index + 1}: Model: ${cpu.model}, Clock rate: ${ghz} GHz`);
  });
};

const getHomeDir = () => {
  console.log(`Home directory: ${os.homedir()}`);
};

const getSystemUsername = () => {
  console.log(`System user name: ${os.userInfo().username}`);
};

export const osInfo = async ([option]) => {
  switch (option) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCPUs();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getSystemUsername();
      break;
  }
};
