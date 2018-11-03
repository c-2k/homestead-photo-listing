import React from 'react';
import $ from 'jquery';
import PhotoStream from './photoStream.jsx';
import Slider from './photoView.jsx'

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
    const id = Number(window.location.pathname.replace(/\//,''));
    $.get(`/listing-photos/${id}`, data => {
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
        <h1>Hello World</h1>
      <div >
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
