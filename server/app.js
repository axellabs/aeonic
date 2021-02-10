const express = require('express')
const app = express()
const port = 3006

require('dotenv').config()

const nano = require('nano')(process.env.DB_HOST)
nano.db.create('notes').then((data) => {
  console.log(data)
}).catch((err) => {
  console.log('Notes database already exists')
})

// Hello world, boilerplate to get the server started
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Database management
app.get('/databases', (req, res) => {
  res.send('Gets all of the databases')
})

app.get('/databases/:name', (req, res) => {
  try {
    nano.db.get(req.params.name)
    res.send('Returns the database ' + req.params.name)
  } catch (err) {}

})

app.post('/databases/:name', (req, res) => {
  try {
    nano.db.create(req.params.name)
    res.send('Creates a database with name')
  } catch (err){}
})

app.delete('/databases/:name', (req, res) => {
  try {
    nano.db.destroy(req.params.name)
    res.send('Deletes the database with name')
  } catch (err) {}
})

// Serves the app at the port, makes sure its running in the background
app.listen(port, () => {
  console.log(`Aeonic server is listening at http://127.0.0.1:${port}`)
})
