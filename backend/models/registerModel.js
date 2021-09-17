const mongoose = require('mongoose')

// Create Register Schema
const RegisterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

})

const Register = mongoose.model('Register', RegisterSchema)

module.exports = Register;