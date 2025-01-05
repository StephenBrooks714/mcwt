const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BoardMemberSchema = new Schema ({
    memberName: String,
    position: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    bio: String,
    imageUrl: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})
BoardMemberSchema.index({ memberName: "text" });
const BoardMember = mongoose.model('BoardMember', BoardMemberSchema);
module.exports = BoardMember;