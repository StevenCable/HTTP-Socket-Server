/*jshint esversion: 6*/

var net = require('net');
var htmls = require('./htmlSource.js');

var helloWorld = 'hello World';

var timeStamp = new Date().toUTCString();

const server = net.createServer((socket) => {

  socket.setEncoding('utf8');

  socket.on('data', function(data){
    process.stdout.write(`what is: ${data}`);
    var initialSplit = data.split('\r\n');
    console.log(initialSplit);
    var splitArray = [];

    for(var i = 0; i<initialSplit.length; i++){
      splitArray.push(initialSplit[i].split(' '));
    }
    console.log(splitArray[0][0]);

    if(splitArray[0][0] === "GET"){
      console.log('whoohoo braddah');
    }else{
      console.log('awww fuck');
    }
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