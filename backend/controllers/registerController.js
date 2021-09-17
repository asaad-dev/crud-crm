const bcrypt = require('bcrypt')

const validateRegisterInput = (req, res) => {
    app.post( async (req, res) => {
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

module.exports = validateRegisterInput;