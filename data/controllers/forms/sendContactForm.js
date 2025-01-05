const nodemailer = require('nodemailer');
require("dotenv").config()
const ContactPerson = require("../models/ContactForm");

module.exports = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: "smtp.gmail.com",
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        tls : { rejectUnauthorized: false },
        secure: true,
    });

    const contact = await ContactPerson.find({}).limit(1).sort({ _id: -1 });

    const {from} = req.body
    const path = require("path");
    const mailDetails = {
        to: `${contact[0].email}`,
        from: from,
        envelope: {
            from: from, // used as MAIL FROM: address for SMTP
            to: `${contact[0].email}, Mailer <${contact[0].email}>`
        },
        replyTo: from,
        subject: "You got mail from your website",
        headers: {
            'Web Express': 'high'
        },
        date: new Date('2000-01-01 00:00:00'),
        html: `<p>${req.body.message}</p> 
                <h5>Sent From: ${req.body.from}</h5>
                <h5>My Phone: ${req.body.phone}</h5>
                <h5>Contact Me On: ${req.body.date}</h5>
                <h5>Sent From: ${req.body.name}</h5>`,
    };
    await transporter.sendMail(mailDetails, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/")
            console.log(info)
        }
    });
}