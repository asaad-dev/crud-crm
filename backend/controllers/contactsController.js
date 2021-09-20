const Contacts = require('../models/contactsModel')

// Read
const getAllContacts = (req, res) => {
    reg.json({
        status: 'OK',
        data: contacts
    })
}

// Create 
const addNewContact = (req, res) => {
    const newContact = req.body
    contacts.push(newContact)

    res.status(201).json({
        message: `A new contact successfully added with email: ${email}`
    })
}

// Search contact by name
const getContactByName = (req, res) => {
    const params = req.params.name

    res.status(200).json({ params })
}

// Update
const updateContact = (req, res) => {
}

module.exports = {
    getAllContacts: getAllContacts,
    addNewContact: addNewContact,
    getContactByName: getContactByName,
    updateContact: updateContact
}