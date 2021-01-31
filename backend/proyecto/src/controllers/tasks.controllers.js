import Tasks from '../models/Tasks'
import TaskUser from '../models/Task-User'
var mongoose = require('mongoose'); 

export const createTask = async(req,res)=>{

    const {titulo,actividades,estado,encargado} = req.body
    const newTask = new Tasks({
        titulo,
        actividades,
        estado,
        encargado
    });
    const saveTask = newTask.save();
    res.status(200).json({message:"tarea creada con exito"});
}
export const cumplioActividad = async(req,res)=>{

}

export const UserTaskAsigned = async(req,res)=>{
    const {username,fechainicio,fechafinal,fechacumplimiento,tarea} = req.body
    const InserUserTask = new TaskUser({
         username,
         fechainicio,
         fechafinal,
         fechacumplimiento
    });
    if(tarea){
        /*const foundRoles = await Role.find({name:{$in:roles}})
        newUser.roles = foundRoles.map(role=>role._id)*/
        const foundTask = await Tasks.find({titulo:{$in:tarea}})
        InserUserTask.tarea = foundTask.map(task=>task._id)
     }else{
        const tar = await Tasks.findOne({titulo:tarea})
        InserUserTask.tarea = [tar._id];
    }
    const saveTaskUser = InserUserTask.save();
    res.status(200).json({message:"tarea asignada con exito"});
}