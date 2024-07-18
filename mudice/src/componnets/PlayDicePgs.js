import React from 'react'

const PlayDicePgs = (props) => {   //Not   DESTRUCTURED
  return (
    <div>
    <h1>PlayDicePgs</h1>
      <button onClick={props.toggle}>Back 'X'!</button>
      </div>
  )
}

export default PlayDicePgs