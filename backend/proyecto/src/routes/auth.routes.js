import {Router} from 'express'
const router = Router();
import * as authCtrl from '../controllers/auth.controller'
import {verifySignup,authJwt} from '../middlewares'
router.post('/signin',authCtrl.signIn)
router.post('/signup',authCtrl.signUp)
router.post('/signup-superadmin',authCtrl.signUpSuperAdmin)
router.get('/get-one-user/:email',authCtrl.getOneUser);
router.get('/get-all-users',authCtrl.getAllUsers);
router.delete('/remove-user/:_id',authCtrl.deleteUserfromSuperAdmin);
router.put('/change-password',authCtrl.changePassword)
router.delete('/remove-user-from-admin/:idusuario',authCtrl.deleteUserfromAdmin)
export default router;