// database
const deleteEvent = require('../models/Events')

module.exports = async (req, res) => {
    await deleteEvent.findByIdAndDelete(req.params.id)
    res.redirect('/events')
}