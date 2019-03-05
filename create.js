const fs = require('fs');

var createStream = fs.createWriteStream("hello-world.txt");
createStream.end();
