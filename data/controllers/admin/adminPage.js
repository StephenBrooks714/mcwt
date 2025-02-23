const AllUsers = require("../models/Users");
const FlyerPostData = require("../models/FlyerPost");
const StoreFlyer = require("../models/FlyerPost");
const path = require('path');
const ContactMethod = require("../models/ContactForm");

module.exports = async (req, res) => {
    const users = await AllUsers.find({});
    const flyerPost = await FlyerPostData.find({});
    const contact = await ContactMethod.find({});
    res.render('admin', {
        title: 'Admin Panel',
        users, contact, flyerPost
    })
}