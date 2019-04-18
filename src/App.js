import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404'
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";
import Start from './Components/Start'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="grid_one">
                    <Header/>
                </div>
                <Switch>
                    <Route path="/login" component={Page404}/>
                    <Route path="/signup" component={Page404}/>
                    <Route path="/notes" component={NotesPage}/>
                    <Route path="/notes/:id" component={Page404}/>
                    <Route path="/" component={Start}/>
                </Switch>
            </Router>
        );
    }
}

export default App;