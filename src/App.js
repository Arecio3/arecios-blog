import React from 'react'
import NavBar from './components/navBar/NavBar' 
// import Home from './pages/home/Home'
// import Single from './pages/single/Single'
import Write from './pages/write/Write';
import './app.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Write />
    </div>
  );
}

export default App;
