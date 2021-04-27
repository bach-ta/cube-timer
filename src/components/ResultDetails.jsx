import React, { useState } from 'react'
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const ResultDetails = ({ result, deleteSolve }) => {
  const { id, time, date, scramble } = result
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const copyScramble = (text) => {
  //   text.select();
  //   text.setSelectionRange(0, 99999);
  //   document.execCommand("copy");
  //   alert("Copied");
  // }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        {id + 1}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={3}>

              <Grid item xs={2} align="center" >Solve #{result.id + 1}</Grid>
              <Grid item xs={2} align="center">{time}</Grid>
              <Grid item xs={6} align="center">{date}</Grid>
              <Grid item xs={2} align="right">
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => {
                    handleClose()
                    deleteSolve(id)
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </Grid>
              <Grid item xs={12}>
                Scramble: {scramble}
                {/* <Button onClick={() => copyScramble(scramble)}>
                  Copy
                </Button> */}
              </Grid>

            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ResultDetails
