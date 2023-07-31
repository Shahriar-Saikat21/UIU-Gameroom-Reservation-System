//external imports
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//set view engine
app.set('view engine', 'ejs');

//use static path
app.use(express.static('public'));

//all paths


// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});