import React from 'react'
import './TagOutStock.scss'

const Tags = ({name}) => {
  return (
    <div className='tagOutStock'>
      <h4>{name}</h4>
    </div>
  )
}

export default Tags