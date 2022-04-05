import {  useState } from 'react';
import './App.css';
import {ChromePicker} from 'react-color';

function App() {
  const[color,setColor] = useState("#000")
  const[showcolor,setShowcolor] = useState('false')

  return (
    <center>
    <div>
    
      <button onClick={()=> setShowcolor ( showcolor=>!showcolor)}>
        {showcolor ? 'close color picker':'pick a color'}
      </button>
      
      {
        showcolor &&  <ChromePicker 
                        color={color} 
                        onChange = {updatecolor => setColor(updatecolor.hex)}/>
      }

    
     <p>your color code is(hex code):{color}</p>
    </div>
    </center>
  );
}

export default App;
