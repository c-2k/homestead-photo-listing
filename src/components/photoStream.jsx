import React from 'react';
import Photo from './photo.jsx'

const PhotoStream = props => (
  <div>
  <Photo photos={props.photos}/>
  </div>
);

export default PhotoStream;
