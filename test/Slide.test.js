import React from 'react';
import { shallow, mount, render } from '../jest.setup.js';

import Slide from '../src/components/Slide.jsx';

const test = {
  listingId: 5,
  photoId: "70848938",
  description: "Corporis vitae at.",
  url: "https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg"
}

describe('Slide tests', () => {
  it('Slide renders', ()=>{
    const w = shallow(<Slide image={test}/>)
    expect(w).toBeDefined()
  })

  const w = mount(<Slide image={test} />)
  const name = w.find('.slidePic').props().className
  const name1 = w.find('.slide').props().className
  const photo = w.find('img').props().src

  it('Classes exist', ()=>{
    expect(name).toBeTruthy()
    expect(name1).toBeTruthy()
  })

  it('Picture renders', () => {
    expect(photo).toBe("https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg")
  })

  it('FAIL Picture renders', () => {
    expect(w).toBeDefined()
    const photo = w.find('img').props().src
    expect(photo).not.toBe("fail.com")
  })

  it('FAIL Classes exist', () => {
    expect(name).not.toBe('fail')
    expect(name1).not.toBe('fail')
  })

})