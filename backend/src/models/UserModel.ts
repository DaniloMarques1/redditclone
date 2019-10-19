import { Schema, model } from 'mongoose';
import { UserInterface }  from '../interfaces/UserInterface'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true
    },
    password: String
});

export default model<UserInterface>('User', UserSchema);