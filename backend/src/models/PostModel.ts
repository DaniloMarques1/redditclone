import { Schema, model } from 'mongoose';
import PostInterface from '../interfaces/PostInterface';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 70
    },
    content: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


export default model<PostInterface>('Post', PostSchema);