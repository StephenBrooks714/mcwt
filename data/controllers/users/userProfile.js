const profileData = require('../models/Users');

module.exports = async (req, res) => {
    const profile = await profileData.findById(req.params.id);
    res.render("profile", {
        title: "Your Personal Profile",
        profile
    });
}