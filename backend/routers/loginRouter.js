const express = require('express')
const router = express.Router()

// Import Login Controller
const loginController = require('../controllers/loginController')

// Routes
router.get('/login', loginController.validateLoginInput)

module.exports = router;