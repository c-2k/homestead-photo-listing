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

const sampleData = [{ listingId: 47, photoId: "3148100905", description: "Displ suprcndl fx w intrcndl extn low end unsp femr, 7thP", url: "https://images.unsplash.com/photo-1473826609599-2b7e09b62b0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 72, photoId: "4843545694", description: "Other sprain of unspecified elbow", url: "https://images.unsplash.com/photo-1531111885760-8e729bba027b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 9, photoId: "7756065239", description: "Nondisp transverse fx shaft of r femr, 7thR", url: "https://images.unsplash.com/photo-1535530124635-c5487dfad499?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 45, photoId: "2915243611", description: "Presence of right artificial ankle joint", url: "https://images.unsplash.com/photo-1528525946655-b7b341a9caba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 43, photoId: "8548836482", description: "Contus/lac l cereb w LOC w death d/t brain injury bf consc", url: "https://images.unsplash.com/photo-1534312553308-aea93dff8736?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 40, photoId: "2711412881", description: "Interruption of aortic arch", url: "https://images.unsplash.com/photo-1473662107208-bd0a13f73559?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 53, photoId: "0290488087", description: "Hallucinogen dependence w psychotic disorder", url: "https://images.unsplash.com/photo-1528774501767-e48f1178f250?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 90, photoId: "9310230681", description: "Disp fx of prox phalanx of l lit fngr, 7thD", url: "https://images.unsplash.com/photo-1530792271526-7ddf516473b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 17, photoId: "6750784763", description: "Traum rupt of volar plate of unsp finger at MCP/IP jt, init", url: "https://images.unsplash.com/photo-1482446439224-59276c41a5fc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 12, photoId: "9715240577", description: "Superficial foreign body of lip", url: "https://images.unsplash.com/photo-1533754434873-c60f30acf0ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 88, photoId: "6229683482", description: "Other disorders of continuity of bone, humerus", url: "https://images.unsplash.com/photo-1528252122473-98c53b28a929?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 65, photoId: "6636450525", description: "Laceration of radial artery at forearm level, left arm", url: "https://images.unsplash.com/photo-1472783725153-dd7f61cd8b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 26, photoId: "9158662359", description: "Periprosth osteolysis of internal prosthetic joint, sequela", url: "https://images.unsplash.com/photo-1476549530469-20c0fdc21f29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" },
{ listingId: 41, photoId: "5524870084", description: "Jump/div into swimming pool strk wall causing drown, sequela", url: "https://images.unsplash.com/photo-1506438785097-69057915e53c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9" }]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //sampleData asserted, normal default 
      //should be empty array for componentDidMount
      photos: sampleData,
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

  //componentDidMount === Database
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
