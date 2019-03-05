const fs = require('fs');

fs.readFile("/hello-world.txt","utf-8", function(err, buf) {
  console.log(buf.toString());
});
