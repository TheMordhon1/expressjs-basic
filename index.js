const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
	const id = parseInt(req.params.id);
	if (id === 1) {
		const user = {
			id: 1,
			name: "Romdon",
			age: 26,
		}
		res.send(user)
	} else {
		const user = {
			id: 2,
			name: "Dian",
			age: 26,
		}
		res.send(user)
	}
})

app.get('/user', (req, res) => {
	const name = req.query.name;
	const age = req.query.age;
	res.send(name + " " + age);
})

app.post('/post', (req, res) => {
	res.send('Got a POST request')
})

app.put('/put', (req, res) => {
	res.send('Got a PUT request at /user')
})

app.delete('/delete', (req, res) => {
	res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`)
})