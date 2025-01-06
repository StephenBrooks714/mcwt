const EventsDB = require('../models/Events');
// fetch the data from url on display it on events.ejs page
module.exports = async (req, res) => {
    const events = await EventsDB.find().limit(5).sort({ _id: -1 });
    res.render("events", {
        title: "Events",
        events
    })
}