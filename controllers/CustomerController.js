const Customer = require('../models/Customer')
const { Op } = require('sequelize')

exports.getCustomer = (req, res) => {

    const { memberType, startMemberId, endMemberId } = req.body

    var search
    if (memberType != "" && startMemberId != "" && endMemberId != "") {
        search = {
            DairyId: req.query.dairyid,
            memberType: memberType,
            id: {
                [Op.between]: [startMemberId, endMemberId]
            }
        }
    }
    else {
        search = {
            DairyId: req.query.dairyid
        }
    }

    Customer.findAll({
        where: search,
        attributes: {
            exclude: ['updatedAt']
        }
    })
        .then(Customer => {
            if (Customer.length > 0) {
                var data = {
                    status: true,
                    message: "Customer list found",
                    result: Customer
                }
            }
            else {
                var data = {
                    status: true,
                    message: "Customer list not found",
                    result: Customer
                }
            }
            return res.status(200).json(data)
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

exports.addCustomer = (req, res) => {
    const data = req.body
    Customer.create(data)
        .then(Customer => {
            let cust = []
            cust.push(Customer)
            let data = {
                status: true,
                message: "Customer Inserted",
                result: cust
            }
            return res.status(200).json(data);
        })
        .catch(error => {
            let err = {
                status: false,
                message: error.message,
                // sqlMessage: error.errors[0].message
            }
            return res.status(500).json(err)
        })
}

exports.getCustomerById = (req, res) => {
    const id = req.params.id
    Customer.findAll({
        where: {
            id: id
        },
        attributes: {
            exclude: ['updatedAt']
        }
    })
        .then(Customer => {
            if (Customer.length > 0) {
                var data = {
                    status: true,
                    message: "Customer Found",
                    result: Customer
                }
            }
            else {
                var data = {
                    status: true,
                    message: "Customer Not Found",
                    result: Customer
                }
            }
            return res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            let err = {
                status: false,
                message: error.message,
            }
            return res.status(500).json(err)
        })
}

exports.updateCustomer = (req, res) => {
    const id = req.params.id
    const obj = req.body
    Customer.update(obj, {
        where: {
            id: id
        }
    })
        .then(customer => {
            if (customer != undefined) {
                Customer.findAll({
                    where: {
                        id: id
                    },
                    attributes: {
                        exclude: ['updatedAt']
                    }
                })
                    .then(cust => {
                        var data = {
                            status: true,
                            message: customer + " Customer Updated",
                            result: cust
                        }
                        return res.status(200).json(data)
                    })
                    .catch(error => {
                        var err = {
                            status: false,
                            message: error.message
                        }
                        return res.status(500).json(err)
                    })

            }
        })
        .catch(error => {
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.deleteCustomer = (req, res) => {
    const id = req.params.id
    Customer.destroy({
        where: {
            id: id
        }
    })
        .then(Customer => {
            if (Customer != undefined) {
                var data = {
                    status: true,
                    message: Customer + " Customer Deleted"
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