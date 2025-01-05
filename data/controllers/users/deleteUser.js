const deleteUserInfo = require('../models/Users')

module.exports = async (req, res) => {
    await deleteUserInfo.findByIdAndDelete(req.params.id)
    req.session.destroy()
    res.redirect('/')
}