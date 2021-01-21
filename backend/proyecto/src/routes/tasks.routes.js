import {Router} from 'express'
const router = Router();
import * as tasksCtrl from '../controllers/tasks.controllers'
import {authJwt} from '../middlewares'

router.post('/create-task',[authJwt.verifyToken,authJwt.isAdmin],tasksCtrl.createTask)

export default router;