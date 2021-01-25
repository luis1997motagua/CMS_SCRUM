import jwt, { decode } from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async(req,res,next)=>{
   try{
    if(!req.headers.authorization){
        return res.status(401).json({message:"Unathorized"})
     }

     const token = req.headers.authorization.split(' ')[1]
     if(token==='null'){
        return res.status(401).json({message:"Unathorized"})
    }
    const decoded = jwt.verify(token,config.SECRET);
    if(!decoded){
        return res.status(401).json({message:"Unathorized"})
    }
    req.userId = decoded.id;
    next();
   }catch(e){
       return res.status(401).send('Unathorized Request')
   }
       /*if(!req.headers.authorization){
           return res.status(401).json({message:"Unathorized"})
        }

        const token = req.headers.authorization.split(' ')[1]
        if(token==='null'){
            return res.status(401).json({message:"Unathorized"})
        }

        const decoded = jwt.verify(token,config.SECRET)
        req.userId = decoded.id;
        next();*/

    /*if(!token) return res.status(403).json({messages:"no token provided"})
    const decoded = jwt.verify(token,config.SECRET)
    req.userId = decoded.id;
    const user = await User.findById(req.userId,{password:0})
    if(!user) return res.status(400).json({message:"no user found"})
    next()
    } catch (error) {
        return res.status(401).json({message:"Unathorized"})
    }*/
    
}

export const isAdmin = async(req,res,next)=>{
    const user = await User.findById(req.userId)
    const roles =  await Role.find({_id:{$in:user.roles}})
    for(let i=0;i<roles.length;i++){
        if(roles[i].name==="admin"){
            next();
            return;
        }
    }
    return res.status(403).json({message:"Require admin role"});
}
export const isSuperAdmin = async(req,res,next)=>{
    const user = await User.findById(req.userId)
    const roles =  await Role.find({_id:{$in:user.roles}})
    for(let i=0;i<roles.length;i++){
        if(roles[i].name==="superadmin"){
            next();
            return;
        }
    }
    return res.status(403).json({message:"Require superadmin role"});
}

