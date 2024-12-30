import React, { useState } from 'react'
import '../Navbar.css'
import {Link} from 'react-router-dom'
// import { assets } from '../../assets/assets'

const Navbar = ({setSearchTerm,setMenu}) => {
    const [menu, setActiveMenu] = useState("all-contacts");

    const handleMenuClick=(menuItem)=>{
        setActiveMenu(menuItem);
        setMenu(menuItem);
    }

    return (
        <div className='navbar'>
            <ul className="navbar-menu">
        <li onClick={() => handleMenuClick("all-contacts")}className={menu === "all-contacts" ? "active" : ""}>
        <Link to="/">All Contacts</Link>
        </li>
        <li onClick={() => handleMenuClick("add-contact")}className={menu === "add-contact" ? "active" : ""}>
        <Link to="/addContact">Add Contact</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search contacts..."
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="navbar-search-input"
        />
        <button>Sign in</button>
      </div>
    </div>
    )
}

export default Navbar