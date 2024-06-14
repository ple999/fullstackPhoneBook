const mongoose=require('mongoose');
const dotenv=require('dotenv');
const {app}=require('./app.js');


dotenv.config({path:'./config.env'});


mongoose.connect(process.env.DB.replace('(PASS)',process.env.DB_PASS)).then(()=>{
    console.log('Connected to Mongodb');
        app.listen(2000,(req,res)=>{
            console.log('Listening on Port 2000')
        })
}).catch((e)=>{
    console.log(e);
    console.log('Error')
})
