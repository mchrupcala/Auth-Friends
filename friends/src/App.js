import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

      <h2>App Page</h2>
        <Link to="/login">LogIn</Link>
        <Link to='/friendslist'>Friends List</Link>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friendslist" component={FriendsList} />

    </div>
    </Router>
  );
}

export default App;
