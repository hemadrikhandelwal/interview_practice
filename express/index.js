const express = require ('express');

const path = require('path');

const app = express();

const port = 3000;

let post = [
    {id:1, post:"Post 1"},
    {id:2, post:"Post 2"},
    {id:3, post:"Post 3"}]

app.get('/',(req,res)=>{
    res.json(post);
})

app.get('/about',(req,res)=>{
    res.send("about page")
})

app.listen(port,()=>console.log('Server is running'));