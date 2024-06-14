const {personModel}=require('./../model/personModel.js');

const addPerson= (req,res)=>{
    console.log(req.body);
    let insertPerson=new personModel({
        name:req.body.name,
        number:req.body.number
    })

    insertPerson.save().then(()=>{
        res.writeHead('200',{'Content-type':'application/json'});
        res.end(JSON.stringify({
            message:'New Record Inserted',
            data:req.body
        }))
    }).catch((e)=>{
        res.json(JSON.stringify({
            message:'Error',
            detail:e
        }))
    });
}

const getPerson= (req,res)=>{
    personModel.find().then((res)=>{
        res.writeHead('200',{'Content-Type':'application/json'});
        res.end(JSON.stringify({
            res
        }))
    }).catch((e)=>{
        res.json(JSON.stringify({
            message:'Error',
            detail:e
        }))
    });
}

const getPersonById=(req,res)=>{
personModel.find({_id:req.params.id}).then(()=>{
    res.writeHead('200',{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        personDataById
    }))
}).catch((e)=>{
    res.json(JSON.stringify({
        message:'Error',
        detail:e
    }))
});

}

const updatePersonById=(req,res)=>{
   const newData={
        name:req.body.name,
        number:req.body.number
    }
     personModel.updateOne({_id:req.params.id},{newData}).then((res)=>{
        res.writeHead('200',{'Content-Type':'application/json'});
        res.end(JSON.stringify({
            message:'Record Updated',
            data:updateData
        }))
     }).catch((e)=>{
        res.json(JSON.stringify({
            message:'Error',
            detail:e
        }))
    })
}

const deletePersonById=(req,res)=>{
   personModel.deleteOne({_id:req.params.id}).then((res)=>{
    res.writeHead('200',{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        message:'Record Deleted',
        data:deletedData
    }))
   }).catch((e)=>{
    res.json(JSON.stringify({
        message:'Error',
        detail:e
    }))
});

}

module.exports={addPerson,getPerson,getPersonById,updatePersonById,deletePersonById}