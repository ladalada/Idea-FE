import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404';
import Start from './Components/Start';
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";
import LogInContainer from "./Containers/LogInContainer.js";
import SignUpContainer from './Containers/SignUpContainer.js';
import FullNoteContainer from './Containers/FullNoteContainer';

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
                    <Route path="/notes/:id" component={FullNoteContainer}/>
                    <Route path="/" component={Start}/>
                </Switch>
            </Router>
        );
    }
}

export default App;