import React from 'react';
import $ from 'jquery';
import PhotoStream from './photoStream.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: [],
    };
    // this.componentDidMount();
  }

  componentDidMount() {
    $.get('/api/photos', data => {
      this.setState({
        photo: data,
      });
    }, 'json');
  }

  render() {
    return (<div>
      <h1>Hello World</h1>
      <PhotoStream photo={this.state.photo}/>
    </div>)
console.log(this.state.photo)
  }
}

export default App;
