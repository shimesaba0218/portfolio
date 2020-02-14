import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        textAlign: "center",
        backgroundColor: '#f5f5f5',
        position: "fixed",
        bottom: 0,
    }
});

export default function Copyright(){
    const classes = useStyles();
    return(
        <Container maxWidth='false' className={classes.text}>
            <Typography variant='h6'>Icon by @hsm_hx.</Typography>
            <Typography variant='h6'>Copyright © 2020 shimesaba0218.</Typography>
        </Container>
    )
}
