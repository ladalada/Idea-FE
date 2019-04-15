import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/signup">SignUp</Link>
                  </li>
                  <li>
                      <Link to="/notes">Notes</Link>
                  </li>
                  <li>
                      <Link to="/notes/:id">NotesID</Link>
                  </li>
              </ul>

              <hr />

              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/notes" component={Notes} />
              <Route path="/notes/:id" component={NotesID} />
          </div>
      </Router>
  );
}

export default App;