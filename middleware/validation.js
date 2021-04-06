const joi = require("@hapi/joi")

const validation = async (req, res, next) => {
    if (req.path === "/register") {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const validUser = joi.object({
            name: joi.string().required(),
            email: joi.string().required().email(),
            password: joi.string().min(8).required(),
        })
        const isValidUser = validUser.validate(user)
        if (!isValidUser.hasOwnProperty('error')) {
            try {
                next()
            } catch (error) {
                console.error(error.message)
            }
        } else {
            return res.json("Invalid credentials")
        }
    } else if (req.path === "/login") {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        const validUser = joi.object({
            email: joi.string().required().email(),
            password: joi.string().min(8).required()
        })
        const isValidUser = validUser.validate(user)
        if (!isValidUser.hasOwnProperty('error')) {
            try {
                next()
            } catch (error) {
                console.error(error.message)
            }
        } else {
            return res.json("Invalid credentials")
        }
    }
}

module.exports = validation