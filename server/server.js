const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const Photos = require('../database/database.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dist = path.join(__dirname, '/../dist');

app.use(morgan('dev'));
app.use(express.static(dist));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/listing/:listingId', (req, res) => {
  console.log('listingId', req.params.listingId);
  const id = req.params.listingId;
  Photos.find({ listingId: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const html = path.join(__dirname, '/../dist/index.html');

app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});

const bundle = path.join(__dirname, '/../dist/bundle.js');

app.get('/:listingId', (req, res) => {
  res.sendFile(bundle);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = app;
