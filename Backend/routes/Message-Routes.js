const express = require('express')
const router = express.Router();
const messagecontroller = require('../controller/Message-Controller')

router.post('/', messagecontroller.addMessage);
router.get('/:id', messagecontroller.getById);
router.get('/', messagecontroller.getAllMessage);
router.delete('/:id', messagecontroller.deleteMessage);


module.exports=router;