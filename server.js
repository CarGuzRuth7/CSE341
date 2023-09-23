const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connection');
const cors = require('cors');
const port = process.env.PORT || 3000;

app
.use(cors())
.use('/', require('./routes'));
 
// app.listen(port, () => {
//   console.log('Web Server is listening at port ' + port);
// });

mongodb.initDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});