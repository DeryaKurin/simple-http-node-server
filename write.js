var fs = require("fs");



fs.writeFile("hello-world.txt", "Hello to this great world", function(err, data) {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
