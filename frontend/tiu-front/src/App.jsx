import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata((data)=> ([...data, "123"]))
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and flask</h1>

      </header>
    </div>
  );
}

export default App;