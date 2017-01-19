var exp = require('express');
var app = exp();
var router = exp.Router();
var assert = require('assert');

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
    extended:true
}));

//CRUD
var db = require('mongodb');
var Mongoc = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;
var mongoUrl = 'mongodb://localhost:27017/inventory'

router.get('/', function(req, res, next){
    res.render('Server');
});



app.get('/getallinventaris', function(req, res){
    
    var cursor = db.collection('inventaris');
    cursor.find().toArray(function(err, docs){
        console.log('fetching')
        res.json(docs);

   
    });

});


// app.use(function(req, res, next){
//             res.header('Acces-Control-Allow-Origin');
// });
app.post('/insert', function(req, res,next){
    console.log('Starting');
    
    // var hasil = json.body;
    var item ={
        nama:req.body.nama,
        deskripsi:req.body.deskripsi,
        tipe:req.body.tipe,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        stok:req.body.stok

    };
    // Mongoc.connect(mongoUrl, function(err, db){
    //     assert.equal(null, err);
        db.collection('inventaris').insert(item, function(err, result){
            assert.equal(null, err);
            console.log('Item Inserted');
            // db.close();
        // });
    });
    res.json(item);
});

app.post('/postupdate', function(req, res, next){
    var item ={
        nama:req.body.nama,
        deskripsi:req.body.deskripsi,
        tipe:req.body.tipe,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        stok:req.body.stok
    };
    var id = req.body.id;
    // Mongoc.connect(mongoUrl, function(err, db){
        assert.equal(null, err);
        db.collection('inventaris').updateOne({_id:objectid(id)},{$set:item}, function(err, result){
            assert.equal(null, err);
            console.log('Item Updated');
        // });
    });
    res.json({ message: 'Successfully Updated' });
});
        

app.post('/delete', function(req, res, next){
    var id = req.body.id;
    // Mongoc.connect(mongoUrl, function(err, db){
    //       assert.equal(null, err);
        db.collection('inventaris').deleteOne({_id:objectid(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            // db.close();
        // });
    });
    res.json({ message: 'Successfully deleted' });

});
// app.delete('/deleteall', function(req, res))
app.put('/update', function(req, res, next){
    var item ={
        nama:req.body.nama,
        deskripsi:req.body.deskripsi,
        tipe:req.body.tipe,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        stok:req.body.stok
    };
    var id = req.body.id;
    db.collection('inventaris').updateOne({_id:objectid(id) },{$set:item},function(err, result) {
        assert.equal(null, err);
        console.log('Item Updated');
    });
    res.json({ message: 'Successfully Updated' });

});





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



        app.listen(3000,'0.0.0.0',function(){
        console.log('Listening on localhost:3000');            

        });
        

    };
});
