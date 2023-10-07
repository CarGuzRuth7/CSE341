const express = require('express');
const app = express();
//const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connection');
const cors = require('cors');
const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json())
  .use('/', require('./routes'))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'https://cse341-contacts-frontend.netlify.app');
    res.setHeader(
      'Access-Control-Allow-headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    next();
  });

// app.listen(port, () => {
//   console.log('Web Server is listening at port ' + port);
// });

mongodb.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
