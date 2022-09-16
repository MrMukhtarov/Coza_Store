const express = require('express')
const router = express.Router();
const ContactController = require('../controller/Contact-Controller')




router.get('/', ContactController.getAllContact);
router.get('/:id', ContactController.getById);
router.put('/:id', ContactController.updateContact);

module.exports=router;