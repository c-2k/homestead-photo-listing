import React from 'react';
import $ from 'jquery';
import PhotoStream from './PhotoStream.jsx';
import Slider from './Slider.jsx';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      view: 'gallery',
      index: 0,
    };
    // this.componentDidMount();
    this.changeView = this.changeView.bind(this)
  }

  changeView(view, num) {
      this.setState({
        view: view,
        index: num
      });
  }

  componentDidMount() {
    const rand = Math.floor(Math.random() * 101)
    const id = Number(window.location.pathname.replace(/\//, '')) || rand;
    $.get(`http://galleryworkinghope123.us-east-1.elasticbeanstalk.com/listing/${id}`, data => {
      this.setState({
        photos: data,
      });
    }, 'json');
  }

  renderView () {
    const {view} = this.state

    if (view === 'gallery') {
      return <PhotoStream photos={this.state.photos} index={this.state.index} view={this.changeView}
      />
    } else if (view === 'slide') {
      return <Slider photos={this.state.photos} index={this.state.index} view={this.changeView}/>
    }
  }

  render() {
    if(this.state.photos){
      return (<div>
      <div >
      {this.renderView()}
      </div>
    </div>)
    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default App;
