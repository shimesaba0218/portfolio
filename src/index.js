import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NaviBar from './component/NaviBar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Copyright from './component/Copyright';
import './index.css';
// import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
    <BrowserRouter>
        <NaviBar />
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/contact' component = {Contact}/>
        <Copyright />
    </BrowserRouter>
    , document.getElementById('root')
);
