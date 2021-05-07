import React from 'react'
import './Display.css';
import Typography from '@material-ui/core/Typography';

const Display = ({ time, active }) => {
  return (
    <div className={active ? "activeDisplay" : "inactiveDisplay"}>
      <Typography variant="h1" className="stopwatch">
        <strong>{time}</strong>
      </Typography>
    </div>
  )
}

export default Display
