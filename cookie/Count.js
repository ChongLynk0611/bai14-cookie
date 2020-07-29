module.exports.Count= function(req , res ,next){
    var count = parseInt(req.cookies.Count);
    res.clearCookie('Count',count);
    count++;
    console.log(count);
    res.cookie('Count',count);
    next();
}