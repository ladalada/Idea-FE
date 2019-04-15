import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";

class App extends Component {
    render() {
        return (
            <div>
                <div className="grid_one">
                    <Header/>
                    <NotesPage/>
                </div>
            </div>
        )
    }
};

export default App;
