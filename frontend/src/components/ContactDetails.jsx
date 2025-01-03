import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from "./NavBar";
import '../ContactDetails.css'

const ContactDetails=()=>{
  const {id}=useParams();
  const [contact,setContact]=useState(null);

  useEffect(()=>{
    fetchContactDetails();
  });

  const fetchContactDetails=async()=>{
    try {
      const response=await axios.get(`https://contactapp-mern-lpzw.onrender.com`);
      setContact(response.data);
    } catch (error) {
      console.error('Error fetching contact details',error);
    }
  };

  if(!contact){
    return <p>loading contact details</p>
  }

  return(
    <div>
      <Navbar/>
      <div className="details">
      <h2>Contact Details</h2>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Email:</strong> {contact.email}</p>
    </div>
    </div>
  )
}

export default ContactDetails;