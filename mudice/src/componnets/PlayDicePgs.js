import React, { useState } from 'react';
import './AllPags.css';
import TotalScore from './TotalScore';
import ArrayScore from './ArrayScore';
import Showrulz from './Showrulz';

import fd1 from '../imgs/cubes_gambling_n_02 1.png';
import fd2 from '../imgs/dice_2.png';
import fd3 from '../imgs/dice_3.png';
import fd4 from '../imgs/dice_4.png';
import fd5 from '../imgs/dice_5.png';
import fd6 from '../imgs/dice_6.png';

const PlayDicePgs = (props) => {
  const [score, setScore] = useState(0);
  const [err, setErr] = useState("");
  const arrayNum = [1, 2, 3, 4, 5, 6];
  const [arrayVal, setArrayVal] = useState(null);
  const [diceVal, setDiceVal] = useState(1);
  const [showRulz, setShowRulz] = useState(false); // State for toggling Showrulz

  const randomFun = (max, min) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const Rolldice = () => {
    if (!arrayVal) {
      setErr(" YOU HAVE NOT SELECTED NO:");
      return;
    } else {
      setErr("");
      const ranDomNum = randomFun(1, 6);
      setDiceVal(ranDomNum);

      if (arrayVal === ranDomNum) {
        setScore((prev) => prev + ranDomNum);
        alert("HURRAH!!!");
      } else {
        setScore((prev) => prev - 2);
      }
      setArrayVal(undefined);
    }
  };

  const ResetFun = () => {
    setScore(0);
    setArrayVal(undefined);
    setDiceVal(1);
  };

  const toggleRulz = () => {
    setShowRulz((prev) => !prev); // Toggle the state
  };

  // Map dice values to the corresponding image imports
  const diceImages = [fd1, fd2, fd3, fd4, fd5, fd6];

  return (
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TotalScore score={score} />
        <ArrayScore
          arrayVal={arrayVal}
          diceVal={diceVal}
          arrayNum={arrayNum}
          setArrayVal={setArrayVal}
          Rolldice={Rolldice}
          err={err}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10px", alignSelf: "center" }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center", alignSelf: "center" }} onClick={Rolldice}>
          <img src={diceImages[diceVal - 1]} alt={`dice ${diceVal}`} style={{marginTop:"45px", fontSize: "20px", cursor: "pointer" }} />
          <p style={{ margin: '10px', color: 'black', fontWeight: 'bolder', alignItems: 'flex-end' }}>
            CLICK ON DICE TO ROLL
          </p>
        </div>
        <button className='XButt' style={{ padding: "5px 60px", width: "100%", margin: '2%' }} onClick={props.toggle}>Back 'X'!</button>
        <button style={{ padding: "5px 60px", width: "100%", margin: '2%' }} onClick={ResetFun}>Reset Scores</button>
        <button className='YButt' style={{ padding: "5px 60px", width: "100%", margin: '2%' }} onClick={toggleRulz}>Show Rulz</button>
        {showRulz && <Showrulz />}
      </div>
    </div>
  );
};

export default PlayDicePgs;
