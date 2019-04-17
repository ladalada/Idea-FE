import React, { Component } from 'react';
import './App.css';
import Note from './Components/Note'
import FullNoteContainer from '/./FullNoteContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
          <Note title='First Note' text='траляляля'/>
          <FullNoteContainer/>
      </div>
    );
  }
}

export default App;
