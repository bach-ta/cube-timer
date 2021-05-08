import React from 'react'
import './Display.css';
import Typography from '@material-ui/core/Typography';

const Display = ({ time, active }) => {
  return (
    <div className={active ? "activeDisplay" : "inactiveDisplay"}>
      <div className="stopwatch">
        <Typography variant="h1">
          <strong>{time}</strong>
        </Typography>
        {active ? null : <Typography variant="body1" className="blink">Press Space to start</Typography>}
      </div>
    </div>
  )
}

export default Display
