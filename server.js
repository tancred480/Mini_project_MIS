const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('front-end/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
