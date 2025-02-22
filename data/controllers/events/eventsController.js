const EventsData = require("../models/Events");

const eventsPage = async (req, res) => {
    const events = await EventsData.find();
    res.render('events', {
        title: 'Our upcoming and previous events',
        events
    });
}

const newEventPage = async (req, res) => {
    res.render('newEvent', {
        title: 'Create a new event'
    });
}

const storeEventAction = async (req, res) => {
    await EventsData.create({
        ...req.body,
        userid: req.session.userId
    }),
    res.redirect('/events')
}

const deleteEventData = async (req, res) => {
    await EventsData.findByIdAndDelete(req.params.id);
    res.redirect('/events');
}

module.exports = {
    eventsPage,
    newEventPage,
    storeEventAction,
    deleteEventData
}