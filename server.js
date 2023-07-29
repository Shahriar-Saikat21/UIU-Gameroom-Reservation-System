//external imports
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();


// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});