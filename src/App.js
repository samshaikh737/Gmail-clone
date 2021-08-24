import "./App.css"
import React from 'react';

//router

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";

//my own redux
import { useStateValue } from "./MyRedux/Provider";

function App() {

  const [data,updateData] = useStateValue();
  
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
        { data?.showSendMail && <SendMail /> }

      </div>
    </Router>
  );
}

export default App;
