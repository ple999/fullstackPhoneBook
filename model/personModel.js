let mongoose=require('mongoose');

let counterSchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    seq:{
        type:Number,
        min:1,
    }
})

let personSchema= new mongoose.Schema({
    _id:{
        type:Number,
        min:1
    },
    name:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    number:{
        type:String,
        unique:true,
        trim:true,
        required:true
    }

})
let counterModel=mongoose.model('counter',counterSchema);
personSchema.pre('save',(function(next){
    let document=this;
    counterModel.findOneAndUpdate({name:'people'},{$inc:{seq:1}},{upsert:true,new:true}).then((res)=>{
        document._id=res.seq;
            next();
    });
}))






let personModel=mongoose.model('person',personSchema);

module.exports={personModel};

