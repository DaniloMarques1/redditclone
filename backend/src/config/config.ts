import { AuthUser } from '../interfaces/AuthUser';
import jsonwebtoken from 'jsonwebtoken';

export default class Config {
    public static privateKey(): string {
        return 'smdkndsndksndknskdnskdnskndksndknsdknsnds'
    }

    public static getUser(token: string): AuthUser {
        const user = <AuthUser>jsonwebtoken.verify(<string>token, this.privateKey());

        return user;
    }

}