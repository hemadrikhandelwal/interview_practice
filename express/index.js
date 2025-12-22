import express from 'express';
import post from './routes/posts.js';
import logger  from './middleware/logger.js';  
import errorHandler from './middleware/error.js'; 

const app = express();

const port = process.env.PORT;

//Body Parser
app.use(express.json());
app.use (express.urlencoded({extended:false}));
app.use(logger); 

app.use('/api/posts', post);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status =404 ;
    next(error);

})
app.use(errorHandler);





app.listen(port,()=>console.log(`Server is running at  ${port}`));