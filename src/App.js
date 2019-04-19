import React, { Component } from 'react';
import './App.css';
import FullNoteContainer from './Containers/FullNoteContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404'
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";

class App extends Component {
    render() {
        alert("")
        return (
            <Router>
                <div className="grid_one">
                    <Header/>
                </div>
                <Switch>
                    <Route path="/login" component={Page404}/>
                    <Route path="/signup" component={Page404}/>
                    <Route path="/notes" component={NotesPage}/>
                    <Route path="/note/:id" component={FullNoteContainer}/>
                    <Route path="/" component={Page404}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
