const mongoose = require("mongoose");

const mongoUrl = 'mongodb://localhost/photoListing';

const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) { console.log('MONGODB ERROR --->',err); }
  console.log('success');
});

module.exports = db;
