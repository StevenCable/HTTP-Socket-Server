/*jshint esversion: 6*/

var net = require('net');
var htmls = require('./htmlSource.js');

var _404 = htmls._404;

var index = htmls.index;

var hydrogen = htmls.hydrogen;

var helium = htmls.helium;

var styles = htmls.styles;
var stylesLength = styles.length;
console.log(styles.length);

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
      switch(splitArray[0][1]){
        case '/':
          socket.write(`HTTP/1.1 200 OK
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length: ${index.length}
            Connection: keep-alive\n${index}`)
          // socket.write(`${index}\n\n`);
          socket.end('Shoots u faka')
          break;
        case '/index.html':
          socket.write(`HTTP/1.1 200 OK
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length: ${index.length}
            Connection: keep-alive\n\n`)
          socket.write(`${index}\n\n`);
          socket.end('Shoots u faka')
          break;
        case '/hydrogen.html':
          socket.write(`HTTP/1.1 200 OK
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length: ${hydrogen.length}
            Connection: keep-alive\n\n`)
          socket.write(`${hydrogen}\n\n`);
          socket.end('Shoots u faka')
          break;
        case '/helium.html':
          socket.write(`HTTP/1.1 200 OK
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length: ${helium.length}
            Connection: keep-alive\n\n`)
          socket.write(`${helium}\n\n`);
          socket.end('Shoots u faka')
          break;
        case '/404.html':
          socket.write(`HTTP/1.0 404 NOT FOUND
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length: ${_404.length}
            Connection: keep-alive\n\n`)
          socket.write(`${_404}\n\n`);
          socket.end('Shoots u faka')
          break;
        case '/css/styles.css':
          socket.write(`HTTP/1.1 200 OK
            Server: Mind yo own damn business
            Date: ${timeStamp}
            Content-Type: text/html; charset=utf-8
            Content-Length:` `${stylesLength}`
            `Connection: keep-alive\n\n`)
          socket.write(`${styles}\n`);
          socket.end('AYYYYYE Shoots u faka')
          break;
        default:
          socket.write(`These are not the droids you are looking for`);
      }
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

// function headerGen(content){
//   `method
//   server
//   date
//   Content-Type:
//   content-length: content.length
//   connection: keep-alive`;
// }