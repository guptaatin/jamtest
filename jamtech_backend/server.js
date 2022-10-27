const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
    console.log('Resync db');
    first();
})

function first() {
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "manager"
    });
    Role.create({
        id: 3,
        name: "admin"
    })
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.json({message: "Welcome to Express App"})
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/product.routes.js")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})