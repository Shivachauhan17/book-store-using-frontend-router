
import express from "express";
import {Book} from '../models/bookModel.js';
const router=express.Router()

router.post('/',async(request,response)=>{
    try{
         if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({
                message:'send all required fields',
            })
        
        }
        const newBook={
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear,
        };

        const book=await Book.create(newBook);
        return response.status(201).send(book);

    }
    catch(err){
        console.log(err)
        response.status(500)
    }
})

router.get('/',async(request,response)=>{
    try{
        const books=await Book.find({});
        return response.status(200).json({
            count:books.length,
        data:books,});
    }
    catch(err){
        console.log(err.message)
        response.status(500).send({message:err.message})
    }
})

router.get('/:id', async (request, response) => {
    try {
        console.log()
      const  {id}  = request.params;
  
      const book = await Book.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

router.put('/:id',async(request,response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear){
           return response.status(400).send({
               message:'send all required fields',
           })
       
       }
       
       const {id}=request.params;
       
       const result=await Book.findByIdAndUpdate(id,request.body);
       if(!result){
        return response.status(404).json({message:'Book not found'});
       }
       return response.status(404).send({message:'Book updated successfully'});
 
   }
   catch(err){
       console.log(err)
       response.status(500)
   }
})


router.delete('/:id',async(request,response)=>{
    try{
        const {id}=request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message:'Book not found'})
        }
    }
    catch(err){
        console.log(err.message)
        response.status(500).send({message:err.message})
    }
})

export default router;