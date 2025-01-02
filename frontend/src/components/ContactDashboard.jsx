import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import ContactList from "./ContactList";

const ContactDashboard=({contacts,deleteContact,onEdit})=>{

  const navigate=useNavigate();

  return(
    <div>
      <Navbar/>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        onEdit={(contact=>onEdit(contact,navigate))}
      />
    </div>
  );
};

export default ContactDashboard;