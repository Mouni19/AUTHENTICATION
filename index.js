const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>console.log("connected to db")
);

//imports routes
const authRoute = require('./routes/auth');

//route Middlewares
app.use('/api/user',authRoute);


app.listen(3000,()=>console.log('Server up and running'));