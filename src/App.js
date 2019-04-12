import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./Components/Content/content";
import Filter from "./Components/Filter/filter";
import Header from "./Components/Header/header";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="grid">
                    <Header/>
                    <Content/>
                    <Filter/>
                </div>
            </div>
        )
    }
};

export default App;
