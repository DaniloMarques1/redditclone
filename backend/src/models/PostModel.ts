import { Schema, model, Model } from 'mongoose';
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
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, {
    timestamps: true
});

export const PostModel = model<PostInterface>('Post', PostSchema);