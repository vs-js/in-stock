import React from 'react'
import './SelectionControls.scss'

const SelectionControls = ({nameForRadio1, nameForRadio2}) => {
  return (
    <fieldset className='radio'>
        <legend className='radio--legend'>Status</legend>
        <div className='radio--wrapper'>
            <div className='radio--group'>
                <input type="radio" name={nameForRadio1} value={nameForRadio1} checked />
                <label for={nameForRadio1} className='radio--label'>{nameForRadio1}</label>
            </div>
            <div className='radio--group'>
                <input type="radio" name={nameForRadio2} value={nameForRadio1} />
                <label for={nameForRadio1} className='radio--label'>{nameForRadio2}</label>
            </div>
        </div>
        
    </fieldset>
    
  )
}

export default SelectionControls