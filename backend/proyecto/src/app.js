import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {createRoles} from './libs/initialSetup'
import authRoutes from './routes/auth.routes'
import tasksRouter from './routes/tasks.routes'
import usersRoutes from './routes/user.routes'
import cors from 'cors'
const path = require('path');
const multer = require('multer');
const app = express()
createRoles();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use('/public',express.static(`${__dirname}/uploads`));

app.get('/',(req,res)=>{
    res.json({author:'luis lagos',
    description:'proyecto graduacion',
    version:'1.0.0'
   })
})
/*app.use(multer({
    dest:path.join(__dirname,'../public/storage/imgs'),
    fileFilter:(req,file,cb)=>{
        const filetypes = /pdf|jpg|jpeg|xlsx|docx|png|svg/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null,true)
        }else{
            cb("Error:archivo con extension incorrecta");
        }
    }
}).single('archivo'));*/
app.use('./public/storage/imgs',express.static('./public/storage/imgs'))
app.use('/api/auth',authRoutes);
app.use('/api/tasks',tasksRouter);
app.use('/api/users',usersRoutes);
export default app;