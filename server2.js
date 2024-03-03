const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
	res.send('Do epic shit')
})
app.listen(8000)
