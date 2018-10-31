import React from 'react';
import $ from 'jquery';
import PhotoStream from './photoStream.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      id: 0,
    };
    // this.componentDidMount();
  }

  componentDidMount() {
    const {id} = this.state;
    $.get(`/listing-photos/${id}`, data => {
      this.setState({
        photos: data,
      });
    }, 'json');
  }

  render() {
    return (<div>
      <h1>Hello World</h1>
      <PhotoStream photos={this.state.photos}/>
    </div>)
console.log(this.state.photos)
  }

}

export default App;
