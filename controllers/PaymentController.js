const Payment = require('../models/Payment')
const Customer = require('../models/Customer')

const { Op } = require('Sequelize')

exports.getPayment = (req, res) => {

    const { startDate, endDate } = req.body

    var search
    if (startDate != "" && endDate != "") {
        search = {
            DairyId: req.query.dairyid,
            paymentDate: {
                [Op.between]: [startDate, endDate]
            }
        }
    }
    else {
        search = {
            DairyId: req.query.dairyid
        }
    }

    Payment.findAll({
        where: search,
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName','memberCode']
        }
    })
        .then(Payment => {
            if (Payment.length > 0) {
                var data = {
                    status: true,
                    message: "Payment Founded",
                    result: Payment
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Payment Not Founded",
                    result: Payment
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

exports.addPayment = (req, res) => {
    var data = req.body
    Payment.create(data)
        .then((payment) => {
            console.log("Auto id ", payment.id)
            Payment.findAll({
                where: {
                    id: payment.id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName','memberCode']
                }
            })
                .then(pt => {
                    let data = {
                        status: true,
                        message: "Payment Added",
                        result: pt
                    }
                    return res.status(200).json(data)
                })
                .catch(error => {
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

exports.getPaymentById = (req, res) => {
    const id = req.params.id
    Payment.findAll({
        where: {
            id: id
        },
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName','memberCode']
        }
    })
        .then(Payment => {
            if (Payment.length > 0) {
                var data = {
                    status: true,
                    message: "Payment Founded",
                    result: Payment
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Payment Not Founded",
                    result: Payment
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

exports.editPayment = (req, res) => {
    const id = req.params.id
    var obj = req.body
    Payment.update(obj, {
        where: {
            id: id
        }
    })
        .then(payment => {
            Payment.findAll({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName','memberCode']
                }
            })
                .then(payment => {
                    var data = {
                        status: true,
                        message: "Payment Updated",
                        result: payment
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
        })
        .catch(error => {
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        })
}

exports.removePayment = (req, res) => {
    const id = req.params.id
    Payment.destroy({
        where: {
            id: id
        }
    })
        .then(Payment => {
            if (Payment != undefined) {
                var data = {
                    status: true,
                    message: Payment + " Payment Deleted"
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