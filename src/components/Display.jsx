import React from 'react'
import './Display.css';

const Display = ({time, scramble, newScramble}) => {
  
  const styleDisplay = {
    color: "green",
    backgroundColor: "grey",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <p>{scramble}</p>
      <button onClick={() => newScramble()}>
        New Scramble
      </button>
      <h1 className="stopwatch">{time ? (time / 100).toFixed(2) : 0}</h1>
    </div>
  )
}

export default Display
