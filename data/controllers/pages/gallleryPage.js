const GalleryInfo = require("../models/Gallery");

module.exports = async (req, res) => {
    const galleryData = await GalleryInfo.find().sort({ _id: -1 });
    res.render("gallery", {
        title: "MCWT Gallery",
        galleryData,
    });
};