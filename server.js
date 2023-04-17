const express = require("express");
require("dotenv").config({ path: "./.env" });
const connectDB = require("./config/connectDB");
const Post = require("./model/post");

connectDB();
const app = express();

// Create New Post :
// const newPost = new Post({
//     title:"Tunisia",
//     description:"hello Nabeul..."
// })
// newPost.save().then(()=>console.log(newPost)).catch((err)=>console.log(err))

//Find All Posts :
const findPosts = async () => {
  try {
    const data = await Post.find({});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// findPosts();

// Find One Post with title & id :
const findOnePost = async () => {
  try {
    const query = { title: "Tunisia" };
    const id = "643d513e57a48938eee77887";
    // const data = await Post.findOne({_id:id})
    const data = await Post.findById(id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// findOnePost();

// Update Post :
// const update = async () => {
//   try {
//     const id = "643d513e57a48938eee77887";

//     // await Post.findOneAndUpdate({title:"Tunisia"}, {$set:{title:"Test"}})
//     await Post.findByIdAndUpdate(id, {$set:{title:"Test123"}})
//     console.log("post updated...");
//   } catch (error) {
//     console.log(error);
//   }
// };
// update();

const deletePost = new Promise((resolve, reject) => {
  const id = "643d513e57a48938eee77887";

  resolve(Post.findOneAndDelete({ _id: id }))
  reject("function failed...")
});

// deletePost    
// .then(console.log("Post Deleted..."))
// .catch((err) => console.log(err));

const PORT = process.env.PORT || 6011;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${PORT}`);
});
