const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

app.get('/', (req,res) => res.send('🏠 HOMEPAGE 📄'))


app.listen(5000, () => console.log('Listening on port 5000'))