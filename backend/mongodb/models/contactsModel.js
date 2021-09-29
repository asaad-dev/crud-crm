const mongoose = require('mongoose')

// Create Contacts Schema
const ContactsSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 200,
    },
    category: Number,
})

const Contacts = mongoose.model('Contacts', ContactsSchema)

module.exports = Contacts;