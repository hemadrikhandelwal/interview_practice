
let posts = [
    {id:1, post:"Post 1"},
    {id:2, post:"Post 2"},
    {id:3, post:"Post 3"}
]


export const getPosts = (req,res,next)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        res.status(200).json(posts.slice(0,limit));
    }else{
    res.status(200).json(posts);
    }
}

export const getPost=(req,res,next)=>{
    const id = parseInt(req.params.id)
    res.status(200).json(posts.filter((post)=> post.id === id));

}

export const createPost = (req,res,next)=>{
    const newPost = {
        id:posts.length+1,
        post:req.body.title
    }
    if(!newPost.post){
       return res.status(400).json({message:"Please include a title"})
    }
    posts.push(newPost);
    res.status(200).json(posts);
}

export const updatePost = (req,res,next)=>{
    const id = req.params.id;
    const post = posts.find((post)=>post.id==id);
    if(!post){
        const error = new Error(`A post with id: ${id} is not available `);
        return next(error);
    //    return res.status(404).json({message:'Id not found'})
    }
    post.post = req.body.title;
    res.status(200).json(posts);
}

export const deletePost = (req,res)=>{
   const id = Number(req.params.id);
    const post = posts.find((post)=>post.id==id);
    if(!post){
       return res.status(404).json({message:'Id not found'})
    }
    console.log(id)
    posts = posts.filter((post)=> post.id !== id);
    res.status(200).json(posts);
}



