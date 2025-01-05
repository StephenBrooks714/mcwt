const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EventsSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    imageUrl: String,
    eventUrl: String,
    description: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})
EventsSchema.index({ title: "text" });
const Events = mongoose.model('Events', EventsSchema);
module.exports = Events;