const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Login = require('../models/loginModel')

const validateLoginInput = () => {
    app.post('/', async (req, res) => {
        const {email, password} = req.body

        // Check if user exists
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: `Invalid email or password`
            })
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({
                message: `Invalid email or password`
            })
        }

        // Create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        // Create cookie
        res.cookie('jwt', token, {httpOnly: true, secure: false })

        res.json({
            message: `Here is your cookie for subsequent requests!`
        })
    })
}

module.exports = validateLoginInput;