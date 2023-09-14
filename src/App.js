// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';
import { useState } from 'react';
import Alert from './MyComponents/Alert';
import ContactForm from './MyComponents/ContactForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [Mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  function togglemd(){
    if(Mode==='light'){
      setMode('dark');
      document.body.style.background='grey';
      document.body.style.color='white';
      showAlert('Dark mode has been enabled','success');
      
      
    }
    else{

      setMode('light');
      document.body.style.background='white';
        document.body.style.color='black';
      showAlert('Light mode has been enabled','success');

    }
  }
  return (
    <>
<Router>
<Header title='Text Utilities' searchbar={false} Mode={Mode} togglemd={togglemd}/>
         {/* <Todos todos={todos} onDelete={onDelete}/> */}
         
         <Alert alert={alert}/>
         <div className="container my-3">
         <Routes>
          <Route path="/ContactForm" element={<ContactForm Mode={Mode} showAlert={showAlert}/>}>
          
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter your Text' Mode={Mode}/>}>
         
            
          </Route>
        </Routes>
         </div>
         </Router>

    </>
  );
}

export default App;
