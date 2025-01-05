const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ArticlePostSchema = new Schema ({
    title: String,
    category: String,
    imageUrl: String,
    summary: {
        type: String,
        required: false
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    postText: {
        type: String,
        required: true
    },
    postText2: {
        type: String,
        required: false
    },
    postText3: {
        type: String,
        required: false
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})

ArticlePostSchema.index({ title: "text" });
const ArticlePost = mongoose.model('ArticlePost', ArticlePostSchema);
module.exports = ArticlePost;