
const db = require('./index.js');
const Photo = require('./database.js');
// const { sampleData } = require('./users.js');
const sampleData = require('./users.js');

const insertSamplePhotos = () => {
  Photo.create(sampleData)
    .then(() => {console.log('successful insertion')})
    .catch((err) => console.log(err) );
};

insertSamplePhotos();
