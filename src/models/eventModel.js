const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    fee: String,
    attendees: Array
})

module.exports = mongoose.model('Event', EventSchema)
