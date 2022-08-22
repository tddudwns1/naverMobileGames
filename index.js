const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/naver.html');
});

app.listen(1234);
