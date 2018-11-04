import React from 'react';
import { shallow, mount, render } from '../jest.setup.js';

import SidePhoto from '../src/components/SidePhoto.jsx';

const test = {
  listingId: 5,
  photoId: "70848938",
  description: "Corporis vitae at.",
  url: "https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg",
}

describe('SidePhoto testing', () => {
  it('SidePhoto renders', () => {
    const w = shallow(<SidePhoto photo={test}/>)
    expect(w).toBeDefined()
  })

  const w = mount(<SidePhoto photo={test} />)
  const name = w.find('.side').props().className
  const name1 = w.find('.sPhoto').props().className
  const photo = w.find('img').props().src

  it('Classes exist', () => {
    expect(name).toBeTruthy()
    expect(name1).toBeTruthy()
  })

  it('Side Picture renders', () => {
    expect(photo).toBe("https://homestead.c2k.s3.amazonaws.com/house1/4HG3Ca3EzWw.jpg")
  })

  it('FAIL Side Picture renders', () => {
    expect(w).toBeDefined()
    const photo = w.find('img').props().src
    expect(photo).not.toBeFalsy()
  })

  it('FAIL Classes exist', () => {
    expect(name).not.toBeFalsy()
    expect(name1).not.toBeFalsy()
  })
})