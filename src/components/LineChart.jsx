import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ results, ao5 }) => {
  return (
    results[0] ? (
      <Line
        data={{
          labels: results.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: results.map(result => result.time),
            label: "Time",
            borderColor: "#ff7961",
            fill: false,
          }, {
            data: ao5.map(t => {
              return t === "N/A" ? null : t.time
            }),
            label: "Average of 5",
            borderColor: "#3f50b5",
            fill: false,
          }],
          reverse: true
        }}
        options={{
          scales: {
            x: {
              reverse: true
            }
          }
        }}
      />
    ) : null
  )
}

export default LineChart
