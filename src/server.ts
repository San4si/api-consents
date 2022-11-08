import express,{Request, Response } from "express";
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api'
import consentRoutes from './routes/consent'


dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json());
//server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);
server.use(consentRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);
