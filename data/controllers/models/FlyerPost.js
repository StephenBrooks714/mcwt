const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FlyerPostSchema = new Schema ({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    title: {
        type: Array,
        required: true
    },
    flyer: {
        type: Array,
        required: true
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})
FlyerPostSchema.index({ title: "text" });
const FlyerPost = mongoose.model('FlyerPost', FlyerPostSchema);
module.exports = FlyerPost;