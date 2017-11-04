var express = require('express')
  , app = express.createServer();

app.use(express.bodyParser()); // Automatically parses form data

app.post('/Send', function(req, res){ // Specifies which URL to listen for
  // req.body -- contains form data
});

app.listen(3000);