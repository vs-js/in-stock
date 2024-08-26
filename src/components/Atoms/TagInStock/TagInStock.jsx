import React from 'react'
import './TagInStock.scss'

const Tags = ({name}) => {
  return (
    <div className='tagInStock'>
      <h4>{name}</h4>
    </div>
  )
}

export default Tags