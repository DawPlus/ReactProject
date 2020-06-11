import React from 'react';
import Page from "./router";
function App() {
/*
  useEffect(()=>{  
      fetch('http://localhost:3001/api')
          .then(res=>res.json())
          .then(data=>console.log(data.username));
  
  },[])
*/
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
