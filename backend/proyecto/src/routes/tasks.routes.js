import {Router} from 'express'
const router = Router();
import * as tasksCtrl from '../controllers/tasks.controllers'
import {authJwt} from '../middlewares'
import Tasks from '../models/Tasks'
import TaskUser from '../models/Task-User'
var mongoose = require('mongoose'); 


router.get('/tareas',function(req,res){
     TaskUser.find({},function(err,tasks){
         Tasks.populate(tasks,{path:"tarea"},function(err,tasks){
               res.status(200).send(tasks);
         });
     });
});

router.get('/asigns',tasksCtrl.GetTasksAsigned);

router.get('/get-all-tasks',tasksCtrl.GetAllTasks);
router.delete('/delete-one-task/:_id',tasksCtrl.DeleteTask);
router.post('/create-task',tasksCtrl.createTask);
router.post('/asign-task',tasksCtrl.UserTaskAsigned);
router.put('/cambiar-estado',tasksCtrl.CambiarEstadoActividad);
export default router;