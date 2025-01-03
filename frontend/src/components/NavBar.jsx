import React,{useState} from "react";
import '../Navbar.css'
import { Link } from "react-router-dom";
import phone from '../assets/phone.png'

const Navbar=({setSearchTerm,setMenu})=>{
  const [menu,setActiveMenu]=useState("all-contacts");

  const handleMenuClick=(menuItem)=>{
    setActiveMenu(menuItem);
  };

  const handleSearch=(e)=>{
    setSearchTerm(e.target.value);
  };

  return(
    <div className="navbar">
      <div>
        <img src={phone} alt="" />
      </div>
      <ul className="navbar-menu">
        <li onClick={()=>handleMenuClick("all-contacts")}className={menu==="all-contacts" ? "active" : ""}>
          <Link to="/">All Contacts</Link>
        </li>

        <li onClick={()=>handleMenuClick("add-contact")}className={menu==="add-contact" ? "active" : ""}>
          <Link to="/addContact">Create Contact</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <input type="text" placeholder="Search Contacts" onChange={handleSearch} className="navbar-search-input" />
      </div>
    </div>
  )
}

export default Navbar;