const express = require('express')
const app = express()
const port = 1518

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/drive', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	console.log(req.query,req.body);
	res.send("I'm Driving!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org/${port}`)
})