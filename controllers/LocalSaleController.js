const LocalSale = require('../models/LocalSale')
const Customer = require('../models/Customer')

const { Op } = require('sequelize')

exports.getLocalSale = (req, res) => {

    const { startDate, endDate, timeslot, animalType } = req.body
    var search

    if (startDate == "" && endDate == "" && timeslot == "" && animalType == "") {
        search = {
            DairyId: req.query.dairyid
        }
    }
    else if (animalType == "") {
        search = {
            DairyId: req.query.dairyid,
            saleDate: {
                [Op.between]: [startDate, endDate]
            },
            timeslot: timeslot
        }
    }
    else {
        search = {
            DairyId: req.query.dairyid,
            saleDate: {
                [Op.between]: [startDate, endDate]
            },
            timeslot: timeslot,
            animalType: animalType
        }
    }
    // if (startDate != "" && endDate != "" && timeslot != "" && animalType != "") {
    //     search = {
    //         DairyId: req.query.dairyid,
    //         saleDate: {
    //             [Op.between]: [startDate, endDate]
    //         },
    //         timeslot: timeslot,
    //         animalType: animalType
    //     }
    // }
    // else if (startDate != "" && endDate != "" && timeslot == "" && animalType != "") {
    //     search = {
    //         DairyId: req.query.dairyid,
    //         saleDate: {
    //             [Op.between]: [startDate, endDate]
    //         },
    //         animalType: animalType
    //     }
    // }
    // else {
    //     search = {
    //         DairyId: req.query.dairyid
    //     }
    // }

    LocalSale.findAll({
        where: search,
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName', 'memberCode']
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
exports.addLocalSale = (req, res) => {
    var data = req.body
    var cname = req.body.customerName
    LocalSale.create(data)
        .then((result) => {
            LocalSale.findAll({
                where: {
                    id: result.id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName', 'memberCode']
                }
            })
                .then(ls => {
                    const data = {
                        status: true,
                        message: "Local Sale Added",
                        result: ls
                    }
                    return res.status(200).json(data)
                })
                .catch((error) => {
                    console.log(error.message)
                    let err = {
                        status: false,
                        message: error.message
                    }
                    return res.status(500).json(err)
                })
        })
        .catch((error) => {
            console.log(error.message)
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
        },
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName', 'memberCode']
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
        .then(localSale => {
            LocalSale.findAll({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName', 'memberCode']
                }
            })
                .then(localSale => {
                    var data = {
                        status: true,
                        message: " LocalSale Updated",
                        result: localSale
                    }
                    return res.status(200).json(data);
                })
                .catch(error => {
                    console.log(error.message)
                    var err = {
                        status: false,
                        message: error.message
                    }
                    return res.status(500).json(err);
                })
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