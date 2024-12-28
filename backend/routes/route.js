const express=require('express');
const bodyparser=require('body-parser');

const router=express.Router();
const Contacts=require('../models/contact');

router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());


//get all contacts
router.get('/contacts',async(req,res)=>{
    try {
        const contacts=await Contacts.find();
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

//get a single contact by id
router.get('/contacts/:id',async(req,res)=>{            
    const contact=await Contacts.findById(req.params.id);
    try{
        res.json(contact);
    }catch(error){
        res.status(500).json({message:error.message})
    }
 })

//post new contact
router.post('/contacts',async(req,res)=>{
    const contact=new Contacts({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
    });

    try {
        const newContact=await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

//put.....to update existing contact using id
router.put('/contacts/:id',async(req,res)=>{
    try {
        const updatedContact=await Contacts.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

//delete....to delete contact using id
router.delete('/contacts/:id',async(req,res)=>{
    try {
        await Contacts.findByIdAndDelete(req.params.id);
        res.json({message:'contact deleted'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


module.exports=router;
