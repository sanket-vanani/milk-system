const LocalSale = require('../models/LocalSale')

exports.getLocalSale = (req, res) => {
    LocalSale.findAll()
        .then(LocalSale => {
            if (LocalSale.length > 0) {
                var data = {
                    status: true,
                    message: "Local Sale Founded",
                    result: LocalSale
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Local Sale Not Founded",
                    result: LocalSale
                }
                return res.status(200).json(data)
            }

        })
        .catch(error => {
            console.log(error)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.addLocalSale = (req, res) => {
    var data = req.body
    LocalSale.create(data)
        .then((LocalSale) => {
            console.log("Auto id ", LocalSale.id)
            let data = {
                status: true,
                message: "Local Sale Added",
                result: LocalSale
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

exports.getLocalSaleById = (req, res) => {
    const id = req.params.id
    LocalSale.findAll({
        where: {
            id: id
        }
    })
        .then(LocalSale => {
            if (LocalSale.length > 0) {
                var data = {
                    status: true,
                    message: "Local Sale Founded",
                    result: LocalSale
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Local Sale Not Founded",
                    result: LocalSale
                }
                return res.status(200).json(data)
            }

        })
        .catch(error => {
            console.log(error)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.editLocalSale = (req, res) => {
    const id = req.params.id
    var obj = req.body
    LocalSale.update(obj, {
        where: {
            id: id
        }
    })
        .then(LocalSale => {
            var data = {
                status: true,
                message: LocalSale + " LocalSale Updated"
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

exports.removeLocalSale = (req, res) => {
    const id = req.params.id
    LocalSale.destroy({
        where: {
            id: id
        }
    })
        .then(LocalSale => {
            if (LocalSale != undefined) {
                var data = {
                    status: true,
                    message: LocalSale + " LocalSale Deleted"
                }
                return res.status(200).json(data)
            }
        })
        .catch(error => {
            console.log(error)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}