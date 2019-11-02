import { Request, Response } from 'express';
import { CommentModel } from '../models/CommentModel';
import Config from '../config/config';
import { PostModel } from '../models/PostModel';

export default class CommentController {
    public static async store(req: Request, res: Response) {
        const { token } = req.headers;
        const { comment } = req.body;
        const { id } = req.params;
        const user = Config.getUser(<string>token);

        const Comment = await CommentModel.create({
            comment,
            user: user.id
        });

        const post = await PostModel.findById(id);

        if (post) {
            post.comments.push(Comment);
            await post.save();
            return res.json(post);
        }

        return res.status(404).json({message: "Post not found"});
    }
}