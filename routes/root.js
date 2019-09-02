const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
// route.post('/login', (req, res) => {
//     Users.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then((user) => {
//         if(!user) {
//             res.send("No Such User.")
//         }
//         if(user.password !== req.body.password) {
//             res.send("Wrong Password")
//         }
//         return res.send("Hello " + user.firstName)
//     })
// })

route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createUser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route
