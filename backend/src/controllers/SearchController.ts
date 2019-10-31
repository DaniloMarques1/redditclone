import {Request, Response} from 'express';
import { PostModel } from '../models/PostModel';

export default class SearchController{
    public static async getPostFromTitle(req: Request, res: Response) {
        console.log("Opa");
        const { title } = req.query;
        console.log(title);
        const post = await PostModel.find({"title": title}).populate('user');


        return res.json(post);

    }
}
