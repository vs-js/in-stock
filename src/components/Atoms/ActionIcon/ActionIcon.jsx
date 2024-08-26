import React from 'react'

const ActionIcon = ({src, alt}) => {
  return (
    <div className='img-container'>
        <img src={src} alt={alt}/>
    </div>
  )
}

export default ActionIcon