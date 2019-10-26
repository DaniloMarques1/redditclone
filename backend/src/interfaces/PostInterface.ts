import { Document } from 'mongoose';
import { UserInterface } from '../interfaces/UserInterface';
import CategoryInterface from './CategoryInterface'

export default interface Post extends Document{
    title: string;
    category: CategoryInterface;
    content: string;
    user: UserInterface;
}