import React from 'react'
import '../ContactList.css'
import { Link } from 'react-router-dom';

const ContactList = ({contacts,deleteContact}) => {
    return (
        <div>
            {contacts.map((contact)=>(
            <div key={contact._id} className='contact-card'>
                <h2>{contact.name}</h2>
                <p>Phone:{contact.phone}</p>
                <p>Email:{contact.email}</p>
                <Link to={`/contacts/${contact._id}`}>Details</Link>
                <div className='buttons'>
                    <button onClick={()=>deleteContact(contact._id)}>Delete</button>
                </div>
            </div>
        ))}
        </div>
    );
}

export default ContactList
