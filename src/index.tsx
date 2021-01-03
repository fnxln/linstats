import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from "react-router-dom";
import NavbarElement from './componets/Navbar';
import { createBrowserHistory } from 'history';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import './index.scss'
const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <div>
                <NavbarElement />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={Sobre} />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
