import './App.css';
import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Results from './components/Results'
import Scramble from './components/Scramble'
import getScramble from './scrambler'
import { Button, Paper, Grid } from '@material-ui/core'

const App = () => {
  const [timerOn, setTimerOn] = useState(false)
  const [displayTime, setDisplayTime] = useState(0)
  const [intervalID, setIntervalID] = useState(-1)
  const [totalSolves, setTotalSolves] = useState(0)

  const [results, setResults] = useState([])
  const [scramble, setScramble] = useState(getScramble())
  const [p, setP] = useState(false)

  // console.log(scramble)

  const onKeyDown = (e) => {
    e.stopPropagation();
    e.preventDefault()
    if (e.keyCode === 32) {
      clearInterval(intervalID)
      setTimerOn(a => !a)
      document.removeEventListener("keydown", onKeyDown)
    }
  }

  const onKeyUp = (e) => {
    e.stopPropagation();
    e.preventDefault()
    if (intervalID === -1) {
      if (e.keyCode === 32) {
        console.log("infunc:" + timerOn)
        setDisplayTime(0)
        const interval = setInterval(() => {
          setDisplayTime(displayTime => displayTime + 1)
        }, 10)
        setIntervalID(interval)
        setTimerOn(a => !a)
        document.removeEventListener("keyup", onKeyUp)
      } else if (e.key === 'Escape') {
        setDisplayTime(0)
      }
    } else {
      const date = new Date()
      const newResult = {
        id: totalSolves,
        time: (displayTime / 100).toFixed(2),
        date: date.toLocaleString(),
        scramble: scramble
      }
      setTotalSolves(total => total + 1)
      setResults(array => {
        const newArray = array
        newArray.unshift(newResult)
        return newArray
      })

      setScramble(getScramble())

      setIntervalID(-1)
      setP(a => !a)
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("keyup", onKeyUp)
    }
  }

  useEffect(() => {
    console.log("useEffect")
    if (timerOn) document.addEventListener("keydown", onKeyDown)
    else document.addEventListener("keyup", onKeyUp)
  }, [timerOn, p])

  // console.log(results)

  const deleteSolve = (id) => {
    const newResults = results
    console.log("deleting" + id)
    console.log("start at index" + totalSolves - id - 1)
    for (let i = totalSolves - id - 1; i >= 1; i--) {
      newResults[i] = newResults[i - 1]
      newResults[i].id--
    }
    newResults.shift()
    setTotalSolves(total => total - 1)
    setResults(newResults)
  }

  const resetSolves = () => {
    if (window.confirm("Do you want to remove all solves?")) {
      setTotalSolves(0)
      setResults([])
    }
  }

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Scramble scramble={scramble} newScramble={() => setScramble(getScramble())} />
        </Grid>

        <Grid item xs={12}>
          <Display time={displayTime} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={resetSolves}>
            Reset All
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Results results={results} deleteSolve={deleteSolve} />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
