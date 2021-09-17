const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

const registerProtector = () => {
    function protect(req, res, next) {
        try {
            const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
            req.cookies.jwtData = data;
            next();
        } catch (err) {
            return res.status(401).json({
                message: `Your token is not valid`
            })
        }
    }

    // Protéger les routes et vérifié l'autorisation
    app.get('/register', protect, async (req, res) => {
        res.json({
            message: `You are authorized`
        })
    })
}

module.exports = registerProtector;