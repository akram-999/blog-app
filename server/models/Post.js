const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: false },
    desc: { type: String, required: true, unique: false },
    photo: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true },
    categories: { type: Array, required: false, unique: false },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);