import React from 'react';
import './TextField.scss';

const TextField = ({placeholder}) => {
  return (
    <input type='text' placeholder={placeholder} className='text-input'/>
  )
}

export default TextField