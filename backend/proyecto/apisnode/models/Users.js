const {Schema,model} = require("mongoose");
const UserSchema = new Schema(
    {
       nombre:{
           type:String,
           required:true
       },
       apellido:{
           type:String,
           required:true
       },
       email:{
           type:String,
           required:true
       },
       password:{
           type:String,
           required:true
       },
       role:{
           type:String,
           default:"user",
           enum:["user","admin","superadmin"]
       }        
    },
    {timestamps:true}
); 

module.exports = model("users",UserSchema);