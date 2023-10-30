const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database:process.env.DB_NAME,
});

connection.connect(
    (err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
    }
    console.log("Connected to MySQL");
  });


  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (error) => {
      try {
        if (error) new Error("Database is not created");
        console.log(`Database ${process.env.DB_NAME} created`);
      } catch (error) {
        console.log("Err", error.message);
      }
    }
  );

      
      connection.query(`CREATE TABLE IF NOT EXISTS USERS (
        id int auto_increment primary key ,
        name varchar(100) not null,
        email varchar(50) not null ,
        password varchar(20) not null
      )`, (error)=>{
        try {
          if (error){
            console.log("err",error)
           new Error("Users table is not created");}
          console.log(`Users table is  created`);
        } catch (error) {
          
          console.log("eRROOOO", error);
        }
      });

  
  

  




//   mysql.createConnection();

