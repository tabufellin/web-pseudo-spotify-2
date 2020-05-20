const doPost = (req, res, query) => {
	const { Client } = require('pg')
    const client = new Client(connectionData)
    client.connect()
    const value = Object.values(req.body)
	console.log(value)
    client.query(query,value)
        .then(response => {
			console.log(response)
			res.json(response.rows)
			console.log(res)
            client.end()
        })
        .catch(err => {
			console.log(err)
			client.end()
			
        })
}

export default doPost