const bcrypt = require('bcrypt')
// const RegisterModel = require('../models/registerModel')
const app = express()

const registerController = (req, res) => {
    app.post("/register", async (req, res) => {
        const { email, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 6)

        // Save user to DB
        try {
            await User.create({ email: email, password: hashedPassword })
        } catch (err) {
            return res.status(400).json({ 
                message: 'This account already exists'
            })
        }

        res.status(201).json({
            message: `The account has been created!`
        })
    })
}

module.exports = registerController;