import CategoryModel from '../models/CategoryModel';
import { Request, Response } from 'express';

export default class CategoryController {
    public static async index(req: Request, res:Response) {
        const categories = await CategoryModel.find();

        return res.json(categories);
    }

    public static async store(req: Request, res:Response) {
        const { name } = req.body;
        const category = await CategoryModel.create({
            name
        });

        return res.json(category);

    }
}