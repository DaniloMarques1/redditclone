import { Schema, model, Model } from 'mongoose';
import CategoryInterface from '../interfaces/CategoryInterface';

const CategorySchema = new Schema({
    name: String
});


export const CategoryModel: Model<CategoryInterface> = model<CategoryInterface>('Category', CategorySchema)