var mongo = require('mongoose')

var sc = new mongo.Schema({
    name:String
})

var model = mongo.model('name',sc);

mongo.connect('mongodb+srv://suraj:suraj@cluster0.roipnq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

var sss = new  model({
    name:'suraj'
});

// sss.save();

var a = model.find();
// var x = a.toArray()
console.log(a)