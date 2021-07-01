import React from 'react'
import NavBar from './components/navBar/NavBar' 
import Home from './pages/home/Home'
import './app.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
