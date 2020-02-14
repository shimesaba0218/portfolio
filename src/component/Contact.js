import React,{Component} from 'react';
import GitHub from '../images/GitHub-Mark-32px.png';
import Kyash from '../images/Kyash_logo_blue.png';
import Twitter from '../images/Twitter_Logo_Blue.svg';
import Amazon from '../images/amazon-brands.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    image: {
        width: 30,
        height: 30
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

class Contact extends Component{
    render(){
        return(
            <Container>
                <Typography>Contact</Typography>
                <Grid container>
                    <Grid item>
                        <LinkButton url="https://github.com/shimesaba0218" name={GitHub}/>
                        <LinkButton url="https://twitter.com/shimesaba0218" name={Twitter}/>
                    </Grid>
                </Grid>
                <Typography>Donate</Typography>
                <Grid container>
                    <Grid item>
                    <LinkButton url="https://kyash.me/payments/2LMSjkIiQcekeYt69AUNkSNTdtcc" name={Kyash}/>
                    <LinkButton url="https://www.amazon.jp/hz/wishlist/ls/15CEB9F5WWJSI?ref_=wl_share" name={Amazon}/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Contact;
