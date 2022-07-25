const SECRET = "KJDKNJKAERGIU84398AF";
// const SECRET = process.env.SECRET;
function viaAuthRoute(req,res,next){
    req.context={

    }
    next();
}
module.exports = {
    SECRET,
    viaAuthRoute
}
