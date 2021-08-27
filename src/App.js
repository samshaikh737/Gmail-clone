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
import Login from "./components/Login";

//my own redux
import { useStateValue } from "./MyRedux/Provider";

import { auth } from "./firebaseConfig";

function App() {

  const [data, updateData] = useStateValue();

  const checkUserLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        updateData({
          "type": "update_user",
          'payload': {
            'userName': user?.displayName,
            "email": user?.email,
            "photo": user?.photoURL
          }
        })
      }
    })
};

React.useEffect(() => {
  checkUserLogin();
}, [])

return (
  <Router>
    <div className="App">
      <Switch>
        {!data.user ? <Login /> : (
          <>
            <Header />

            <div className="app-body" >
              <Sidebar />

              <Route path="/mail" exact >
                <Mail />
              </Route>

              <Route path="/" exact >
                <EmailList />
              </Route>

            </div>

            {data.showSendMail && <SendMail />}
          </>
        )}
      </Switch>
    </div>
  </Router>
);
}

export default App;
