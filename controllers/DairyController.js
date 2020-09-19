const Dairy = require('../models/Dairy')
const md5 = require('md5')

exports.addDairy = async (req, res) => {
    var data = req.body
    data.password = md5(data.password)
    await Dairy.create(data)
        .then((Dairy) => {
            console.log("Auto id ", Dairy.id)
            let data = {
                status: true,
                message: "Dairy Added"
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

