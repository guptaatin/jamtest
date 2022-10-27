const uploadFile = require("../middleware/upload");

const upload = async (req, res) => {
    // try {
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({message: "Please upload file"});
        }
    // }
}