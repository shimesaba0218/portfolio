import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    content: {
        textAlign: "center",
        backgroundColor: '#f5f5f5',
        padding: 10
    },
    text: {
        fontSize: "80%"
    }
});

export default function Copyright(){
    const classes = useStyles();
    return(
        <Container maxWidth='false' className={classes.content}>
            <Typography className={classes.text}>Icon by @hsm_hx.</Typography>
            <Typography className={classes.text}>Copyright © 2020 shimesaba0218.</Typography>
        </Container>
    )
}
