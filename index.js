const express = require('express')
const router = require('./router')
const app = express()
const port = 3000
// const MyLog = (req, res, next) => {
// 	console.log('LOGGED')
// 	next()
// };
// app.use(MyLog);
app.use(router);
app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`)
})