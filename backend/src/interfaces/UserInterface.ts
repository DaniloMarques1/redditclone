import { Document } from 'mongoose';

export interface UserInterface extends Document{
    nickName: string;
    name: string;
    email: string;
    password: string;
}