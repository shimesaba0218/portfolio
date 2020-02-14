import React from 'react';
import GitHub from '../images/GitHub.svg';
import Kyash from '../images/Kyash.svg';
import Twitter from '../images/Twitter.svg';
import Amazon from '../images/Amazon.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    image: {
        width: 50,
        height: 50
    },
    item: {
        textAlign: 'center'
    },
    content: {
        padding: 50
    }
});

function LinkButton(props){
    const classes = useStyles();
    return(
        <a href = {props.url} target="_blank" rel="noopener noreferrer">
            <img className={classes.image} src = {props.name} alt=""/>
        </a>
    )
}

export default function Contact(){
    const classes = useStyles();
    return(
        <Container className={classes.content} maxWidth="sm">
            <Grid container spacing={3} justify="center">
                <Grid item className={classes.item} xs={12}>
                    <Typography variant="h5">Contact & Donation</Typography>
                </Grid>
                <Grid item className={classes.item} md={3}>
                    <LinkButton url="https://github.com/shimesaba0218" name={GitHub}/>
                </Grid>
                <Grid item className={classes.item} md={3}>
                    <LinkButton url="https://twitter.com/shimesaba0218" name={Twitter}/>
                </Grid>
                <Grid item className={classes.item} md={3}>
                    <LinkButton url="https://kyash.me/payments/2LMSjkIiQcekeYt69AUNkSNTdtcc" name={Kyash}/>
                </Grid>
                <Grid item className={classes.item} md={3}>
                    <LinkButton url="https://www.amazon.jp/hz/wishlist/ls/15CEB9F5WWJSI?ref_=wl_share" name={Amazon}/>
                </Grid>
            </Grid>
        </Container>
    )
}
