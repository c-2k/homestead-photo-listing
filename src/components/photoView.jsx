import React from 'react';
class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.photos,
      currentIndex: 0,
      translateValue: 0,
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
    if (this.state.images){
      return (
        <div className="backSlider">
          <button onClick={() => this.props.view('gallery')}>X</button>
        <div className="slider" >
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }} onClick={this.goToNextSlide}>
              {
                this.props.photos.map((image, i, arr) => (
                    <Slide key={this.props.index} image={image} />
                ))
              }
          </div>
        </div>
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    } else {
      <div>Loading on photoView...</div>
    }
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  return (
  <div className="slide">
      <p>{image.description}</p>
    <div className='slidePic'>
      <img src={image.url} />
    </div>
  </div>
   )
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <h1>-</h1>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <h1>+</h1>
    </div>
  );
}

export default Slider;
