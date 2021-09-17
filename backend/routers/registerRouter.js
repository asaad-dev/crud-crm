const express = require('express')
const router = express.Router()

// Import Register Controller
const registerController = require('../controllers/registerController')

// Routes
router.post('/', registerController.validateRegisterInput)

module.exports = router;