const http = require("http");

http.get({
  hostname: '127.0.0.1',
  port: 3000,
  path: '/',
  agent: false  // create a new agent just for this one request
}, (res) => {
  console.log(res.statusCode);
});
