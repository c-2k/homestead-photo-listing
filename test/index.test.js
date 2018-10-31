import { render, Simulate, wait } from 'react-testing-library';

import React from 'react';

import App from '../src/components/app.jsx'

it('renders without crashing', () => {
  render(<App />)
})


// //REACT TEST EXISTS
// import React from 'react';
// import { mount } from './enzyme';

// import App from '../src/components/app.jsx';

// describe('app tests', () => {
//   it('renders list-items', () => {
//     // Replace shallow with mount
//     const indexApp = mount(<App />);
//     // Let's check what wrong in our instance
//     console.log(indexApp.debug())
//     // Expect the wrapper object to be defined
//     expect(indexApp).toBeDefined()
//   });

//   it('renders a list item', () => {
//     const indexApp = mount(<App />);
//     // Check if an element in the Component exists
//     expect(indexApp).toBeTruthy()
//   });
// });
