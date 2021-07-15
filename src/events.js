const mongoose = require('mongoose')

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

exports.createEvent = (req, res) => {
    new Event(newEvent)
    .save()
    .then(res.send('Event Saved Successfully'))
    .catch(err => res.send(err))
}