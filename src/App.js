import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import NotesPage from "./Components/NotesPage";
import SignUpContainer from './Containers/SignUpContainer';


class App extends Component {
    render() {
        return (
            <div>
                <Form/>
                <div className="grid_one">
                    <Header/>
                    {/*<NotesPage/>*/}
                </div>
            </div>
        )
    }
};

export default App;
