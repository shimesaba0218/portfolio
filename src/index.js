import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NaviBar from './component/NaviBar';
import About from './component/About';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Copyright from './component/Copyright';
import './index.css';

ReactDOM.render(
    <div className='wrapper'>
        <BrowserRouter>
            <NaviBar />
            <Route exact path = '/' component = {About}/>
            <Route exact path = '/skill' component = {Skill}/>
            <Route exact path = '/contact' component = {Contact}/>
        </BrowserRouter>
        <footer>
            <Copyright />
        </footer>
    </div>
    , document.getElementById('root')
);
