const mongoose = require('mongoose')

const dbConnect = async() => {
    try
    {
        await mongoose.connect(process.env.DB_URL)
        console.log('database is connected')
    }
    catch(Err)
    {
        console.log(Err)
    }
}

module.exports = dbConnect