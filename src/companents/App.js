import React from 'react';
import Main from "./Main"
import Login from "./Login";
import Register from './Register';
import history from "../history";
import {Router, Route,Switch} from "react-router-dom";
import Profile from './Profile';

function App() {
  return (
    <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/profile" component={Profile}/>
    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
