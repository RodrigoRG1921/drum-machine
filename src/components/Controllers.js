import React, { useEffect } from 'react'
import '../App.css'

const Controllers = ({currentSound, handleSoundChange, handleClick, isOn}) => {

  

  return (
    <div className='controllers-container'>
      <div>
        <h4 className='controllers-text'>Power - { isOn ? 'On' : 'Off' }</h4>
        <div className='power-button' style={ isOn ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
          <div className='power-button-switch' onClick={handleClick} ></div>
        </div>
      </div>
      
      <div id='display'>
        {currentSound}
      </div>
      <div>
      </div>
      <h4 className='controllers-text'>Volume:</h4>
      <input  id='volume-slider' type="range" step="0.01" min="0" max="1" onChange={handleSoundChange}/>
    </div>
  )
}

export default Controllers