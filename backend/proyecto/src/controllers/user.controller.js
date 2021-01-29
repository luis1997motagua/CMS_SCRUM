var mongoose = require('mongoose'); 
import Chat from '../models/Chat';


export const addComment = async(req,res) =>{
    const {username,comentario,fechahora} = req.body;
    const newComment = new Chat({
        username,
        comentario,
        archivo:"",
        fechahora
    });
    const saveComment = await newComment.save();
    res.status(200).json({message:"comentario ingresado con exito"});
}

export const GetComments = async(req,res)=>{
    const getAll = await Chat.find();
    res.send(getAll);
}