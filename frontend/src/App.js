import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ContactDashboard from './components/ContactDashboard';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
// import Navbar from './components/NavBar';

function App() {
  return (
    <div className='container'>
      <Router>
      <div className='App'>
          
          <Routes>
            <Route path='/' element={<ContactDashboard/>}/>
            <Route path='/addContact' element={<ContactForm/>}/>
            {/* <Route path='/contacts/:id' element={<ContactDetails/>}/> */}
          </Routes>
          
      </div>
     </Router>
    </div>
  );
}

export default App;
