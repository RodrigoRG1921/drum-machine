import DrumPad from "./components/DrumPad";
import './App.css'
import Controllers from "./components/Controllers";
import {bankOne} from './lib/drumSounds'
import { useState } from "react";

function App() {
  const [currentElement, setCurrentElement] = useState({id:""});
  const [currentSoundVolume, setCurrentSoundVolume] = useState(1);
  const [isOn, SetIsOn] = useState(true);

  const handleSoundChange = (e) => {
    const volume = e.currentTarget.value
    setCurrentSoundVolume(volume)
    
  }

  

   

  const handlePowerClick = () => {
    SetIsOn(!isOn);

  }

  return (
    <div className="App">
      <div className="container" id='drum-machine'>
        <div className="container-drums" >
          {bankOne.map((element) => {
            return (
              <DrumPad 
                key={element.id}
                element={element}s
                isOn={isOn}
                currentSoundVolume={currentSoundVolume}
                setCurrentElement = {setCurrentElement}
                
                />
            )
          })}
        </div>
        <Controllers 
          currentSound={currentElement.id}
          handleSoundChange={handleSoundChange}
          handleClick={handlePowerClick}
          isOn={isOn}
          
          
          />
        
      </div>
      
    </div>
  );
}

export default App;
