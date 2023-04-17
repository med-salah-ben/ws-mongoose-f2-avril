const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = model("Posts", postSchema);

module.exports = Post;
