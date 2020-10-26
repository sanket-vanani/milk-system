//imporing required packages
const sequelize = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const session = require('express-session');
const morgan = require('morgan')
const fs = require('fs')
require('dotenv').config()
const path = require('path')
var rfs = require('rotating-file-stream')

//importig middleware
const { signIn } = require('./middleware/Auth')
const { signInAdmin, welcomeAdmin, logout } = require('./middleware/AdminAuth')

//importing router
const dairyRoute = require('./routes/DairyRoute')
const customerRoute = require('./routes/CustomerRoute')
const milkCollectionRoute = require('./routes/MilkCollectionRoute')
const localSaleRoute = require('./routes/LocalSaleRoute')
const paymentRoute = require('./routes/PaymentRoute')



// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

//using middleware
// app.use(morgan('combined', (req, res) => {
//     console.log("Request", req)
//     console.log("Response", res)
// }, { stream: accessLogStream }))

app.use(morgan(function (tokens, req, res) {
    let date = new Date()
    return [
        date.toUTCString(),
        'Method:', tokens.method(req, res),
        'URL:', tokens.url(req, res),
        'Status:', tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        'Response time:', tokens['response-time'](req, res), 'ms'
    ].join(' ')
}, { stream: accessLogStream }))

app.use(cors());
app.use(session({
    secret: "Shh, its a secret!",
    saveUninitialized: true,
    resave: true
}));




app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.use(express.static('./public'));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


//Admin Panel
app.get('/admin', (req, res) => {
    res.render('login');
})

app.get('/', welcomeAdmin, (req, res) => {
    res.render('index')
})

app.use('/admin/login', signInAdmin)

//logout
app.get('/logout', logout);

//some constant declaration
const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.DB_HOST

//importing models
const Dairy = require('./models/Dairy')
const Customer = require('./models/Customer')
const MilkCollection = require('./models/MilkCollection')
const LocalSale = require('./models/LocalSale')
const Admin = require('./models/Admin')
const Payment = require('./models/Payment')

// model synchronization
// sequelize.sync({ force: true })
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

//Milk Collection Opertaion
app.use('/milk-collection', milkCollectionRoute)

//Local Sale Operation
app.use('/local-sale', localSaleRoute)

//payment
app.use('/payment', paymentRoute)

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on http://${HOSTNAME}:${PORT}`)
})