module.exports.postCreate = function(req,res,next){
    var error ="";
    if(req.body.name.length>30){
        error ="name no longger than 30 characters !";
        res.render('users/create',{
            error: error
        })
        return;
    }
    next();
}