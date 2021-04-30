import React from 'react'
import './Display.css';
import Typography from '@material-ui/core/Typography';

const Display = ({ time }) => {
  return (
    <div className="displayContainer">
      <Typography variant="h1" className="stopwatch">
        <strong>{time}</strong>
      </Typography>
    </div>
  )
}

export default Display
