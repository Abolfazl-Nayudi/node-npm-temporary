const fs = require("fs");

//  --------------- fs.mkdir ----------------
// fs.mkdir("./dog/pishi2", { recursive: true }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("folder created successfully");
//   }
// });

//  --------------- fs.mkdirSync ----------------

// try {
//   fs.mkdirSync("./gorbe/pishi", { recursive: true });
// } catch (error) {
//   console.log("in catch block");
//   console.log(error.message);
// }

// console.log("hello world");

//  --------------- fs.promises.mkdir ----------------

// ------------------------------------------------------------

fs.writeFile("./example.txt", "hi there", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});

const str = `(() => {
  console.log("dude");
})()`;

fs.writeFileSync("./index.js", str, "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});
