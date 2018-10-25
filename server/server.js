const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
