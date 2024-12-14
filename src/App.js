// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextArea from './components/TextArea.js';
import Footer from './components/Footer.js';
import { useState } from 'react';
import Alert from './components/Alert.js';

function App() {
  let [mode, setMode] = useState({
    backgroundColor: 'white',
    color: "black"
  });
  let [currentMode, updateCurrentMode] = useState('Light');
  let setLightMode = () => {
    updateCurrentMode('Light')
    showAlert("success", "Light mode enabled")
    setMode({
      backgroundColor: 'white',
      color: "black"
    })
    const faviconLink = document.querySelector('link[rel="icon"]');
    faviconLink.setAttribute('href', `${process.env.PUBLIC_URL}/faviconLight.ico`);
    // State Updates are Asynchronous: When updateCurrentMode('Dark') is called, the value of currentMode isn't updated immediately. Instead, React schedules the update, and the old value is used in the faviconLink.setAttribute() call.
  }
  let setDarkMode = () => {
    updateCurrentMode('Dark')
    showAlert("success", "Dark mode enabled")
    setMode({
      backgroundColor: '#1e2021',
      color: "white"
    })
    const faviconLink = document.querySelector('link[rel="icon"]');
    faviconLink.setAttribute('href', `${process.env.PUBLIC_URL}/faviconDark.ico`);
  }
  let setYellowMode = () => {
    // console.log("Iam clickde")
    updateCurrentMode('Yellow')
    showAlert("success", "Yellow mode enabled")
    setMode({
      backgroundColor: '#fcd666',
      color: "black"
    })
    const faviconLink = document.querySelector('link[rel="icon"]');
    console.log(`%PUBLIC_URL%/favicon${currentMode}.ico`)
    faviconLink.setAttribute('href', `${process.env.PUBLIC_URL}/faviconYellow.ico`);
  }
  // let alertTypeVar = "";
  // let alertMessageVar = "";
  // // we can also create a object and pass that object as a props to alert;
  // let showAlert = (type, message) => {
  //   alertTypeVar = type;
  //   alertMessageVar = message;
  //   console.log(alertTypeVar);
  //   console.log(alertMessageVar);

  // }
  // However above code will not work since react is not watching or Alert props

  let [alert, setAlert] = useState(null)
  let showAlert = (type, message) => {
    setAlert({
      alertType: type,
      alertMessage: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" />
      {/* {alert && <Alert alertType={alert.alertType} alertMessage={alert.alertMessage} />} */}
      {/* we cannot read null in above case */}
      <Alert alert={alert} modeChoice={mode} />
      <TextArea modeChoice={mode} showAlert={showAlert} />
      <Footer modeChoice={mode} darkModeFxn={setDarkMode} lightModeFxn={setLightMode} yellowModeFxn={setYellowMode} currentMode={currentMode} />
    </>

  );
}

export default App;
