const express = require('express');
const path = require('path');
const http = require('http');

// Get our API routes

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'), null, function (err) {
    if (err) {
      res.sendFile(path.join(__dirname, 'src/maintenance.html'));
    }
  });
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
app.set('port', port);

console.log(port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
