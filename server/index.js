const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, function () {
  console.log('server is live');
});
