const memberProfiles = require('../models/Users');

module.exports = (req, res) => {
    memberProfiles.find({}, (err, profiles) => {
        if (err) {
            console.log(err);
        } else {
            res.render("profiles", {
                title: "All Profiles",
                profiles
            })
        }
    })
}