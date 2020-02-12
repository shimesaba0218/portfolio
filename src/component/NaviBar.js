import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
    },
    button: {
        padding: 2
    }
});

export default function NaviBar(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.title}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Button fullWidth={true} href='/'>Home</Button>
                    </Grid>
                    <Grid item xs>
                        <Button fullWidth={true} href='/about'>About</Button>
                    </Grid>
                    <Grid item xs>
                        <Button fullWidth={true} href='/contact'>Contact</Button>
                    </Grid>
                </Grid>
                <Typography variant="h4" align='center'>Shimesaba0218</Typography>
            </div>
        </React.Fragment>
    )
}