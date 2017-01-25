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
        res.header("Access-Control-Allow-Methods", "DELETE");
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


//tabel inventaris
app.get('/getallinventaris', function(req, res){
    
    var cursor = db.collection('inventaris');
    cursor.find().toArray(function(err, docs){
        console.log('fetching')
        res.json(docs);

   
    });

}); 
app.get('/getbyid/:id',function(req, res){
    var id = req.params.id;
    var cursor = db.collection('inventaris');
db.collection("inventaris").find({_id:objectid(id)}).toArray(function( err, docs){
            assert.equal(null, err);
            console.log('Item Selected');
            res.json(docs);

        });
     
});

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
        

app.post('/postdelete', function(req, res, next){
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
app.delete('/delete', function(req, res, next){
    var id = req.body.id;
    console.log('deleting...');
    // Mongoc.connect(mongoUrl, function(err, db){
    //       assert.equal(null, err);
        db.collection('inventaris').deleteOne({_id:objectid(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            // db.close();
        // });
    });
    res.json({ message: 'Successfully deleted' });

})
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

//tabel classroom
app.get('/ruangkelasget', function(req, res){
    
    var cursor = db.collection('ruangkelas');
    cursor.find().toArray(function(err, docs){
        console.log('fetching')
        res.json(docs); 
    });
});

app.get('/ruangkelasgetbyid/:id', function(req, res){
    var id = req.params.id;
    var cursor = db.collection('ruangkelas');
    cursor.find({_id:objectid(id)}).toArray(function(err, docs){
        console.log('fetching')
        res.json(docs); 
    });
});

app.post('/ruangkelasinsert', function(req, res,next){
    console.log('Starting');
    

    // var hasil = json.body;
    var itemruangkelas ={
        nama:req.body.nama,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        bagianguru:req.body.bagianguru,
        mejamurid:req.body.mejamurid,
        kursi:req.body.kursi,
        aktualmejamurid:req.body.aktualmejamurid,
        aktualkursi:req.body.aktualkursi,
        aktualmurid:req.body.aktualmurid,
        maxmejamurid:req.body.maxmejamurid,
        maxkursi:req.body.maxkursi


    };
    console.log(itemruangkelas);
    // Mongoc.connect(mongoUrl, function(err, db){
    //     assert.equal(null, err);
        db.collection('ruangkelas').insert(itemruangkelas, function(err, result){
            assert.equal(null, err);
            console.log('Item Inserted');
            // db.close();
        // });
    });
    res.json(itemruangkelas);
});

app.post('/ruangkelaspostupdate', function(req, res, next){
    var itemruangkelas ={
        nama:req.body.nama,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        bagianguru:req.body.bagianguru,
        mejamurid:req.body.mejamurid,
        kursi:req.body.kursi,
        aktualmejamurid:req.body.aktualmejamurid,
        aktualkursi:req.body.aktualkursi,
        aktualmurid:req.body.aktualmurid,
        maxmejamurid:req.body.maxmejamurid,
        maxkursi:req.body.maxkursi


    };
    var id = req.body.id;
    // Mongoc.connect(mongoUrl, function(err, db){
        assert.equal(null, err);
        db.collection('ruangkelas').updateOne({_id:objectid(id)},{$set:itemruangkelas}, function(err, result){
            assert.equal(null, err);
            console.log('Item Updated');
        // });
    });
    res.json({ message: 'Successfully Updated' });
});
        

app.post('/ruangkelaspostdelete', function(req, res, next){
    var id = req.body.id;
    // Mongoc.connect(mongoUrl, function(err, db){
    //       assert.equal(null, err);
        db.collection('ruangkelas').deleteOne({_id:objectid(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            // db.close();
        // });
    });
    res.json({ message: 'Successfully deleted' });

});
app.delete('/ruangkelasdelete', function(req, res, next){
    var id = req.body.id;
    // Mongoc.connect(mongoUrl, function(err, db){
    //       assert.equal(null, err);
        db.collection('ruangkelas').deleteOne({_id:objectid(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            // db.close();
        // });
    });
    res.json({ message: 'Successfully deleted' });

})
app.put('/ruangkelasupdate', function(req, res, next){
    var itemruangkelas ={
        nama:req.body.nama,
        panjang:req.body.panjang,
        lebar:req.body.lebar,
        bagianguru:req.body.bagianguru,
        mejamurid:req.body.mejamurid,
        kursi:req.body.kursi,
        aktualmejamurid:req.body.aktualmejamurid,
        aktualkursi:req.body.aktualkursi,
        aktualmurid:req.body.aktualmurid,
        maxmejamurid:req.body.maxmejamurid,
        maxkursi:req.body.maxkursi


    };
    var id = req.body.id;
    db.collection('ruangkelas').updateOne({_id:objectid(id) },{$set:itemruangkelas},function(err, result) {
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
