import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ContactDetails = () => {
    const {id}=useParams();
    const [contact,setContact]=useState(null);

    useEffect(()=>{
        axios
            .get(`http://localhost:4000/api/contacts/${id}`)
            .then((response)=>setContact(response.data))
            .catch((error)=>console.error('error fetching contact details',error));
    },[id]);

  return (
    <div>
      <h2>{contact.name}</h2>
      <div>
        <p>Phone:{contact.phone}</p>
        <p>Email:{contact.email}</p>
      </div>
    </div>
  )
}

export default ContactDetails
