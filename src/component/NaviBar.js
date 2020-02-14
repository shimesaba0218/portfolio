import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sieg from '../images/Sieg.png';

const useStyles = makeStyles({
    navibar: {
        textAlign: 'center',
        backgroundColor: '#ffe5f2',
        padding: '10px 0'
    },
    title: {
        margin: '10px 0'
    },
    image: {
        width: 150,
        height: 150
    }
});

export default function NaviBar(){
    const classes = useStyles();
    return(
        <div className={classes.navibar}>
            <img className={classes.image} src={Sieg} alt=''/>
            <Typography variant="h4" className={classes.title}>Shimesaba0218</Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/'>About</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/skill'>Skill</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/contact'>Contact & Donation</Button>
                </Grid>
            </Grid>
        </div>
    )
}