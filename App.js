const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const BodyParser = require('body-parser')
const mongoose = require('./Db')
const jwtCheck = require('./middleware/jwt.Middleware')
const dotenv = require('dotenv')
const productRoute = require('./Routes/Products/productsRoutes')
const clienteRoute = require('./Routes/Cliente/clienteRoutes')
const userRoute = require('./Routes/User/userRoutes')
const ventaRoute = require('./Routes/Ventas/ventasRoutes')

dotenv.config({path: './.env'})


const app = express();

app.set('port', process.env.PORT || process.env.PORT )

//Middleware

app.use(morgan('dev'));
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use(cors());
// app.use(jwtCheck)





//routes

//app.use('direccion', require('routa'))

app.use('/products', productRoute)
app.use('/clients', clienteRoute)
app.use('/users', userRoute)
app.use('/sells', ventaRoute)

// Sevastian









//Willian









//Gabriel









//Alvaro










//Starting Server

app.listen(app.get('port'), ()=>{
    console.log(`Starting in Port ${process.env.PORT}`);
})