var express = require('express');
var morgan = require('morgan');
var path = require('path'); //Libraries Used in Javascript 
var Pool= require('pg').Pool;
var config={
    user: 'harshjoshipth',
    database: 'harshjoshipth',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWOROD
    
    
};
var app = express(); // Maybe Express Framework
app.use(morgan('combined'));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool= new Pool(config);
app.get('test-db', function (req,res){
    // make a select request
    // return a respose with results 
pool.query("Select * from test1", function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }
        else
      {  res.send(JSON.setingify(result));}
        
    });
});




app.get('/article-one', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html')) });



var counter=0;
app.get('/counter', function (req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});

app.get('/article-two', function (req, res){
    res.send("Article two Will be served here!");
});

app.get('/article-three', function (req, res){
    res.send("Article three Will be served here!");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
