import React from 'react';

const Photo = props => (
  <div className='main'>
    <img src={props.photo.url} alt={props.photo.description} onClick={() => props.view('slide', props.index)} className='mPhoto'/>
  </div>
)

export default Photo;
