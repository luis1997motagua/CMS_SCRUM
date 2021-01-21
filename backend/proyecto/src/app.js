import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {createRoles} from './libs/initialSetup'
import authRoutes from './routes/auth.routes'
const app = express()
createRoles();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({author:'luis lagos',
    description:'proyecto graduacion',
    version:'1.0.0'
   })
})

app.use('/api/auth',authRoutes);


export default app;