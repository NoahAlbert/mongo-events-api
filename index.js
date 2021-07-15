const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
app.use(express.json())

mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(console.log('connected to mongo'))
    .catch(err => console.log(err))

app.get('/events', (req, res) => {

})
app.get('/', (req,res) => res.send('🏠 HOMEPAGE 📄'))


app.listen(5000, () => console.log('Listening on port 5000'))