import React from "react";
import { Link } from "react-router-dom";
import '../ContactList.css';
import deleteIcon from '../assets/deleteIcon.png';
import edit from '../assets/edit.png';

const ContactList=({contacts,deleteContact,onEdit})=>{
  return(
    <div className="bg">
      {contacts.map((contact)=>(
        <div key={contact._id} className="contact-card">
          <h2>
            <Link to={`/contacts/${contact._id}`}>{contact.name}</Link>
          </h2>
          <div className="buttons">
            <button onClick={()=>deleteContact(contact._id)}><img src={deleteIcon} alt="delete"/></button>
            <button onClick={()=>onEdit(contact)}><img src={edit} alt="edit"/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;