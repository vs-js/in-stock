import React from 'react'
import './StyleGuideSample.scss';
import ActionIcon from '../Atoms/ActionIcon/ActionIcon';
import editIcon from '../../assets/Icons/edit-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg'
import ButtonPrimary from '../Atoms/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Atoms/ButtonSecondary/ButtonSecondary'
import ButtonDelete from '../Atoms/ButtonDelete/ButtonDelete'
import TextLink from '../Atoms/TextLink/TextLink';
import TextField from '../Atoms/TextField/TextField';
import Dropdown from '../Atoms/Dropdown/Dropdown';
import SelectionControls from '../Atoms/SelectionControls/SelectionControls';
import TagInStock from '../Atoms/TagInStock/TagInStock';
import TagOutStock from '../Atoms/TagOutStock/TagOutStock';
import SearchBox from '../Atoms/SearchBox/SearchBox';

const StyleGuideSample = () => {
  return (
    <div className='style-guide'>
      <div className='style-guide--type'>
        <h4>Typography</h4>
        <h1>H1 - Page Header</h1>
        <h2>H2 - Subheader</h2>
        <h3>H3 - Labels, Links & Buttons</h3>
        <h4 className='table-header'>H4 - table header</h4>
        <p className='p1'>P1 - Body Large</p>
        <p className='p2'>P2 - Body Medium</p>
        <p className='p3'>P3 - Body Small</p>
      </div>
      <div className='style-guide--icons'>
      <h4>Icons</h4>
        <ActionIcon 
          src={ editIcon }
          alt='edit icon'
        />

        <ActionIcon 
          src={ deleteIcon }
          alt='delete icon'
        />
      </div>
      <div className='style-guide--cta'>
      <h4>Call To Actions</h4>
          <ButtonPrimary 
            btnLabel = '+ Add Item'
          />
          <ButtonSecondary 
            btnLabel = 'Cancel'
          />
          <ButtonDelete 
            btnLabel = 'Delete'
          />
          <TextLink 
            linkLabel = "Manhattan"
          />
      </div>
      <div>
        <h4>Form Fields</h4>
        <TextField 
          placeholder='Item Name'
        />
        <Dropdown />
        <SearchBox />
      </div>
      <div>
        <h4>Selection Controls</h4>
        <SelectionControls 
          nameForRadio1 = 'In Stock'
          nameForRadio2 = 'Out of Stock'
        />
      </div>
      <div className='style-guide--tags'>
        <h4>Tags</h4>
        <TagInStock 
          name='in stock'
        />

        <TagOutStock 
          name='out of stock'
        />
      </div>
    </div>
    
  )
}

export default StyleGuideSample