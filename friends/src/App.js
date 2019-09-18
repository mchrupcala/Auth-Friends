import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import background from './images/duy-pham-Cecb0_8Hx-o-unsplash.jpg'
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import { Z_FIXED } from 'zlib';

// console.image(background);

let styles = {
    backgroundImage: `url(${background})`,
    height: '100%',
    width: '100%',
    // background: 'red',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    // overflow: 'hidden',
}

function App() {
  return (
    <Router>
    <div className="App" style={styles} >
      <div className="navbar">
          <ul>
            <Link to="/login">LogIn</Link>
            <Link to='/friendslist'>Friends List</Link>
          </ul>
          <form>
            <input className="searchbar" type="text" placeholder="Search..." />
          </form>
      </div>
      
      <h1>Friendos</h1>

      <Route path="/login" component={Login} />
      <PrivateRoute path="/friendslist" component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
