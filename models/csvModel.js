const mongoose = require('mongoose')

const csvSchema = mongoose.Schema({
    name:String,
    email: String,
    location: String
})

const csvModel = mongoose.model('users', csvSchema)

module.exports = csvModel