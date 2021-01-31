import {Router} from 'express'
const router = Router();
import * as tasksCtrl from '../controllers/tasks.controllers'
import {authJwt} from '../middlewares'

router.post('/create-task',tasksCtrl.createTask);
router.post('/asign-task',tasksCtrl.UserTaskAsigned);
router.put('/si-cumplio-tarea',tasksCtrl.cumplioActividad);
export default router;