const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

// const { createEvent } = import('./src/events.js')

const app = express()
app.use(express.json())

mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(console.log('connected to mongo'))
    .catch(err => console.log(err))

const eventSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    fee: String,
    attendees: Array
})

const Event = mongoose.model('Event', eventSchema)

const newEvent = {
    title: "Boca Beach Cleanup",
    date: "2021-08-02",
    description: "Cleanup the beaches of Boca Raton",
    fee: "Free",
    attendees: ["Christian", "Mia", "Noah", "Emily", "Zack"]
}

function createEvent(req, res){
    new Event(newEvent)
    .save()
    .then(console.log('Event Saved Successfully'))
    .catch(err => console.log(err))
}
app.get('/events', (req, res) =>{
    createEvent()
    res.send('created successfully')
})
app.get('/', (req,res) => res.send('🏠 HOMEPAGE 📄'))


app.listen(5000, () => console.log('Listening on port 5000'))