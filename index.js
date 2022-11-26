const express = require("express");
require("dotenv").config();
const db = require("./config/database");
const usersRoutes = require("./routes/users")

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db.sync({force: true}).then(() => {
//     console.log("Database Connected");
// }).catch((error) => {
//     console.error("Failed to sync database : " + error.message);
//     process.exit(1);
// })

app.get("/", (req, res) => {
    res.json({message: "Node.js Rest API"});
})

//Routes
app.use("/api/users", usersRoutes);


app.listen(port, () => console.log("Server On at Port " + port))
