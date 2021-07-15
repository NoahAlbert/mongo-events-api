const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
app.use(express.json())

mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
    console.log('Connected to mongo')
    app.listen(5000, () => console.log('Listening on port 5000'))
    })    
    .catch(err => console.log(err))

const eventRoutes = require('./src/routes/eventsRoutes')
app.use(eventRoutes)


app.get('/', (req,res) => res.send('🏠 HOMEPAGE 📄'))