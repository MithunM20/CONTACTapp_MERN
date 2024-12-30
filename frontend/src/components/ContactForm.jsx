import React,{useState} from 'react'
import Navbar from './NavBar';

const ContactForm = ({addContact}) => {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addContact({name,phone,email});
        setName('');
        setPhone('');
        setEmail('');
    };

    const [setMenu] = useState("all-contacts");
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar setMenu={setMenu} setSearchTerm={setSearchTerm}/>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name'  value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="text" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  )
}

export default ContactForm
