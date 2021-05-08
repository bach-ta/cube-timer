import './App.css';
import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Results from './components/Results'
import Scramble from './components/Scramble'
import AO5 from './components/AO5'
import LineChart from './components/LineChart'
import getScramble from './scrambler'
import { Box, Button, Grid } from '@material-ui/core'

const itv = 100
const decimalPlace = 2

const useStateLC = (key, initial) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
    }
    return initial
  })
 
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value])
 
  return [value, setValue];
};

const App = () => {
  const [timerOn, setTimerOn] = useState(false)
  const [displayTime, setDisplayTime] = useState(0)
  const [intervalID, setIntervalID] = useState(-1)
  const [startTime, setStartTime] = useState(0)
  const [p, setP] = useState(false)
  const [scramble, setScramble] = useState(getScramble())

  // local data
  const [totalSolves, setTotalSolves] = useStateLC("totalSolves", 0)
  const [results, setResults] = useStateLC("results", [])
  const [ao5, setAo5] = useStateLC("ao5", ["N/A", "N/A", "N/A", "N/A"])
  const [personalBest, setPersonalBest] = useStateLC("pb", "N/A")

  // console.log(scramble)

  const onKeyDown = (e) => { // press any key to stop the timer
    e.preventDefault()
    e.stopPropagation()
    clearInterval(intervalID)
    setTimerOn(a => !a)
    const date = new Date()
    const newDisplayTime = ((date.getTime() - startTime) / 1000).toFixed(decimalPlace)
    setDisplayTime(newDisplayTime)
    setStartTime(0)

    ////////////// save result
    const newResult = {
      id: totalSolves,
      time: newDisplayTime,
      date: date.toLocaleString(),
      scramble: scramble
    }
    const newResults = [...results]
    newResults.unshift(newResult)

    setResults(newResults)
    setTotalSolves(total => total + 1)

    // update PB
    if (personalBest === "N/A" || parseFloat(newDisplayTime) <= parseFloat(personalBest.time)) {
      setPersonalBest(newResult)
    }

    // update AO5
    if (totalSolves + 1 >= 5) {
      let sum = 0, minidx = 0, maxidx = 0
      for (let i = 0; i < 5; i++) {
        let cur = parseFloat(newResults[i].time)
        sum += cur
        if (cur < parseFloat(newResults[minidx].time)) minidx = i;
        if (cur >= parseFloat(newResults[maxidx].time)) maxidx = i;
      }
      let details = ""
      for (let i = 4; i >= 0; i--) {
        details += " "
        if (i === minidx || i === maxidx) details += '(' + newResults[i].time + ')'
        else details += newResults[i].time
      }
      setAo5(ao5 => {
        const newAO5 = [...ao5]
        newAO5.unshift({
          time: ((sum - parseFloat(newResults[minidx].time) - parseFloat(newResults[maxidx].time)) / 3).toFixed(2),
          details: details
        })
        return newAO5
      })
    }

    setScramble(getScramble())
    document.removeEventListener("keydown", onKeyDown)
  }

  const onKeyUp = (e) => {
    if (intervalID === -1) {
      if (e.keyCode === 32) {
        // start timing
        e.preventDefault()
        e.stopPropagation()
        const startTimeDate = new Date()
        setStartTime(startTimeDate.getTime())
        setDisplayTime(0)
        const interval = setInterval(() => {
          setDisplayTime(displayTime => ((displayTime * 10 + 1) / 10).toFixed(1))
        }, itv)
        setIntervalID(interval)
        setTimerOn(a => !a)
        document.removeEventListener("keyup", onKeyUp)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setDisplayTime(0)
      }
    } else {
      // reset keyup
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
    const newResults = [...results]
    for (let i = totalSolves - id - 1; i >= 1; i--) {
      newResults[i] = newResults[i - 1]
      newResults[i].id--
    }
    newResults.shift()
    setResults(newResults)

    const newTotal = totalSolves - 1
    console.log(newTotal)
    setTotalSolves(newTotal)

    // update pb
    let newPB = newResults[0]
    for (let i = 1; i < newTotal; i++) {
      if (parseFloat(newResults[i].time) < parseFloat(newPB.time)) newPB = newResults[i]
    }
    setPersonalBest(newPB ? newPB : "N/A")

    // update ao5
    const newAO5 = []
    for (let s = 0; s < newTotal - 4; s++) {
      let sum = 0, minidx = 0, maxidx = 0
      for (let i = s; i < s + 5; i++) {
        let cur = parseFloat(newResults[i].time)
        sum += cur
        if (cur < parseFloat(newResults[minidx].time)) minidx = i;
        if (cur >= parseFloat(newResults[maxidx].time)) maxidx = i;
      }
      let details = ""
      for (let i = s + 4; i >= s; i--) {
        details += " "
        if (i === minidx || i === maxidx) details += '(' + newResults[i].time + ')'
        else details += newResults[i].time
      }
      newAO5.push({
        time: ((sum - parseFloat(newResults[minidx].time) - parseFloat(newResults[maxidx].time)) / 3).toFixed(2),
        details: details
      })
    }
    for (let i = 0; i < 4; i++) newAO5.push("N/A")
    console.log(newAO5)
    setAo5(newAO5)
  }

  const resetSolves = () => {
    if (!results[0]) {
      alert("No solves available")
    } else if (window.confirm("Do you want to remove all solves?")) {
      setTotalSolves(0)
      setResults([])
      setDisplayTime(0)
      setAo5(["N/A", "N/A", "N/A", "N/A"])
      setPersonalBest("N/A")
    }
  }

  return intervalID === -1 ? (
    <div className="App">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Scramble scramble={scramble} newScramble={() => setScramble(getScramble())} />
        </Grid>

        <Grid item xs>
          <Box mb={2}>
            <Button variant="contained" color="secondary" onClick={resetSolves}>
              Reset All
            </Button>
          </Box>
          <Box className="results-table">
            <Results results={results} deleteSolve={deleteSolve} />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box mb={2}>
            <Display time={displayTime} active={0} />
          </Box>
          <LineChart results={results} ao5={ao5} />
        </Grid>

        <Grid item xs>
          <AO5 ao5={ao5[0]} pb={personalBest} />
        </Grid>

      </Grid>
    </div>
  ) : (
    <Display time={displayTime} active={1} />
  )
}

export default App;
