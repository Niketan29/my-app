import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// adding a change in the function 
function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = 'rgb(16, 40, 94)';
      showAlert("Enabled to Dark Mode", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled to Light Mode", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextManupalitor" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <div className="container my-1">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />

            <Route exact path="/" element={<Textbox heading="Try TextManipulator - Word Counter, Character Counter" mode={mode} showAlert={showAlert} />} />

          </Routes>
          {/* <Textbox heading="Enter text to analyse it" mode={mode} showAlert={showAlert} /> */}

        </div>
      </Router>

    </>
  );
}

export default App;
