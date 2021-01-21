import  User from '../models/User'

export const signUp = async(req,res)=>{
   
        const {username,email,password,roles} = req.body;
        const newUser = new User({
             username,
             email,
             password: await User.encryptPassword(password)
         })
         await newUser.save();
         console.log(newUser);
         res.json(newUser)
 
}

export const signIn = async(req,res)=>{
    res.json('signin')
}