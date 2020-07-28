var db = require('../db');
const shortid = require('shortid');
module.exports.index =  (req, res)=>{
    res.render('transaction/transaction' , {
        transactions: db.get('transaction').value()
    });
}

module.exports.create = (req,res)=>{
    res.render('transaction/create');
}

module.exports.postIndex = (req ,res)=>{
    req.body.iscomplete = false;
    req.body.id = shortid.generate();
    db.get('transaction').push(req.body).write();
    res.redirect('/transaction');
}

module.exports.completed = (req, res)=>{
    var id = req.params.id;
    var transaction = db.get('transaction').find({id:id}).value();
    if(transaction){
        transaction.iscomplete = true;
        db.get('transaction').write();
        res.redirect('/transaction');
        return;
    }
    res.render('error/error');

   

}