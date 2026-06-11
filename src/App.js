
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)
   const showAlert = (type , message) =>{
     setAlert({
      msg : message ,
      type : type 
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
   }

   const toggleMode = () =>{
     if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor = '#032b5c';
        showAlert("Dark Mode Enabled", "Success");
      }
      else{
      setMode( 'light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Success");
      }
}
return (
  < >
{/* <Navbar title = "TextUtils" about="About TextUtils"/> */}

{/* <Alert alert={alert}/> */}
      <Router>
  <Navbar
    title="TextUtils"
    mode={mode}
    toggleMode={toggleMode}
  />

  <Alert alert={alert} />

  <div className="container my-3">
    <Routes>
  <Route
    path="/"
    element={
   <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
    }
  />

  <Route
    path="/about"
    element={<About mode={mode} />}
  />
</Routes>
  
  </div>
</Router>
  </>
  )
}
export default App;

Navbar.propTypes = {
  title : PropTypes.string,
  about : PropTypes.string 

}
