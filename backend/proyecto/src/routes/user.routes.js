import {Router} from 'express'
const router = Router();
import * as userCtrl from '../controllers/user.controller'
import {authJwt,verifySignup} from '../middlewares'

router.post('/addcomment',userCtrl.addComment);

export default router;