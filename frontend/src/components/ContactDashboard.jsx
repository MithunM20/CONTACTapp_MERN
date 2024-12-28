import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ContactList from './ContactList';


const ContactDashboard = () => {
    const[contacts,setContacts]=useState([]);

    useEffect(()=>{
        fetchContacts();
    },[]);

    const fetchContacts=async()=>{
        try {
            const response=await axios.get('http://localhost:4000/api/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:',error)
        }
    };

  return (
    <div>
      <div>
        <ContactList
            contacts={contacts}
        />
      </div>
    </div>
  )
}

export default ContactDashboard
