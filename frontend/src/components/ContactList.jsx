import React from "react";
import '../ContactList.css'

const ContactList=({contacts,deleteContact,onEdit})=>{
  return(
    <div>
      <h1>All Contacts</h1>
      {contacts.map((contact)=>(
        <div key={contact._id} className="contact-card">
          <h2>{contact.name}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <button onClick={()=>deleteContact(contact._id)}>Delete</button>
          <button onClick={()=>onEdit(contact)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;