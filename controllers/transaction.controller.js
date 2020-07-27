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
    var errors=[];
    req.body.iscomplete = false;
    req.body.id = shortid.generate();
    var id_Book = db.get('books').find({id:req.body.idBook}).value();
    var id_User = db.get('users').find({id:req.body.idUser}).value();
    if(!id_Book){
        errors.push("id_Book not found !!!");
    }
    if(!id_User){
        errors.push("id_User not found !!!");
    }
    if(errors.length > 0){
        res.render('transaction/create',{
            errors : errors,
            values : req.body
        })
        return;
        
    }
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
    res.render('/error/error');

   

}