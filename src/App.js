import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404'
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";

function App() {
    return (
        <Router>
            <Switch>
                <Header/>
                <Route path="/login" component={Page404} />
                <Route path="/signup" component={Page404} />
                <Route path="/notes" component={Page404} />
                <Route path="/notes/:id" component={Page404} />
                <Route path="/" component={Page404} />
            </Switch>
        </Router>
    );
}

export default App;
