const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.status(200).json({
    hello: req.query.name || 'World!',
  });
});

server.listen(3000, () => {
  console.log('Server is listening at port 3000');
});
