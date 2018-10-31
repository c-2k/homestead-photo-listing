import React from 'react';
import $ from 'jquery';
import PhotoStream from './photoStream.jsx';
import Slider from './photoView.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      id: 0,
      view: 'gallery',
      photoId: 0,
    };
    // this.componentDidMount();
  }

  changeView(view) {
      this.setState({
        view: view
      });
  }

  componentDidMount() {
    const {id} = this.state;
    $.get(`/listing-photos/${id}`, data => {
      this.setState({
        photos: data,
      });
    }, 'json');
  }

  renderView () {
    const {view} = this.state

    if (view === 'gallery') {
      return <PhotoStream photos={this.state.photos} photoId={this.state.photoId} view={() => this.changeView('slide')}
      />
    } else if (view === 'slide') {
      return <Slider photos={this.state.photos}/>
    }
  }

  render() {
    if(this.state.photos){
    return (<div>
      <h1>Hello World</h1>
      <div>
      {this.renderView()}
      </div>
    </div>)
    } else {
      return (<div>Loading...</div>)
    }
console.log(this.state.photos)
  }

}

export default App;
