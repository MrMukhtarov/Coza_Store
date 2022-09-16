const Contact = require('../model/Contact-Model')

const getAllContact = async (req,res,next) => {
    let contact;
    try {
        contact = await Contact.find();
    } catch (error) {
        console.log(error);
    }
    if(!contact) {
        return res.status(404).json({message: 'No contact yet...!'})
    }
    else{
        return res.status(200).json({contact})
    }
}

const updateContact = async (req,res,next) => {
    const id = req.params.id;
    const {adress,phone,mail} = req.body;
    let contact;
    try {
        contact = await Contact.findByIdAndUpdate(id, {
            adress,
            phone,
            mail
        })
        contact= await contact.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!contact) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({contact})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let contact;
    try {
        contact = await Contact.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!contact) {
        return res.status(404).json({message: 'No contact yet...!'})
    }
    else{
        return res.status(200).json({contact})
    }
}


exports.getAllContact = getAllContact;
exports.updateContact = updateContact;
exports.getById = getById;