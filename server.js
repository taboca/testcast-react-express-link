const express    = require('express');
const path       = require('path');
const app        = express();
const fs         = require('fs');

app.get('/link.txt', function(req, res) {
  console.log('Server: sending hello world')
  res.setHeader('Content-type', "application/octet-stream");
  res.send('hello world');
});

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(3000);
