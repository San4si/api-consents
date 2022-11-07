import { Request, Response, NextFunction} from 'express';

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
    
        let sucess = true;

        //fazer verificação de auth

        if(sucess){
            next();
        }else {
            res.status(403); //Not Authorized
            res.json({ error: 'Não autorizado' });
        }
    }
}