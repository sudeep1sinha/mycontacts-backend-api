
const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel")
//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async(req , res) => {
    res.status(200).json({message:"Get all contacts"});

});

//@desc Create new contacts
//@route Get /api/contacts
//@access public
const createContact = asyncHandler(async(req , res) =>{
    console.log("the request body is:",req.body);
    const{name , email , phone}=req.body;
    if(!name || !email || !phone){
        throw new Error("all the fields are mandatory !");
    }
    res.status(201).json({message:"Create contact"});

});

//@desc Get contact
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req , res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});

});

//@desc update contact
//@route Get /api/contacts/:id
//@access public
const updateContact =asyncHandler(async (req , res) =>{
    res.status(200).json({message:`update contact for ${req.params.id}`});

});


//@desc delete contact
//@route Get /api/contacts
//@access public
const deleteContact =asyncHandler (async(req , res) =>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});

});

module.exports = {
    getContacts,
    createContact ,
    getContact,
    updateContact,
    deleteContact,
 };