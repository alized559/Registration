import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return(
      <Router>
        <Switch>
          <Route path='/Home' component={Home}/>
          <Route path='/Login' component={Login}/>
          <Route exact path='/' component={SignUp}/>
        </Switch>
      </Router>
    
  );
}

export default App;