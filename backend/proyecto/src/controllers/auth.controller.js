import  User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'
import bcrypt from 'bcryptjs'
var mongoose = require('mongoose'); 



export const deleteUserfromAdmin = async(req,res)=>{
    //var doc = {"_id":ObjectId("600a7fa59a7ef15958edb858"),"roles":ObjectId("60091fbf93768e135889caa0")}
        var {idusuario} = req.params
        let filter = {"_id":mongoose.Types.ObjectId(idusuario),"roles":mongoose.Types.ObjectId("60091fbf93768e135889ca9f")}
            let user = await User.findOne(filter)
            if(user!=null){
                const deleteUser = await User.deleteOne(user)
                return res.status(200).json({message:"Usuario deleted"})
            }
            else{
                return res.status(400).json({message:"Admin not eliminate an Superadmin"})
            }
}

export const deleteUserfromSuperAdmin = async(req,res)=>{
    var {idusuario} = req.params
     let filter = {"_id":mongoose.Types.ObjectId(idusuario)}
     let user = await User.findOne(filter)
     if(user!=null){
        const deleteUser = await User.deleteOne(user)
        return res.status(200).json({message:"Usuario deleted"})
     }
     else{
        return res.status(400).json({message:"User doesn't exist"})
     }
}

export const changePassword = async(req,res)=>{
    const {email,password} = req.body
    let filter = {"email":email}
    let update = {"$set":{"password": await User.encryptPassword(password)}}
    const resultupdate = await User.updateOne(filter,update);
    if(resultupdate){
        res.status(200).json({message:"password changed"})
    }else{
        res.status(400).json({message:"there is a problem here"})
    }

}


/*db.users.aggregate(
    [
        {
            $match:{
                _id:ObjectId("60091fbf93768e135889ca9f")
            }
        },
        {
            $lookup:{
                from:'users',
                localField:'_id',
                foreignField:'name',
                as:'col'
            }
        }
    ]
).pretty()*/


export const signUp = async(req,res)=>{
   
    const {username, email, password, roles} = req.body;
       
    const newUser = new User({
         username,
         email,
         password: await User.encryptPassword(password)
     })
     if(roles){
        const foundRoles = await Role.find({name:{$in:roles}})
        newUser.roles = foundRoles.map(role=>role._id)
     }else{
         const role = await Role.findOne({name:"user"})
         newUser.roles = [role._id];
     }
    const saveUser = await newUser.save();
    const token = jwt.sign({id:saveUser._id},config.SECRET,{
        expiresIn:86400 //24hrs
    });
    //res.status(200).send({
      // signed_user:saveUser._id,
      // token:token        
    //});
  /// res.status(200).json({token})
 
}



export const signIn = async(req,res)=>{
   /* const userData = {
        username:req.body.username,
        password:req.body.password
    }
    User.findOne({username:userData.username},(err,user)=>{
        if(err) return res.status(500).send('server error!');
        if(!user){
            res.status(409).send({message:"something is wrong"});
        }
        else{
            const resultPassword = bcrypt.compareSync(userData.password,user.password);
            if(resultPassword){
                const expiresIn =  24 * 60 * 60;
                const accessToken = jwt.sign({id:user.id},config.SECRET,{expiresIn:expiresIn})
                const dataUser = {
                    username:user.username,
                    password:user.password,
                    accessToken:accessToken,
                    expiresIn:expiresIn
                }
                res.send({dataUser});
            }
            else{
                res.status(409).send({message:"something is wrong"});
            }
            }
        }
    )*/
    const {username,password} = req.body;
    const userFound = await User.findOne({"username":username}).populate("roles");
    if(!userFound) return res.status(401).send("no existe ese usuario");
    const matchPassword = await User.comparePassword(password,userFound.password)
    if(!matchPassword)return res.status(401).json({token:null,message:"invalid password"})
   // const userFound = await User.findOne({username:req.body.username}).populate("roles");
   //if(!userFound) return res.status(400).json({message:"user not found"})
  // const matchPassword = await User.comparePassword(password,userFound.password)
   //if(!matchPassword)return res.status(401).json({token:null,message:"invalid password"})
    const token = jwt.sign({id:userFound._id},config.SECRET,{
        expiresIn:86400
    })
    res.status(200).send({
        signed_user:userFound._id,
        token:token        
     });
     //next();
     //res.status(200).json({message:"Bienvenido"});
}