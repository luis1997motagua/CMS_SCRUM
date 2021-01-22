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

export const signUp = async(req,res)=>{
   
        const {username,email,password,roles} = req.body;
       
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
        })
     res.status(200).json({token})
      
 
}


export const signIn = async(req,res)=>{
    const userFound = await User.findOne({email:req.body.email}).populate("roles");
    if(!userFound) return res.status(400).json({message:"user not found"})
   const matchPassword = await User.comparePassword(req.body.password,userFound.password)
   if(!matchPassword)return res.status(401).json({token:null,message:"invalid password"})
    const token = jwt.sign({id:userFound._id},config.SECRET,{
        expiresIn:86400
    })
    res.json({token})
}