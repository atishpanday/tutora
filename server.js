const express = require("express")

const server = express()

const pool = require("./db")

server.use(express.json())

const cors = require("cors")

server.use(cors())

const port = 5000

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

server.listen(port, () => {
    console.log("Listening on port " + port)
})