import { Document } from 'mongoose';
import { UserInterface } from './UserInterface';

export default interface Comment extends Document {
    comment: string;
    user: UserInterface;
}