const express = require('express')
const router = express.Router()
const FAQsCotroller = require("../controller/FAQ-Controller")

router.get('/', FAQsCotroller.getAllFAQs);
router.post('/', FAQsCotroller.addFAQs);
router.get('/:id', FAQsCotroller.getById);
router.put('/:id', FAQsCotroller.updateFAQs);
router.delete('/:id', FAQsCotroller.deleteFAQs);

module.exports=router;