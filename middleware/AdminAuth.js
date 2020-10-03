const Admin = require('../models/Admin')
const signInAdmin = (req, res) => {
    const { email, password } = req.body
    // console.log(req.body)
    Admin.findAll({
        where: {
            userName: userName,
            password: password
        }
    })
        .then(results => {
            if (results.length > 0) {
                if (password == results[0].password) {
                    const token = jwt.sign({ email }, jwtKey, {
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
    signInAdmin
}