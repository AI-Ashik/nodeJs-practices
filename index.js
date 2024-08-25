const fs = require("fs");

// methods - fs

// writefile
// fs.writeFile("hello.txt", "how are you?", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// appendFile
// fs.appendFile("hello.txt", " i am fine", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// renameFile
// fs.rename("hello.txt", "hi.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// copyFile

// fs.copyFile("hi.txt", "./copy2/hello.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// unlink (delete)

// fs.unlink("hi.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// rmdir (remove diroctory) - allow to delete blank diroctory

// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

// readfile

fs.readFile("hi.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
