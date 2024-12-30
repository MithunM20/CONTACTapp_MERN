import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Navbar from './NavBar';

const ContactDashboard = () => {
    const[contacts,setContacts]=useState([]);
    const [menu, setMenu] = useState("all-contacts");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    const addContact=async(contact)=>{
      try {
        const response=await axios.post('http://localhost:4000/api/contacts',contact);
        setContacts([...contacts,response.data]);
      } catch (error) {
        console.error('Error adding contact',error);
      }
    };

    const deleteContact = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        setContacts(contacts.filter((c) => c._id !== id));
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    };

  return (
    <div>
      <div>
        <Navbar setMenu={setMenu} setSearchTerm={setSearchTerm}/>
        <h1>All Contacts</h1>
        {menu === "all-contacts" && <ContactList contacts={filteredContacts} deleteContact={deleteContact} />}
        {menu === "add-contact" && <ContactForm addContact={addContact} />}
        
      </div>
    </div>
  )
}

export default ContactDashboard
