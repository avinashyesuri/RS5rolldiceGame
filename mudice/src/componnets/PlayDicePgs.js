



import React, { useState } from 'react';
import './AllPags.css';
import TotalScore from './TotalScore';
import ArrayScore from './ArrayScore';
import Showrulz from './Showrulz';

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
      setErr(" ******  HERE *****");
      return;
    } else {
      setErr("");
      const ranDomNum = randomFun(1, 6);
      setDiceVal((prev) => ranDomNum);

      if (arrayVal === diceVal) {
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
      <div style={{ width: '50%', alignSelf: "center", margin: "50px 30px" }}>
        <button style={{ width: '50%', margin: "10px" }} onClick={props.toggle}>Back 'X'!</button>
        <button style={{ width: '50%', margin: "10px" }} onClick={ResetFun}>Reset Scores</button>
        <button style={{ width: '50%', margin: "10px" }} onClick={toggleRulz}>Show Rulz</button>
        {showRulz && <Showrulz />}
      </div>
    </div>
  );
};

export default PlayDicePgs;
