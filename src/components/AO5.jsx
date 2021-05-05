import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import React from 'react'

const AO5 = ({ao5, pb}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          Average of 5:
        </Typography>
        <Typography variant="h6" color="primary">
          {ao5 === "N/A" ? ao5 : ao5.time}
        </Typography>
        <Typography variant="body2">
          {ao5 === "N/A" ? null : ao5.details}
        </Typography>

        <Typography variant="h5">
          Best:
        </Typography>
        <Typography variant="h6" color="primary">
          {pb === "N/A" ? pb : pb.time}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Show</Button>
      </CardActions> */}
    </Card>
  )
}

export default AO5
