const express = require('express')
const router = express.Router();
const cardController = require('../controller/Card-Controller')




router.get('/', cardController.getAllCards);
router.post('/', cardController.addCards);
router.get('/:id', cardController.getById);
router.put('/:id', cardController.updateCards);
router.delete('/:id', cardController.deleteCards);

module.exports=router;