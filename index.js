const express = require("express");
require("dotenv").config();
const db = require("./config/database");
const usersRoutes = require("./routes/users")
const multer = require("multer");

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sync({force: false}).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.error("Failed to sync database : " + error.message);
    process.exit(1);
})

//Upload foto
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, "public/upload");
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + file.originalname);
	},
  });
  
  const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
   const file = req.file;
   res.status(200).json(file.filename)
})

app.get("/", (req, res) => {
    res.json({message: "Node.js Rest API"});
})

//Routes
app.use("/api/users", usersRoutes);


app.listen(port, () => console.log("Server On at Port " + port))
