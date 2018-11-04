import React from 'react';
import { shallow, mount, render } from '../jest.setup.js';

import Slider from '../src/components/Slider.jsx';

const test = {
  photos: ['https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/7lvzopTxjOU.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/8zbUnHy8hFs.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/9mPl0Zo7_gQ.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/D7jYENYs8cQ.jpg'],
  view: 'gallery',
  index: 0
};

describe('Slider tests', () => {

  it('renders Slider', () => {
    // Replace shallow with mount
    const w = shallow(<Slider />);
    // Let's check what wrong in our instance
    // Expect the wrapper object to be defined
    expect(w).toBeDefined()
  });

const w = mount(<Slider photos={test.photos} index={test.index}/>);
const comp = w.find('.slidePic').at(0).props().className
const comp1 = w.find('.slide').at(0).props().className
const comp2 = w.find('.slider-wrapper').at(0).props().className
const comp3 = w.find('.slider').at(0).props().className
const comp4 = w.find('.backSlider').at(0).props().className
const count = w.find('.slidePic').length
const count0 =w.find('.slide').length
const count1 = w.find('.slider-wrapper').length
const count2 = w.find('.slider').length
const count3 = w.find('.backSlider').length
const image = w.find('img').length
const imageP = w.find('img').at(2).props()

  it('Slider components all exists', () => {
    expect(comp).toBeTruthy()
    expect(comp1).toBeTruthy()
    expect(comp2).toBeTruthy()
    expect(comp3).toBeTruthy()
    expect(comp4).toBeTruthy()
  })

  it('Clickable images', () => {
    const click = w.find('.slider-wrapper').props().onClick
    expect(click).toBeTruthy()
  })

  it('Clickable arrows', () => {
    const clickBack = w.find('.backArrow').props().onClick
    const clickNext = w.find('.nextArrow').props().onClick
    expect(clickBack).toBeTruthy()
    expect(clickNext).toBeTruthy()
  })

  it('Keep count of images', () => {
    expect(image).toBe(5)
    expect(count).toBe(5)
    expect(count0).toBe(5)
    expect(count1).toBe(1)
    expect(count2).toBe(1)
    expect(count3).toBe(1)
  })

  it('Check to see if image URL exists', () => {
    expect(imageP).toBeDefined
  })

  it('FAIL Slider components all exists', () => {
    expect(comp).not.toContain('fail')
  })

  it('FAIL Keep count of images', () => {
    expect(image).not.toBe(0)
    expect(count).not.toBe(0)
    expect(count0).not.toBe(0)
    expect(count1).not.toBe(0)
    expect(count2).not.toBe(0)
    expect(count3).not.toBe(0)
  })

  it('FAIL Clickable images', () => {
    const click = w.find('.slider').props().onClick
    expect(click).not.toBeTruthy()
  })

  it('FAIL Clickable arrows', () => {
    const clickNext = w.find('.slider').props().onClick
    expect(clickNext).not.toBeTruthy()
  })

});
