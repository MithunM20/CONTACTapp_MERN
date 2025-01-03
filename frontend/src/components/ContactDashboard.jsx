import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import ContactList from "./ContactList";

const ContactDashboard=({contacts,deleteContact,onEdit,setSearchTerm})=>{

  const navigate=useNavigate();

  return(
    <div>
      <Navbar setSearchTerm={setSearchTerm}/>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        onEdit={(contact=>onEdit(contact,navigate))}
      />
    </div>
  );
};

export default ContactDashboard;