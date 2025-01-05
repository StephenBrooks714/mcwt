const AllUsers = require("../models/Users");
const ContactMethod = require("../models/ContactForm");

module.exports = async (req, res) => {
    const users = await AllUsers.find({});
    const contact = await ContactMethod.find({});
    res.render('admin', {
        title: 'Admin Panel',
        users, contact
    })
}