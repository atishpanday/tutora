const express = require("express")

const server = express()

const pool = require("./db")

const cors = require("cors")

const multer = require("multer")

const port = 5000

server.use(express.json())

server.use(cors())

const upload = multer({
    dest: "./uploads/"
})

server.use("/auth", require("./routes/AuthRoutes"))

server.use("/", require("./routes/SearchRoute"))

server.use("/dashboard", require("./routes/DashboardRoute"))

server.post("/enquiry", async (req, res) => {
    try {
        const {name, email, question} = req.body
        await pool.query("insert into enquiryform(name, email, question) values($1, $2, $3)",[name, email, question])
        console.log(req.body)
    } catch (error) {
        console.log(error.message)
    }
})

server.post("/store-image", upload.single("image"), (req, res) => {
    res.json({message: "received"})
})

server.get("/get-image", (req, res) => {
    res.json({image: images[0]})
})

server.listen(port, () => {
    console.log("Listening on port " + port)
})