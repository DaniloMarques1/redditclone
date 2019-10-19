import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
const privateKey = "smdkndsndksndknskdnskdnskndksndknsdknsnds";

export default class UserController {
    public static async store(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const passWordHashed = await bcrypt.hash(String(password), 10);
        
        let user = await UserModel.findOne({ email });
        
        if (user) {
            return res.json({message: 'e-mail already taken'});
        }
        
        user = await UserModel.create({
            name,
            email,
            password: passWordHashed,
        });
        
        return res.json(user);
    }

    public static async auth(req: Request, res: Response) {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });
        
        if(user) {
            const match = await bcrypt.compare(String(password), user.password);
            const {id, name} = user;

            if(match) {
                const token = jsonwebtoken.sign({id, name, email}, privateKey);
                return res.json({token: token});
            }
        } 

        return res.status(404).json({message: "No user found"});
        

        
    }

}