import React , {useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./test.js"
function App() {

  useEffect(()=>{  
      fetch('http://localhost:3001/api')
          .then(res=>res.json())
          .then(data=>console.log(data.username));
  
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test/>
      </header>
    </div>
  );
}

export default App;
