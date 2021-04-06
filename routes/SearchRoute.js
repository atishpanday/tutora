const router = require("express").Router()

const pool = require("../db")

router.post("/search-res", async (req, res) => {
    try {
        const input = req.body.input
        const searchResults = await pool.query("select name from users where lower(name) like lower($1)",[input + '%'])
        res.json(searchResults.rows)
    } catch (error) {
        res.json({"error": "No results found"})
    }
})

module.exports = router