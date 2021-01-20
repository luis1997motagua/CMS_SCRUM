import express from 'express'
import morgan from 'morgan'


import authRoutes from './routes/auth.routes'
const app = express()


app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({author:'luis lagos',
    description:'proyecto graduacion',
    version:'1.0.0'
   })
})

app.use('/api/auth',authRoutes)


export default app;