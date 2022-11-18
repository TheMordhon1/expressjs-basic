const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello World!')
})

router.get('/user/:id', (req, res) => {
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

router.get('/user', (req, res) => {
	const name = req.query.name;
	const age = req.query.age;
	res.send(name + " " + age);
})

router.post('/post', (req, res) => {
	res.send('Got a POST request')
})

router.put('/put', (req, res) => {
	res.send('Got a PUT request at /user')
})

router.delete('/delete', (req, res) => {
	res.send('Got a DELETE request at /user')
})

module.exports = router