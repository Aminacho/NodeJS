const fs = require("fs");

const path = require("path");

const filePath = path.resolve("content", "welcome.txt");
// fs.writeFileSync(filePath, "Hello Node", { encoding: "utf-8" });

const data = fs.readFileSync(filePath, { encoding: "utf-8" });
console.log(data);
