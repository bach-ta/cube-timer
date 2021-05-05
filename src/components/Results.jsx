import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableFooter, Paper } from '@material-ui/core'
// import { DataGrid } from '@material-ui/data-grid';
import ResultDetails from  './ResultDetails'
// import './Results.css';

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

        {/* <TableFooter>
          <TableRow>
            <TablePagination rowsPerPageOptions={[10, 50]} />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
  // return (
  //   <div style={{ height: 400, width: '100%' }}>
  //     <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  //   </div>
  // )
  // return (
  //   <ol>
  //     {results.map(result =>
  //       <li key={result.id}>
  //         {result.time} ---- {result.date} ---- {result.scramble}
  //       </li>
  //     )}
  //   </ol>
  // )
}

export default Results
