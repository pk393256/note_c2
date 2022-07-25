const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');
const User = require('../database/user');

async function register(req,res) {
    const {email,name,password} = req.body;
    let alreadyUser = await User.findOne({
        email:email
    })
    if(alreadyUser){
        return res.send("User already exists")
    }else{
        let allInformation = await User.create({email,name,password});
        allInformation = allInformation.toJSON()
        delete allInformation.password;

        return res.send(allInformation)
    }

}

async function login(req,res){
    let {email,password}=req.body;
    let user=await User.findOne({
        email:email
    },{
        _id:1,
        name:1,
        email:1,
        password:1
    })
    if(user){
        if(user.password==password){
            let encToken=jwt.sign({
                id:user._id,
                name:user.name,
                email:user.email
            },SECRET)
            return res.send({
                data:{
                    token:encToken
                }
            })
        }else{
            return res.send("User not found")
        }
    }
}

async function getAllUsers(req,res){
    let users=await User.find();
    return res.send(users)
}

async function getLoggedInUser(req, res, next) {
    const { context } = req;

    if (!context.user) {
        return res.send("Token is not given")
    } else {
        return res.send({
            data: context.user
        })
    }

}

module.exports = {
    register,
    login,
    getAllUsers,
    getLoggedInUser
}