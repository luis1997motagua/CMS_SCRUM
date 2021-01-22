import {Router} from 'express'
const router = Router();
import * as authCtrl from '../controllers/auth.controller'
import {verifySignup,authJwt} from '../middlewares'
router.post('/signin',[authJwt.verifyToken,verifySignup.checkRolesExisted],authCtrl.signIn)
router.post('/signup-user-from-admin',[authJwt.verifyToken,authJwt.isAdmin,verifySignup.checkDuplicateUsernameorEmail],authCtrl.signUp)
router.post('/signup-superadmin',verifySignup.checkDuplicateUsernameorEmail,authCtrl.signUp)
router.delete('/remove-user/:idusuario',[authJwt.verifyToken,authJwt.isSuperAdmin],authCtrl.deleteUserfromSuperAdmin);
router.delete('/remove-user-from-admin/:idusuario',[[authJwt.verifyToken,authJwt.isAdmin]],authCtrl.deleteUserfromAdmin)
export default router;