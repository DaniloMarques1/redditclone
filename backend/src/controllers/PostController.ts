import { Request, Response } from 'express';
import PostModel from '../models/PostModel';
import { AuthUser } from '../interfaces/AuthUser';
import jsonwebtoken from 'jsonwebtoken';
import Config from '../config/config';

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
}