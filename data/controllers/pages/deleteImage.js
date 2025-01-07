// database
const deleteImageData = require('../models/Gallery')

module.exports = async (req, res) => {
    await deleteImageData.findByIdAndDelete(req.params.id)
    res.redirect('/gallery')
}