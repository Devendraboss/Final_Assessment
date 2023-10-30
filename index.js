const express = require("express");
require("dotenv").config();
const connection = require("./db");
const mysql = require("mysql");
const PORT = process.env.PORT;


const app = express();


app.use(express.json());


// app.use();


app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });

 