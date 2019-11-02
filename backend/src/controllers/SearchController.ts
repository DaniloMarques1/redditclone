import {Request, Response} from 'express';
import { PostModel } from '../models/PostModel';


export default class SearchController{
    public static async getPostFromTitle(req: Request, res: Response) {
        const { title } = req.query;
        const post = await PostModel.find({"title": title}).populate({path: 'user', select: 'nickName'}).populate({path: 'comments', populate: {path: 'user', select: 'name'}});

        return res.json(post);

    }

    public static async getPostFromCategory(req: Request, res: Response) {
        const { category } = req.query;
        const post = await PostModel.find({category}).populate({path: 'user', select: 'nickName'}).populate({path: 'comments', populate: {path: 'user', select: 'name'}});
        console.log(post);
        return res.json(post);
    }
}
