import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import './Results.css';

const Results = ({ results, deleteSolve }) => {
  return (
    <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell > # </TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Scramble</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell component="th" scope="row">
                {result.id + 1}
              </TableCell>
              <TableCell align="center">{result.time}</TableCell>
              <TableCell align="center">{result.date}</TableCell>
              <TableCell align="center">{result.scramble}</TableCell>
              <TableCell align="center">
                <Button 
                  size="small" 
                  color="secondary" 
                  onClick={() => deleteSolve(result.id)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableCell>
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
