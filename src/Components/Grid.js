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
                {/* <li>Solemnizer</li>
                <li>Rach Lim</li>
                <li>Brenda</li>
                <li>Eunice</li>
                <li>Huimin</li>
                <li>Rowena</li>
                <li>Aggie</li>
                <li>Deb</li>
                <li>Chris</li>
                <li>Clara</li>
                <li>Nathan</li>
                <li>Rach Goh</li>
                <li>Daryl Lee</li>
                <li>Emma?</li>
                <li>James</li>
                <li>Steph</li>
                <li>Meiryl</li>
                <li>Shaun</li>
                <li>Natalie?</li>
                <li>Suanne</li>
                <li>Liuyi</li>
                <li>Ben</li>
                <li>Clifton</li>
                <li>Hazel</li>
                <li>Leonard</li>
                <li>Jiehao</li>
                <li>Lloyd</li>
                <li>Andre</li>
                <li>Bryan</li>
                <li>Shan</li>
                <li>Darren</li>
                <li>David loo</li>
                <li>Hanlin</li>
                <li>Huijie</li>
                <li>Bryan Ong</li>
                <li>David Wong</li> */}
            </ol>
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          {/* <Paper className={classes.paper}> */}
              Wedding Day: <br /><strong>10 April 2021
              9:45 AM<br /><br /></strong>
              Jurong Christian Church<br />
              Level 5<br /><br />
              2 Tah Ching Rd,
              Singapore 618744<br /><br />
              Dress Code:  
              Colourful
        <Button variant="outlined" color="textPrimary" href="http://wa.me/6590604088" className={classes.margin}>
          Whatapps Ning &#x27A4;
        </Button>
        <Button variant="outlined" color="textPrimary" href="http://wa.me/6598394937" className={classes.margin}>
          Whatapps Liz &#x27A4;
        </Button>
          {/* </Paper> */}
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>hehe</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
