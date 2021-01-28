import Tasks from '../models/Tasks'
var mongoose = require('mongoose'); 

export const createTask = async(req,res)=>{

    const {username,actividades,fechainicio,fechafinalizacion,tipoactividad,coloractividad,fechacumplimiento} = req.body
    const newTask = new Tasks({
        username,
        actividades,
        fechainicio,
        fechafinalizacion,
        tipoactividad,
        coloractividad,
        fechacumplimiento:""
    });
    const saveTask = newTask.save();
    res.status(200).json({message:"tarea creada con exito"});
}
export const cumplioActividad = async(req,res)=>{

}