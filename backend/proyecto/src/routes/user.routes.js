import {Router} from 'express'
const router = Router();
import * as userCtrl from '../controllers/user.controller'
import {authJwt,verifySignup} from '../middlewares'

//router.post('/',[authJwt.verifyToken,authJwt.isAdmin,verifySignup.checkRolesExisted],userCtrl.createUser);
router.get('/view-activities',[authJwt.verifyToken,verifySignup.checkRolesExisted],userCtrl.createUser)
router.post('view-individual-activity',[authJwt.verifyToken,verifySignup.checkRolesExisted],userCtrl.createUser)
router.post('/add-comment-upfile',[authJwt.verifyToken,verifySignup.checkRolesExisted],userCtrl.createUser);
export default router;