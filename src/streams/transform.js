import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().trim().split('').reverse().join('');
        callback(null, reversedChunk);
    }
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  reverseTransform.on('error', (err) => {
    console.error(`Error in the stream: ${err.message}`);
  });
};

await transform();
