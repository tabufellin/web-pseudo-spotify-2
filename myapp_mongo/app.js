var MongoClient = require('mongodb').MongoClient
//const { uuid } = require('uuidv4');
var createError = require('http-errors');
var express = require('express');
//////////////////FORM
var bodyParser = require('body-parser')
//////////////////////
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

const dbWorking = 'spotify'

app.post('/', urlencodedParser, function (req, res) {
	res.send('welcome, ' + req.body.username)
  })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.set('port', process.env.PORT || 3003);
app.listen(app.get('port'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log("Todo listo")

MongoClient.connect('mongodb://localhost:27017/spotify', function (err, client) {
  if (err) throw err

  var db = client.db('product_catalog_1')

  db.collection('cart').find().toArray(function (err, result) {
    if (err) throw err
    console.log(result)
  })
})



app.post('/generate-report', function(request, response){

  MongoClient.connect('mongodb://localhost:27017/spotify', function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbWorking);
  var myobj = Object.values(request.body)
  console.log("este es el objeto")
  console.log(myobj[0][0])
  values = {clients: myobj[0][0]}
  dbo.collection("customers").insertOne(values, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    });
  });

});

app.post('/generate-recomendations', function(request, response){

	MongoClient.connect('mongodb://localhost:27017/spotify', function(err, db) {
	if (err) throw err;
	var dbo = db.db(dbWorking);
	var myobj = Object.values(request.body)
	console.log("este es el objeto")
	console.log(myobj[0][0])
	values = {clients: myobj[0][0]}
	dbo.collection("recomendaciones").insertOne(values, function(err, res) {
	  if (err) throw err;
	  console.log("1 document inserted recomendations");
	  db.close();
	  });
	});
  
  });
/*app.post('/signup',function(request,response){
	const { Client } = require('pg')
	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: password,
	  port: 5432,
	}
	const client = new Client(connectionData)

	client.connect()
    const values = Object.values(request.body)
	
	valuesWithAutoId =  [uuid() , ...values]
	console.log(valuesWithAutoId)
    client.query("INSERT INTO client (userid, username,password) VALUES ($1,$2,$3)",valuesWithAutoId)
    	.then(response => {
			console.log("hola!")
	        response.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
	    })
	});*/
