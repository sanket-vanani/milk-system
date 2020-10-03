const Dairy = require('../models/Dairy')
const md5 = require('md5')

const jwt = require('jsonwebtoken')

const jwtKey = "dh@milksystem-8509"
const jwtExpirySeconds = 259200 //86400 second for 1 day..Here it is set for 3 days

exports.addDairy = (req, res) => {
    var data = req.body
    const { userName } = req.body
    data.password = md5(data.password)
    Dairy.create(data)
        .then((response) => {
            console.log("Auto id ", response.id)
            const dairyid = response.id
            const token = jwt.sign({ userName }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            })
            Dairy.findAll({
                where: {
                    id: dairyid
                }
            }).then(dairy => {
                let data = {
                    status: true,
                    _token: token,
                    message: "Dairy Added",
                    result: dairy
                }
                return res.status(200).json(data);
            })
        })
        .catch((error) => {
            console.log("uniqyue error", error.errors[0].message)
            let err = {
                status: false,
                message: error.message,
                sqlMessage: error.errors[0].message
            }
            return res.status(500).json(err)
        })
}

exports.getDairyById = (req, res) => {
    const id = req.params.id

    Dairy.findAll({
        where: {
            id: id
        }
    })
        .then(Dairy => {
            if (Dairy.length > 0) {
                // Dairy.password = md5(Dairy.password)
                var data = {
                    status: true,
                    message: "Dairy Found",
                    result: Dairy
                }
            }
            else {
                var data = {
                    status: true,
                    message: "Dairy Not available",
                    result: Dairy
                }
            }
            return res.status(200).json(data)
        })
        .catch((error) => {
            var err = {
                status: false,
                message: error.message
            }
            console.log(error)
            return res.status(500).json(err)
        })
}

exports.updateDairy = (req, res) => {
    const id = req.params.id
    var obj = req.body
    Dairy.update(obj, {
        where: {
            id: id
        }
    })
        .then(Dairy => {
            var data = {
                status: true,
                message: Dairy + " Dairy Updated"
            }
            return res.status(200).json(data);
        })
        .catch(error => {
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        })
}   