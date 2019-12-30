import { CategoryModel } from '../models/CategoryModel';
import { Request, Response } from 'express';

export default class CategoryController {
    public static async index(req: Request, res:Response) {
        const categories = await CategoryModel.find();
        
        return res.json(categories);
    }

    public static async store(req: Request, res:Response) {
        const categories = [
            { 
                name: 'programming'
            },
            { 
                name: 'general'
            },
            { 
                name: 'tv series'
            },
            { 
                name: 'movies'
            },
            { 
                name: 'travel'
            },
            { 
                name: 'food'
            },
        ];
        const category = await CategoryModel.create(...categories);
        
        return res.json(category);

    }
}