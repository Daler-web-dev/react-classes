import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({id, task, isDone, time, dispatch}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task}
        </Typography>
        <Typography variant="h5" component="div">
          {task}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {time}
        </Typography>
        <Typography variant="body2">
          {isDone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch({type: "REMOVE", payload: id})} >Delete</Button>
      </CardActions>
    </Card>
  );
}