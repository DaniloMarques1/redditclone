import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import Config from '../config/config';
import { AuthUser } from '../interfaces/AuthUser';

export default class UserController {
    
    public static async index(req: Request, res: Response) {
        const users = await UserModel.find();

        return res.json(users);
    }
    
    public static async store(req: Request, res: Response) {
        const { nickName, name, email, password } = req.body;
        const passwordHashed = await bcrypt.hash(<string>password, 10);
        
        let user = await UserModel.findOne({ email });
        
        if (user) {
            return res.status(400).json({message: 'e-mail already taken'});
        }
        
        user = await UserModel.create({
            nickName,
            name,
            email,
            password: passwordHashed,
        });
        
        return res.json(user);
    }

    public static async auth(req: Request, res: Response) {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });

        if(user) {
            const match = await bcrypt.compare(<string>password, user.password);
            const {id, name} = user;

            if(match) {
                const token = jsonwebtoken.sign(<AuthUser>{id, name, email}, Config.privateKey());
                return res.json({token: token});
            }
        } 

        return res.status(401).json({message: "Email or password incorrect"});
    }

    public static async update(req: Request, res: Response) {
        const { token } = req.headers;
        const { email, name, password } = req.body;
        
        const UserAuth = Config.getUser(<string>token);
        const passwordHashed = await bcrypt.hash(password, 10);

        const user = await UserModel.findOneAndUpdate({_id: UserAuth.id}, {email, name, password: passwordHashed});

        return res.json(user);
    }

}
