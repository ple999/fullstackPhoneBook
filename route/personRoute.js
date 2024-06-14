const express=require('express');
const {addPerson,getPerson,getPersonById,updatePersonById,deletePersonById}=require('./../controller/personController.js');
const {bodyValidation}=require('../middleware/bodyValidation.js');
const personRouter=express.Router();

personRouter.route('/').get(getPerson).post(bodyValidation,addPerson)

personRouter.route('/:id').get(getPersonById).put(bodyValidation,updatePersonById).delete(deletePersonById);

module.exports={personRouter};