import React from 'react';
import { shallow, mount, render } from './jest.setup.js';

import PhotoStream from '../src/components/PhotoStream.jsx';

const test = {
  photos: ['https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/7lvzopTxjOU.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/8zbUnHy8hFs.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/9mPl0Zo7_gQ.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/D7jYENYs8cQ.jpg'],
  view: 'gallery',
  index: 0
};

describe('PhotoStream Testing', () => {



const w = mount(< PhotoStream photos={ test.photos } />)
const count = w.find('.container').props().className
const count1 = w.find('.sidePics').props().className
const count2 = w.find('.viewPhoto').props().className
const count4 = w.find('.mainPic').props().className

it('renders Slider', () => {
  expect(w).toBeTruthy()
});

  it('classes exist', () => {
    expect(count).toBeTruthy()
    expect(count1).toBeTruthy()
    expect(count2).toBeTruthy()
    expect(count4).toBeTruthy()
  })

})
