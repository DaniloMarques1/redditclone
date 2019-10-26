import { model, Schema, Model } from 'mongoose';
import CommentInterface from '../interfaces/CommentInterface';

const CommentSchema = new Schema({
    comment: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export const CommentModel: Model<CommentInterface> = model<CommentInterface>('Comment', CommentSchema);