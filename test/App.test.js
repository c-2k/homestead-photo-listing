//REACT TEST EXISTS
import React from 'react';
import { shallow, mount, render } from '../jest.setup.js';

import App from '../src/components/App.jsx';


describe('app tests', () => {

  it('renders list-items', () => {
    // Replace shallow with mount
    const w = shallow(<App />);
    // Let's check what wrong in our instance
    // Expect the wrapper object to be defined
    expect(w).toBeDefined()
  });

  /*PASSING TEST */
  const w = mount(<App />)
  const photo = w.html().toLowerCase();

  it('check photostream on login', () => {
    expect(photo).toContain('container')
    expect(photo).toContain('mainpic')
    expect(photo).toContain('sidepics')
    expect(photo).toContain('viewphoto')
  })

  it('check slider on click', () => {
    expect(w.state().view).toBe('gallery')
    w.find('.viewPhoto').simulate('click');
    w.update()
    expect(w.state().view).toBe('slide')
  })

  /*FAILING TEST */

  it('FAIL check photostream on login', () => {
    expect(photo).not.toContain('fail')
  })

  it('FAIL check slider on click', () => {
    const w = mount(<App />)
    expect(w.state().view).toBe('gallery')
    w.find('.viewPhoto').simulate('click');
    w.update()
    expect(w.state().view).not.toBe('fail')
  })

});
