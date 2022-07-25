const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:String,
    note:String,
    label:String,
    user:String
},{
    timestamps:true
})

const Note = mongoose.model('Note',noteSchema);

module.exports = Note;