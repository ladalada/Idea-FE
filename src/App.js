import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404'
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";
import SignUpContainer from './Containers/SignUpContainer.js';
import LogInContainer from "./Containers/LogInContainer.js";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="grid_one">
                    <Header/>
                </div>
                <Switch>
                    <Route path="/login" component={LogInContainer}/>
                    <Route path="/signup" component={SignUpContainer}/>
                    <Route path="/notes" component={NotesPage}/>
                    <Route path="/notes/:id" component={Page404}/>
                    <Route path="/" component={Page404}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
