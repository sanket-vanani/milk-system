const Payment = require('../models/Payment')
const Customer = require('../models/Customer')

exports.getPayment = (req, res) => {
    Payment.findAll({
        where: {
            DairyId: req.query.dairyid
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName']
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
        .then((Payment) => {
            console.log("Auto id ", Payment.id)

            console.log("Amount", Payment.amount)
            let data = {
                status: true,
                message: "Payment Added",
                result: Payment
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

exports.getPaymentById = (req, res) => {
    const id = req.params.id
    Payment.findAll({
        where: {
            id: id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
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
                    exclude: ['createdAt', 'updatedAt']
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