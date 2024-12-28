import React from 'react'
import '../ContactList.css'
import { Link } from 'react-router-dom';

const ContactList = ({contacts,deleteContact}) => {
    return (
        <div>
            {contacts.map((contact)=>(
            <div key={contact._id} className='contact-card'>
                <h2>{contact.name}</h2>
                <Link to={`/contacts/${contact._id}`}>Details</Link>
                
            </div>
        ))}
        </div>
    );
}

export default ContactList
