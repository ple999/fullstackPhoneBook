const express=require('express');
const mainRouter=express.Router();
const {personModel}=require('../model/personModel.js');

mainRouter.route('/').get((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Main');
})

mainRouter.route('/info').get(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`<div> 
                <p>Phonebook have info of ${await personModel.countDocuments()} Person</p>
                <p>${new Date()}</p>
            </div>`)  
})


module.exports={mainRouter};
