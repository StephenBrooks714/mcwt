const EventsDB = require("../models/Events");
module.exports = async (req, res) => {
    const eventsData = await EventsDB.find().limit(1).sort({ _id: -1 });
    res.render("index", {
        title: "Mom Can We Talk",
        eventsData
    })
}