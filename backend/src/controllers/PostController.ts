import { Request, Response } from 'express';
import { PostModel } from '../models/PostModel';
import Config from '../config/config';
import PostInterface from '../interfaces/PostInterface';

export default class PostController {
    public static async index(req: Request, res: Response) {
        PostModel.find().populate('user').populate('category').then((post) => {
            return res.json(post);
        });
        
    }

    public static async store(req: Request, res: Response) {
        const { token } = req.headers;
        const { title, content, category } = req.body;
        
        const user = Config.getUser(<string>token);
        const post = await PostModel.create({
            title,
            content,
            user: user.id,
            category
        });
        
        return res.json(post);
    }

    public static async destroy(req: Request, res: Response) {
        const { token } = req.headers;
        const { id } = req.params; // id do post
        const user = Config.getUser(<string>token);
        await PostModel.findById(id).populate('user').then(async (post)  => {
            if (post) {
                if (post.user.id !== user.id) {
                    return res.status(401).json({message: "Only who created the post can delete it"});
                }
        
                const deletedPost = await PostModel.findByIdAndDelete(id);
                return res.json(deletedPost);
        
            } else {
                return res.status(404).json({message: "Post not found"})
            }

        });
    
    }
}