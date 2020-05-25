const { uuid } = require('uuidv4');
const password = "ohdude9912"
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

const connectionData = {
	user: 'postgres',
	host: '127.0.0.1',
	database: 'Project1db',
	password: password,
	port: 5432,
  }
const showBitacora  = (req, res) => {
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	client.query('SELECT * FROM bitacora')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
}

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

app.post('/signup',function(request,response){
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
	});

app.post('/login',function(request, res){
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
	console.log(values)
	client.query("SELECT * FROM client WHERE client.username = $1 AND client.password = $2 ",values)
		.then(response => {
			console.log(response)
			res.json(response.rows)
			
			client.end()
		})
		.catch(err => {
			client.end()
		})
});


app.post('/addSong',function(request,res){
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
		console.log(values)
		client.query("CALL addSong($1,$2,$3,$4,$5,$6,$7,$8)",values)
			.then(response => {
					res.json(response.rows)
					console.log('hola')

					client.end()
			})
			.catch(err => {
					client.end()
			})
	});

app.post('/addArtist',function(request,res){
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

		client.query("CALL addArtist($1,$2,$3,$4)",values)
			.then(response => {
					console.log("hola!")
					res.json(response.rows)
					client.end()
			})
			.catch(err => {
			console.log(err)
					client.end()
			})
	});

app.post('/addAlbum',function(request,res){
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

		client.query("CALL addAlbum($1,$2,$3,$4,$5)",values)
			.then(response => {
			console.log("hola!")
					res.json(response.rows)
					client.end()
			})
			.catch(err => {
			console.log(err)
					client.end()
			})
	});

app.post('/addToCart',function(request,res){
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
		console.log(values)

		client.query("INSERT INTO cart(cartid, clientid, trackid) VALUES ($1, $2, $3)",values)
			.then(response => {
					res.json(response.rows)
					client.end()
			})
			.catch(err => {
			console.log(err)
					client.end()
			})
	});



app.post('/song', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value[0]+'%')
	value[0] = value[0]+'%'
	client.query("SELECT track.trackid, track.name as name, milliseconds, artist.name as artistname, track.genreid, track.albumid FROM track INNER JOIN album ON track.albumid = album.albumid INNER JOIN artist ON album.artistid = artist.artistid WHERE track.name ILIKE $1;",value)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/cart', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query("SELECT track.trackid, track.name as name, milliseconds, artist.name as artistname, track.genreid, track.albumid FROM track INNER JOIN album ON track.albumid = album.albumid INNER JOIN artist ON album.artistid = artist.artistid INNER JOIN cart ON track.trackid = cart.trackid WHERE cart.clientid = $1;",value)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/buyCart', function(req, res){
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
	const values = Object.values(req.body)
	console.log('este es el mero mero')
	console.log(values)

	client.query("CALL buyCart($1, $2, $3, $4, $5, $6, $7, $8, $9)",values)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
					console.log(err)
	        client.end()
	    })
});

app.post('/mySongs', function(req, res){
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
	const values = Object.values(req.body)
	console.log(values)
	client.query("SELECT track.name as trackname, artist.name as artistname, track.milliseconds, track.enlace FROM track INNER JOIN album ON track.albumid = album.albumid INNER JOIN artist ON album.artistid = artist.artistid INNER JOIN bitacora ON track.trackid = bitacora.trackid WHERE bitacora.id_username = $1 AND bitacora.action_type_id = 3",values)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/artist', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	value[0] = value[0]+'%'
	client.query('SELECT * FROM artist WHERE artist.name ILIKE $1',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.post('/album', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	value[0] = value[0]+'%'
	client.query('SELECT * FROM album WHERE album.title ILIKE $1',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/deleteSong', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL deleteSong($1,$2,$3)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/deleteAlbum', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL deleteAlbum($1,$2,$3)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/deleteArtist', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL deleteArtist($1,$2,$3)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/updateSong', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL updateSong($1,$2,$3,$4,$5,$6)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/updateAlbum', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL updateAlbum($1,$2,$3,$4,$5)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/updateArtist', function(req, res){
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
	const value = Object.values(req.body)
	console.log(value)
	client.query('CALL updateArtist($1,$2,$3,$4)',value)
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.get('/stadistics/1', (req, res) => {
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
	client.query('Select count(*) as cantAlbum, artist.name FROM artist INNER JOIN album ON artist.artistid = album.artistid GROUP BY album.artistid, artist.name ORDER BY cantAlbum DESC LIMIT 5;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/2', (req, res) => {
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
	client.query('Select count(*) as cantCanciones, genre.name FROM genre INNER JOIN track ON genre.genreid = track.genreid GROUP BY genre.genreid, genre.name ORDER BY cantCanciones DESC LIMIT 5;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/3', (req, res) => {
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
	client.query('SELECT sum(t.milliseconds), p.name FROM playlist as p INNER JOIN (playlisttrack as pt INNER JOIN track as t ON pt.trackid = t.trackid) ON p.playlistid = pt.playlistid GROUP BY pt.playlistid, p.playlistid;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/4', (req, res) => {
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
	client.query('SELECT a.name, t.milliseconds, t.name FROM track as t INNER JOIN (artist as a INNER JOIN album as al ON a.artistid = al.artistid) ON t.albumid = al.albumid ORDER BY t.milliseconds DESC LIMIT 5;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/6', (req, res) => {
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
	client.query('SELECT AVG(t.milliseconds) as prom, g.name FROM track as t INNER JOIN genre as g ON t.genreid = g.genreid GROUP BY t.genreid, g.name;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/7', (req, res) => {
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
	client.query('SELECT G.Name, COUNT(G.name) FROM (SELECT Playlist.Name as name, COUNT(Track.AlbumId) as number_of_artists FROM PlaylistTrack JOIN Playlist ON PlaylistTrack.PlaylistId=Playlist.PlaylistId JOIN Track ON PlaylistTrack.TrackId=Track.TrackId GROUP BY (Playlist.Name,Track.AlbumId)) G Group by G.name;')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});
app.get('/stadistics/8', (req, res) => {
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
	client.query('SELECT Artist.name, COUNT(Artist.name) FROM (SELECT Artist.artistid as artist,track.genreid as genre FROM ARTIST JOIN Album ON Album.ArtistId=Artist.ArtistId JOIN TRACK ON Track.AlbumId=Album.AlbumId GROUP BY(artist.artistID,track.genreid)) G JOIN Artist ON G.artist=Artist.artistid JOIN Genre ON G.genre=Genre.genreid GROUP BY (Artist.name) ORDER BY COUNT(Artist.name) DESC LIMIT 5;')
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
 
app.get('/bitacora', showBitacora);

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
