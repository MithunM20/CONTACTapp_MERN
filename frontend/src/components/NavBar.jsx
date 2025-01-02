import React,{useState} from "react";
import '../Navbar.css'
import { Link } from "react-router-dom";

const Navbar=({setSearchTerm,setMenu})=>{
  const [menu,setActiveMenu]=useState("all-contacts");

  const handleMenuClick=(menuItem)=>{
    setActiveMenu(menuItem);
  }

  return(
    <div className="navbar">
      <ul className="navbar-menu">
        <li onClick={()=>handleMenuClick("all-contacts")}className={menu==="all-contacts" ? "active" : ""}>
          <Link to="/">All Contacts</Link>
        </li>

        <li onClick={()=>handleMenuClick("add-contact")}className={menu==="add-contact" ? "active" : ""}>
          <Link to="/addContact">Add Contact</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <input type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} className="navbar-search-input" />
      </div>
    </div>
  )
}

export default Navbar;