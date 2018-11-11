import React from 'react';
import Main from './MainPhoto.jsx';
import Side from './SidePhoto.jsx';

const PhotoStream = props => (
  <div>
    <nav>
      <div className='head'>
        <div className='nav-btn hoverback'>
          <h1 className= 'company'>Homestead</h1>
        </div>
        <div className='nav-btn no-border'>
          <svg viewBox="0 0 16 16" className='viewBoxSearch'><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
            <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
          </svg>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          <input type='text' placeholder='Search' className='search' />
        </div>
      </div>
      <div className='head'>
        <div className='nav-btn hoverback'>
          <div className='btn b-a-host'>Become a Host</div>
        </div>
        <div className='nav-btn hoverback'>
          Help
    </div>
        <div className='nav-btn hoverback'>
          Sign Up
    </div>
        <div className='nav-btn hoverback'>
          Log In
    </div>
      </div>
    </nav>
  <div className='container'>
  <div className='mainPic'>
      {props.photos.map((ele, index) => {
        if(index === 0){
          return <div>
            <Main photo={ele} index={index} view={props.view}/>
          </div>
        }
    })
    }
  </div>
  <div className='sidePics'>
    {props.photos.map((ele, index) => {
      if (index > 0 && index < 5) {
        return <Side photo={ele} index={index} view={props.view}/>
      }
    })
    }
      <button onClick={() => props.view('slide')} className='viewPhoto'>View Photos</button>
  </div>
  </div>
  </div>
);

export default PhotoStream;

