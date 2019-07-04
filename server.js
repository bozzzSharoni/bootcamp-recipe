const express = require('express')
const path = require('path')
const request = require('request')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_moduels')))



app.get('/sanity', function(req, res){
    res.send('OK')
})













const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})