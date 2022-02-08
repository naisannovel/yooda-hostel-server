require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();


// Router
const userAuthRouter = require('./routers/userAuthRouter');


// Middleware
app.use(express.json());
app.use(compression());
app.use(cors());


// root api
app.get('/',(req,res)=>{
    res.send('hello world, i am root api')
})

app.use('/api',userAuthRouter);

app.use((err, req, res, next)=>{
    return res.status(500).send(err.message)
})

module.exports = app;