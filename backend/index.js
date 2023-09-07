import express, { request, response } from 'express';
import { PORT,DB_STRING } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import cors from 'cors';
import booksRoute from './routes/booksRoute.js'
import urlencoded from 'body-parser';  

const app=express()
app.use(express.json());
// app.use(cors({
//     origin:'http://localhost:5173/',
//     methods:['GET',"POST","PUT","DELETE"],
//     allowedHeaders:['Content-Type'], 
// }));
app.use(cors())

app.get('/',(req,res)=>{
    return res.status(234).send("hello world")
})

app.use('/books',booksRoute);

mongoose
    .connect(DB_STRING)
    .then(()=>{
        console.log('coonected to db');
        app.listen(PORT,()=>{
            console.log("server is running")
        })        
    })
    .catch(err=>{
        console.log(err)
    })