const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const photoSchema = new Schema ({
  url: String,
  photoId: Number,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

const fetchAll = () => {
  const file = Photo.find({});
  return file.exec();
};

module.exports = Photo;
