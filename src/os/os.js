import os from 'node:os';

const getEOL = () => {
  const eol = JSON.stringify(os.EOL);
  console.log(`Default EOL: ${eol}`);
};

export const osInfo = async ([option]) => {
  switch (option) {
    case '--EOL':
      getEOL();
      break;
  }
};
