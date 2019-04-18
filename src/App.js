import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import NotesPage from "./Components/NotesPage";
import SignUpContainer from './Containers/SignUpContainer.js';
import LogInContainer from "./Containers/LogInContainer.js";


class App extends Component {
    render() {
        return (
            <div>
                {/*<SignUpContainer/>*/}
                <LogInContainer/>
                <div className="grid_one">
                    <Header/>
                </div>
            </div>
        )
    }
};

export default App;
