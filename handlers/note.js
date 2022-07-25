const Note = require("../database/note");
const { post } = require("../routes/user");

async function getAllNotes(req,res){
    const {user}=req.params;
    try
    {
    const notes=await Note.find({user:user});
    return res.send({
        data:notes
    })
    }catch(error){
        console.log('no notes are available')
    }
}

async function createNote(req,res){
    let {title,note,label,user}=req.body;
    // let verifiedUser=req.params;

    let noteCreated=await Note.create({title,note,label,user});
    return res.send({
        data:noteCreated
    })

}

async function deleteNote(req,res){
    let {title}=req.params;
    // let {id}=req.query;
    
    await Note.findOneAndDelete({title:title});
    req.send('Note Deleted')
}
async function updateNote(req,res){
    let {title}=req.params;
    let update=req.body;

    await Note.findOneAndUpdate({title:title},update)
    return res.send("note has been updated")
}

module.exports={
    getAllNotes,
    createNote,
    deleteNote,
    updateNote
}