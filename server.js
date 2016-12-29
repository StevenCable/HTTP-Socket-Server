/*jshint esversion: 6*/

var net = require('net');
var helloWorld = 'hello World';

var timeStamp = new Date().toUTCString();

const server = net.createServer((socket) => {

  socket.setEncoding('utf8');
  
  socket.on('data', function(data){
    process.stdout.write(`what is: ${data}`);
    var initialSplit = data.split('\r\n');
    console.log(initialSplit);
  
  });

  socket.on('end', () => {
    process.stdout.write('all pau');
  
  });
  
});
server.listen(8080, '0.0.0.0', () =>{
  console.log(`server opened on ${server.address().address}`);
  console.log('tallyho Mother Fucker!');
  console.log(timeStamp);
});