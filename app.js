const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function(req, res) {
  var opts = {
    maxAge: 900000

  };
  res.cookie ? res.send(`Hello ${res.cookie}`) :
  res.cookie('some_name', 'some_value', opts);

  res.end();
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))