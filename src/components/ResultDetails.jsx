import React, { useState } from 'react'
import { Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard'

const styles = {
  margin: "auto"
};

const ResultDetails = ({ result, deleteSolve, inTable }) => {
  const { id, time, date, scramble } = result
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        {inTable ? id + 1
          : <Typography variant="h6" color="primary">
            {result.time}
          </Typography>}
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

              <Grid style={styles} item xs={2} align="center">Solve #{result.id + 1}</Grid>
              <Grid style={styles} item xs={3} align="center">{time}</Grid>
              <Grid style={styles} item xs={5} align="center">{date}</Grid>

              <Grid item xs={2} align="right">
                {inTable ? <Button
                  size="small"
                  color="secondary"
                  onClick={() => {
                    handleClose()
                    deleteSolve(id)
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </Button> : null}
              </Grid>
              <Grid style={styles} item xs={2}>
                Scramble:
              </Grid>
              <Grid style={styles} item xs={8}>
                {scramble}
              </Grid>
              <Grid item xs={2} align="right">
                <Button onClick={() => copy(scramble)}>
                  <FileCopyIcon></FileCopyIcon>
                </Button>
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
