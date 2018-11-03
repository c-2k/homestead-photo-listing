const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: String,
  photoId: Number,
  description: String,
  listingId: Number,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
