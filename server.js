const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> Hello World</h1>");
  }
});

server.listen(500, (err) => {
  if (err) throw err;
  console.log("server is Up and running on port 5000");
});
