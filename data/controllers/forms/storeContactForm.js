const ContactFormDB = require('../models/ContactForm');

module.exports = async (req, res) => {
    await ContactFormDB.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/admin')
}