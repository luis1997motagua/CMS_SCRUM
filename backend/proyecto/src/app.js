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
app.use('./public/storage/imgs',express.static(path.resolve('public')))
app.use('/api/auth',authRoutes);
app.use('/api/tasks',tasksRouter);
app.use('/api/users',usersRoutes);
export default app;