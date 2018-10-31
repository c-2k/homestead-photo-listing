//REACT TEST EXISTS
import React from 'react';
import { shallow, mount, render } from './jest.setup.js';

import App from '../src/components/app.jsx';

describe('app tests', () => {
  it('renders list-items', () => {
    // Replace shallow with mount
    const w = mount(<App />);
    // Let's check what wrong in our instance
    console.log(w.debug())
    // Expect the wrapper object to be defined
    expect(w).toBeDefined()
  });

  it('renders a list item', () => {
    const w = mount(<App />);
    // Check if an element in the Component exists
    expect(w).toBeTruthy()
  });
});
