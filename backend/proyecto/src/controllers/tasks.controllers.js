import Tasks from '../models/Tasks'
import TaskUser from '../models/Task-User'
import Taskstate from '../models/Taskstate';
var mongoose = require('mongoose'); 

export const createTask = async(req,res)=>{

    const {titulo,actividades,auditor} = req.body
    const newTask = new Tasks({
        titulo,
        actividades,
        auditor
    });
    const saveTask = newTask.save();
    res.status(200).json({message:"tarea creada con exito"});
}
export const GetAllTasks = async(req,res)=>{
    const gettasks = await Tasks.find();
    res.send(gettasks);
}

export const DeleteTask = async(req,res)=>{
    let id = req.params._id;
    let filter = {"_id":mongoose.Types.ObjectId(id)};
    const deletetask = await Tasks.deleteOne(filter);
    res.status(200).json({message:"Tarea eliminada con exito"});
}

export const AgregarEstadoTarea = async(req,res)=>{
       const {titulo,estado,fechacumplimiento,color}=req.body;
       const newState = new Taskstate({
           titulo,
           estado,
           fechacumplimiento,
           color
       });
       const saveState = newState.save();
       res.status(200).json({message:"succesfully"});
}

export const CambiarEstadoActividad = async(req,res)=>{
    const titulo = req.params.titulo;
    const estado = req.params.estado;
    const fechacumplimiento = req.params.fechacumplimiento;
    let filter = {"titulo":titulo};
    let update = {$set:{"fechacumplimiento":fechacumplimiento,"estado":estado}};
    const updateTask = Taskstate.updateOne(filter,update);
    res.status(200).json({message:"tarea actualizada con exito"});
}

export const GetTasksAsigned = async(req,res)=>{
    const r = await Tasks.aggregate([
        {
            $lookup:{
                from: "taskusers",
                localField : "_id",
                foreignField : "tarea",
                as : "tasks_asigned"
            }
        }
    ])
    res.send(r);
}


export const ViewFilterState = async(req,res)=>{
    const search = await Taskstate.find();
    res.send(search);
}

export const UserTaskAsigned = async(req,res)=>{
    const {encargado,fechainicio,fechafinal,tarea} = req.body
    const InserUserTask = new TaskUser({
         encargado,
         fechainicio,
         fechafinal,
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