import { Schema, model } from 'mongoose';
import { UserInterface }  from '../interfaces/UserInterface'

const UserSchema = new Schema({
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String
});

export default model<UserInterface>('User', UserSchema);