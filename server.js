const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const dbConnect = require("./config/dbConnection")

// define port number
const port = process.env.PORT || 5000

//connect with database
dbConnect()

// using middleware
app.use(express.json())
app.use(express.static('files'))
        
//define routes
app.use('/csvUpload', require('./routes/csvRoutes'))

// listen on given port 
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})