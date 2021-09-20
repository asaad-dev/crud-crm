const express = require('express')
const router = express.Router()
const usersRouter = require('../controllers/usersController')

router.get('/', usersRouter.usersController)

module.exports = router;