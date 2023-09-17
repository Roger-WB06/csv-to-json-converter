const asyncHandler = require('express-async-handler')
const csv = require('csvtojson')
const csvModel = require('../models/csvModel')


const csvToJson = asyncHandler(async(req,res) => {
    const jsonArray = await csv().fromFile(`files/${req.file.filename}`)
    await csvModel.deleteMany({})
    const users = await csvModel.insertMany(jsonArray)
    console.log("Data Inserted")
    res.json(users)
})

const getJsonData = asyncHandler (async(req,res) => {

    const users = await csvModel.find({})
    res.status(200).json(users)
})


module.exports = {csvToJson, getJsonData}