/*var express = require('express')
var bodyParser = require ('body-parser')
var listRoute = require('./listRoute')
var listControllers = require('./listControllers')
var listModels = require('./listModels')

var app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('./list', listRoute)
app.use('./list', listControllers)
app.use('./list', listModels)
 
app.listen(3000)*/

var express = require('express')
var bodyParser = require ('body-parser')
var listRoute = require('./route/listRoute')
var app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/route', listRoute )

app.listen(3000)