import {ROLES} from '../models/Role'
import User from '../models/User'
export const checkDuplicateUsernameorEmail = async(req,res,next)=>{
     const user = await User.findOne({username:req.body.username})
     if(user)return res.status(400).json({message:"user already exists"})
     const useremail = await User.findOne({email:req.body.email})
     if(email)return res.status(400).json({message:"email already exists"})
     next();
}
export const checkRolesExisted = (req,res,next)=>{
    if(req.body.roles){
        for(let i=0;i<req.body.roles.length;i++){
            if(!ROLES.include(req.body.roles[i])){
                 return res.status(400).json({
                     message:`Role ${req.body.roles[i]} does not exist`
                 })
            }
        }
    }
    next()
}