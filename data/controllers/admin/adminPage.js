const AllUsers = require("../models/Users");

module.exports = async (req, res) => {
    const users = await AllUsers.find({});
    res.render('admin', {
        title: 'Admin Panel',
        users
    })
}