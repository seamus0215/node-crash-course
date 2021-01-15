const fs = require("fs");

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile(
//   "./docs/blog1.txt",
//   "The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file was writen");
//   }
// );

// fs.writeFile(
//   "./docs/blog2.txt",
//   "Callback must be a function. Received undefined",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file was writen");
//   }
// );

// directories
// if (!fs.existsSync("./docs/assets")) {
//   fs.mkdir("./docs/assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./docs/assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// delete file
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
