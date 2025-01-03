import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import '../ContactForm.css';

const ContactForm=({addOrUpdateContact,editContact})=>{
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    if(editContact){
      setName(editContact.name);
      setPhone(editContact.phone);
      setEmail(editContact.email);
    }
  },[editContact]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    addOrUpdateContact({name,phone,email});
    setName('');
    setPhone('');
    setEmail('');
    navigate('/');
  };

  return(
    <div>
      <Navbar/>
      <div className="contact-form-container">
        <h2>{editContact? 'EDIT CONTACT' : 'CREATE CONTACT'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />

          <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>

          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

          <button type="submit">
            {editContact ? 'Update Contact' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );

};

export default ContactForm;