const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("Visible To All.")
})

exports = module.exports = route