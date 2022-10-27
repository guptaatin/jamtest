const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

verifyDuplicateUSernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username already exist!"
            });
            return;
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Email already exist!"
                });
                return;
            }
            next();
        });
    });
};

verifyRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Role doesn't exist " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    verifyDuplicateUSernameOrEmail: verifyDuplicateUSernameOrEmail,
    verifyRolesExisted: verifyRolesExisted
};

module.exports = verifySignUp;