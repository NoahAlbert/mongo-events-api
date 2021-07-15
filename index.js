const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const { createEvent } = import('./src/events.js')

const app = express()
app.use(express.json())

app.get('/events', createEvent)

app.get('/', (req,res) => res.send('🏠 HOMEPAGE 📄'))


app.listen(5000, () => console.log('Listening on port 5000'))