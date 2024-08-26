import React from 'react';
import './ButtonDelete.scss'

const ButtonPrimary = ({btnLabel, btnClass = '', btnId = ''}) => {
    return (
        <button className='btnDelete'>
            <span className='btnDelete__label'>{btnLabel}</span>
            <div></div>
        </button>
    );
}

export default ButtonPrimary;