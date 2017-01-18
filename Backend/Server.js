var exp = require('express');
var app = exp();
var router = exp.Router();
var assert = require('assert');

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
//CRUD
var Mongoc = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;
var mongoUrl = 'mongodb://localhost:27017/inventory'

router.get('/', function(req, res, next){
    res.render('Server');
});

router.get('get-data', function(req, res, next){
    var resultArray =[];
    Mongoc.connect(mongoUrl, function(err, db){
    assert.equal(null, err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err){
        assert.equal(null, err);
        resultArray.push(doc);
    },function(){
        db.close();
        res.render('Server', {item: resultArray});
        }); 

    });

});

router.post('/insert', function(req, res, next){
    var item ={
        user:req.body.user,
        alamat:req.body.alamat
    };
    Mongoc.connect(mongoUrl, function(err, db){
        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function(err, result){
            assert.equal(null, err);
            console.log('Item Inserted');
            db.close();
        });
    });
    res.redirect('/');
});

router.post('/update', function(req, res, next){
    var item ={
        user:req.body.user,
        alamat:req.body.alamat
    };
    var id = req.body.id;
    Mongoc.connect(mongoUrl, function(err, db){
        assert.equal(null, err);
        db.collection('user-data').updateOne({"_id":objectid(id)},{$set:item}, function(err, result){
            assert.equal(null, err);
            console.log('Item Updated');
            db.close();
        });
    });
});

router.post('delete', function(req, res, next){
    var id = req.body.id;
    Mongoc.connect(mongoUrl, function(err, db){
        assert.equal(null, err);
        db.collection('user-data').deleteOne({"_id":objectid(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            db.close();
        });
    });

});




var db;
//init mongodb
Mongoc.connect(mongoUrl, function(err, database){
    if(err){
        console.log('Mongo is not connected');
    }
    else{
        console.log('Mongo is connected');
        //access to db
        db = database;
        //var heroes = db.collection()

        app.listen(9194,'localhost',function(){
        console.log('Listening on localhost:9194');

        });

    };
});
app.get('/users', function(req, res){
    var users = db.collection('users');
    users.find().toArray(function(err, manyNames){
        res.json({
            users:manyNames
        });
    });
});
app.get('/table/:nama/:alamat',function(req, res){
    var nama = req.params.nama;
    var alamat = req.params.alamat;
    var users = db.collection('users');
    users.insert({name:nama},function(err, result){
        if(err){
            res.send('error inserting new name into db');
        }
        else{
            res.send('Succes !');
        }
    })
});
app.post("/apa", function (req, res) {
    console.log(req.body.user.name)
});
app.get('/',function(req,res){
    res.json({
        name:'Maul',
        alamat:'Bogor'
    });

});
app.post('/name/alamat',function(req, res){
    var name = req.body.name;
    var alamat = req.body.alamat;
    res.send('hello '+ name + 'Age' + alamat);

    
});