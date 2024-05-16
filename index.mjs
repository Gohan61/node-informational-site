import http from "node:http";
import url from "url";
import fs from "node:fs";

const server = http
  .createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    let filename;
    if (myUrl.pathname === "/") {
      filename = "./index.html";
    } else {
      filename = `.${myUrl.pathname}.html`;
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("./404.html", (error, errorPage) => res.end(errorPage));
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
