const HomeEventsData = require("../models/Events");

const homePage = async (req, res) => {
    const events = await HomeEventsData.find().sort({ _id: -1 }).limit(2);
    res.render("index", {
        title: "Mom Can We Talk - Home Page",
        events
    })
}

const aboutPage = (req, res) => {
    res.render("about", {
        title: "Mom Can We Talk - About Page"
    })
}

const privacyPage = (req, res) => {
    res.render("privacyPolicy", {
        title: "Our privacy policy"
    })
}

const termsPage = (req, res) => {
    res.render("termsConditions", {
        title: "Terms & Conditions"
    })
}

const sponsorsPage = (req, res) => {
    res.render("sponsors", {
        title: "Mom Can We Talk - Sponsors Page"
    })
}

const contactPage = (req, res) => {
    res.render("contact", {
        title: "Mom Can We Talk - Contact Page"
    })
}

const blogsPage = (req, res) => {
    res.render("blogs", {
        title: "Mom Can We Talk - Blogs Page"
    })
}

const spotifyPage = (req, res) => {
    res.render("spotify", {
        title: "Mom Can We Talk - Spotify Page"
    })
}

module.exports = {
    homePage,
    aboutPage,
    contactPage,
    privacyPage,
    termsPage,
    sponsorsPage,
    blogsPage,
    spotifyPage
}