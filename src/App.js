import React, { Component } from 'react';
import './App.css';
import Note from './Components/Note'



class App extends Component {

  render() {
    return (
      <div className="App">
          <Note title='First Note' text='траляляля'/>

      </div>
    );
  }
}

export default App;
