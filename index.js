const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require('./DB_Connection.js');

// routes user database
const userRoute = require('./routes/userRoutes.js');
app.use('/', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
});
