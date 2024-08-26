import React from 'react';
import './ButtonSecondary.scss'

const ButtonPrimary = ({btnLabel, btnClass = '', btnId = ''}) => {
    return (
        <button className='btnSecondary'>
            <span className='btnSecondary__label'>{btnLabel}</span>
            <div></div>
        </button>
    );
}

export default ButtonPrimary;