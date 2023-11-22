const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Define the "assets" folder path
  const assetsFolder = path.join(__dirname, "assets");

  if (req.url.startsWith("/assets/")) {
    // Serve static assets from the "assets" folder
    const assetPath = path.join(
      assetsFolder,
      req.url.replace(/^\/assets\//, "")
    );
    fs.readFile(assetPath, (err, data) => {
      if (err) {
        console.error("Error reading asset:", err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Asset Not Found");
      } else {
        res.writeHead(200, { "Content-Type": getContentType(assetPath) });
        res.end(data);
      }
    });
  } else if (req.url === "/") {
    // Serve "index.html" for the root URL ("/")
    const indexHtmlPath = path.join(__dirname, "index.html");
    fs.readFile(indexHtmlPath, (err, data) => {
      if (err) {
        console.error("Error reading index.html:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Handle other routes or 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 25008;
const ip = "127.0.0.1";
server.listen(port, ip, () => {
  console.log(`Web server is running on port http://${ip}:${port}`);
});

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".jpg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    default:
      return "application/octet-stream";
  }
}