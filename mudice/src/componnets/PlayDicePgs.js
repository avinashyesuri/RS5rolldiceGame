import React from 'react'
import './AllPags.css';
import TtoaslScore from './TotalScore';
import ArrayScore from './ArrayScore';
const PlayDicePgs = (props) => {   //Not   DESTRUCTURED
  return (
    <div>
      <div style={{ margin: '10px', display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>

        <TtoaslScore />
        <ArrayScore />

      </div>
      <button onClick={props.toggle}>Back 'X'!</button>
    </div>
  )
}

export default PlayDicePgs