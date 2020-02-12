import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {

    }
});

export default function NaviBar(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
                <Button href='/'>Home</Button>
                <Button href='/about'>About</Button>
                <Button href='/hobby'>Hobby</Button>
                <Button href='/contact'>Contact</Button>
        </div>
    )
}