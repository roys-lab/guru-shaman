const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = path.join(__dirname, 'docs');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Normalize url
  // If requesting a path without extension and it doesn't end in /, check if it is a directory or file
  let urlPath = req.url.split('?')[0];
  let filePath = path.join(PUBLIC_DIR, urlPath === '/' ? 'index.html' : urlPath);
  
  // Prevent directory traversal attacks
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Access Denied');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`<h1>404 Not Found</h1><p>El archivo <code>${urlPath}</code> no existe.</p>`);
      return;
    }

    if (stats.isDirectory()) {
      // Serve index.html if it exists in directory
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (indexErr, indexStats) => {
        if (indexErr || !indexStats.isFile()) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(`<h1>404 Not Found</h1><p>No se encontró index.html en el directorio.</p>`);
          return;
        }
        serveFile(filePath, res);
      });
    } else {
      serveFile(filePath, res);
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  
  const stream = fs.createReadStream(filePath);
  stream.on('error', (streamErr) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  });
  stream.pipe(res);
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Servidor GuruShaman iniciado con éxito!`);
  console.log(`🌐 Disponible localmente en: http://localhost:${PORT}`);
  console.log(`📂 Sirviendo archivos desde: ${PUBLIC_DIR}`);
  console.log(`==================================================\n`);
});
