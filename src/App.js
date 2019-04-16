import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
      <Router>
          <div>
              <Route path="/" component={Page404} />
              <Route path="/login" component={Page404} />
              <Route path="/signup" component={Page404} />
              <Route path="/notes" component={Page404} />
              <Route path="/notes/:id" component={Page404} />
          </div>
      </Router>
  );
}

export default App;