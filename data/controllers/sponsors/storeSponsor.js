const StoreSponsorData = require("../models/Sponsors");

module.exports = async (req, res) => {
    await StoreSponsorData.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/sponsor')
}