import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export function Cards() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">Number Fact</Typography>
      <Typography component="h2" variant="h6" color="primary">
        Enter a number:
        <Input type="number"></Input>
      </Typography> 
      <br></br>
      <div>
        <Button variant="contained" color="primary">
           Submit
        </Button>
      </div>
    </React.Fragment>
  );
}
export function ResultCard() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Typography component="p" variant="h4">Result</Typography>
        <Typography component="h2" variant="h6" color="primary">
          This is a placeholder
        </Typography>
      </React.Fragment>
    );
  }