const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')

const jwtKey = "dh@milksystem-8509"
const jwtExpirySeconds = 259200 //86400 second for 1 day..Here it is set for 3 days
const signInAdmin = (req, res) => {
    const { username, password } = req.body
    // console.log(req.body)
    Admin.findAll({
        where: {
            userName: username,
            password: password
        }
    })
        .then(results => {
            if (results.length > 0) {
                if (password == results[0].password) {
                    const token = jwt.sign({ username }, jwtKey, {
                        algorithm: "HS256",
                        expiresIn: jwtExpirySeconds,
                    })
                    // console.log(token);
                    var op = {
                        "status": true,
                        "_token": token,
                        "message": "Authenticated Successfully"
                    };
                    req.session.token = token;
                    if (req.session.token) {
                        res.redirect('/dairy/list')
                    }
                    else {
                        return res.redirect("/login");
                    }

                } else {
                    var op = {
                        status: false,
                        message: "Email or Password does not match"
                    }
                    res.render('login', { op });
                }
            } else {
                var op = {
                    status: false,
                    message: "Email does not exits"
                }
                res.render('login', { op });
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

const welcomeAdmin = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        var op = {
            status: false,
            message: "You need to login first..."
        }
        res.render('login', { op });
    }
    else {
        var payload
        try {
            payload = jwt.verify(token, jwtKey)
            next();
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                var op = {
                    status: false,
                    message: "Login Again..."
                }
                res.render('login', { op });
            }
            var op = {
                status: false,
                message: "Login Again..."
            }
            res.render('login', { op });
        }
    }
}

const logout = (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {

            }
            else {
                var op = {
                    "message": "Loggout Successfully"
                }
                res.render('login', { op })
            }
        })
    }
}
module.exports = {
    signInAdmin,
    welcomeAdmin,
    logout
}