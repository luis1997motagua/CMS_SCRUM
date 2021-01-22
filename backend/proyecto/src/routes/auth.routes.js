import {Router} from 'express'
const router = Router();
import * as authCtrl from '../controllers/auth.controller'
import {verifySignup,authJwt} from '../middlewares'
router.post('/signin',[verifySignup.checkRolesExisted],authCtrl.signIn)
router.post('/signup-user-from-admin',)
router.post('/signup-superadmin',authCtrl.signUp)
router.delete('/remove-user/:idusuario',[authJwt.verifyToken,authJwt.isSuperAdmin],authCtrl.deleteUserfromSuperAdmin);
router.delete('/remove-user-from-admin',[[authJwt.verifyToken,authJwt.isAdmin]])
export default router;