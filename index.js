import express from "express";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let posts = []

app.get("/", (req, res)=>{
    const sortedPosts = [...posts].sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime)); // newest first
    const msg = req.query.msg || null
    res.render("index.ejs", { posts : sortedPosts,  msg : msg})
})

app.get("/new-post", (req, res)=>{
    res.render("new_post.ejs")
})

app.post("/create-post", (req, res)=>{
    const title = req.body["title"]
    const content = req.body["content"]
    const newId = uuidv4();
    posts.push({
        id: newId,
        createdTime: new Date().toISOString(),
        title: title,
        content: content
    })
    res.redirect("/")
})

app.get("/edit/:id", (req, res)=>{
    const post = posts.find(p => p.id === req.params.id)
    if (!post) return res.redirect("/?msg=Post+not+found.")
    res.render("edit_post.ejs", { post })
})

app.post("/edit/:id", (req, res)=>{
    const post = posts.find(p => p.id === req.params.id)
    if (!post) return res.redirect("/?msg=Post+not+found.")
    post["title"] = req.body["title"]
    post["content"] = req.body["content"]
    res.redirect("/?msg=Post+successfully+updated.")
})

app.post("/delete/:id", (req, res)=>{
    posts = posts.filter(p => p.id !== req.params.id)
    res.redirect("/?msg=Post+successfully+deleted.")
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})