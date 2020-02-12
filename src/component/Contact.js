import React,{Component} from 'react';
import GitHub from '../images/GitHub-Mark-32px.png';
import Kyash from '../images/Kyash_logo_blue.png';
import Twitter from '../images/Twitter_Logo_Blue.svg';
import Amazon from '../images/amazon-brands.svg';

function LinkButton(props){
    return(
        <a href = {props.url} target="_blank" rel="noopener noreferrer">
            <img src = {props.name} alt=""/>
        </a>
    )
}

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <LinkButton url="https://github.com/shimesaba0218" name={GitHub}/>
                <LinkButton url="https://twitter.com/shimesaba0218" name={Twitter}/>
                <p>Donate</p>
                <LinkButton url="https://kyash.me/payments/2LMSjkIiQcekeYt69AUNkSNTdtcc" name={Kyash}/>
                <LinkButton url="https://www.amazon.jp/hz/wishlist/ls/15CEB9F5WWJSI?ref_=wl_share" name={Amazon}/>
            </div>
        )
    }
}

export default Contact;
