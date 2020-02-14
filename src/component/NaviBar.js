import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    navibar: {
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: '10px 0'
    },
    title: {
        margin: '10px 0'
    }
});

export default function NaviBar(){
    const classes = useStyles();
    return(
        <div className={classes.navibar}>
            <Typography variant="h4" className={classes.title}>Shimesaba0218</Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/'>Home</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/about'>About</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth='true' href='/contact'>Contact</Button>
                </Grid>
            </Grid>
        </div>
    )
}