import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import LogIn from "./Components/LogIn";
import Signup from "./Components/SignUp";
import NotesPage from "./Components/NotesPage";


class App extends Component {
    render() {
        return (
            <div>
                {/*<LogIn/>*/}
                <Signup/>
                <div className="grid_one">
                    <Header/>
                    {/*<NotesPage/>*/}
                </div>
            </div>
        )
    }
};

export default App;
