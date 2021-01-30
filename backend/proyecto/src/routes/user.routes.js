import {Router} from 'express'
import app from '../app';
const router = Router();
import upload from '../libs/storage'
import * as userCtrl from '../controllers/user.controller'
import { single } from '../libs/storage';
import {authJwt,verifySignup} from '../middlewares'


router.post('/addcomment',upload.single('file'),upload.single('filename'),userCtrl.addComment);
router.get('/getchat',userCtrl.GetComments);
export default router;