import React from 'react';
import './TextLink.scss';
import chevron from '../../../assets/Icons/chevron_right-24px.svg'

const TextLink = ({linkLabel}) => {
  return (
    <div className='text-link'>
        <button className='text-link--button'>{linkLabel}</button>
        <img className='text-link--img' src={chevron} alt='navigate icon'/>
    </div>
    
  )
}

export default TextLink