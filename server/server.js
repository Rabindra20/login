var express = require('express');
var body = require('body-parser');
var cors = require('cors');
var mongo = require('mongodb').MongoClient;
const web= express();
web.use(cors());
web.use(body.json());
web.use(body.urlencoded({extended:false}));
web.post('/signin',(req,res)=>{
    var user = req.body.user;
    var pass = req.body.pass;
mongo.connect('mongodb://localhost:27017',(err,db)=>{
    if(err) throw err;
    var con = db.db('erp');
    con.collection('erp')
    .findOne({"user":user,"pass":pass},
    (err,result)=>{
        if(err) throw err;
        if(result != null){
            res.json({'status':'success'});
    }
        else{
            res.json({'status':'failed'});
        console.log('Invalid Username/pass');
        }
    });
});
});
web.post('/register',(req,res)=>{
    var user = req.body.user;
    var Fname = req.body.Fname;
    var Contact = req.body.Contact;
    var pass = req.body.pass;
    var obj = {user,Fname,Contact,pass};
mongo.connect('mongodb://localhost:27017',(err,db)=>{
    if(err) throw err;
    var con = db.db('erp');
    con.collection('erp')
    .insertOne(obj,
    (err,result)=>{
        if(err) throw err;
        if(result != null){
            res.json({'status':'success','msg':'1 Record Inserted'});
    }
        else{
            res.json({'status':'failed'});
        }
    });
});
});

web.listen(3000, ()=>{
    console.log('Server Ready');
})
