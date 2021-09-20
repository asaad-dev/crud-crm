const express = require('express')
const router = express.Router()

// Import Register Controller
const registerRouter = require('../controllers/registerController')

// Routes
router.post('/', registerRouter.registerController)

module.exports = router;