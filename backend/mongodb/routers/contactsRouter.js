const express = require('express')
const router = express.Router()

// Import Contacts Controller
const contactsController = require('../controllers/contactsController')

// Routes
router.get('/contacts', contactsController.getAllContacts)
router.post('/contacts', contactsController.addNewContact)
router.get('/contacts/:name', contactsController.getContactByName)


module.exports = router;