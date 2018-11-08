const mongoose = require("mongoose");

const mongoUrl = 'mongodb+srv://galleryHomestead:yppVoE4JG3xp7iDp@homesteadgallery-mxllu.mongodb.net/photo';

const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) { console.log(err); }
  console.log('success');
});

module.exports = db;
