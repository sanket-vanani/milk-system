//imporing required packages
const { Sequelize } = require('sequelize')
const sequelize = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

//importig middleware
const { signIn, welcome } = require('./middleware/Auth')

//importing router
const dairyRoute = require('./routes/DairyRoute')
const customerRoute = require('./routes/CustomerRoute')

//using middleware
app.use(bodyParser.json())
app.use(cors());

//some constant declaration
const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.DB_HOST

//importing models
const Dairy = require('./models/Dairy')
const Customer = require('./models/Customer')
const MilkCollection = require('./models/MilkCollection')
const LocalSale = require('./models/LocalSale')

// model synchronization
// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Model updated")
//         //server running
//         app.listen(PORT, (err) => {
//             if (err) throw err;
//             console.log(`Server running on http://${HOSTNAME}:${PORT}`)
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     });

//Signin 
app.use('/signin', signIn)

//Dairy operation
app.use('/dairy', dairyRoute)

//Customer operation
app.use('/customer', customerRoute)

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on http://${HOSTNAME}:${PORT}`)
})