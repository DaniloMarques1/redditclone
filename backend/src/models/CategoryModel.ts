import { Schema, model } from 'mongoose';
import CategoryInterface from '../interfaces/CategoryInterface';

const CategorySchema = new Schema({
    name: String
});

export default model<CategoryInterface>('Category', CategorySchema);