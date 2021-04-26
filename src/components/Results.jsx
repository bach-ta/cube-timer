import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Results.css';

const Results = ({ results }) => {
  return (
    <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> # </TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
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
