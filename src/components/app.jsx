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

const sampleData = [{ listingId: 47, photoId: "3148100905", description: "Displ suprcndl fx w intrcndl extn low end unsp femr, 7thP", url: "https://images.unsplash.com/photo-1527764397528-0e8cd19bc8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80" },
{ listingId: 72, photoId: "4843545694", description: "Other sprain of unspecified elbow", url: "https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 9, photoId: "7756065239", description: "Nondisp transverse fx shaft of r femr, 7thR", url: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80" },
{ listingId: 45, photoId: "2915243611", description: "Presence of right artificial ankle joint", url: "https://images.unsplash.com/photo-1447029080250-270ded608d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 43, photoId: "8548836482", description: "Contus/lac l cereb w LOC w death d/t brain injury bf consc", url: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 40, photoId: "2711412881", description: "Interruption of aortic arch", url: "https://images.unsplash.com/photo-1464286141216-66af0ebf8a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=3486&q=80" },
{ listingId: 53, photoId: "0290488087", description: "Hallucinogen dependence w psychotic disorder", url: "https://images.unsplash.com/photo-1528988296565-3cd70e150617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" },
{ listingId: 90, photoId: "9310230681", description: "Disp fx of prox phalanx of l lit fngr, 7thD", url: "https://images.unsplash.com/photo-1442029739115-ce733f0de45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2688&q=80" },
{ listingId: 17, photoId: "6750784763", description: "Traum rupt of volar plate of unsp finger at MCP/IP jt, init", url: "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 12, photoId: "9715240577", description: "Superficial foreign body of lip", url: "https://images.unsplash.com/photo-1506890511692-7ae63ec3dfae?ixlib=rb-1.2.1&auto=format&fit=crop&w=3889&q=80" },
{ listingId: 88, photoId: "6229683482", description: "Other disorders of continuity of bone, humerus", url: "https://images.unsplash.com/photo-1423278220277-c63a9688ec90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2710&q=80" },
{ listingId: 65, photoId: "6636450525", description: "Laceration of radial artery at forearm level, left arm", url: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 26, photoId: "9158662359", description: "Periprosth osteolysis of internal prosthetic joint, sequela", url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=2700&q=80" },
{ listingId: 41, photoId: "5524870084", description: "Jump/div into swimming pool strk wall causing drown, sequela", url: "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3256&q=80" }]


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
