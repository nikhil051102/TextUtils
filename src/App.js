import "./App.css";
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"; 
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   Switch} 
//   from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>
  {
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode has been Enabled", "success")
        document.title = "TextUtils - Dark Mode";
        setInterval(() => {
          document.title = "Install TextUtils App on your Device"
        }, 1000);
        setInterval(() => {
          document.title = "Click Here"
        }, 150);
      }
      else
      { 
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been Enabled", "success")
        document.title = "TextUtils - Light Mode";
      }
  }

  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>    {/* We can pass String, Object, Link  */}
        <Alert alert={alert} />
        <div className="container">
              {/* <Switch>
                  <Route exact path="/about">
                    <About/>
                  </Route>
                  <Route exact path="/"> */}
                    <TextForm showAlert={showAlert} heading = "Enter the Text to Analyse" mode={mode}/>
                  {/* </Route>
              </Switch> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
