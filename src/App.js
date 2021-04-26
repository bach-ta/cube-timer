import './App.css';
import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Results from './components/Results'
import getScramble from './scrambler'

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
    }
    document.removeEventListener("keydown", onKeyDown)
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

  return (
    <div className="App">
      <div>
        <Display time={displayTime} scramble={scramble} newScramble={() => setScramble(getScramble())} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
