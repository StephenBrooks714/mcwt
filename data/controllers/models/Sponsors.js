const mongoose = require("mongoose");
const Schema = mongoose.Schema

const SponsorSchema = new Schema ({
    title: String,
    link: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})

SponsorSchema.index({ title: "text" });
const Sponsors = mongoose.model('Sponsors', SponsorSchema);
module.exports = Sponsors;