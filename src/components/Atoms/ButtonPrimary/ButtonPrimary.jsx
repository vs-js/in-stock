import React from 'react';
import './ButtonPrimary.scss'

const ButtonPrimary = ({btnLabel, btnClass = '', btnId = ''}) => {
    return (
        <button className='btnPrimary'>
            <span className='btnPrimary__label'>{btnLabel}</span>
            <div></div>
        </button>
    );
}

export default ButtonPrimary;