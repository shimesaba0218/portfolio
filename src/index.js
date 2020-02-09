import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NaviBar from './component/NaviBar';
import Home from './component/Home';
import About from './component/About';
import Hobby from './component/Hobby';
import Contact from './component/Contact';
import Copyright from './component/Copyright';

ReactDOM.render(
    <BrowserRouter>
        <NaviBar />
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/hobby' component = {Hobby}/>
        <Route exact path = '/contact' component = {Contact}/>
        <Copyright />
    </BrowserRouter>
    , document.getElementById('root')
);
