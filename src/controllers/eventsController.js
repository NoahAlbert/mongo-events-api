const Event = require('../models/eventModel')

exports.getAllEvents = (req, res) => {
    Event
    .find()
    .then(allEvents => res.status(200).send(allEvents))
    .catch(err => res.send(err))
}