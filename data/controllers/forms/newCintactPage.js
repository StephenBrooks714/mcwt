const ContactInfo = require("../models/ContactForm");

module.exports = async (req, res) => {
    const contactUser = await ContactInfo.find().sort({ _id: -1 }).limit(10);
    res.render("newContact", {
        title: "Minutes page",
        contactUser
    })
}