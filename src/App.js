import React from 'react'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './app.css'
function App() {
  const user = false;
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/register'>
            {user ? <Home /> : <Register />}
        </Route>
        <Route path='/login'>
            {user ? <Home /> : <Login />}
        </Route>
        <Route path='/post/:postId'>
            <Single />
        </Route>
        <Route path='/write'>
           {user ? <Write /> : <Register />}
        </Route>
        <Route path='/settings'>
            {user ? <Settings /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
