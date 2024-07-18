import React, { useState } from 'react';
import './AllPags.css';
import TotalScore from './TotalScore';
import ArrayScore from './ArrayScore';

const PlayDicePgs = (props) => {   // Not destructured
  const [score,setScore] =useState(0)

  const arrayNum = [1, 2, 3, 4, 5, 6]
  const [arrayVal, setArrayVal] = useState(0);

  const [diceVal, setDiceVal] = useState(1);

  const randomFun = (max, min) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const Rolldice = () => {
    const ranDomNum = randomFun(1, 6); // Ensure the range is from 1 to 6
    setDiceVal((prev) => ranDomNum);
    if (arrayVal== diceVal){
      setScore( (prev) => prev + ranDomNum)
}
else{
  return( (prev) => prev - 2)
}
  };




  return (
    <div>
      <div style={{ margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TotalScore score={score} />



        <ArrayScore 
          arrayVal={arrayVal} 
          diceVal={diceVal} 
          arrayNum={arrayNum} 
          setArrayVal={setArrayVal}  // Pass the setter function as a prop
          Rolldice={Rolldice}  // Pass the dice rolling function as a prop
        />
      </div>
      <button onClick={props.toggle}>Back 'X'!</button>
    </div>
  );
};

export default PlayDicePgs;
