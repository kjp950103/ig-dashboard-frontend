const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Handle root request
    if (req.url === '/') {
        req.url = '/index.html';
          }

            const filePath = path.join(__dirname, req.url);

              fs.readFile(filePath, (err, data) => {
                  if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                              res.end('<h1>404 - File Not Found</h1>');
                                    return;
                                        }

                                            let contentType = 'text/html';
                                                if (filePath.endsWith('.json')) {
                                                      contentType = 'application/json';
                                                          } else if (filePath.endsWith('.js')) {
                                                                contentType = 'application/javascript';
                                                                    } else if (filePath.endsWith('.css')) {
                                                                          contentType = 'text/css';
                                                                              }

                                                                                  res.writeHead(200, { 'Content-Type': contentType });
                                                                                      res.end(data);
                                                                                        });
                                                                                        });

                                                                                        server.listen(port, () => {
                                                                                          console.log(`Server is running on port ${port}`);
                                                                                          });
