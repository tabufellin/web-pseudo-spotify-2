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
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log("Todo listo")

app.post('/signup', (req, res) => {
	// console.log(req.body.userName)
	const { Client } = require('pg')
	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: 'ohdude9912',
	  port: 5432,
	}
	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT * FROM artist')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.get('/artist', (req, res) => {
	const { Client } = require('pg')
	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: 'ohdude9912',
	  port: 5432,
	}
	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT * FROM artist')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/album', (req, res) => {
	const { Client } = require('pg')
	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: 'ohdude9912',
	  port: 5432,
	}
	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT * FROM album')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics-artist-album', (req, res) => {
	const { Client } = require('pg')
	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: 'hola mundo',
	  port: 5432,
	}
	const client = new Client(connectionData)

	client.connect()
	client.query('Select count(*) as cantAlbum, artist.name FROM artist INNER JOIN album ON artist.artistid = album.artistid GROUP BY album.artistid, artist.name ORDER BY cantAlbum DESC LIMIT 5;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.get('/stadistics', (req, res) => {
	const { Client } = require('pg')

	const connectionData = {
	  user: 'postgres',
	  host: '127.0.0.1',
	  database: 'Project1db',
	  password: 'hola mundo',
	  port: 5432,
	}

	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT * FROM track')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/user/:username', function(req, res){
	res.send("recieved your request!");
	const { Client } = require('pg')

	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT name FROM artist')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
 });
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })

module.exports = app;
