exports.allAccess = (req, res) => {
    res.status(200).send("All Data");
}

exports.userBoard = (req, res) => {
    res.status(200).send("User Data");
}

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Data");
}

exports.managerBoard = (req, res) => {
    res.status(200).send("Manager Data");
}