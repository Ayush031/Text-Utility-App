import './App.css';
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import About1 from "./Components/About1";
import Alert from "./Components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [modeBtnTxt, setModeBtnTxt] = useState("Enable Dark Mode");
  const [modeGreenBtnTxt, setModeGreenBtnTxt] = useState("Enable Green Mode");
  const [modePinkBtnTxt, setModePinkBtnTxt] = useState("Enable Pink Mode");
  const [btnColor, setBtnColor] = useState('#2b2f32');
  const [btnTxtColor, setBtnTxtColor] = useState('white');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const toggleMode = () => {
    if (mode === 'light' || mode === 'green' || mode === 'pink') {
      setMode('dark');
      setModeBtnTxt("Disable Dark Mode");
      setModePinkBtnTxt("Enable Pink Mode");
      setModeGreenBtnTxt("Enable Green Mode");
      document.body.style.backgroundColor = '#055160';
      document.body.style.color = 'white';
      setBtnColor('#055160');
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setBtnColor('#2b2f32');
      setBtnTxtColor('white');
      // document.title = "TextUtlis"
      showAlert("Light Mode Enabled", "success");
    }
  }
  const toggleModePink = () => {
    if (mode === 'dark' || mode === 'green' || mode === 'light') {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = '#6610f2';
      setMode('pink');
      setModeGreenBtnTxt("Enable Green Mode");
      setModeBtnTxt("Enable Dark Mode");
      setModePinkBtnTxt("Disable Pink Mode");
      setBtnColor('#6610f2');
      showAlert("Pink Mode Enabled", "success");

    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMode('light');
      setBtnColor('#2b2f32');
      setBtnTxtColor('white');
      setModePinkBtnTxt("Enable Pink Mode");
      showAlert("Light Mode Enabled", "success");
    }
  }
  const toggleModeGreen = () => {
    if (mode === 'dark' || mode === 'pink' || mode === 'light') {
      setMode('green');
      setModeGreenBtnTxt("Disable Green Mode");
      setModePinkBtnTxt("Enable Pink Mode");
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = '#20c997';
      document.body.style.color = 'black';
      setBtnColor('#20c997');
      showAlert("Green Mode Enabled", "success");
    }
    else {
      setMode('light');
      setModeGreenBtnTxt("Enable Green Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
      setBtnColor('#2b2f32');
      setBtnTxtColor('white');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} toggleModePink={toggleModePink} modeBtnTxt={modeBtnTxt} modeGreenBtnTxt={modeGreenBtnTxt} modePinkBtnTxt={modePinkBtnTxt} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/About1" element={<About1 mode={mode} toggleMode={toggleMode} />} />
            <Route path="/" element={<TextForm heading="Enter Text Below: " mode={mode} toggleMode={toggleMode} showAlert={showAlert} btnColor={btnColor} btnTxtColor={btnTxtColor} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
