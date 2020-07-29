module.exports.index = (req,res)=>{
    if(!req.cookies.Count){
        res.cookie('Count',0);
    }
    res.render('home/index');
}