const mongoose = require("mongoose");
mongoUrl = "mongodb://localhost/photoListing";

const db = mongoose.connect(mongoUrl);

module.exports = db;