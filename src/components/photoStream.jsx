import React from 'react';

const Photos = props => (
  <div>
    {console.log('PHOTO IN PHOTOSTREAM',props.photo[0])}
    {props.photo[0] ===undefined ? <div>loading</div> :
    <img src={props.photo[0].url} />
  }
  </div>
);

export default Photos;
