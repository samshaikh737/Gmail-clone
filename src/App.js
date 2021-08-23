import "./App.css"
import React from 'react';
import { Counter } from './features/counter/Counter';

//router

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-body" >
          <Sidebar />

          <Switch>
            <Route path="/mail"  exact >
              <Mail />
            </Route>
            <Route path="/" exact >
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
