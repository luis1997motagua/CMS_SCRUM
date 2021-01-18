const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const {connect} = require("mongoose");
const {success,error} = require("consola");

//pasando valores de .env
const {DB,PORT} = require("./config");
//inicializando la conexion a MongoDB
const app = exp();

//middlewares
app.use(cors());
app.use(bp.json());

//user router middleware
app.use("/api/users",require("./routes/users"));

const startApp = async ()=>{
    try {
       await connect(DB,{
         useFindAndModify:true,
         useUnifiedTopology:true,
         useNewUrlParser:true
       });
       success({
           message:`Conexion exitosa a la base de datos \n${DB}`,
           badge:true
       });
    } catch (err) {
        error({
            message:`no se pudo conectar a la base de datos \n${err}`,
            badge:true
        });
        startApp();
    }
};

startApp();