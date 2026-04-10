import React from 'react'
import preview from './preview.gif'

const Spinner = () => {
  
    return (
      <div>
        <img src={preview} alt="Loading..." style={{ display: 'block', margin: '0 auto' }} />
      </div>
    )
  
}

export default Spinner
