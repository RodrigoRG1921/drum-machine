import React, { useEffect, useState } from 'react'
import '../App.css'
import {bankOne} from '../lib/drumSounds';

const DrumPad = ({element, isOn, currentSoundVolume, setCurrentElement}) => {

  const [isPress, setIsPress] = useState(false);

  const handleKeyPress = (e) => {
    const element1 = bankOne.find(element => element.keyCode === e.keyCode)
    if (element1) {
      setCurrentElement(element1)
      let sound1 = document.getElementById(element1.keyTrigger);
      sound1.play();
    }
    
    
  }
  

  const handleClick = (element) => {
    if (isOn) {
      setCurrentElement(element)
      let sound = document.getElementById(element.keyTrigger);
      sound.volume = currentSoundVolume
      sound.play();
      setIsPress(true);
      setTimeout(() => {
        setIsPress(false)
      }, 100)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <div >
      <button
      className='drum-pad'
      onClick={() => handleClick(element)}
      id={element.id}
      style={isPress ? {background: '#EFDAD7'} : {background: '#E3BEC6', boxShadow: '3px 3px 5px 1px'}}
      >
      {element.keyTrigger}
      <audio className="clip" id={element.keyTrigger} src={element.url}/>
    </button>
    </div>
    
  )
}

export default DrumPad