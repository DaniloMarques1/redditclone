import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

class App {
    private app: express.Application;
    
    constructor() {
        this.app = express();
        this.database();
        this.middlewares();

    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(routes);
    }

    public getApllication() {
        return this.app;
    }
    
    private database() {
        mongoose.connect('mongodb://localhost:27017/reddit', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
    }
    

}

export default new App().getApllication();