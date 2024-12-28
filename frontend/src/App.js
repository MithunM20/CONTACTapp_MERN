import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ContactDashboard from './components/ContactDashboard';
import ContactDetails from './components/ContactDetails';


function App() {
  return (
    <div className='container'>
      <Router>
      <div className='App'>
          <h1>Contacts</h1>
          <Routes>
            <Route path='/' element={<ContactDashboard/>}/>
            <Route path='/contacts/:id' element={<ContactDetails/>}/>
          </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
