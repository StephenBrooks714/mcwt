const AllUsers = require("../models/Users");
const FlyerPostData = require("../models/FlyerPost");
const StoreFlyer = require("../models/FlyerPost");
const path = require('path');

const dashBoardPage = async (req, res) => {
    const users = await AllUsers.find({});
    const flyerPost = await FlyerPostData.find({});
    res.render("dashboard", {
        title: "Dashboard for managing content",
        users, flyerPost
    })
}

const newFlyerPost = (req, res) => {
    res.render("newFlyerPost", {
        title: "New Flyer Post"
    })
}

const storeFlyerPost = (req, res) => {
    let flyer = req.files.flyer;
    flyer.mv(path.resolve(__dirname, '..', '..', '..', 'src/public/uploads', flyer.name), async (error) => {
        await StoreFlyer.create({
            ...req.body,
            flyer: '/uploads/' + flyer.name,
            userid: req.session.userId
        })
        res.redirect('/dashboard')
    })
}

const deleteFlyerPost = async (req, res) => {
    await deleteFlyerPost.findByIdAndDelete(req.params.id)
    res.redirect("/dashboard");
}

module.exports = {
    dashBoardPage,
    newFlyerPost,
    storeFlyerPost,
    deleteFlyerPost
}