const router = require("express").Router()

const pool = require("../db")

const bcrypt = require("bcrypt")

const jwtGenerator = require("../utils/jwtGenerator")

const validation = require("../middleware/validation")

const authorization = require("../middleware/authorization")

router.post("/register", validation, async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newUser = await pool.query("select * from users where email = $1", [email])
        if (newUser.rows.length !== 0) {
            return res.json({ message: "user already exists" })
        }
        bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (!err) {
                await pool.query("insert into users (name, email, password) values($1, $2, $3)", [name, email, hashedPassword])
                const token = jwtGenerator(email)
                return res.json({ status: "successful", token: token })
            } else {
                console.log(err.message)
                return res.json({ status: "unsuccessful" })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
})

router.post("/login", validation, async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await pool.query("select password from users where email = $1", [email])
        bcrypt.compare(password, user.rows[0].password)
            .then((valid) => {
                if (valid) {
                    console.log("Correct password. Logged in.")
                    const token = jwtGenerator(email)
                    return res.status(200).json({ status: "successful", token: token })
                } else {
                    console.log("Incorrect password. Can't log in")
                    return res.status(401).json({ error: "*Email or password is incorrect" })
                }
            })
    } catch (error) {
        res.json({ status: error.message })
    }
})

router.post("/verify", authorization, (req, res) => {
    try{
        return res.json({status: "successful"})
    } catch (err) {
        console.error(err.message)
        return res.json({ message: "error" })
    }
})

module.exports = router