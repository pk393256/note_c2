const SECRET = "KJDKNJKAERGIU84398AF";
function viaAuthRoute(req,res,next){
    req.context={

    }
    next();
}
module.exports = {
    SECRET,
    viaAuthRoute
}
