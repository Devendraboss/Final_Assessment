const connection = require("../db");


const Controller = (req,res)=>{
    const res = req.body;
    console.log("err", res);
    const {name,email,password} = req.body;

    const query = `INSERT into users("name", "email", "password") VALUE(${name},${email},${password})`;
    connection.query(query,(err,result)=>{
        if(err){
            res.status(404).json("page not found");
        }else{
            res.status(200).json("user created", result);
        }
    })
}

module.exports = Controller;