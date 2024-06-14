const bodyValidation=(req,res,next)=>{
    const bodyProp=['name','number'];
    let keyBody=Object.keys(req.body);
    try{
        keyBody.forEach((v)=>{
            if(!bodyProp.includes(v)){
                throw 'eInvalidProp'
            }
    
            if(!req.body.name||!req.body.number){
                throw 'eEmptyProp'
            }

        })
    }catch(e){
        if(e=='eInvalidProp'){
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('Body Can only have name and number as property');
        }else if(e=='eEmptyProp'){
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('name and number Must have value')
        }else{
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end(`${e}`)
        }
    }
    next();
}

module.exports={bodyValidation}