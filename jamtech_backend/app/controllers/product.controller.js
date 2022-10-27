const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const role = req.query.role;
    var condition = role ? { role: { [Op.like]: `%${role}%` } } : null;
    Product.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}