const Message = require('../model/Message-Model')

const addMessage = async (req,res,next) => {
    const {email , message} = req.body;
    let messagess;
    try {
        messagess = new Message({
            email,
            message
        })
        await messagess.save();
    } catch (error) {
        console.log(error);
    }
    if(!messagess) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({messagess})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let messagess;
    try {
        messagess = await Message.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!messagess) {
        return res.status(404).json({message: 'No message yet...!'})
    }
    else{
        return res.status(200).json({messagess})
    }
}

const getAllMessage = async (req,res,next) => {
    let mesagess;
    try {
        mesagess = await Message.find();
    } catch (error) {
        console.log(error);
    }
    if(!mesagess) {
        return res.status(404).json({message: 'No mesage yet...!'})
    }
    else{
        return res.status(200).json({mesagess})
    }
}


const deleteMessage = async (req,res,next) => {
    const id = req.params.id;
    let messagess;
    try {
        messagess = await Message.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(error);
    }
    if(!messagess) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({messagess})
    }
}

exports.addMessage = addMessage
exports.getById = getById
exports.getAllMessage = getAllMessage
exports.deleteMessage = deleteMessage

