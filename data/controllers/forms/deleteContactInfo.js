const deleteContactAdmin = require("../models/ContactForm");

module.exports = async (req, res) => {
    const id = req.params.id;
    await deleteContactAdmin.findByIdAndDelete(id);
    res.redirect("/admin");
}