const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require("body-parser");

const Photos = require('../database/database.js')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dist = path.join(__dirname, '/../dist');

app.use(morgan('dev'));
app.use(express.static(dist));

app.get('/listing-photos/:listingId', (req, res) => {
  console.log('listingId', req.params.listingId)
  const id = req.params.listingId;
  Photos.find({ listingId: id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = app;
