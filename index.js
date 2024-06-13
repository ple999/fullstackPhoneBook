const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json());

const person=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Main');
})

app.get('/info',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`<div> 
                <p>Phonebook have info of ${person.length} Person</p>
                <p>${new Date()}</p>
            </div>`)
})

app.get('/api/persons',(req,res)=>{
    //res.writeHead(200,{'Content-Type':'application/json'})
    res.json(
        person);
})

app.get('/api/persons/:id',(req,res)=>{
    //res.writeHead(200,{'Content-Type':'application/json'})
    res.json(
        person[req.params.id]);
})

app.delete('/api/persons/:id',(req,res)=>{
 
 let targetedPerson=person[req.params.id-1];
 let deleteIndex=person.findIndex((v)=>{
    return v.id==req.params.id;
 })

person.splice(deleteIndex,1);

console.log(person);

    // res.writeHead(200,{'Content-Type':'application/json'})
    res.json({
        status:"Success Delete",
        data:targetedPerson
    })
})

app.post('/api/persons',(req,res)=>{

    if(!req.body.name||!req.body.number){
        res.writeHead(404,({'Content-Type':'text/plain'}));
        res.end('Number and Name Cannot be Empty')
    }else{
        console.log(1)
        if(person.find((v)=>{return v.name==req.body.name})){
            res.writeHead(404,({'Content-Type':'text/plain'}));
            res.end(' Name Already Exists  ')
        }else{
            let newPerson={
                id:person.length+1,
                name:req.body.name,
                number:req.body.number
            }
            person.concat(newPerson)
            res.json({
                message:'Success Post',
                data:newPerson
            })
        }

    }

})

app.listen('2000','localhost',(req,res)=>{
    console.log('Server Running at 2000')
})