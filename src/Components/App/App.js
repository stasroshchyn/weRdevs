import React from 'react';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/aboutus" component={AboutUs}/>
            </div>
        </Router>    
    )
}

export default App;
