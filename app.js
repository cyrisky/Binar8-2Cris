const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { PORT = 8000 } = process.env

//View Engine
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/default')

//Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Middleware
const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"
    next()
}

//Routing Here
const router = require('./router')
app.use(router)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})