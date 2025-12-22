import express from 'express';
import {  createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postController.js';
const router = express.Router();





// GET all posts
router.get('/',getPosts);
router.get('/:id',getPost)
router.post('/',createPost)
//Update post
router.put('/:id',updatePost)
//Delete Post
router.delete('/:id',deletePost)

export default router;
