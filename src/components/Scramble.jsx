import React from 'react'
import Button from '@material-ui/core/Button';

const Scramble = ({ scramble, newScramble }) => {
  return (
    <div>
      <p>{scramble}</p>
      <Button 
        variant="contained"
        onClick={() => newScramble()}
      >
        New Scramble
      </Button>
    </div>
  )
}

export default Scramble
