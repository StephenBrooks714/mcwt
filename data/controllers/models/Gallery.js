const mongoose = require("mongoose");
const Schema = mongoose.Schema

const GallerySchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    image: Array,
    datePosted:{
        type: Date,
        default: new Date()
    },
})
GallerySchema.index({ title: "text" });
const Gallery = mongoose.model('Gallery', GallerySchema);
module.exports = Gallery;