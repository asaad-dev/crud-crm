const contacts = [
    {
        "_id": ObjectId("517eb961c555361604ec9a4f"),
        "userId": ObjectId("60d1cfe9a22a623d4b8b2a58"), // identique à l'utilisateur du dessus
        "name": "John Doe",
        "email": "john-doe@gmail.com",
        "description": "Good client, comes often. A bit picky with prices though.",
        "category": "3"
    }
]

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