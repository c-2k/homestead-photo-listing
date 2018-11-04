import Photo from '../database/database.js';

describe('database test', () => {
  const test = new Photo({
    url: 'https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg',
    photoId: 123456,
    description: 'i am a test string',
    listingId: 123456,
  });

  it('create new schema', (done) => {
    test.save()
      .then(() => {
        expect(test.isNew).toBeFalsy();
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  /** PASSING TEST */

  it('find one photoId from the database', (done) => {
    Photo.findOne({ photoId: 123456 })
      .then((result) => {
        expect(result.photoId).toBeTruthy();
        done();
      });
  });

  it('find one url from the database', (done) => {
    Photo.findOne({ url: 'https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg' })
      .then((result) => {
        expect(result.url).toBe('https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg');
        done();
      });
  });
  it('find one description from the database', (done) => {
    Photo.findOne({ description: 'i am a test string' })
      .then((result) => {
        expect(result.description).toBeTruthy();
        done();
      });
  });
  it('find one listingId from the database', (done) => {
    Photo.findOne({ listingId: 123456 })
      .then((result) => {
        expect(result.listingId).toBeTruthy();
        done();
      });
  });

  it('find one photoId from the database', (done) => {
    Photo.findOne({ photoId: 123456 })
      .then((result) => {
        expect(result.photoId).toBeTruthy();
        done();
      });
  });


  /** FAILING TEST */

  it('FAIL find one photoId from the database', (done) => {
    Photo.findOne({ photoId: 123456 })
      .then((result) => {
        expect(result.photoId).not.toBeFalsy();
        done();
      });
  });
  it('FAIL find one url from the database', (done) => {
    Photo.findOne({ url: 'https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg' })
      .then((result) => {
        expect(result.url).not.toBeFalsy();
        done();
      });
  });
  it('FAIL find one description from the database', (done) => {
    Photo.findOne({ description: 'i am a test string' })
      .then((result) => {
        expect(result.description).not.toBeFalsy();
        done();
      });
  });
  it('FAIL find one listingId from the database', (done) => {
    Photo.findOne({ listingId: 123456 })
      .then((result) => {
        expect(result.listingId).not.toBeFalsy();
        done();
      });
  });
});
