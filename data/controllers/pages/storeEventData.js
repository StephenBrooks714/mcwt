const StoreEvent = require("../models/Events");

module.exports = async (req, res) => {
    await StoreEvent.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/events')
}