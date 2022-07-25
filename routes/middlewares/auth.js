const jwt = require('jsonwebtoken');
const { SECRET } = require('../../constants');
const User = require('../../database/user');

async function auth(req,res,next){
    let token = req.headers.token;
    if(token){
        try{
            const decode = jwt.verify(token,SECRET);
            const user = await User.findOne({
                email:decode.email
            })

            if(user){
                req.context.user = user;
            } else {
                return res.status(401).send({
                    error: 'Please Login first'
                })
            }
        }catch(ex){
            console.log(ex)
            return res.status(400).send({
                error:"Token is not valid"
            })
        }
    }
    next();
}
module.exports=auth;