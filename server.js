const express = require('express')
const path = require('path')
const request = require('request')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_moduels')))


//Set Up Your Server
app.get('/sanity', function (req, res) {
    res.send('OK')
})

//Request to the Recipe API
app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body) {
        console.log('error: ', error)
        const ing = JSON.parse(body).results
        res.json(ing)
    })
    
})









const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})