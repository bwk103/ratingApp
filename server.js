'use strict';
var app = require('./app');
const config = require('./config');

app.listen(config.app.port, () => {
  console.log(`The server is running on port ${config.app.port}`);
});
