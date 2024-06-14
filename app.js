const express=require('express');
const app=express();
const morgan=require('morgan');
const {mainRouter}=require('./route/mainRoute.js');
const {personRouter}=require('./route/personRoute.js');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json());
app.use('/',mainRouter);
app.use('/api/persons',personRouter)
module.exports={app};