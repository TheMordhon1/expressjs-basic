const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
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