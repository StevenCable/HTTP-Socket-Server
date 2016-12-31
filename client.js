const net = require('net');

let client = net.createConnection( { port: 8080 }, () => {
  process.stdin.pipe(client);


  client.on('data', (data) => {
    process.stdout.write(`${data}`);
  });

  client.on('end', () => {
    process.stdout.write('disconnected from server');
  });
});