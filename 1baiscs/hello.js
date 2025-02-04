const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send("hello lawda");
})

app.get('/profile', function(req, res){
    res.send("world boy");
})

app.listen(3000);
