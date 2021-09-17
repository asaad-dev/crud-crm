const express = require('express')
// Import config.env
const dotenv = require('dotenv')
dotenv.config({
    path: "./config.env"
});
// Import Routers
const registerRouter = require('./routers/registerRouter')
// const loginRouter = require('./routers/loginRouter')
// const contactsRouter = require('./routers/contactsRouter')
// Import Middlewares
const registerProtector = require('./middlewares/registerProtector');
// const loginProtector = require('./middlewares/loginProtector');
// const contactsProtector = require('./middlewares/contactsProtector');

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cookieParser())

// Connexion à MongoDB
mongoose   
    .connect(process.env.DB, {
    useNewUrlParser: true,
    })
    .then(() => {
    console.log("Connected to MongoDB !");
    });

// Routers
app.use('/register', registerRouter);
// app.use(loginRouter)
// app.use(contactsRouter)

// Middleware Protaction
app.use(registerProtector)
// app.use(loginProtector)
// app.use(contactsProtector)

// Run server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))
