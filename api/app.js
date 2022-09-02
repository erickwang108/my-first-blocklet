const express = require('express');
const apiRouters = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouters);

app.get('*', (_, res) => {
  res.send('Hello World, Blocklet!');
});

module.exports = app;
