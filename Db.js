const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './.env'})
const URI = process.env.Base_URI2

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

    module.exports = mongoose;