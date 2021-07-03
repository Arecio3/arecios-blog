import React from 'react'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
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
        <Route path='/contact'>
            {user ? <Contact /> : <Register />}
        </Route>
        <Route path='/about'>
            {user ? <About /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
