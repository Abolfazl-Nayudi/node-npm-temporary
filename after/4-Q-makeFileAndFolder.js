// 1. create a directory that the name of the folder should be taken from the argv | folder name should be "project" by default
// 2. create a server.js file
// 3. content of server.js file should be like this:
// console.log("hello node js!");

/*** answer ***/

const fs = require("fs");

const folderName = process.argv[2] || "project";

try {
  fs.mkdirSync(`./${folderName}`, { recursive: true });

  fs.writeFileSync(
    `./${folderName}/server.js`,
    'console.log("hello node js!");',
    "utf-8"
  );

  console.log("task completed");
} catch (error) {
  console.log(error);
}
