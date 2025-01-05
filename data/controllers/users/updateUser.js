const updateUser = require('../models/Users');

module.exports = async (req, res) => {
    const user = await updateUser(req.params.id, req.body);
    res.json(user);
}