const faker = require('faker');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });
const ourFaker = [];

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const params = {
  Bucket: 'homestead.c2k',
};

s3.listObjects(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    const baseURL = 'https://homestead.c2k.s3.amazonaws.com/';
    const urlArr = [];
    console.log('DATA CONTENT', data.Contents.length);
    for (let i = 2; i < data.Contents.length; i++) {
      urlArr.push(baseURL + data.Contents[i].Key);
    }
    console.log('URL ARR', urlArr.length);
    urlArr.forEach((url) => {
      const data = {};
      const listingId = Math.floor(Math.random() * 101);
      const descrip = faker.fake('{{lorem.sentence}}');
      const account = faker.fake('{{finance.account}}');
      data.listingId = listingId;
      data.photoId = account;
      data.description = descrip;
      data.url = url;
      ourFaker.push(data);
    });
    console.log('FAKER DATA', ourFaker);
    fs.writeFile(path.join(__dirname, 'users.js'), JSON.stringify(ourFaker, null, '\t'), (err) => {
      if (err) {
        throw err;
      }
      console.log('It\'s Good!!');
    });
  }
});
