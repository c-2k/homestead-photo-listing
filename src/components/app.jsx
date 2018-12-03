import React from 'react';
import PhotoStream from './PhotoStream.jsx';
import Loadable from 'react-loadable';
import Loading from './Loading.js';

const SliderLoadComponent = Loadable({
  loader: () => import('./Slider.jsx'),
  loading: Loading,
});
// import Slider from './Slider.jsx';

import './style.css';
import axios from 'axios'

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
    axios.get(`http://localhost:8081/listing/${id}`)
    .then((data) => {
        this.setState({
          photos: data.data
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderView () {
    const {view} = this.state

    if (view === 'gallery') {
      return <PhotoStream photos={this.state.photos} index={this.state.index} view={this.changeView}
      />
    } else if (view === 'slide') {
      return <SliderLoadComponent photos={this.state.photos} index={this.state.index} view={this.changeView}/>
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
