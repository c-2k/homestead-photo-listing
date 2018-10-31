import React from 'react'

const Photo = props => (
  <div>
  {props.photos.map((ele, index) => {
      if (index === 0) {
        return <img src={ele.url} className='big' />
      }

      if (index < 5) {
        return <img src={ele.url} className='small'/>
      }
    })
  }
  </div>
)

 export default Photo;
