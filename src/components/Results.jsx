import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import ResultDetails from  './ResultDetails'
import './Results.css';

const Results = ({ results, deleteSolve }) => {
  return (
    !results[0] 
      ? <Typography variant="body1">No history</Typography>
      :
    <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"> # </TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id} color="primary">
              <TableCell align="center" component="th" scope="row">
                <ResultDetails result={result} deleteSolve={deleteSolve} />
              </TableCell>
              <TableCell align="center">{result.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return (
    <ol>
      {results.map(result =>
        <li key={result.id}>
          {result.time} ---- {result.date} ---- {result.scramble}
        </li>
      )}
    </ol>
  )
}

export default Results
