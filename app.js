const express = require('express');
const app = express();
// const db = require('./db');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:LuzDCTZz0jNz5NQ2@cluster0.xfudk.mongodb.net/zomato?retryWrites=true&w=majority')
const port = 5000;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})