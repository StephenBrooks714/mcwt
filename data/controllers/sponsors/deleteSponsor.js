const DeleteSponsorData = require("../models/Sponsors");

module.exports = async (req, res) => {
    await DeleteSponsorData.findByIdAndDelete(req.params.id);
    res.redirect("/sponsor");
};