const Dairy = require('../models/Dairy')
const md5 = require('md5')

exports.addDairy = (req, res) => {
    var data = req.body
    data.password = md5(data.password)
    Dairy.create(data)
        .then((Dairy) => {
            console.log("Auto id ", Dairy.id)
            let data = {
                status: true,
                message: "Dairy Added",
                result: Dairy
            }
            return res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            let err = {
                status: false,
                message: error.message
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
                    status: false,
                    message: "Dairy Found",
                    result: Dairy
                }
            }
            else {
                var data = {
                    status: false,
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