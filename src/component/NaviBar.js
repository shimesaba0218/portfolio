import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class NaviBar extends Component{
    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/hobby'>Hobby</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}

export default NaviBar;
