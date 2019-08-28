const express = require('express');
const path = require('path');

const port = process.env.PORT || 9000;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  process.stdout.write(`Listening on port ${port}`);
});
