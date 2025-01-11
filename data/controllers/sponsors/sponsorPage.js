const OurSponsors = require("../models/Sponsors");

module.exports = async (req, res) => {
    const sponsored = await OurSponsors.find({}).sort({ createdAt: -1 });
    res.render("sponsor", {
        title: "Sponsor MCWT",
        sponsored
    })
}