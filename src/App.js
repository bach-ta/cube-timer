import './App.css';
import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Results from './components/Results'
import Scramble from './components/Scramble'
import AO5 from './components/AO5'
import getScramble from './scrambler'
import { Box, Typography, Button, Grid } from '@material-ui/core'

const App = () => {
  const [timerOn, setTimerOn] = useState(false)
  const [displayTime, setDisplayTime] = useState(0)
  const [intervalID, setIntervalID] = useState(-1)
  const [totalSolves, setTotalSolves] = useState(0)

  const [results, setResults] = useState([])
  const [scramble, setScramble] = useState(getScramble())
  const [p, setP] = useState(false)

  const [ao5, setAo5] = useState("N/A")

  // console.log(scramble)

  const onKeyDown = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault()
      e.stopPropagation()
      clearInterval(intervalID)
      setTimerOn(a => !a)
      document.removeEventListener("keydown", onKeyDown)
    }
  }

  const onKeyUp = (e) => {
    if (intervalID === -1) {
      if (e.keyCode === 32) {
        e.preventDefault()
        e.stopPropagation()
        // console.log("infunc:" + timerOn)
        setDisplayTime(0)
        const interval = setInterval(() => {
          setDisplayTime(displayTime => displayTime + 1)
        }, 10)
        setIntervalID(interval)
        setTimerOn(a => !a)
        document.removeEventListener("keyup", onKeyUp)
      } else if (e.key === 'Escape') {
        e.preventDefault()
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
      setResults(array => {
        const newArray = array
        newArray.unshift(newResult)
        return newArray
      })
      setTotalSolves(total => total + 1)

      setScramble(getScramble())

      setIntervalID(-1)
      setP(a => !a)
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("keyup", onKeyUp)
    }
  }

  useEffect(() => {
    // console.log("useEffect")
    if (timerOn) document.addEventListener("keydown", onKeyDown)
    else document.addEventListener("keyup", onKeyUp)
  }, [timerOn, p])

  // console.log(results)
  // console.log(totalSolves)
  // console.log(ao5)

  const deleteSolve = (id) => {
    const newResults = results
    // console.log("deleting" + id)
    // console.log("start at index" + totalSolves - id - 1)
    for (let i = totalSolves - id - 1; i >= 1; i--) {
      newResults[i] = newResults[i - 1]
      newResults[i].id--
    }
    newResults.shift()
    setResults(newResults)
    setTotalSolves(total => total - 1)
  }

  const resetSolves = () => {
    if (totalSolves === 0) {
      alert("No solves available")
    } else if (window.confirm("Do you want to remove all solves?")) {
      setTotalSolves(0)
      setResults([])
      setDisplayTime(0)
    }
  }

  useEffect(() => {
    // console.log("total: " + totalSolves)
    // console.log("res len: " + results.length)
    // console.log(results)
    const len = results.length
    if (len < 5) {
      setAo5("N/A")
    } else {
      let sum = 0, minidx = 0, maxidx = 0
      for (let i = 0; i < 5; i++) {
        let cur = parseFloat(results[i].time)
        sum += cur
        if (cur < parseFloat(results[minidx].time)) minidx = i;
        if (cur >= parseFloat(results[maxidx].time)) maxidx = i;
      }
      let details = ""
      for (let i = 4; i >= 0; i--) {
        details += " "
        if (i === minidx || i === maxidx) details += '(' + results[i].time + ')'
        else details += results[i].time
      }
      setAo5({
        time: ((sum - parseFloat(results[minidx].time) - parseFloat(results[maxidx].time)) / 3).toFixed(2),
        details: details
      })
    }
  }, [totalSolves])

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Scramble scramble={scramble} newScramble={() => setScramble(getScramble())} />
        </Grid>

        <Grid item xs={3}>
          <Box mb={2}>
            <Button variant="contained" color="secondary" onClick={resetSolves}>
              Reset All
            </Button>
          </Box>
          <Results results={results} deleteSolve={deleteSolve} />
        </Grid>

        <Grid item xs={6}>
          <Display time={displayTime} />
        </Grid>

        <Grid item xs={3}>
          <AO5 ao5={ao5} />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
