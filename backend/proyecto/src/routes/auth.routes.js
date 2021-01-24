import {Router} from 'express'
const router = Router();
import * as authCtrl from '../controllers/auth.controller'
import {verifySignup,authJwt} from '../middlewares'
router.post('/signin',[authJwt.verifyToken,verifySignup.checkRolesExisted],authCtrl.signIn)
router.post('/signup',authCtrl.signUp)
router.post('/signup-superadmin',authCtrl.signUp)
router.delete('/remove-user/:idusuario',[authJwt.verifyToken,authJwt.isSuperAdmin],authCtrl.deleteUserfromSuperAdmin);
router.put('/change-password',authCtrl.changePassword)
router.delete('/remove-user-from-admin/:idusuario',[authJwt.verifyToken,authJwt.isAdmin],authCtrl.deleteUserfromAdmin)
export default router;