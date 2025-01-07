const StoreImage = require("../models/Gallery");

module.exports = async (req, res) => {
    await StoreImage.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/gallery')
}