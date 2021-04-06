const jwt = require("jsonwebtoken")
require("dotenv").config()

const authorization = (req, res, next) => {
    const token = req.header("jwToken")
    if(!token){
        return res.json({ message: "You are not authorized" })
    }

    try{
        const verify = jwt.verify(token, process.env.jwtSecret)
        req.user = verify.user
        next()
    } catch (err) {
        return res.json("Invalid token")
    }
}

module.exports = authorization