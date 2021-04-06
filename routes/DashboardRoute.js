const router = require("express").Router()
const pool = require("../db")
const authorization = require("../middleware/authorization")

router.post("/", authorization, async (req, res) => {
    try {
        const user = await pool.query("select student_id from students where email = $1", [req.id])
        return res.json(user.rows[0])
    } catch(err) {
        return res.status(500).send("server error")
    }
})

module.exports = router