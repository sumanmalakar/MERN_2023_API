import express from 'express'
import userRouter from './routes/user.js';
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';

export const app = express();


config({
    path:'./data/config.env'
})



//Using Middleware for getting json input from thunderclient
app.use(express.json())
app.use(cookieParser())


app.use('/api/v1/users',userRouter) // userRouter




app.get('/',(req,res)=>{
    res.send("Nice working")
})






