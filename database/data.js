
const db = require('./index.js');
const Photo = require('./database.js');

const samplePhotos = [
  {
    url: 'http://dummyimage.com/238x230.bmp/ff4444/ffffff',
    photoId: '6743636797',
    description:
      'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
  },
  {
    url: 'http://dummyimage.com/214x167.jpg/dddddd/000000',
    photoId: '7299317419',
    description:
      'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales',
  },
  {
    url: 'http://dummyimage.com/190x208.bmp/5fa2dd/ffffff',
    photoId: '6293293118',
    description:
      'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum',
  },
  {
    url: 'http://dummyimage.com/137x185.png/ff4444/ffffff',
    photoId: '7574616426',
    description: 'eleifend pede libero quis orci nullam molestie nibh in lectus',
  },
  {
    url: 'http://dummyimage.com/244x235.bmp/cc0000/ffffff',
    photoId: '5774665615',
    description:
      'ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed',
  },
  {
    url: 'http://dummyimage.com/205x248.bmp/cc0000/ffffff',
    photoId: '7360091322',
    description:
      'nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
  },
  {
    url: 'http://dummyimage.com/136x220.bmp/dddddd/000000',
    photoId: '2919424262',
    description:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum',
  },
  {
    url: 'http://dummyimage.com/104x228.png/5fa2dd/ffffff',
    photoId: '0794378447',
    description:
      'fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio',
  },
  {
    url: 'http://dummyimage.com/220x142.png/dddddd/000000',
    photoId: '2778138722',
    description:
      'amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate',
  },
  {
    url: 'http://dummyimage.com/107x159.bmp/dddddd/000000',
    photoId: '1775915158',
    description:
      'est et tempus semper est quam pharetra magna ac consequat metus',
  },
];

const insertSamplePhotos = () => {
  Photo.create(samplePhotos)
    .then(() => db.disconnect());
};

insertSamplePhotos();
