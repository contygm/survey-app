const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ EMPIRE : 'DID NOTHING WRONG' });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, function () {
  console.log('server is live');
});
