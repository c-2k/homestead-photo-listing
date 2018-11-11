import React from 'react';

import Slide from './Slide.jsx'
import LeftArrow from './LeftArrow.jsx'
import RightArrow from './RightArrow.jsx'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.photos,
      currentIndex: this.props.index || 0,
      translateValue: (this.props.index *= -640) || 0,
    }
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.slideWidth = this.slideWidth.bind(this)
  }

  goToPrevSlide() {
    if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide() {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth (){
     return document.querySelector('.slide').clientWidth
  }

  render() {
    if (this.state.images) {
      return (
        <div>
        <div className="backSlider">
          <button onClick={() => this.props.view('gallery')} className='slider-button'>X</button>
          </div>
        <div className="slider" >
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0s'
            }} onClick={this.goToNextSlide}>
              {
                this.props.photos.map((image, i, arr) => (
                    <Slide key={i} image={image.url} description={image.description} length={this.props.photos.length} current={this.state.currentIndex}/>
                ))
              }
          </div>
        </div>
        <div>
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
        </div>
      );
    } else {
      <div>Loading on photoView...</div>
    }
  }
}

export default Slider;
