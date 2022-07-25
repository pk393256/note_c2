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