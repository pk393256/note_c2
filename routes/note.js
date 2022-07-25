const express=require('express');
const { getAllNotes, createNote, deleteNote, updateNote } = require('../handlers/note');
const auth = require('./middlewares/auth');

const noteRouter=express.Router();

noteRouter.get('/note/:user',auth,getAllNotes)
noteRouter.post('/note',auth,createNote)
noteRouter.delete('/note/:title',auth,deleteNote)
noteRouter.patch('/note/:title',auth,updateNote)
module.exports=noteRouter;