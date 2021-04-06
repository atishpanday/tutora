const jwt = require("jsonwebtoken")
require("dotenv").config()

const jwtGenerator = (id) => {
    payload = {
        id: id
    }
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})
}

module.exports = jwtGenerator