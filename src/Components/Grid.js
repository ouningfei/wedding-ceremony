import React from 'react';
import '../App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            RSVP-ed yes:
            <ol>
                <li>Liz's Mum</li>
                <li>Liz's Dad</li>
                <li>Ning's Mum</li>
                <li>Ning's Dad</li>
                <li>Ningxiang</li>
                <li>Isabella</li>
                <li>Giegie</li>
                <li>Uncle Taikok</li>
                <li>Pastor Barney</li>
                <li>Bryan</li>
                <li>Shan</li>
                <li>Rach Goh</li>
                <li>Daryl Leong</li>
                <li>Baby Emma</li>
                <li>James</li>
                <li>Steph</li>
                <li>Meiryl</li>
                <li>Shaun</li>
                <li>Baby Natalie</li>
                <li>Clara</li>
                <li>Wei Wen</li>
                <li>Prince Nathan</li>
                <li>Suanne</li>
                <li>Liuyi</li>
                <li>Ben</li>
                <li>Clifton</li>
                <li>Hazel</li>
                <li>Leonard</li>
                <li>Lloyd</li>
                <li>Jiehao</li>
                <li>Andre</li>
                <li>David loo</li>
                <li>Hanlin</li>
                <li>Darren Tan</li>
                <li>Huijie</li>
                <li>Aggie</li>
                <li>Brenda</li>
                <li>Mintanaporn</li>
                <li>Rach Lim</li>
                <li>Ro</li>
                <li>Deb</li>
                <li>Chris</li>
                <li>Wei Cheng</li>
                
                {/*
                <li>Bryan Ong</li>
                <li>Woan Keng</li>
                <li>David Wong</li> */}
            </ol>
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          {/* <Paper className={classes.paper}> */}
              Jurong Christian Church<br />
              Level 5<br /><br />
              2 Tah Ching Rd, <br />
              Singapore 618744<br /><br />
              Dress Code:  
              Colourful
        <Button variant="outlined" color="primary" href="http://wa.me/6590604088" className={classes.margin}>
          Whatapps Ning &#x27A4;
        </Button>
        <Button variant="outlined" color="primary" href="http://wa.me/6598394937" className={classes.margin}>
          Whatapps Liz &#x27A4;
        </Button>
        <br />
        Yes there is parking
        No there isn't lunch I'm afraid
          {/* </Paper> */}
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>hehe</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
