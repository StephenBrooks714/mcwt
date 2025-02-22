const deleteUserInfo = require('../models/Users')

module.exports = async (req, res) => {
    await deleteUserInfo.findByIdAndDelete(req.params.id)
    res.redirect('/dashboard')
}