//imporing required packages
const sequelize = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const session = require('express-session');
require('dotenv').config()
const path = require('path')

//importig middleware
const { signIn } = require('./middleware/Auth')
const { signInAdmin, welcomeAdmin, logout } = require('./middleware/AdminAuth')

//importing router
const dairyRoute = require('./routes/DairyRoute')
const customerRoute = require('./routes/CustomerRoute')
const milkCollectionRoute = require('./routes/MilkCollectionRoute')
const localSaleRoute = require('./routes/LocalSaleRoute')
const paymentRoute = require('./routes/PaymentRoute')

//using middleware

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