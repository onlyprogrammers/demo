const express = require('express');




const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Hello, Express on Glitch!');
});


app.listen(port)