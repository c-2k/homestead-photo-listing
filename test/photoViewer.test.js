//REACT TEST EXISTS
import React from 'react';
import { shallow, mount, render } from './jest.setup.js';

import Slider from '../src/components/photoView.jsx';

const test = {
  photos: ['https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/7lvzopTxjOU.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/8zbUnHy8hFs.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/9mPl0Zo7_gQ.jpg', 'https://homestead.c2k.s3.amazonaws.com/house1/D7jYENYs8cQ.jpg'],
  view: 'gallery',
  index: 0
};

describe('Slider tests', () => {

  it('renders Slider', () => {
    // Replace shallow with mount
    const w = shallow(<Slider photos={test.photos} index={test.index} view={test.changeView}/>);
    // Let's check what wrong in our instance
    // Expect the wrapper object to be defined
    expect(w).toBeDefined()
  });

  it('Slider components all exists', () => {
    const w = mount(<Slider photos={test.photos} index={test.index} view={test.changeView} />);
    const comp = w.html().toLowerCase()
    expect(comp).toContain('backslider')
    expect(comp).toContain('slider')
    expect(comp).toContain('slide')
    expect(comp).toContain('slider-wrapper')
    expect(comp).toContain('slidepic')
    expect(comp).toContain('backarrow arrow')
    expect(comp).toContain('nextarrow arrow')
  })

  it('Keep count of images', () => {
    const w = mount(<Slider photos={test.photos} index={test.index} view={test.changeView} />);
    console.log(w.debug())
    const count = w.find('.slidePic').length
    const count0 =w.find('.slide').length
    const count1 = w.find('.slider-wrapper').length
    const count2 = w.find('.slider').length
    const count3 = w.find('.backSlider').length
    const image = w.find('img').length

    expect(image).toBe(5)
    expect(count).toBe(5)
    expect(count0).toBe(5)
    expect(count1).toBe(1)
    expect(count2).toBe(1)
    expect(count3).toBe(1)
  })

  it('Check to see if image URL exists', () => {
    const w = mount(<Slider photos={test.photos} index={test.index} view={test.changeView} />)

    const image = w.find('img')[0].prop().src

    console.log(image)
  })

  it('FAIL Slider components all exists', () => {
    const w = mount(<Slider photos={test.photos} index={test.index} view={test.changeView} />);
    const comp = w.html().toLowerCase()
    expect(comp).not.toContain('fail')
    expect(comp).not.toContain('fail')
    expect(comp).not.toContain('fail')
    expect(comp).not.toContain('fail')
    expect(comp).not.toContain('fail')
    expect(comp).not.toContain('fail')
  })

  it('FAIL Keep count of images', () => {
    const w = mount(<Slider photos={test.photos} index={test.index} view={test.changeView} />);
    const count = w.find('.slidePic').length
    const count0 = w.find('.slide').length
    const count1 = w.find('.slider-wrapper').length
    const count2 = w.find('.slider').length
    const count3 = w.find('.backSlider').length
    const image = w.find('img').length

    expect(image).not.toBe(0)
    expect(count).not.toBe(0)
    expect(count0).not.toBe(0)
    expect(count1).not.toBe(0)
    expect(count2).not.toBe(0)
    expect(count3).not.toBe(0)
  })

});
