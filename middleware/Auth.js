const Dairy = require('../models/Dairy')
const Admin = require('../models/Admin')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const jwtKey = "dh@milksystem-8509"
const jwtExpirySeconds = 259200 //86400 second for 1 day..Here it is set for 3 days

const signIn = (req, res) => {
    const { userName, password } = req.body
    // console.log(req.body)
    Dairy.findAll({
        where: {
            userName: userName,
            password: md5(password)
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
        .then(Dairy => {
            if (Dairy.length > 0) {
                const token = jwt.sign({ userName }, jwtKey, {
                    algorithm: "HS256",
                    expiresIn: jwtExpirySeconds,
                })
                var data = {
                    status: true,
                    message: "Login successfully",
                    _token: token,
                    data: Dairy
                }
                return res.status(200).json(data);
            }
            else {
                var data = {
                    status: false,
                    message: "Please Enter valid Username or Password",
                };
                return res.status(401).json(data);
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

const welcome = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) {
        var data = {
            status: false,
            message: "You need to login first...",
        };
        return res.status(500).json(data);
    } else {
        if (token.startsWith("Bearer ")) {
            var payload;
            try {
                token = token.split(" ")[1];
                payload = jwt.verify(token, jwtKey);

                next();
            } catch (e) {
                if (e instanceof jwt.JsonWebTokenError) {
                    var data = {
                        status: false,
                        message: "Login Again...",
                    };
                    return res.status(500).json(data);
                }
                var data = {
                    status: false,
                    message: "Login Again...",
                };
                return res.status(500).json(data);
            }
        }
    }
}


const signInAdmin = (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
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
                        res.render('index', { op });
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
module.exports = {
    signInAdmin,
    signIn,
    welcome
}