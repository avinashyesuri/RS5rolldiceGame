import React from 'react';
import './AllPags.css';
import f4 from '../imgs/dices 1.png';
const LandingDicePg = ({toggle}) => {    //props === toggle (destructered)
  return (
    <div className='main'>
        <div  className='imgSty'>
            <img src={f4} alt ='dices'/>
        </div>
        <div  className='TextSty'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play now!</button>
        </div>
    </div>
  )
}

export default LandingDicePg