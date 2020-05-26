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




const genresWithMoreSalesInRange = (req, res) => {
	
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	const values = Object.values(req.body)
	console.log(values)

	client.query("SELECT g.genreid, g.name, sum(i.unitprice) as monto FROM invoiceline as i JOIN invoice as inn ON i.invoiceid = inn.invoiceid JOIN track as t ON  i.trackid = t.trackid JOIN album as a ON  a.albumid = t.albumid JOIN artist as art ON art.artistid = a.artistid JOIN genre as g ON t.genreid = g.genreid WHERE inn.invoicedate BETWEEN $1 AND $2 GROUP BY g.genreid, g.name ORDER BY monto desc", values)
	    .then(response => {
			res.json(response.rows)
			console.log("res")
			console.log(res)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
		})

}

const artistsWithMoreSalesInRange = (req, res) => {
	console.log('holaaaaa')
	
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	const values = Object.values(req.body)
	console.log(values)

	client.query("SELECT art.artistid, art.name, sum(i.unitprice) as monto FROM invoiceline as i JOIN invoice as inn ON i.invoiceid = inn.invoiceid JOIN track as t ON  i.trackid = t.trackid JOIN album as a ON  a.albumid = t.albumid JOIN artist as art ON art.artistid = a.artistid WHERE inn.invoicedate BETWEEN $1 AND $2 GROUP BY art.artistid, art.name ORDER BY monto desc LIMIT $3", values)
	    .then(response => {
			res.json(response.rows)
			console.log("res")
			console.log(res)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
		})

}

const showTotalOfSalesPerWeek = (req, res) => {
	
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	const values = Object.values(req.body)

	client.query("SELECT date_part('week', invoicedate::date) AS weekly, sum(total) as suma_total, date_trunc('week', invoicedate::date) as dia_lunes_semana FROM (SELECT  * FROM invoice as i JOIN invoiceline as il ON i.invoiceid = il.invoiceid WHERE invoicedate BETWEEN $1 AND $2 ) as fromwheretowhere GROUP BY weekly, dia_lunes_semana ORDER BY weekly desc", values)
	    .then(response => {
			res.json(response.rows)
			console.log("res")
			console.log(res)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
		})

}

const showClientsOfDay = (req, res) => {
	
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	const values = Object.values(req.body)
	const value = [values[0].date]
	console.log(value)

	client.query('SELECT invoiceid, customerid, total, invoicedate::timestamp::date FROM invoice WHERE  invoicedate = $1', value)
	    .then(response => {
			res.json(response.rows)
			console.log("res")
			console.log(res)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
		})

}

const getRandomOfCertainGenre = (req, res) => {
	
	const { Client } = require('pg')
	const client = new Client(connectionData)
	client.connect()
	const values = Object.values(req.body)
	console.log('si entro aqui wey')
	console.log(values)
	client.query('SELECT trackid FROM track WHERE genreid = $1 ORDER BY RANDOM() LIMIT $2', values)
	    .then(response => {
			res.json(response.rows)
			console.log("res")
			console.log(res)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
		})

}


const getClients = (req, res) => {
	const { Client } = require('pg')
	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT * FROM client')
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
};
/*
SELECT * 
FROM bitacora as b
JOIN track as t
ON t.trackid = b.trackid
WHERE b.action_type_id = 0
ORDER BY b.created_at DESC 
LIMIT 10
*/


const getLastGenres = (req, res) => {
	const { Client } = require('pg')
	const client = new Client(connectionData)

	client.connect()
	client.query('SELECT count(*) as cuantas, genreid FROM (SELECT t.genreid FROM bitacora as b JOIN track as t ON t.trackid = b.trackid WHERE b.action_type_id = 0 ORDER BY b.created_at DESC LIMIT 10) as hola GROUP BY genreid' )
	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
			console.log(err)
	        client.end()
	    })
};

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
	client.query("SELECT track.trackid as trackid, track.name as trackname, artist.name as artistname, track.milliseconds, track.enlace FROM track INNER JOIN album ON track.albumid = album.albumid INNER JOIN artist ON album.artistid = artist.artistid INNER JOIN bitacora ON track.trackid = bitacora.trackid WHERE bitacora.id_username = $1 AND bitacora.action_type_id = 3",values)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/playSong', function(req, res){
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
	console.log("playing song")
	console.log(values)
	client.query("INSERT INTO bitacora(id, id_username, action_type_id, trackid) VALUES($1, $2, 4, $3)",values)

	    .then(response => {
	        res.json(response.rows)
	        client.end()
	    })
	    .catch(err => {
	        client.end()
	    })
});

app.post('/simulateSales', function(req, res){
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
	console.log('Este es el simulador de ventas')
	console.log(values)

	client.query("CALL simulateSales($1,$2,$3,$4,$5)",values)

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
	client.query('SELECT * FROM album JOIN track ON track.albumid = album.albumid WHERE album.title ILIKE $1',value)
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
app.get('/clients', getClients);
app.get('/last-genres',getLastGenres )
app.post('/show-client-of-day', showClientsOfDay);
app.post('/get-random-of-certain-genre', getRandomOfCertainGenre);
app.post('/total-sales-per-week', showTotalOfSalesPerWeek);
app.post('/artist-more-sales-in-range', artistsWithMoreSalesInRange);
app.post('/genres-more-sales-in-range', genresWithMoreSalesInRange);

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
