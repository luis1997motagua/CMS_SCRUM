import {Router} from 'express'
const router = Router();
import * as tasksCtrl from '../controllers/tasks.controllers'
import {authJwt} from '../middlewares'

router.get('/get-all-tasks',tasksCtrl.GetAllTasks);
router.delete('/delete-one-task/:_id',tasksCtrl.DeleteTask);
router.post('/create-task',tasksCtrl.createTask);
router.post('/asign-task',tasksCtrl.UserTaskAsigned);
router.put('/cambiar-estado',tasksCtrl.CambiarEstadoActividad);
export default router;