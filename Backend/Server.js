var exp = require('express');
var app = exp();

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
var db;
//init mongodb
var Mongoc = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/inventory'
Mongoc.connect(mongoUrl, function(err, database){
    if(err){
        console.log('Mongo is not connected');
    }
    else{
        console.log('Mongo is connected');
        //access to db
        db = database;
        //var heroes = db.collection()

        app.listen(2020,'localhost',function(){
        console.log('Listening on localhost:2020');

        });

    };
});
app.get('/users', function(req, res){
    var users = db.collection('users');
    users.find().toArray(function(err, manyNames){
        res.json({
            user:manyNames
        });
    });
});
app.get('/table/:users',function(req, res){
    var nama = req.params.nama;
    var names = db.collection('users');
    names.insert({name:name},function(err, result){
        if(err){
            res.send('error inserting new name into db');
        }
        else{
            res.send('Succes !');
        }
    })
});